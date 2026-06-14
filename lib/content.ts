export type Experience = {
  loc: string;
  date: string;
  company: string;
  tag?: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    loc: 'Berlin, Germany',
    date: 'Jan 2023 – Dec 2024',
    company: 'TIME for Kids',
    tag: 'Frontend Software Developer',
    bullets: [
      'Combined frontend development with product ownership tasks for internal education-sector applications.',
      'Translated stakeholder needs into user stories, priorities, and clear development requirements.',
      'Built React/TypeScript features, reusable components, responsive layouts, and REST API integrations.',
      'Collaborated with product, design, backend, and QA teams to improve workflows, usability, and release quality.',
      'Contributed to sprint planning, backlog refinement, documentation, testing, and cross-browser validation.',
    ],
  },
  {
    loc: 'Bangalore, India',
    date: 'Aug 2021 – May 2022',
    company: 'Capgemini',
    tag: 'Associate Consultant',
    bullets: [
      'Implemented React UI modules for a clinical trial management system, translating business and regulatory requirements into usable interfaces.',
    ],
  },
  {
    loc: 'Bangalore, India',
    date: 'Aug 2019 – Jul 2021',
    company: 'KayaDev AI',
    tag: 'Associate Developer',
    bullets: [
      'Developed React/TypeScript applications with Redux, REST APIs, analytics features, and mobile UI flows.',
    ],
  },
  {
    loc: 'Earlier roles',
    date: '2016 – 2019',
    company: 'UI / Web Development',
    tag: 'Selected foundation',
    bullets: [
      'Built dashboards, WordPress/WooCommerce websites, CMS features, and client-facing web interfaces across product and agency environments.',
    ],
  },
];

export type Module = { num: string; title: string; topics: string[] };
export const modules: Module[] = [
  {
    num: 'Module 1',
    title: 'Strategy, Discovery & Vision',
    topics: [
      'Product Vision & Strategy',
      'User Centricity',
      'User Research & Interviews',
      'Problem–Solution Fit',
      'Business Modeling & PMF',
      'Lean Product',
      'OKRs',
    ],
  },
  {
    num: 'Module 2',
    title: 'Product & UX Design',
    topics: [
      'UX/UI Design',
      'Information Architecture',
      'Wireframes',
      'AI-driven Prototyping',
      'User Tests & Experiments',
    ],
  },
  {
    num: 'Module 3',
    title: 'Delivery & Stakeholder Management',
    topics: [
      'Agile & Scrum',
      'Backlog & User Stories',
      'Sprint Rituals',
      'Roadmapping & Forecasting',
      'Workflows & Releases',
    ],
  },
  {
    num: 'Module 4',
    title: 'Analytics, Testing & Monitoring',
    topics: [
      'Product & Web Analytics',
      'KPIs & Tracking',
      'Software Testing',
      'Bug Reporting',
      'GA4 & Looker Studio',
    ],
  },
];

export const skills = {
  product: [
    'Product Discovery',
    'User Research',
    'UX Strategy',
    'Information Architecture',
    'Story Mapping',
    'Backlog & MoSCoW',
    'User Stories',
    'Acceptance Criteria',
    'User Flows',
    'UX/UI Prototyping',
    'Roadmapping',
    'Stakeholder Mgmt',
    'Agile / Scrum',
    'OKRs',
  ],
  engineering: [
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'HTML',
    'SCSS',
    'Tailwind',
    'REST APIs',
    'Git',
  ],
  tools: [
    'Figma',
    'Adobe XD',
    'Jira',
    'Confluence',
    'Miro',
    'Notion',
    'Lucidchart',
  ],
};

export type Education = { deg: string; school: string; yr: string };
export const education: Education[] = [
  {
    deg: "Master's · Computer Engineering",
    school: 'Indian Institute of Technology (ISM), Dhanbad',
    yr: '2014 – 2016',
  },
  {
    deg: "Bachelor's · Computer Science",
    school: 'Manipal Institute of Technology, Manipal',
    yr: '2010 – 2013',
  },
];
