import type { Metadata } from 'next';
import Link from 'next/link';
import CookieSettingsButton from '@/components/CookieSettingsButton/CookieSettingsButton';
import { FiArrowLeft } from 'react-icons/fi';
import styles from './Datenschutz.module.scss';

export const metadata: Metadata = {
  title: 'Privacy Policy - Bidangshree Brahma',
  robots: {
    index: false,
    follow: false,
  },
};

export default function PrivacyPage() {
  return (
    <main className={`block ${styles.legalPage}`}>
      <div className={`wrap ${styles.legalWrap}`}>
        <Link href="/" className={`eyebrow ${styles.backLink}`}>
          <FiArrowLeft aria-hidden="true" />
          Back to portfolio
        </Link>

        <h1 className={`serif ${styles.title}`}>
          Privacy Policy{' '}
          <span className={styles.titleMeta}>· Datenschutzerklärung</span>
        </h1>

        <p className={styles.intro}>
          Information about how this portfolio website handles personal data
          under the GDPR.
        </p>

        <section aria-labelledby="controller" className={styles.section}>
          <h2 id="controller" className={`serif ${styles.heading}`}>
            1. Controller
          </h2>

          <p className={styles.text}>
            Bidangshree Brahma, Berlin, Germany
            <br />
            Email:{' '}
            <a href="mailto:bardwi.brm@gmail.com" className="accent">
              bardwi.brm(at)gmail.com
            </a>
          </p>
        </section>

        <section aria-labelledby="hosting" className={styles.section}>
          <h2 id="hosting" className={`serif ${styles.heading}`}>
            2. Hosting
          </h2>

          <p className={styles.text}>
            This website is hosted by Vercel Inc. When you visit this website,
            the hosting provider may process technical connection data,
            including IP address, date and time of access, requested files,
            referrer URL, browser type, operating system, and server log files.
            This processing is based on my legitimate interest in providing a
            secure, reliable, and fast website under Art. 6(1)(f) GDPR.
          </p>
        </section>

        <section aria-labelledby="contact" className={styles.section}>
          <h2 id="contact" className={`serif ${styles.heading}`}>
            3. Contact by email
          </h2>

          <p className={styles.text}>
            If you contact me by email, I process the data you provide, such as
            your name, email address, and message, in order to respond to your
            enquiry. The legal basis is Art. 6(1)(b) GDPR if the contact relates
            to a possible contractual or professional relationship, and Art.
            6(1)(f) GDPR based on my legitimate interest in responding to
            enquiries.
          </p>

          <p className={styles.text}>
            Your email and message are stored only as long as necessary to
            process your enquiry, unless legal retention obligations require a
            longer storage period.
          </p>
        </section>

        <section aria-labelledby="fonts" className={styles.section}>
          <h2 id="fonts" className={`serif ${styles.heading}`}>
            4. Fonts
          </h2>

          <p className={styles.text}>
            This website uses fonts that are self-hosted through Next.js{' '}
            <code className={styles.code}>next/font</code>. No font requests are
            sent to Google servers when visiting this website.
          </p>
        </section>

        <section aria-labelledby="external-links" className={styles.section}>
          <h2 id="external-links" className={`serif ${styles.heading}`}>
            5. External links
          </h2>

          <p className={styles.text}>
            This website contains links to external websites, such as LinkedIn,
            GitHub, project links, or prototype links. When you click an
            external link, the privacy policy of the respective external
            provider applies.
          </p>
        </section>

        <section aria-labelledby="cookie-consent" className={styles.section}>
          <h2 id="cookie-consent" className={`serif ${styles.heading}`}>
            6. Cookie consent
          </h2>

          <p className={styles.text}>
            This website uses a consent banner based on vanilla-cookieconsent to
            manage optional services. The consent banner stores your privacy
            preferences so that the website can remember whether you accepted or
            rejected optional analytics.
          </p>

          <p className={styles.text}>
            The legal basis for storing consent preferences is Art. 6(1)(f)
            GDPR, based on my legitimate interest in respecting and documenting
            your privacy choices.
          </p>

          <p className={styles.text}>
            You can change or withdraw your consent at any time by reopening the{' '}
            <CookieSettingsButton /> on this website.
          </p>
        </section>

        <section aria-labelledby="analytics" className={styles.section}>
          <h2 id="analytics" className={`serif ${styles.heading}`}>
            7. Analytics
          </h2>

          <p className={styles.text}>
            This website uses Vercel Web Analytics, a privacy-friendly analytics
            service provided by Vercel Inc. Analytics help me understand general
            website usage, such as page views, referrers, device information,
            and approximate location data.
          </p>

          <p className={styles.text}>
            According to Vercel, Web Analytics does not use third-party cookies.
            Vercel stores anonymized data and identifies visitors through a hash
            created from the incoming request. The visitor session is
            automatically discarded after 24 hours.
          </p>

          <p className={styles.text}>
            Vercel Web Analytics is only activated after you give consent
            through the cookie banner. The legal basis for this processing is
            your consent under Art. 6(1)(a) GDPR. You may withdraw your consent
            at any time.
          </p>
        </section>

        <section aria-labelledby="rights" className={styles.section}>
          <h2 id="rights" className={`serif ${styles.heading}`}>
            8. Your rights
          </h2>

          <p className={styles.text}>
            Under the GDPR, you have the right to access, rectify, erase,
            restrict, and port your personal data. You also have the right to
            object to processing based on legitimate interests. If processing is
            based on consent, you may withdraw that consent at any time.
          </p>

          <p className={styles.text}>
            You also have the right to lodge a complaint with a data protection
            supervisory authority. In Berlin, the competent authority is the
            Berlin Commissioner for Data Protection and Freedom of Information.
          </p>
        </section>

        <section aria-labelledby="privacy-contact" className={styles.section}>
          <h2 id="privacy-contact" className={`serif ${styles.heading}`}>
            9. Privacy contact
          </h2>

          <p className={styles.text}>
            For any privacy request, please email{' '}
            <a href="mailto:bardwi.brm@gmail.com" className="accent">
              bardwi.brm(at)gmail.com
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
