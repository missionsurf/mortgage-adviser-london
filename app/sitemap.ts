import type { MetadataRoute } from 'next'
import { areas } from '@/lib/areas'
import { blogPosts } from '@/lib/blog'

const BASE = 'https://www.mortgageadviser.london'

export default function sitemap(): MetadataRoute.Sitemap {
  const areaPages: MetadataRoute.Sitemap = areas.map((a) => ({
    url: `${BASE}/areas/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.75,
  }))

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [
    { url: BASE, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE}/first-time-buyer-advice`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/remortgage-advice`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/buy-to-let-advice`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/self-employed-mortgage-advice`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/areas`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    ...areaPages,
    { url: `${BASE}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    ...blogPages,
    { url: `${BASE}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ]
}
