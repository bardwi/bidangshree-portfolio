import { useLocale } from 'next-intl';
import { defaultLocale, isLocale, type Locale } from './config';

// Shape is inferred from the English entry; German must match it.
const en = {
  nav: {
    items: [
      { label: 'About', href: '/#about' },
      { label: 'Case Study', href: '/#linguahub' },
      { label: 'Bootcamp', href: '/#bootcamp' },
      { label: 'Experience', href: '/#experience' },
      { label: 'Skills', href: '/#skills' },
    ],
    cta: "Let's talk",
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    switchTo: 'Auf Deutsch ansehen',
  },

  hero: {
    eyebrow: 'Bidangshree Brahma - Berlin',
    titlePre: 'Translating user needs into ',
    titleEm: 'effortless',
    titlePost: ' product experiences.',
    lede: 'Product Owner / Product Manager in Berlin with a frontend background and a strong focus on UX/UI. I turn insights into clear MVP scopes, prioritized backlogs, and practical prototypes teams can build.',
    ctaPrimary: 'View LinguaHub case study',
    ctaSecondary: 'Get in touch',
    featurePre: 'Featured case study:',
    featurePost: ' LinguaHub - from user research to MVP prototype.',
    factExp: 'frontend & UX delivery',
    factBootcamp: 'Bootcamp · 2026',
    factCase: 'end-to-end case study',
  },

  about: {
    eyebrow: 'About',
    titlePre: 'Product decisions shaped by UX, users, and ',
    titleAccent: 'technical feasibility.',
    p1Pre: 'I focus on the space where ',
    p1Bold: 'user experience, product value, and technical feasibility',
    p1Post:
      ' meet. For seven years, I built user-facing products as a frontend engineer. That experience shaped how I think about product: clear flows, realistic scope, accessible interfaces, and requirements teams can actually build.',
    p2: 'My product work starts with user needs: what are people trying to do, where do they get stuck, and what can we simplify? From there, I translate insights into MVP scope, prioritized backlogs, user stories, acceptance criteria, and prototypes that help teams and stakeholders make clearer decisions.',
    p3Pre:
      'I am currently completing a PM/PO training and applying the methods through ',
    p3Bold: 'LinguaHub',
    p3Post:
      ', an end-to-end EdTech case study covering user research, UX structure, MVP scoping, release planning, KPIs, and a clickable prototype.',
    pillars: [
      {
        title: 'User needs & UX discovery',
        text: 'Understanding pain points, mapping journeys, and turning user needs into focused product decisions.',
      },
      {
        title: 'MVP scoping & backlog focus',
        text: 'Prioritizing what creates user value first - then translating it into clear stories, releases, and acceptance criteria.',
      },
      {
        title: 'UX/UI prototyping & delivery',
        text: 'Creating practical prototypes, flows, and specs that help teams align before building and reduce delivery risk.',
      },
    ],
  },

  caseStudy: {
    eyebrow: 'Featured Case Study',
    title:
      'Designing a user experience from a real problem - not just a feature list.',
    tag: 'UX-focused Product Management · EdTech · MVP',
    sub: 'A central class material hub for adult German learners and teachers - designed around one UX goal: helping learners find lessons, homework, and course materials in one organized place.',
    snapshot: {
      problemLabel: 'Problem',
      problemText:
        'Class materials are scattered across chats, folders, PDFs and emails.',
      usersLabel: 'Users',
      usersText: 'Adult German learners and teachers in intensive courses.',
      roleLabel: 'Role',
      roleText:
        'UX discovery, user flows, MVP scoping, backlog, prototype and validation plan.',
      outcomeLabel: 'Outcome',
      outcomeText:
        'A two-release MVP plan with clear UX structure and a clickable prototype.',
    },
    cta: 'Read full case study',
  },

  bootcamp: {
    eyebrow: 'Professional Training · 2026',
    title: 'Product Management & Product Owner Training',
    meta: 'Digitale Leute School · Remote · Apr–Jul 2026',
    body: 'Product Management and Product Owner training focused on product discovery, UX strategy, MVP scoping, agile delivery, stakeholder communication, and product metrics. I applied these methods through LinguaHub, a UX-focused EdTech case study with research, user flows, backlog structure, release planning, KPIs, and a clickable prototype.',
    facts: [
      { number: 'Discovery', label: 'user research & problem framing' },
      { number: 'MVP', label: 'scope, backlog & release planning' },
      { number: 'Prototype', label: 'flows, validation & KPIs' },
    ],
  },

  skills: {
    eyebrow: 'Skills',
    title: 'Product work shaped by users, UX, and technical feasibility.',
    groupProduct: 'Product',
    groupEngineering: 'Engineering',
    groupTools: 'Tools',
    langsTitle: 'Languages',
    langs: [
      { name: 'English', level: 'C1 · Full professional' },
      { name: 'German', level: 'B2 · C1 course in progress' },
    ],
  },

  experience: {
    eyebrow: 'Experience',
    eduTitle: 'Education',
    additionalTitle: 'Additional training',
    projectPre: 'Frontend ',
    projectAccent: 'Project',
    projDate: 'Aug 2025 – Present',
    projName: 'Ingala Earth',
    projDesc:
      'Public-facing website for a regenerative design and permaculture consultancy.',
    projBullets: [
      'Built with Next.js, React, TypeScript and SCSS Modules',
      'Translated Figma layouts into reusable, accessible UI components',
      'Static generation and lazy-loading for performance',
      'Worked directly with the founder on content structure and brand tone',
    ],
    projLink: 'Visit ingala.earth →',
    projSideSub: 'Regeneration & Resilience',
    training: [
      { when: 'Feb–Jul 2025', what: 'BSK B2 German', where: 'GFBM Berlin' },
      {
        when: 'Apr–Jul 2026',
        what: 'C1 German course',
        where: 'die deutSCHule',
      },
      {
        when: 'Apr–Jul 2026',
        what: 'Product Management & Product Owner Training',
        where:
          'Digitale Leute School · Discovery, MVP scoping, agile delivery, stakeholder communication and product metrics',
      },
    ],
  },

  contact: {
    eyebrow: 'Contact',
    title: "Let's talk about product, UX, and meaningful digital work.",
    intro:
      'Product Owner / Product Manager in Berlin with frontend engineering and UX experience. I like working on digital products that are useful, clear, and built around real user needs.',
    firstName: 'First name',
    lastName: 'Last name',
    company: 'Company',
    subject: 'Subject',
    email: 'Email',
    message: 'Message',
    submit: 'Send message',
    mailSubjectFallback: (name: string) => `Portfolio enquiry from ${name}`,
  },

  footer: {
    rights: '© 2026 Bidangshree Brahma',
    imprint: 'Imprint',
    privacy: 'Privacy',
  },
};

