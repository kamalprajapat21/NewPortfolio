import { Link } from 'react-router-dom'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { motion } from 'framer-motion'

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { icon: FiGithub, href: 'https://github.com/kamalprajapat21', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/kamalprajapat', label: 'LinkedIn' },
  { icon: FiTwitter, href: 'https://twitter.com/kamalprajapat', label: 'Twitter' },
]

export default function Footer() {
  const scrollTo = (href) => {
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-white/[0.06] py-12 px-6 md:px-12">
      <div className="container-max">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-accent"
            style={{ fontFamily: '"Clash Display", sans-serif' }}
          >
            K.
          </Link>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollTo(link.href)
                }}
                className="text-sm text-white/40 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 text-white/30 hover:text-accent transition-all duration-300 hover:scale-110"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-sm">
            Built with <span className="text-red-400">❤️</span> by Kamal
          </p>
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} Kamal Prajapat. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
