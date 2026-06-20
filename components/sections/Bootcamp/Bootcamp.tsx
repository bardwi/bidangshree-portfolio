// import Link from 'next/link';
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
              Product Management and Product Owner training focused on product
              discovery, UX strategy, MVP scoping, agile delivery, stakeholder
              communication, and product metrics. I applied these methods
              through LinguaHub, a UX-focused EdTech case study with research,
              user flows, backlog structure, release planning, KPIs, and a
              clickable prototype.
            </p>

            {/* <Link
              href="/case-studies/linguahub"
              className={styles.trainingLink}
            >
              View applied case study
            </Link> */}
          </div>

          <div className={styles.bootFacts}>
            <div className={styles.fact}>
              <div className={styles.factNumber}>Discovery</div>

              <div className={styles.factLabel}>
                user research &amp; problem framing
              </div>
            </div>

            <div className={styles.fact}>
              <div className={styles.factNumber}>MVP</div>

              <div className={styles.factLabel}>
                scope, backlog &amp; release planning
              </div>
            </div>

            <div className={styles.fact}>
              <div className={styles.factNumber}>Prototype</div>

              <div className={styles.factLabel}>
                flows, validation &amp; KPIs
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
