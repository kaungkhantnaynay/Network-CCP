import { useEffect, useState } from 'react'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { TopologyCanvas } from './components/shared/TopologyCanvas'
import { Home } from './pages/Home'
import { Programs } from './pages/Programs'

const getCurrentPage = () => {
  if (window.location.hash === '#programs' || window.location.hash === '#programs-page') {
    return 'programs'
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

  return (
    <div className="app-shell">
      <TopologyCanvas />
      <span id="top" className="page-top" aria-hidden="true" />
      <Navbar />
      {currentPage === 'programs' ? <Programs /> : <Home />}
      <Footer />
    </div>
  )
}

export default App
