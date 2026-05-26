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
    href: 'https://www.facebook.com/share/1UvPTUapb1/?mibextid=wwXIfr',
    icon: 'facebook',
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@arkarcareercoach?_r=1&_t=ZS-96gIuQlSC8N',
    icon: 'tiktok',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/arkar-min-network-career-coach-83a891327?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
    icon: 'linkedin',
  },
  {
    label: 'Telegram',
    href: 'https://t.me/+KURjaV7aMXRlN2Jl',
    icon: 'telegram',
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

  if (type === 'linkedin') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M6.7 8.8H3.3V20h3.4V8.8ZM5 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm15.7 9.7c0-3.4-1.8-5.2-4.4-5.2-1.8 0-2.8 1-3.3 1.8V8.8H9.7V20H13v-5.9c0-1.6.8-2.5 2.1-2.5s2.1.9 2.1 2.5V20h3.5v-6.3Z" />
      </svg>
    )
  }

  if (type === 'telegram') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M21.7 4.3 18.5 20c-.2 1.1-.9 1.4-1.8.9l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.4-5.1 9.3-8.4c.4-.4-.1-.6-.6-.3L5.8 13.4.8 11.8c-1.1-.3-1.1-1.1.2-1.6L20.4 2.7c.9-.3 1.7.2 1.3 1.6Z" />
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
