'use client';

import { skills } from '@/lib/content';
import styles from './Skills.module.scss';
import { useT } from '@/lib/i18n/dictionary';

export default function Skills() {
  const t = useT();

  return (
    <section id="skills" className="block">
      <div className="wrap">
        <div className={`${styles.secHead} ${styles.rise}`}>
          <span className="eyebrow">{t.skills.eyebrow}</span>
          <h2>{t.skills.title}</h2>
        </div>

        <div className={styles.skillGroups}>
          <div
            className={`${styles.skillGroup} ${styles.feature} ${styles.rise}`}
          >
            <h3>{t.skills.groupProduct}</h3>
            <div className={styles.chips}>
              {skills.product.map((skill) => (
                <span className={styles.chip} key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className={`${styles.skillGroup} ${styles.rise}`}>
            <h3>{t.skills.groupEngineering}</h3>
            <div className={styles.chips}>
              {skills.engineering.map((skill) => (
                <span className={styles.chip} key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className={`${styles.skillGroup} ${styles.rise}`}>
            <h3>{t.skills.groupTools}</h3>
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
          <h3 className={styles.langsTitle}>{t.skills.langsTitle}</h3>

          <div className={styles.langRow}>
            {t.skills.langs.map((lang) => (
              <div className={styles.lang} key={lang.name}>
                <span className={styles.langName}>{lang.name}</span>
                <span className={styles.langLevel}>{lang.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
