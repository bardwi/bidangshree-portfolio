import {
  FiBookOpen,
  FiCheckCircle,
  FiClipboard,
  FiEdit3,
  FiEye,
  FiFileText,
  FiFlag,
  FiHome,
  FiLink,
  FiMessageCircle,
  FiSearch,
  FiStar,
  FiTrash2,
  FiUploadCloud,
  FiUsers,
} from 'react-icons/fi';
import type { IconType } from 'react-icons';
import type { Locale } from '@/lib/i18n/config';

export const BASE = '/case-studies/linguahub';

export const FIGMA_LEARNER_PROTO_URL =
  'https://www.figma.com/proto/leJQVPK1xuo5qieCvpBKBW/LinguaHub?node-id=3-12&t=ZVXK7FFeYw0PRlSF-1';
export const FIGMA_TEACHER_PROTO_URL =
  'https://www.figma.com/proto/leJQVPK1xuo5qieCvpBKBW/LinguaHub?node-id=0-1&t=ZVXK7FFeYw0PRlSF-1';

export type FlowStep = {
  title: string;
  description: string;
  detail: string;
  icon: IconType;
};

type NavItem = { label: string; id: string };

export type CaseStudyContent = {
  navItems: NavItem[];
  ui: {
    backToPortfolio: string;
    caseStudyTag: string;
    pills: [string, string, string];
    heroLeadPre: string;
    heroLeadEm: string;
    heroLeadPost: string;
    heroText: string;
    phoneCaptions: {
      homeTitle: string;
      homeText: string;
      overviewTitle: string;
      overviewText: string;
      builderTitle: string;
      builderText: string;
    };
    stepLabel: string;
  };
  sections: {
    intro: {
      kicker: string;
      h2: string;
      p1: string;
      p2: string;
      assumptionLabel: string;
      assumptionQuote: string;
    };
    problem: {
      kicker: string;
      h2: string;
      text: string;
      tags: string[];
      questionLabel: string;
      question: string;
    };
    target: { kicker: string; h2: string; text: string };
    research: {
      kicker: string;
      h2: string;
      p1: string;
      p2: string;
      methodsLabel: string;
      affinityLabel: string;
    };
    insights: {
      kicker: string;
      h2: string;
      keyLabel: string;
      keyStrong: string;
      keyText: string;
    };
    reframe: {
      kicker: string;
      h2: string;
      text: string;
      beforeLabel: string;
      before: string;
      afterLabel: string;
      after: string;
    };
    concept: {
      kicker: string;
      h2: string;
      subline: string;
      text: string;
      valueLabel: string;
      valueStrong: string;
    };
    solution: {
      kicker: string;
      h2: string;
      text: string;
      learnerProto: { label: string; title: string; description: string };
      teacherProto: { label: string; title: string; description: string };
    };
    flow: {
      kicker: string;
      h2: string;
      text: string;
      learner: { label: string; title: string; summary: string };
      teacher: { label: string; title: string; summary: string };
      publishedLabel: string;
      publishedTitle: string;
      publishedText: string;
    };
    roadmap: {
      kicker: string;
      h2: string;
      text: string;
      legendR1: string;
      legendR2: string;
    };
    kpis: { kicker: string; h2: string; text: string };
    learnings: { kicker: string; h2: string };
    final: {
      label: string;
      h2: string;
      text: string;
      stats: [string, string, string];
      statLabels: [string, string, string];
    };
  };
  heroFacts: [string, string][];
  targetGroups: {
    number: string;
    title: string;
    text: string;
    active?: boolean;
  }[];
  methods: string[];
  affinityClusters: [string, string[]][];
  insights: { number: string; title: string; text: string; tags: string[] }[];
  productValues: { icon: IconType; title: string; text: string }[];
  solutionFeatures: [string, string][];
  learnerFlow: FlowStep[];
  teacherFlow: FlowStep[];
  roadmap: {
    month: string;
    release: 'r1' | 'r2';
    goal: string;
    ships: string;
    kr: string;
  }[];
  kpis: [string, string, string, string][];
  learnings: [string, string, string][];
  interviewStats: [string, string][];
};

