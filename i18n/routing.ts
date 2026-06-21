import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['de', 'en'],
  defaultLocale: 'de',
  // German serves at "/", English at "/en". Default locale stays unprefixed.
  localePrefix: 'as-needed',
  localeDetection: true,
});
