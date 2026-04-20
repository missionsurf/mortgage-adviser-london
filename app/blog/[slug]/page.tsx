import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { blogPosts, getPostBySlug } from '@/lib/blog'

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.metaDescription,
    alternates: { canonical: `https://www.mortgageadviser.london/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: `https://www.mortgageadviser.london/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: ['Roger Iyamu'],
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: 'Roger Iyamu',
      jobTitle: 'CeMAP Qualified Mortgage Adviser',
      url: 'https://www.mortgageadviser.london/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Mortgage International Ltd',
      url: 'https://www.mortgageadviser.london',
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mortgageadviser.london' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.mortgageadviser.london/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://www.mortgageadviser.london/blog/${post.slug}` },
    ],
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-green-900 to-green-800 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-sm text-green-300 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white line-clamp-1">{post.title}</span>
          </nav>
          <span className="inline-block text-xs font-semibold text-gold-400 bg-gold-500/10 border border-gold-500/20 px-3 py-1 rounded-full mb-4">
            Mortgage Advice Guide
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-5">{post.title}</h1>
          <div className="flex items-center gap-4">
            <img src="/roger-iyamu.JPG" alt="Roger Iyamu" className="w-10 h-10 rounded-full object-cover object-top border-2 border-white/30" />
            <div>
              <p className="font-semibold text-sm">Roger Iyamu, CeMAP</p>
              <p className="text-green-300 text-xs">{formattedDate} · {post.readTime}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article content */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div
            className="prose prose-lg max-w-none prose-headings:text-green-800 prose-headings:font-bold prose-a:text-gold-600 prose-strong:text-green-900"
            dangerouslySetInnerHTML={{ __html: post.content.replace(/\n## /g, '\n<h2>').replace(/\n### /g, '\n<h3>').replace(/(<h[23]>.*)/g, '$1</h2>').replace(/<h2>(.*?)<\/h2>/g, '</p><h2 class="text-2xl font-bold text-green-800 mt-8 mb-4">$1</h2><p>').replace(/<h3>(.*?)<\/h3>/g, '</p><h3 class="text-xl font-bold text-green-800 mt-6 mb-3">$1</h3><p>').replace(/\n\n/g, '</p><p class="text-slate-600 leading-relaxed mb-4">').replace(/\*\*(.*?)\*\*/g, '<strong class="text-green-900">$1</strong>') }}
          />

          {/* Author bio */}
          <div className="mt-10 bg-slate-50 border border-slate-200 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <img src="/roger-iyamu.JPG" alt="Roger Iyamu" className="w-14 h-14 rounded-full object-cover object-top flex-shrink-0 border-2 border-white shadow-sm" />
              <div>
                <p className="font-bold text-green-800">Roger Iyamu</p>
                <p className="text-gold-600 text-xs font-semibold mt-0.5">CeMAP Qualified Mortgage Adviser | FCA Regulated</p>
                <p className="text-slate-600 text-sm leading-relaxed mt-2">
                  Roger has over 15 years of experience as an independent mortgage adviser in London. CeMAP qualified and FCA regulated, he specialises in complex cases including self-employed applicants, portfolio landlords, expat mortgages and high-value London purchases.
                </p>
              </div>
            </div>
          </div>

          {/* FAQs */}
          {post.faqs.length > 0 && (
            <div className="mt-10">
              <h2 className="text-2xl font-bold text-green-800 mb-5">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {post.faqs.map((faq) => (
                  <details key={faq.q} className="bg-slate-50 rounded-2xl border border-slate-100 group">
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
          )}

          {/* Risk warning */}
          <div className="mt-8 p-4 bg-amber-50 border border-amber-100 rounded-xl">
            <p className="text-xs text-amber-800 leading-relaxed">
              <strong>Important:</strong> Your home may be repossessed if you do not keep up repayments on your mortgage. The information in this article is for general guidance only and does not constitute regulated mortgage advice. Please speak to a qualified adviser before making any mortgage decisions.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-green-900 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-3">Need personalised mortgage advice?</h2>
          <p className="text-green-200 mb-6">Speak to Roger directly — free initial consultation, no obligation.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="bg-gold-500 hover:bg-gold-400 text-green-900 font-bold px-7 py-4 rounded-xl transition-colors">
              Get Free Advice
            </Link>
            <a href="tel:08448849748" className="bg-white/10 hover:bg-white/20 border border-white/20 font-semibold px-7 py-4 rounded-xl transition-colors">
              Call 0844 884 9748
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
