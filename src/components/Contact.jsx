import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'
import { FiMail, FiMapPin, FiSend } from 'react-icons/fi'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_id'
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_id'
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_key'

function InputField({ label, type = 'text', name, value, onChange, error, textarea = false }) {
  const Tag = textarea ? 'textarea' : 'input'
  return (
    <div className="space-y-1">
      <label className="text-white/50 text-xs uppercase tracking-widest font-medium">{label}</label>
      <Tag
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        rows={textarea ? 5 : undefined}
        className={`w-full bg-white/[0.04] border ${
          error ? 'border-red-500/50 focus:border-red-500' : 'border-white/[0.08] focus:border-accent/50'
        } rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm outline-none transition-all duration-300 focus:bg-white/[0.06] resize-none`}
        placeholder={label}
      />
      {error && <p className="text-red-400 text-xs">{error}</p>}
    </div>
  )
}

export default function Contact() {
  const formRef = useRef(null)
  const [ref, inView] = useIntersectionObserver({ threshold: 0.1 })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.email.trim()) errs.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Invalid email address'
    if (!form.message.trim()) errs.message = 'Message is required'
    else if (form.message.trim().length < 20) errs.message = 'Message must be at least 20 characters'
    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    setLoading(true)
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      toast.success('Message sent! I\'ll get back to you soon 🚀', {
        style: { background: '#1a1a1a', color: '#fff', border: '1px solid rgba(0,245,255,0.2)' },
      })
      setForm({ name: '', email: '', message: '' })
    } catch {
      toast.error('Failed to send. Please email me directly.', {
        style: { background: '#1a1a1a', color: '#fff', border: '1px solid rgba(255,80,80,0.2)' },
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="section-padding relative">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-max relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">Get In Touch</p>
          <h2 className="heading-lg text-white">Let&apos;s Build Something Together</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-white/60 text-lg leading-relaxed">
              Whether you have a project in mind, want to collaborate, or just want to say hello — 
              my inbox is always open. I&apos;ll do my best to get back to you within 24 hours.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:kamal@example.com"
                className="flex items-center gap-4 text-white/60 hover:text-accent transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <FiMail className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <div className="text-xs text-white/30 uppercase tracking-wider mb-0.5">Email</div>
                  <div className="text-white/80">kamal@example.com</div>
                </div>
              </a>

              <div className="flex items-center gap-4 text-white/60">
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <FiMapPin className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <div className="text-xs text-white/30 uppercase tracking-wider mb-0.5">Location</div>
                  <div className="text-white/80">Jaipur, Rajasthan, India</div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/[0.08]">
              <p className="text-white/30 text-sm">Response time: usually within 24 hours</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-sm">Available for new projects</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} noValidate className="glass-card p-8 space-y-5">
              <InputField
                label="Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                error={errors.name}
              />
              <InputField
                label="Email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                error={errors.email}
              />
              <InputField
                label="Message"
                name="message"
                value={form.message}
                onChange={handleChange}
                error={errors.message}
                textarea
              />

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-background/40 border-t-background rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <FiSend className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
