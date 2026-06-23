import {
  FiCompass,
  FiLayers,
  FiTarget,
  FiCode,
  FiSearch,
} from 'react-icons/fi';
import type { IconType } from 'react-icons';
import type { Locale } from '@/lib/i18n/config';

export const BASE = '/case-studies/ingalaearth';

export const FIGMA_INGALA_PROTO_URL =
  'https://www.figma.com/proto/6H4oV1JZw8s4PBFpjH9JPg/Ing?node-id=1-7458&t=dVyOHyxZlBvS8opP-1';

export const LIVE_URL = 'https://ingala.earth';

type NavItem = { label: string; id: string };
type Decision = { icon: IconType; title: string; text: string };
type TechItem = { icon: IconType; title: string; text: string };

export type IngalaContent = {
  navItems: NavItem[];
  ui: {
    backToPortfolio: string;
    caseStudyTag: string;
    pills: string[];
    heroLead: string;
    heroText: string;
    liveLabel: string;
    figmaLabel: string;
  };
  heroFacts: [string, string][];
  context: { kicker: string; h2: string; p1: string; p2: string };
  problem: {
    kicker: string;
    h2: string;
    text: string;
    questionLabel: string;
    question: string;
  };
  role: {
    kicker: string;
    h2: string;
    text: string;
    ownedLabel: string;
    owned: string[];
  };
  decisions: { kicker: string; h2: string; intro: string; items: Decision[] };
  tech: { kicker: string; h2: string; items: TechItem[] };
  proto: {
    kicker: string;
    h2: string;
    label: string;
    title: string;
    description: string;
  };
  outcome: {
    label: string;
    h2: string;
    text: string;
  };
};

const en: IngalaContent = {
  navItems: [
    { label: 'Context', id: 'context' },
    { label: 'Problem', id: 'problem' },
    { label: 'Role', id: 'role' },
    { label: 'Decisions', id: 'decisions' },
    { label: 'Build', id: 'build' },
    { label: 'Prototype', id: 'prototype' },
    { label: 'Outcome', id: 'outcome' },
  ],
  ui: {
    backToPortfolio: 'Back to portfolio',
    caseStudyTag: 'Case study',
    pills: ['Design', 'Product Thinking', 'Front-end'],
    heroLead: 'Client website case study shaped with product thinking.',
    heroText:
      'I designed and built the website for Ingala Earth, a regenerative-agriculture consultancy, working with the founders on wireframes, design, and content.',
    liveLabel: 'Visit ingala.earth',
    figmaLabel: 'View Figma prototype',
  },
  heroFacts: [
    ['Role', 'Design + build, with the founders'],
    ['Stack', 'Next.js, TypeScript, SCSS Modules'],
    ['Client', 'Ingala Earth LLP \u00b7 est. 2022'],
  ],
  context: {
    kicker: 'Context',
    h2: 'A 2022 consultancy with nothing online',
    p1: 'Ingala Earth LLP are regenerative-agriculture consultants - soil regeneration and permaculture practitioners working across farms and community land in India since 2022. Real projects, real outcomes, no digital presence to show them.',
    p2: 'The brief was simple: build a website. I treated it as a product problem first - the site only works if a visitor can quickly answer \u201cis this for me, and can I trust them?\u201d',
  },
  problem: {
    kicker: 'The problem',
    h2: 'Clear to them, not to a first-time visitor',
    text: 'Land-based clients - farms, NGOs, funders - arrive with a problem, not a vocabulary. A site that opens with services assumes people already know they need help. The gap was earlier: helping a stranger recognise their own challenge before reading a services list.',
    questionLabel: 'The question the site had to answer',
    question:
      'What problem do clients have, and why should Ingala be trusted to solve it?',
  },
  role: {
    kicker: 'My role',
    h2: 'Designed and built, with the founders',
    text: 'I collaborated with the founders on wireframes, design direction, and content, then structured and built the site in Next.js. The ecological expertise and project history are theirs; the structure, UX, and front-end are mine.',
    ownedLabel: 'What I did',
    owned: [
      'Wireframes & content (with founders)',
      'UX and site structure',
      'Visual design in Figma',
      'Front-end build (Next.js)',
      'Responsive pages and reusable components',
    ],
  },
  decisions: {
    kicker: 'Key decisions',
    h2: 'Decisions, not just screens',
    intro: 'The design is visible; the reasoning is the point. A few choices:',
    items: [
      {
        icon: FiCompass,
        title: 'A clear first impression',
        text: 'The homepage opens with a direct value proposition instead of a generic welcome, so first-time visitors quickly understand the kind of work Ingala Earth does.',
      },
      {
        icon: FiTarget,
        title: 'Structured around client questions',
        text: 'The journey moves from mission and expertise into services, projects, team, and contact - matching how a potential client checks relevance and trust.',
      },
      {
        icon: FiLayers,
        title: 'Reusable content patterns',
        text: 'Services and projects use shared card and detail patterns, so new work can be added later without redesigning each page from scratch.',
      },
    ],
  },
  tech: {
    kicker: 'Build',
    h2: 'From Figma direction to a working Next.js site',
    items: [
      {
        icon: FiCode,
        title: 'Next.js front-end',
        text: 'Built the live site with Next.js, React, TypeScript, and SCSS Modules.',
      },
      {
        icon: FiLayers,
        title: 'Reusable page system',
        text: 'Structured services, projects, contact, and legal pages with shared components instead of one-off layouts.',
      },
      {
        icon: FiCompass,
        title: 'Design translated into UI',
        text: 'Turned the calm, field-based visual direction into responsive pages with consistent typography, imagery, and cards.',
      },
      {
        icon: FiSearch,
        title: 'SEO foundation',
        text: 'Corrected canonical and Open Graph metadata and added a sitemap and robots route, so the site is properly indexable and shares cleanly.',
      },
    ],
  },
  proto: {
    kicker: 'Prototype',
    h2: 'The design the site was built from',
    label: 'Figma',
    title: 'Ingala Earth - interactive prototype',
    description:
      'The Figma file the live site was built from - click through the pages.',
  },
  outcome: {
    label: 'Outcome',
    h2: 'A clearer front door for Ingala Earth',
    text: 'The website gives Ingala Earth a first digital presence that explains who they are, what problems they help solve, what services they offer, and why their project experience matters. It is a clearer client journey, ready to be validated with real visitors.',
  },
};

