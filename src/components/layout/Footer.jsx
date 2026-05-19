export function Footer() {
  const footerGroups = [
    {
      title: 'Program',
      links: [
        { label: 'Services', href: '#services' },
        { label: 'Career & Resume', href: '#services' },
        { label: 'Interview English', href: '#services' },
        { label: 'Technical Training', href: '#services' },
      ],
    },
    {
      title: 'Coverage',
      links: [
        { label: 'Country Coverage', href: '#country-coverage' },
        { label: 'Testimonials', href: '#testimonials' },
        { label: 'About Founder', href: '#about' },
        { label: 'Start Plan', href: '#contact' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'Home', href: '#top' },
        { label: 'About us', href: '#about' },
        { label: 'Contact us', href: '#contact' },
        { label: 'Portfolio Demo', href: '#top' },
      ],
    },
  ]

  return (
    <footer className="site-footer" aria-label="Site footer">
      <div className="footer-surface">
        <div className="footer-brand-panel">
          <a className="footer-brand" href="#home" aria-label="Network CCP home">
            <span className="footer-mark" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span>
              <span className="footer-brand-name">Network CCP</span>
              <span className="footer-brand-kicker">Career coaching for network professionals</span>
            </span>
          </a>
          <p>
            A focused coaching and technical preparation program for members building
            stronger resumes, sharper interview skills, and clearer network career plans.
          </p>
          <div className="footer-status" aria-label="Program status">
            <span />
            Frontend demo environment
          </div>
        </div>

        <div className="footer-links-grid">
          {footerGroups.map((group) => (
            <div className="footer-link-group" key={group.title}>
              <h2>{group.title}</h2>
              <ul>
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Network CCP. Portfolio demo.</span>
        <span>Premium dark UI · Static frontend</span>
      </div>
    </footer>
  )
}
