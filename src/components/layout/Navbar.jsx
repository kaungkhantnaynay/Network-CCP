import { useState } from 'react'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navItems = [
    { label: 'Home', href: '#top' },
    { label: 'Programs', href: '#programs' },
    { label: 'About us', href: '#about' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact us', href: '#contact' },
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
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </div>

        <a className="navbar-cta" href="#contact" onClick={() => setIsMenuOpen(false)}>Start Plan</a>
      </nav>
    </header>
  )
}
