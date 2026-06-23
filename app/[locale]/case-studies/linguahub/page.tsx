'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FiArrowLeft, FiArrowRight, FiGlobe, FiLayers } from 'react-icons/fi';
import { Link, usePathname } from '@/i18n/navigation';
import { useAppLocale } from '@/lib/i18n/dictionary';
import FigmaPrototypeEmbed from './FigmaPrototypeEmbed';
import styles from './LinguaHubCaseStudy.module.scss';
import {
  BASE,
  FIGMA_LEARNER_PROTO_URL,
  FIGMA_TEACHER_PROTO_URL,
  getCaseStudy,
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
  stepLabel,
}: {
  label: string;
  title: string;
  summary: string;
  steps: FlowStep[];
  stepLabel: string;
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
            {stepLabel} {String(activeIndex + 1).padStart(2, '0')}
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
  const locale = useAppLocale();
  const pathname = usePathname();
  const otherLocale = locale === 'de' ? 'en' : 'de';
  const c = getCaseStudy(locale);
  const ui = c.ui;
  const S = c.sections;
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

    const spyTargets = c.navItems
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
  }, [c.navItems]);

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
          {c.navItems.map((item) => (
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
        <div className={styles.topNavMeta}>
          <Link
            href={pathname}
            locale={otherLocale}
            className={styles.langToggle}
            aria-label={
              locale === 'de' ? 'View in English' : 'Auf Deutsch ansehen'
            }
          >
            <FiGlobe aria-hidden="true" />
            <span>{otherLocale.toUpperCase()}</span>
          </Link>
          <span className={styles.navTag}>{ui.caseStudyTag}</span>
        </div>
      </header>

      {/* ===== INTRO ===== */}
      <section id="intro" className={styles.hero}>
        <div className={styles.heroInner}>
          <Link href="/#" className={styles.backLink}>
            <FiArrowLeft aria-hidden="true" /> {ui.backToPortfolio}
          </Link>
          <div className={styles.pillRow}>
            {ui.pills.map((pill) => (
              <span key={pill}>{pill}</span>
            ))}
          </div>
          <h1>
            Lingua<em>Hub</em>
          </h1>
          <p className={styles.heroLead}>
            {ui.heroLeadPre}
            <em>{ui.heroLeadEm}</em>
            {ui.heroLeadPost}
          </p>
          <p className={styles.heroText}>{ui.heroText}</p>
          <dl className={styles.heroFacts}>
            {c.heroFacts.map(([label, value]) => (
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
              src="course-home-v2.png"
              alt="LinguaHub learner course home screen"
              caption={
                <>
                  <b>{ui.phoneCaptions.homeTitle}</b>
                  {ui.phoneCaptions.homeText}
                </>
              }
            />

            <Phone
              src="course-overview.png"
              alt="LinguaHub course overview screen"
              caption={
                <>
                  <b>{ui.phoneCaptions.overviewTitle}</b>
                  {ui.phoneCaptions.overviewText}
                </>
              }
            />

            <Phone
              src="lesson-builder.png"
              alt="LinguaHub teacher lesson builder screen"
              caption={
                <>
                  <b>{ui.phoneCaptions.builderTitle}</b>
                  {ui.phoneCaptions.builderText}
                </>
              }
            />
          </div>
        </div>
      </section>

      <section className={styles.sectionWhite}>
        <div className={`${styles.sectionInnerTwo} ${styles.reveal}`}>
          <div>
            <span className={styles.sectionKicker}>{S.intro.kicker}</span>
            <h2>{S.intro.h2}</h2>
            <p>{S.intro.p1}</p>
            <p>{S.intro.p2}</p>
          </div>
          <aside className={styles.assumptionCard}>
            <span>{S.intro.assumptionLabel}</span>
            <strong>{S.intro.assumptionQuote}</strong>
          </aside>
        </div>
      </section>

      {/* ===== PROBLEM ===== */}
      <section id="problem" className={styles.sectionSoft}>
        <div className={`${styles.sectionInner} ${styles.reveal}`}>
          <span className={styles.sectionKicker}>{S.problem.kicker}</span>
          <h2>{S.problem.h2}</h2>
          <p className={styles.narrowText}>{S.problem.text}</p>
          <div className={styles.tagRow}>
            {S.problem.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <div className={styles.darkQuestion}>
            <span>{S.problem.questionLabel}</span>
            <strong>{S.problem.question}</strong>
          </div>
        </div>
      </section>

      {/* ===== RESEARCH ===== */}
      <section id="research" className={styles.sectionWhite}>
        <div className={`${styles.sectionInner} ${styles.reveal}`}>
          <span className={styles.sectionKicker}>{S.target.kicker}</span>
          <h2>{S.target.h2}</h2>
          <p className={styles.narrowText}>{S.target.text}</p>
          <div className={styles.targetGrid}>
            {c.targetGroups.map((group) => (
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
            <span className={styles.sectionKicker}>{S.research.kicker}</span>
            <h2>{S.research.h2}</h2>
            <p>{S.research.p1}</p>
            <p>{S.research.p2}</p>
          </div>
          <aside className={styles.methodCard}>
            <span>{S.research.methodsLabel}</span>
            <ul>
              {c.methods.map((method) => (
                <li key={method}>{method}</li>
              ))}
            </ul>
          </aside>
        </div>
        <div
          className={`${styles.userInterviewStats} ${styles.reveal}`}
          aria-label="Research sample"
        >
          {c.interviewStats.map(([number, label]) => (
            <div key={label}>
              <strong>{number}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
        <div className={`${styles.affinityBoard} ${styles.reveal}`}>
          <span>{S.research.affinityLabel}</span>
          <div>
            {c.affinityClusters.map(([title, notes]) => (
              <article key={title}>
                <h3>{title}</h3>
                {notes.map((note) => (
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
          <span className={styles.sectionKicker}>{S.insights.kicker}</span>
          <h2>{S.insights.h2}</h2>
          <div className={styles.insightList}>
            {c.insights.map((insight) => (
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
            <span>{S.insights.keyLabel}</span>
            <strong>{S.insights.keyStrong}</strong>
            <p>{S.insights.keyText}</p>
          </div>
        </div>
      </section>

      <section className={styles.sectionSoft}>
        <div className={`${styles.sectionInner} ${styles.reveal}`}>
          <span className={styles.sectionKicker}>{S.reframe.kicker}</span>
          <h2>{S.reframe.h2}</h2>
          <p className={styles.narrowText}>{S.reframe.text}</p>
          <div className={styles.reframeGrid}>
            <article>
              <span>{S.reframe.beforeLabel}</span>
              <strong>{S.reframe.before}</strong>
            </article>
            <div className={styles.arrowDot}>
              <FiArrowRight aria-hidden="true" />
            </div>
            <article className={styles.afterCard}>
              <span>{S.reframe.afterLabel}</span>
              <strong>{S.reframe.after}</strong>
            </article>
          </div>
        </div>
      </section>

      {/* ===== SOLUTION ===== */}
      <section id="solution" className={styles.sectionWhite}>
        <div className={`${styles.sectionInner} ${styles.reveal}`}>
          <span className={styles.sectionKicker}>{S.concept.kicker}</span>
          <h2>{S.concept.h2}</h2>
          <h3 className={styles.blueSubline}>{S.concept.subline}</h3>
          <p className={styles.narrowText}>{S.concept.text}</p>
          <div className={styles.valueBox}>
            <span>{S.concept.valueLabel}</span>
            <strong>{S.concept.valueStrong}</strong>
          </div>
          <div className={styles.valueGrid}>
            {c.productValues.map((value) => {
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
              <span className={styles.sectionKicker}>{S.solution.kicker}</span>
              <h2>{S.solution.h2}</h2>
              <p className={styles.narrowText}>{S.solution.text}</p>
              <div className={styles.featureList}>
                {c.solutionFeatures.map(([title, text]) => (
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
                label={S.solution.learnerProto.label}
                title={S.solution.learnerProto.title}
                description={S.solution.learnerProto.description}
                url={FIGMA_LEARNER_PROTO_URL}
              />
            </aside>
          </div>

          <div className={styles.teacherProtoRow}>
            <FigmaPrototypeEmbed
              label={S.solution.teacherProto.label}
              title={S.solution.teacherProto.title}
              description={S.solution.teacherProto.description}
              url={FIGMA_TEACHER_PROTO_URL}
            />
          </div>
        </div>
      </section>

      <section className={styles.sectionWhite}>
        <div className={`${styles.sectionInner} ${styles.reveal}`}>
          <span className={styles.sectionKicker}>{S.flow.kicker}</span>
          <h2>{S.flow.h2}</h2>
          <p className={styles.narrowText}>{S.flow.text}</p>
          <FlowExplorer
            label={S.flow.learner.label}
            title={S.flow.learner.title}
            summary={S.flow.learner.summary}
            steps={c.learnerFlow}
            stepLabel={ui.stepLabel}
          />
          <FlowExplorer
            label={S.flow.teacher.label}
            title={S.flow.teacher.title}
            summary={S.flow.teacher.summary}
            steps={c.teacherFlow}
            stepLabel={ui.stepLabel}
          />

          <div className={`${styles.published} ${styles.reveal}`}>
            <div>
              <span>{S.flow.publishedLabel}</span>
              <h3>{S.flow.publishedTitle}</h3>
              <p>{S.flow.publishedText}</p>
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
          <span className={styles.sectionKicker}>{S.roadmap.kicker}</span>
          <h2>{S.roadmap.h2}</h2>
          <p className={styles.narrowText}>{S.roadmap.text}</p>
          <div className={styles.roadLegend}>
            <span className={`${styles.roadKey} ${styles.roadKeyR1}`}>
              {S.roadmap.legendR1}
            </span>
            <span className={`${styles.roadKey} ${styles.roadKeyR2}`}>
              {S.roadmap.legendR2}
            </span>
          </div>
          <div className={styles.roadTrack}>
            {c.roadmap.map((phase) => (
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
          <span className={styles.sectionKicker}>{S.kpis.kicker}</span>
          <h2>{S.kpis.h2}</h2>
          <p className={styles.narrowText}>{S.kpis.text}</p>
          <div className={styles.kpiGrid}>
            {c.kpis.map(([goal, metric, target, deadline]) => (
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
          <span className={styles.sectionKicker}>{S.learnings.kicker}</span>
          <h2>{S.learnings.h2}</h2>
          <div className={styles.learningGrid}>
            {c.learnings.map(([number, title, text]) => (
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
          <span>{S.final.label}</span>
          <h2>{S.final.h2}</h2>
          <p>{S.final.text}</p>
          <div className={styles.finalStats}>
            {S.final.stats.map((stat, i) => (
              <div key={S.final.statLabels[i]}>
                <strong>{stat}</strong>
                <span>{S.final.statLabels[i]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