const en: CaseStudyContent = {
  navItems: [
    { label: 'Intro', id: 'intro' },
    { label: 'Problem', id: 'problem' },
    { label: 'Research', id: 'research' },
    { label: 'Insights', id: 'insights' },
    { label: 'Solution', id: 'solution' },
    { label: 'MVP', id: 'mvp' },
  ],
  ui: {
    backToPortfolio: 'Back to portfolio',
    caseStudyTag: 'Case Study',
    pills: ['Product case study', 'MVP design', 'User research'],
    heroLeadPre:
      'A digital course hub that helps German learners find lessons, materials, homework and topics in one ',
    heroLeadEm: 'organized',
    heroLeadPost: ' place.',
    heroText:
      'Based on scattered PDFs, links, notes and course information, I shaped a clearly scoped MVP concept: LinguaHub gives learners orientation and teachers a simple publishing flow.',
    phoneCaptions: {
      homeTitle: 'Course home',
      homeText: " - today's lesson and material first",
      overviewTitle: 'Course overview',
      overviewText: ' - lessons, topics and progress',
      builderTitle: 'Lesson builder',
      builderText: ' - prepare, tag and save lessons',
    },
    stepLabel: 'Step',
  },
  sections: {
    intro: {
      kicker: '01 - Intro / Project',
      h2: 'Starting point',
      p1: 'I developed LinguaHub as a product management case study for German language courses. The starting point was a familiar problem in classroom learning: the content exists, but it is spread across too many channels.',
      p2: 'My goal was to turn this problem into a clear MVP: not a large learning management system, but a focused course hub that makes everyday learning and teaching easier.',
      assumptionLabel: 'Initial assumption',
      assumptionQuote:
        '"Learners do not simply need more material. They need orientation: what belongs to which lesson, which file is important and what needs to be done next?"',
    },
    problem: {
      kicker: '02 - Problem',
      h2: 'The first hypothesis',
      text: 'My first hypothesis was that the main problem in German courses is not a lack of material. The problem appears when materials, links, notes and homework are not clearly connected to lessons and topics.',
      tags: ['scattered', 'time-consuming', 'unclear', 'repeated questions'],
      questionLabel: 'Original question',
      question:
        'How might we help learners find course material quickly while allowing teachers to publish lessons without extra workload?',
    },
    target: {
      kicker: '03 - Target users',
      h2: 'Users I focused on',
      text: 'I looked at three perspectives. The MVP needs to be easy for learners, fast enough for teachers and useful for course providers who want a clearer digital learning structure.',
    },
    research: {
      kicker: '04 - Research',
      h2: 'User research & discovery',
      p1: 'I conducted user interviews with 4 German learners and 1 teacher, then combined the findings with journey mapping, story mapping and MVP prioritization exercises.',
      p2: 'The research focused on two questions: where do learners lose orientation in daily course life, and where does the publishing process become too much effort for teachers?',
      methodsLabel: 'Methods',
      affinityLabel: 'Affinity mapping - clusters from user problems',
    },
    insights: {
      kicker: '05 - Insights',
      h2: 'What the research showed',
      keyLabel: 'The key insight',
      keyStrong:
        'The real problem is not missing content. The problem starts when learners have to search for material without clear course context.',
      keyText:
        'That is why LinguaHub organizes content around lessons, topics and tasks instead of becoming a loose file storage system.',
    },
    reframe: {
      kicker: '06 - Problem reframing',
      h2: 'A sharper product focus',
      text: 'After research and exercises, the original problem felt too broad. I reframed the challenge around learner orientation and a realistic teacher workflow.',
      beforeLabel: 'Before',
      before: 'How can we organize course materials digitally?',
      afterLabel: 'After',
      after:
        'How can we help German learners find material in the right lesson and topic context, while teachers can prepare and publish content quickly?',
    },
    concept: {
      kicker: '07 - Idea / Concept',
      h2: 'LinguaHub',
      subline: 'A digital course hub for German classes.',
      text: 'LinguaHub is not a full learning management system. It is a focused course hub that brings together lessons, materials, homework, topics and course information.',
      valueLabel: 'Value proposition',
      valueStrong:
        'German learners quickly find what belongs to the current or previous lesson - and teachers publish content once instead of repeatedly sharing it through different channels.',
    },
    solution: {
      kicker: '08 - Solution / Design',
      h2: 'Product vision',
      text: 'LinguaHub connects the most important learner and teacher workflows: finding content, opening lessons, using materials, checking homework and preparing lessons. Tap through the live learner prototype to see how the experience holds together.',
      learnerProto: {
        label: 'Learner prototype',
        title: 'Explore the learner flow',
        description:
          'The learner prototype shows how adult German learners enter the course, find lessons, open material and check homework.',
      },
      teacherProto: {
        label: 'Teacher prototype',
        title: 'Explore the teacher flow',
        description:
          'The teacher prototype shows how teachers prepare lessons, add material, preview content, save drafts and publish when ready.',
      },
    },
    flow: {
      kicker: '09 - User Flow',
      h2: 'Tap through the key flows',
      text: 'The flow steps below are tappable. Each step explains the user goal, why it exists and how it supports the MVP experience.',
      learner: {
        label: 'Learner',
        title: 'Invitation → Course → Lesson → Material',
        summary:
          'Learners start from an invitation, open the course and find the right material through lessons, topics or homework.',
      },
      teacher: {
        label: 'Teacher',
        title: 'Prepare lesson → Preview → Draft or Publish',
        summary:
          'Teachers prepare lessons, add material, check the preview and decide whether to save as draft or publish.',
      },
      publishedLabel: 'Preview → publish',
      publishedTitle: 'The teacher sees exactly what the learner will see.',
      publishedText:
        "The last step before going live is the learner's own view - so the teacher publishes with confidence, and the whole class is notified the moment it ships.",
    },
    roadmap: {
      kicker: '10 - MVP roadmap',
      h2: 'A 6-month outcome roadmap',
      text: 'I sequenced the backlog into two releases across six months. Each phase has a goal and a measurable outcome - and the detail loosens toward the back, since later months are deliberately coarser.',
      legendR1: 'Release 1 · core value',
      legendR2: 'Release 2 · orientation & workflow',
    },
    kpis: {
      kicker: '11 - KPIs & validation',
      h2: 'How I would measure the MVP',
      text: 'The KPIs are directly connected to prototype tasks, so they can be checked before a large launch.',
    },
    learnings: {
      kicker: '12 - Learnings',
      h2: 'What I learned',
    },
    final: {
      label: 'Final outcome',
      h2: 'What started as a material organization idea became a focused course hub for German learners and teachers.',
      text: 'Through user interviews, story mapping, reframing and MVP prioritization, I shaped a focused product concept: learners find content faster, while teachers keep control over drafts and publication.',
      stats: ['5', '2', 'MVP'],
      statLabels: ['user interviews', 'core flows', 'clear scope'],
    },
  },
  heroFacts: [
    ['Focus', 'Product discovery · UX strategy · MVP scoping'],
    ['Project type', 'Portfolio MVP case study'],
    ['Research', '4 learner interviews · 1 teacher interview'],
    ['Methods', 'User journey · Story mapping · MoSCoW · Prototype'],
  ],
  targetGroups: [
    {
      number: '01',
      title: 'Learners',
      text: 'Adult German learners across levels (A1–C1) in online and in-person courses who need quick access to lessons, materials, homework and revision topics after class.',
    },
    {
      number: '02',
      title: 'Teachers',
      text: 'German teachers who need a simple way to prepare lessons, add material, save drafts and publish only when content is ready.',
      active: true,
    },
    {
      number: '03',
      title: 'Course providers',
      text: 'Language schools that benefit from fewer repeated questions, clearer course structure and a more consistent digital learning experience.',
    },
  ],
  methods: [
    '5 user interviews: 4 learners and 1 teacher',
    'Problem statement and hypothesis',
    'User journey mapping',
    'Story mapping for learner and teacher flows',
    'MoSCoW prioritization',
    'Release 1 / Release 2 planning',
    'Clickable prototype and KPI plan',
  ],
  affinityClusters: [
    [
      'Learners',
      [
        'Where is the material?',
        'What is the homework?',
        'Which lesson was today?',
      ],
    ],
    [
      'Teachers',
      [
        'Sending material repeatedly',
        'Preparing drafts',
        'Controlling publication',
      ],
    ],
    [
      'Course structure',
      [
        'Lesson vs. topic',
        'Calendar for orientation',
        'Chapter and module visible',
      ],
    ],
    ['MVP boundaries', ['No chat', 'No grading', 'No AI exercises']],
  ],
  insights: [
    {
      number: '01',
      title: 'The core problem is orientation in everyday course life.',
      text: 'Learners lose time when content is spread across chats, emails, PDFs and verbal explanations. They need context, not just more files.',
      tags: ['Orientation', 'Find material', 'Course context'],
    },
    {
      number: '02',
      title: 'Teacher adoption depends on workflow speed.',
      text: 'The teacher flow must be simple: prepare a lesson, add material, check the preview, save as draft or publish.',
      tags: ['Draft', 'Preview', 'Publish'],
    },
    {
      number: '03',
      title: 'The MVP should not become a full LMS.',
      text: 'Release 1 needs to prove the core value first: clear lessons, easy material access and a controlled publishing flow.',
      tags: ['MVP', 'Focus', 'Trade-off'],
    },
  ],
  productValues: [
    {
      icon: FiBookOpen,
      title: 'Lesson-based',
      text: 'Materials are connected directly to course days, chapters and topics.',
    },
    {
      icon: FiClipboard,
      title: 'Organized',
      text: 'PDFs, links, notes and homework live in one structured course space.',
    },
    {
      icon: FiCheckCircle,
      title: 'Clear',
      text: 'Learners can understand what matters now and what they should do next.',
    },
  ],
  solutionFeatures: [
    [
      'Course overview',
      'Learners see current lessons, recent materials and open homework in one place.',
    ],
    [
      'Lesson detail',
      'Each lesson bundles date, chapter, module, materials, notes and homework.',
    ],
    [
      'Topic structure',
      'Grammar, vocabulary and exam topics can be revised independently from a specific date.',
    ],
    [
      'Teacher builder',
      'Teachers create lessons step by step and keep control before publishing.',
    ],
    [
      'Draft / publish',
      'Unfinished lessons stay invisible until the teacher intentionally publishes them.',
    ],
  ],
  learnerFlow: [
    {
      title: 'Invitation',
      description:
        'The learner receives a course invitation and understands that LinguaHub is the central place for course material.',
      detail:
        'The invitation reduces confusion at the beginning: learners know where to access lessons instead of searching through messages or emails.',
      icon: FiLink,
    },
    {
      title: 'Welcome',
      description:
        'A short welcome screen explains the course hub and guides the learner into the first setup step.',
      detail:
        'The goal is not a long onboarding flow. It should quickly build trust and make the next action obvious.',
      icon: FiMessageCircle,
    },
    {
      title: 'Home',
      description:
        'The home screen shows the active course, current lesson, recent material and open homework.',
      detail:
        'This gives learners a quick answer to: What is relevant for me today?',
      icon: FiHome,
    },
    {
      title: 'Open course',
      description:
        'The learner opens the German course and sees lessons, topics and homework navigation.',
      detail:
        'The course page is the stable entry point for everything connected to that class. A calendar view for re-finding content by date is planned for Release 2 - a layer on top, not a primary navigation entry.',
      icon: FiBookOpen,
    },
    {
      title: 'Find lesson',
      description:
        'The learner finds a lesson by recency, lesson list or topic context.',
      detail:
        'This supports different mental models: some learners remember the order, others remember the topic.',
      icon: FiSearch,
    },
    {
      title: 'Open material',
      description:
        'Inside a lesson, the learner opens PDFs, links, notes or audio connected to that lesson.',
      detail:
        'Material is not shown as a random file list. It is always connected to lesson context.',
      icon: FiFileText,
    },
    {
      title: 'Check homework',
      description:
        'The learner sees homework connected to the lesson and can check what needs to be done.',
      detail:
        'The MVP does not need grading. The goal is visibility and clarity around tasks.',
      icon: FiCheckCircle,
    },
    {
      title: 'Revise topic',
      description:
        'The learner uses topics such as grammar, vocabulary or exam preparation for revision.',
      detail:
        'This helps learners find content even when they do not remember the exact course day.',
      icon: FiStar,
    },
  ],
  teacherFlow: [
    {
      title: 'Login',
      description: 'The teacher logs in and lands in their course workspace.',
      detail:
        'The teacher side should feel lightweight and practical, not like a complex admin system.',
      icon: FiUsers,
    },
    {
      title: 'Choose course',
      description:
        'The teacher selects the course they want to prepare or update.',
      detail:
        'Course selection matters when teachers handle multiple groups or levels.',
      icon: FiBookOpen,
    },
    {
      title: 'Create lesson',
      description:
        'The teacher starts a new lesson and adds title, chapter, module, tags and date.',
      detail:
        'The first steps create the context learners will later use to find the material.',
      icon: FiEdit3,
    },
    {
      title: 'Add material',
      description:
        'The teacher uploads files or adds links and notes to the lesson.',
      detail:
        'The MVP supports the most common material types instead of trying to cover every possible content format.',
      icon: FiUploadCloud,
    },
    {
      title: 'Check preview',
      description:
        'The teacher previews the lesson before learners can see it.',
      detail:
        'Preview protects quality and reduces accidental publication of unfinished content.',
      icon: FiEye,
    },
    {
      title: 'Save draft',
      description: 'The teacher saves an unfinished lesson as a draft.',
      detail:
        'Drafts allow preparation before class or between sessions without exposing unfinished work.',
      icon: FiClipboard,
    },
    {
      title: 'Publish',
      description:
        'The teacher publishes the lesson when it is ready for learners.',
      detail: 'Publishing is the main success action of the teacher workflow.',
      icon: FiFlag,
    },
    {
      title: 'Archive / delete',
      description:
        'Archive and delete actions are placed in a three-dot menu with confirmation.',
      detail:
        'This keeps destructive actions away from the main button area and avoids accidental deletion.',
      icon: FiTrash2,
    },
  ],
  roadmap: [
    {
      month: 'Month 1',
      release: 'r1',
      goal: 'Validate MVP',
      ships:
        "Test the core value end to end: learners find today's lesson, open the material, read the hint and use the live link; teachers publish a lesson.",
      kr: '4/5 testers find today\u2019s lesson and open the right material in under 60 seconds; a teacher publishes a lesson with material, hint and live link in max. 7 steps.',
    },
    {
      month: 'Month 2',
      release: 'r1',
      goal: 'Improve Release 1',
      ships:
        'Fix the problems found in user testing and make the core flow easier to understand.',
      kr: '4/5 testers correctly classify a material as lesson, course day, topic or course material.',
    },
    {
      month: 'Month 3',
      release: 'r2',
      goal: 'MVP Release 2',
      ships:
        "Learners re-find content not only via today's lesson, but also by date and learning area - calendar enters here as a re-finding layer, not a primary navigation entry.",
      kr: '4/5 learners tell whether a material belongs to one specific lesson or to the whole course.',
    },
    {
      month: 'Month 4',
      release: 'r2',
      goal: 'Release 2 & Optimize',
      ships:
        'Teachers prepare lessons faster and update published content more easily.',
      kr: 'A teacher updates a published lesson in max. 5 steps.',
    },
    {
      month: 'Months 5–6',
      release: 'r2',
      goal: 'Pilot & Scale',
      ships:
        'Run one pilot course with a small group, LinguaHub as the main tool across every session, and decide whether to develop the approach further.',
      kr: '1 pilot course with 1–2 teachers and one class; ≥ 70% of teachers still active in week 4 (satisfaction secondary).',
    },
  ],
  kpis: [
    [
      'Find material',
      'Time until learners open the correct material',
      '< 60 seconds',
      'Prototype usability test',
    ],
    [
      'Structure clarity',
      'Correct classification of lesson / course day / topic',
      '4 out of 5',
      'After each test',
    ],
    [
      'Teacher workflow',
      'Steps needed to publish one lesson',
      'max. 7 steps',
      'Prototype test',
    ],
    [
      'MVP usability',
      'Task completion rate for core tasks',
      '≥ 80%',
      'First validation round',
    ],
  ],
  learnings: [
    [
      '01',
      'A good MVP needs strong boundaries',
      'Not every useful feature belongs in the first release.',
    ],
    [
      '02',
      'Orientation is product value',
      'Users save time when information appears in the right context.',
    ],
    [
      '03',
      'Teacher adoption decides success',
      'A course product only works if teachers can maintain it quickly.',
    ],
    [
      '04',
      'Validation needs measurable tasks',
      'KPIs such as task time, task completion and clarity make feedback concrete.',
    ],
  ],
  interviewStats: [
    ['4', 'student interviews'],
    ['1', 'teacher interview'],
    ['2', 'core flows'],
    ['MVP', 'clear scope'],
  ],
};

