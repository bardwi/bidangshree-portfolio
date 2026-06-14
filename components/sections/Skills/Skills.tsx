import { skills } from '@/lib/content';
import styles from './Skills.module.scss';

export default function Skills() {
  return (
    <section id="skills" className="block">
      <div className="wrap">
        <div className={`${styles.secHead} ${styles.rise}`}>
          <span className="eyebrow">Skills</span>
          <h2>UX-focused product judgment, backed by real engineering.</h2>
        </div>

        <div className={styles.skillGroups}>
          <div
            className={`${styles.skillGroup} ${styles.feature} ${styles.rise}`}
          >
            <h3>Product</h3>
            <div className={styles.chips}>
              {skills.product.map((skill) => (
                <span className={styles.chip} key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className={`${styles.skillGroup} ${styles.rise}`}>
            <h3>Engineering</h3>
            <div className={styles.chips}>
              {skills.engineering.map((skill) => (
                <span className={styles.chip} key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className={`${styles.skillGroup} ${styles.rise}`}>
            <h3>Tools</h3>
            <div className={styles.chips}>
              {skills.tools.map((skill) => (
                <span className={styles.chip} key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className={`${styles.langs} ${styles.rise}`}>
          <h3 className={styles.langsTitle}>Languages</h3>

          <div className={styles.langRow}>
            <div className={styles.lang}>
              <span className={styles.langName}>English</span>
              <span className={styles.langLevel}>C1 · Full professional</span>
            </div>

            <div className={styles.lang}>
              <span className={styles.langName}>German</span>
              <span className={styles.langLevel}>
                B2 · C1 course in progress
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
