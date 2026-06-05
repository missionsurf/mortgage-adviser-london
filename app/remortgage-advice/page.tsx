import type { Metadata } from "next";
import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import RiskWarning from "@/components/RiskWarning";

export const metadata: Metadata = {
  title: "Remortgage Adviser London 2026 | Independent Whole-of-Market Advice",
  description:
    "Remortgage adviser in London 2026. Coming off a fixed rate? Roger Cooper CeMAP compares 90+ lenders to find your best deal. Fix vs tracker explained. Free initial advice.",
  alternates: { canonical: "https://www.mortgageadviser.london/remortgage-advice" },
  openGraph: {
    title: "Remortgage Adviser London 2026 | Roger Cooper CeMAP",
    description: "Independent remortgage advice in London — whole-of-market, 90+ lenders, FCA regulated. Free initial advice from Roger Cooper CeMAP.",
    url: "https://www.mortgageadviser.london/remortgage-advice",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "When should I start looking at remortgaging?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Start reviewing your remortgage options six months before your current deal ends. Most lenders allow you to lock in a rate up to 6 months in advance, protecting you against rate rises while your existing deal continues.",
      },
    },
    {
      "@type": "Question",
      name: "Should I fix or track when remortgaging in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The right choice depends on your risk tolerance, budget flexibility, and view on rate movements. Fixed rates provide certainty; trackers may benefit if rates fall. We present both options with full cost modelling so you can make an informed decision.",
      },
    },
    {
      "@type": "Question",
      name: "Can I borrow more money when I remortgage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — a further advance or equity release can be arranged simultaneously with a remortgage. We assess how much additional borrowing is appropriate based on your income and circumstances, and compare rates across the market.",
      },
    },
    {
      "@type": "Question",
      name: "Will I pay an early repayment charge if I remortgage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you remortgage before your fixed or tracker deal ends, your lender may charge an early repayment charge (ERC). We calculate whether the potential saving justifies the ERC before advising. In most cases, waiting until the deal ends is better.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a remortgage take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A like-for-like remortgage with a new lender typically takes 4–8 weeks from application to completion. A product transfer with your existing lender can be completed within days. We manage the timeline to ensure you're completed before your existing deal ends.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mortgageadviser.london" },
    { "@type": "ListItem", position: 2, name: "Remortgage Advice", item: "https://www.mortgageadviser.london/remortgage-advice" },
  ],
};

