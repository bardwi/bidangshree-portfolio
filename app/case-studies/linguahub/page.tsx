'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FiArrowLeft, FiArrowRight, FiLayers } from 'react-icons/fi';
import FigmaPrototypeEmbed from './FigmaPrototypeEmbed';
import styles from './LinguaHubCaseStudy.module.scss';
import {
  BASE,
  FIGMA_LEARNER_PROTO_URL,
  FIGMA_TEACHER_PROTO_URL,
  navItems,
  heroFacts,
  targetGroups,
  methods,
  affinityClusters,
  insights,
  productValues,
  solutionFeatures,
  learnerFlow,
  teacherFlow,
  roadmap,
  kpis,
  learnings,
  interviewStats,
  type FlowStep,
} from './content';

function Phone({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: React.ReactNode;
}) {
  return (
    <figure className={styles.phone}>
      <Image
        src={`${BASE}/${src}`}
        alt={alt}
        width={378}
        height={818}
        loading="lazy"
        sizes="(max-width: 600px) 80vw, (max-width: 980px) 40vw, 286px"
      />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

function FlowExplorer({
  label,
  title,
  summary,
  steps,
}: {
  label: string;
  title: string;
  summary: string;
  steps: FlowStep[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = steps[activeIndex];
  const ActiveIcon = activeStep.icon;

  return (
    <section
      className={styles.flowExplorer}
      aria-labelledby={`${label}-flow-title`}
    >
      <div className={styles.flowHeader}>
        <span>{label}</span>
        <h3 id={`${label}-flow-title`}>{title}</h3>
        <p>{summary}</p>
      </div>
      <div
        className={styles.flowTabs}
        role="tablist"
        aria-label={`${label} steps`}
      >
        {steps.map((step, index) => {
          const isActive = activeIndex === index;
          return (
            <button
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`${label}-panel`}
              className={`${styles.flowTabButton} ${isActive ? styles.activeFlowTab : ''}`}
              key={step.title}
              onClick={() => setActiveIndex(index)}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{step.title}</strong>
            </button>
          );
        })}
      </div>
      <article
        className={styles.flowInfoPanel}
        id={`${label}-panel`}
        role="tabpanel"
      >
        <div className={styles.flowIconWrap}>
          <ActiveIcon aria-hidden="true" />
        </div>
        <div>
          <div className={styles.flowMeta}>
            Step {String(activeIndex + 1).padStart(2, '0')}
          </div>
          <h4>{activeStep.title}</h4>
          <p>{activeStep.description}</p>
          <small>{activeStep.detail}</small>
        </div>
      </article>
    </section>
  );
}

export default function LinguaHubCaseStudyPage() {
  const [activeId, setActiveId] = useState('intro');

  useEffect(() => {
    const revealEls = Array.from(
      document.querySelectorAll(`.${styles.reveal}`),
    );
    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.inview);
            revealObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );
    revealEls.forEach((el) => revealObs.observe(el));

    const spyTargets = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));
    const spyObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: 0 },
    );
    spyTargets.forEach((el) => spyObs.observe(el));

    return () => {
      revealObs.disconnect();
      spyObs.disconnect();
    };
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveId(id);
    }
  };

  return (
    <main className={styles.page}>
      <header className={styles.topNav}>
        <Link href="/#linguahub" className={styles.logoLink}>
          Lingua<em>Hub</em>
        </Link>
        <nav className={styles.navLinks} aria-label="Case study navigation">
          {navItems.map((item) => (
            <a
              href={`#${item.id}`}
              key={item.id}
              onClick={(e) => handleNavClick(e, item.id)}
              className={activeId === item.id ? styles.active : ''}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <span className={styles.navTag}>Case Study</span>
      </header>

      {/* ===== INTRO ===== */}
      <section id="intro" className={styles.hero}>
        <div className={styles.heroInner}>
          <Link href="/#linguahub" className={styles.backLink}>
            <FiArrowLeft aria-hidden="true" /> Back to portfolio
          </Link>
          <div className={styles.pillRow}>
            <span>Product case study</span>
            <span>MVP design</span>
            <span>User research</span>
          </div>
          <h1>
            Lingua<em>Hub</em>
          </h1>
          <p className={styles.heroLead}>
            A digital course hub that helps German learners find lessons,
            materials, homework and topics in one <em>organized</em> place.
          </p>
          <p className={styles.heroText}>
            Based on scattered PDFs, links, notes and course information, I
            shaped a focused MVP concept: LinguaHub gives learners orientation
            and teachers a simple publishing flow.
          </p>
          <dl className={styles.heroFacts}>
            {heroFacts.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>

          <div
            className={`${styles.heroPhones} ${styles.screensRail} ${styles.three} ${styles.reveal}`}
          >
            <Phone
              src="course-home.png"
              alt="LinguaHub learner course home screen"
              caption={
                <>
                  <b>Course home</b> - today&apos;s lesson and material first
                </>
              }
            />

            <Phone
              src="course-overview.png"
              alt="LinguaHub course overview screen"
              caption={
                <>
                  <b>Course overview</b> - lessons, topics and progress
                </>
              }
            />

            <Phone
              src="lesson-builder.png"
              alt="LinguaHub teacher lesson builder screen"
              caption={
                <>
                  <b>Lesson builder</b> - prepare, tag and save lessons
                </>
              }
            />
          </div>
        </div>
      </section>

      <section className={styles.sectionWhite}>
        <div className={`${styles.sectionInnerTwo} ${styles.reveal}`}>
          <div>
            <span className={styles.sectionKicker}>01 - Intro / Project</span>
            <h2>Starting point</h2>
            <p>
              I developed LinguaHub as a product management case study for
              German language courses. The starting point was a familiar problem
              in classroom learning: the content exists, but it is spread across
              too many channels.
            </p>
            <p>
              My goal was to turn this problem into a clear MVP: not a large
              learning management system, but a focused course hub that makes
              everyday learning and teaching easier.
            </p>
          </div>
          <aside className={styles.assumptionCard}>
            <span>Initial assumption</span>
            <strong>
              &ldquo;Learners do not simply need more material. They need
              orientation: what belongs to which lesson, which file is important
              and what needs to be done next?&rdquo;
            </strong>
          </aside>
        </div>
      </section>

      {/* ===== PROBLEM ===== */}
      <section id="problem" className={styles.sectionSoft}>
        <div className={`${styles.sectionInner} ${styles.reveal}`}>
          <span className={styles.sectionKicker}>02 - Problem</span>
          <h2>The first hypothesis</h2>
          <p className={styles.narrowText}>
            My first hypothesis was that the main problem in German courses is
            not a lack of material. The problem appears when materials, links,
            notes and homework are not clearly connected to lessons and topics.
          </p>
          <div className={styles.tagRow}>
            <span>scattered</span>
            <span>time-consuming</span>
            <span>unclear</span>
            <span>repeated questions</span>
          </div>
          <div className={styles.darkQuestion}>
            <span>Original question</span>
            <strong>
              How might we help learners find course material quickly while
              allowing teachers to publish lessons without extra workload?
            </strong>
          </div>
        </div>
      </section>

      {/* ===== RESEARCH ===== */}
      <section id="research" className={styles.sectionWhite}>
        <div className={`${styles.sectionInner} ${styles.reveal}`}>
          <span className={styles.sectionKicker}>03 - Target users</span>
          <h2>Users I focused on</h2>
          <p className={styles.narrowText}>
            I looked at three perspectives. The MVP needs to be easy for
            learners, fast enough for teachers and useful for course providers
            who want a clearer digital learning structure.
          </p>
          <div className={styles.targetGrid}>
            {targetGroups.map((group) => (
              <article
                className={`${styles.targetCard} ${group.active ? styles.activeTarget : ''}`}
                key={group.number}
              >
                <span>{group.number}</span>
                <h3>{group.title}</h3>
                <p>{group.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionSoft}>
        <div className={`${styles.sectionInnerTwo} ${styles.reveal}`}>
          <div>
            <span className={styles.sectionKicker}>04 - Research</span>
            <h2>User research &amp; discovery</h2>
            <p>
              I conducted user interviews with 4 German learners and 1 teacher,
              then combined the findings with journey mapping, story mapping and
              MVP prioritization exercises.
            </p>
            <p>
              The research focused on two questions: where do learners lose
              orientation in daily course life, and where does the publishing
              process become too much effort for teachers?
            </p>
          </div>
          <aside className={styles.methodCard}>
            <span>Methods</span>
            <ul>
              {methods.map((method) => (
                <li key={method}>{method}</li>
              ))}
            </ul>
          </aside>
        </div>
        <div
          className={`${styles.userInterviewStats} ${styles.reveal}`}
          aria-label="Research sample"
        >
          {interviewStats.map(([number, label]) => (
            <div key={label}>
              <strong>{number}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
        <div className={`${styles.affinityBoard} ${styles.reveal}`}>
          <span>Affinity mapping - clusters from user problems</span>
          <div>
            {affinityClusters.map(([title, notes]) => (
              <article key={title as string}>
                <h3>{title}</h3>
                {(notes as string[]).map((note) => (
                  <p key={note}>{note}</p>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INSIGHTS ===== */}
      <section id="insights" className={styles.sectionWhite}>
        <div className={`${styles.sectionInner} ${styles.reveal}`}>
          <span className={styles.sectionKicker}>05 - Insights</span>
          <h2>What the research showed</h2>
          <div className={styles.insightList}>
            {insights.map((insight) => (
              <article className={styles.insightCard} key={insight.number}>
                <span>{insight.number}</span>
                <div>
                  <h3>{insight.title}</h3>
                  <p>{insight.text}</p>
                  <div>
                    {insight.tags.map((tag) => (
                      <small key={tag}>{tag}</small>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className={styles.blueInsight}>
            <span>The key insight</span>
            <strong>
              The real problem is not missing content. The problem starts when
              learners have to search for material without clear course context.
            </strong>
            <p>
              That is why LinguaHub organizes content around lessons, topics and
              tasks instead of becoming a loose file storage system.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.sectionSoft}>
        <div className={`${styles.sectionInner} ${styles.reveal}`}>
          <span className={styles.sectionKicker}>06 - Problem reframing</span>
          <h2>A sharper product focus</h2>
          <p className={styles.narrowText}>
            After research and exercises, the original problem felt too broad. I
            reframed the challenge around learner orientation and a realistic
            teacher workflow.
          </p>
          <div className={styles.reframeGrid}>
            <article>
              <span>Before</span>
              <strong>How can we organize course materials digitally?</strong>
            </article>
            <div className={styles.arrowDot}>
              <FiArrowRight aria-hidden="true" />
            </div>
            <article className={styles.afterCard}>
              <span>After</span>
              <strong>
                How can we help German learners find material in the right
                lesson and topic context, while teachers can prepare and publish
                content quickly?
              </strong>
            </article>
          </div>
        </div>
      </section>

      {/* ===== SOLUTION ===== */}
      <section id="solution" className={styles.sectionWhite}>
        <div className={`${styles.sectionInner} ${styles.reveal}`}>
          <span className={styles.sectionKicker}>07 - Idea / Concept</span>
          <h2>LinguaHub</h2>
          <h3 className={styles.blueSubline}>
            A digital course hub for German classes.
          </h3>
          <p className={styles.narrowText}>
            LinguaHub is not a full learning management system. It is a focused
            course hub that brings together lessons, materials, homework, topics
            and course information.
          </p>
          <div className={styles.valueBox}>
            <span>Value proposition</span>
            <strong>
              German learners quickly find what belongs to the current or
              previous lesson - and teachers publish content once instead of
              repeatedly sharing it through different channels.
            </strong>
          </div>
          <div className={styles.valueGrid}>
            {productValues.map((value) => {
              const Icon = value.icon;
              return (
                <article key={value.title}>
                  <Icon aria-hidden="true" />
                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.sectionSoft}>
        <div className={`${styles.solutionInner} ${styles.reveal}`}>
          <div className={styles.solutionSplit}>
            <div>
              <span className={styles.sectionKicker}>
                08 - Solution / Design
              </span>
              <h2>Product vision</h2>
              <p className={styles.narrowText}>
                LinguaHub connects the most important learner and teacher
                workflows: finding content, opening lessons, using materials,
                checking homework and preparing lessons. Tap through the live
                learner prototype to see how the experience holds together.
              </p>
              <div className={styles.featureList}>
                {solutionFeatures.map(([title, text]) => (
                  <article key={title}>
                    <FiLayers aria-hidden="true" />
                    <div>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <aside className={styles.solutionAside}>
              <FigmaPrototypeEmbed
                label="Learner prototype"
                title="Explore the learner flow"
                description="The learner prototype shows how adult German learners enter the course, find lessons, open material and check homework."
                url={FIGMA_LEARNER_PROTO_URL}
              />
            </aside>
          </div>

          <div className={styles.teacherProtoRow}>
            <FigmaPrototypeEmbed
              label="Teacher prototype"
              title="Explore the teacher flow"
              description="The teacher prototype shows how teachers prepare lessons, add material, preview content, save drafts and publish when ready."
              url={FIGMA_TEACHER_PROTO_URL}
            />
          </div>
        </div>
      </section>

      <section className={styles.sectionWhite}>
        <div className={`${styles.sectionInner} ${styles.reveal}`}>
          <span className={styles.sectionKicker}>09 - User Flow</span>
          <h2>Tap through the key flows</h2>
          <p className={styles.narrowText}>
            The flow steps below are tappable. Each step explains the user goal,
            why it exists and how it supports the MVP experience.
          </p>
          <FlowExplorer
            label="Learner"
            title="Invitation → Course → Lesson → Material"
            summary="Learners start from an invitation, open the course and find the right material through lessons, topics or homework."
            steps={learnerFlow}
          />
          <FlowExplorer
            label="Teacher"
            title="Prepare lesson → Preview → Draft or Publish"
            summary="Teachers prepare lessons, add material, check the preview and decide whether to save as draft or publish."
            steps={teacherFlow}
          />

          <div className={`${styles.published} ${styles.reveal}`}>
            <div>
              <span>Preview → publish</span>
              <h3>The teacher sees exactly what the learner will see.</h3>
              <p>
                The last step before going live is the learner&apos;s own view —
                so the teacher publishes with confidence, and the whole class is
                notified the moment it ships.
              </p>
            </div>
            <div className={styles.publishedShot}>
              <Phone
                src="teacher-06-published.png"
                alt="Publish confirmation"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== MVP ROADMAP ===== */}
      <section id="mvp" className={styles.sectionSoft}>
        <div className={`${styles.sectionInner} ${styles.reveal}`}>
          <span className={styles.sectionKicker}>10 - MVP roadmap</span>
          <h2>A 6-month outcome roadmap</h2>
          <p className={styles.narrowText}>
            I sequenced the backlog into two releases across six months. Each
            phase has a goal and a measurable outcome - and the detail loosens
            toward the back, since later months are deliberately coarser.
          </p>
          <div className={styles.roadLegend}>
            <span className={`${styles.roadKey} ${styles.roadKeyR1}`}>
              Release 1 · core value
            </span>
            <span className={`${styles.roadKey} ${styles.roadKeyR2}`}>
              Release 2 · orientation &amp; workflow
            </span>
          </div>
          <div className={styles.roadTrack}>
            {roadmap.map((phase) => (
              <article
                className={`${styles.roadCard} ${phase.release === 'r1' ? styles.roadCardR1 : styles.roadCardR2}`}
                key={phase.month}
              >
                <span className={styles.roadMonth}>{phase.month}</span>
                <h4>{phase.goal}</h4>
                <p>{phase.ships}</p>
                <div className={styles.roadKR}>{phase.kr}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionWhite}>
        <div className={`${styles.sectionInner} ${styles.reveal}`}>
          <span className={styles.sectionKicker}>
            11 - KPIs &amp; validation
          </span>
          <h2>How I would measure the MVP</h2>
          <p className={styles.narrowText}>
            The KPIs are directly connected to prototype tasks, so they can be
            checked before a large launch.
          </p>
          <div className={styles.kpiGrid}>
            {kpis.map(([goal, metric, target, deadline]) => (
              <article key={goal}>
                <span>{goal}</span>
                <h3>{metric}</h3>
                <strong>{target}</strong>
                <p>{deadline}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionWhite}>
        <div className={`${styles.sectionInner} ${styles.reveal}`}>
          <span className={styles.sectionKicker}>12 - Learnings</span>
          <h2>What I learned</h2>
          <div className={styles.learningGrid}>
            {learnings.map(([number, title, text]) => (
              <article key={number}>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
                <span>{number}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.finalBlue}>
        <div className={styles.reveal}>
          <span>Final outcome</span>
          <h2>
            What started as a material organization idea became a focused course
            hub for German learners and teachers.
          </h2>
          <p>
            Through user interviews, story mapping, reframing and MVP
            prioritization, I shaped a focused product concept: learners find
            content faster, while teachers keep control over drafts and
            publication.
          </p>
          <div className={styles.finalStats}>
            <div>
              <strong>5</strong>
              <span>user interviews</span>
            </div>
            <div>
              <strong>2</strong>
              <span>core flows</span>
            </div>
            <div>
              <strong>1</strong>
              <span>focused MVP</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
