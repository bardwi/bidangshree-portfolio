import { modules } from '@/lib/content';
import styles from './Bootcamp.module.scss';

export default function Bootcamp() {
  return (
    <section id="bootcamp" className="block">
      <div className="wrap">
        <div className={`${styles.boot} ${styles.rise}`}>
          <div>
            <span className={`eyebrow ${styles.eyebrow}`}>
              Professional Training · 2026
            </span>

            <h3>Product Management &amp; Product Owner Training</h3>

            <div className={styles.meta}>
              Digitale Leute School · Remote · Apr–Jul 2026
            </div>

            <p>
              An intensive 636-unit Product Management and Product Owner
              training at Digitale Leute School - covering discovery, strategy,
              UX design, agile delivery, stakeholder management, and product
              analytics. I use LinguaHub as my UX-focused portfolio case study
              throughout.
            </p>
          </div>

          <div className={styles.bootFacts}>
            <div className={styles.fact}>
              <div className={styles.factNumber}>4</div>
              <div className={styles.factLabel}>modules</div>
            </div>

            <div className={styles.fact}>
              <div className={styles.factNumber}>636</div>
              <div className={styles.factLabel}>teaching units</div>
            </div>
          </div>
        </div>

        <div className={`${styles.moduleGrid} ${styles.rise}`}>
          {modules.map((module) => (
            <div className={styles.module} key={module.num}>
              <div className={styles.moduleNumber}>{module.num}</div>

              <h4>{module.title}</h4>

              <div className={styles.moduleTopics}>
                {module.topics.map((topic) => (
                  <span key={topic}>{topic}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
