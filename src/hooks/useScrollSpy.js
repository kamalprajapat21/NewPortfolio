import { useEffect, useState } from 'react'

export function useScrollSpy(sectionIds, options = {}) {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const observers = []

    const observerOptions = {
      root: null,
      rootMargin: options.rootMargin || '-80px 0px -60% 0px',
      threshold: options.threshold || 0,
    }

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (!element) return

      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection(id)
        }
      }, observerOptions)

      observer.observe(element)
      observers.push(observer)
    })

    return () => observers.forEach((obs) => obs.disconnect())
  }, [sectionIds, options.rootMargin, options.threshold])

  return activeSection
}
