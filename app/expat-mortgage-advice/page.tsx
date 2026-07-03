import type { Metadata } from "next";
import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import RiskWarning from "@/components/RiskWarning";

export const metadata: Metadata = {
  title: "Expat Mortgage Advice London | UK Mortgages for Expats & Overseas Buyers",
  description:
    "Independent expat mortgage advice from a CeMAP qualified adviser. UK mortgages for British expats abroad and overseas buyers purchasing in London. FCA regulated, 90+ lenders.",
  alternates: { canonical: "https://www.mortgageadviser.london/expat-mortgage-advice" },
  openGraph: {
    title: "Expat Mortgage Advice London | Roger Cooper CeMAP",
    description: "UK mortgage advice for British expats and overseas buyers. Independent, whole-of-market, FCA regulated.",
    url: "https://www.mortgageadviser.london/expat-mortgage-advice",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can a British expat get a UK mortgage while living abroad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A number of specialist lenders and some mainstream lenders offer UK mortgages to British expats living abroad. Eligibility depends on your country of residence, employment status, income currency, and the type of property you're purchasing. Independent advice is essential to identify which lenders will consider your specific situation.",
      },
    },
    {
      "@type": "Question",
      name: "What is the minimum deposit for an expat mortgage in the UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most expat mortgage lenders require a minimum 25% deposit, reflecting the additional complexity of assessing overseas income and residency. Some lenders will consider 20% deposit for strong applicants. A larger deposit generally improves your rate and lender options.",
      },
    },
    {
      "@type": "Question",
      name: "Can overseas buyers purchase property in London?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Non-UK residents can purchase property in London and obtain UK mortgages, though the range of participating lenders is more limited than for UK residents. Key factors include your visa status, income source and currency, deposit size, and proposed use of the property.",
      },
    },
    {
      "@type": "Question",
      name: "How is foreign income assessed for a UK mortgage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Foreign currency income is typically converted to GBP at current exchange rates, and lenders may apply a haircut of 10-25% to account for currency fluctuation risk. Some lenders are more experienced with specific currencies and employment types. Matching your income profile to the right lender is a key part of expat mortgage advice.",
      },
    },
    {
      "@type": "Question",
      name: "What stamp duty do expats and overseas buyers pay on UK property?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Non-UK residents purchasing residential property pay a 2% surcharge on top of standard stamp duty rates, in addition to the 3% surcharge for second properties. A non-UK resident purchasing an additional property faces both surcharges. We factor all costs into your overall financing plan.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mortgageadviser.london" },
    { "@type": "ListItem", position: 2, name: "Expat Mortgage Advice", item: "https://www.mortgageadviser.london/expat-mortgage-advice" },
  ],
};

