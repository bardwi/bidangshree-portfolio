import type { MetadataRoute } from 'next';

// const SITE = '';

// export default function robots(): MetadataRoute.Robots {
//   return {
//     rules: {
//       userAgent: '*',
//       allow: '/',
//       disallow: [
//         '/datenschutz',
//         '/imprint',
//         '/en/datenschutz',
//         '/en/imprint',
//       ],
//     },
//     sitemap: `${SITE}/sitemap.xml`,
//   };
// }
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
  };
}
