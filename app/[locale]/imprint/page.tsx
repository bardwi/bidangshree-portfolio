import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from '@/i18n/navigation';
import { defaultLocale, isLocale, type Locale } from '@/lib/i18n/config';
import styles from './Imprint.module.scss';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title:
      locale === 'de'
        ? 'Impressum – Bidangshree Brahma'
        : 'Imprint – Bidangshree Brahma',
    robots: { index: false, follow: false },
  };
}

const t = {
  en: {
    back: 'Back to portfolio',
    title: 'Imprint',
    titleMeta: '· Impressum',
    intro: 'Information according to § 5 DDG.',
    providerH: 'Provided by',
    emailLabel: 'Email:',
    responsibleH: 'Responsible for content',
    responsibleLine1: 'Bidangshree Brahma',
    responsibleLine2: 'Berlin, Germany',
    liabilityContentH: 'Liability for content',
    liabilityContentP:
      'As a service provider, I am responsible for my own content on this website in accordance with general laws. However, I am not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information under general laws remain unaffected.',
    liabilityLinksH: 'Liability for links',
    liabilityLinksP:
      'This website contains links to external websites. I have no influence over the content of those external websites and therefore cannot accept any liability for them. The respective provider or operator of the linked pages is always responsible for their content.',
    copyrightH: 'Copyright',
    copyrightP:
      'The content and works on this website are subject to German copyright law. Any duplication, distribution, or commercial use of the content without the express written consent of the author is prohibited.',
  },
  de: {
    back: 'Zurück zum Portfolio',
    title: 'Impressum',
    titleMeta: '· Imprint',
    intro: 'Angaben gemäß § 5 DDG.',
    providerH: 'Anbieter',
    emailLabel: 'E-Mail:',
    responsibleH: 'Verantwortlich für den Inhalt',
    responsibleLine1: 'Bidangshree Brahma',
    responsibleLine2: 'Berlin, Deutschland',
    liabilityContentH: 'Haftung für Inhalte',
    liabilityContentP:
      'Als Diensteanbieter bin ich gemäß den allgemeinen Gesetzen für eigene Inhalte auf dieser Website verantwortlich. Ich bin jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.',
    liabilityLinksH: 'Haftung für Links',
    liabilityLinksP:
      'Diese Website enthält Links zu externen Websites. Auf deren Inhalte habe ich keinen Einfluss und kann dafür keine Haftung übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.',
    copyrightH: 'Urheberrecht',
    copyrightP:
      'Die Inhalte und Werke auf dieser Website unterliegen dem deutschen Urheberrecht. Jede Vervielfältigung, Verbreitung oder kommerzielle Nutzung der Inhalte ohne ausdrückliche schriftliche Zustimmung des Autors ist untersagt.',
  },
};

export default async function ImprintPage({
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

        <section aria-labelledby="provider" className={styles.section}>
          <h2 id="provider" className={`serif ${styles.heading}`}>
            {c.providerH}
          </h2>
          <p className={styles.text}>
            Bidangshree Brahma
            <br />
            Friedrichshain
            <br />
            10245 Berlin
            <br />
            {locale === 'de' ? 'Deutschland' : 'Germany'}
            <br />
            <br />
            {c.emailLabel}{' '}
            <a href="mailto:bardwi.brm@gmail.com" className="accent">
              bardwi.brm(at)gmail.com
            </a>
          </p>
        </section>

        <section
          aria-labelledby="content-responsibility"
          className={styles.section}
        >
          <h2 id="content-responsibility" className={`serif ${styles.heading}`}>
            {c.responsibleH}
          </h2>
          <p className={styles.text}>
            {c.responsibleLine1}
            <br />
            {c.responsibleLine2}
          </p>
        </section>

        <section aria-labelledby="content-liability" className={styles.section}>
          <h2 id="content-liability" className={`serif ${styles.heading}`}>
            {c.liabilityContentH}
          </h2>
          <p className={styles.text}>{c.liabilityContentP}</p>
        </section>

        <section aria-labelledby="link-liability" className={styles.section}>
          <h2 id="link-liability" className={`serif ${styles.heading}`}>
            {c.liabilityLinksH}
          </h2>
          <p className={styles.text}>{c.liabilityLinksP}</p>
        </section>

        <section aria-labelledby="copyright" className={styles.section}>
          <h2 id="copyright" className={`serif ${styles.heading}`}>
            {c.copyrightH}
          </h2>
          <p className={styles.text}>{c.copyrightP}</p>
        </section>
      </div>
    </main>
  );
}
