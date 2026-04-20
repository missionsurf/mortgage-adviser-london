import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: 'https://www.mortgageadviser.london/sitemap.xml',
    host: 'https://www.mortgageadviser.london',
  }
}
