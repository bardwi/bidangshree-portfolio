'use client';

import styles from './Bootcamp.module.scss';
import { useT } from '@/lib/i18n/dictionary';

export default function Bootcamp() {
  const t = useT();

  return (
    <section id="bootcamp" className="block">
      <div className="wrap">
        <div className={`${styles.boot} ${styles.rise}`}>
          <div>
            <span className={`eyebrow ${styles.eyebrow}`}>
              {t.bootcamp.eyebrow}
            </span>

            <h3>{t.bootcamp.title}</h3>

            <div className={styles.meta}>{t.bootcamp.meta}</div>

            <p>{t.bootcamp.body}</p>
          </div>

          <div className={styles.bootFacts}>
            {t.bootcamp.facts.map((fact) => (
              <div className={styles.fact} key={fact.number}>
                <div className={styles.factNumber}>{fact.number}</div>
                <div className={styles.factLabel}>{fact.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
