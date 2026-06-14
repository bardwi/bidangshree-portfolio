import type { Metadata } from 'next';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';
import styles from './Imprint.module.scss';

export const metadata: Metadata = {
  title: 'Imprint - Bidangshree Brahma',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ImprintPage() {
  return (
    <main className={`block ${styles.legalPage}`}>
      <div className={`wrap ${styles.legalWrap}`}>
        <Link href="/" className={`eyebrow ${styles.backLink}`}>
          <FiArrowLeft aria-hidden="true" />
          Back to portfolio
        </Link>

        <h1 className={`serif ${styles.title}`}>
          Imprint <span className={styles.titleMeta}>· Impressum</span>
        </h1>

        <p className={styles.intro}>Information according to § 5 DDG.</p>

        <section aria-labelledby="provider" className={styles.section}>
          <h2 id="provider" className={`serif ${styles.heading}`}>
            Provided by
          </h2>

          <p className={styles.text}>
            Bidangshree Brahma
            <br />
            Friedrichschain
            <br />
            10245 Berlin
            <br />
            Germany
            <br />
            <br />
            Email:{' '}
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
            Responsible for content
          </h2>

          <p className={styles.text}>
            Bidangshree Brahma
            <br />
            Berlin, Germany
          </p>
        </section>

        <section aria-labelledby="content-liability" className={styles.section}>
          <h2 id="content-liability" className={`serif ${styles.heading}`}>
            Liability for content
          </h2>

          <p className={styles.text}>
            As a service provider, I am responsible for my own content on this
            website in accordance with general laws. However, I am not obligated
            to monitor transmitted or stored third-party information or to
            investigate circumstances that indicate illegal activity.
            Obligations to remove or block the use of information under general
            laws remain unaffected.
          </p>
        </section>

        <section aria-labelledby="link-liability" className={styles.section}>
          <h2 id="link-liability" className={`serif ${styles.heading}`}>
            Liability for links
          </h2>

          <p className={styles.text}>
            This website contains links to external websites. I have no
            influence over the content of those external websites and therefore
            cannot accept any liability for them. The respective provider or
            operator of the linked pages is always responsible for their
            content.
          </p>
        </section>

        <section aria-labelledby="copyright" className={styles.section}>
          <h2 id="copyright" className={`serif ${styles.heading}`}>
            Copyright
          </h2>

          <p className={styles.text}>
            The content and works on this website are subject to German
            copyright law. Any duplication, distribution, or commercial use of
            the content without the express written consent of the author is
            prohibited.
          </p>
        </section>
      </div>
    </main>
  );
}
