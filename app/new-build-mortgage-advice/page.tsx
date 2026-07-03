import type { Metadata } from "next";
import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import RiskWarning from "@/components/RiskWarning";

export const metadata: Metadata = {
  title: "New Build Mortgage Advice London | Independent Expert Guidance",
  description:
    "New build mortgage advice from an independent CeMAP qualified adviser in London. Developer timelines, mortgage offer extensions, Help to Buy alternatives, and whole-of-market lender access. FCA regulated.",
  alternates: { canonical: "https://www.mortgageadviser.london/new-build-mortgage-advice" },
  openGraph: {
    title: "New Build Mortgage Advice London | Roger Cooper CeMAP",
    description: "Independent new build mortgage advice in London — developer timelines, 90+ lenders, FCA regulated.",
    url: "https://www.mortgageadviser.london/new-build-mortgage-advice",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What makes new build mortgages different from standard mortgages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "New build mortgages involve additional complexity around developer timelines, mortgage offer validity, and lender criteria for new-build properties. Many lenders apply specific restrictions on new builds — particularly flats above a certain storey height or percentage — and offer validity periods (typically 6 months) may not match developer completion timelines. Independent advice ensures the right lender and offer structure from the start.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a new build mortgage offer last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most mortgage offers are valid for 6 months. New build completion dates can slip, and if your offer expires before completion you will need to apply again — potentially at a different rate. Some lenders offer longer validity periods specifically for new builds (9-12 months), and many will extend an existing offer if completion is delayed. We identify lenders with new-build-friendly terms from the outset.",
      },
    },
    {
      "@type": "Question",
      name: "Do lenders restrict mortgages on new build flats?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Some lenders apply restrictions on new build flats — particularly high-rise buildings, blocks where a high percentage are owned by one developer or investor, or buildings requiring EWS1 fire safety certificates. We check lender criteria for the specific development early in the process to avoid surprises.",
      },
    },
    {
      "@type": "Question",
      name: "What deposit do I need for a new build mortgage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most lenders accept a 5-10% deposit on new build houses. For new build flats, many lenders require a minimum 10-15% deposit, with some requiring 25% for high-rise flats. Developer incentives (cashback, fixtures included) may affect the lender's valuation and deposit calculation. We advise on the right deposit level for the specific development.",
      },
    },
    {
      "@type": "Question",
      name: "What should I do before reserving a new build property?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Before reserving, you should have an Agreement in Principle from a lender who is comfortable with the specific development. Developers typically require exchange within 28 days of reservation — sometimes sooner. Being mortgage-ready before reservation is essential. We can arrange an AIP quickly and advise on the most appropriate lender for the development.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mortgageadviser.london" },
    { "@type": "ListItem", position: 2, name: "New Build Mortgage Advice", item: "https://www.mortgageadviser.london/new-build-mortgage-advice" },
  ],
};

