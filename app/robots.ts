import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/wp-admin/',
          '/wp-includes/',
          '/wp-content/',
          '/wp-login.php',
          '/xmlrpc.php',
        ],
      },
    ],
    sitemap: 'https://www.mortgageadviser.london/sitemap.xml',
    host: 'https://www.mortgageadviser.london',
  }
}
