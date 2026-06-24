import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { fraunces, jakarta } from '../fonts';
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import CookieConsentBanner from '@/components/CookieConsentBanner/CookieConsentBanner';
import BackToTop from '@/components/BackToTop/BackToTop';
import { routing } from '@/i18n/routing';
import '../globals.scss';

const SITE = 'https://www.bbrahma.de';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isDe = locale === 'de';

  return {
    title: 'Bidangshree Brahma - Product Manager / Product Owner',
    description: isDe
      ? 'Product Owner / Product Manager in Berlin - Frontend-Erfahrung kombiniert mit User Research, MVP-Scoping, Backlog-Priorisierung und delivery-orientiertem Prototyping.'
      : 'Product Owner / Product Manager in Berlin, combining frontend experience with user research, MVP scoping, backlog prioritization, and delivery-focused prototyping.',
    // Keep the portfolio accessible by direct link, but out of search results for now because of privacy concerns.
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
        noimageindex: true,
      },
    },
    metadataBase: new URL(SITE),
    // Enable again when the site should be discoverable in search.
    // alternates: {
    //   canonical: isDe ? '/' : '/en',
    //   languages: {
    //     de: '/',
    //     en: '/en',
    //     'x-default': '/',
    //   },
    // },
    // openGraph: {
    //   type: 'website',
    //   siteName: 'Bidangshree Brahma',
    //   title: 'Bidangshree Brahma - Product Manager / Product Owner',
    //   description: isDe
    //     ? 'Product Owner / Product Manager in Berlin - Frontend-Erfahrung kombiniert mit User Research, MVP-Scoping und delivery-orientiertem Prototyping.'
    //     : 'Product Owner / Product Manager in Berlin, combining frontend experience with user research, MVP scoping and delivery-focused prototyping.',
    //   url: isDe ? '/' : '/en',
    //   locale: isDe ? 'de_DE' : 'en_US',
    //   images: [
    //     {
    //       url: '/portrait.jpg',
    //       width: 420,
    //       height: 520,
    //       alt: 'Bidangshree Brahma',
    //     },
    //   ],
    // },
    // twitter: {
    //   card: 'summary_large_image',
    //   title: 'Bidangshree Brahma - Product Manager / Product Owner',
    //   description: isDe
    //     ? 'Product Owner / Product Manager in Berlin - UX, MVP-Scoping und Prototyping.'
    //     : 'Product Owner / Product Manager in Berlin - UX, MVP scoping and prototyping.',
    //   images: ['/portrait.jpg'],
    // },
    icons: {
      icon: [{ url: '/icons/icon-32.png', sizes: '32x32' }],
      shortcut: '/icons/favicon.ico',
      apple: '/icons/apple-icon.png',
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  return (
    <html lang={locale} className={`${fraunces.variable} ${jakarta.variable}`}>
      <body>
        <NextIntlClientProvider>
          <Header />
          {children}
          <Footer />
          <BackToTop />
          <CookieConsentBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
