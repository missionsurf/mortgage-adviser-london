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
    title: `Self-Employed Mortgage Adviser ${area.name} | Independent Specialist`,
    description: `Self-employed mortgage advice in ${area.name}. Sole traders, contractors, directors — Roger Cooper CeMAP navigates lender criteria across 90+ lenders. FCA regulated.`,
    alternates: { canonical: `https://www.mortgageadviser.london/self-employed-mortgage-advice/${area.slug}` },
    openGraph: {
      title: `Self-Employed Mortgage Adviser ${area.name} | Roger Cooper CeMAP`,
      description: `Independent self-employed mortgage advice in ${area.name} — sole traders, limited company directors, contractors. 90+ lenders, FCA regulated.`,
      url: `https://www.mortgageadviser.london/self-employed-mortgage-advice/${area.slug}`,
    },
  }
}

export default async function SelfEmployedBoroughPage({ params }: { params: Promise<{ borough: string }> }) {
  const { borough } = await params
  const area = areas.find((a) => a.slug === borough)
  if (!area) notFound()

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mortgageadviser.london' },
      { '@type': 'ListItem', position: 2, name: 'Self-Employed Mortgage Advice', item: 'https://www.mortgageadviser.london/self-employed-mortgage-advice' },
      { '@type': 'ListItem', position: 3, name: area.name, item: `https://www.mortgageadviser.london/self-employed-mortgage-advice/${area.slug}` },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `How many years of accounts do I need for a self-employed mortgage in ${area.name}?`,
        acceptedAnswer: { '@type': 'Answer', text: `Most lenders require two years of accounts or SA302 tax calculations. However, some lenders will consider applicants with one year of trading history, particularly contractors and consultants with a strong track record. We identify which lenders suit your specific employment structure and trading history.` },
      },
      {
        '@type': 'Question',
        name: `How do lenders calculate income for self-employed buyers in ${area.name}?`,
        acceptedAnswer: { '@type': 'Answer', text: `For sole traders and partnerships, lenders typically use net profit shown on your SA302. For limited company directors, most lenders use salary plus dividends; some will consider salary plus share of net profit, which can produce a higher assessed income. Contractors are often assessed on day rate × contracted days. We match your income structure to lenders who calculate it favourably.` },
      },
      {
        '@type': 'Question',
        name: `My income fluctuates year on year — will that affect my ${area.name} mortgage application?`,
        acceptedAnswer: { '@type': 'Answer', text: `Fluctuating income is common for the self-employed and does not automatically prevent a mortgage. Many lenders average the last two years, while some use the lower year. If your income is rising, we identify lenders who use the most recent year's figure. We present your application in the most appropriate way for each lender's specific criteria.` },
      },
      {
        '@type': 'Question',
        name: `Can I get a self-employed mortgage in ${area.name} with less than two years' trading?`,
        acceptedAnswer: { '@type': 'Answer', text: `Yes, certain specialist lenders consider applicants with 12 months of accounts and strong business fundamentals. This often applies to professionals who have transitioned from employment to self-employment in the same field. We identify which lenders are most likely to consider your application and manage the process accordingly.` },
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
            <Link href="/self-employed-mortgage-advice" className="hover:text-white">Self-Employed Mortgage Advice</Link>
            <span>/</span>
            <span className="text-white">{area.name}</span>
          </nav>
          <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-3">
            {area.type === 'county' ? 'Home Counties' : 'Greater London'} · Self-Employed Specialist
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
            Self-Employed Mortgage Adviser in {area.name}
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-2xl leading-relaxed">
            Specialist mortgage advice for {area.name}&apos;s self-employed — sole traders, limited company directors, freelancers, and contractors. Independent, whole-of-market.
          </p>
          <div className="flex flex-wrap gap-4 mb-10">
            <div className="bg-white/10 rounded-xl px-5 py-3">
              <div className="text-gold-400 font-extrabold text-xl">{area.avgPrice}</div>
              <div className="text-green-200 text-xs mt-0.5">Average property price</div>
            </div>
            <div className="bg-white/10 rounded-xl px-5 py-3">
              <div className="text-gold-400 font-extrabold text-xl">90+</div>
              <div className="text-green-200 text-xs mt-0.5">Lenders compared</div>
            </div>
            <div className="bg-white/10 rounded-xl px-5 py-3">
              <div className="text-gold-400 font-extrabold text-xl">15+</div>
              <div className="text-green-200 text-xs mt-0.5">Years advising self-employed</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/contact" className="bg-gold-500 hover:bg-gold-400 text-green-900 font-bold px-7 py-4 rounded-xl transition-colors text-center">
              Get Free Advice
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
              <h2 className="text-2xl font-bold text-green-800 mb-4">Self-employed mortgages in {area.name}</h2>
              <p className="text-slate-600 leading-relaxed mb-4">{area.localKnowledge}</p>
              <p className="text-slate-600 leading-relaxed mb-4">
                London has one of the highest concentrations of self-employed workers in the UK, yet many
                high-earning sole traders, directors, and contractors find the mortgage process more complex
                than expected. Different lenders assess self-employed income in very different ways —
                some use salary and dividends, others accept salary plus retained profits, and specialist
                lenders underwrite contractor day rates directly.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We know which of our 90+ lenders will assess your income most favourably and present your
                application in the way most likely to succeed — saving you time and protecting your credit file.
              </p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <h3 className="font-bold text-green-800 mb-4">Who we advise in {area.name}</h3>
              <ul className="space-y-3">
                {[
                  'Sole traders — profit-based income assessment',
                  'Limited company directors — salary + dividends',
                  'Directors — salary + net profit (some lenders)',
                  'Contractors — day rate assessment',
                  'Freelancers and consultants',
                  'Partners in LLPs and partnerships',
                  'Self-employed with one year of accounts',
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
          <h2 className="text-2xl font-bold text-green-800 mb-8 text-center">Self-employed mortgage FAQs for {area.name}</h2>
          <div className="space-y-3">
            {[
              { q: `How many years of accounts do I need for a self-employed mortgage in ${area.name}?`, a: `Most lenders require two years of accounts or SA302 tax calculations. However, some specialist lenders consider applicants with one year of trading history — particularly contractors and consultants with strong prior experience. We identify which lenders suit your specific employment structure and trading history.` },
              { q: `How do lenders calculate income for self-employed buyers in ${area.name}?`, a: `Sole traders and partnerships: lenders typically use net profit from your SA302. Limited company directors: most use salary plus dividends; some consider salary plus share of net profit, producing a higher figure. Contractors: often assessed on day rate × contracted days. We match your income structure to lenders who calculate it most favourably.` },
              { q: `My income fluctuates year on year — will that affect my ${area.name} mortgage application?`, a: `Fluctuating income is common for the self-employed and does not automatically prevent a mortgage. Many lenders average the last two years, while some use the lower year. If income is rising, we target lenders who use the most recent year's figure. We structure your application to present your income as clearly as possible within each lender's criteria.` },
              { q: `Can I get a self-employed mortgage in ${area.name} with less than two years of trading?`, a: `Yes. Certain specialist lenders consider applicants with 12 months of accounts and strong business fundamentals — this often applies to professionals who transitioned from employment in the same field. We identify lenders most likely to consider your application and manage the process to protect your credit file.` },
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
          <h2 className="text-2xl font-bold mb-3">Self-employed and looking to buy in {area.name}?</h2>
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
