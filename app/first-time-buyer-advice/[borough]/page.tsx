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
    title: `First Time Buyer Mortgage Adviser ${area.name} | Independent Advice`,
    description: `First time buyer mortgage advice in ${area.name}. Roger Cooper CeMAP helps first time buyers navigate ${area.name}'s property market. Whole-of-market, 90+ lenders, FCA regulated.`,
    alternates: { canonical: `https://www.mortgageadviser.london/first-time-buyer-advice/${area.slug}` },
    openGraph: {
      title: `First Time Buyer Mortgage Adviser ${area.name} | Roger Cooper CeMAP`,
      description: `Independent first time buyer mortgage advice for ${area.name} — whole-of-market, 90+ lenders, FCA regulated.`,
      url: `https://www.mortgageadviser.london/first-time-buyer-advice/${area.slug}`,
    },
  }
}

export default async function FirstTimeBuyerBoroughPage({ params }: { params: Promise<{ borough: string }> }) {
  const { borough } = await params
  const area = areas.find((a) => a.slug === borough)
  if (!area) notFound()

  const deposit5 = `£${(Math.round(area.avgPriceNum * 0.05 / 500) * 500).toLocaleString('en-GB')}`
  const deposit10 = `£${(Math.round(area.avgPriceNum * 0.10 / 500) * 500).toLocaleString('en-GB')}`

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mortgageadviser.london' },
      { '@type': 'ListItem', position: 2, name: 'First Time Buyer Advice', item: 'https://www.mortgageadviser.london/first-time-buyer-advice' },
      { '@type': 'ListItem', position: 3, name: area.name, item: `https://www.mortgageadviser.london/first-time-buyer-advice/${area.slug}` },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `How much deposit do I need to buy in ${area.name}?`,
        acceptedAnswer: { '@type': 'Answer', text: `Most lenders require a minimum 5% deposit, which on ${area.name}'s average property price of ${area.avgPrice} equates to approximately ${deposit5}. A 10% deposit (around ${deposit10}) gives access to more lenders and more competitive rates. We help you identify the right deposit level for your specific circumstances.` },
      },
      {
        '@type': 'Question',
        name: `Is Shared Ownership available in ${area.name}?`,
        acceptedAnswer: { '@type': 'Answer', text: `Shared Ownership schemes are available across many parts of ${area.name} and can significantly reduce the deposit and mortgage required. We advise on Shared Ownership mortgages alongside standard mortgages so you can make an informed comparison of both routes.` },
      },
      {
        '@type': 'Question',
        name: `Can I use a Lifetime ISA to buy in ${area.name}?`,
        acceptedAnswer: { '@type': 'Answer', text: `Yes, a Lifetime ISA adds a 25% government bonus on up to £4,000 saved per year and can be used on properties up to £450,000. Some properties in ${area.name} exceed this limit, so we help you plan your savings strategy alongside your mortgage search to ensure everything aligns.` },
      },
      {
        '@type': 'Question',
        name: `What costs beyond the deposit should I budget for when buying in ${area.name}?`,
        acceptedAnswer: { '@type': 'Answer', text: `Beyond your deposit you should budget for Stamp Duty Land Tax (though first time buyers benefit from relief on purchases up to £500,000), solicitor/conveyancing fees (typically £1,500–£3,000), survey costs (£400–£1,500 depending on type), mortgage arrangement fees, and removal costs. We provide a full cost breakdown as part of your initial advice.` },
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
            <Link href="/first-time-buyer-advice" className="hover:text-white">First Time Buyer Advice</Link>
            <span>/</span>
            <span className="text-white">{area.name}</span>
          </nav>
          <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-3">
            {area.type === 'county' ? 'Home Counties' : 'Greater London'} · First Time Buyer Specialist
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
            First Time Buyer Mortgage Adviser in {area.name}
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-2xl leading-relaxed">
            Helping first time buyers purchase in {area.name} — from agreement in principle through to keys in hand. Independent, whole-of-market advice.
          </p>
          <div className="flex flex-wrap gap-4 mb-10">
            <div className="bg-white/10 rounded-xl px-5 py-3">
              <div className="text-gold-400 font-extrabold text-xl">{area.avgPrice}</div>
              <div className="text-green-200 text-xs mt-0.5">Average property price</div>
            </div>
            <div className="bg-white/10 rounded-xl px-5 py-3">
              <div className="text-gold-400 font-extrabold text-xl">{deposit5}</div>
              <div className="text-green-200 text-xs mt-0.5">Minimum 5% deposit</div>
            </div>
            <div className="bg-white/10 rounded-xl px-5 py-3">
              <div className="text-gold-400 font-extrabold text-xl">90+</div>
              <div className="text-green-200 text-xs mt-0.5">Lenders compared</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/contact" className="bg-gold-500 hover:bg-gold-400 text-green-900 font-bold px-7 py-4 rounded-xl transition-colors text-center">
              Get Free First Time Buyer Advice
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
              <h2 className="text-2xl font-bold text-green-800 mb-4">Buying your first home in {area.name}</h2>
              <p className="text-slate-600 leading-relaxed mb-4">{area.localKnowledge}</p>
              {area.buyerProfile && (
                <p className="text-slate-600 leading-relaxed mb-4">{area.buyerProfile}</p>
              )}
              <p className="text-slate-600 leading-relaxed">
                As an independent whole-of-market adviser, we compare 90+ lenders — including those not available
                direct to the public — to find mortgage products that work for your deposit, income, and the
                property type you&apos;re purchasing in {area.name}. With average prices of {area.avgPrice},
                we ensure you approach every viewing with a firm agreement in principle in place.
              </p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <h3 className="font-bold text-green-800 mb-4">How we help {area.name} first time buyers</h3>
              <ul className="space-y-3">
                {[
                  'Agreement in principle — ready to make offers',
                  'Stamp Duty relief for first time buyers',
                  'Shared Ownership mortgage advice',
                  'Lifetime ISA and Help to Buy integration',
                  'New build and off-plan purchase advice',
                  'Full cost breakdown before you commit',
                  'Solicitor referrals and survey guidance',
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
          <h2 className="text-2xl font-bold text-green-800 mb-8 text-center">First time buyer FAQs for {area.name}</h2>
          <div className="space-y-3">
            {[
              { q: `How much deposit do I need to buy in ${area.name}?`, a: `Most lenders require a minimum 5% deposit, which on ${area.name}'s average property price of ${area.avgPrice} equates to approximately ${deposit5}. A 10% deposit (around ${deposit10}) gives access to more lenders and more competitive rates. We help you identify the right deposit level and lenders for your specific circumstances.` },
              { q: `Is Shared Ownership available in ${area.name}?`, a: `Shared Ownership schemes are available across many parts of ${area.name} and can significantly reduce the deposit and mortgage required to get on the property ladder. We advise on Shared Ownership mortgages alongside standard mortgages so you can make an informed comparison of both routes before deciding.` },
              { q: `Can I use a Lifetime ISA to buy in ${area.name}?`, a: `Yes, a Lifetime ISA adds a 25% government bonus on up to £4,000 saved per year and can be used on properties up to £450,000. Some properties in ${area.name} exceed this limit, so we help you plan your savings strategy alongside your mortgage search to ensure your LISA and mortgage timeline align.` },
              { q: `What costs beyond the deposit should I budget for in ${area.name}?`, a: `Beyond your deposit budget for Stamp Duty Land Tax (first time buyers receive relief on purchases up to £500,000), solicitor and conveyancing fees (typically £1,500–£3,000), survey costs (£400–£1,500), mortgage arrangement fees if applicable, and removal costs. We provide a full cost breakdown during your initial advice session.` },
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
          <h2 className="text-2xl font-bold mb-3">Ready to buy your first home in {area.name}?</h2>
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
