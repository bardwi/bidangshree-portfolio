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

export const skills = {
  product: [
    'Product Discovery',
    'User Research',
    'UX Strategy',
    'Information Architecture',
    'Requirements Engineering',
    'Backlog & MoSCoW',
    'User Stories & Story Mapping',
    'Acceptance Criteria',
    'User Flows',
    'UX/UI Prototyping',
    'Roadmapping',
    'Stakeholder Management',
    'Scrum & Agile',
    'Usability Testing',
    'Wireframing & Flows',
    'OKRs, KPIs & Metrics',
  ],
  engineering: [
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'HTML',
    'Vite',
    'SCSS',
    'Tailwind',
    'REST APIs',
    'Git',
    'npm',
    'CI/CD',
    'Jest & React Testing Library',
    'BrowserStack / Cross-browser Testing',
    'Design Systems',
  ],
  tools: [
    'Figma & Prototyping',
    'Adobe XD',
    'Adobe CC (PS/ID/AI)',
    'Jira & Miro',
    'No-code & LLMs',
    'Confluence',
    'Notion',
    'Lucidchart',
    'Analytics Tools',
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
