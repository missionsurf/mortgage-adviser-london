import type { Metadata } from "next";
import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import RiskWarning from "@/components/RiskWarning";

export const metadata: Metadata = {
  title: "Self Employed Mortgage Adviser London 2026 | SA302, Contractors, Directors",
  description:
    "Self employed mortgage adviser London 2026. SA302, day rate contractors, limited company directors — Roger Cooper CeMAP presents your income to lenders effectively. Free advice.",
  alternates: { canonical: "https://www.mortgageadviser.london/self-employed-mortgage-advice" },
  openGraph: {
    title: "Self Employed Mortgage Adviser London 2026 | Roger Cooper CeMAP",
    description: "Specialist self-employed mortgage advice in London — SA302, day rate contractors, limited company directors. Free initial advice.",
    url: "https://www.mortgageadviser.london/self-employed-mortgage-advice",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What documents do I need for a self-employed mortgage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most lenders require two years' SA302 forms and Tax Year Overviews from HMRC, plus two years' full accounts for limited company directors. Contractors may also need their current contract and contract history. Some lenders accept one year's accounts in certain circumstances.",
      },
    },
    {
      "@type": "Question",
      name: "Can I get a mortgage if I've been self-employed for only one year?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, though options are more limited. Some lenders will consider one year of accounts, particularly if you have a strong track record in your industry or a larger deposit. We identify which lenders offer this flexibility and whether now is the right time to apply.",
      },
    },
    {
      "@type": "Question",
      name: "How are day rate contractors assessed for mortgages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Day rate contractors are often assessed on projected annual income — day rate multiplied by 48 weeks and 5 days — rather than accounts. This can produce a significantly higher income figure. We identify lenders who use day-rate assessment and advise on the documentation required.",
      },
    },
    {
      "@type": "Question",
      name: "What is an SA302 and where do I get one?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An SA302 is HMRC's tax calculation document, produced from your self-assessment tax return. You can download it directly from your HMRC personal tax account at gov.uk. Lenders require the last two years' SA302s alongside Tax Year Overview documents.",
      },
    },
    {
      "@type": "Question",
      name: "As a limited company director, can lenders consider my retained profits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Some lenders will use the company's net profit before tax rather than just salary and dividends drawn. This is valuable for directors who retain significant profit in the company. We identify which lenders take this more generous approach and advise on how to present your accounts.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mortgageadviser.london" },
    { "@type": "ListItem", position: 2, name: "Self-Employed Mortgage Advice", item: "https://www.mortgageadviser.london/self-employed-mortgage-advice" },
  ],
};