export default function RemortgagePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-gradient-to-br from-green-900 to-green-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-green-300 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link> › Remortgage Advice
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Remortgage Advice London</h1>
          <p className="text-green-100 text-xl mb-6">
            Independent whole-of-market remortgage advice — comparing 90+ lenders to find the right deal for your circumstances.
          </p>
          <Link href="/contact" className="bg-gold-500 hover:bg-gold-400 text-green-900 font-bold px-8 py-3 rounded-md transition-colors inline-block">
            Get Free Remortgage Advice
          </Link>
        </div>
      </section>

      {/* When to remortgage */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-6">When to Start the Remortgage Process</h2>
          <p className="text-gray-700 mb-4 leading-relaxed text-lg">
            The optimal time to begin reviewing your remortgage options is <strong>six months before your current deal ends</strong>.
            Most lenders allow you to lock in a new rate up to 6 months in advance of your deal completing.
            This means you can secure today&apos;s rate while remaining protected if the market moves against you.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            If rates fall between now and your deal start date, you can in most cases reassess and switch to a
            better deal before completion. You gain the security of a locked rate with the optionality to improve it.
          </p>
          <p className="text-gray-700 leading-relaxed">
            If you wait until after your deal ends and roll onto your lender&apos;s Standard Variable Rate (SVR),
            you will typically be paying significantly more than necessary — SVRs in 2026 typically sit 1.5–2%
            above the best available fixed or tracker rates.
          </p>
          <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-6">
            <p className="font-semibold text-amber-800 mb-1">Important reminder</p>
            <p className="text-amber-700 text-sm">If you don&apos;t know when your current deal ends, check your original mortgage documents or call your lender. We can also help you find out. Starting the remortgage process early is always better than leaving it until the last minute.</p>
          </div>
        </div>
      </section>

      {/* The remortgage advice process */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-8">How the Remortgage Advice Process Works</h2>
          <div className="space-y-6">
            {[
              { step: "1", title: "Review your current position", desc: "We review your existing mortgage — outstanding balance, current rate, deal end date, and any early repayment charges. We check your current LTV based on today's property value, which may have moved since you last remortgaged." },
              { step: "2", title: "Market research across 90+ lenders", desc: "We search the full market for the most suitable products — comparing rates, fees, features, and total cost over the deal term. We also obtain your current lender's retention offers so you have a complete comparison." },
              { step: "3", title: "Recommendation and rate lock", desc: "We present our recommendation with full cost modelling — total amount paid over the deal term including all fees. If you're happy to proceed, we lock in the rate with the chosen lender." },
              { step: "4", title: "Application and legal process", desc: "If switching lenders, we submit the full application. Most remortgages include a free legal service provided by the new lender. We manage the application and keep you updated throughout." },
              { step: "5", title: "Completion — seamlessly", desc: "Your new mortgage completes on the date your existing deal ends — with no gap and no time on the Standard Variable Rate. We handle the timing to make this as smooth as possible." },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-green-800 text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-green-800 text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fixed vs tracker */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-6">Fixed vs Tracker: The 2026 Decision</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            One of the most common questions we receive from remortgaging clients is whether to fix or track in 2026.
            The Bank of England base rate has been on a gradual downward path following the inflation surge of 2022-2023,
            and many economists forecast further modest reductions over 2026-2027.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h3 className="font-semibold text-green-800 text-lg mb-3">Fixed rate — right if you need certainty</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2"><span className="text-green-700">✓</span> Payment stays the same for the fixed term</li>
                <li className="flex gap-2"><span className="text-green-700">✓</span> Budget certainty — no surprises</li>
                <li className="flex gap-2"><span className="text-green-700">✓</span> Protection if rates rise</li>
                <li className="flex gap-2"><span className="text-gray-400">—</span> You don&apos;t benefit if rates fall</li>
                <li className="flex gap-2"><span className="text-gray-400">—</span> Early repayment charges if you want to exit</li>
              </ul>
            </div>
            <div className="bg-gold-400/10 rounded-xl p-6 border border-gold-400/30">
              <h3 className="font-semibold text-green-800 text-lg mb-3">Tracker rate — right if you want flexibility</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2"><span className="text-green-700">✓</span> Benefit immediately if base rate falls</li>
                <li className="flex gap-2"><span className="text-green-700">✓</span> Often no early repayment charges</li>
                <li className="flex gap-2"><span className="text-green-700">✓</span> Can switch to a fix later</li>
                <li className="flex gap-2"><span className="text-gray-400">—</span> Payment can rise if rates increase</li>
                <li className="flex gap-2"><span className="text-gray-400">—</span> Less certainty for budgeting</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-600 text-sm mt-4">
            The right choice depends on your individual circumstances, risk tolerance, and the current differential between products. We present both options with full cost modelling so you can make an informed decision.
          </p>
        </div>
      </section>

      {/* Costs involved */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-6">Remortgage Costs Explained</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: "Product/arrangement fee", detail: "£0–£2,000 depending on the deal. Some remortgage deals are fee-free; others have a product fee. We compare total cost including fees — not just headline rates." },
              { name: "Legal fees", detail: "When switching lenders, most deals include a free legal service provided by the new lender. You can choose your own solicitor but typically the free service is adequate for a standard remortgage." },
              { name: "Valuation fee", detail: "Most remortgage deals include a free basic valuation. We ensure the valuation instruction is placed quickly to avoid delays." },
              { name: "Early repayment charge", detail: "If remortgaging before your current deal ends, your existing lender may charge an ERC — typically 1–5% of the outstanding loan. We calculate whether the saving justifies this cost." },
            ].map((item) => (
              <div key={item.name} className="bg-white rounded-xl p-5 border border-gray-200">
                <h3 className="font-semibold text-green-800 mb-2">{item.name}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you need to know */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-6">What You Need to Know About Remortgaging in London 2026</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              The remortgage market in 2026 presents genuine opportunities for London homeowners. After the rate
              volatility of 2022–2024, the market has stabilised and lenders are competing actively for remortgage
              business. For borrowers coming to the end of fixed-rate deals arranged during the higher-rate period,
              there are often better deals available — though the improvement depends heavily on your current LTV,
              income, and the specific products you locked in.
            </p>
            <p>
              One of the most valuable aspects of independent remortgage advice is LTV reassessment. London property
              values have generally appreciated over the last five years, meaning many homeowners who fixed at 75–80%
              LTV are now sitting at 60–70% LTV. Moving to a lower LTV band unlocks significantly better rates — the
              rate differential between 75% LTV and 60% LTV can be 0.3–0.5%, which on a £400,000 mortgage saves
              £100–£167 per month.
            </p>
            <p>
              If you have built up significant equity in your London property, a remortgage is also an opportunity
              to release capital — for home improvements, debt consolidation, or other purposes. We model the total
              cost of any additional borrowing carefully, including the impact on your monthly payment and the total
              amount repaid over the new deal term, so you can make an informed decision.
            </p>
            <p>
              Product transfers — staying with your existing lender on a new rate — are sometimes appropriate, but
              they should never be accepted without comparison. Your existing lender has no obligation to offer you
              a competitive rate, and in most cases a whole-of-market search will identify better value elsewhere.
              Even if the saving is modest, we provide the comparison so you can make a properly informed choice
              rather than defaulting to convenience.
            </p>
            <p>
              The decision between two-year and five-year fixed rates remains highly individual. Five-year fixes
              offer certainty over a longer period and have historically offered slightly better rates during
              periods of uncertainty. Two-year fixes allow you to reassess sooner. We present both options with
              full cost modelling and outline the specific circumstances in which each makes sense for your
              financial position.
            </p>
            <p>
              For London homeowners who have recently experienced changes in income — promotion, job change,
              becoming self-employed — the remortgage is also an opportunity to reassess affordability with your
              new income profile. Some lenders will allow increased borrowing at remortgage; others are more
              conservative. We identify the right lender for your current circumstances rather than working
              backwards from your existing lender relationship.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-8">Remortgage FAQs</h2>
          <div className="space-y-6">
            {[
              { q: "When should I start looking at remortgaging?", a: "Start reviewing options six months before your current deal ends. Most lenders let you lock in a rate up to 6 months in advance, protecting you against rate rises while your existing deal continues. Starting early gives you time to compare properly without pressure." },
              { q: "Should I fix or track when remortgaging in 2026?", a: "The right choice depends on your risk tolerance, budget flexibility, and view on rate movements. Fixed rates provide certainty; trackers may benefit if rates fall. We present both options with full cost modelling so you can make an informed decision based on clear numbers." },
              { q: "Can I borrow more money when I remortgage?", a: "Yes — a further advance or equity release can be arranged at the same time as a remortgage. We assess how much additional borrowing is appropriate based on your income and circumstances, and compare the rate across the market for both parts of the loan." },
              { q: "Will I pay an early repayment charge if I remortgage early?", a: "If you remortgage before your fixed or tracker deal ends, your lender may charge an ERC — typically 1–5% of the outstanding loan. We calculate the total cost including the ERC versus the saving from a better rate, and advise on whether it makes financial sense to move early." },
              { q: "How long does a remortgage take in London?", a: "A like-for-like remortgage with a new lender typically takes 4–8 weeks from application to completion. A product transfer with your existing lender can be completed within days. We manage the timeline carefully to ensure you complete before your existing deal ends." },
              { q: "Is a product transfer with my existing lender ever the right answer?", a: "Sometimes, yes — if your existing lender offers a genuinely competitive rate, a product transfer avoids legal costs and valuation requirements and completes quickly. But it should always be compared against the full market first. We do that comparison and present both options clearly." },
              { q: "Can I remortgage if my property value has fallen?", a: "Falling property values increase your LTV, which may restrict lender options and rates. In most cases, remortgaging is still possible — lenders assess on current LTV. We identify lenders appropriate to your current LTV and advise on whether remortgaging or a product transfer makes more sense." },
              { q: "What happens if I do nothing and roll onto the Standard Variable Rate?", a: "Your lender's SVR is typically 1.5–2% above the best available fixed rates in 2026. On a £300,000 mortgage, that difference costs £375–£500 extra per month. Rolling onto SVR for even a few months is expensive. We ensure your new deal is in place before this happens." },
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

      <CtaSection heading="Ready to find the right remortgage deal?" subtext="Free advice from Roger Cooper CeMAP — comparing 90+ lenders to find the right rate for your circumstances." />
    </>
  );
}
