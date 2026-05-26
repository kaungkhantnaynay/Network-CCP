import { useState } from 'react'

function SocialIcon({ name }) {
  if (name === 'Facebook') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M14.4 8.4H17V5h-2.9c-3 0-4.7 1.8-4.7 4.6v2H7v3.3h2.4V22h3.7v-7.1h3l.5-3.3h-3.5V10c0-1 .4-1.6 1.3-1.6Z" />
      </svg>
    )
  }

  if (name === 'LinkedIn') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M6.7 8.8H3.3V20h3.4V8.8ZM5 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm15.7 9.7c0-3.4-1.8-5.2-4.4-5.2-1.8 0-2.8 1-3.3 1.8V8.8H9.7V20H13v-5.9c0-1.6.8-2.5 2.1-2.5s2.1.9 2.1 2.5V20h3.5v-6.3Z" />
      </svg>
    )
  }

  if (name === 'TikTok') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M15.5 3c.3 2.2 1.5 3.7 3.6 3.9v3.1a6.7 6.7 0 0 1-3.5-1.1v5.8c0 3-2 5.3-5.1 5.3A5.2 5.2 0 0 1 5.3 15c0-3.3 2.7-5.7 6-5.1v3.2c-1.4-.4-2.9.5-2.9 2 0 1.1.9 2 2 2 1.3 0 2.1-.8 2.1-2.4V3h3Z" />
      </svg>
    )
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M21.7 4.3 18.5 20c-.2 1.1-.9 1.4-1.8.9l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.4-5.1 9.3-8.4c.4-.4-.1-.6-.6-.3L5.8 13.4.8 11.8c-1.1-.3-1.1-1.1.2-1.6L20.4 2.7c.9-.3 1.7.2 1.3 1.6Z" />
    </svg>
  )
}

export function Navbar({ currentPage = 'home' }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navItems = [
    { label: 'Home', href: '/', page: 'home' },
    { label: 'Programs', href: '#programs', page: 'programs' },
    { label: 'About us', href: '#about', page: 'about' },
    { label: 'Testimonials', href: '#testimonials', page: 'testimonials' },
    { label: 'Contact us', href: '#contact', page: 'contact' },
  ]
  const socialLinks = [
    { label: 'Facebook', href: 'https://www.facebook.com/share/1UvPTUapb1/?mibextid=wwXIfr' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/arkar-min-network-career-coach-83a891327?utm_source=share_via&utm_content=profile&utm_medium=member_ios' },
    { label: 'TikTok', href: 'https://www.tiktok.com/@arkarcareercoach?_r=1&_t=ZS-96gIuQlSC8N' },
    { label: 'Telegram', href: 'https://t.me/+KURjaV7aMXRlN2Jl' },
  ]

  const handleHomeClick = (event) => {
    event.preventDefault()
    setIsMenuOpen(false)
    window.history.pushState(null, '', '/')
    window.dispatchEvent(new Event('hashchange'))
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }

  return (
    <header className="site-navbar" aria-label="Site header">
      <div className="navbar-grid" aria-hidden="true" />
      <nav className="navbar-shell" aria-label="Primary navigation">
        <a className="navbar-brand" href="/" aria-label="Network CCP home" onClick={handleHomeClick}>
          <img className="brand-logo" src="/NCCP-Logo.jpg" alt="Network CCP" />
        </a>

        <button
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
          className="navbar-toggle"
          onClick={() => setIsMenuOpen((current) => !current)}
          type="button"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>

        <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`} id="primary-navigation">
          {navItems.map((item) => {
            const isActive = currentPage === item.page

            return (
              <a
                key={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={isActive ? 'active' : undefined}
                href={item.href}
                onClick={item.page === 'home' ? handleHomeClick : () => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            )
          })}
        </div>

        <div className="navbar-socials" aria-label="Network CCP social links">
          {socialLinks.map((link) => (
            <a href={link.href} key={link.label} rel="noreferrer" target="_blank">
              <SocialIcon name={link.label} />
              <span className="sr-only">{link.label}</span>
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