export default function SelfEmployedPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-gradient-to-br from-green-900 to-green-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-green-300 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link> › Self-Employed Mortgage Advice
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Self-Employed Mortgage Adviser in London</h1>
          <p className="text-green-100 text-xl mb-6">
            SA302s, contractor day rates, limited company directors — we present your income to lenders in the most effective way possible.
          </p>
          <Link href="/contact" className="bg-gold-500 hover:bg-gold-400 text-green-900 font-bold px-8 py-3 rounded-md transition-colors inline-block">
            Get Free Advice
          </Link>
        </div>
      </section>

      {/* Documentation */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-6">SA302 and Tax Year Overview Requirements</h2>
          <p className="text-gray-700 mb-4 leading-relaxed text-lg">
            For sole traders and partnerships, the SA302 (HMRC tax calculation) and Tax Year Overview are the
            primary documents lenders use to verify self-employed income. Most lenders require the last two years
            of both documents, showing net profit before tax.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            You can download SA302s directly from your HMRC personal tax account at gov.uk — you don&apos;t need to
            request them from HMRC by post. The Tax Year Overview is a separate document that confirms the tax
            has been paid or is due.
          </p>
          <div className="bg-green-50 rounded-xl p-6 border border-green-200">
            <h3 className="font-semibold text-green-800 mb-3">Documents required by most lenders</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium text-green-700 mb-2">Sole trader / partnership:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>✓ Last 2 years&apos; SA302 forms</li>
                  <li>✓ Last 2 years&apos; Tax Year Overviews</li>
                  <li>✓ Latest 3 months&apos; business bank statements</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-green-700 mb-2">Limited company director:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>✓ Last 2 years&apos; company accounts</li>
                  <li>✓ Last 2 years&apos; SA302 forms</li>
                  <li>✓ Latest 3 months&apos; business bank statements</li>
                  <li>✓ Accountant letter (some lenders)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1 year vs 2 year */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-6">One Year vs Two Years of Accounts</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            The standard requirement is two years of self-employment history. However, this is not an absolute
            rule — some lenders will consider one year of accounts in specific circumstances:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="font-semibold text-green-800 mb-3">Two years — the standard</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">The vast majority of lenders require two years&apos; accounts. Most applicants with two years of trading history have the widest choice of lenders and most competitive rates.</p>
              <p className="text-sm text-green-700 font-medium">Best approach: wait until you have two full years if possible</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="font-semibold text-green-800 mb-3">One year — limited but possible</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">A smaller number of lenders will consider one year of accounts if: you have a track record in the same industry from prior employment, you have a larger deposit (15%+), or your income is otherwise strong and consistent.</p>
              <p className="text-sm text-green-700 font-medium">We identify which lenders offer this flexibility</p>
            </div>
          </div>
        </div>
      </section>

      {/* Day rate contractors */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-6">Day Rate Contractor Mortgages</h2>
          <p className="text-gray-700 mb-4 leading-relaxed text-lg">
            If you work as a contractor on a day rate basis — typically in technology, engineering, finance, or
            consulting — you may find that lenders who use your accounts-based income significantly underestimate
            your true earning power. This is because contractors often retain profit in a limited company or
            take dividends efficiently, resulting in a lower declared personal income than their actual day rate suggests.
          </p>
          <div className="bg-green-50 rounded-xl p-6 border border-green-200 mb-6">
            <h3 className="font-semibold text-green-800 mb-3">How day-rate assessment works</h3>
            <p className="text-gray-700 text-sm mb-3">
              Lenders who use day-rate assessment calculate your income as: <strong>Daily rate × 5 days × 48 weeks</strong>
            </p>
            <div className="bg-white rounded-lg p-4 text-sm">
              <p className="font-medium mb-2">Example:</p>
              <p className="text-gray-700">Day rate: £500/day</p>
              <p className="text-gray-700">Annual income used: £500 × 5 × 48 = <strong className="text-green-800">£120,000</strong></p>
              <p className="text-gray-500 text-xs mt-2">This compares favourably to accounts-based assessment, where a contractor drawing £35,000 salary + £25,000 dividends would be assessed at £60,000</p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Not all lenders use day-rate assessment, and those that do have specific requirements — typically 12
            months of continuous contracting in the same field and a current active contract. We identify which
            lenders will apply day-rate criteria to your specific situation.
          </p>
        </div>
      </section>

      {/* Ltd company directors */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-6">Limited Company Directors: Salary + Dividends + Retained Profit</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Directors of their own limited companies face the most nuanced mortgage assessment. Lenders take three
            main approaches to calculating your income:
          </p>
          <div className="space-y-4">
            {[
              { approach: "Salary + dividends drawn", detail: "The most common approach. The lender adds your PAYE salary and dividends actually drawn from the company in the last two years. This can understate income for directors who reinvest profit.", rating: "Standard" },
              { approach: "Net profit (company)", detail: "Some lenders will use the company's net profit before tax as income, rather than what you've personally drawn. This is significantly more generous for directors who retain substantial profit.", rating: "More generous" },
              { approach: "Salary + share of net profit", detail: "The most generous interpretation — combines your salary with a share (sometimes 100%) of the company's net profit. Available from a smaller number of specialist lenders.", rating: "Most generous" },
            ].map((item) => (
              <div key={item.approach} className="bg-white rounded-xl p-6 border border-gray-200 flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-green-800">{item.approach}</h3>
                    <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">{item.rating}</span>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-8">How Self-Employed Mortgage Advice Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { step: "1", title: "Income assessment", desc: "We review your accounts, SA302s, and tax returns to understand how your income is structured and identify the most effective way to present it to lenders." },
              { step: "2", title: "Lender matching", desc: "We identify the lenders whose income assessment criteria are most favourable for your specific situation — sole trader, contractor, or limited company director." },
              { step: "3", title: "Document preparation", desc: "We provide a tailored checklist and help you prepare your documents correctly. Poorly prepared applications for self-employed borrowers are a common cause of delays and declines." },
              { step: "4", title: "Application and mortgage offer", desc: "We submit your application with the chosen lender, manage underwriter queries proactively, and ensure your case is presented as strongly as possible through to mortgage offer." },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 bg-green-50 rounded-2xl p-6 border border-green-100">
                <div className="w-10 h-10 rounded-full bg-green-800 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-green-800 mb-1">{item.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you need to know */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-6">What Self-Employed Borrowers Need to Know in 2026</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Self-employment is increasingly common in London — technology, media, finance, and professional
              services all have large contractor and freelance workforces. The mortgage market has adapted to this
              reality, and in 2026 a well-presented self-employed case with the right lender is no more difficult
              than an employed application. The key is matching your income profile to the right lender.
            </p>
            <p>
              The single biggest factor in a successful self-employed mortgage application is income presentation.
              Different lenders calculate your income in materially different ways, and the difference between the
              highest and lowest income assessment across the market can run to tens of thousands of pounds in
              practice. An adviser who understands which lenders apply which criteria — and who actively researches
              this for your specific case — is significantly more valuable to a self-employed borrower than to
              someone with straightforward PAYE income.
            </p>
            <p>
              For sole traders and partnerships, lenders typically use net profit from SA302 forms as the basis
              for income. If your profit has fluctuated between years, some lenders average the last two years
              while others use the lower of the two. For growing businesses where year two is significantly higher
              than year one, we identify lenders who will use the most recent year or weight towards it.
            </p>
            <p>
              Limited company directors face the most complex assessment. The standard approach — salary plus
              dividends drawn — often significantly understates the financial strength of a business owner who
              retains substantial profit for reinvestment. The more generous lenders will use salary plus net
              profit, or salary plus share of net profit, giving a materially higher income for mortgage purposes.
              We know which lenders take these approaches and how to present your accounts to them.
            </p>
            <p>
              Timing can be important for self-employed applications. If your most recent tax year significantly
              increases your assessable income, it can be worth waiting for that return to be filed before applying
              — even a few months' wait can make a material difference to your maximum borrowing. Conversely, if
              you have taken large drawings in recent years that may reduce from this year, earlier action may be
              advisable. We advise on timing as part of the initial fact-find.
            </p>
            <p>
              Finally, credit profile matters as much for self-employed borrowers as for employed ones. A clean
              credit history — no late payments, no missed payments, low credit card balances — significantly
              broadens lender choice. If there is adverse credit in your history, some specialist lenders will
              still consider your application; the terms will reflect the additional risk, but the mortgage market
              for self-employed borrowers with imperfect credit is wider than many people assume.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-8">Self-Employed Mortgage FAQs</h2>
          <div className="space-y-6">
            {[
              { q: "What documents do I need for a self-employed mortgage in London?", a: "Most lenders require two years' SA302 forms and Tax Year Overviews from HMRC, plus two years' full accounts for limited company directors. Contractors may also need their current contract and 12 months of contract history. We provide a full checklist tailored to your situation." },
              { q: "Can I get a mortgage if I've been self-employed for only one year?", a: "Yes, though options are more limited. Some lenders will consider one year's accounts if you have sector experience, a larger deposit (15%+), or strong overall profile. We identify which lenders offer this flexibility and advise on whether now is the right time to apply." },
              { q: "How are day rate contractors assessed for mortgages?", a: "Day rate contractors can be assessed on projected annual income (rate × 5 × 48 weeks) rather than accounts. A £500/day contractor would have £120,000 annual income recognised — significantly better than accounts showing £60,000 drawn. We identify lenders who use day-rate assessment." },
              { q: "What is an SA302 and where do I get one?", a: "An SA302 is HMRC's tax calculation from your self-assessment return. Download it from your HMRC online account at gov.uk — no need to write to HMRC. You need the last two years, plus Tax Year Overview documents confirming the tax was filed." },
              { q: "As a limited company director, can lenders consider my retained profits?", a: "Some lenders will use the company's net profit before tax as your income rather than just salary and dividends drawn. This is particularly valuable if you retain substantial profit. We identify which lenders take this approach and how to present your accounts most effectively." },
              { q: "My profits have gone up significantly — will lenders use my latest year?", a: "Some lenders average the last two years; others will use the most recent year if it is higher. We identify which approach gives you the highest assessable income for your specific situation. In some cases, waiting until you have filed a more recent tax return is the right call — we advise on timing as part of the process." },
              { q: "Does being self-employed affect my mortgage rate?", a: "Not directly — lenders price by LTV and risk profile, not employment type. A self-employed borrower with a clean credit history and a 25%+ deposit will access the same rates as an employed borrower in the same position. The challenge is demonstrating income in a way the lender accepts, which is where specialist advice adds value." },
              { q: "My accountant has minimised my taxable income — does this hurt my mortgage application?", a: "It can. Aggressive tax efficiency that reduces declared profit also reduces assessable mortgage income. There is a direct trade-off between paying less tax and demonstrating higher income for mortgage purposes. We advise on this tension as part of the initial advice — and identify lenders who are more flexible about how they assess self-employed income." },
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

      <CtaSection heading="Self-employed and need mortgage advice in London?" subtext="Roger Cooper CeMAP specialises in complex self-employed income. Free initial advice, whole-of-market access." />
    </>
  );
}
