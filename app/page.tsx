import type { Metadata } from "next";
import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import RiskWarning from "@/components/RiskWarning";

export const metadata: Metadata = {
  title: "Independent Mortgage Adviser London | CeMAP Qualified Expert",
  description:
    "Independent mortgage adviser in London. Whole-of-market advice from Roger Cooper CeMAP, FCA regulated. 90+ lenders, 15+ years experience. Free initial advice.",
  alternates: { canonical: "https://www.mortgageadviser.london" },
  openGraph: {
    title: "Independent Mortgage Adviser London | MA London",
    description: "Trusted, whole-of-market mortgage advice from a CeMAP qualified independent adviser in London.",
    url: "https://www.mortgageadviser.london",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does a mortgage adviser do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A mortgage adviser assesses your full financial circumstances — income, outgoings, deposit, credit history, and future plans — and recommends the most suitable mortgage from across the market. Unlike a mortgage comparison website, an adviser provides regulated, personalised guidance and manages the application through to mortgage offer.",
      },
    },
    {
      "@type": "Question",
      name: "How much does mortgage advice cost in London?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Initial mortgage advice from MA London is free. Our fee is only charged when we submit a mortgage application on your behalf, and is fully disclosed upfront before you commit.",
      },
    },
    {
      "@type": "Question",
      name: "How many lenders does MA London have access to?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As an independent whole-of-market adviser, we have access to 90+ mortgage lenders including high street banks, specialist lenders, and private banks not available directly to the public.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between a mortgage adviser and a mortgage broker?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A mortgage broker primarily focuses on finding and comparing mortgage products. A mortgage adviser takes a broader approach — advising on your overall circumstances, the right mortgage structure, protection needs, and long-term suitability, not just the cheapest rate.",
      },
    },
    {
      "@type": "Question",
      name: "Is MA London regulated by the FCA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Mortgage International Ltd is an appointed representative of The Right Mortgage Limited, which is authorised and regulated by the Financial Conduct Authority (FCA Ref: 478810).",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mortgageadviser.london" },
  ],
};

const services = [
  {
    title: "First Time Buyer Advice",
    desc: "From Agreement in Principle to keys in hand — expert guidance for your first home purchase.",
    href: "/first-time-buyer-advice",
    icon: "🏠",
  },
  {
    title: "Remortgage Advice",
    desc: "Coming off your fixed rate? We compare 90+ lenders to find the right deal for your circumstances.",
    href: "/remortgage-advice",
    icon: "🔄",
  },
  {
    title: "Buy to Let Advice",
    desc: "Structuring London investment mortgages correctly — personal name versus limited company, ICR calculations, portfolio strategy.",
    href: "/buy-to-let-advice",
    icon: "🏢",
  },
  {
    title: "Self-Employed Mortgage Advice",
    desc: "SA302s, day rate contractors, limited company directors — we present your income to lenders in the most effective way.",
    href: "/self-employed-mortgage-advice",
    icon: "💼",
  },
  {
    title: "Expat Mortgage Advice",
    desc: "UK expats and overseas buyers — specialist lenders, foreign income assessment, and international mortgage solutions.",
    href: "/contact",
    icon: "✈️",
  },
  {
    title: "Protection Advice",
    desc: "Life cover, critical illness, and income protection — ensuring you and your family are protected alongside your mortgage.",
    href: "/contact",
    icon: "🛡️",
  },
];

