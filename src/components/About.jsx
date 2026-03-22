import { motion } from 'framer-motion'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { useCountUp } from '../hooks/useCountUp'
import { coreSkills } from '../data/skills'

const stats = [
  { value: 25, suffix: '+', label: 'Projects Built' },
  { value: 10, suffix: '+', label: 'Happy Clients' },
  { value: 5, suffix: '', label: 'Years Experience' },
]

function StatCounter({ value, suffix, label }) {
  const [ref, inView] = useIntersectionObserver({ threshold: 0.5 })
  const count = useCountUp(value, 2000, inView)

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-accent" style={{ fontFamily: '"Clash Display", sans-serif' }}>
        {count}{suffix}
      </div>
      <div className="text-white/50 text-sm mt-1">{label}</div>
    </div>
  )
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function About() {
  const [sectionRef, inView] = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        <motion.div
          ref={sectionRef}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
        >
          {/* Left: Photo placeholder */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative max-w-sm mx-auto lg:mx-0">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-accent/10 rounded-3xl blur-2xl" />
              {/* Photo frame */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] aspect-[4/5]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-full bg-accent/10 border-2 border-accent/30 flex items-center justify-center mx-auto mb-4">
                      <span className="text-5xl font-bold text-accent" style={{ fontFamily: '"Clash Display", sans-serif' }}>K</span>
                    </div>
                    <p className="text-white/40 text-sm">Kamal Prajapat</p>
                    <p className="text-accent/60 text-xs mt-1">Full Stack Developer</p>
                  </div>
                </div>
                {/* Decorative corners */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-accent/40 rounded-tl-lg" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-accent/40 rounded-br-lg" />
              </div>
              {/* Floating accent */}
              <motion.div
                className="absolute -right-6 -bottom-6 w-24 h-24 rounded-2xl bg-accent/10 border border-accent/20"
                animate={{ rotate: [0, 5, -5, 0], y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">About Me</p>
              <h2 className="heading-lg text-white mb-6">
                Crafting digital experiences with{' '}
                <span className="text-accent">code & creativity</span>
              </h2>
              <p className="text-white/60 leading-relaxed text-lg">
                I&apos;m a passionate Full Stack Developer based in Jaipur, India with 5+ years of 
                experience building scalable web applications. I specialize in React, Node.js, and 
                cloud infrastructure — turning complex problems into elegant, user-friendly solutions.
              </p>
              <p className="text-white/60 leading-relaxed mt-4">
                When I&apos;m not coding, I contribute to open source, write technical articles, and 
                explore the intersection of design and engineering. I believe great software is both 
                functionally powerful and aesthetically beautiful.
              </p>
            </motion.div>

            {/* Skills */}
            <motion.div variants={itemVariants}>
              <p className="text-white/40 text-xs uppercase tracking-widest mb-4">Core Skills</p>
              <div className="flex flex-wrap gap-2">
                {coreSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-1.5 rounded-full text-sm font-medium bg-white/[0.06] border border-white/[0.08] text-white/80 hover:border-accent/40 hover:text-accent hover:bg-accent/5 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6 pt-6 border-t border-white/[0.08]">
              {stats.map((stat) => (
                <StatCounter key={stat.label} {...stat} />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