export default function ExpatMortgagePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-green-900 to-green-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-green-300 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link> › Expat Mortgage Advice
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Expat Mortgage Advice London
          </h1>
          <p className="text-green-100 text-xl mb-6">
            UK mortgage advice for British expats living abroad and overseas buyers purchasing London property. Independent, whole-of-market, FCA regulated.
          </p>
          <Link href="/contact" className="bg-gold-500 hover:bg-gold-400 text-green-900 font-bold px-8 py-3 rounded-md transition-colors inline-block">
            Get Free Expat Mortgage Advice
          </Link>
        </div>
      </section>

      {/* Who we help */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-6">Who We Help with Expat Mortgages</h2>
          <p className="text-gray-700 mb-8 leading-relaxed text-lg">
            Expat and overseas buyer mortgage applications are among the most complex in the UK market. The range of
            participating lenders is smaller, the documentation requirements are more detailed, and the assessment
            of foreign income varies significantly between lenders. Independent, whole-of-market advice is particularly
            valuable here — the difference between approaching the right lender and the wrong one can mean the
            difference between obtaining a mortgage and not.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "British expats living abroad",
                desc: "UK nationals living overseas who want to purchase UK property — whether as a future home, investment, or to maintain a UK base. Countries of residence, employment type, and income currency all affect which lenders will consider your case.",
              },
              {
                title: "Non-UK residents purchasing in London",
                desc: "Overseas nationals buying London property — whether for personal use, investment, or as a London base. Visa status, residency, and income source determine lender eligibility.",
              },
              {
                title: "Returning expats",
                desc: "British nationals who have been living abroad and are returning to the UK. If you don't yet have a UK address or bank account, some lenders will not consider you. We identify which lenders are flexible on returning expat applications.",
              },
              {
                title: "High-net-worth international buyers",
                desc: "Buyers purchasing London property at higher values, where private bank relationships or specialist international lenders may be the most appropriate route. We advise on the full range of options across private, specialist, and mainstream lenders.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-green-50 rounded-xl p-6 border border-green-100">
                <h3 className="font-semibold text-green-800 text-lg mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key considerations */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-8">Key Considerations for Expat Mortgages</h2>
          <div className="space-y-6">
            {[
              {
                title: "Deposit requirements",
                desc: "Most expat and overseas buyer lenders require a minimum 25% deposit (75% LTV). This reflects the additional complexity of assessing overseas income and the more limited lender pool. A larger deposit of 35-40% significantly improves your rate options and the number of lenders willing to consider your case.",
              },
              {
                title: "Foreign currency income",
                desc: "Income earned in currencies other than GBP creates exchange rate risk. Lenders typically convert your income to GBP at current exchange rates and apply a discount of 10-25% to account for currency volatility. Some lenders specialise in specific currencies or employment types — for example, those working for multinational companies or in financial services in major financial centres.",
              },
              {
                title: "Country of residence",
                desc: "The country where you live significantly affects lender appetite. Countries with stable economies, strong regulatory regimes, and established banking relationships with the UK attract more lender interest. Some countries are more restricted — lenders may require that you are not resident in certain jurisdictions. We advise on this clearly before you make any applications.",
              },
              {
                title: "Property use",
                desc: "The mortgage terms differ depending on whether you intend the property as a residential purchase (for personal use), a buy to let investment, or a holiday home. Each has different lender criteria, rates, and tax implications. We advise on the most appropriate structure for your intended use.",
              },
              {
                title: "Stamp duty surcharges",
                desc: "Non-UK residents pay an additional 2% SDLT surcharge on residential property purchases, on top of standard rates. If the property is also a second property, the 3% second property surcharge also applies. On a £500,000 London purchase, these surcharges can add £25,000 or more to your purchase costs.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="w-2 rounded-full bg-green-800 flex-shrink-0 mt-2" style={{ minHeight: "16px", maxHeight: "fit-content" }} />
                <div>
                  <h3 className="font-semibold text-green-800 text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-6">What Documentation Is Typically Required</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Expat mortgage applications require more documentation than standard UK residential applications. Lenders
            need to verify your identity, income, and residency status with greater certainty. Typical requirements include:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { cat: "Identity", items: ["Valid UK or international passport", "Proof of current address overseas"] },
              { cat: "Income", items: ["3 months' payslips (in your local currency)", "2 years' employment history", "Bank statements showing salary credits", "If self-employed: 2 years' accounts or tax returns"] },
              { cat: "UK banking", items: ["UK bank account (some lenders require this)", "UK credit history (if available)", "Previous UK address history"] },
              { cat: "Property", items: ["Solicitor details (must be UK-qualified)", "Survey arrangements (standard requirements apply)", "Proposed occupancy purpose"] },
            ].map((section) => (
              <div key={section.cat} className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <h3 className="font-semibold text-green-800 mb-3">{section.cat}</h3>
                <ul className="space-y-1">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-green-700 mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-sm mt-4">
            Requirements vary by lender. We advise you on exactly what each lender needs before you submit any application, to avoid delays and multiple credit searches.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-8">Expat Mortgage FAQs</h2>
          <div className="space-y-6">
            {[
              { q: "Can a British expat get a UK mortgage while living abroad?", a: "Yes. A number of specialist lenders and some mainstream lenders offer UK mortgages to British expats. Eligibility depends on your country of residence, employment status, income currency, and property type. We identify which lenders will consider your specific situation before any application is made." },
              { q: "What deposit do I need as an expat or overseas buyer?", a: "Most expat lenders require 25% deposit as a minimum. Some will consider 20% for strong applicants. A 35-40% deposit significantly improves your options. We advise on the right LTV for your specific situation." },
              { q: "Can I use foreign income to support a UK mortgage?", a: "Yes, but lenders treat foreign currency income differently. Most apply a currency discount of 10-25% and convert at current exchange rates. Some lenders specialise in income from major financial centres (Hong Kong, Singapore, UAE, USA, EU). We identify the right lender for your income currency and source." },
              { q: "Do I need a UK bank account to get an expat mortgage?", a: "Some lenders require a UK bank account; others do not. Mortgage repayments typically need to come from a UK account. We advise on this requirement early so you can set up the necessary accounts in advance of your application." },
              { q: "What stamp duty will I pay as an overseas buyer?", a: "Non-UK residents pay an additional 2% SDLT surcharge. If the property is also an additional property (not your only home), the 3% second-property surcharge also applies. We calculate the full stamp duty cost for your specific situation as part of our initial advice." },
              { q: "Can I buy London property as an investment from overseas?", a: "Yes. Overseas investors can purchase London buy to let property and obtain buy to let mortgages from specialist lenders. The deposit requirement is typically higher (25-35%) and rental income must cover the mortgage at lender stress rates. We advise on the full buy to let criteria for non-resident investors." },
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
        heading="Need expat or overseas buyer mortgage advice?"
        subtext="Independent advice from Roger Cooper CeMAP — whole-of-market access for expat and international buyers."
      />
    </>
  );
}
