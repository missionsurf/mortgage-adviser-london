import type { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Mortgage Advice Blog | Expert Guides for London Buyers',
  description: 'Expert mortgage advice articles for London buyers. Guides on first time buyer mortgages, remortgage advice, buy to let, self-employed mortgages and more from CeMAP qualified adviser Roger Cooper.',
  alternates: { canonical: 'https://www.mortgageadviser.london/blog' },
  openGraph: {
    title: 'Mortgage Advice Blog | MA London',
    description: 'Expert mortgage advice guides for London buyers from CeMAP qualified adviser Roger Cooper.',
    url: 'https://www.mortgageadviser.london/blog',
  },
}

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <nav className="text-sm text-green-300 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Mortgage Advice Blog</span>
          </nav>
          <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-3">Expert Guides</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
            Mortgage Advice Blog
          </h1>
          <p className="text-xl text-green-100 max-w-2xl">
            Plain English guides from Roger Cooper, CeMAP qualified mortgage adviser. Written for London buyers, remortgagors and landlords.
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-white rounded-2xl border border-slate-100 p-6 hover:border-gold-500 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-green-700 bg-green-50 px-2.5 py-1 rounded-full">Mortgage Advice</span>
                  <span className="text-xs text-slate-400">{post.readTime}</span>
                </div>
                <h2 className="font-bold text-green-900 text-lg leading-snug mb-2 group-hover:text-gold-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.metaDescription}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src="/roger-iyamu.JPG" alt="Roger Cooper" className="w-7 h-7 rounded-full object-cover object-top" />
                    <span className="text-xs text-slate-500">Roger Cooper, CeMAP</span>
                  </div>
                  <span className="text-gold-500 text-xs font-semibold group-hover:gap-2 transition-all flex items-center gap-1">
                    Read →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-green-900 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-3">Have a mortgage question?</h2>
          <p className="text-green-200 mb-6">Speak directly to Roger for personalised advice on your situation — free initial consultation.</p>
          <Link href="/contact" className="inline-block bg-gold-500 hover:bg-gold-400 text-green-900 font-bold px-8 py-4 rounded-xl transition-colors">
            Get Free Mortgage Advice
          </Link>
          <p className="text-green-400 text-xs mt-5">Your home may be repossessed if you do not keep up repayments on your mortgage.</p>
        </div>
      </section>
    </>
  )
}
