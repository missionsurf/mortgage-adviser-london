import type { Metadata } from "next";
import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import RiskWarning from "@/components/RiskWarning";

export const metadata: Metadata = {
  title: "First Time Buyer Mortgage Advice London | CeMAP Qualified Adviser",
  description:
    "Expert first time buyer mortgage advice in London. Deposits, Help to Buy alternatives, stamp duty, and step-by-step guidance from Roger Cooper CeMAP. Free initial advice.",
  alternates: { canonical: "https://www.mortgageadviser.london/first-time-buyer-advice" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much deposit do I need to buy my first home in London?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The minimum deposit is 5% of the purchase price. On a £400,000 London property, that is £20,000. At 10% deposit you access more competitive rates; at 15-20% you access the full range. Shared Ownership allows you to buy a share with a smaller deposit.",
      },
    },
    {
      "@type": "Question",
      name: "What stamp duty will I pay as a first-time buyer in London?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "First-time buyers pay no stamp duty on the first £300,000 and 5% on the portion between £300,001 and £500,000. On a £400,000 purchase, that is £5,000. Properties above £500,000 do not qualify for first-time buyer relief.",
      },
    },
    {
      "@type": "Question",
      name: "What is an Agreement in Principle and do I need one?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An Agreement in Principle (AIP) is a statement from a lender that, subject to a full application, they are likely to offer you a mortgage up to a certain amount. Estate agents take you more seriously with an AIP in place. We arrange AIPs quickly — typically within 24 hours.",
      },
    },
    {
      "@type": "Question",
      name: "What government schemes are available for first-time buyers in London?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shared Ownership allows you to buy a share of a property (typically 25-75%) and pay subsidised rent on the remainder. The First Homes scheme offers at least a 30% discount for eligible buyers on qualifying new-builds. Help to Buy closed in March 2023.",
      },
    },
    {
      "@type": "Question",
      name: "How long does the first-time buyer mortgage process take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "From Agreement in Principle to mortgage offer typically takes 2-6 weeks depending on the lender and case complexity. Exchange and completion add further time depending on the chain. We manage the process proactively to avoid unnecessary delays.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mortgageadviser.london" },
    { "@type": "ListItem", position: 2, name: "First Time Buyer Advice", item: "https://www.mortgageadviser.london/first-time-buyer-advice" },
  ],
};