export default function NewBuildMortgagePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-green-900 to-green-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-green-300 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link> › New Build Mortgage Advice
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            New Build Mortgage Advice London
          </h1>
          <p className="text-green-100 text-xl mb-6">
            Independent mortgage advice for new build homes and flats — navigating developer timelines, lender criteria, and offer validity with whole-of-market access.
          </p>
          <Link href="/contact" className="bg-gold-500 hover:bg-gold-400 text-green-900 font-bold px-8 py-3 rounded-md transition-colors inline-block">
            Get Free New Build Advice
          </Link>
        </div>
      </section>

      {/* Why new builds are different */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-6">Why New Build Mortgages Need Specialist Advice</h2>
          <p className="text-gray-700 mb-4 leading-relaxed text-lg">
            Purchasing a new build property involves a set of mortgage considerations that simply don&apos;t apply to
            second-hand purchases. Developer timelines, lender restrictions on certain property types, mortgage
            offer validity, and the interaction of builder incentives with lender valuations all need careful
            management. Getting the wrong lender — or approaching without the right preparation — can result in
            delays, a collapsed purchase, or a mortgage offer that expires before your home is built.
          </p>
          <p className="text-gray-700 leading-relaxed">
            As an independent whole-of-market adviser, Roger Cooper identifies lenders who are experienced and
            comfortable with new build purchases from the outset — not lenders who will create problems at the
            point of application. This preparation makes a measurable difference to how smoothly your purchase proceeds.
          </p>
        </div>
      </section>

      {/* Key challenges */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-8">Key New Build Mortgage Considerations</h2>
          <div className="space-y-6">
            {[
              {
                title: "Mortgage offer validity and developer timelines",
                desc: "A standard mortgage offer is valid for 6 months. New build completion dates frequently slip — sometimes by months. If your offer expires before your home is ready, you must reapply, potentially at a different rate in a changed market. We identify lenders who offer 9-12 month validity periods specifically for new builds, and who have clear extension policies if needed.",
              },
              {
                title: "Lender restrictions on new build flats",
                desc: "Many high-street lenders apply restrictions to new build flats — particularly buildings above a certain height (often 5-6 storeys), high investor-ownership blocks, or developments requiring EWS1 fire safety certificates following changes to building safety regulations. We check lender criteria against the specific development before any application is made.",
              },
              {
                title: "Developer incentives and valuations",
                desc: "Developer cashback offers, included fixtures, and other incentives are generally accepted by lenders but may affect the lender's valuation of the property. If a lender values the property below the purchase price, your effective deposit increases. We advise on which incentives are accepted and structure your application to avoid valuation issues.",
              },
              {
                title: "Exchange timeline pressure",
                desc: "Developers typically require exchange of contracts within 28 days of reservation — sometimes faster for off-plan properties. This compresses the mortgage application timeline significantly. Being mortgage-ready — with an Agreement in Principle from a suitable lender — before reservation is essential.",
              },
              {
                title: "Shared Ownership and First Homes new builds",
                desc: "Many new build purchases in London involve government-backed schemes — Shared Ownership or First Homes. These have additional criteria on top of standard new build requirements. Lenders who participate in these schemes must also be new-build-friendly. We identify the intersection of scheme eligibility and new build lending criteria.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-semibold text-green-800 text-lg mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The process */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-8">The New Build Mortgage Process</h2>
          <div className="space-y-6">
            {[
              { step: "1", title: "Before reservation — get an AIP", desc: "Before you visit a development or make a reservation, we arrange an Agreement in Principle from a lender who is comfortable with the specific development type. This confirms your maximum budget and puts you in a credible position when reserving." },
              { step: "2", title: "Reservation and exchange", desc: "Once you reserve, the clock starts on the exchange deadline. We submit your full mortgage application immediately to ensure it progresses quickly. We liaise with the developer and your solicitor to hit the exchange deadline without delays caused by the mortgage." },
              { step: "3", title: "Application through to offer", desc: "We manage the application through underwriting, valuation, and to formal mortgage offer. We advise on the right survey approach for a new build — in most cases a snagging survey in addition to the lender's valuation." },
              { step: "4", title: "Managing the build timeline", desc: "We monitor your mortgage offer validity against the developer's anticipated completion date. If the timeline slips, we liaise with the lender about extension options before your offer expires. You don't have to manage this yourself." },
              { step: "5", title: "Completion", desc: "On completion, your mortgage funds are released to your solicitor and the keys are yours. We remain available for any queries and advise on protection — life cover, buildings insurance (which must be in place from exchange on a new build) — as part of the process." },
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

      {/* FAQs */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-8">New Build Mortgage FAQs</h2>
          <div className="space-y-6">
            {[
              { q: "What makes new build mortgages different?", a: "New builds involve developer timelines, mortgage offer validity concerns, and lender restrictions on certain property types — particularly high-rise flats. Lenders who are comfortable with new builds have specific experience managing these factors. Independent advice helps identify the right lender from the start rather than finding problems after you've reserved." },
              { q: "How long does a new build mortgage offer last?", a: "Standard mortgage offers are valid for 6 months. New builds often take longer to complete. We identify lenders who offer 9-12 month validity for new builds, and who will extend offers if a development is delayed. This protects you from having to reapply — potentially at a worse rate — if the developer runs late." },
              { q: "What deposit do I need for a new build?", a: "For new build houses, most lenders accept 5-10% deposit. For new build flats, many require 10-15%, and some require 25% for high-rise buildings. Developer incentives may affect valuations, which in turn affects your effective LTV. We model this before you reserve so you know exactly what deposit you need." },
              { q: "Do I need to exchange contracts quickly after reserving a new build?", a: "Developers typically require exchange within 28 days of reservation, sometimes faster. This is why having an AIP from an appropriate lender before you reserve is essential. We can arrange an AIP quickly and ensure your application is ready to submit immediately after reservation to hit the exchange deadline." },
              { q: "What survey do I need for a new build?", a: "The lender's valuation is automatically arranged as part of your mortgage application. For a new build, we also recommend arranging an independent snagging survey as the property nears completion — this identifies any defects the developer should rectify before you complete. The NHBC warranty (if applicable) covers structural defects, but a snagging survey covers the detail." },
              { q: "Can I use Shared Ownership for a new build?", a: "Yes. Most Shared Ownership purchases are on new build developments. The mortgage is on your share only, and eligibility depends on the scheme, housing association criteria, and the specific development. We advise on which lenders participate in Shared Ownership and are also comfortable with new build properties." },
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
        heading="Buying a new build in London?"
        subtext="Get independent mortgage advice before you reserve — Roger Cooper CeMAP, 90+ lenders, FCA regulated."
      />
    </>
  );
}
