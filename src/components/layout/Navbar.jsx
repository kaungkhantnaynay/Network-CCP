import { useState } from 'react'

export function Navbar({ currentPage = 'home' }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navItems = [
    { label: 'Home', href: '#top', page: 'home' },
    { label: 'Programs', href: '#programs', page: 'programs' },
    { label: 'About us', href: '#about', page: 'about' },
    { label: 'Testimonials', href: '#testimonials', page: 'testimonials' },
    { label: 'Contact us', href: '#contact', page: 'contact' },
  ]

  return (
    <header className="site-navbar" aria-label="Site header">
      <div className="navbar-grid" aria-hidden="true" />
      <nav className="navbar-shell" aria-label="Primary navigation">
        <a className="navbar-brand" href="#top" aria-label="Network CCP home" onClick={() => setIsMenuOpen(false)}>
          <span className="brand-mark" aria-hidden="true">
            <span className="brand-node brand-node-a" />
            <span className="brand-node brand-node-b" />
            <span className="brand-node brand-node-c" />
          </span>
          <span>
            <span className="brand-name">Network CCP</span>
            <span className="brand-label">Career Command Center</span>
          </span>
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
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            )
          })}
        </div>

        <a
          aria-current={currentPage === 'contact' ? 'page' : undefined}
          className={`navbar-cta ${currentPage === 'contact' ? 'active' : ''}`}
          href="#contact"
          onClick={() => setIsMenuOpen(false)}
        >
          Start Plan
        </a>
      </nav>
    </header>
  )
}
