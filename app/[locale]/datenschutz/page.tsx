import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import CookieSettingsButton from '@/components/CookieSettingsButton/CookieSettingsButton';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from '@/i18n/navigation';
import { defaultLocale, isLocale, type Locale } from '@/lib/i18n/config';
import styles from './Datenschutz.module.scss';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title:
      locale === 'de'
        ? 'Datenschutzerklärung – Bidangshree Brahma'
        : 'Privacy Policy – Bidangshree Brahma',
    robots: { index: false, follow: false },
  };
}

const t = {
  en: {
    back: 'Back to portfolio',
    title: 'Privacy Policy',
    titleMeta: '· Datenschutzerklärung',
    intro:
      'Information about how this portfolio website handles personal data under the GDPR.',
    controllerH: '1. Controller',
    controllerLine: 'Bidangshree Brahma, Berlin, Germany',
    emailLabel: 'Email:',
    hostingH: '2. Hosting',
    hostingP:
      'This website is hosted by Vercel Inc. When you visit this website, the hosting provider may process technical connection data, including IP address, date and time of access, requested files, referrer URL, browser type, operating system, and server log files. This processing is based on my legitimate interest in providing a secure, reliable, and fast website under Art. 6(1)(f) GDPR.',
    contactH: '3. Contact by email',
    contactP1:
      'If you contact me by email, I process the data you provide, such as your name, email address, and message, in order to respond to your enquiry. The legal basis is Art. 6(1)(b) GDPR if the contact relates to a possible contractual or professional relationship, and Art. 6(1)(f) GDPR based on my legitimate interest in responding to enquiries.',
    contactP2:
      'Your email and message are stored only as long as necessary to process your enquiry, unless legal retention obligations require a longer storage period.',
    fontsH: '4. Fonts',
    fontsPre: 'This website uses fonts that are self-hosted through Next.js ',
    fontsPost:
      '. No font requests are sent to Google servers when visiting this website.',
    extH: '5. External links',
    extP: 'This website contains links to external websites, such as LinkedIn, GitHub, project links, or prototype links. When you click an external link, the privacy policy of the respective external provider applies.',
    cookieH: '6. Cookie consent',
    cookieP1:
      'This website uses a consent banner based on vanilla-cookieconsent to manage optional services. The consent banner stores your privacy preferences so that the website can remember whether you accepted or rejected optional analytics.',
    cookieP2:
      'The legal basis for storing consent preferences is Art. 6(1)(f) GDPR, based on my legitimate interest in respecting and documenting your privacy choices.',
    cookiePre:
      'You can change or withdraw your consent at any time by reopening the ',
    cookiePost: ' on this website.',
    analyticsH: '7. Analytics',
    analyticsP1:
      'This website uses Vercel Web Analytics, a privacy-friendly analytics service provided by Vercel Inc. Analytics help me understand general website usage, such as page views, referrers, device information, and approximate location data.',
    analyticsP2:
      'According to Vercel, Web Analytics does not use third-party cookies. Vercel stores anonymized data and identifies visitors through a hash created from the incoming request. The visitor session is automatically discarded after 24 hours.',
    analyticsP3:
      'Vercel Web Analytics is only activated after you give consent through the cookie banner. The legal basis for this processing is your consent under Art. 6(1)(a) GDPR. You may withdraw your consent at any time.',
    rightsH: '8. Your rights',
    rightsP1:
      'Under the GDPR, you have the right to access, rectify, erase, restrict, and port your personal data. You also have the right to object to processing based on legitimate interests. If processing is based on consent, you may withdraw that consent at any time.',
    rightsP2:
      'You also have the right to lodge a complaint with a data protection supervisory authority. In Berlin, the competent authority is the Berlin Commissioner for Data Protection and Freedom of Information.',
    contactPrivH: '9. Privacy contact',
    contactPrivPre: 'For any privacy request, please email ',
    contactPrivPost: '.',
  },
  de: {
    back: 'Zurück zum Portfolio',
    title: 'Datenschutzerklärung',
    titleMeta: '· Privacy Policy',
    intro:
      'Informationen darüber, wie diese Portfolio-Website personenbezogene Daten gemäß DSGVO verarbeitet.',
    controllerH: '1. Verantwortlicher',
    controllerLine: 'Bidangshree Brahma, Berlin, Deutschland',
    emailLabel: 'E-Mail:',
    hostingH: '2. Hosting',
    hostingP:
      'Diese Website wird von Vercel Inc. gehostet. Beim Besuch dieser Website kann der Hosting-Anbieter technische Verbindungsdaten verarbeiten, darunter IP-Adresse, Datum und Uhrzeit des Zugriffs, angeforderte Dateien, Referrer-URL, Browsertyp, Betriebssystem und Server-Logdateien. Diese Verarbeitung erfolgt auf Grundlage meines berechtigten Interesses an einer sicheren, zuverlässigen und schnellen Website gemäß Art. 6 Abs. 1 lit. f DSGVO.',
    contactH: '3. Kontakt per E-Mail',
    contactP1:
      'Wenn Sie mich per E-Mail kontaktieren, verarbeite ich die von Ihnen angegebenen Daten wie Name, E-Mail-Adresse und Nachricht, um Ihre Anfrage zu beantworten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern sich der Kontakt auf ein mögliches vertragliches oder berufliches Verhältnis bezieht, sowie Art. 6 Abs. 1 lit. f DSGVO auf Grundlage meines berechtigten Interesses an der Beantwortung von Anfragen.',
    contactP2:
      'Ihre E-Mail und Nachricht werden nur so lange gespeichert, wie es zur Bearbeitung Ihrer Anfrage erforderlich ist, sofern keine gesetzlichen Aufbewahrungspflichten eine längere Speicherung verlangen.',
    fontsH: '4. Schriftarten',
    fontsPre: 'Diese Website verwendet Schriftarten, die über Next.js ',
    fontsPost:
      ' selbst gehostet werden. Beim Besuch dieser Website werden keine Schriftanfragen an Google-Server gesendet.',
    extH: '5. Externe Links',
    extP: 'Diese Website enthält Links zu externen Websites wie LinkedIn, GitHub, Projektlinks oder Prototyp-Links. Wenn Sie einen externen Link anklicken, gilt die Datenschutzerklärung des jeweiligen externen Anbieters.',
    cookieH: '6. Cookie-Einwilligung',
    cookieP1:
      'Diese Website verwendet ein Einwilligungs-Banner auf Basis von vanilla-cookieconsent, um optionale Dienste zu verwalten. Das Banner speichert Ihre Datenschutz-Einstellungen, damit sich die Website merken kann, ob Sie optionale Analyse akzeptiert oder abgelehnt haben.',
    cookieP2:
      'Rechtsgrundlage für die Speicherung der Einwilligungs-Einstellungen ist Art. 6 Abs. 1 lit. f DSGVO auf Grundlage meines berechtigten Interesses, Ihre Datenschutz-Entscheidungen zu respektieren und zu dokumentieren.',
    cookiePre:
      'Sie können Ihre Einwilligung jederzeit ändern oder widerrufen, indem Sie die ',
    cookiePost: ' auf dieser Website erneut öffnen.',
    analyticsH: '7. Webanalyse',
    analyticsP1:
      'Diese Website verwendet Vercel Web Analytics, einen datenschutzfreundlichen Analysedienst von Vercel Inc. Die Analyse hilft mir, die allgemeine Nutzung der Website zu verstehen, etwa Seitenaufrufe, Referrer, Geräteinformationen und ungefähre Standortdaten.',
    analyticsP2:
      'Nach Angaben von Vercel verwendet Web Analytics keine Third-Party-Cookies. Vercel speichert anonymisierte Daten und identifiziert Besucher über einen Hash, der aus der eingehenden Anfrage erzeugt wird. Die Besuchersitzung wird nach 24 Stunden automatisch verworfen.',
    analyticsP3:
      'Vercel Web Analytics wird erst aktiviert, nachdem Sie über das Cookie-Banner eingewilligt haben. Rechtsgrundlage für diese Verarbeitung ist Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO. Sie können Ihre Einwilligung jederzeit widerrufen.',
    rightsH: '8. Ihre Rechte',
    rightsP1:
      'Nach der DSGVO haben Sie das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung und Übertragbarkeit Ihrer personenbezogenen Daten. Sie haben außerdem das Recht, der Verarbeitung auf Grundlage berechtigter Interessen zu widersprechen. Beruht die Verarbeitung auf einer Einwilligung, können Sie diese jederzeit widerrufen.',
    rightsP2:
      'Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. In Berlin ist die zuständige Behörde die Berliner Beauftragte für Datenschutz und Informationsfreiheit.',
    contactPrivH: '9. Datenschutz-Kontakt',
    contactPrivPre: 'Für Datenschutzanfragen schreiben Sie bitte an ',
    contactPrivPost: '.',
  },
};

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : defaultLocale;
  setRequestLocale(locale);
  const c = t[locale];

  return (
    <main className={`block ${styles.legalPage}`}>
      <div className={`wrap ${styles.legalWrap}`}>
        <Link href="/" className={`eyebrow ${styles.backLink}`}>
          <FiArrowLeft aria-hidden="true" />
          {c.back}
        </Link>

        <h1 className={`serif ${styles.title}`}>
          {c.title} <span className={styles.titleMeta}>{c.titleMeta}</span>
        </h1>

        <p className={styles.intro}>{c.intro}</p>

        <section aria-labelledby="controller" className={styles.section}>
          <h2 id="controller" className={`serif ${styles.heading}`}>
            {c.controllerH}
          </h2>
          <p className={styles.text}>
            {c.controllerLine}
            <br />
            {c.emailLabel}{' '}
            <a href="mailto:bardwi.brm@gmail.com" className="accent">
              bardwi.brm(at)gmail.com
            </a>
          </p>
        </section>

        <section aria-labelledby="hosting" className={styles.section}>
          <h2 id="hosting" className={`serif ${styles.heading}`}>
            {c.hostingH}
          </h2>
          <p className={styles.text}>{c.hostingP}</p>
        </section>

        <section aria-labelledby="contact" className={styles.section}>
          <h2 id="contact" className={`serif ${styles.heading}`}>
            {c.contactH}
          </h2>
          <p className={styles.text}>{c.contactP1}</p>
          <p className={styles.text}>{c.contactP2}</p>
        </section>

        <section aria-labelledby="fonts" className={styles.section}>
          <h2 id="fonts" className={`serif ${styles.heading}`}>
            {c.fontsH}
          </h2>
          <p className={styles.text}>
            {c.fontsPre}
            <code className={styles.code}>next/font</code>
            {c.fontsPost}
          </p>
        </section>

        <section aria-labelledby="external-links" className={styles.section}>
          <h2 id="external-links" className={`serif ${styles.heading}`}>
            {c.extH}
          </h2>
          <p className={styles.text}>{c.extP}</p>
        </section>

        <section aria-labelledby="cookie-consent" className={styles.section}>
          <h2 id="cookie-consent" className={`serif ${styles.heading}`}>
            {c.cookieH}
          </h2>
          <p className={styles.text}>{c.cookieP1}</p>
          <p className={styles.text}>{c.cookieP2}</p>
          <p className={styles.text}>
            {c.cookiePre}
            <CookieSettingsButton />
            {c.cookiePost}
          </p>
        </section>

        <section aria-labelledby="analytics" className={styles.section}>
          <h2 id="analytics" className={`serif ${styles.heading}`}>
            {c.analyticsH}
          </h2>
          <p className={styles.text}>{c.analyticsP1}</p>
          <p className={styles.text}>{c.analyticsP2}</p>
          <p className={styles.text}>{c.analyticsP3}</p>
        </section>

        <section aria-labelledby="rights" className={styles.section}>
          <h2 id="rights" className={`serif ${styles.heading}`}>
            {c.rightsH}
          </h2>
          <p className={styles.text}>{c.rightsP1}</p>
          <p className={styles.text}>{c.rightsP2}</p>
        </section>

        <section aria-labelledby="privacy-contact" className={styles.section}>
          <h2 id="privacy-contact" className={`serif ${styles.heading}`}>
            {c.contactPrivH}
          </h2>
          <p className={styles.text}>
            {c.contactPrivPre}
            <a href="mailto:bardwi.brm@gmail.com" className="accent">
              bardwi.brm(at)gmail.com
            </a>
            {c.contactPrivPost}
          </p>
        </section>
      </div>
    </main>
  );
}
