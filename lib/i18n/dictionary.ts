import { useLocale } from 'next-intl';
import { defaultLocale, isLocale, type Locale } from './config';

// Shape is inferred from the English entry; German must match it.
const en = {
  nav: {
    items: [
      { label: 'About', href: '/#about' },
      { label: 'Case Study', href: '/#linguahub' },
      { label: 'Professional Training', href: '/#bootcamp' },
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
    titleEm: 'buildable ',
    titlePost: 'products.',
    lede: 'Product Owner / Product Manager in Berlin with a frontend background and a strong focus on UX/UI. I care about turning user research and unclear requirements into clear product decisions - and shaping ideas that are easy for users to understand and realistic for teams to build.',
    ctaPrimary: 'View LinguaHub case study',
    ctaSecondary: 'Get in touch',
    featurePre: 'Featured case study:',
    featurePost: ' LinguaHub - from user research to MVP prototype.',
    factExp: 'frontend & UX delivery',
    factBootcamp: 'Professional training · 2026',
    factCase: 'end-to-end case study',
  },

  about: {
    eyebrow: 'About',
    titlePre: 'Product decisions shaped by UX, users, and ',
    titleAccent: 'technical feasibility.',
    p1Pre: 'I work at the intersection of ',
    p1Bold: 'user experience, product value, and technical feasibility',
    p1Post:
      '. Through seven years of frontend development, I learned to look beyond the interface and focus on the decisions behind it: what do people really need, what is clear, and what can realistically be built by the team?',
    p2: 'I like listening closely, asking questions, and bringing structure to unclear requirements. From there, I translate insights into MVP scope, prioritized backlogs, user stories, acceptance criteria, and prototypes that help teams and stakeholders make better decisions.',
    p3Pre:
      'I am currently completing a PM/PO professional training program and applying the methods through ',
    p3Bold: 'LinguaHub',
    p3Post:
      ', an end-to-end case study with user research, UX structure, MVP scoping, and a clickable prototype.',
    pillars: [
      {
        title: 'User needs & UX discovery',
        text: 'Understanding pain points, mapping journeys, and turning user needs into clear product decisions.',
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
    title: 'Designing an MVP around real learner and teacher needs.',
    tag: 'UX-focused Product Management · MVP',
    sub: 'A central class material hub for adult German learners and teachers - designed around one UX goal: helping learners find lessons, homework, and course materials in one organized place.',
    snapshot: {
      problemLabel: 'Problem',
      problemText:
        'Class materials are scattered across chats, folders, PDFs and emails.',
      usersLabel: 'Users',
      usersText: 'Adult German learners and teachers in intensive courses.',
      roleLabel: 'Role',
      roleText:
        'User research, UX discovery, user flows, MVP scoping, backlog, prototype and validation plan.',
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
    body: 'Product Management and Product Owner training focused on product discovery, UX strategy, MVP scoping, agile delivery, stakeholder communication, and product metrics. I applied these methods through LinguaHub, a UX-focused case study with research, user flows, backlog structure, release planning, KPIs, and a clickable prototype.',
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
      {
        name: 'German',
        level: 'C1 course in progress · professional working proficiency',
      },
    ],
  },

  experience: {
    eyebrow: 'Experience',
    eduTitle: 'Education',
    additionalTitle: 'Additional training',
    projectPre: 'Design + Build ',
    projectAccent: 'Project',
    projDate: 'Aug 2025 – Present',
    projName: 'Ingala Earth',
    projDesc:
      'Designed and built the website for a regenerative-agriculture consultancy, working with the founders in Figma and Next.js.',
    projBullets: [
      'Collaborated with the founders on wireframes, design, and content',
      'Structured the site around the questions a prospect asks',
      'Designed and built reusable sections for services and projects',
      'Fixed SEO/metadata defects (canonical, Open Graph, sitemap)',
    ],
    projLink: 'Visit ingala.earth →',
    projFigma: 'View Figma prototype →',
    projCase: 'Read the case study →',
    projSideSub: 'Regeneration & Resilience',
    training: [
      {
        when: 'Apr–Jul 2026',
        what: 'Product Management & Product Owner Training',
        where:
          'Digitale Leute School, Cologne · Remote\nDiscovery · MVP scoping · Agile delivery · Stakeholder communication · Product metrics',
      },
      { when: 'Feb–Jul 2025', what: 'BSK B2 German', where: 'GFBM, Berlin' },
      {
        when: 'Apr–Jul 2026',
        what: 'C1 German course',
        where: 'die deutSCHule, Berlin',
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
    sending: 'Sending…',
    success:
      "Thank you - your message has been sent. I'll get back to you soon.",
    error: 'Something went wrong. Please try again, or email me directly.',
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
      { label: 'Weiterbildung', href: '/#bootcamp' },
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
    titlePre: 'Ich übersetze Nutzerbedürfnisse in ',
    titleEm: 'umsetzbare ',
    titlePost: 'Produkte.',
    lede: 'Product Owner / Product Manager in Berlin mit Frontend-Hintergrund und starkem Fokus auf UX/UI. Mir ist wichtig, Research-Erkenntnisse und unklare Anforderungen in klare Produktentscheidungen zu übersetzen - damit Ideen für Nutzer:innen verständlich und für Teams realistisch umsetzbar bleiben.',
    ctaPrimary: 'LinguaHub Case Study ansehen',
    ctaSecondary: 'Kontakt aufnehmen',
    featurePre: 'Ausgewählte Case Study:',
    featurePost: ' LinguaHub - von der User Research zum MVP-Prototyp.',
    factExp: 'Frontend- & UX-Umsetzung',
    factBootcamp: 'Weiterbildung · 2026',
    factCase: 'End-to-End Case Study',
  },

  about: {
    eyebrow: 'Über mich',
    titlePre: 'Produktentscheidungen mit Blick auf UX, Nutzer:innen und ',
    titleAccent: 'technischer Machbarkeit.',
    p1Pre: 'Ich arbeite an der Schnittstelle von ',
    p1Bold: 'User Experience, Produktwert und technischer Machbarkeit',
    p1Post:
      '. Durch sieben Jahre Frontend-Entwicklung habe ich gelernt, Produkte nicht nur aus der Oberfläche zu denken, sondern aus den Entscheidungen dahinter: Was brauchen Menschen wirklich, was ist verständlich und was lässt sich im Team realistisch umsetzen?',
    p2: 'Ich höre genau hin, frage nach und bringe Ordnung in unklare Anforderungen. Daraus entstehen MVP-Scopes, priorisierte Backlogs, User Stories, Akzeptanzkriterien und Prototypen, die Teams und Stakeholdern bessere Entscheidungen ermöglichen.',
    p3Pre:
      'Aktuell absolviere ich eine PM/PO-Weiterbildung und wende die Methoden in ',
    p3Bold: 'LinguaHub',
    p3Post:
      ' an, einer End-to-End-Case-Study mit User Research, UX-Struktur, MVP-Scoping und einem klickbaren Prototyp.',
    pillars: [
      {
        title: 'Nutzerbedürfnisse & UX-Discovery',
        text: 'Pain Points verstehen, Journeys mappen und Nutzerbedürfnisse in klare Produktentscheidungen übersetzen.',
      },
      {
        title: 'MVP-Scoping & Backlog-Fokus',
        text: 'Priorisieren, was echten Nutzerwert schafft - und daraus klare Stories, Releases und Akzeptanzkriterien ableiten.',
      },
      {
        title: 'UX/UI-Prototyping & Delivery',
        text: 'Praxisnahe Prototypen, Flows und Specs erstellen, damit Teams vor dem Bauen ein gemeinsames Verständnis haben und Delivery-Risiken sinken.',
      },
    ],
  },

  caseStudy: {
    eyebrow: 'Ausgewählte Case Study',
    title: 'Ein MVP auf Basis echter Bedürfnisse von Lernenden und Lehrkräften.',
    tag: 'UX-fokussiertes Product Management · MVP',
    sub: 'Ein zentraler Kursmaterial-Hub für erwachsene Deutschlernende und Lehrkräfte - entwickelt mit einem klaren UX-Ziel: Lernende finden Lektionen, Hausaufgaben und Kursmaterialien an einem organisierten Ort.',
    snapshot: {
      problemLabel: 'Problem',
      problemText:
        'Kursmaterialien sind über Chats, Ordner, PDFs und E-Mails verstreut.',
      usersLabel: 'Nutzer:innen',
      usersText: 'Erwachsene Deutschlernende und Lehrkräfte in Intensivkursen.',
      roleLabel: 'Rolle',
      roleText:
        'User Research, UX-Discovery, User Flows, MVP-Scoping, Backlog, Prototyp und Validierungsplan.',
      outcomeLabel: 'Ergebnis',
      outcomeText:
        'Ein MVP-Plan für zwei Releases mit klarer UX-Struktur und klickbarem Prototyp.',
    },
    cta: 'Vollständige Case Study lesen',
  },

  bootcamp: {
    eyebrow: 'Weiterbildung · 2026',
    title: 'Product Management & Product Owner Weiterbildung',
    meta: 'Digitale Leute School · Remote · Apr–Jul 2026',
    body: 'Product-Management- und Product-Owner-Weiterbildung mit Fokus auf Product Discovery, UX-Strategie, MVP-Scoping, agile Delivery, Stakeholder-Kommunikation und Produktmetriken. Ich habe diese Methoden in LinguaHub angewandt, einer UX-fokussierten Case Study mit Research, User Flows, Backlog-Struktur, Release-Planung, KPIs und klickbarem Prototyp.',
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
      { name: 'Deutsch', level: 'C1-Kurs läuft · Berufliche Sprachkompetenz' },
    ],
  },

  experience: {
    eyebrow: 'Erfahrung',
    eduTitle: 'Ausbildung',
    additionalTitle: 'Weitere Weiterbildung',
    projectPre: 'Design + Build ',
    projectAccent: 'Projekt',
    projDate: 'Aug 2025 – heute',
    projName: 'Ingala Earth',
    projDesc:
      'Website für eine Beratung für regenerative Landwirtschaft entworfen und gebaut – mit den Gründer:innen in Figma und Next.js.',
    projBullets: [
      'Mit den Gründer:innen an Wireframes, Design und Content gearbeitet',
      'Die Seite um die Fragen potenzieller Kund:innen herum strukturiert',
      'Wiederverwendbare Bereiche für Services und Projekte entworfen und gebaut',
      'SEO-/Metadaten-Fehler behoben (Canonical, Open Graph, Sitemap)',
    ],
    projLink: 'ingala.earth besuchen →',
    projFigma: 'Figma-Prototyp ansehen →',
    projCase: 'Case Study lesen →',
    projSideSub: 'Regeneration & Resilienz',
    training: [
      {
        when: 'Apr–Jul 2026',
        what: 'Product Management & Product Owner Weiterbildung',
        where:
          'Digitale Leute School, Köln · Remote\nDiscovery · MVP-Scoping · Agile Delivery · Stakeholder-Kommunikation · Produktmetriken',
      },
      { when: 'Feb–Jul 2025', what: 'BSK B2 Deutsch', where: 'GFBM, Berlin' },
      {
        when: 'Apr–Jul 2026',
        what: 'C1-Deutschkurs',
        where: 'die deutSCHule, Berlin',
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
    sending: 'Wird gesendet…',
    success: 'Danke - deine Nachricht wurde gesendet. Ich melde mich bald.',
    error:
      'Etwas ist schiefgelaufen. Bitte versuche es erneut oder schreib mir direkt.',
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
