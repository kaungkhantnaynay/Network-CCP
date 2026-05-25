import { useState } from 'react'

const programTracks = [
  {
    id: 'career',
    label: 'Career & Resume',
    title: 'Build your job search foundation',
    tone: 'teal',
    programs: [
      {
        tag: 'Career Strategy',
        title: 'Member Career Planning',
        description:
          'Map target roles, identify skill gaps, and set weekly milestones toward a clear network career path.',
      },
      {
        tag: 'Resume',
        title: 'Resume Key Point Analysis',
        description:
          'Identify missing achievements, weak technical signals, and role-specific keywords before applying.',
      },
      {
        tag: 'Resume',
        title: 'Resume Review & Enhancement',
        description:
          'Review structure, ATS readability, technical depth, and recruiter scan quality with improvement strategies.',
      },
      {
        tag: 'Resume',
        title: 'Full Resume Update with Founder',
        description:
          'Personalized full rewrite, restructured around impact, technologies, and measurable ownership.',
      },
      {
        tag: 'Applications',
        title: 'Job Portal Application Strategy & Tips',
        description:
          'LinkedIn, JobStreet, Indeed: smarter search patterns, timing, follow-up tactics, and how-to-apply guidance per country.',
        wide: true,
      },
    ],
  },
  {
    id: 'english',
    label: 'English & Interview',
    title: 'Communicate with confidence at every stage',
    tone: 'purple',
    programs: [
      {
        tag: 'Interview',
        title: 'Interview English Masterclass',
        description:
          'Structured storytelling, professional vocabulary, and concise answers practiced directly with guided feedback.',
      },
      {
        tag: 'Communication',
        title: 'English for Recruiter Communication',
        description:
          'Email etiquette, phone screening readiness, and professional phrasing when contacting HR teams.',
      },
      {
        tag: 'HR English',
        title: 'Engaging English for HR Communication',
        description:
          'HR-specific vocabulary, self-introduction scripts, and salary negotiation phrasing for interview flow.',
        wide: true,
      },
    ],
  },
  {
    id: 'technical',
    label: 'Technical Training',
    title: 'Interview-grade depth across network domains',
    tone: 'amber',
    programs: [
      {
        tag: 'Technical',
        title: 'Technical Interview Preparation',
        description:
          'Scenario-based questions, whiteboard frameworks, and skills development for network engineering roles.',
      },
      {
        tag: 'Security',
        title: 'Advanced Network Security',
        description:
          'BGP security, SD-WAN, Zero Trust, and advanced threat concepts for theory and interview preparation.',
      },
      {
        tag: 'Firewalls',
        title: 'Firewalls: Theory & Lab',
        description:
          'Palo Alto, Fortinet, Cisco ASA, and Check Point concepts, policy design, and interview Q&A.',
      },
      {
        tag: 'Cybersecurity',
        title: 'Cybersecurity Session: Theory',
        description:
          'SOC principles, threat analysis, and incident response theory for security-adjacent interview roles.',
      },
      {
        tag: 'Project Mgmt',
        title: 'IT Project Management Theory Training',
        description:
          'PMBOK basics, Agile in IT environments, stakeholder communication, and leadership language for senior-role interviews.',
        wide: true,
      },
    ],
  },
  {
    id: 'optional',
    label: 'Optional',
    title: 'Fill your skill gaps on your own terms',
    tone: 'coral',
    programs: [
      {
        tag: 'Optional Classes',
        title: 'Other Network & System Classes',
        description:
          'Supplementary modules such as Linux, cloud basics, scripting, and system administration selected from coaching gaps.',
        wide: true,
      },
    ],
  },
]

const filters = [
  { id: 'all', label: 'All' },
  { id: 'career', label: 'Career & Resume' },
  { id: 'technical', label: 'Technical', tone: 'amber' },
  { id: 'english', label: 'English & Interview', tone: 'purple' },
  { id: 'optional', label: 'Optional', tone: 'coral' },
]

const totalPrograms = programTracks.reduce((count, track) => count + track.programs.length, 0)

