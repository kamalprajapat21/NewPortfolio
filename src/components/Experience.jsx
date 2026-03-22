import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { experiences } from '../data/experience'

function TimelineEntry({ exp, index }) {
  const [ref, inView] = useIntersectionObserver({ threshold: 0.2 })

  return (
    <motion.div
      ref={ref}
      className="relative pl-8 md:pl-16"
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Timeline dot */}
      <div
        className="absolute left-0 top-2 w-4 h-4 rounded-full border-2 z-10"
        style={{
          borderColor: exp.color,
          backgroundColor: 'rgba(10,10,10,1)',
          boxShadow: `0 0 12px ${exp.color}50`,
        }}
      />

      <div className="glass-card p-6 md:p-8 hover:border-white/15 transition-all duration-300">
        <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-4">
          {/* Company initial */}
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold flex-shrink-0"
            style={{
              backgroundColor: `${exp.color}15`,
              border: `1px solid ${exp.color}30`,
              color: exp.color,
              fontFamily: '"Clash Display", sans-serif',
            }}
          >
            {exp.initial}
          </div>
          <div>
            <h3
              className="text-xl font-semibold text-white mb-0.5"
              style={{ fontFamily: '"Clash Display", sans-serif' }}
            >
              {exp.role}
            </h3>
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span style={{ color: exp.color }}>{exp.company}</span>
              <span className="text-white/30">·</span>
              <span className="text-white/40">{exp.period}</span>
            </div>
          </div>
        </div>

        <ul className="space-y-2">
          {exp.highlights.map((highlight, i) => (
            <li key={i} className="flex gap-3 text-white/60 text-sm leading-relaxed">
              <span className="text-accent mt-1 flex-shrink-0">▸</span>
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 20%'],
  })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  const [titleRef, titleInView] = useIntersectionObserver({ threshold: 0.3 })

  return (
    <section id="experience" className="section-padding">
      <div className="container-max">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">Career</p>
          <h2 className="heading-lg text-white">Experience</h2>
        </motion.div>

        <div ref={containerRef} className="relative">
          {/* Animated timeline line */}
          <div className="absolute left-[7px] md:left-[7px] top-0 bottom-0 w-px bg-white/[0.06]">
            <motion.div
              className="w-full bg-gradient-to-b from-accent to-accent/20"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <TimelineEntry key={exp.id} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
