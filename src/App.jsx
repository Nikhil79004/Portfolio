import React, { useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Mid from './components/Mid'
import Contact from './components/Contact'
import Projects from './components/Projects'
import About from './components/About'
import Together from './components/Together'
import Resume from './components/Resume'

const App = () => {
  const location = useLocation()

  const aboutRef = useRef(null)
  const contactRef = useRef(null)

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  // ✅ lowercase route (important)
  const isResumePage = location.pathname === '/resume'

  return (
    <div className="relative min-h-screen w-full flex flex-col">
      <Navbar 
        scrollToAbout={scrollToAbout} 
        scrollToContact={scrollToContact} 
      />

      {/* Routes */}
      <Routes>
        <Route path="/resume" element={<Resume />} />
      </Routes>

      {/* Hide main content on Resume page */}
      {!isResumePage && (
        <main
          className="
            flex-1 w-full
            max-w-screen-2xl mx-auto
            flex flex-col gap-4
            px-2 sm:px-4 md:px-8
            md:gap-8 lg:gap-10
          "
        >
          <section className="w-full">
            <Mid />
          </section>

          <div ref={contactRef}>
            <Contact />
          </div>

          <Projects />

          <div ref={aboutRef}>
            <About />
          </div>

          <Together />
        </main>
      )}
    </div>
  )
}

export default App