const getSlug = (value) =>
  value
    .toLowerCase()
    .replaceAll('&', 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

const getTrackAnchor = (label) => `program-track-${getSlug(label)}`
const getProgramAnchor = (title) => `program-${getSlug(title)}`

const weeklySessions = [
  {
    title: 'Theory Review',
    meta: 'Weekly live',
    description: 'Networking, firewall, security, and operations concepts reinforced with guided Q&A.',
  },
  {
    title: 'Career Checkpoint',
    meta: 'Weekly live',
    description: 'Resume, application strategy, and interview preparation progress reviewed with the cohort.',
  },
  {
    title: 'Webinar',
    meta: 'Coming soon',
    description: 'Guest-led topic sessions for market updates, hiring signals, and practical network career lessons.',
    comingSoon: true,
  },
]

export function Programs() {
  const [activeFilter, setActiveFilter] = useState('all')

  const visibleTracks =
    activeFilter === 'all' ? programTracks : programTracks.filter((track) => track.id === activeFilter)

  const visibleProgramCount = visibleTracks.reduce((count, track) => count + track.programs.length, 0)
  const sidebarGroups = visibleTracks.map((track) => ({
    label: track.label,
    tone: track.tone,
    items: track.programs.map((program) => ({
      anchor: getProgramAnchor(program.title),
      title: program.title,
    })),
  }))

  return (
    <main className="programs-page" id="programs-page">
      <header className="programs-page-header">
        <div className="programs-eyebrow">
          <span aria-hidden="true" />
          <strong>All Programs</strong>
        </div>
        <h1>
          Everything you need to <span>land your next role.</span>
        </h1>
        <p>
          {totalPrograms} structured programs across career strategy, English communication,
          technical interview preparation, and optional skill-building classes.
        </p>
      </header>

      <div className="programs-filter-bar" aria-label="Program filters">
        <span>Filter</span>
        {filters.map((filter) => (
          <button
            aria-pressed={activeFilter === filter.id}
            className={`programs-filter-chip ${filter.tone ?? ''} ${
              activeFilter === filter.id ? 'active' : ''
            }`}
            onClick={() => setActiveFilter(filter.id)}
            type="button"
            key={filter.id}
          >
            {filter.label}
          </button>
        ))}
        <strong>
          {visibleProgramCount} {visibleProgramCount === 1 ? 'program' : 'programs'}
        </strong>
      </div>

      <div className="programs-layout">
        <aside className="programs-sidebar" aria-label="Program sections">
          {sidebarGroups.map((group, groupIndex) => (
            <section className="programs-sidebar-section" key={group.label}>
              <h2>{group.label}</h2>
              {group.items.map((item, itemIndex) => (
                <a
                  className={`programs-sidebar-item ${groupIndex === 0 && itemIndex === 0 ? 'active' : ''} ${
                    group.tone
                  }`}
                  href={`#${item.anchor}`}
                  key={item.title}
                >
                  <span aria-hidden="true" />
                  {item.title}
                </a>
              ))}
            </section>
          ))}
        </aside>

        <section className="programs-content" aria-label="Program track cards">
          {visibleTracks.map((track) => (
            <article className="program-track" id={getTrackAnchor(track.label)} key={track.id}>
              <header className="program-track-head">
                <span className={`program-track-tag ${track.tone}`}>{track.label}</span>
                <h2>{track.title}</h2>
                <strong>{track.programs.length} programs</strong>
              </header>

              <div className="program-card-grid">
                {track.programs.map((program) => (
                  <a
                    className={`program-detail-card ${track.tone} ${program.wide ? 'wide' : ''}`}
                    href="#contact"
                    id={getProgramAnchor(program.title)}
                    key={program.title}
                  >
                    <span className={`program-card-tag ${track.tone}`}>{program.tag}</span>
                    <h3>{program.title}</h3>
                    <p>{program.description}</p>
                  </a>
                ))}
              </div>
            </article>
          ))}

          <section className="programs-schedule-cta" aria-labelledby="programs-schedule-title">
            <div>
              <span>Weekly Sessions</span>
              <p id="programs-schedule-title">
                <strong>Live sessions every week</strong> with technical topics, theory review,
                and career preparation checkpoints.
              </p>
            </div>
            <div className="weekly-session-grid" aria-label="Weekly session types">
              {weeklySessions.map((session) => (
                <article className={`weekly-session-card ${session.comingSoon ? 'coming-soon' : ''}`} key={session.title}>
                  <span>{session.meta}</span>
                  <h3>{session.title}</h3>
                  <p>{session.description}</p>
                </article>
              ))}
            </div>
          </section>
        </section>
      </div>
    </main>
  )
}
