import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { areas } from '@/lib/areas'

export function generateStaticParams() {
  return areas.map((a) => ({ borough: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ borough: string }> }): Promise<Metadata> {
  const { borough } = await params
  const area = areas.find((a) => a.slug === borough)
  if (!area) return {}
  return {
    title: `Mortgage Protection Adviser ${area.name} | Life & Income Protection`,
    description: `Independent mortgage protection advice in ${area.name}. Life insurance, critical illness cover, income protection — Roger Cooper CeMAP compares policies to protect your ${area.name} home.`,
    alternates: { canonical: `https://www.mortgageadviser.london/protection-advice/${area.slug}` },
    openGraph: {
      title: `Mortgage Protection Adviser ${area.name} | Roger Cooper CeMAP`,
      description: `Independent protection advice for ${area.name} homeowners — life cover, critical illness, income protection. FCA regulated.`,
      url: `https://www.mortgageadviser.london/protection-advice/${area.slug}`,
    },
  }
}

export default async function ProtectionBoroughPage({ params }: { params: Promise<{ borough: string }> }) {
  const { borough } = await params
  const area = areas.find((a) => a.slug === borough)
  if (!area) notFound()

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mortgageadviser.london' },
      { '@type': 'ListItem', position: 2, name: 'Protection Advice', item: 'https://www.mortgageadviser.london/protection-advice' },
      { '@type': 'ListItem', position: 3, name: area.name, item: `https://www.mortgageadviser.london/protection-advice/${area.slug}` },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `Do I need life insurance when I take out a mortgage in ${area.name}?`,
        acceptedAnswer: { '@type': 'Answer', text: `Life insurance is not a legal requirement when taking out a mortgage, but it is widely recommended. With average property values of ${area.avgPrice} in ${area.name}, a life policy ensures your mortgage is repaid and your family can remain in the property if you die during the mortgage term. We compare whole-of-market policies to find appropriate cover at a competitive premium.` },
      },
      {
        '@type': 'Question',
        name: `What is the difference between life insurance and critical illness cover?`,
        acceptedAnswer: { '@type': 'Answer', text: `Life insurance pays out on death. Critical illness cover pays a lump sum on diagnosis of specified serious conditions — such as cancer, heart attack, or stroke — meaning you can receive a payout while still alive. Many ${area.name} homeowners hold both types of cover, ensuring protection against death and against conditions that prevent them from working.` },
      },
      {
        '@type': 'Question',
        name: `What does income protection cover and do I need it in ${area.name}?`,
        acceptedAnswer: { '@type': 'Answer', text: `Income protection pays a monthly benefit — typically 50%–70% of your gross income — if you are unable to work due to illness or injury. Given ${area.name} property costs, the ability to maintain mortgage payments during a prolonged absence from work is significant. Self-employed residents in ${area.name} particularly benefit from income protection, as they have no employer sick pay to fall back on.` },
      },
      {
        '@type': 'Question',
        name: `How much does mortgage protection cost for a ${area.name} property?`,
        acceptedAnswer: { '@type': 'Answer', text: `Protection premiums vary based on your age, health, occupation, the sum assured, and the type of cover. We compare policies across the whole market to identify products appropriate for your circumstances and the size of mortgage typical in ${area.name}. Initial advice is free and there is no obligation.` },
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <nav className="text-sm text-green-300 mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/protection-advice" className="hover:text-white">Protection Advice</Link>
            <span>/</span>
            <span className="text-white">{area.name}</span>
          </nav>
          <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-3">
            {area.type === 'county' ? 'Home Counties' : 'Greater London'} · Protection Specialist
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
            Mortgage Protection Advice in {area.name}
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-2xl leading-relaxed">
            Independent protection advice for {area.name} homeowners and buyers — life insurance, critical illness cover, and income protection. Whole-of-market comparison.
          </p>
          <div className="flex flex-wrap gap-4 mb-10">
            <div className="bg-white/10 rounded-xl px-5 py-3">
              <div className="text-gold-400 font-extrabold text-xl">{area.avgPrice}</div>
              <div className="text-green-200 text-xs mt-0.5">Average property to protect</div>
            </div>
            <div className="bg-white/10 rounded-xl px-5 py-3">
              <div className="text-gold-400 font-extrabold text-xl">Whole market</div>
              <div className="text-green-200 text-xs mt-0.5">Insurers compared</div>
            </div>
            <div className="bg-white/10 rounded-xl px-5 py-3">
              <div className="text-gold-400 font-extrabold text-xl">Free advice</div>
              <div className="text-green-200 text-xs mt-0.5">Initial consultation</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/contact" className="bg-gold-500 hover:bg-gold-400 text-green-900 font-bold px-7 py-4 rounded-xl transition-colors text-center">
              Get Free Protection Advice
            </Link>
            <a href="tel:08448849748" className="bg-white/10 hover:bg-white/20 border border-white/20 font-semibold px-7 py-4 rounded-xl transition-colors text-center">
              Call 0844 884 9748
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-green-800 mb-4">Protection advice for {area.name} homeowners</h2>
              <p className="text-slate-600 leading-relaxed mb-4">{area.localKnowledge}</p>
              <p className="text-slate-600 leading-relaxed mb-4">
                With average property values of {area.avgPrice} in {area.name}, protecting your ability to
                meet mortgage repayments is particularly important. A serious illness, accident, or death
                could put your home at risk if the right cover isn&apos;t in place.
              </p>
              <p className="text-slate-600 leading-relaxed">
                As independent whole-of-market advisers, we compare life insurance, critical illness, and
                income protection policies from across the market — not just a panel of providers — to find
                cover appropriate for your circumstances and budget.
              </p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <h3 className="font-bold text-green-800 mb-4">Protection types we advise on</h3>
              <ul className="space-y-3">
                {[
                  'Level term life insurance',
                  'Decreasing term life insurance (mortgage linked)',
                  'Critical illness cover — 50+ conditions covered',
                  'Income protection — short and long-term policies',
                  'Mortgage payment protection insurance (MPPI)',
                  'Family income benefit',
                  'Whole of life insurance',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-slate-700">
                    <svg className="w-4 h-4 text-gold-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="mt-5 block w-full text-center bg-green-800 hover:bg-green-700 text-white font-bold py-3 rounded-xl transition-colors text-sm">
                Get Free Advice
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-green-800 mb-8 text-center">Protection FAQs for {area.name} homeowners</h2>
          <div className="space-y-3">
            {[
              { q: `Do I need life insurance when I take out a mortgage in ${area.name}?`, a: `Life insurance is not a legal requirement for a mortgage, but it is widely recommended. With average property values of ${area.avgPrice} in ${area.name}, a life policy ensures your mortgage is repaid and your family can remain in the property if you die during the term. We compare whole-of-market policies to find appropriate cover at a competitive premium.` },
              { q: `What is the difference between life insurance and critical illness cover?`, a: `Life insurance pays out on death. Critical illness cover pays a lump sum on diagnosis of specified serious conditions — such as cancer, heart attack, or stroke — while you are still alive. Many ${area.name} homeowners hold both types, ensuring protection against death and against conditions that prevent them from working.` },
              { q: `What does income protection cover and do I need it in ${area.name}?`, a: `Income protection pays a monthly benefit — typically 50%–70% of gross income — if you are unable to work due to illness or injury. Given ${area.name}'s property costs, maintaining mortgage payments during a prolonged absence from work matters considerably. Self-employed residents particularly benefit, as they have no employer sick pay to rely on.` },
              { q: `How much does mortgage protection cost for a ${area.name} property?`, a: `Premiums depend on your age, health, occupation, the cover amount, and policy type. We compare across the whole market to identify products appropriate for your circumstances and the size of mortgage typical for ${area.name} properties. Initial advice is free and there is no obligation to proceed.` },
            ].map((faq) => (
              <details key={faq.q} className="bg-white rounded-2xl border border-slate-100 group">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none font-semibold text-green-800 hover:text-gold-600 transition-colors text-sm">
                  {faq.q}
                  <svg className="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-green-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-3">Protect your {area.name} home and family</h2>
          <p className="text-green-200 mb-6">Free initial consultation. We respond within 2 hours.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="bg-gold-500 hover:bg-gold-400 text-green-900 font-bold px-8 py-4 rounded-xl transition-colors">Get Free Advice</Link>
            <a href="tel:08448849748" className="bg-white/10 hover:bg-white/20 border border-white/20 font-semibold px-8 py-4 rounded-xl transition-colors">Call 0844 884 9748</a>
          </div>
          <p className="text-green-400 text-xs mt-6">Protection products are subject to underwriting and individual circumstances. Policy terms and conditions apply.</p>
        </div>
      </section>
    </>
  )
}