type Dict = typeof en;

const de: Dict = {
  nav: {
    items: [
      { label: 'Über mich', href: '/#about' },
      { label: 'Case Study', href: '/#linguahub' },
      { label: 'Bootcamp', href: '/#bootcamp' },
      { label: 'Erfahrung', href: '/#experience' },
      { label: 'Skills', href: '/#skills' },
    ],
    cta: 'Kontakt',
    openMenu: 'Menü öffnen',
    closeMenu: 'Menü schließen',
    switchTo: 'View in English',
  },

  hero: {
    eyebrow: 'Bidangshree Brahma - Berlin',
    titlePre: 'Nutzerbedürfnisse in ',
    titleEm: 'mühelose',
    titlePost: ' Produkterlebnisse übersetzen.',
    lede: 'Product Owner / Product Manager in Berlin mit Frontend-Hintergrund und starkem Fokus auf UX/UI. Ich verwandle Erkenntnisse in klare MVP-Scopes, priorisierte Backlogs und praxisnahe Prototypen, die Teams umsetzen können.',
    ctaPrimary: 'LinguaHub Case Study ansehen',
    ctaSecondary: 'Kontakt aufnehmen',
    featurePre: 'Ausgewählte Case Study:',
    featurePost: ' LinguaHub - von der User Research zum MVP-Prototyp.',
    factExp: 'Frontend- & UX-Umsetzung',
    factBootcamp: 'Bootcamp · 2026',
    factCase: 'End-to-End Case Study',
  },

  about: {
    eyebrow: 'Über mich',
    titlePre: 'Produktentscheidungen, geprägt von UX, Nutzer:innen und ',
    titleAccent: 'technischer Machbarkeit.',
    p1Pre: 'Ich arbeite an der Schnittstelle, an der ',
    p1Bold: 'User Experience, Produktwert und technische Machbarkeit',
    p1Post:
      ' zusammenkommen. Sieben Jahre lang habe ich als Frontend-Entwicklerin nutzerorientierte Produkte gebaut. Diese Erfahrung prägt mein Produktdenken: klare Flows, realistischer Scope, barrierefreie Interfaces und Anforderungen, die Teams tatsächlich umsetzen können.',
    p2: 'Meine Produktarbeit beginnt bei den Nutzerbedürfnissen: Was wollen Menschen erreichen, wo bleiben sie hängen und was lässt sich vereinfachen? Daraus leite ich MVP-Scope, priorisierte Backlogs, User Stories, Akzeptanzkriterien und Prototypen ab, die Teams und Stakeholdern klarere Entscheidungen ermöglichen.',
    p3Pre:
      'Aktuell absolviere ich eine PM/PO-Weiterbildung und wende die Methoden in ',
    p3Bold: 'LinguaHub',
    p3Post:
      ' an, einer End-to-End-EdTech-Case-Study mit User Research, UX-Struktur, MVP-Scoping, Release-Planung, KPIs und einem klickbaren Prototyp.',
    pillars: [
      {
        title: 'Nutzerbedürfnisse & UX-Discovery',
        text: 'Pain Points verstehen, Journeys mappen und Nutzerbedürfnisse in fokussierte Produktentscheidungen übersetzen.',
      },
      {
        title: 'MVP-Scoping & Backlog-Fokus',
        text: 'Zuerst priorisieren, was Nutzerwert schafft - und es dann in klare Stories, Releases und Akzeptanzkriterien übersetzen.',
      },
      {
        title: 'UX/UI-Prototyping & Delivery',
        text: 'Praxisnahe Prototypen, Flows und Specs erstellen, die Teams vor dem Bauen ausrichten und das Delivery-Risiko senken.',
      },
    ],
  },

  caseStudy: {
    eyebrow: 'Ausgewählte Case Study',
    title:
      'Eine User Experience aus einem echten Problem gestalten - nicht aus einer Feature-Liste.',
    tag: 'UX-fokussiertes Product Management · EdTech · MVP',
    sub: 'Ein zentraler Kursmaterial-Hub für erwachsene Deutschlernende und Lehrkräfte - gestaltet um ein UX-Ziel: Lernende finden Lektionen, Hausaufgaben und Kursmaterialien an einem organisierten Ort.',
    snapshot: {
      problemLabel: 'Problem',
      problemText:
        'Kursmaterialien sind über Chats, Ordner, PDFs und E-Mails verstreut.',
      usersLabel: 'Nutzer:innen',
      usersText: 'Erwachsene Deutschlernende und Lehrkräfte in Intensivkursen.',
      roleLabel: 'Rolle',
      roleText:
        'UX-Discovery, User Flows, MVP-Scoping, Backlog, Prototyp und Validierungsplan.',
      outcomeLabel: 'Ergebnis',
      outcomeText:
        'Ein MVP-Plan über zwei Releases mit klarer UX-Struktur und klickbarem Prototyp.',
    },
    cta: 'Vollständige Case Study lesen',
  },

  bootcamp: {
    eyebrow: 'Weiterbildung · 2026',
    title: 'Product Management & Product Owner Weiterbildung',
    meta: 'Digitale Leute School · Remote · Apr–Jul 2026',
    body: 'Product-Management- und Product-Owner-Weiterbildung mit Fokus auf Product Discovery, UX-Strategie, MVP-Scoping, agile Delivery, Stakeholder-Kommunikation und Produktmetriken. Ich habe diese Methoden in LinguaHub angewandt, einer UX-fokussierten EdTech-Case-Study mit Research, User Flows, Backlog-Struktur, Release-Planung, KPIs und klickbarem Prototyp.',
    facts: [
      { number: 'Discovery', label: 'User Research & Problem Framing' },
      { number: 'MVP', label: 'Scope, Backlog & Release-Planung' },
      { number: 'Prototyp', label: 'Flows, Validierung & KPIs' },
    ],
  },

  skills: {
    eyebrow: 'Skills',
    title: 'Produktarbeit, geprägt von Nutzer:innen, UX und Machbarkeit.',
    groupProduct: 'Product',
    groupEngineering: 'Engineering',
    groupTools: 'Tools',
    langsTitle: 'Sprachen',
    langs: [
      { name: 'Englisch', level: 'C1 · Verhandlungssicher' },
      { name: 'Deutsch', level: 'B2 · C1-Kurs läuft' },
    ],
  },

  experience: {
    eyebrow: 'Erfahrung',
    eduTitle: 'Ausbildung',
    additionalTitle: 'Weitere Weiterbildung',
    projectPre: 'Frontend-',
    projectAccent: 'Projekt',
    projDate: 'Aug 2025 – heute',
    projName: 'Ingala Earth',
    projDesc:
      'Öffentliche Website für eine Beratung für regeneratives Design und Permakultur.',
    projBullets: [
      'Umgesetzt mit Next.js, React, TypeScript und SCSS Modules',
      'Figma-Layouts in wiederverwendbare, barrierefreie UI-Komponenten übersetzt',
      'Static Generation und Lazy-Loading für Performance',
      'Direkte Zusammenarbeit mit der Gründerin an Content-Struktur und Markenton',
    ],
    projLink: 'ingala.earth besuchen →',
    projSideSub: 'Regeneration & Resilienz',
    training: [
      { when: 'Feb–Jul 2025', what: 'BSK B2 Deutsch', where: 'GFBM Berlin' },
      {
        when: 'Apr–Jul 2026',
        what: 'C1-Deutschkurs',
        where: 'die deutSCHule',
      },
      {
        when: 'Apr–Jul 2026',
        what: 'Product Management & Product Owner Weiterbildung',
        where:
          'Digitale Leute School · Discovery, MVP-Scoping, agile Delivery, Stakeholder-Kommunikation und Produktmetriken',
      },
    ],
  },

  contact: {
    eyebrow: 'Kontakt',
    title: 'Sprechen wir über Produkt, UX und sinnvolle digitale Arbeit.',
    intro:
      'Product Owner / Product Manager in Berlin mit Frontend-Engineering- und UX-Erfahrung. Ich arbeite gerne an digitalen Produkten, die nützlich und klar sind und um echte Nutzerbedürfnisse herum gebaut werden.',
    firstName: 'Vorname',
    lastName: 'Nachname',
    company: 'Unternehmen',
    subject: 'Betreff',
    email: 'E-Mail',
    message: 'Nachricht',
    submit: 'Nachricht senden',
    mailSubjectFallback: (name: string) => `Portfolio-Anfrage von ${name}`,
  },

  footer: {
    rights: '© 2026 Bidangshree Brahma',
    imprint: 'Impressum',
    privacy: 'Datenschutz',
  },
};

export const dictionary: Record<Locale, Dict> = { en, de };

/** Active locale, narrowed from next-intl's string to our Locale union. */
export function useAppLocale(): Locale {
  const active = useLocale();
  return isLocale(active) ? active : defaultLocale;
}

/** Returns the full dictionary slice for the active locale. */
export function useT(): Dict {
  return dictionary[useAppLocale()];
}
