"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type MortgageType = "First Time Buyer" | "Remortgage" | "Buy to Let" | "Self Employed" | "Expat" | "Protection" | "";

const MORTGAGE_TYPES: { label: MortgageType; icon: string; desc: string }[] = [
  { label: "First Time Buyer", icon: "🏠", desc: "Getting on the property ladder" },
  { label: "Remortgage",       icon: "🔄", desc: "Switch to a better rate" },
  { label: "Buy to Let",       icon: "🏢", desc: "Investment property finance" },
  { label: "Self Employed",    icon: "💼", desc: "Flexible income assessment" },
  { label: "Expat",            icon: "✈️", desc: "International buyers & movers" },
  { label: "Protection",       icon: "🛡️", desc: "Life cover & income protection" },
];

const UK_PHONE_RE = /^(\+44\s?|0)(7\d{3}|\d{4})\s?\d{3}\s?\d{3,4}$/;
const EMAIL_RE    = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function fmt(n: number) {
  return "£" + Math.round(n).toLocaleString("en-GB");
}

interface Errors {
  propertyValue?: string;
  deposit?: string;
  employment?: string;
  name?: string;
  phone?: string;
  email?: string;
}

export default function LeadForm() {
  const router = useRouter();
  const [step, setStep]               = useState(1);
  const [mortgageType, setMortgageType] = useState<MortgageType>("");
  const [propertyValue, setPropertyValue] = useState(0);
  const [deposit, setDeposit]         = useState(0);
  const [employment, setEmployment]   = useState("");
  const [name, setName]               = useState("");
  const [phone, setPhone]             = useState("");
  const [email, setEmail]             = useState("");
  const [consent, setConsent]         = useState(false);
  const [submitting, setSubmitting]   = useState(false);
  const [errors, setErrors]           = useState<Errors>({});

  // Live LTV
  const loanAmount = Math.max(0, propertyValue - deposit);
  const ltv        = propertyValue > 0 ? Math.round((loanAmount / propertyValue) * 100) : 0;
  const ltvColour  = ltv <= 75 ? "bg-green-600" : ltv <= 85 ? "bg-amber-500" : "bg-red-500";
  const ltvText    = ltv <= 75 ? "text-green-700" : ltv <= 85 ? "text-amber-600" : "text-red-600";
  const ltvMsg     = ltv <= 75 ? "Excellent — access to the most competitive rates."
                   : ltv <= 85 ? "Good — wide lender choice available."
                   : ltv <= 95 ? "Higher LTV — specialist advice recommended."
                   : "Please check your figures.";

  // ── Validators ─────────────────────────────────────────────
  function validateStep2(): boolean {
    const e: Errors = {};
    if (!propertyValue || propertyValue < 50000)
      e.propertyValue = "Please enter a property value of at least £50,000";
    if (!deposit || deposit < 1)
      e.deposit = "Please enter a deposit amount";
    else if (deposit >= propertyValue)
      e.deposit = "Deposit must be less than the property value";
    else if (propertyValue > 0 && deposit / propertyValue < 0.05)
      e.deposit = "Minimum deposit is 5% of the property value";
    if (!employment)
      e.employment = "Please select your employment status";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function validateStep3(): boolean {
    const e: Errors = {};
    if (!name.trim() || name.trim().split(/\s+/).length < 2)
      e.name = "Please enter your first and last name";
    if (!UK_PHONE_RE.test(phone.replace(/\s/g, "")))
      e.phone = "Please enter a valid UK phone number";
    if (!EMAIL_RE.test(email))
      e.email = "Please enter a valid email address";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  // ── Submit ──────────────────────────────────────────────────
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validateStep3() || !consent) return;
    setSubmitting(true);
    try {
      await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mortgageType,
          propertyValue: fmt(propertyValue),
          deposit: fmt(deposit),
          ltv: propertyValue > 0 ? `${ltv}%` : "",
          employment,
          name,
          phone,
          email,
        }),
      });
      router.push("/thank-you");
    } catch {
      setSubmitting(false);
    }
  }

  const inputClass = (err?: string) =>
    `w-full px-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-700 transition-colors ${err ? "border-red-400 bg-red-50" : "border-gray-200"}`;

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 text-gray-900 w-full max-w-md mx-auto">

      {/* Progress */}
      <div className="mb-5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-green-900 uppercase tracking-widest">Step {step} of 3</span>
          <span className="text-xs text-gray-400">{["Mortgage Type", "Property Details", "Your Details"][step - 1]}</span>
        </div>
        <div className="flex gap-1.5">
          {[1, 2, 3].map(s => (
            <div key={s} className={`flex-1 h-1 rounded-full transition-colors ${s <= step ? "bg-green-700" : "bg-gray-200"}`} />
          ))}
        </div>
      </div>

      {/* ── STEP 1 ── */}
      {step === 1 && (
        <div>
          <h3 className="text-lg font-bold text-green-900 mb-1">What type of mortgage?</h3>
          <p className="text-sm text-gray-500 mb-4">Select the option that best describes your situation.</p>
          <div className="grid grid-cols-2 gap-3 mb-5">
            {MORTGAGE_TYPES.map(({ label, icon, desc }) => (
              <button key={label} type="button"
                onClick={() => { setMortgageType(label); setStep(2); }}
                className={`flex flex-col items-start gap-2 p-4 rounded-xl border-2 text-left transition-all ${
                  mortgageType === label ? "border-green-700 bg-green-50" : "border-gray-200 hover:border-green-500 hover:bg-green-50/50"
                }`}
              >
                <span className="text-2xl">{icon}</span>
                <div>
                  <p className="font-semibold text-sm text-green-900">{label}</p>
                  <p className="text-xs text-gray-500 leading-snug mt-0.5">{desc}</p>
                </div>
              </button>
            ))}
          </div>
          {/* Adviser note */}
          <div className="flex items-start gap-3 bg-green-50 rounded-xl p-3 border border-green-100">
            <img src="/roger-iyamu.JPG" alt="Roger Cooper" className="w-10 h-10 rounded-full object-cover object-top flex-shrink-0 border-2 border-white shadow-sm" />
            <div>
              <p className="text-xs text-green-800 italic leading-relaxed">"Select your mortgage type and I'll guide you through the rest. All advice is free and without obligation."</p>
              <p className="text-xs font-semibold text-green-900 mt-1">— Roger Cooper, CeMAP</p>
            </div>
          </div>
        </div>
      )}

      {/* ── STEP 2 ── */}
      {step === 2 && (
        <div>
          <button type="button" onClick={() => setStep(1)} className="flex items-center gap-1 text-xs text-gray-500 hover:text-green-800 mb-4 transition-colors">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Back
          </button>
          <h3 className="text-lg font-bold text-green-900 mb-1">Property details</h3>
          <p className="text-sm text-gray-500 mb-4">Approximate figures are fine — we'll work out the details together.</p>

          <div className="space-y-4">
            {/* Property value */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Property value (£)</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium">£</span>
                <input type="number" min={50000} max={10000000} step={5000} placeholder="400000"
                  className={`w-full pl-8 pr-4 py-3 border rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-green-700 transition-colors ${errors.propertyValue ? "border-red-400 bg-red-50" : "border-gray-200"}`}
                  value={propertyValue || ""}
                  onChange={e => setPropertyValue(parseInt(e.target.value) || 0)} />
              </div>
              {errors.propertyValue && <p className="text-xs text-red-500 mt-1">{errors.propertyValue}</p>}
            </div>

            {/* Deposit */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Deposit / equity (£)</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium">£</span>
                <input type="number" min={0} step={5000} placeholder="80000"
                  className={`w-full pl-8 pr-4 py-3 border rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-green-700 transition-colors ${errors.deposit ? "border-red-400 bg-red-50" : "border-gray-200"}`}
                  value={deposit || ""}
                  onChange={e => setDeposit(parseInt(e.target.value) || 0)} />
              </div>
              {errors.deposit && <p className="text-xs text-red-500 mt-1">{errors.deposit}</p>}
            </div>

            {/* Live LTV */}
            {propertyValue > 0 && deposit > 0 && deposit < propertyValue && (
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-0.5">Mortgage amount</p>
                    <p className="text-2xl font-extrabold text-green-900">{fmt(loanAmount)}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-0.5">LTV ratio</p>
                    <p className={`text-2xl font-extrabold ${ltvText}`}>{ltv}%</p>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div className={`h-2 rounded-full transition-all ${ltvColour}`} style={{ width: `${Math.min(ltv, 100)}%` }} />
                </div>
                <p className="text-xs text-gray-500">{ltvMsg}</p>
              </div>
            )}

            {/* Employment */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Employment status</label>
              <select value={employment} onChange={e => setEmployment(e.target.value)}
                className={`w-full px-4 py-3 border rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-green-700 transition-colors ${errors.employment ? "border-red-400" : "border-gray-200"}`}>
                <option value="">Select your employment status</option>
                <option value="Employed (PAYE)">Employed (PAYE)</option>
                <option value="Self-employed">Self-employed</option>
                <option value="Contractor / Freelance">Contractor / Freelance</option>
                <option value="Company Director">Company Director</option>
                <option value="Retired">Retired</option>
                <option value="Other">Other</option>
              </select>
              {errors.employment && <p className="text-xs text-red-500 mt-1">{errors.employment}</p>}
            </div>
          </div>

          <button type="button" onClick={() => { if (validateStep2()) setStep(3); }}
            className="mt-6 w-full bg-green-800 hover:bg-green-700 text-white py-3.5 rounded-xl text-sm font-bold transition-colors flex items-center justify-center gap-2">
            Continue
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
          <p className="text-xs text-gray-400 mt-3 text-center flex items-center justify-center gap-1">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            Your data is secure and will not be shared
          </p>
        </div>
      )}

      {/* ── STEP 3 ── */}
      {step === 3 && (
        <form onSubmit={handleSubmit} noValidate>
          <button type="button" onClick={() => setStep(2)} className="flex items-center gap-1 text-xs text-gray-500 hover:text-green-800 mb-4 transition-colors">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Back
          </button>
          <h3 className="text-lg font-bold text-green-900 mb-1">Your contact details</h3>
          <p className="text-sm text-gray-500 mb-4">Free initial advice — Roger will call you within 2 hours.</p>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full name *</label>
              <input type="text" placeholder="e.g. Jane Smith"
                className={inputClass(errors.name)}
                value={name} onChange={e => setName(e.target.value)} />
              {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone *</label>
                <input type="tel" placeholder="07700 900000"
                  className={inputClass(errors.phone)}
                  value={phone} onChange={e => setPhone(e.target.value)} />
                {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email *</label>
                <input type="email" placeholder="jane@email.com"
                  className={inputClass(errors.email)}
                  value={email} onChange={e => setEmail(e.target.value)} />
                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
              </div>
            </div>

            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" checked={consent} onChange={e => setConsent(e.target.checked)}
                className="mt-0.5 w-4 h-4 accent-green-800 cursor-pointer" />
              <span className="text-xs text-gray-500 leading-relaxed">
                I consent to Mortgage Adviser London contacting me about mortgage services. Initial advice is free and without obligation. View our <a href="/privacy-policy" className="underline text-green-700">Privacy Policy</a>. *
              </span>
            </label>
          </div>

          <button type="submit" disabled={submitting || !consent}
            className="mt-5 w-full bg-gold-500 hover:bg-gold-400 disabled:opacity-50 text-green-900 py-4 rounded-xl text-sm font-bold transition-colors flex items-center justify-center gap-2">
            {submitting
              ? <><svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>Sending…</>
              : "Get Free Advice →"}
          </button>
          <p className="text-xs text-gray-400 mt-3 text-center">FCA Regulated · No upfront fees · Response within 2 hours</p>
        </form>
      )}
    </div>
  );
}