const de: CaseStudyContent = {
  navItems: [
    { label: 'Intro', id: 'intro' },
    { label: 'Problem', id: 'problem' },
    { label: 'Research', id: 'research' },
    { label: 'Insights', id: 'insights' },
    { label: 'Lösung', id: 'solution' },
    { label: 'MVP', id: 'mvp' },
  ],
  ui: {
    backToPortfolio: 'Zurück zum Portfolio',
    caseStudyTag: 'Case Study',
    pills: ['Produkt-Case-Study', 'MVP-Design', 'User Research'],
    heroLeadPre:
      'Ein digitaler Kurs-Hub, der Deutschlernenden hilft, Lektionen, Materialien, Hausaufgaben und Themen an einem ',
    heroLeadEm: 'organisierten',
    heroLeadPost: ' Ort zu finden.',
    heroText:
      'Ausgehend von verstreuten PDFs, Links, Notizen und Kursinformationen habe ich ein klar abgegrenztes MVP-Konzept entwickelt: LinguaHub gibt Lernenden Orientierung und Lehrkräften einen einfachen Veröffentlichungs-Flow.',
    phoneCaptions: {
      homeTitle: 'Kurs-Home',
      homeText: ' - heutige Lektion und Material zuerst',
      overviewTitle: 'Kursübersicht',
      overviewText: ' - Lektionen, Themen und Fortschritt',
      builderTitle: 'Lektions-Builder',
      builderText: ' - Lektionen vorbereiten, taggen und speichern',
    },
    stepLabel: 'Schritt',
  },
  sections: {
    intro: {
      kicker: '01 - Intro / Projekt',
      h2: 'Ausgangspunkt',
      p1: 'Ich habe LinguaHub als Product-Management-Case-Study für Deutschkurse entwickelt. Ausgangspunkt war ein vertrautes Problem im Kursalltag: Die Inhalte sind da, aber sie verteilen sich auf zu viele Kanäle.',
      p2: 'Mein Ziel war es, dieses Problem in ein klares MVP zu übersetzen: kein großes Learning-Management-System, sondern ein fokussierter Kurs-Hub, der das tägliche Lernen und Unterrichten erleichtert.',
      assumptionLabel: 'Erste Annahme',
      assumptionQuote:
        '„Lernende brauchen nicht einfach mehr Material. Sie brauchen Orientierung: Was gehört zu welcher Lektion, welche Datei ist wichtig und was ist als Nächstes zu tun?“',
    },
    problem: {
      kicker: '02 - Problem',
      h2: 'Die erste Hypothese',
      text: 'Meine erste Hypothese war, dass das Hauptproblem in Deutschkursen nicht ein Mangel an Material ist. Das Problem entsteht, wenn Materialien, Links, Notizen und Hausaufgaben nicht klar mit Lektionen und Themen verbunden sind.',
      tags: ['verstreut', 'zeitaufwendig', 'unklar', 'wiederholte Fragen'],
      questionLabel: 'Ursprüngliche Frage',
      question:
        'Wie können wir Lernenden helfen, Kursmaterial schnell zu finden, während Lehrkräfte Lektionen ohne zusätzlichen Aufwand veröffentlichen können?',
    },
    target: {
      kicker: '03 - Zielgruppe',
      h2: 'Nutzer:innen, auf die ich mich fokussiert habe',
      text: 'Ich habe drei Perspektiven betrachtet. Das MVP muss für Lernende einfach, für Lehrkräfte schnell genug und für Kursanbieter nützlich sein, die eine klarere digitale Lernstruktur wollen.',
    },
    research: {
      kicker: '04 - Research',
      h2: 'User Research & Discovery',
      p1: 'Ich habe User-Interviews mit 4 Deutschlernenden und 1 Lehrkraft geführt und die Erkenntnisse anschließend mit Journey Mapping, Story Mapping und MVP-Priorisierung kombiniert.',
      p2: 'Das Research fokussierte sich auf zwei Fragen: Wo verlieren Lernende im Kursalltag die Orientierung, und wo wird der Veröffentlichungsprozess für Lehrkräfte zu aufwendig?',
      methodsLabel: 'Methoden',
      affinityLabel: 'Affinity Mapping - Cluster aus Nutzerproblemen',
    },
    insights: {
      kicker: '05 - Insights',
      h2: 'Was das Research gezeigt hat',
      keyLabel: 'Das zentrale Insight',
      keyStrong:
        'Das eigentliche Problem ist nicht fehlender Inhalt. Das Problem beginnt, wenn Lernende ohne klaren Kurskontext nach Material suchen müssen.',
      keyText:
        'Deshalb organisiert LinguaHub Inhalte rund um Lektionen, Themen und Aufgaben, statt zu einem losen Datei-Speicher zu werden.',
    },
    reframe: {
      kicker: '06 - Problem-Reframing',
      h2: 'Ein schärferer Produktfokus',
      text: 'Nach Research und Übungen wirkte das ursprüngliche Problem zu breit. Ich habe die Fragestellung rund um die Orientierung der Lernenden und einen realistischen Lehrkraft-Workflow neu gefasst.',
      beforeLabel: 'Vorher',
      before: 'Wie können wir Kursmaterialien digital organisieren?',
      afterLabel: 'Nachher',
      after:
        'Wie können wir Deutschlernenden helfen, Material im richtigen Lektions- und Themenkontext zu finden, während Lehrkräfte Inhalte schnell vorbereiten und veröffentlichen können?',
    },
    concept: {
      kicker: '07 - Idee / Konzept',
      h2: 'LinguaHub',
      subline: 'Ein digitaler Kurs-Hub für Deutschkurse.',
      text: 'LinguaHub ist kein vollständiges Learning-Management-System. Es ist ein fokussierter Kurs-Hub, der Lektionen, Materialien, Hausaufgaben, Themen und Kursinformationen zusammenbringt.',
      valueLabel: 'Value Proposition',
      valueStrong:
        'Deutschlernende finden schnell, was zur aktuellen oder vorherigen Lektion gehört - und Lehrkräfte veröffentlichen Inhalte einmal, statt sie wiederholt über verschiedene Kanäle zu teilen.',
    },
    solution: {
      kicker: '08 - Lösung / Design',
      h2: 'Produktvision',
      text: 'LinguaHub verbindet die wichtigsten Lernenden- und Lehrkraft-Workflows: Inhalte finden, Lektionen öffnen, Materialien nutzen, Hausaufgaben prüfen und Lektionen vorbereiten. Tippe dich durch den Live-Prototyp der Lernenden, um zu sehen, wie das Erlebnis zusammenhält.',
      learnerProto: {
        label: 'Lernenden-Prototyp',
        title: 'Den Lernenden-Flow erkunden',
        description:
          'Der Lernenden-Prototyp zeigt, wie erwachsene Deutschlernende in den Kurs einsteigen, Lektionen finden, Material öffnen und Hausaufgaben prüfen.',
      },
      teacherProto: {
        label: 'Lehrkraft-Prototyp',
        title: 'Den Lehrkraft-Flow erkunden',
        description:
          'Der Lehrkraft-Prototyp zeigt, wie Lehrkräfte Lektionen vorbereiten, Material hinzufügen, Inhalte in der Vorschau prüfen, Entwürfe speichern und bei Bereitschaft veröffentlichen.',
      },
    },
    flow: {
      kicker: '09 - User Flow',
      h2: 'Durch die zentralen Flows tippen',
      text: 'Die Flow-Schritte unten sind antippbar. Jeder Schritt erklärt das Nutzerziel, warum es existiert und wie es das MVP-Erlebnis unterstützt.',
      learner: {
        label: 'Lernende',
        title: 'Einladung → Kurs → Lektion → Material',
        summary:
          'Lernende starten mit einer Einladung, öffnen den Kurs und finden das richtige Material über Lektionen, Themen oder Hausaufgaben.',
      },
      teacher: {
        label: 'Lehrkraft',
        title: 'Lektion vorbereiten → Vorschau → Entwurf oder Veröffentlichen',
        summary:
          'Lehrkräfte bereiten Lektionen vor, fügen Material hinzu, prüfen die Vorschau und entscheiden, ob sie als Entwurf speichern oder veröffentlichen.',
      },
      publishedLabel: 'Vorschau → veröffentlichen',
      publishedTitle:
        'Die Lehrkraft sieht genau das, was die Lernenden sehen werden.',
      publishedText:
        'Der letzte Schritt vor dem Livegang ist die Ansicht der Lernenden - so veröffentlicht die Lehrkraft mit Sicherheit, und die ganze Klasse wird im Moment der Veröffentlichung benachrichtigt.',
    },
    roadmap: {
      kicker: '10 - MVP-Roadmap',
      h2: 'Eine 6-Monats-Outcome-Roadmap',
      text: 'Ich habe das Backlog in zwei Releases über sechs Monate sequenziert. Jede Phase hat ein Ziel und ein messbares Ergebnis - und die Detailtiefe lockert sich nach hinten, da spätere Monate bewusst gröber sind.',
      legendR1: 'Release 1 · Kernnutzen',
      legendR2: 'Release 2 · Orientierung & Workflow',
    },
    kpis: {
      kicker: '11 - KPIs & Validierung',
      h2: 'Wie ich das MVP messen würde',
      text: 'Die KPIs sind direkt mit Prototyp-Aufgaben verbunden, sodass sie vor einem großen Launch geprüft werden können.',
    },
    learnings: {
      kicker: '12 - Learnings',
      h2: 'Was ich gelernt habe',
    },
    final: {
      label: 'Endergebnis',
      h2: 'Aus einer Idee zur Materialorganisation wurde ein fokussierter Kurs-Hub für Deutschlernende und Lehrkräfte.',
      text: 'Durch User-Interviews, Story Mapping, Reframing und MVP-Priorisierung habe ich ein fokussiertes Produktkonzept geformt: Lernende finden Inhalte schneller, während Lehrkräfte die Kontrolle über Entwürfe und Veröffentlichung behalten.',
      stats: ['5', '2', 'MVP'],
      statLabels: ['User-Interviews', 'Core Flows', 'klarer Scope'],
    },
  },
  heroFacts: [
    ['Fokus', 'Product Discovery · UX-Strategie · MVP-Scoping'],
    ['Projekttyp', 'Portfolio-MVP-Case-Study'],
    ['Research', '4 Lernenden-Interviews · 1 Lehrkraft-Interview'],
    ['Methoden', 'User Journey · Story Mapping · MoSCoW · Prototyp'],
  ],
  targetGroups: [
    {
      number: '01',
      title: 'Lernende',
      text: 'Erwachsene Deutschlernende über alle Niveaus (A1–C1) in Online- und Präsenzkursen, die nach dem Unterricht schnellen Zugang zu Lektionen, Materialien, Hausaufgaben und Wiederholungsthemen brauchen.',
    },
    {
      number: '02',
      title: 'Lehrkräfte',
      text: 'Deutsch-Lehrkräfte, die eine einfache Möglichkeit brauchen, Lektionen vorzubereiten, Material hinzuzufügen, Entwürfe zu speichern und erst zu veröffentlichen, wenn der Inhalt fertig ist.',
      active: true,
    },
    {
      number: '03',
      title: 'Kursanbieter',
      text: 'Sprachschulen, die von weniger wiederholten Fragen, klarerer Kursstruktur und einem konsistenteren digitalen Lernerlebnis profitieren.',
    },
  ],
  methods: [
    '5 User-Interviews: 4 Lernende und 1 Lehrkraft',
    'Problem Statement und Hypothese',
    'User Journey Mapping',
    'Story Mapping für Lernenden- und Lehrkraft-Flows',
    'MoSCoW-Priorisierung',
    'Release-1- / Release-2-Planung',
    'Klickbarer Prototyp und KPI-Plan',
  ],
  affinityClusters: [
    [
      'Lernende',
      [
        'Wo ist das Material?',
        'Was ist die Hausaufgabe?',
        'Welche Lektion war heute?',
      ],
    ],
    [
      'Lehrkräfte',
      [
        'Material wiederholt senden',
        'Entwürfe vorbereiten',
        'Veröffentlichung steuern',
      ],
    ],
    [
      'Kursstruktur',
      [
        'Lektion vs. Thema',
        'Kalender zur Orientierung',
        'Kapitel und Modul sichtbar',
      ],
    ],
    ['MVP-Grenzen', ['Kein Chat', 'Keine Benotung', 'Keine KI-Übungen']],
  ],
  insights: [
    {
      number: '01',
      title: 'Das Kernproblem ist Orientierung im Kursalltag.',
      text: 'Lernende verlieren Zeit, wenn Inhalte über Chats, E-Mails, PDFs und mündliche Erklärungen verstreut sind. Sie brauchen Kontext, nicht nur mehr Dateien.',
      tags: ['Orientierung', 'Material finden', 'Kurskontext'],
    },
    {
      number: '02',
      title:
        'Die Akzeptanz der Lehrkräfte hängt von der Workflow-Geschwindigkeit ab.',
      text: 'Der Lehrkraft-Flow muss einfach sein: Lektion vorbereiten, Material hinzufügen, Vorschau prüfen, als Entwurf speichern oder veröffentlichen.',
      tags: ['Entwurf', 'Vorschau', 'Veröffentlichen'],
    },
    {
      number: '03',
      title: 'Das MVP sollte kein vollständiges LMS werden.',
      text: 'Release 1 muss zuerst den Kernnutzen beweisen: klare Lektionen, einfacher Materialzugang und ein kontrollierter Veröffentlichungs-Flow.',
      tags: ['MVP', 'Fokus', 'Trade-off'],
    },
  ],
  productValues: [
    {
      icon: FiBookOpen,
      title: 'Lektionsbasiert',
      text: 'Materialien sind direkt mit Kurstagen, Kapiteln und Themen verbunden.',
    },
    {
      icon: FiClipboard,
      title: 'Organisiert',
      text: 'PDFs, Links, Notizen und Hausaufgaben leben in einem strukturierten Kursraum.',
    },
    {
      icon: FiCheckCircle,
      title: 'Klar',
      text: 'Lernende verstehen, was jetzt wichtig ist und was sie als Nächstes tun sollten.',
    },
  ],
  solutionFeatures: [
    [
      'Kursübersicht',
      'Lernende sehen aktuelle Lektionen, neue Materialien und offene Hausaufgaben an einem Ort.',
    ],
    [
      'Lektionsdetail',
      'Jede Lektion bündelt Datum, Kapitel, Modul, Materialien, Notizen und Hausaufgaben.',
    ],
    [
      'Themenstruktur',
      'Grammatik-, Vokabel- und Prüfungsthemen lassen sich unabhängig von einem bestimmten Datum wiederholen.',
    ],
    [
      'Lehrkraft-Builder',
      'Lehrkräfte erstellen Lektionen Schritt für Schritt und behalten vor dem Veröffentlichen die Kontrolle.',
    ],
    [
      'Entwurf / Veröffentlichen',
      'Unfertige Lektionen bleiben unsichtbar, bis die Lehrkraft sie bewusst veröffentlicht.',
    ],
  ],
  learnerFlow: [
    {
      title: 'Einladung',
      description:
        'Die lernende Person erhält eine Kurseinladung und versteht, dass LinguaHub der zentrale Ort für Kursmaterial ist.',
      detail:
        'Die Einladung reduziert anfängliche Verwirrung: Lernende wissen, wo sie Lektionen finden, statt Nachrichten oder E-Mails zu durchsuchen.',
      icon: FiLink,
    },
    {
      title: 'Willkommen',
      description:
        'Ein kurzer Willkommens-Screen erklärt den Kurs-Hub und führt die lernende Person in den ersten Setup-Schritt.',
      detail:
        'Das Ziel ist kein langes Onboarding. Es soll schnell Vertrauen aufbauen und die nächste Aktion offensichtlich machen.',
      icon: FiMessageCircle,
    },
    {
      title: 'Home',
      description:
        'Der Home-Screen zeigt den aktiven Kurs, die aktuelle Lektion, neues Material und offene Hausaufgaben.',
      detail:
        'Das gibt Lernenden eine schnelle Antwort auf: Was ist heute für mich relevant?',
      icon: FiHome,
    },
    {
      title: 'Kurs öffnen',
      description:
        'Die lernende Person öffnet den Deutschkurs und sieht die Navigation zu Lektionen, Themen und Hausaufgaben.',
      detail:
        'Die Kursseite ist der stabile Einstiegspunkt für alles, was zu dieser Klasse gehört. Eine Kalenderansicht zum Wiederfinden von Inhalten nach Datum ist für Release 2 geplant - eine zusätzliche Ebene, kein primärer Navigationseinstieg.',
      icon: FiBookOpen,
    },
    {
      title: 'Lektion finden',
      description:
        'Die lernende Person findet eine Lektion nach Aktualität, Lektionsliste oder Themenkontext.',
      detail:
        'Das unterstützt verschiedene mentale Modelle: Manche Lernende merken sich die Reihenfolge, andere das Thema.',
      icon: FiSearch,
    },
    {
      title: 'Material öffnen',
      description:
        'Innerhalb einer Lektion öffnet die lernende Person PDFs, Links, Notizen oder Audios, die mit dieser Lektion verbunden sind.',
      detail:
        'Material wird nicht als zufällige Dateiliste gezeigt. Es ist immer mit dem Lektionskontext verbunden.',
      icon: FiFileText,
    },
    {
      title: 'Hausaufgabe prüfen',
      description:
        'Die lernende Person sieht die mit der Lektion verbundene Hausaufgabe und kann prüfen, was zu tun ist.',
      detail:
        'Das MVP braucht keine Benotung. Das Ziel ist Sichtbarkeit und Klarheit über die Aufgaben.',
      icon: FiCheckCircle,
    },
    {
      title: 'Thema wiederholen',
      description:
        'Die lernende Person nutzt Themen wie Grammatik, Vokabeln oder Prüfungsvorbereitung zum Wiederholen.',
      detail:
        'Das hilft Lernenden, Inhalte zu finden, auch wenn sie sich nicht an den genauen Kurstag erinnern.',
      icon: FiStar,
    },
  ],
  teacherFlow: [
    {
      title: 'Einloggen',
      description:
        'Die Lehrkraft loggt sich ein und landet in ihrem Kurs-Workspace.',
      detail:
        'Die Lehrkraft-Seite soll sich leichtgewichtig und praktisch anfühlen, nicht wie ein komplexes Admin-System.',
      icon: FiUsers,
    },
    {
      title: 'Kurs wählen',
      description:
        'Die Lehrkraft wählt den Kurs aus, den sie vorbereiten oder aktualisieren möchte.',
      detail:
        'Die Kursauswahl ist wichtig, wenn Lehrkräfte mehrere Gruppen oder Niveaus betreuen.',
      icon: FiBookOpen,
    },
    {
      title: 'Lektion anlegen',
      description:
        'Die Lehrkraft startet eine neue Lektion und ergänzt Titel, Kapitel, Modul, Tags und Datum.',
      detail:
        'Die ersten Schritte schaffen den Kontext, den Lernende später nutzen, um das Material zu finden.',
      icon: FiEdit3,
    },
    {
      title: 'Material hinzufügen',
      description:
        'Die Lehrkraft lädt Dateien hoch oder fügt der Lektion Links und Notizen hinzu.',
      detail:
        'Das MVP unterstützt die gängigsten Materialtypen, statt jedes mögliche Format abzudecken.',
      icon: FiUploadCloud,
    },
    {
      title: 'Vorschau prüfen',
      description:
        'Die Lehrkraft sieht die Lektion in der Vorschau, bevor Lernende sie sehen können.',
      detail:
        'Die Vorschau schützt die Qualität und reduziert die versehentliche Veröffentlichung unfertiger Inhalte.',
      icon: FiEye,
    },
    {
      title: 'Entwurf speichern',
      description:
        'Die Lehrkraft speichert eine unfertige Lektion als Entwurf.',
      detail:
        'Entwürfe ermöglichen die Vorbereitung vor dem Unterricht oder zwischen den Sitzungen, ohne Unfertiges zu zeigen.',
      icon: FiClipboard,
    },
    {
      title: 'Veröffentlichen',
      description:
        'Die Lehrkraft veröffentlicht die Lektion, wenn sie für Lernende bereit ist.',
      detail:
        'Das Veröffentlichen ist die zentrale Erfolgsaktion des Lehrkraft-Workflows.',
      icon: FiFlag,
    },
    {
      title: 'Archivieren / löschen',
      description:
        'Archivieren und Löschen liegen in einem Drei-Punkte-Menü mit Bestätigung.',
      detail:
        'Das hält destruktive Aktionen vom Hauptbereich der Buttons fern und vermeidet versehentliches Löschen.',
      icon: FiTrash2,
    },
  ],
  roadmap: [
    {
      month: 'Monat 1',
      release: 'r1',
      goal: 'Validate MVP',
      ships:
        'Kernnutzen testen: heutige Lektion finden, Material öffnen, Hinweis lesen, Live-Link nutzen und Lektion veröffentlichen.',
      kr: '4/5 Testpersonen finden die heutige Lektion und öffnen das passende Material in unter 60 Sekunden. Eine Lehrkraft kann eine Lektion mit Material, Hinweis und Live-Link in maximal 7 Schritten veröffentlichen.',
    },
    {
      month: 'Monat 2',
      release: 'r1',
      goal: 'Improve Release 1',
      ships:
        'Probleme aus dem Nutzertest verbessern und den Core Flow verständlicher machen.',
      kr: '4/5 Testpersonen ordnen ein Material korrekt zu: Lektion, Kurstag, Thema oder Kursmaterial.',
    },
    {
      month: 'Monat 3',
      release: 'r2',
      goal: 'MVP Release 2',
      ships:
        'Lernende finden Inhalte nicht nur über die heutige Lektion, sondern auch nach Datum und Lernbereich wieder - der Kalender kommt hier als Wiederfinde-Ebene hinzu, nicht als primärer Navigationseinstieg.',
      kr: '4/5 Lernende erkennen, ob ein Material zu einer bestimmten Lektion oder zum gesamten Kurs gehört.',
    },
    {
      month: 'Monat 4',
      release: 'r2',
      goal: 'Release 2 & Optimieren',
      ships:
        'Lehrkräfte bereiten Lektionen schneller vor und aktualisieren veröffentlichte Inhalte einfacher.',
      kr: 'Eine Lehrkraft aktualisiert eine veröffentlichte Lektion in maximal 5 Schritten.',
    },
    {
      month: 'Monate 5–6',
      release: 'r2',
      goal: 'Pilot & Skalierung',
      ships:
        'Einen Pilotkurs mit einer kleinen Gruppe durchführen, mit LinguaHub als Haupt-Tool in jeder Sitzung, und entscheiden, ob der Ansatz weiterentwickelt wird.',
      kr: '1 Pilotkurs mit 1–2 Lehrkräften und einer Klasse; ≥ 70% der Lehrkräfte in Woche 4 noch aktiv (Zufriedenheit sekundär).',
    },
  ],
  kpis: [
    [
      'Material finden',
      'Zeit, bis Lernende das richtige Material öffnen',
      '< 60 Sekunden',
      'Prototyp-Usability-Test',
    ],
    [
      'Strukturklarheit',
      'Korrekte Zuordnung von Lektion / Kurstag / Thema',
      '4 von 5',
      'Nach jedem Test',
    ],
    [
      'Lehrkraft-Workflow',
      'Schritte zum Veröffentlichen einer Lektion',
      'max. 7 Schritte',
      'Prototyp-Test',
    ],
    [
      'MVP-Usability',
      'Task-Completion-Rate für Kernaufgaben',
      '≥ 80%',
      'Erste Validierungsrunde',
    ],
  ],
  learnings: [
    [
      '01',
      'Ein gutes MVP braucht klare Grenzen',
      'Nicht jedes nützliche Feature gehört in das erste Release.',
    ],
    [
      '02',
      'Orientierung ist Produktwert',
      'Nutzer:innen sparen Zeit, wenn Informationen im richtigen Kontext erscheinen.',
    ],
    [
      '03',
      'Die Akzeptanz der Lehrkräfte entscheidet über den Erfolg',
      'Ein Kursprodukt funktioniert nur, wenn Lehrkräfte es schnell pflegen können.',
    ],
    [
      '04',
      'Validierung braucht messbare Aufgaben',
      'KPIs wie Task-Zeit, Task-Completion und Klarheit machen Feedback konkret.',
    ],
  ],
  interviewStats: [
    ['4', 'Lernenden-Interviews'],
    ['1', 'Lehrkraft-Interview'],
    ['2', 'Core Flows'],
    ['MVP', 'klarer Scope'],
  ],
};

export function getCaseStudy(locale: Locale): CaseStudyContent {
  return locale === 'de' ? de : en;
}
