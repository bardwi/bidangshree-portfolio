'use client';

import { Link } from '@/i18n/navigation';
import { FiFileText } from 'react-icons/fi';
import styles from './CaseStudy.module.scss';
import { useT } from '@/lib/i18n/dictionary';

export default function CaseStudy() {
  const t = useT();
  const s = t.caseStudy.snapshot;

  return (
    <section id="linguahub" className={`block paper2 ${styles.caseSection}`}>
      <div className="wrap">
        <div className={`${styles.secHead} ${styles.rise}`}>
          <span className="eyebrow">{t.caseStudy.eyebrow}</span>

          <h2>{t.caseStudy.title}</h2>
        </div>

        <article className={`${styles.case} ${styles.rise}`}>
          <div className={styles.caseIn}>
            <span className={styles.caseTag}>{t.caseStudy.tag}</span>

            <h3>
              Lingua<em>Hub</em>
            </h3>

            <p className={styles.sub}>{t.caseStudy.sub}</p>

            <div
              className={styles.caseSnapshot}
              aria-label="LinguaHub project summary"
            >
              <div className={styles.snapshotCard}>
                <div className={styles.snapshotLabel}>{s.problemLabel}</div>
                <div className={styles.snapshotText}>{s.problemText}</div>
              </div>

              <div className={styles.snapshotCard}>
                <div className={styles.snapshotLabel}>{s.usersLabel}</div>
                <div className={styles.snapshotText}>{s.usersText}</div>
              </div>

              <div className={styles.snapshotCard}>
                <div className={styles.snapshotLabel}>{s.roleLabel}</div>
                <div className={styles.snapshotText}>{s.roleText}</div>
              </div>

              <div className={styles.snapshotCard}>
                <div className={styles.snapshotLabel}>{s.outcomeLabel}</div>
                <div className={styles.snapshotText}>{s.outcomeText}</div>
              </div>
            </div>

            <div className={styles.caseLinks}>
              <Link
                href="/case-studies/linguahub"
                className={styles.primaryLink}
              >
                <FiFileText aria-hidden="true" />
                {t.caseStudy.cta}
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
