import type { MetadataRoute } from 'next';

const SITE = 'https://www.bbrahma.de';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/datenschutz',
        '/imprint',
        '/en/datenschutz',
        '/en/imprint',
      ],
    },
    sitemap: `${SITE}/sitemap.xml`,
  };
}
