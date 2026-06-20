import { FiLayout, FiList, FiSearch } from 'react-icons/fi';
import styles from './About.module.scss';

export default function About() {
  return (
    <section id="about" className="block">
      <div className="wrap">
        <div className={`${styles.secHead} ${styles.rise}`}>
          <span className="eyebrow">About</span>

          <h2>
            Product decisions shaped by UX, users, and{' '}
            <span className="accent">technical feasibility.</span>
          </h2>
        </div>

        <div className={styles.aboutGrid}>
          <div className={styles.rise}>
            <p>
              I focus on the space where{' '}
              <b>user experience, product value, and technical feasibility</b>{' '}
              meet. For seven years, I built user-facing products as a frontend
              engineer. That experience shaped how I think about product: clear
              flows, realistic scope, accessible interfaces, and requirements
              teams can actually build.
            </p>

            <p>
              My product work starts with user needs: what are people trying to
              do, where do they get stuck, and what can we simplify? From there,
              I translate insights into MVP scope, prioritized backlogs, user
              stories, acceptance criteria, and prototypes that help teams and
              stakeholders make clearer decisions.
            </p>

            <p>
              I am currently completing a PM/PO training and applying the
              methods through <b>LinguaHub</b>, an end-to-end EdTech case study
              covering user research, UX structure, MVP scoping, release
              planning, KPIs, and a clickable prototype.
            </p>
          </div>

          <div className={`${styles.pillars} ${styles.rise}`}>
            <div className={styles.pillar}>
              <h4>
                <span className={styles.icon}>
                  <FiSearch aria-hidden="true" />
                </span>
                User needs &amp; UX discovery
              </h4>
              <p>
                Understanding pain points, mapping journeys, and turning user
                needs into focused product decisions.
              </p>
            </div>

            <div className={styles.pillar}>
              <h4>
                <span className={styles.icon}>
                  <FiList aria-hidden="true" />
                </span>
                MVP scoping &amp; backlog focus
              </h4>
              <p>
                Prioritizing what creates user value first - then translating it
                into clear stories, releases, and acceptance criteria.
              </p>
            </div>

            <div className={styles.pillar}>
              <h4>
                <span className={styles.icon}>
                  <FiLayout aria-hidden="true" />
                </span>
                UX/UI prototyping &amp; delivery
              </h4>
              <p>
                Creating practical prototypes, flows, and specs that help teams
                align before building and reduce delivery risk.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
