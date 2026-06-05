import type { MetadataRoute } from 'next'
import { areas } from '@/lib/areas'
import { blogPosts } from '@/lib/blog'

const BASE = 'https://www.mortgageadviser.london'
const LAST_MOD = new Date('2026-06-04')

export default function sitemap(): MetadataRoute.Sitemap {
  const areaPages: MetadataRoute.Sitemap = areas.map((a) => ({
    url: `${BASE}/areas/${a.slug}`,
    lastModified: LAST_MOD,
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
    { url: BASE, lastModified: LAST_MOD, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE}/first-time-buyer-advice`, lastModified: LAST_MOD, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/remortgage-advice`, lastModified: LAST_MOD, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/buy-to-let-advice`, lastModified: LAST_MOD, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/self-employed-mortgage-advice`, lastModified: LAST_MOD, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/areas`, lastModified: LAST_MOD, changeFrequency: 'monthly', priority: 0.8 },
    ...areaPages,
    { url: `${BASE}/blog`, lastModified: LAST_MOD, changeFrequency: 'weekly', priority: 0.8 },
    ...blogPages,
    { url: `${BASE}/about`, lastModified: LAST_MOD, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: LAST_MOD, changeFrequency: 'monthly', priority: 0.8 },
  ]
}
