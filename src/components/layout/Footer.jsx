export function Footer() {
  const handleHomeClick = (event) => {
    event.preventDefault()
    window.history.pushState(null, '', '/')
    window.dispatchEvent(new Event('hashchange'))
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }

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
        { label: 'Home', href: '/', page: 'home' },
        { label: 'About us', href: '#about' },
        { label: 'Testimonials', href: '#testimonials' },
        { label: 'Contact us', href: '#contact' },
      ],
    },
    {
      title: 'Legal',
      note: 'Privacy Policy: this static demo does not collect account data, payments, uploads, or member records.',
    },
  ]
  const socialLinks = [
    { label: 'Facebook', href: 'https://facebook.com/networkccp' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/network-ccp' },
    { label: 'YouTube', href: 'https://www.youtube.com/@networkccp' },
    { label: 'Telegram', href: 'https://t.me/networkccp' },
  ]

  return (
    <footer className="site-footer" aria-label="Site footer">
      <div className="footer-surface">
        <div className="footer-brand-panel">
          <a className="footer-brand" href="/" aria-label="Network CCP home" onClick={handleHomeClick}>
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
          <nav className="footer-socials" aria-label="Social media links">
            {socialLinks.map((link) => (
              <a href={link.href} key={link.label} rel="noreferrer" target="_blank">
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="footer-links-grid">
          {footerGroups.map((group) => (
            <div className="footer-link-group" key={group.title}>
              <h2>{group.title}</h2>
              {group.note ? (
                <p className="footer-policy-note">{group.note}</p>
              ) : (
                <ul>
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} onClick={link.page === 'home' ? handleHomeClick : undefined}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Network CCP. Portfolio demo.</span>
        <span>Privacy-first static frontend · No account data collected</span>
      </div>
    </footer>
  )
}
