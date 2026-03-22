import { useState, useEffect, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { AnimatePresence } from 'framer-motion'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import CustomCursor from './components/CustomCursor'
import LoadingScreen from './components/LoadingScreen'

const Home = lazy(() => import('./pages/Home'))
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'))

const KONAMI = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']

export default function App() {
  const [loading, setLoading] = useState(() => !sessionStorage.getItem('loaded'))
  const [konamiIndex, setKonamiIndex] = useState(0)
  const [eastEgg, setEastEgg] = useState(false)

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === KONAMI[konamiIndex]) {
        const next = konamiIndex + 1
        if (next === KONAMI.length) {
          setEastEgg(true)
          setKonamiIndex(0)
          setTimeout(() => setEastEgg(false), 4000)
        } else {
          setKonamiIndex(next)
        }
      } else {
        setKonamiIndex(0)
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [konamiIndex])

  const handleLoadingComplete = () => {
    sessionStorage.setItem('loaded', '1')
    setLoading(false)
  }

  return (
    <Router>
      {loading && <LoadingScreen onComplete={handleLoadingComplete} />}

      {/* Noise overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Custom cursor */}
      <CustomCursor />

      {/* Konami easter egg */}
      <AnimatePresence>
        {eastEgg && (
          <div className="fixed inset-0 z-[9995] flex items-center justify-center pointer-events-none">
            <div className="text-center animate-bounce">
              <div className="text-8xl mb-4">🎉</div>
              <div className="text-2xl font-bold text-accent" style={{ fontFamily: '"Clash Display", sans-serif' }}>
                You found the easter egg!
              </div>
              <div className="text-white/60 text-sm mt-2">+100 developer points 🚀</div>
            </div>
          </div>
        )}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar />
          <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
          <Footer />
          <ScrollToTop />
        </>
      )}

      <Toaster position="bottom-right" />
    </Router>
  )
}