const de: IngalaContent = {
  navItems: [
    { label: 'Kontext', id: 'context' },
    { label: 'Problem', id: 'problem' },
    { label: 'Rolle', id: 'role' },
    { label: 'Entscheidungen', id: 'decisions' },
    { label: 'Umsetzung', id: 'build' },
    { label: 'Prototyp', id: 'prototype' },
    { label: 'Ergebnis', id: 'outcome' },
  ],
  ui: {
    backToPortfolio: 'Zur\u00fcck zum Portfolio',
    caseStudyTag: 'Case Study',
    pills: ['Design', 'Product Thinking', 'Frontend'],
    heroLead: 'Client-Website-Case-Study, gepr\u00e4gt durch Product Thinking.',
    heroText:
      'Ich habe die Website f\u00fcr Ingala Earth entworfen und gebaut, eine Beratung f\u00fcr regenerative Landwirtschaft, gemeinsam mit den Gr\u00fcnder:innen an Wireframes, Design und Content.',
    liveLabel: 'ingala.earth besuchen',
    figmaLabel: 'Figma-Prototyp ansehen',
  },
  heroFacts: [
    ['Rolle', 'Design + Build, mit den Gr\u00fcnder:innen'],
    ['Stack', 'Next.js, TypeScript, SCSS Modules'],
    ['Kunde', 'Ingala Earth LLP \u00b7 gegr. 2022'],
  ],
  context: {
    kicker: 'Kontext',
    h2: 'Eine Beratung von 2022 – ohne jede Online-Pr\u00e4senz',
    p1: 'Ingala Earth LLP sind Berater:innen f\u00fcr regenerative Landwirtschaft – Bodenregeneration und Permakultur, seit 2022 mit H\u00f6fen und Gemeinschaftsfl\u00e4chen in Indien. Echte Projekte, echte Ergebnisse, aber keine digitale Pr\u00e4senz.',
    p2: 'Das Briefing war einfach: eine Website bauen. Ich habe es zuerst als Produktproblem behandelt – die Seite gelingt nur, wenn Besucher:innen schnell beantworten k\u00f6nnen: \u201eIst das f\u00fcr mich, und kann ich ihnen vertrauen?\u201c',
  },
  problem: {
    kicker: 'Das Problem',
    h2: 'Ihnen klar, Erstbesucher:innen nicht',
    text: 'Land-basierte Kund:innen – H\u00f6fe, NGOs, F\u00f6rderer – kommen mit einem Problem, nicht mit einem Vokabular. Eine Seite, die mit Services startet, setzt voraus, dass sie schon wissen, dass sie Hilfe brauchen. Die L\u00fccke lag fr\u00fcher: Fremde ihr eigenes Problem erkennen lassen, bevor sie eine Service-Liste lesen.',
    questionLabel: 'Die Frage, die die Seite beantworten musste',
    question:
      'Welches Problem haben Kund:innen – und warum sollte man Ingala vertrauen, es zu l\u00f6sen?',
  },
  role: {
    kicker: 'Meine Rolle',
    h2: 'Entworfen und gebaut, mit den Gr\u00fcnder:innen',
    text: 'Ich habe mit den Gr\u00fcnder:innen an Wireframes, Designrichtung und Content gearbeitet, dann die Seite strukturiert und in Next.js gebaut. Die \u00f6kologische Expertise und Projekthistorie sind ihre; Struktur, UX und Frontend sind meine.',
    ownedLabel: 'Was ich gemacht habe',
    owned: [
      'Wireframes & Content (mit Gr\u00fcnder:innen)',
      'UX und Seitenstruktur',
      'Visuelles Design in Figma',
      'Frontend-Umsetzung (Next.js)',
      'Responsive Seiten und wiederverwendbare Komponenten',
    ],
  },
  decisions: {
    kicker: 'Zentrale Entscheidungen',
    h2: 'Entscheidungen, nicht nur Screens',
    intro:
      'Das Design ist sichtbar; die Begr\u00fcndung ist der Punkt. Einige Entscheidungen:',
    items: [
      {
        icon: FiCompass,
        title: 'Ein klarer erster Eindruck',
        text: 'Die Startseite beginnt mit einem direkten Wertversprechen statt mit einer allgemeinen Begr\u00fc\u00dfung, damit Erstbesucher:innen schnell verstehen, welche Art von Arbeit Ingala Earth macht.',
      },
      {
        icon: FiTarget,
        title: 'Um die Fragen der Kund:innen strukturiert',
        text: 'Die Journey f\u00fchrt von Mission und Expertise zu Services, Projekten, Team und Kontakt – passend dazu, wie potenzielle Kund:innen Relevanz und Vertrauen pr\u00fcfen.',
      },
      {
        icon: FiLayers,
        title: 'Wiederverwendbare Content-Muster',
        text: 'Services und Projekte nutzen gemeinsame Card- und Detail-Muster, damit neue Arbeit sp\u00e4ter erg\u00e4nzt werden kann, ohne jede Seite neu zu gestalten.',
      },
    ],
  },
  tech: {
    kicker: 'Umsetzung',
    h2: 'Von der Figma-Richtung zur funktionierenden Next.js-Seite',
    items: [
      {
        icon: FiCode,
        title: 'Next.js-Frontend',
        text: 'Die Live-Seite mit Next.js, React, TypeScript und SCSS Modules umgesetzt.',
      },
      {
        icon: FiLayers,
        title: 'Wiederverwendbares Seitensystem',
        text: 'Services, Projekte, Kontakt und rechtliche Seiten mit gemeinsamen Komponenten strukturiert statt als Einzelseiten.',
      },
      {
        icon: FiCompass,
        title: 'Design in UI \u00fcbersetzt',
        text: 'Die ruhige, feldbasierte visuelle Richtung in responsive Seiten mit konsistenter Typografie, Bildern und Cards \u00fcbertragen.',
      },
      {
        icon: FiSearch,
        title: 'SEO-Grundlage',
        text: 'Canonical- und Open-Graph-Metadaten korrigiert sowie Sitemap- und Robots-Route ergänzt, damit die Seite sauber indexierbar ist und gut geteilt wird.',
      },
    ],
  },
  proto: {
    kicker: 'Prototyp',
    h2: 'Das Design, aus dem die Seite gebaut wurde',
    label: 'Figma',
    title: 'Ingala Earth – interaktiver Prototyp',
    description:
      'Die Figma-Datei, aus der die Live-Seite gebaut wurde – klick dich durch die Seiten.',
  },
  outcome: {
    label: 'Ergebnis',
    h2: 'Eine klarere Eingangst\u00fcr f\u00fcr Ingala Earth',
    text: 'Die Website gibt Ingala Earth eine erste digitale Pr\u00e4senz, die erkl\u00e4rt, wer sie sind, welche Probleme sie l\u00f6sen helfen, welche Services sie anbieten und warum ihre Projekterfahrung relevant ist. Es ist eine klarere Client Journey, die mit echten Besucher:innen validiert werden kann.',
  },
};

export function getIngalaCase(locale: Locale): IngalaContent {
  return locale === 'de' ? de : en;
}
