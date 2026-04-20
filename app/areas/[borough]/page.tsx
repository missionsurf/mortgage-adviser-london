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
    title: `Mortgage Adviser ${area.name} | Independent Whole-of-Market Advice`,
    description: `Independent CeMAP qualified mortgage adviser covering ${area.name}. Whole-of-market advice for first time buyers, remortgage, buy to let and self-employed. Average property price ${area.avgPrice}. FCA regulated.`,
    alternates: { canonical: `https://www.mortgageadviser.london/areas/${area.slug}` },
    openGraph: {
      title: `Mortgage Adviser ${area.name} | MA London`,
      description: `Expert independent mortgage advice in ${area.name}. ${area.note}`,
      url: `https://www.mortgageadviser.london/areas/${area.slug}`,
    },
  }
}

export default async function AreaPage({ params }: { params: Promise<{ borough: string }> }) {
  const { borough } = await params
  const area = areas.find((a) => a.slug === borough)
  if (!area) notFound()

  const deposit5 = `£${Math.round(area.avgPriceNum * 0.05 / 1000) * 1000 < 1000 ? Math.round(area.avgPriceNum * 0.05).toLocaleString('en-GB') : (Math.round(area.avgPriceNum * 0.05 / 500) * 500).toLocaleString('en-GB')}`
  const deposit10 = `£${(Math.round(area.avgPriceNum * 0.10 / 500) * 500).toLocaleString('en-GB')}`

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mortgageadviser.london' },
      { '@type': 'ListItem', position: 2, name: 'Areas', item: 'https://www.mortgageadviser.london/areas' },
      { '@type': 'ListItem', position: 3, name: area.name, item: `https://www.mortgageadviser.london/areas/${area.slug}` },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: area.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const localSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'Mortgage International Ltd — Mortgage Adviser',
    url: 'https://www.mortgageadviser.london',
    telephone: '08448849748',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '3rd Floor, 207 Regent Street',
      addressLocality: 'London',
      postalCode: 'W1B 3HH',
      addressCountry: 'GB',
    },
    areaServed: { '@type': 'AdministrativeArea', name: area.name },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <nav className="text-sm text-green-300 mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/areas" className="hover:text-white transition-colors">Areas</Link>
            <span>/</span>
            <span className="text-white">{area.name}</span>
          </nav>
          <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-3">
            {area.type === 'county' ? 'Home Counties' : 'Greater London'} • Independent Mortgage Adviser
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
            Mortgage Adviser in {area.name}
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-2xl leading-relaxed">{area.localKnowledge}</p>
          <div className="flex flex-wrap gap-4 mb-10">
            <div className="bg-white/10 rounded-xl px-5 py-3">
              <div className="text-gold-400 font-extrabold text-xl">{area.avgPrice}</div>
              <div className="text-green-200 text-xs mt-0.5">Average property price</div>
            </div>
            <div className="bg-white/10 rounded-xl px-5 py-3">
              <div className="text-gold-400 font-extrabold text-xl">{deposit10}</div>
              <div className="text-green-200 text-xs mt-0.5">Typical 10% deposit</div>
            </div>
            <div className="bg-white/10 rounded-xl px-5 py-3">
              <div className="text-gold-400 font-extrabold text-xl">90+</div>
              <div className="text-green-200 text-xs mt-0.5">Lenders we access</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/contact" className="bg-gold-500 hover:bg-gold-400 text-green-900 font-bold px-7 py-4 rounded-xl transition-colors text-center">
              Get Free Mortgage Advice
            </Link>
            <a href="tel:08448849748" className="bg-white/10 hover:bg-white/20 border border-white/20 font-semibold px-7 py-4 rounded-xl transition-colors text-center">
              Call 0844 884 9748
            </a>
          </div>
        </div>
      </section>

      {/* Local insight */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-green-800 mb-4">
                Mortgage advice for {area.name} buyers
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">{area.note}</p>
              <p className="text-slate-600 leading-relaxed mb-4">{area.buyerProfile}</p>
              <p className="text-slate-600 leading-relaxed">
                As an independent whole-of-market adviser, we search 90+ lenders to find the right mortgage for your specific circumstances in {area.name} — not just the most prominently marketed product.
              </p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <h3 className="font-bold text-green-800 mb-4">What we advise on in {area.name}</h3>
              <ul className="space-y-3">
                {[
                  'First time buyer mortgages',
                  'Remortgage and product transfers',
                  'Buy to let — personal and limited company',
                  'Self-employed and contractor mortgages',
                  'High-value and complex income cases',
                  'Protection insurance advice',
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
                Book a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-green-800 mb-8 text-center">
            Mortgage advice FAQs for {area.name}
          </h2>
          <div className="space-y-3">
            {area.faqs.map((faq) => (
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

      {/* Risk warning + CTA */}
      <section className="py-14 bg-green-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-3">Ready for expert mortgage advice in {area.name}?</h2>
          <p className="text-green-200 mb-6">Free initial consultation. We respond within 2 hours.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="bg-gold-500 hover:bg-gold-400 text-green-900 font-bold px-8 py-4 rounded-xl transition-colors">
              Get Free Advice
            </Link>
            <a href="tel:08448849748" className="bg-white/10 hover:bg-white/20 border border-white/20 font-semibold px-8 py-4 rounded-xl transition-colors">
              Call 0844 884 9748
            </a>
          </div>
          <p className="text-green-400 text-xs mt-6">Your home may be repossessed if you do not keep up repayments on your mortgage.</p>
        </div>
      </section>
    </>
  )
}
