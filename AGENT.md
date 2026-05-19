# Network CCP Agent Guide

## Project Purpose

Network Career Coaching Program (Network CCP) is a polished frontend portfolio/demo for a career coaching and technical training program. The app should feel like a practical SaaS dashboard that helps members understand career planning, resume support, application strategy, interview preparation, and network/security training options.

Version 1 is frontend-only. Do not add authentication, backend APIs, databases, file upload, payment flows, or persistence unless the project plan changes.

## Current Stack

- Vite
- React
- JavaScript
- Tailwind CSS
- shadcn/ui
- React Router
- Zustand or Redux for state management
- Framer Motion
- Lucide React
- Google Fonts
- CSS modules or plain CSS only when they fit better than Tailwind utilities
- Static content modules for demo data

## Setup Commands

Use these commands from the project root:

```bash
npm install
npm run dev
npm run lint
npm run build
npm run preview
```

Run `npm install` only when dependencies are missing or `package-lock.json` needs to be refreshed.

## Coding Rules

- Keep the first version as a single-page React app with section navigation, tabs, or local component state.
- Prefer small reusable components over one large `App.jsx`.
- Keep data in separate modules when content lists become long, such as `programs`, `tracks`, `sessions`, `resumeTiers`, and `outcomes`.
- Use clear, stable names for components and data fields.
- Avoid adding dependencies unless they materially improve the implementation.
- Use React Router for app-level navigation when route structure is needed; keep simple section anchors or tabs when a full route is unnecessary.
- Use Zustand for lightweight shared UI state by default; use Redux only if the app grows into complex, multi-domain state with predictable debugging needs.
- Do not introduce API clients or form libraries for v1 unless clearly needed.
- Keep user-facing copy professional, concise, and specific to career coaching, network engineering, security, and interview preparation.
- Use accessible HTML first: semantic landmarks, headings in order, useful `alt` text, visible focus states, and buttons for actions.

## Design Rules

- The visual direction is professional SaaS/dashboard, not academy marketing.
- Use the Bloomberg Terminal meets modern network SaaS palette as the default project aesthetic: deep navy `#080d14` base, lifted card surfaces around `#0d1828`, electric teal `#00e5c3` for numbers/tags/logo/active indicators, with controlled purple for interview/English tracks and amber for technical tracks.
- Use DM Mono for tags, stats, labels, badges, and terminal-style readouts.
- Include subtle topology cues: teal dot grid, node/edge motifs, and calm animated network motion that supports the interface without distracting from content.
- Avoid pale gray-only sections, oversaturated decoration outside the defined track colors, warm orange/yellow backgrounds, and harsh contrast unless the user explicitly changes the direction.
- Build the actual product experience as the first screen, not a large decorative landing page.
- Favor dense but readable panels, section summaries, comparison tables, status indicators, track selectors, and practical calls to action.
- Do not rely on oversized hero sections, decorative gradient backgrounds, or card-heavy marketing layouts.
- Keep cards modest, with border radius at 8px or less unless a later design system says otherwise.
- Avoid nesting cards inside cards.
- Use restrained colors with enough contrast; avoid making the whole interface feel dominated by one hue.
- Make mobile layouts first-class: text must not overflow cards, buttons, tabs, or panels.
- Use stable dimensions for repeatable UI elements such as track cards, service tiers, timelines, and navigation items.

## Content Requirements

The frontend should visibly cover:

- Program overview and member career planning
- Resume key point analysis
- Resume review
- Full resume enhancement
- Job portal application strategies, tips, and tricks
- Interview English Masterclass
- Technical interview preparation
- Weekly theory sessions
- CCNA, CCNP, CCIE, Firewall, Services, Security, and IT Project Management coverage
- Advanced Network Security
- Firewall theory and lab practice
- Cybersecurity theory
- Optional network and system classes

Use static data that makes the demo feel complete without pretending that real member records exist.

## Suggested Structure

```text
src/
  components/
    layout/
      Navbar.jsx
      Footer.jsx
    programs/
      ProgramCard.jsx
      ProgramGrid.jsx
    technical/
      CertBadge.jsx
      CoverageMatrix.jsx
      TechCard.jsx
    shared/
      StatBar.jsx
      TestimonialCard.jsx
      SectionHeader.jsx
      CTABanner.jsx
    ui/
      shadcn components
  data/
    programs.json
    technical.json
    jobs.json
    schedule.json
    countries.json
  pages/
    Home.jsx
    Programs.jsx
    TechnicalHub.jsx
    KnowledgeHub.jsx
    Sessions.jsx
    Jobs.jsx
    About.jsx
    Contact.jsx
  styles/
    globals.css
```

This structure is guidance, not a hard requirement. Match it to the final implementation as the project evolves.

## Verification Expectations

Before final delivery of implementation work:

- Run `npm run lint`.
- Run `npm run build`.
- Start or use the Vite dev server and verify the app loads.
- Check desktop and mobile layouts.
- Confirm section navigation, tabs, and interactive states work.
- Confirm all major Network CCP features are visible in the first-page experience.
- Check that text does not overflow or overlap.

## Agent Workflow

- Always read `AGENT.md` before doing any project work, including analysis, planning, editing, testing, or running commands.
- Read the existing files before editing.
- Keep changes scoped to the requested phase.
- Do not overwrite unrelated user changes.
- Update `TASKS.md` when completing meaningful project phases.
- Explain any skipped verification step in the final response.
- If a request conflicts with this guide, follow the user's latest explicit instruction and update the guide when appropriate.
