import { motion } from 'framer-motion'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { skillCategories, allSkills } from '../data/skills'

// Duplicate for seamless loop
const marqueeItems = [...allSkills, ...allSkills]

export default function Skills() {
  const [ref, inView] = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section id="skills" className="section-padding overflow-hidden">
      <div className="container-max mb-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">Technologies</p>
          <h2 className="heading-lg text-white">My Toolkit</h2>
        </motion.div>
      </div>

      {/* Infinite Marquee */}
      <div className="relative mb-16">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-6 min-w-max"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          >
            {marqueeItems.map((skill, i) => (
              <div
                key={`${skill}-${i}`}
                className="flex-shrink-0 px-5 py-2.5 rounded-full border border-white/[0.08] bg-white/[0.04] text-white/60 text-sm font-medium whitespace-nowrap hover:border-accent/40 hover:text-accent transition-all duration-300"
              >
                {skill}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Category grid */}
      <div className="container-max">
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              className="glass-card p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              <h3 className="text-white/40 text-xs uppercase tracking-widest mb-4 font-semibold">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-xs rounded-md bg-white/[0.06] text-white/70 hover:text-accent hover:bg-accent/10 transition-all duration-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
