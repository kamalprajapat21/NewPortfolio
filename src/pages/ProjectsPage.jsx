import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiGithub, FiExternalLink, FiArrowLeft } from 'react-icons/fi'
import { projects, categories } from '../data/projects'

const categoryMap = {
  'All': 'all',
  'Frontend': 'frontend',
  'Full Stack': 'fullstack',
  'Open Source': 'opensource',
}

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === categoryMap[activeFilter])

  return (
    <main className="min-h-screen pt-24 pb-20 px-6 md:px-12">
      <div className="container-max mx-auto">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-10 text-sm"
        >
          <FiArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">Portfolio</p>
          <h1 className="heading-lg text-white">All Projects</h1>
        </motion.div>

        {/* Filter */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-accent text-background'
                  : 'border border-white/10 text-white/50 hover:border-accent/40 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              className="glass-card overflow-hidden hover:border-white/15 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className={`h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <span className="text-6xl font-bold text-white/10" style={{ fontFamily: '"Clash Display", sans-serif' }}>
                  {project.title.charAt(0)}
                </span>
              </div>
              <div className="p-6">
                <h3 className="heading-md text-white mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/50 text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-xs rounded-md bg-white/[0.06] border border-white/[0.06] text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors"
                  >
                    <FiGithub className="w-4 h-4" /> Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-white/50 hover:text-accent transition-colors"
                  >
                    <FiExternalLink className="w-4 h-4" /> Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}
