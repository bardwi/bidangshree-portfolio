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

export const BASE = '/case-studies/linguahub';

export const FIGMA_LEARNER_PROTO_URL =
  'https://www.figma.com/proto/Or3r609zzWdJTJEGzJVOiV/PraxisProjektBrahma?node-id=8-75&t=D7UhH3gwMo9Ql4Ao-1';
export const FIGMA_TEACHER_PROTO_URL =
  'https://www.figma.com/proto/Or3r609zzWdJTJEGzJVOiV/PraxisProjektBrahma?node-id=66-7953&t=D7UhH3gwMo9Ql4Ao-1';

export const navItems = [
  { label: 'Intro', id: 'intro' },
  { label: 'Problem', id: 'problem' },
  { label: 'Research', id: 'research' },
  { label: 'Insights', id: 'insights' },
  { label: 'Solution', id: 'solution' },
  { label: 'MVP', id: 'mvp' },
];

export const heroFacts = [
  ['Focus', 'Product discovery · UX strategy · MVP scoping'],
  ['Project type', 'Portfolio MVP case study'],
  ['Research', '4 learner interviews · 1 teacher interview'],
  ['Methods', 'User journey · Story mapping · MoSCoW · Prototype'],
];

export const targetGroups = [
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
];

export const methods = [
  '5 user interviews: 4 learners and 1 teacher',
  'Problem statement and hypothesis',
  'User journey mapping',
  'Story mapping for learner and teacher flows',
  'MoSCoW prioritization',
  'Release 1 / Release 2 planning',
  'Clickable prototype and KPI plan',
];

export const affinityClusters = [
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
];

export const insights = [
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
];

export const productValues = [
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
];

export const solutionFeatures = [
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
];

export const learnerFlow = [
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
      'The learner opens the German course and sees lessons, topics, calendar and homework navigation.',
    detail:
      'The course page becomes the stable entry point for everything connected to that class.',
    icon: FiBookOpen,
  },
  {
    title: 'Find lesson',
    description:
      'The learner finds a lesson by date, lesson list or topic context.',
    detail:
      'This supports different mental models: some learners remember the date, others remember the topic.',
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
];

export const teacherFlow = [
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
    description: 'The teacher previews the lesson before learners can see it.',
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
];

export const roadmap = [
  {
    month: 'Month 1',
    release: 'r1',
    goal: 'Validate MVP',
    ships:
      'Test the core value end to end: learners find today’s lesson, open the material, read the hint and use the live link; teachers publish a lesson.',
    kr: '4/5 testers find today’s lesson and open the right material in under 60 seconds; a teacher publishes a lesson with material, hint and live link in max. 7 steps.',
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
      'Learners re-find content not only via today’s lesson, but also by date and learning area - calendar enters here as a re-finding layer.',
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
];

export const kpis = [
  [
    'Find material',
    'Time until learners open the correct material',
    '< 60 seconds',
    'Prototype usability test',
  ],
  [
    'Structure clarity',
    'Rating for lesson / topic / homework structure',
    '≥ 4 out of 5',
    'After each test',
  ],
  [
    'Teacher workflow',
    'Steps needed to publish one lesson',
    'max. 5–7 steps',
    'Prototype test',
  ],
  [
    'MVP usability',
    'Task completion rate for core tasks',
    '≥ 80%',
    'First validation round',
  ],
];

export const learnings = [
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
];

export type FlowStep = (typeof learnerFlow)[number];
export const interviewStats = [
  ['4', 'student interviews'],
  ['1', 'teacher interview'],
  ['2', 'core flows'],
  ['1', 'focused MVP'],
] as const;
