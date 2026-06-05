"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type MortgageType =
  | "First Time Buyer"
  | "Remortgage"
  | "Buy to Let"
  | "Self Employed"
  | "Expat"
  | "Protection"
  | "";

const MORTGAGE_TYPES: { label: MortgageType; icon: string }[] = [
  { label: "First Time Buyer", icon: "🏠" },
  { label: "Remortgage", icon: "🔄" },
  { label: "Buy to Let", icon: "🏢" },
  { label: "Self Employed", icon: "💼" },
  { label: "Expat", icon: "✈️" },
  { label: "Protection", icon: "🛡️" },
];

function formatGBP(val: string) {
  const n = parseInt(val.replace(/,/g, ""), 10);
  if (isNaN(n)) return "";
  return n.toLocaleString("en-GB");
}

export default function LeadForm() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [mortgageType, setMortgageType] = useState<MortgageType>("");
  const [propertyValue, setPropertyValue] = useState("");
  const [deposit, setDeposit] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  // LTV calculation
  const pvNum = parseInt(propertyValue.replace(/,/g, ""), 10);
  const depNum = parseInt(deposit.replace(/,/g, ""), 10);
  const ltv =
    !isNaN(pvNum) && !isNaN(depNum) && pvNum > 0 && depNum >= 0
      ? Math.max(0, Math.round(((pvNum - depNum) / pvNum) * 100))
      : null;

  function ltvColour(ltv: number) {
    if (ltv <= 75) return "bg-green-500";
    if (ltv <= 85) return "bg-gold-500";
    return "bg-red-500";
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!consent) {
      setError("Please tick the consent box to continue.");
      return;
    }
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mortgageType,
          propertyValue,
          deposit,
          ltv: ltv !== null ? `${ltv}%` : "",
          name,
          phone,
          email,
        }),
      });
      if (!res.ok) throw new Error("Server error");
      router.push("/thank-you");
    } catch {
      setError("Something went wrong — please try again or call us on 0844 884 9748.");
      setSubmitting(false);
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 text-gray-900 w-full max-w-md mx-auto">
      {/* Progress */}
      <div className="flex items-center gap-2 mb-6">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-2 flex-1 last:flex-none">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 transition-colors ${
                step >= s ? "bg-green-800 text-white" : "bg-gray-200 text-gray-500"
              }`}
            >
              {s}
            </div>
            {s < 3 && (
              <div
                className={`h-0.5 flex-1 transition-colors ${
                  step > s ? "bg-green-800" : "bg-gray-200"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step 1 — Mortgage type */}
      {step === 1 && (
        <div>
          <h3 className="text-lg font-bold text-green-900 mb-1">What type of mortgage?</h3>
          <p className="text-sm text-gray-500 mb-4">Select the option that best describes your situation.</p>
          <div className="grid grid-cols-2 gap-3">
            {MORTGAGE_TYPES.map(({ label, icon }) => (
              <button
                key={label}
                type="button"
                onClick={() => {
                  setMortgageType(label);
                  setStep(2);
                }}
                className={`flex flex-col items-center gap-1 p-4 rounded-xl border-2 text-sm font-medium transition-all hover:border-green-600 hover:bg-green-50 ${
                  mortgageType === label
                    ? "border-green-700 bg-green-50 text-green-800"
                    : "border-gray-200 text-gray-700"
                }`}
              >
                <span className="text-2xl">{icon}</span>
                <span className="text-center leading-tight">{label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2 — Property value + deposit */}
      {step === 2 && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setStep(3);
          }}
        >
          <h3 className="text-lg font-bold text-green-900 mb-1">Property details</h3>
          <p className="text-sm text-gray-500 mb-4">
            Mortgage type: <span className="text-green-700 font-semibold">{mortgageType}</span>
          </p>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Property value (£)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium">£</span>
                <input
                  type="text"
                  inputMode="numeric"
                  required
                  value={propertyValue}
                  onChange={(e) => setPropertyValue(formatGBP(e.target.value))}
                  placeholder="400,000"
                  className="w-full pl-7 pr-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Deposit / equity (£)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium">£</span>
                <input
                  type="text"
                  inputMode="numeric"
                  required
                  value={deposit}
                  onChange={(e) => setDeposit(formatGBP(e.target.value))}
                  placeholder="80,000"
                  className="w-full pl-7 pr-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
                />
              </div>
            </div>

            {/* LTV calculator */}
            {ltv !== null && (
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Loan to Value (LTV)</span>
                  <span
                    className={`text-sm font-bold px-2 py-0.5 rounded-full text-white ${ltvColour(ltv)}`}
                  >
                    {ltv}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all ${ltvColour(ltv)}`}
                    style={{ width: `${Math.min(ltv, 100)}%` }}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  {ltv <= 75
                    ? "Excellent — access to the most competitive rates."
                    : ltv <= 85
                    ? "Good — wide lender choice available."
                    : ltv <= 95
                    ? "Higher LTV — some lenders available, specialist advice recommended."
                    : "Please check figures — LTV appears very high."}
                </p>
              </div>
            )}
          </div>

          <div className="flex gap-3 mt-6">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              Back
            </button>
            <button
              type="submit"
              className="flex-1 bg-green-800 hover:bg-green-700 text-white py-3 rounded-lg text-sm font-semibold transition-colors"
            >
              Continue
            </button>
          </div>
        </form>
      )}

      {/* Step 3 — Contact details */}
      {step === 3 && (
        <form onSubmit={handleSubmit}>
          <h3 className="text-lg font-bold text-green-900 mb-1">Your details</h3>
          <p className="text-sm text-gray-500 mb-4">Free advice — we&apos;ll call you within 2 hours.</p>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full name *</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone number *</label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="07700 900000"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email address *</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
              />
            </div>
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="consent"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 w-4 h-4 accent-green-800"
              />
              <label htmlFor="consent" className="text-xs text-gray-600 leading-relaxed">
                I agree to be contacted about my mortgage enquiry. I understand initial advice is free and without
                obligation. We will not share your details with third parties.
              </label>
            </div>
          </div>

          {error && (
            <p className="text-red-600 text-sm mt-3">{error}</p>
          )}

          <div className="flex gap-3 mt-6">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={submitting}
              className="flex-1 bg-gold-500 hover:bg-gold-400 text-green-900 py-3 rounded-lg text-sm font-bold transition-colors disabled:opacity-60"
            >
              {submitting ? "Sending..." : "Get Free Advice"}
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-3 text-center">
            We typically respond within 2 hours during office hours.
          </p>
        </form>
      )}
    </div>
  );
}
