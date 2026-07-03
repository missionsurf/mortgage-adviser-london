import type { Metadata } from "next";
import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import RiskWarning from "@/components/RiskWarning";

export const metadata: Metadata = {
  title: "Protection Advice London | Life Cover, Critical Illness & Income Protection",
  description:
    "Independent protection advice from a CeMAP qualified adviser in London. Life insurance, critical illness cover, and income protection tailored to your mortgage and family needs. FCA regulated.",
  alternates: { canonical: "https://www.mortgageadviser.london/protection-advice" },
  openGraph: {
    title: "Protection Advice London | Roger Cooper CeMAP",
    description: "Life cover, critical illness, and income protection advice from an independent FCA regulated adviser in London.",
    url: "https://www.mortgageadviser.london/protection-advice",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need life insurance when I take out a mortgage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Life insurance is not a legal requirement for a mortgage, but it is strongly advisable. If you die during the mortgage term and have no life cover, your dependants could lose their home. A life policy that covers your outstanding mortgage balance ensures the mortgage is repaid if the worst happens.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between life insurance and critical illness cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Life insurance pays a lump sum on death. Critical illness cover pays a lump sum if you are diagnosed with a specified serious illness — such as cancer, heart attack, or stroke — during the policy term. Many people have both: life cover to protect their family on death, and critical illness cover to protect their finances if they become seriously ill.",
      },
    },
    {
      "@type": "Question",
      name: "What does income protection insurance cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Income protection pays a monthly benefit — typically 50-70% of your gross income — if you are unable to work due to illness or injury. Unlike critical illness cover which pays once, income protection continues to pay until you return to work, retire, or the policy term ends. It covers any illness or injury that prevents you working, not just specified conditions.",
      },
    },
    {
      "@type": "Question",
      name: "How much life insurance do I need for my mortgage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "At minimum, your life cover should equal your outstanding mortgage balance to ensure the mortgage is repaid. Many people choose additional cover to also provide for their family's living costs. The right amount depends on your mortgage size, family situation, other assets, and any employer death-in-service benefits.",
      },
    },
    {
      "@type": "Question",
      name: "Is critical illness cover worth having in London?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Critical illness cover can be particularly valuable in London given high mortgage balances and the significant financial impact of a serious illness on a household that may have two incomes servicing a large mortgage. A lump sum payout allows you to pay down the mortgage, fund treatment, or cover living costs during recovery.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mortgageadviser.london" },
    { "@type": "ListItem", position: 2, name: "Protection Advice", item: "https://www.mortgageadviser.london/protection-advice" },
  ],
};

const coverTypes = [
  {
    name: "Life Insurance",
    icon: "🛡️",
    summary: "Pays a lump sum or clears your mortgage on death during the policy term.",
    who: "Anyone with a mortgage and/or financial dependants.",
    keyPoints: [
      "Level term: fixed payout throughout the policy",
      "Decreasing term: payout reduces in line with mortgage balance",
      "Whole of life: covers you for life, no expiry date",
      "Can be written in trust to pay outside your estate",
    ],
  },
  {
    name: "Critical Illness Cover",
    icon: "🏥",
    summary: "Pays a lump sum on diagnosis of a specified serious illness such as cancer, heart attack, or stroke.",
    who: "Mortgage holders who want financial protection if they survive a serious illness.",
    keyPoints: [
      "Covers specified conditions (typically 40-100+ depending on insurer)",
      "Often combined with life insurance in a single policy",
      "Lump sum can be used to clear mortgage, fund treatment, or cover living costs",
      "Children's cover often included at no additional cost",
    ],
  },
  {
    name: "Income Protection",
    icon: "💼",
    summary: "Pays a monthly income if you cannot work due to illness or injury — until you return to work or retire.",
    who: "Self-employed, contractors, and anyone whose family depends on their income.",
    keyPoints: [
      "Typically pays 50-70% of your gross income",
      "Covers any illness or injury preventing work — not just specified conditions",
      "Deferred period of 4, 8, 13, 26, or 52 weeks before payments begin",
      "Particularly important for self-employed with no sick pay entitlement",
    ],
  },
  {
    name: "Mortgage Payment Protection",
    icon: "🏠",
    summary: "Covers your mortgage payment for a limited period (typically 12-24 months) if you are unable to work.",
    who: "Buyers who want short-term cover specifically for mortgage payments.",
    keyPoints: [
      "Shorter-term than income protection — typically 12-24 months maximum",
      "Covers redundancy as well as illness/injury in most policies",
      "Less comprehensive than income protection but lower cost",
      "Usually not suitable as a standalone long-term strategy",
    ],
  },
];

