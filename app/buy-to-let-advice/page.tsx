import type { Metadata } from "next";
import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import RiskWarning from "@/components/RiskWarning";

export const metadata: Metadata = {
  title: "Buy to Let Mortgage Advice London | Investment Property Adviser",
  description:
    "Expert buy to let mortgage advice in London. ICR calculations, limited company structure, portfolio landlord rules. Free advice from Roger Cooper CeMAP, FCA regulated.",
  alternates: { canonical: "https://www.mortgageadviser.london/buy-to-let-advice" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the interest coverage ratio (ICR) for buy to let mortgages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The ICR is the test lenders use to assess whether the rental income adequately covers the mortgage payment. Lenders typically require 125% coverage for basic rate taxpayers and 145% for higher rate taxpayers, calculated at a stress interest rate (typically 5.5%+). Lower rental yields in London can make this a key constraint.",
      },
    },
    {
      "@type": "Question",
      name: "Should I buy a London investment property in personal name or a limited company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This depends on your income tax position and long-term plans. Section 24 changes mean higher rate taxpayers cannot deduct mortgage interest in full personally. A limited company can still deduct interest. However, company mortgages carry higher rates and there are extraction costs. Independent tax advice is strongly recommended.",
      },
    },
    {
      "@type": "Question",
      name: "What are the portfolio landlord rules?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you have four or more mortgaged buy to let properties, lenders must assess your entire portfolio — not just the new property. This means disclosing all existing properties, their mortgages, and rental income. Some lenders are more portfolio-friendly than others, and an adviser who understands this is essential.",
      },
    },
    {
      "@type": "Question",
      name: "What deposit do I need for a buy to let mortgage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most buy to let lenders require a 25% deposit (75% LTV). Some lenders will lend at 20% deposit (80% LTV), though rates are less competitive. A 25% or larger deposit is standard and gives you the widest range of lender options.",
      },
    },
    {
      "@type": "Question",
      name: "What are London's best areas for buy to let investment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "London yields are lower than many UK cities, so location selection matters. Zones 3-4 on the Underground and Elizabeth line, and commuter towns like Croydon, Barking, Stratford, and Ilford tend to offer a better yield/capital growth combination than prime central London.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mortgageadviser.london" },
    { "@type": "ListItem", position: 2, name: "Buy to Let Advice", item: "https://www.mortgageadviser.london/buy-to-let-advice" },
  ],
};

