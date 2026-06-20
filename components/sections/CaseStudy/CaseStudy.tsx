import Link from 'next/link';
import { FiFileText } from 'react-icons/fi';
import styles from './CaseStudy.module.scss';

export default function CaseStudy() {
  return (
    <section id="linguahub" className={`block paper2 ${styles.caseSection}`}>
      <div className="wrap">
        <div className={`${styles.secHead} ${styles.rise}`}>
          <span className="eyebrow">Featured Case Study</span>

          <h2>
            Designing a user experience from a real problem - not just a feature
            list.
          </h2>
        </div>

        <article className={`${styles.case} ${styles.rise}`}>
          <div className={styles.caseIn}>
            <span className={styles.caseTag}>
              UX-focused Product Management · EdTech · MVP
            </span>

            <h3>
              Lingua<em>Hub</em>
            </h3>

            <p className={styles.sub}>
              A central class material hub for adult German learners and
              teachers - designed around one UX goal: helping learners find
              lessons, homework, and course materials in one organized place.
            </p>

            <div
              className={styles.caseSnapshot}
              aria-label="LinguaHub project summary"
            >
              <div className={styles.snapshotCard}>
                <div className={styles.snapshotLabel}>Problem</div>
                <div className={styles.snapshotText}>
                  Class materials are scattered across chats, folders, PDFs and
                  emails.
                </div>
              </div>

              <div className={styles.snapshotCard}>
                <div className={styles.snapshotLabel}>Users</div>
                <div className={styles.snapshotText}>
                  Adult German learners and teachers in intensive courses.
                </div>
              </div>

              <div className={styles.snapshotCard}>
                <div className={styles.snapshotLabel}>Role</div>
                <div className={styles.snapshotText}>
                  UX discovery, user flows, MVP scoping, backlog, prototype and
                  validation plan.
                </div>
              </div>

              <div className={styles.snapshotCard}>
                <div className={styles.snapshotLabel}>Outcome</div>
                <div className={styles.snapshotText}>
                  A two-release MVP plan with clear UX structure and a clickable
                  prototype.
                </div>
              </div>
            </div>

            <div className={styles.caseLinks}>
              <Link
                href="/case-studies/linguahub"
                className={styles.primaryLink}
              >
                <FiFileText aria-hidden="true" />
                Read full case study
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
