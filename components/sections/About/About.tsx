'use client';

import { FiLayout, FiList, FiSearch } from 'react-icons/fi';
import styles from './About.module.scss';
import { useT } from '@/lib/i18n/dictionary';

const pillarIcons = [FiSearch, FiList, FiLayout];

export default function About() {
  const t = useT();

  return (
    <section id="about" className="block">
      <div className="wrap">
        <div className={`${styles.secHead} ${styles.rise}`}>
          <span className="eyebrow">{t.about.eyebrow}</span>

          <h2>
            {t.about.titlePre}
            <span className="accent">{t.about.titleAccent}</span>
          </h2>
        </div>

        <div className={styles.aboutGrid}>
          <div className={styles.rise}>
            <p>
              {t.about.p1Pre}
              <b>{t.about.p1Bold}</b>
              {t.about.p1Post}
            </p>

            <p>{t.about.p2}</p>

            {(t.about.p3Pre || t.about.p3Bold || t.about.p3Post) && (
              <p>
                {t.about.p3Pre}
                <b>{t.about.p3Bold}</b>
                {t.about.p3Post}
              </p>
            )}
          </div>

          <div className={`${styles.pillars} ${styles.rise}`}>
            {t.about.pillars.map((pillar, index) => {
              const Icon = pillarIcons[index] ?? FiSearch;
              return (
                <div className={styles.pillar} key={pillar.title}>
                  <h4>
                    <span className={styles.icon}>
                      <Icon aria-hidden="true" />
                    </span>
                    {pillar.title}
                  </h4>
                  <p>{pillar.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
