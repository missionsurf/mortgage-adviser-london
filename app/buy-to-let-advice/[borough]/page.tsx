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
    title: `Buy to Let Mortgage Adviser ${area.name} | Independent BTL Advice`,
    description: `Independent buy to let mortgage advice in ${area.name}. Roger Cooper CeMAP compares 90+ lenders for ${area.name} landlords. Portfolio and single property BTL. FCA regulated.`,
    alternates: { canonical: `https://www.mortgageadviser.london/buy-to-let-advice/${area.slug}` },
    openGraph: {
      title: `Buy to Let Mortgage Adviser ${area.name} | Roger Cooper CeMAP`,
      description: `Independent BTL mortgage advice for ${area.name} landlords — whole-of-market, 90+ lenders, FCA regulated.`,
      url: `https://www.mortgageadviser.london/buy-to-let-advice/${area.slug}`,
    },
  }
}

export default async function BuyToLetBoroughPage({ params }: { params: Promise<{ borough: string }> }) {
  const { borough } = await params
  const area = areas.find((a) => a.slug === borough)
  if (!area) notFound()

  const deposit25 = `£${(Math.round(area.avgPriceNum * 0.25 / 1000) * 1000).toLocaleString('en-GB')}`

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mortgageadviser.london' },
      { '@type': 'ListItem', position: 2, name: 'Buy to Let Advice', item: 'https://www.mortgageadviser.london/buy-to-let-advice' },
      { '@type': 'ListItem', position: 3, name: area.name, item: `https://www.mortgageadviser.london/buy-to-let-advice/${area.slug}` },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `What deposit do I need for a buy to let mortgage in ${area.name}?`,
        acceptedAnswer: { '@type': 'Answer', text: `Most buy to let lenders require a minimum 25% deposit, which on ${area.name}'s average property price of ${area.avgPrice} equates to approximately ${deposit25}. A larger deposit typically unlocks more competitive rates and reduces the rental income needed to satisfy the lender's stress test.` },
      },
      {
        '@type': 'Question',
        name: `How do lenders assess rental yield for ${area.name} properties?`,
        acceptedAnswer: { '@type': 'Answer', text: `Lenders apply a rental stress test — typically requiring the monthly rent to cover 125%–145% of the mortgage payment at a stressed interest rate (often 5.5%–6.5%). London rental demand is strong in areas like ${area.name}, but we verify the projected rental income against multiple lenders' stress tests before recommending a product.` },
      },
      {
        '@type': 'Question',
        name: `Can I get a buy to let mortgage in ${area.name} through a limited company?`,
        acceptedAnswer: { '@type': 'Answer', text: `Yes. Many landlords now purchase through a Special Purpose Vehicle (SPV) limited company, which can offer tax efficiencies for higher-rate taxpayers following the Section 24 mortgage interest relief changes. We advise on personal name vs limited company BTL mortgages and recommend you consult a tax adviser to confirm the right structure for your situation.` },
      },
      {
        '@type': 'Question',
        name: `Do I need a separate mortgage for each ${area.name} rental property?`,
        acceptedAnswer: { '@type': 'Answer', text: `Each property normally requires its own mortgage, however some lenders offer portfolio products that consolidate multiple properties under one facility. If you own four or more properties, most lenders classify you as a portfolio landlord, which triggers additional underwriting. We have extensive experience advising portfolio landlords across ${area.name}.` },
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
            <Link href="/buy-to-let-advice" className="hover:text-white">Buy to Let Advice</Link>
            <span>/</span>
            <span className="text-white">{area.name}</span>
          </nav>
          <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-3">
            {area.type === 'county' ? 'Home Counties' : 'Greater London'} · Buy to Let Specialist
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
            Buy to Let Mortgage Adviser in {area.name}
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-2xl leading-relaxed">
            Independent buy to let mortgage advice for {area.name} landlords — single properties, HMOs, and portfolio finance. Whole-of-market, 90+ lenders.
          </p>
          <div className="flex flex-wrap gap-4 mb-10">
            <div className="bg-white/10 rounded-xl px-5 py-3">
              <div className="text-gold-400 font-extrabold text-xl">{area.avgPrice}</div>
              <div className="text-green-200 text-xs mt-0.5">Average property price</div>
            </div>
            <div className="bg-white/10 rounded-xl px-5 py-3">
              <div className="text-gold-400 font-extrabold text-xl">{deposit25}</div>
              <div className="text-green-200 text-xs mt-0.5">Typical 25% BTL deposit</div>
            </div>
            <div className="bg-white/10 rounded-xl px-5 py-3">
              <div className="text-gold-400 font-extrabold text-xl">90+</div>
              <div className="text-green-200 text-xs mt-0.5">Lenders compared</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/contact" className="bg-gold-500 hover:bg-gold-400 text-green-900 font-bold px-7 py-4 rounded-xl transition-colors text-center">
              Get Free BTL Advice
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
              <h2 className="text-2xl font-bold text-green-800 mb-4">Buy to let mortgages in {area.name}</h2>
              <p className="text-slate-600 leading-relaxed mb-4">{area.localKnowledge}</p>
              <p className="text-slate-600 leading-relaxed mb-4">
                {area.name} landlords face a more complex mortgage market than residential buyers. Rental stress
                tests, portfolio landlord rules, Section 24 tax considerations, and the choice between personal
                and limited company ownership all affect which lenders and products are available to you.
              </p>
              <p className="text-slate-600 leading-relaxed">
                As an independent whole-of-market adviser with 15+ years working with London landlords, we
                structure your BTL finance to satisfy lender stress tests at {area.name} rental levels while
                keeping rates competitive across your portfolio.
              </p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <h3 className="font-bold text-green-800 mb-4">BTL mortgage types we advise on</h3>
              <ul className="space-y-3">
                {[
                  'Standard single residential BTL',
                  'HMO (House in Multiple Occupation)',
                  'Multi-unit freehold block (MUFB)',
                  'Limited company / SPV BTL',
                  'Portfolio landlord finance (4+ properties)',
                  'Holiday let mortgages',
                  'Expat and overseas landlord BTL',
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
          <h2 className="text-2xl font-bold text-green-800 mb-8 text-center">Buy to let FAQs for {area.name}</h2>
          <div className="space-y-3">
            {[
              { q: `What deposit do I need for a buy to let mortgage in ${area.name}?`, a: `Most buy to let lenders require a minimum 25% deposit, which on ${area.name}'s average property price of ${area.avgPrice} equates to approximately ${deposit25}. A larger deposit typically unlocks more competitive rates and reduces the rental income required to satisfy the lender's stress test.` },
              { q: `How do lenders assess rental yield for ${area.name} properties?`, a: `Lenders apply a rental stress test — typically requiring monthly rent to cover 125%–145% of the mortgage payment at a stressed rate (often 5.5%–6.5%). Rental demand in ${area.name} is strong, but we verify projected rental income against multiple lenders' stress tests to confirm which products are available before making a recommendation.` },
              { q: `Can I get a buy to let mortgage in ${area.name} through a limited company?`, a: `Yes. Many landlords now purchase through a Special Purpose Vehicle (SPV) limited company, which can offer tax efficiencies following the Section 24 mortgage interest relief restriction. We advise on both personal and limited company BTL structures and recommend consulting a tax adviser to confirm the right approach for your situation.` },
              { q: `Do I need a separate mortgage for each ${area.name} rental property?`, a: `Each property normally requires its own mortgage, though some lenders offer portfolio facilities. Owning four or more properties triggers portfolio landlord underwriting rules with most lenders. We have extensive experience advising ${area.name} portfolio landlords and know which lenders take a pragmatic approach to portfolio assessment.` },
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
          <h2 className="text-2xl font-bold mb-3">Looking for BTL mortgage advice in {area.name}?</h2>
          <p className="text-green-200 mb-6">Free initial consultation. We respond within 2 hours.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="bg-gold-500 hover:bg-gold-400 text-green-900 font-bold px-8 py-4 rounded-xl transition-colors">Get Free Advice</Link>
            <a href="tel:08448849748" className="bg-white/10 hover:bg-white/20 border border-white/20 font-semibold px-8 py-4 rounded-xl transition-colors">Call 0844 884 9748</a>
          </div>
          <p className="text-green-400 text-xs mt-6">Your property may be repossessed if you do not keep up repayments on your mortgage. Buy to let mortgages are not regulated by the FCA.</p>
        </div>
      </section>
    </>
  )
}
