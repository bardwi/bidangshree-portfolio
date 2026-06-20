import type { Metadata } from 'next';
import { fraunces, jakarta } from './fonts';
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import { Analytics } from '@vercel/analytics/next';
import CookieConsentBanner from '@/components/CookieConsentBanner/CookieConsentBanner';
import './globals.scss';
import BackToTop from '@/components/BackToTop/BackToTop';

export const metadata: Metadata = {
  title: 'Bidangshree Brahma — Product Manager/ Product Owner',
  description:
    'Product Owner / Product Manager in Berlin, combining frontend experience with user research, MVP scoping, backlog prioritization, and delivery-focused prototyping.',
  metadataBase: new URL('https://www.bbrahma.dev'),
  icons: {
    icon: [{ url: '/icons/icon-32.png', sizes: '32x32' }],
    shortcut: '/icons/favicon.ico',
    apple: '/icons/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${jakarta.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
        <BackToTop />
        <CookieConsentBanner />
        <Analytics />
      </body>
    </html>
  );
}
