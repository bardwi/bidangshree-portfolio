import type { MetadataRoute } from 'next';

// const SITE = 'https://www.bbrahma.de';

// // Indexable pages only (legal pages are noindex, so excluded).
// // German is the default locale and served unprefixed; English lives under /en.
// const paths = ['', '/case-studies/linguahub'];

// export default function sitemap(): MetadataRoute.Sitemap {
//   return paths.map((path) => ({
//     url: `${SITE}${path === '' ? '/' : path}`,
//     lastModified: new Date(),
//     changeFrequency: 'monthly',
//     priority: path === '' ? 1 : 0.8,
//     alternates: {
//       languages: {
//         de: `${SITE}${path === '' ? '/' : path}`,
//         en: `${SITE}/en${path}`,
//       },
//     },
//   }));
// }

export default function sitemap(): MetadataRoute.Sitemap {
  return [];
}
