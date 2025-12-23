'use client'

import { motion } from 'framer-motion'
import { useRef, useState, FormEvent } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, Linkedin, Github, Twitter } from 'lucide-react'
import { personalInfo } from '@/lib/data'

export default function ContactCTA() {
  const ref = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setIsSubmitted(false)
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-24 px-4 bg-slate-900/50" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">Contact</span>
          <h2 className="text-5xl font-bold mt-4 mb-6">
            Let's Build <span className="text-gradient">Something Great</span>
          </h2>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto">
            Have a project in mind? Let's discuss how I can help bring your vision to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Info & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Big CTA Card */}
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-4">Ready to get started?</h3>
              <p className="text-purple-100 mb-6 leading-relaxed">
                Whether you need SEO optimization, web development, or marketing strategy, I'm here to help you achieve your goals.
              </p>
              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-slate-100 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                Send an Email
              </motion.a>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-purple-500/50 transition-all group"
                whileHover={{ x: 10 }}
              >
                <div className="p-3 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                  <Mail className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <div className="text-sm text-slate-400">Email</div>
                  <div className="font-semibold">{personalInfo.email}</div>
                </div>
              </motion.a>

              <motion.a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-4 p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-purple-500/50 transition-all group"
                whileHover={{ x: 10 }}
              >
                <div className="p-3 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                  <Phone className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <div className="text-sm text-slate-400">Phone</div>
                  <div className="font-semibold">{personalInfo.phone}</div>
                </div>
              </motion.a>

              <div className="flex items-center gap-4 p-4 bg-slate-900 border border-slate-800 rounded-xl">
                <div className="p-3 bg-purple-500/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <div className="text-sm text-slate-400">Location</div>
                  <div className="font-semibold">{personalInfo.location}</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-semibold text-slate-400 mb-4">Connect with me</h4>
              <div className="flex gap-4">
                {[
                  { icon: <Linkedin className="w-5 h-5" />, href: personalInfo.socials.linkedin, color: 'hover:bg-blue-600' },
                  { icon: <Github className="w-5 h-5" />, href: personalInfo.socials.github, color: 'hover:bg-slate-700' },
                  { icon: <Twitter className="w-5 h-5" />, href: personalInfo.socials.twitter, color: 'hover:bg-sky-500' }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-slate-900 border border-slate-800 rounded-lg ${social.color} transition-all`}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 relative overflow-hidden">
              {/* Success Overlay */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isSubmitted ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                className="absolute inset-0 bg-slate-900/95 backdrop-blur-sm flex items-center justify-center z-20"
              >
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isSubmitted ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.2, type: 'spring' }}
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-slate-400">I'll get back to you soon.</p>
                </div>
              </motion.div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-slate-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg focus:border-purple-500 focus:outline-none transition-colors text-white placeholder:text-slate-500"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-slate-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg focus:border-purple-500 focus:outline-none transition-colors text-white placeholder:text-slate-500"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-slate-300">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg focus:border-purple-500 focus:outline-none transition-colors resize-none text-white placeholder:text-slate-500"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
