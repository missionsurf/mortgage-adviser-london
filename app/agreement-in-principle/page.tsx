import type { Metadata } from "next";
import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import RiskWarning from "@/components/RiskWarning";

export const metadata: Metadata = {
  title: "Agreement in Principle London | Get Your AIP from a CeMAP Adviser",
  description:
    "Get an Agreement in Principle (AIP) from an independent CeMAP qualified mortgage adviser in London. Soft credit check, typically within 24 hours. FCA regulated, 90+ lenders.",
  alternates: { canonical: "https://www.mortgageadviser.london/agreement-in-principle" },
  openGraph: {
    title: "Agreement in Principle London | Roger Cooper CeMAP",
    description: "Get an Agreement in Principle quickly from an independent mortgage adviser — whole-of-market, soft credit check, typically within 24 hours.",
    url: "https://www.mortgageadviser.london/agreement-in-principle",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is an Agreement in Principle?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An Agreement in Principle (AIP), also called a Decision in Principle or Mortgage in Principle, is a written statement from a lender indicating that, subject to a full mortgage application and valuation, they are likely to lend you up to a specified amount. It is not a formal mortgage offer — that comes after a full application — but it confirms your borrowing capacity and demonstrates to sellers and estate agents that you have financing arranged.",
      },
    },
    {
      "@type": "Question",
      name: "How long does an Agreement in Principle last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most Agreements in Principle are valid for 30-90 days. If your property search extends beyond that, we refresh your AIP to keep it current. We manage this process for you so your AIP is always valid when you need it.",
      },
    },
    {
      "@type": "Question",
      name: "Does an Agreement in Principle affect my credit score?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An AIP arranged through a soft credit search does not leave a mark on your credit file visible to other lenders. We use soft searches for AIPs wherever possible. A hard search is only required when you submit a full mortgage application.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need an Agreement in Principle before viewing properties?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You don't strictly need an AIP before viewing, but in London's competitive market it is strongly advisable before making an offer. Sellers and agents take buyers more seriously when they have an AIP. Some agents require one before they'll book viewings on higher-value properties.",
      },
    },
    {
      "@type": "Question",
      name: "Is an Agreement in Principle a guarantee I'll get a mortgage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. An AIP is a preliminary assessment based on the information you provide. A full mortgage application involves a complete credit check, income verification, and a valuation of the property. There are circumstances where a full application does not proceed to offer — for example, if the valuation is lower than expected or if issues are uncovered during underwriting. We advise on any risks before you submit a full application.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mortgageadviser.london" },
    { "@type": "ListItem", position: 2, name: "Agreement in Principle", item: "https://www.mortgageadviser.london/agreement-in-principle" },
  ],
};