export default function FirstTimeBuyerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-green-900 to-green-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-green-300 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link> › First Time Buyer Advice
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            First Time Buyer Mortgage Advice in London
          </h1>
          <p className="text-green-100 text-xl mb-6">
            Step-by-step guidance from a CeMAP qualified independent adviser — making your first home in London a reality.
          </p>
          <Link href="/contact" className="bg-gold-500 hover:bg-gold-400 text-green-900 font-bold px-8 py-3 rounded-md transition-colors inline-block">
            Get Free Advice
          </Link>
        </div>
      </section>

      {/* The process */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-8">The First Time Buyer Advice Process</h2>
          <div className="space-y-6">
            {[
              { step: "1", title: "Initial advice — understanding your position", desc: "We begin with a detailed fact-find: your income, outgoings, deposit savings, credit history, and plans. This gives us a clear picture of your maximum borrowing capacity and the total cost of your purchase, including all fees." },
              { step: "2", title: "Agreement in Principle", desc: "Before you start viewing seriously, we arrange an Agreement in Principle from the most suitable lender. This involves a soft credit check that leaves no permanent footprint. Estate agents take you seriously when you have an AIP, and some require one before viewings." },
              { step: "3", title: "Property search and mortgage research", desc: "While you view properties, we research the full market to identify the most appropriate mortgage products for your circumstances. When you make an offer, we're ready to move quickly." },
              { step: "4", title: "Mortgage application", desc: "Once your offer is accepted, we submit your full mortgage application with the chosen lender. We manage all communication, chase for updates, and resolve any queries from the underwriter." },
              { step: "5", title: "Mortgage offer and completion", desc: "Once you have your formal mortgage offer, your solicitor handles exchange and completion. We remain available throughout and advise on protection — life cover, critical illness, and income protection — so your mortgage is properly safeguarded." },
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

      {/* Deposit requirements */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-6">How Much Deposit Do You Need in London?</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            The minimum deposit for a standard residential mortgage is 5% of the purchase price. In London, where
            average prices range from £350,000 in outer boroughs to over £1 million in central areas, building a
            deposit is one of the most significant challenges for first-time buyers. Here&apos;s how the numbers break down:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white rounded-xl overflow-hidden shadow-sm">
              <thead className="bg-green-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Property value</th>
                  <th className="px-4 py-3 text-left">5% deposit</th>
                  <th className="px-4 py-3 text-left">10% deposit</th>
                  <th className="px-4 py-3 text-left">15% deposit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["£300,000", "£15,000", "£30,000", "£45,000"],
                  ["£400,000", "£20,000", "£40,000", "£60,000"],
                  ["£500,000", "£25,000", "£50,000", "£75,000"],
                  ["£600,000", "£30,000", "£60,000", "£90,000"],
                ].map(([price, d5, d10, d15]) => (
                  <tr key={price} className="even:bg-gray-50">
                    <td className="px-4 py-3 font-medium">{price}</td>
                    <td className="px-4 py-3">{d5}</td>
                    <td className="px-4 py-3">{d10}</td>
                    <td className="px-4 py-3">{d15}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mt-4">
            A higher deposit not only reduces your loan size but also unlocks lower interest rates, reducing your monthly payment.
          </p>
        </div>
      </section>

      {/* Schemes */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-8">Government Schemes for London First Time Buyers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Shared Ownership",
                desc: "Buy a share of a property — typically 25% to 75% — and pay subsidised rent on the remaining share. Your deposit is based on the share you buy, making it more accessible. You can buy additional shares (staircase) over time.",
                status: "Active",
              },
              {
                name: "First Homes",
                desc: "A government scheme offering at least a 30% discount on qualifying new-build properties for eligible first-time buyers. Local connections or key worker status may be required. The discount is preserved on future sales.",
                status: "Active",
              },
              {
                name: "Help to Buy",
                desc: "The government equity loan scheme closed in March 2023 and is no longer available. If you hold a Help to Buy ISA, the bonus (up to £3,000) can still be claimed on qualifying purchases through your solicitor.",
                status: "Closed",
              },
            ].map((scheme) => (
              <div key={scheme.name} className="bg-green-50 rounded-xl p-6 border border-green-100">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-green-800 text-lg">{scheme.name}</h3>
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${scheme.status === "Active" ? "bg-green-200 text-green-800" : "bg-gray-200 text-gray-600"}`}>
                    {scheme.status}
                  </span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{scheme.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stamp duty */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-6">Stamp Duty Land Tax for First Time Buyers</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            First-time buyers in England benefit from reduced stamp duty land tax (SDLT). The key thresholds are:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-green-700 font-bold">✓</span>
              <span className="text-gray-700"><strong>0%</strong> on the first £300,000 of the property price</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-700 font-bold">✓</span>
              <span className="text-gray-700"><strong>5%</strong> on the portion from £300,001 to £500,000</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gold-600 font-bold">!</span>
              <span className="text-gray-700">Properties over <strong>£500,000</strong> do not qualify for first-time buyer relief — standard rates apply on the full amount</span>
            </li>
          </ul>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="font-semibold text-green-800 mb-3">Example stamp duty calculations</h3>
            <div className="space-y-2 text-sm">
              {[
                ["£300,000", "£0", "Full relief — nothing to pay"],
                ["£400,000", "£5,000", "5% on £100,000 above the threshold"],
                ["£500,000", "£10,000", "5% on £200,000 above the threshold"],
                ["£600,000", "£20,000", "No FTB relief — standard rates apply"],
              ].map(([price, duty, note]) => (
                <div key={price} className="flex justify-between items-center py-1 border-b border-gray-100 last:border-0">
                  <span className="font-medium">{price}</span>
                  <span className="font-bold text-green-800">{duty}</span>
                  <span className="text-gray-500 text-xs hidden sm:block">{note}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common mistakes */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-8">Common First Time Buyer Mistakes — and How Advice Prevents Them</h2>
          <div className="space-y-4">
            {[
              { mistake: "Applying to multiple lenders directly", solution: "Each hard credit search leaves a footprint visible to future lenders. We use soft searches initially, and only conduct a hard search with one carefully chosen lender when you're ready to apply." },
              { mistake: "Accepting your bank's offer without comparison", solution: "Your bank offers only their own products. A whole-of-market adviser compares 90+ lenders. In most cases, independent research identifies a better product — better rate, better features, or a more sympathetic assessment of your income." },
              { mistake: "Ignoring protection needs", solution: "Your mortgage is the largest financial commitment you'll make. If you can't work due to illness or injury, the mortgage still needs paying. We advise on appropriate income protection, critical illness cover, and life insurance as part of every mortgage case." },
              { mistake: "Underestimating total purchase costs", solution: "Beyond the deposit, first-time buyers need to budget for stamp duty, solicitor fees, survey costs, mortgage fees, and moving costs. We model the total cost of purchase from day one so you're never caught short." },
              { mistake: "Waiting too long to get an Agreement in Principle", solution: "In London's competitive market, having an AIP before you make an offer is essential. Sellers and estate agents prefer buyers with finance arranged. We get your AIP in place quickly — often within 24 hours." },
            ].map((item, i) => (
              <div key={i} className="bg-green-50 rounded-xl p-6 border border-green-100">
                <div className="flex gap-3">
                  <span className="text-red-500 font-bold flex-shrink-0">✗</span>
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">{item.mistake}</p>
                    <p className="text-gray-700 text-sm leading-relaxed"><strong className="text-green-700">How we help:</strong> {item.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-8">First Time Buyer FAQs</h2>
          <div className="space-y-6">
            {[
              { q: "How much deposit do I need to buy my first home in London?", a: "The minimum deposit is 5% of the purchase price. On a £400,000 London property, that is £20,000. At 10% deposit you access more competitive rates and more lender choice. Shared Ownership allows you to buy a share with a smaller deposit relative to the full property price." },
              { q: "What stamp duty will I pay as a first-time buyer?", a: "First-time buyers pay no stamp duty on the first £300,000 and 5% on £300,001–£500,000. On a £400,000 purchase, that is £5,000. Properties above £500,000 don't qualify for first-time buyer relief — standard rates apply on the full amount." },
              { q: "What is an Agreement in Principle and do I need one?", a: "An Agreement in Principle (AIP) is a statement from a lender that they are likely to offer you a mortgage up to a certain amount, subject to a full application. Estate agents take you more seriously with one, and some require it before viewings. We arrange AIPs quickly — typically within 24 hours." },
              { q: "What government schemes are available for first-time buyers in London in 2026?", a: "Shared Ownership (buy a share, pay subsidised rent on the rest) and First Homes (at least 30% discount on qualifying new-builds for eligible buyers) are the main active schemes. Help to Buy closed in March 2023." },
              { q: "How long does the first-time buyer mortgage process take?", a: "From Agreement in Principle to mortgage offer typically takes 2–6 weeks. Exchange and completion add further time. We manage the process proactively to avoid delays on our side and keep you informed throughout." },
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

      <CtaSection heading="Ready to buy your first home in London?" subtext="Free initial advice from Roger Cooper CeMAP — independent, whole-of-market, FCA regulated." />
    </>
  );
}
