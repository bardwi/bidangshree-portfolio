export const locales = ['en', 'de'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  de: 'Deutsch',
};

export function isLocale(value: string | null | undefined): value is Locale {
  return value === 'en' || value === 'de';
}