export default function ProtectionAdvicePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-green-900 to-green-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-green-300 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link> › Protection Advice
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Protection Advice London
          </h1>
          <p className="text-green-100 text-xl mb-6">
            Life insurance, critical illness cover, and income protection — ensuring your mortgage and family are properly protected.
          </p>
          <Link href="/contact" className="bg-gold-500 hover:bg-gold-400 text-green-900 font-bold px-8 py-3 rounded-md transition-colors inline-block">
            Get Free Protection Advice
          </Link>
        </div>
      </section>

      {/* Why protection matters */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-6">Why Protection Matters Alongside Your Mortgage</h2>
          <p className="text-gray-700 mb-4 leading-relaxed text-lg">
            Taking out a mortgage is one of the most significant financial commitments you will make. Yet the conversation
            about what happens to that mortgage if you die, become seriously ill, or cannot work is one that many people
            defer or avoid entirely. In London, where mortgage balances are often substantial, the financial consequences
            of being inadequately protected can be severe.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Protection advice is an integral part of the mortgage advice process — not an add-on or an afterthought.
            As your independent adviser, Roger Cooper advises on life cover, critical illness, and income protection
            at the same time as your mortgage, ensuring the two are structured to work together efficiently.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The right protection package depends on your individual circumstances — your mortgage balance, income,
            family situation, employer benefits, existing policies, and budget. We advise on what level of cover is
            genuinely appropriate for your situation, not on selling the maximum possible.
          </p>
        </div>
      </section>

      {/* Cover types */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-10">Types of Protection Cover</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coverTypes.map((cover) => (
              <div key={cover.name} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="text-3xl mb-3">{cover.icon}</div>
                <h3 className="font-bold text-green-800 text-xl mb-2">{cover.name}</h3>
                <p className="text-gray-700 text-sm mb-3 leading-relaxed">{cover.summary}</p>
                <p className="text-gray-500 text-xs font-medium mb-3">
                  <strong className="text-green-700">Who it suits:</strong> {cover.who}
                </p>
                <ul className="space-y-1">
                  {cover.keyPoints.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-green-700 flex-shrink-0 mt-0.5">✓</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* London context */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-6">Protection for London Mortgage Holders</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              London mortgage holders typically carry larger mortgage balances than the UK average — often £300,000
              to £600,000 or more. This makes the financial consequences of an unprotected serious illness or death
              proportionally more significant. The monthly repayments on a £500,000 mortgage are likely to be
              £2,000–£2,500 or more — a burden that cannot continue if the primary income earner is unable to work.
            </p>
            <p>
              Many London households are two-income households where both incomes are required to service the mortgage.
              If one person becomes seriously ill or dies, the remaining partner may not be able to maintain payments
              alone. A combined protection strategy — life cover to clear the mortgage, critical illness cover to
              provide a lump sum for serious illness, and income protection for day-to-day costs — creates a resilient
              financial safety net.
            </p>
            <p>
              Self-employed Londoners face a particular vulnerability: no sick pay, no employer death-in-service
              benefit, and no employer income protection. Income protection insurance is especially important for
              sole traders, contractors, and limited company directors who have no fallback if they cannot work.
            </p>
            <p>
              We review your existing policies — employer benefits, any existing life cover or income protection —
              before recommending additional cover. Many people already have some protection through their employer
              that reduces what they need to arrange privately. Our advice is based on your actual gap in protection,
              not on ignoring what you already have.
            </p>
          </div>
        </div>
      </section>

      {/* Written in trust */}
      <section className="py-12 px-4 bg-green-50 border-y border-green-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-green-800 mb-4">Writing Life Insurance in Trust</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Placing a life insurance policy in trust means the payout goes directly to your chosen beneficiaries
            without passing through your estate. This has two important benefits:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-5 border border-green-200">
              <h3 className="font-semibold text-green-800 mb-2">Faster payment</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Policies in trust are paid directly to beneficiaries without waiting for probate, which can take
                months. This means your family receives funds quickly when they need them most.
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-green-200">
              <h3 className="font-semibold text-green-800 mb-2">Potential inheritance tax benefit</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                A policy written in trust does not form part of your estate for inheritance tax purposes, which may
                reduce the IHT liability on your estate. We advise on the appropriate trust structure for your situation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-8">Protection Advice FAQs</h2>
          <div className="space-y-6">
            {[
              { q: "Do I need life insurance when I take out a mortgage?", a: "Life insurance is not legally required, but it is strongly advisable for anyone with a mortgage and financial dependants. If you die without cover, your family could be required to sell the property to repay the mortgage. A life policy ensures the mortgage is repaid and your family can remain in their home." },
              { q: "What is the difference between life insurance and critical illness cover?", a: "Life insurance pays on death. Critical illness cover pays a lump sum if you are diagnosed with a specified serious illness — typically cancer, heart attack, stroke, and 40+ other conditions — during the policy term. Many people have both. Critical illness cover is often more relevant during working life, when the financial impact of serious illness is greatest." },
              { q: "What does income protection pay and for how long?", a: "Income protection typically pays 50-70% of your gross income as a monthly benefit if you cannot work due to illness or injury. It continues until you return to work, retire, or the policy ends — unlike critical illness which pays once. It is particularly important for the self-employed who have no sick pay entitlement." },
              { q: "How much does protection cover cost?", a: "Costs vary significantly based on your age, health, smoker status, level of cover, and the specific policy terms. A healthy non-smoker in their 30s can typically arrange meaningful life cover and income protection for less than people expect. We source quotes across the market to identify the most appropriate and cost-effective options for your circumstances." },
              { q: "Should I write my life insurance in trust?", a: "For most people with dependants, writing life insurance in trust is advisable. It allows the payout to go directly to your beneficiaries without waiting for probate, and may reduce the inheritance tax liability on your estate. We advise on the appropriate trust structure as part of the protection advice process." },
              { q: "Does my employer provide any protection cover?", a: "Many London employers provide death-in-service benefits (typically 2-4x salary) and some provide income protection or critical illness cover. We review your employer benefits before recommending private cover, so our advice is based on your actual protection gap rather than ignoring existing benefits." },
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
        heading="Get protection advice alongside your mortgage"
        subtext="Independent life cover, critical illness, and income protection advice from Roger Cooper CeMAP."
      />
    </>
  );
}
