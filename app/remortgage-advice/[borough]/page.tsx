import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { areas } from '@/lib/areas'
import CtaSection from '@/components/CtaSection'
import RiskWarning from '@/components/RiskWarning'

export function generateStaticParams() {
  return areas.map((a) => ({ borough: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ borough: string }> }): Promise<Metadata> {
  const { borough } = await params
  const area = areas.find((a) => a.slug === borough)
  if (!area) return {}
  return {
    title: `Remortgage Adviser ${area.name} | Independent Whole-of-Market Advice`,
    description: `Independent remortgage advice in ${area.name}. Coming off your fixed rate? Roger Cooper CeMAP compares 90+ lenders for ${area.name} homeowners. Free initial advice, FCA regulated.`,
    alternates: { canonical: `https://www.mortgageadviser.london/remortgage-advice/${area.slug}` },
    openGraph: {
      title: `Remortgage Adviser ${area.name} | Roger Cooper CeMAP`,
      description: `Independent remortgage advice for ${area.name} homeowners — whole-of-market, 90+ lenders, FCA regulated.`,
      url: `https://www.mortgageadviser.london/remortgage-advice/${area.slug}`,
    },
  }
}

export default async function RemortgageBoroughPage({ params }: { params: Promise<{ borough: string }> }) {
  const { borough } = await params
  const area = areas.find((a) => a.slug === borough)
  if (!area) notFound()

  const deposit10 = `£${(Math.round(area.avgPriceNum * 0.10 / 500) * 500).toLocaleString('en-GB')}`

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mortgageadviser.london' },
      { '@type': 'ListItem', position: 2, name: 'Remortgage Advice', item: 'https://www.mortgageadviser.london/remortgage-advice' },
      { '@type': 'ListItem', position: 3, name: area.name, item: `https://www.mortgageadviser.london/remortgage-advice/${area.slug}` },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `When should I start looking at remortgaging my ${area.name} property?`,
        acceptedAnswer: { '@type': 'Answer', text: `Start reviewing your remortgage options six months before your current deal ends. Most lenders allow you to lock in a new rate up to 6 months in advance, protecting you against rate rises. With ${area.name} property values averaging ${area.avgPrice}, timing your remortgage correctly can save you thousands of pounds.` },
      },
      {
        '@type': 'Question',
        name: `Can I release equity from my ${area.name} property when I remortgage?`,
        acceptedAnswer: { '@type': 'Answer', text: `Yes. Many ${area.name} homeowners have built up significant equity given average prices of ${area.avgPrice}. A remortgage can release capital for home improvements, debt consolidation, or other purposes. We assess how much equity release is appropriate and compare rates across 90+ lenders.` },
      },
      {
        '@type': 'Question',
        name: `Should I stay with my current lender or switch when remortgaging in ${area.name}?`,
        acceptedAnswer: { '@type': 'Answer', text: `Your existing lender may offer convenient product transfer rates, but these are not always the most competitive on the market. We compare your lender's retention offer against 90+ lenders and present both options clearly. Switching lenders often delivers a better rate, even after accounting for any fees.` },
      },
      {
        '@type': 'Question',
        name: `How long does a remortgage take in ${area.name}?`,
        acceptedAnswer: { '@type': 'Answer', text: `A standard remortgage with a new lender typically takes 4–8 weeks from application to completion. A product transfer with your existing lender can complete within days. We manage the timeline to ensure your new deal completes before your existing rate ends, avoiding any time on the Standard Variable Rate.` },
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
            <Link href="/remortgage-advice" className="hover:text-white">Remortgage Advice</Link>
            <span>/</span>
            <span className="text-white">{area.name}</span>
          </nav>
          <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-3">
            {area.type === 'county' ? 'Home Counties' : 'Greater London'} · Remortgage Specialist
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
            Remortgage Adviser in {area.name}
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-2xl leading-relaxed">
            Independent remortgage advice for {area.name} homeowners — comparing 90+ lenders to find the right deal for your circumstances.
          </p>
          <div className="flex flex-wrap gap-4 mb-10">
            <div className="bg-white/10 rounded-xl px-5 py-3">
              <div className="text-gold-400 font-extrabold text-xl">{area.avgPrice}</div>
              <div className="text-green-200 text-xs mt-0.5">Average property price</div>
            </div>
            <div className="bg-white/10 rounded-xl px-5 py-3">
              <div className="text-gold-400 font-extrabold text-xl">{deposit10}</div>
              <div className="text-green-200 text-xs mt-0.5">Typical 10% equity at purchase</div>
            </div>
            <div className="bg-white/10 rounded-xl px-5 py-3">
              <div className="text-gold-400 font-extrabold text-xl">90+</div>
              <div className="text-green-200 text-xs mt-0.5">Lenders compared</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/contact" className="bg-gold-500 hover:bg-gold-400 text-green-900 font-bold px-7 py-4 rounded-xl transition-colors text-center">
              Get Free Remortgage Advice
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
              <h2 className="text-2xl font-bold text-green-800 mb-4">Remortgage advice for {area.name} homeowners</h2>
              <p className="text-slate-600 leading-relaxed mb-4">{area.localKnowledge}</p>
              <p className="text-slate-600 leading-relaxed mb-4">
                With average property values of {area.avgPrice} in {area.name}, many homeowners have built up
                significant equity since their initial purchase. A remortgage is an opportunity to access that
                equity, secure a more competitive rate, or both. As an independent whole-of-market adviser,
                we compare 90+ lenders to find the right product for your specific circumstances — not just
                the first available deal.
              </p>
              <p className="text-slate-600 leading-relaxed">
                The optimal time to start is six months before your current deal ends. We lock in your rate
                early, manage the application, and ensure you complete before you roll onto your lender&apos;s
                Standard Variable Rate.
              </p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <h3 className="font-bold text-green-800 mb-4">What we advise on for {area.name} remortgages</h3>
              <ul className="space-y-3">
                {[
                  'Like-for-like remortgage — new rate, same balance',
                  'Equity release — capital for improvements or other purposes',
                  'Debt consolidation remortgage',
                  'Fixed rate vs tracker — full cost modelling',
                  'Product transfer comparison vs whole market',
                  'Buy to let remortgage and portfolio restructuring',
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
          <h2 className="text-2xl font-bold text-green-800 mb-8 text-center">Remortgage FAQs for {area.name}</h2>
          <div className="space-y-3">
            {[
              { q: `When should I start looking at remortgaging my ${area.name} property?`, a: `Start six months before your current deal ends. Most lenders allow you to lock in a new rate up to 6 months in advance, protecting you against rate rises while your existing deal continues. With ${area.name} property values averaging ${area.avgPrice}, timing your remortgage well can save you thousands over the new fixed term.` },
              { q: `Can I release equity from my ${area.name} property when I remortgage?`, a: `Yes. Many ${area.name} homeowners have built up significant equity given average prices of ${area.avgPrice}. A remortgage can release capital for home improvements, debt consolidation, or other purposes. We assess how much equity release is appropriate for your circumstances and compare rates across 90+ lenders for the combined loan.` },
              { q: `Should I stay with my current lender or switch when remortgaging in ${area.name}?`, a: `Your existing lender may offer a convenient product transfer, but retention rates are not always the most competitive. We compare your lender's retention offer against the full market — 90+ lenders — and present both options clearly. Switching lenders often produces a better outcome even after accounting for any arrangement fees.` },
              { q: `How long does a remortgage take in ${area.name}?`, a: `A standard remortgage with a new lender typically takes 4–8 weeks from application to completion. A product transfer with your existing lender can complete within days. We manage the timeline to ensure completion before your existing rate ends, so you avoid any time on the Standard Variable Rate.` },
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
          <h2 className="text-2xl font-bold mb-3">Ready for remortgage advice in {area.name}?</h2>
          <p className="text-green-200 mb-6">Free initial consultation. We respond within 2 hours.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="bg-gold-500 hover:bg-gold-400 text-green-900 font-bold px-8 py-4 rounded-xl transition-colors">Get Free Advice</Link>
            <a href="tel:08448849748" className="bg-white/10 hover:bg-white/20 border border-white/20 font-semibold px-8 py-4 rounded-xl transition-colors">Call 0844 884 9748</a>
          </div>
          <p className="text-green-400 text-xs mt-6">Your home may be repossessed if you do not keep up repayments on your mortgage.</p>
        </div>
      </section>
    </>
  )
}
