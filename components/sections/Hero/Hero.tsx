import Image from 'next/image';
import Link from 'next/link';
import { Socials } from '@/components/ui/Icons';
import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={`wrap ${styles.heroGrid}`}>
        <div className={styles.heroText}>
          <span className={`eyebrow ${styles.rise}`}>
            Bidangshree Brahma — Berlin
          </span>

          <h1 className={styles.rise}>
            Translating user needs into <em>effortless</em>
            <br />
            product experiences.
          </h1>

          <p className={`${styles.lede} ${styles.rise}`}>
            Product Owner / Product Manager in Berlin with a frontend background
            and a strong focus on UX/UI. I turn insights into clear MVP scopes,
            prioritized backlogs, and practical prototypes teams can build.
          </p>

          <div className={`${styles.heroCta} ${styles.rise}`}>
            <Link
              href="#linguahub"
              className={`${styles.btn} ${styles.btnSolid}`}
            >
              View LinguaHub case study
            </Link>

            <Link
              href="#contact"
              className={`${styles.btn} ${styles.btnGhost}`}
            >
              Get in touch
            </Link>
          </div>

          <div className={`${styles.heroFeature} ${styles.rise}`}>
            <span className={styles.dot} aria-hidden="true" />
            <span>
              <b>Featured UX case study:</b> LinguaHub — turning a real learning
              problem into a focused MVP and clickable prototype.
            </span>
          </div>

          <Socials className={`${styles.socials} ${styles.rise}`} />
        </div>

        <aside className={`${styles.heroAside} ${styles.rise}`}>
          <div className={styles.portrait}>
            <Image
              src="/portrait.jpg"
              alt="Bidangshree Brahma"
              width={420}
              height={520}
              priority
              className={styles.portraitImg}
            />

            <div className={styles.portraitFallback}>BB</div>
          </div>

          <div className={styles.factsRow}>
            <div className={styles.fact}>
              <div className={styles.n}>7 yrs</div>
              <div className={styles.l}>frontend &amp; UX delivery</div>
            </div>

            <div className={styles.fact}>
              <div className={styles.n}>PM/PO</div>
              <div className={styles.l}>Bootcamp · 2026</div>
            </div>

            <div className={styles.fact}>
              <div className={styles.n}>1</div>
              <div className={styles.l}>end-to-end case study</div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