export default function BuyToLetPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-gradient-to-br from-green-900 to-green-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-green-300 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link> › Buy to Let Advice
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Buy to Let Mortgage Advice London</h1>
          <p className="text-green-100 text-xl mb-6">
            Specialist investment property mortgage advice — ICR calculations, company structures, portfolio rules, and London-specific market knowledge.
          </p>
          <Link href="/contact" className="bg-gold-500 hover:bg-gold-400 text-green-900 font-bold px-8 py-3 rounded-md transition-colors inline-block">
            Get Free BTL Advice
          </Link>
        </div>
      </section>

      {/* ICR section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-6">The Interest Coverage Ratio (ICR) Explained</h2>
          <p className="text-gray-700 mb-4 leading-relaxed text-lg">
            The Interest Coverage Ratio is the core test lenders apply to determine whether your rental income
            adequately supports the proposed mortgage. Understanding it is essential before committing to a
            London buy to let investment.
          </p>
          <div className="bg-green-50 rounded-xl p-6 border border-green-200 mb-6">
            <h3 className="font-semibold text-green-800 mb-3">How ICR works</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <p><strong>Stress rate:</strong> Most lenders calculate the ICR at a stress interest rate of 5.5%+ — above the actual deal rate</p>
              <p><strong>125% ICR</strong> for basic rate taxpayers (personal name, lower rate)</p>
              <p><strong>145% ICR</strong> for higher and additional rate taxpayers (personal name, higher rate)</p>
              <p><strong>145% ICR</strong> typically for limited company purchases</p>
            </div>
            <div className="mt-4 pt-4 border-t border-green-200">
              <p className="font-medium text-green-800 mb-2">Example calculation:</p>
              <p className="text-sm text-gray-700">
                A £400,000 buy to let at 75% LTV = £300,000 mortgage. At stress rate 5.5%: monthly interest = £1,375.
                At 125% ICR, required rent = £1,719/month. At 145% ICR, required rent = £1,994/month.
              </p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            In London, where rental yields are typically lower than the UK average (3.5–5% gross compared to 5–7% in
            northern cities), this calculation can restrict the maximum mortgage available on a given property.
            We model ICR calculations before you make an offer, so you understand your borrowing limits before
            committing to a purchase.
          </p>
        </div>
      </section>

      {/* Ltd company vs personal */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-6">Limited Company vs Personal Name: Which Is Right for You?</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Section 24 of the Finance Act 2015 changed how mortgage interest relief is taxed for landlords.
            Higher rate taxpayers holding buy to let property in their personal name can no longer deduct mortgage
            interest in full from rental income — they receive only a basic rate (20%) tax credit. This has
            significantly increased the effective tax cost of personal ownership for higher earners, driving many
            investors to use limited company (SPV) structures.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="font-semibold text-green-800 text-lg mb-4">Personal name</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2"><span className="text-green-700">✓</span> Generally lower mortgage rates</li>
                <li className="flex gap-2"><span className="text-green-700">✓</span> Simpler administration</li>
                <li className="flex gap-2"><span className="text-green-700">✓</span> Can use allowances (mortgage interest tax credit)</li>
                <li className="flex gap-2"><span className="text-red-500">✗</span> Section 24 restriction on interest relief for higher rate taxpayers</li>
                <li className="flex gap-2"><span className="text-red-500">✗</span> Rental profit taxed at marginal income tax rate</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="font-semibold text-green-800 text-lg mb-4">Limited company (SPV)</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2"><span className="text-green-700">✓</span> Full mortgage interest deductible as business expense</li>
                <li className="flex gap-2"><span className="text-green-700">✓</span> Corporation tax (19-25%) on profits, not income tax</li>
                <li className="flex gap-2"><span className="text-green-700">✓</span> Profits can be retained within the company</li>
                <li className="flex gap-2"><span className="text-red-500">✗</span> Higher mortgage rates (+0.1–0.3%)</li>
                <li className="flex gap-2"><span className="text-red-500">✗</span> Additional admin (annual accounts, corporation tax returns)</li>
                <li className="flex gap-2"><span className="text-red-500">✗</span> Extracting profits incurs dividend tax on top of corporation tax</li>
              </ul>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
            <strong>Important:</strong> The right structure depends on your overall tax position, how many properties you plan to own, and whether you need rental income immediately. We strongly recommend taking independent tax advice from a qualified accountant alongside our mortgage advice before making this decision.
          </div>
        </div>
      </section>

      {/* Portfolio landlord */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-6">Portfolio Landlord Rules (4+ Properties)</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Since 2017, lenders are required to apply additional underwriting criteria when lending to portfolio
            landlords — those with four or more mortgaged buy to let properties. This applies whether the properties
            are in personal name or in a limited company, and whether or not you are adding a fifth property or
            remortgaging an existing one.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Portfolio assessment means the lender looks at your entire portfolio — all properties, all mortgages,
            all rental income — and assesses whether the portfolio as a whole meets their ICR requirements.
            It also requires a more detailed business plan and asset and liability statement.
          </p>
          <div className="bg-green-50 rounded-xl p-6 border border-green-100">
            <h3 className="font-semibold text-green-800 mb-3">What portfolio landlords need to provide</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex gap-2"><span className="text-green-700">✓</span> Details of all mortgaged buy to let properties</li>
              <li className="flex gap-2"><span className="text-green-700">✓</span> Outstanding balances on each mortgage</li>
              <li className="flex gap-2"><span className="text-green-700">✓</span> Monthly rental income for each property</li>
              <li className="flex gap-2"><span className="text-green-700">✓</span> Void periods and ongoing costs estimate</li>
              <li className="flex gap-2"><span className="text-green-700">✓</span> A property schedule (we help you prepare this)</li>
              <li className="flex gap-2"><span className="text-green-700">✓</span> Asset and liability statement</li>
            </ul>
          </div>
        </div>
      </section>

      {/* London hotspots */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-6">London BTL: Yield, Location, and the Commuter Belt</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            London is a world-class city for long-term property investment, but it requires careful yield analysis.
            Prime central London — Kensington, Chelsea, Westminster — offers capital preservation and international
            demand, but gross yields of 2–3% can make the ICR calculations challenging for leveraged investors.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            For investors seeking rental yield alongside capital growth potential, Zones 3–4 and the Elizabeth line
            corridor offer the better combination. Areas like Barking, Stratford, Ilford, Croydon, and Hounslow
            typically deliver 4–5.5% gross yields, which work better in ICR calculations while still benefiting
            from London&apos;s long-term price trajectory.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Commuter towns just outside Greater London — Chelmsford, Basildon, Dartford, and Watford — can offer
            even stronger yields at lower purchase prices, particularly for investors targeting the tenant market
            of London workers priced out of Greater London. We advise on the mortgage options for all these areas.
          </p>
          <div className="mt-4 text-sm text-gray-500 italic">
            Note: We provide mortgage advice, not investment advice. Property prices and rental yields can go down as well as up. Always seek independent financial advice before making investment decisions.
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-8">Buy to Let FAQs</h2>
          <div className="space-y-6">
            {[
              { q: "What is the interest coverage ratio (ICR) for buy to let mortgages?", a: "The ICR is the test lenders use to assess whether rental income adequately covers the mortgage. Lenders typically require 125% for basic rate taxpayers and 145% for higher rate taxpayers, calculated at a stress rate of 5.5%+. London's lower yields can constrain maximum borrowing — we model this before you make an offer." },
              { q: "Should I buy a London investment property in personal name or a limited company?", a: "This depends on your income tax position, long-term plans, and whether you need income immediately. Section 24 means higher rate taxpayers cannot deduct mortgage interest in full personally, making limited companies more attractive. However, company mortgages have higher rates and there are extraction costs. We strongly recommend tax advice alongside our mortgage advice." },
              { q: "What are the portfolio landlord rules for 4+ properties?", a: "If you have four or more mortgaged buy to let properties, lenders must assess your entire portfolio — all properties, all mortgages, all rental income. We help you prepare the required portfolio schedule and identify lenders whose portfolio assessment criteria your portfolio meets." },
              { q: "What deposit do I need for a buy to let mortgage?", a: "Most buy to let lenders require 25% deposit (75% LTV). Some lend at 20% though rates are less competitive. The 25% deposit is standard and gives you the widest range of lender options and most competitive rates." },
              { q: "What are London's best areas for buy to let investment?", a: "For yield, Zones 3-4 and the Elizabeth line corridor — Barking, Stratford, Ilford, Croydon — offer better returns than prime central London. Commuter towns just outside Greater London can deliver even stronger yields. We model ICR calculations for any area you're considering before you commit." },
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
        <RiskWarning btl={true} />
      </div>

      <CtaSection heading="Need buy to let mortgage advice in London?" subtext="Free initial advice from Roger Cooper CeMAP — ICR calculations, structure advice, and 90+ lender access." />
    </>
  );
}
