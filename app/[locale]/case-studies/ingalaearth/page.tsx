'use client';

import { useEffect, useState } from 'react';
import { FiArrowLeft, FiArrowUpRight, FiGlobe } from 'react-icons/fi';
import { Link, usePathname } from '@/i18n/navigation';
import { useAppLocale } from '@/lib/i18n/dictionary';
import FigmaEmbed from '@/components/ui/FigmaEmbed/FigmaEmbed';
import styles from './IngalaCaseStudy.module.scss';
import { FIGMA_INGALA_PROTO_URL, LIVE_URL, getIngalaCase } from './content';

export default function IngalaCaseStudyPage() {
  const locale = useAppLocale();
  const pathname = usePathname();
  const otherLocale = locale === 'de' ? 'en' : 'de';
  const c = getIngalaCase(locale);
  const [activeId, setActiveId] = useState('context');

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
        <Link href="/#experience" className={styles.logoLink}>
          ingala<em> earth</em>
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
          <span className={styles.navTag}>{c.ui.caseStudyTag}</span>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <Link href="/" className={styles.backLink}>
            <FiArrowLeft aria-hidden="true" /> {c.ui.backToPortfolio}
          </Link>
          <div className={styles.pillRow}>
            {c.ui.pills.map((pill) => (
              <span key={pill}>{pill}</span>
            ))}
          </div>
          <h1>
            Ingala <em>Earth</em>
          </h1>
          <p className={styles.heroLead}>{c.ui.heroLead}</p>
          <p className={styles.heroText}>{c.ui.heroText}</p>

          <dl className={styles.heroFacts}>
            {c.heroFacts.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>

          <div className={styles.heroLinks}>
            <a
              href={LIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryLink}
            >
              {c.ui.liveLabel} <FiArrowUpRight aria-hidden="true" />
            </a>
            <a
              href={FIGMA_INGALA_PROTO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ghostLink}
            >
              {c.ui.figmaLabel} <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* ===== CONTEXT ===== */}
      <section id="context" className={styles.sectionWhite}>
        <div className={`${styles.sectionInner} ${styles.reveal}`}>
          <span className={styles.kicker}>{c.context.kicker}</span>
          <h2>{c.context.h2}</h2>
          <p className={styles.narrow}>{c.context.p1}</p>
          <p className={styles.narrow}>{c.context.p2}</p>
        </div>
      </section>

      {/* ===== PROBLEM ===== */}
      <section id="problem" className={styles.sectionSoft}>
        <div className={`${styles.sectionInner} ${styles.reveal}`}>
          <span className={styles.kicker}>{c.problem.kicker}</span>
          <h2>{c.problem.h2}</h2>
          <p className={styles.narrow}>{c.problem.text}</p>
          <div className={styles.darkQuestion}>
            <span>{c.problem.questionLabel}</span>
            <strong>{c.problem.question}</strong>
          </div>
        </div>
      </section>

      {/* ===== ROLE ===== */}
      <section id="role" className={styles.sectionWhite}>
        <div className={`${styles.sectionInnerTwo} ${styles.reveal}`}>
          <div>
            <span className={styles.kicker}>{c.role.kicker}</span>
            <h2>{c.role.h2}</h2>
            <p>{c.role.text}</p>
          </div>
          <aside className={styles.ownedCard}>
            <span>{c.role.ownedLabel}</span>
            <ul>
              {c.role.owned.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* ===== DECISIONS ===== */}
      <section id="decisions" className={styles.sectionSoft}>
        <div className={`${styles.sectionInner} ${styles.reveal}`}>
          <span className={styles.kicker}>{c.decisions.kicker}</span>
          <h2>{c.decisions.h2}</h2>
          <p className={styles.narrow}>{c.decisions.intro}</p>
          <div className={styles.decisionGrid}>
            {c.decisions.items.map((d) => {
              const Icon = d.icon;
              return (
                <article className={styles.decisionCard} key={d.title}>
                  <Icon aria-hidden="true" />
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== BUILD ===== */}
      <section id="build" className={styles.sectionSoft}>
        <div className={`${styles.sectionInner} ${styles.reveal}`}>
          <span className={styles.kicker}>{c.tech.kicker}</span>
          <h2>{c.tech.h2}</h2>
          <div className={styles.techGrid}>
            {c.tech.items.map((t) => {
              const Icon = t.icon;
              return (
                <article className={styles.techCard} key={t.title}>
                  <Icon aria-hidden="true" />
                  <h3>{t.title}</h3>
                  <p>{t.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== PROTOTYPE ===== */}
      <section id="prototype" className={styles.sectionWhite}>
        <div className={`${styles.sectionInner} ${styles.reveal}`}>
          <span className={styles.kicker}>{c.proto.kicker}</span>
          <h2>{c.proto.h2}</h2>
          <FigmaEmbed
            url={FIGMA_INGALA_PROTO_URL}
            label={c.proto.label}
            title={c.proto.title}
            description={c.proto.description}
          />
        </div>
      </section>

      {/* ===== OUTCOME ===== */}
      <section id="outcome" className={styles.finalBlock}>
        <div className={styles.reveal}>
          <span>{c.outcome.label}</span>
          <h2>{c.outcome.h2}</h2>
          <p>{c.outcome.text}</p>
        </div>
      </section>
    </main>
  );
}
