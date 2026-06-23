'use client';

import { Link } from '@/i18n/navigation';
import { getEducation, getExperience } from '@/lib/content';
import styles from './Experience.module.scss';
import { useAppLocale, useT } from '@/lib/i18n/dictionary';

export default function Experience() {
  const locale = useAppLocale();
  const t = useT();
  const experience = getExperience(locale);
  const education = getEducation(locale);

  return (
    <section id="experience" className="block paper2">
      <div className="wrap">
        <div className={`${styles.secHead} ${styles.rise}`}>
          <span className="eyebrow">{t.experience.eyebrow}</span>
        </div>

        <div className={styles.exp}>
          {experience.map((item) => (
            <div
              className={`${styles.expRow} ${styles.rise}`}
              key={`${item.company}-${item.date}`}
            >
              <div className={styles.expMeta}>
                <div className={styles.loc}>{item.loc}</div>
                <div className={styles.date}>{item.date}</div>
              </div>

              <div className={styles.expBody}>
                <h4>
                  {item.company}
                  {item.tag ? (
                    <span className={styles.roleTag}>{item.tag}</span>
                  ) : null}
                </h4>

                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className={`${styles.edu} ${styles.rise}`}>
          <h3 className={styles.alsoHead}>{t.experience.eduTitle}</h3>

          <div className={styles.eduGrid}>
            {education.map((item) => (
              <div className={styles.eduCard} key={item.school}>
                <div className={styles.deg}>{item.deg}</div>
                <div className={styles.school}>{item.school}</div>
                <div className={styles.yr}>{item.yr}</div>
              </div>
            ))}
          </div>

          <div className={styles.additionalTraining}>
            <h4>{t.experience.additionalTitle}</h4>

            <div className={styles.trainingGrid}>
              {t.experience.training.map((item) => {
                const isFeatured = item.what.includes('Product Management');
                const [provider, details] = item.where.split('\n');

                return (
                  <div
                    className={`${styles.trainingCard} ${isFeatured ? styles.featuredTraining : ''}`}
                    key={item.what}
                  >
                    <span>{item.when}</span>
                    <strong>{item.what}</strong>
                    <p>
                      <span className={styles.trainingProvider}>
                        {provider}
                      </span>
                      {details ? (
                        <>
                          {'\n'}
                          {details}
                        </>
                      ) : null}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className={`${styles.also} ${styles.rise}`}>
          <h3 className={styles.alsoHead}>
            {t.experience.projectPre}
            <span className="accent">{t.experience.projectAccent}</span>
          </h3>

          <article className={styles.proj}>
            <div className={styles.projBody}>
              <div className={styles.projTag}>{t.experience.projDate}</div>

              <h3>{t.experience.projName}</h3>

              <p>{t.experience.projDesc}</p>

              <ul className={styles.projList}>
                {t.experience.projBullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>

              <div className={styles.projLinks}>
                <Link
                  href="/case-studies/ingalaearth"
                  className={styles.projCaseLink}
                >
                  {t.experience.projCase}
                </Link>
                <a
                  href="https://ingala.earth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projLink}
                >
                  {t.experience.projLink}
                </a>
              </div>
            </div>

            <div className={styles.projSide}>
              <div>
                <div className={styles.psWord}>ingala</div>
                <div className={styles.psSub}>{t.experience.projSideSub}</div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
