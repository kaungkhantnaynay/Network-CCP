const contactOptions = [
  {
    label: 'Career Planning',
    title: 'Map the next role',
    description:
      'Share your current role, target country, target title, and timeline so the plan can focus on realistic next steps.',
    meta: 'Role roadmap',
  },
  {
    label: 'Resume Support',
    title: 'Sharpen your profile',
    description:
      'Send your resume goals, strongest projects, certifications, and job links you want to target.',
    meta: 'Resume review',
  },
  {
    label: 'Interview English',
    title: 'Practice clear answers',
    description:
      'Prepare self-introduction, recruiter screening, HR questions, and technical explanation flow.',
    meta: 'Communication prep',
  },
  {
    label: 'Technical Prep',
    title: 'Build interview depth',
    description:
      'Choose the network, security, firewall, services, or project topics you need to strengthen.',
    meta: 'Skill plan',
  },
]

const checklistItems = [
  'Current resume or profile summary',
  'Target role, country, and preferred timeline',
  'Certifications or tracks you are studying',
  'Interview or job application blockers',
]

const mailtoLink =
  'mailto:networkccp@example.com?subject=Network%20CCP%20career%20plan'

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://facebook.com/networkccp',
    icon: 'facebook',
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@networkccp',
    icon: 'tiktok',
  },
]

function SocialIcon({ type }) {
  if (type === 'facebook') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M14.5 8.2V6.7c0-.7.5-1.1 1.2-1.1h1.5V3h-2.3c-2.6 0-4 1.6-4 4v1.2H8.8v2.9h2.1V21h3.1v-9.9h2.6l.4-2.9h-3Z" />
      </svg>
    )
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M15.5 3c.3 2.2 1.5 3.7 3.6 3.9v3.1a6.7 6.7 0 0 1-3.5-1.1v5.8c0 3-2 5.3-5.1 5.3A5.2 5.2 0 0 1 5.3 15c0-3.3 2.7-5.7 6-5.1v3.2c-1.4-.4-2.9.5-2.9 2 0 1.1.9 2 2 2 1.3 0 2.1-.8 2.1-2.4V3h3Z" />
    </svg>
  )
}

export function Contact() {
  return (
    <main className="contact-page" id="contact-page">
      <header className="contact-page-header">
        <div className="programs-eyebrow">
          <span aria-hidden="true" />
          <strong>Contact</strong>
        </div>
        <h1>
          Start your <span>Network CCP plan.</span>
        </h1>
        <p>
          Tell us where you are now, where you want to go next, and which career,
          interview, or technical gaps need the most attention.
        </p>
      </header>

      <section className="contact-layout" aria-label="Contact options">
        <div className="contact-primary-panel">
          <span>Primary Channel</span>
          <h2>Email Network CCP</h2>
          <p>
            Use email to share your target role, resume focus, interview needs,
            and technical preparation goals. This demo keeps contact simple and
            does not submit or store any form data.
          </p>
          <a href={mailtoLink}>Email networkccp@example.com</a>
          <nav className="contact-socials" aria-label="Contact social media links">
            {socialLinks.map((link) => (
              <a href={link.href} key={link.label} rel="noreferrer" target="_blank">
                <SocialIcon type={link.icon} />
                <span>{link.label}</span>
              </a>
            ))}
          </nav>
        </div>

        <aside className="contact-checklist" aria-labelledby="contact-checklist-title">
          <span>Before You Contact</span>
          <h2 id="contact-checklist-title">Helpful details to include</h2>
          <ul>
            {checklistItems.map((item) => (
              <li key={item}>
                <span aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="contact-option-grid" aria-label="Planning focus areas">
        {contactOptions.map((option) => (
          <article className="contact-option-card" key={option.title}>
            <span>{option.label}</span>
            <h2>{option.title}</h2>
            <p>{option.description}</p>
            <strong>{option.meta}</strong>
          </article>
        ))}
      </section>

      <section className="contact-cta" aria-labelledby="contact-cta-title">
        <div>
          <span>Start Plan</span>
          <h2 id="contact-cta-title">Send the details that shape your next move.</h2>
          <p>
            Keep the first message practical: target role, current skill level,
            resume status, and the support area you want to prioritize.
          </p>
        </div>
        <a href={mailtoLink}>Contact Network CCP</a>
      </section>
    </main>
  )
}
