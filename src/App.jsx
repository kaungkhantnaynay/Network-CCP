import { useEffect, useState } from 'react'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { TopologyCanvas } from './components/shared/TopologyCanvas'
import { Home } from './pages/Home'
import { Programs } from './pages/Programs'
import { About } from './pages/About'
import { Testimonials } from './pages/Testimonials'
import { Contact } from './pages/Contact'

const getCurrentPage = () => {
  if (
    window.location.hash === '#programs' ||
    window.location.hash === '#programs-page' ||
    window.location.hash.startsWith('#program-track-') ||
    window.location.hash.startsWith('#program-')
  ) {
    return 'programs'
  }

  if (window.location.hash === '#about' || window.location.hash === '#about-page') {
    return 'about'
  }

  if (window.location.hash === '#testimonials' || window.location.hash === '#testimonials-page') {
    return 'testimonials'
  }

  if (window.location.hash === '#contact' || window.location.hash === '#contact-page') {
    return 'contact'
  }

  return 'home'
}

const App = () => {
  const [currentPage, setCurrentPage] = useState(getCurrentPage)

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getCurrentPage())
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  useEffect(() => {
    window.requestAnimationFrame(() => {
      const hash = window.location.hash
      const targetElement = hash ? document.getElementById(hash.slice(1)) : null

      if (targetElement && hash.startsWith('#program-')) {
        targetElement.scrollIntoView({ block: 'start', behavior: 'auto' })
        return
      }

      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    })
  }, [currentPage])

  return (
    <div className="app-shell">
      <TopologyCanvas />
      <span id="top" className="page-top" aria-hidden="true" />
      <Navbar currentPage={currentPage} />
      {currentPage === 'programs' && <Programs />}
      {currentPage === 'about' && <About />}
      {currentPage === 'testimonials' && <Testimonials />}
      {currentPage === 'contact' && <Contact />}
      {currentPage === 'home' && <Home />}
      <Footer />
    </div>
  )
}

export default App
