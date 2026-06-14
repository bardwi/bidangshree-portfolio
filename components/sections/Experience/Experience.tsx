import { education, experience } from '@/lib/content';
import styles from './Experience.module.scss';

export default function Experience() {
  return (
    <section id="experience" className="block paper2">
      <div className="wrap">
        <div className={`${styles.secHead} ${styles.rise}`}>
          <span className="eyebrow">Experience</span>
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
          <h3 className={styles.alsoHead}>Education</h3>

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
            <h4>Additional training</h4>

            <div className={styles.trainingRows}>
              <div className={styles.trainingRow}>
                <div className={styles.trainingMeta}>
                  <span>Feb–Jul 2025</span>
                </div>
                <div className={styles.trainingBody}>
                  <strong>BSK B2 German</strong>
                  <p>GFBM Berlin</p>
                </div>
              </div>

              <div className={styles.trainingRow}>
                <div className={styles.trainingMeta}>
                  <span>Apr–Jul 2026</span>
                </div>
                <div className={styles.trainingBody}>
                  <strong>C1 German course</strong>
                  <p>die deutSCHule</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.also} ${styles.rise}`}>
          <h3 className={styles.alsoHead}>
            Frontend <span className="accent">Project</span>
          </h3>

          <article className={styles.proj}>
            <div className={styles.projBody}>
              <div className={styles.projTag}>Aug 2025 - Present</div>

              <h3>Ingala Earth</h3>

              <p>
                Public-facing website for a regenerative design and permaculture
                consultancy.
              </p>

              <ul className={styles.projList}>
                <li>Built with Next.js, React, TypeScript and SCSS Modules</li>
                <li>
                  Translated Figma layouts into reusable, accessible UI
                  components
                </li>
                <li>Static generation and lazy-loading for performance</li>
                <li>
                  Worked directly with the founder on content structure and
                  brand tone
                </li>
              </ul>

              <a
                href="https://ingala.earth"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projLink}
              >
                Visit ingala.earth →
              </a>
            </div>

            <div className={styles.projSide}>
              <div>
                <div className={styles.psWord}>ingala</div>
                <div className={styles.psSub}>
                  Regeneration &amp; Resilience
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