export default function AgreementInPrinciplePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-green-900 to-green-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-green-300 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link> › Agreement in Principle
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Agreement in Principle London
          </h1>
          <p className="text-green-100 text-xl mb-6">
            Get an Agreement in Principle from an independent whole-of-market adviser — soft credit check, typically within 24 hours.
          </p>
          <Link href="/contact" className="bg-gold-500 hover:bg-gold-400 text-green-900 font-bold px-8 py-3 rounded-md transition-colors inline-block">
            Get Your AIP Today
          </Link>
        </div>
      </section>

      {/* What is an AIP */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-6">What Is an Agreement in Principle?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed text-lg">
            An Agreement in Principle (AIP) — also called a Decision in Principle (DIP) or Mortgage in Principle —
            is a written confirmation from a mortgage lender that, based on an initial assessment of your income
            and credit history, they are likely to lend you up to a specified amount. It is not a binding mortgage
            offer, but it is an important step that demonstrates your seriousness as a buyer and gives you a
            clear maximum budget before you start viewing.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            In London&apos;s competitive property market, having an AIP in place before you make an offer is strongly
            advisable. Many estate agents and sellers take buyers more seriously when they can demonstrate finance
            is arranged. For higher-value properties or in competitive multiple-offer situations, an AIP from a
            reputable lender can make a genuine difference.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 mt-6">
            <h3 className="font-semibold text-green-800 mb-2">AIP vs Mortgage Offer — the difference</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <p className="font-medium text-green-800 mb-1">Agreement in Principle</p>
                <ul className="space-y-1">
                  <li>✓ Preliminary lender assessment</li>
                  <li>✓ Based on income declared and soft credit check</li>
                  <li>✓ Available quickly — often within 24 hours</li>
                  <li>✓ Gives you a borrowing ceiling for property search</li>
                  <li>— Not legally binding on the lender</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-green-800 mb-1">Full Mortgage Offer</p>
                <ul className="space-y-1">
                  <li>✓ Formal commitment from the lender</li>
                  <li>✓ Based on full income verification and valuation</li>
                  <li>✓ Legally binding — the lender will lend the stated amount</li>
                  <li>✓ Required for exchange of contracts</li>
                  <li>— Takes 2-6 weeks from application</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why get AIP through an adviser */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-8">Why Get Your AIP Through an Independent Adviser?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "The right lender from the start",
                desc: "Going directly to your bank gets you one lender's AIP. Going through an independent adviser means your AIP comes from the lender whose criteria best match your income, property type, and circumstances. This reduces the risk of issues at the full application stage.",
              },
              {
                title: "Soft credit search — no footprint",
                desc: "We arrange AIPs using soft credit searches wherever possible, which do not leave a mark visible to other lenders. Multiple hard credit searches (which happen if you approach several lenders directly) can negatively affect your credit score.",
              },
              {
                title: "Accurate maximum borrowing",
                desc: "Our AIP reflects a thorough assessment of your income and outgoings — not just a quick headline figure. This means the maximum shown is realistic and you won't be disappointed when you come to make a full application.",
              },
              {
                title: "Ready to apply when you find the property",
                desc: "Once you have your AIP, all your documentation is gathered and we're ready to submit a full application immediately when you make an offer. In competitive situations, speed of application matters.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-semibold text-green-800 mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you need */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-6">What You Need for an Agreement in Principle</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            To arrange an AIP, we need the following information. The more complete your details, the more accurate
            your AIP will be and the smoother the transition to a full application.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "Personal details",
                items: ["Full name and date of birth", "Current and previous addresses (3 years)", "Employment status and employer details"],
              },
              {
                title: "Income details",
                items: ["Annual salary / self-employed income", "Bonus, commission, or overtime", "Any other income (rental, investments)"],
              },
              {
                title: "Financial position",
                items: ["Deposit amount and source", "Existing debts (loans, cards, HP)", "Monthly outgoings and commitments"],
              },
            ].map((section) => (
              <div key={section.title} className="bg-green-50 rounded-xl p-5 border border-green-100">
                <h3 className="font-semibold text-green-800 mb-3">{section.title}</h3>
                <ul className="space-y-1">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-green-700 mt-0.5 flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-8">Agreement in Principle FAQs</h2>
          <div className="space-y-6">
            {[
              { q: "What is an Agreement in Principle?", a: "An AIP (also called a Decision in Principle or Mortgage in Principle) is a written statement from a lender that they are likely to lend you up to a specified amount, based on an initial assessment. It is not a binding mortgage offer but confirms your borrowing capacity and demonstrates to sellers that your financing is in place." },
              { q: "How long does it take to get an AIP?", a: "We can typically arrange an Agreement in Principle within 24 hours of receiving your details. In urgent cases — for example, if you need one before a viewing or offer deadline — we can often act faster. Contact us and let us know your timeline." },
              { q: "How long does an AIP last?", a: "Most AIPs are valid for 30-90 days. If your property search takes longer, we refresh your AIP to ensure it remains valid. We monitor this for you and renew proactively — you don't need to keep track yourself." },
              { q: "Will getting an AIP affect my credit score?", a: "An AIP arranged through a soft credit search does not leave a mark visible to other lenders, so it will not affect your credit score. We use soft searches for AIPs wherever possible. A hard search is only required when you submit a full mortgage application." },
              { q: "Can I get an AIP if I'm self-employed?", a: "Yes. Self-employed buyers can get an AIP, though the income assessment is more detailed. We need your most recent SA302 forms and Tax Year Overviews to assess your self-employed income accurately. We identify which lenders will assess your income most favourably before arranging your AIP." },
              { q: "Does an AIP guarantee I'll get a mortgage?", a: "No. An AIP is a preliminary assessment. The full mortgage application involves complete income verification, a property valuation, and detailed underwriting. Issues can arise — for example, if the property valuation is lower than the purchase price, or if something emerges during underwriting. We advise on any risks before you make an offer." },
            ].map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-semibold text-green-800 mb-2">{faq.q}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-6">
        <RiskWarning />
      </div>

      <CtaSection
        heading="Need an Agreement in Principle in London?"
        subtext="Contact Roger Cooper CeMAP — independent, whole-of-market, soft credit search. Typically within 24 hours."
      />
    </>
  );
}
