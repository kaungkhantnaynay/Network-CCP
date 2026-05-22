# Network CCP Tasks

## Phase 1: Project Planning Docs

- [x] Create `AGENT.md` with project purpose, setup commands, coding rules, design rules, verification expectations, and agent workflow guidance.
- [x] Create `TASKS.md` with phased implementation tasks, acceptance criteria, and manual QA checklist.
- [x] Review the starter Vite files and identify which template content will be replaced during implementation.

## Phase 2: UI Foundation

- [x] Create the initial source folder structure for layout, sections, UI components, routes, store, utilities, and static data.
- [x] Replace the default Vite starter screen with the Network CCP single-page app shell.
- [x] Create a responsive layout with top navigation, main content area, and section anchors or tabs.
- [x] Establish the visual system: colors, typography, spacing, panels, buttons, and responsive breakpoints.
- [x] Add reusable components for repeated panels, metrics, service tiers, tracks, and timelines.
- [x] Move long static content into data modules.

## Phase 3: Core Product Sections

- [x] Build the program overview and member career planning section.
- [x] Build the dedicated About page with mission, history, values, team, and program quote panel.
- [x] Build the dedicated Testimonials page with filtered member stories and CTA.
- [x] Build the dedicated Contact page with static contact paths and mailto CTA.
- [x] Build resume support panels for key point analysis, resume review, and full resume enhancement.
- [x] Build job portal application strategy cards with practical tips and tricks.
- [x] Build the Interview English Masterclass section.
- [x] Build technical interview preparation and weekly theory session sections.
- [x] Build training track coverage for CCNA, CCNP, CCIE, Firewall, Services, Security, and IT Project Management.
- [x] Build advanced network security, firewall theory/lab, and cybersecurity theory coverage.
- [x] Build optional network and system classes section.

## Phase 4: Interaction States

- [ ] Add selected training track state.
- [ ] Add featured weekly session state.
- [ ] Add resume service tier selection or comparison state.
- [x] Make Programs page filter chips update visible program tracks and counts.
- [x] Make Testimonials page filter chips update visible member stories and counts.
- [x] Add mobile hamburger menu state for the primary navbar.
- [ ] Add application strategy category filtering or highlighted strategy state.
- [ ] Make all controls keyboard accessible and visibly focused.

## Phase 5: Responsive QA

- [ ] Check desktop layout around 1440px width.
- [ ] Check laptop layout around 1024px width.
- [ ] Check tablet layout around 768px width.
- [ ] Check mobile layout around 390px width.
- [ ] Confirm no text overlaps or overflows cards, buttons, panels, tabs, or navigation.
- [ ] Confirm section navigation and interactive components remain usable on touch-sized screens.

## Phase 6: Final Verification

- [x] Run `npm run lint`.
- [x] Run `npm run build`.
- [x] Update navbar Services link to Programs page route.
- [x] Wire About page into the app navigation route.
- [x] Wire Contact page into the app navigation route.
- [x] Run the Vite dev server with `npm run dev`.
- [x] Verify the app loads locally.
- [ ] Verify all required Network CCP features are visible.
- [x] Verify the project still has no backend, login, database, upload, payment, or persistence requirements.
- [x] Update this checklist with completed work.

## Acceptance Criteria

- The app presents Network CCP as a professional career coaching and technical training program.
- The first screen behaves like a useful product/demo experience, not a marketing-only landing page.
- Major program areas are easy to scan and navigate.
- Static data makes the UI feel complete and coherent.
- Responsive behavior is polished on desktop and mobile.
- Text remains readable without clipping, awkward wrapping, or overlap.
- Navigation anchors, tabs, and selected states work predictably.
- Production build completes successfully.

## Manual QA Checklist

- [ ] Open the app in a browser and confirm the page renders without console errors.
- [ ] Navigate through every section from the main navigation.
- [ ] Test all tabs, selectors, buttons, and expandable or highlighted states.
- [ ] Resize from desktop to mobile and check for layout shifts or overflow.
- [ ] Confirm each content area uses Network CCP-specific language.
- [ ] Confirm calls to action are demo-safe and do not imply a real backend workflow.
- [ ] Confirm visual style is restrained, professional, and dashboard-like.
- [ ] Confirm accessibility basics: semantic headings, focus states, sufficient contrast, and useful labels.
