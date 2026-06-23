'use client';

import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { Socials } from '@/components/ui/Icons';
import styles from './Hero.module.scss';
import { useT } from '@/lib/i18n/dictionary';

export default function Hero() {
  const t = useT();

  return (
    <section id="top" className={styles.hero}>
      <div className={`wrap ${styles.heroGrid}`}>
        <div className={styles.heroText}>
          <span className={`eyebrow ${styles.rise}`}>{t.hero.eyebrow}</span>

          <h1 className={styles.rise}>
            {t.hero.titlePre}
            <em>{t.hero.titleEm}</em>

            {t.hero.titlePost}
          </h1>

          <p className={`${styles.lede} ${styles.rise}`}>{t.hero.lede}</p>

          <div className={`${styles.heroCta} ${styles.rise}`}>
            <Link
              href="/case-studies/linguahub"
              className={`${styles.btn} ${styles.btnSolid}`}
            >
              {t.hero.ctaPrimary}
            </Link>

            <Link
              href="#contact"
              className={`${styles.btn} ${styles.btnGhost}`}
            >
              {t.hero.ctaSecondary}
            </Link>
          </div>

          <div className={`${styles.heroFeature} ${styles.rise}`}>
            <span className={styles.dot} aria-hidden="true" />
            <span>
              <b>{t.hero.featurePre}</b>
              {t.hero.featurePost}
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
              <div className={styles.l}>{t.hero.factExp}</div>
            </div>

            <div className={styles.fact}>
              <div className={styles.n}>PM/PO</div>
              <div className={styles.l}>{t.hero.factBootcamp}</div>
            </div>

            <div className={styles.fact}>
              <div className={styles.n}>1</div>
              <div className={styles.l}>{t.hero.factCase}</div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
