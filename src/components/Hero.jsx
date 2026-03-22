import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiArrowDown } from 'react-icons/fi'

const roles = ['Full Stack Developer', 'UI Engineer', 'Open Source Contributor']

const socials = [
  { icon: FiGithub, href: 'https://github.com/kamalprajapat21', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/kamalprajapat', label: 'LinkedIn' },
  { icon: FiTwitter, href: 'https://twitter.com/kamalprajapat', label: 'Twitter' },
]

const floatingShapes = [
  { class: 'w-64 h-64 rounded-full border border-accent/10 top-20 -right-20', delay: 0 },
  { class: 'w-40 h-40 rounded-full bg-accent/5 bottom-40 -left-16', delay: 1 },
  { class: 'w-24 h-24 rounded-lg border border-white/5 top-1/3 right-1/4', delay: 2 },
  { class: 'w-16 h-16 rounded-full border border-accent/20 bottom-1/4 right-1/3', delay: 0.5 },
  { class: 'w-80 h-80 rounded-full border border-white/[0.03] -top-20 left-1/4', delay: 1.5 },
]

function TypewriterText() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let timeout

    if (!isDeleting && displayed.length < currentRole.length) {
      timeout = setTimeout(() => setDisplayed(currentRole.slice(0, displayed.length + 1)), 80)
    } else if (!isDeleting && displayed.length === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, roleIndex])

  return (
    <span className="text-accent">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  )
}

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* Floating geometric shapes */}
      {floatingShapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute pointer-events-none ${shape.class}`}
          animate={{
            y: [0, -20, 10, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            delay: shape.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-max w-full text-center relative z-10">
        {/* Available badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-medium mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, duration: 0.6 }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Currently available for freelance
        </motion.div>

        {/* Main headline */}
        <motion.h1
          className="heading-xl mb-6 text-white"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          I&apos;m Kamal —{' '}
          <br className="md:hidden" />
          <span className="text-white/90">I build things</span>
          <br />
          <span className="text-accent">for the web.</span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          className="text-xl md:text-2xl text-white/60 font-medium mb-10 h-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.6 }}
        >
          <TypewriterText />
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.6 }}
        >
          <button onClick={scrollToProjects} className="btn-primary">
            View My Work
            <FiArrowDown className="w-4 h-4" />
          </button>
          <a
            href="/resume.pdf"
            download
            className="btn-outline"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Social icons */}
        <motion.div
          className="flex justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6, duration: 0.6 }}
        >
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2 text-white/40 hover:text-accent transition-all duration-300 hover:scale-110"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 0.6 }}
      >
        <span className="text-xs text-white/30 uppercase tracking-widest">Scroll</span>
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-accent/50 to-transparent"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ transformOrigin: 'top' }}
        />
      </motion.div>
    </section>
  )
}