const testimonials = [
  {
    name: "Sarah & James, Hackney",
    text: "Roger helped us navigate a really complex situation — I'm a contractor and James is employed, and we needed to maximise our borrowing for a Hackney terrace. Roger found us a lender that treated my day rate income brilliantly. We'd have been stuck without him.",
    stars: 5,
  },
  {
    name: "Marcus T., Canary Wharf",
    text: "I went to my private bank first and they couldn't do what I needed. Roger knew exactly which specialist lender would work for my situation and the whole process was smooth from start to finish. Genuinely impressive knowledge of the market.",
    stars: 5,
  },
  {
    name: "Priya K., Ealing",
    text: "Being a first-time buyer in London on my own felt overwhelming. Roger made everything clear, explained every cost, and found me a great rate. I'm now in my own flat in Ealing — I couldn't have done it without his advice.",
    stars: 5,
  },
  {
    name: "David & Helen, Richmond",
    text: "We were remortgaging after five years and assumed our existing lender would be fine. Roger showed us we were about to leave thousands of pounds on the table. Switched to a new lender and saved significantly over the next fix. Highly recommend.",
    stars: 5,
  },
  {
    name: "Nkechi A., Stratford",
    text: "My accountant told me I couldn't get a mortgage because my income was structured in a way most lenders don't like. Roger found a lender who assessed it completely differently and I got the mortgage I needed. Expert advice, patient, and clear throughout.",
    stars: 5,
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Independent · Whole-of-Market · FCA Regulated
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Independent Mortgage Adviser in London
          </h1>
          <p className="text-xl sm:text-2xl text-green-100 font-medium mb-4">
            Trusted, Whole-of-Market Advice from a CeMAP Qualified Expert
          </p>
          <p className="text-green-200 max-w-3xl mx-auto mb-8 text-lg">
            Roger Cooper CeMAP has been providing independent mortgage advice to London buyers for 15+ years.
            With access to 90+ lenders and deep knowledge of London&apos;s unique property market, we find the mortgage
            that is right for your circumstances — not just the nearest available product.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gold-500 hover:bg-gold-400 text-green-900 font-bold px-8 py-4 rounded-md text-lg transition-colors"
            >
              Get Free Advice
            </Link>
            <a
              href="tel:08448849748"
              className="border-2 border-white hover:bg-white hover:text-green-800 font-bold px-8 py-4 rounded-md text-lg transition-colors"
            >
              Call 0844 884 9748
            </a>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-green-800 text-white py-4 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-center">
            {[
              "✓ CeMAP Qualified",
              "✓ FCA Regulated",
              "✓ 15+ Years Experience",
              "✓ 90+ Lenders",
              "✓ 5★ Rated",
              "✓ Free Initial Advice",
            ].map((item) => (
              <span key={item} className="text-gold-400">{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* What does a mortgage adviser do? */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-6">What Does a Mortgage Adviser Do?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed text-lg">
            A mortgage adviser is fundamentally different from a mortgage broker or a comparison website.
            Where a broker primarily searches for competitive rates, an adviser takes a holistic view of your
            financial situation — your income structure, outgoings, future plans, risk tolerance, and long-term
            financial wellbeing — and recommends the mortgage that is genuinely right for your circumstances.
            This distinction matters, especially in London, where income types are often complex, property values
            are high, and the wrong mortgage decision can have significant financial consequences.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed text-lg">
            As an independent whole-of-market adviser, Roger Cooper has no commercial tie to any single lender
            or panel. This means his recommendation is driven entirely by what is best for you — not by
            commission arrangements, referral incentives, or restricted panels. With access to over 90 lenders
            including high street banks, specialist lenders, and private banks, the advice you receive is
            genuinely broad and genuinely independent.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            The advice process covers more than just the mortgage itself. It includes protection advice — what
            happens to your mortgage if you become seriously ill or die? — and honest guidance on costs,
            timelines, and risks. Whether you are buying your first home, remortgaging, investing in buy to let,
            or navigating a complex self-employed income structure, independent mortgage advice in London means
            working with someone who understands both the full market and the specific dynamics of London
            property.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-4">Mortgage Advice Services</h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            Specialist mortgage advice across all buyer types and circumstances, with access to 90+ lenders.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.href + s.title}
                href={s.href}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-green-300 hover:shadow-md transition-all group"
              >
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-semibold text-green-800 text-lg mb-2 group-hover:text-green-700">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why independent advice matters */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-8">Why Independent Advice Matters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Whole-of-market access",
                desc: "An independent adviser has access to 90+ lenders — not just a restricted panel of 20-30. For complex income structures or non-standard properties, this breadth of access can be the difference between getting the right mortgage and not getting one at all.",
              },
              {
                title: "No commercial bias",
                desc: "Tied advisers and bank mortgage advisers can only recommend their own products. An independent adviser recommends what is right for you, disclosed transparently, with no hidden commercial relationships driving the recommendation.",
              },
              {
                title: "Specialist London knowledge",
                desc: "London's property market has unique characteristics — leasehold complexity, high values, international buyers, new-build timelines, and complex incomes. An adviser who works primarily in London understands these nuances in a way that a general adviser does not.",
              },
              {
                title: "Regulated advice, your protection",
                desc: "Regulated mortgage advice means you have FCA protections. If advice was unsuitable, you can complain to the Financial Ombudsman Service. This protection does not apply if you arrange a mortgage without advice, or through an unregulated channel.",
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

      {/* London market context */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-6">The London Property Market: Why Specialist Advice Matters Here</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            London&apos;s property market is unlike anywhere else in the UK. Average prices across Greater London sit
            at approximately £500,000 — more than double the UK average — with inner boroughs like Kensington
            and Chelsea, Westminster, and Camden averaging £750,000 to £1.2 million. Even outer boroughs like
            Barking and Havering, which represent the more affordable end of the London spectrum, typically require
            deposits of £20,000–£40,000 for a first-time buyer.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            This scale means that the difference between good mortgage advice and generic advice is measurable in
            thousands of pounds. A lender who assesses your income more favourably might offer £50,000 more than
            another. A better rate on a £400,000 mortgage saves hundreds of pounds a year. Over a five-year fixed
            term, these differences compound significantly.
          </p>
          <p className="text-gray-700 leading-relaxed">
            London also has specific complexities that require local knowledge: leasehold properties with service
            charges and short lease risks; new-build developments with developer timelines that affect mortgage
            validity; a high proportion of buyers with complex income structures — bonuses, contractor income,
            self-employed earnings, and overseas income. Our 15+ years of experience advising London buyers means
            we navigate all of these confidently and efficiently.
          </p>
          <div className="mt-6">
            <Link
              href="/areas"
              className="inline-block bg-green-800 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-md transition-colors"
            >
              View all London areas →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-10">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-green-50 rounded-xl p-6 border border-green-100">
                <div className="flex mb-3">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <span key={i} className="text-gold-500 text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">&ldquo;{t.text}&rdquo;</p>
                <p className="font-semibold text-green-800 text-sm">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "What does a mortgage adviser do?",
                a: "A mortgage adviser assesses your full financial circumstances — income, outgoings, deposit, credit history, and future plans — and recommends the most suitable mortgage from across the market. Unlike a comparison website, an adviser provides regulated, personalised guidance and manages the application through to mortgage offer.",
              },
              {
                q: "How much does mortgage advice cost in London?",
                a: "Initial mortgage advice is free. Our fee is only charged when we submit a mortgage application on your behalf, and is fully disclosed upfront in our Initial Disclosure Document before you commit to anything.",
              },
              {
                q: "How many lenders do you have access to?",
                a: "As an independent whole-of-market adviser, we have access to 90+ mortgage lenders — including high street banks, specialist lenders, and private banks not always available directly to the public.",
              },
              {
                q: "What is the difference between a mortgage adviser and a mortgage broker?",
                a: "A mortgage broker primarily focuses on finding and comparing mortgage products. A mortgage adviser takes a broader approach — advising on your overall circumstances, the right mortgage structure, protection needs, and long-term suitability, not just the cheapest rate.",
              },
              {
                q: "Is MA London regulated by the FCA?",
                a: "Yes. Mortgage International Ltd is an appointed representative of The Right Mortgage Limited, which is authorised and regulated by the Financial Conduct Authority (FCA Ref: 478810).",
              },
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

      <CtaSection />
    </>
  );
}
