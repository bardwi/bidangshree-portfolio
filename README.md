# Bidangshree Brahma Portfolio

A bilingual product portfolio for Bidangshree Brahma, a Berlin-based Product Owner / Product Manager with a frontend engineering background and a strong focus on UX, MVP scoping, and practical product delivery.

The site presents professional experience, product skills, training, contact options, and an in-depth LinguaHub case study that documents the full path from user research to a focused MVP prototype.

Live site: www.bbrahma.de⁠￼

## What This Portfolio Shows

- Product thinking shaped by user needs, UX structure, and technical feasibility
- A bilingual experience in German and English
- A featured EdTech case study: LinguaHub
- Research, story mapping, MVP prioritization, release planning, KPIs, and prototype flows
- Frontend craft through responsive UI, SCSS modules, accessible page structure, and localized metadata
- Practical legal and trust details including imprint, privacy page, and cookie consent

## Tech Stack

- Next.js 16 with the App Router
- React 19
- TypeScript
- SCSS Modules
- next-intl for localization
- react-icons for interface icons
- vanilla-cookieconsent for cookie preferences
- Vercel Analytics
- Vitest and Testing Library for tests
- ESLint for code quality

## Key Features

### Bilingual Routing

The site supports German and English using `next-intl`.

- German is the default locale and is served at `/`
- English is served at `/en`
- Locale-aware navigation, metadata, sitemap, and robots configuration are included

### Portfolio Sections

The homepage is built from focused, reusable sections:

- Hero
- About
- Featured case study
- Product Management / Product Owner training
- Experience
- Skills
- Contact

### LinguaHub Case Study

LinguaHub is a UX-focused product management case study for adult German learners and teachers. The case study explores a real course problem: learning materials are often spread across chats, PDFs, links, folders, and emails.

The case study includes:

- Initial hypothesis and problem framing
- User research with learners and a teacher
- Affinity mapping and key insights
- Problem reframing
- Product concept and value proposition
- Learner and teacher flows
- Clickable Figma prototype embeds
- MVP roadmap across two releases
- KPI and validation plan
- Reflections and learnings

### Privacy And Compliance

The project includes localized legal pages and consent controls:

- Imprint
- Privacy policy
- Cookie consent banner
- Cookie settings button

## Project Structure

```text
app/
  [locale]/
    case-studies/linguahub/   # Full LinguaHub case study route
    datenschutz/              # Privacy page
    imprint/                  # Imprint page
    layout.tsx                # Locale layout and metadata
    page.tsx                  # Homepage sections
components/
  layout/                     # Header and footer
  sections/                   # Homepage sections
  ui/                         # Shared icons
  BackToTop/
  CookieConsentBanner/
  CookieSettingsButton/
i18n/                         # next-intl routing and request config
lib/
  content.ts                  # Experience, education, and skills content
  i18n/                       # Localized dictionary and locale config
public/
  case-studies/linguahub/     # Case study images
```

## Getting Started

Prerequisites:

- Node.js `^20.19.0` or `>=22.12.0`
- npm

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Useful routes:

- German homepage: [http://localhost:3000](http://localhost:3000)
- English homepage: [http://localhost:3000/en](http://localhost:3000/en)
- German LinguaHub case study: [http://localhost:3000/case-studies/linguahub](http://localhost:3000/case-studies/linguahub)
- English LinguaHub case study: [http://localhost:3000/en/case-studies/linguahub](http://localhost:3000/en/case-studies/linguahub)

Production routes:

- German homepage: https://www.bbrahma.de
- English homepage: https://www.bbrahma.de/en
- German LinguaHub case study: https://www.bbrahma.de/case-studies/linguahub
- English LinguaHub case study: https://www.bbrahma.de/en/case-studies/linguahub

## Available Scripts

```bash
npm run dev        # Start the local development server
npm run build      # Create a production build
npm run start      # Start the production server
npm run lint       # Run ESLint
npm run lint:fix   # Run ESLint and apply safe fixes
npm run test       # Run Vitest
npm run test:watch # Run Vitest in watch mode
```

## Content Notes

Most portfolio copy lives in structured content files rather than being scattered across components:

- `lib/i18n/dictionary.ts` contains localized homepage text
- `lib/content.ts` contains experience, education, and skills data
- `app/[locale]/case-studies/linguahub/content.tsx` contains the LinguaHub case study narrative, flows, roadmap, KPIs, and prototype links

This keeps the UI components focused on layout and makes future content updates easier.

## Deployment

The project is ready for deployment on Vercel or any platform that supports Next.js.

Before deploying, run:

```bash
npm run lint
npm run test
npm run build
```
