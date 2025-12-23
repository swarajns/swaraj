'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter, CheckCircle, Instagram, } from 'lucide-react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Confetti effect
    gsap.to('.success-icon', {
      scale: [0, 1.5, 1],
      rotation: 360,
      duration: 1,
      ease: 'back.out(1.7)',
    })

    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setIsSubmitted(false)
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="relative py-32 px-4" id="contact">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl md:text-7xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to achieve your goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* CTA Card */}
            <div className="glass p-10 rounded-3xl border border-gradient-to-r from-purple-500/50 to-pink-500/50">
              <h3 className="text-4xl font-bold mb-4 text-gradient">Ready to Start?</h3>
              <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                Whether you need SEO optimization, a modern web application, or marketing automation - I'm here to help transform your vision into reality.
              </p>

              <motion.a
                href="mailto:swarajns79@gmail.com"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                Email Me Directly
              </motion.a>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {[
                {
                  icon: <Mail className="w-6 h-6" />,
                  label: 'Email',
                  value: 'swarajns79@gmail.com',
                  href: 'mailto:swarajns79@gmail.com',
                },
                {
                  icon: <Phone className="w-6 h-6" />,
                  label: 'Phone',
                  value: '+91 8431373779',
                  href: 'tel:+918431373779',
                },
                {
                  icon: <MapPin className="w-6 h-6" />,
                  label: 'Location',
                  value: 'Ernakulam, Kerala, India',
                  href: null,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="glass p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all group"
                  whileHover={{ x: 10, scale: 1.02 }}
                >
                  {item.href ? (
                    <a href={item.href} className="flex items-center gap-4">
                      <div className="p-3 bg-purple-500/10 rounded-xl group-hover:bg-purple-500/20 transition-colors">
                        <div className="text-purple-400">{item.icon}</div>
                      </div>
                      <div>
                        <div className="text-sm text-slate-400">{item.label}</div>
                        <div className="font-semibold text-lg">{item.value}</div>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-purple-500/10 rounded-xl">
                        <div className="text-purple-400">{item.icon}</div>
                      </div>
                      <div>
                        <div className="text-sm text-slate-400">{item.label}</div>
                        <div className="font-semibold text-lg">{item.value}</div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-semibold text-slate-400 mb-4 uppercase tracking-wider">
                Connect on Social
              </h4>
              <div className="flex gap-4">
                {[
                  { Icon: Linkedin, href: 'https://linkedin.com', color: 'hover:bg-blue-600' },
                  { Icon: Github, href: 'https://github.com', color: 'hover:bg-slate-700' },
                  { Icon: Twitter, href: 'https://twitter.com', color: 'hover:bg-sky-500' },
              { Icon: Instagram, href:'https://www.instagram.com/swaraj_ns/', label: 'Instagram'},
                ].map(({ Icon, href, color }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 glass rounded-xl ${color} transition-all`}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="w-6 h-6" />
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
            <div className="glass p-10 rounded-3xl border border-purple-500/20 relative overflow-hidden">
              {/* Success Overlay */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isSubmitted ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                className="absolute inset-0 bg-slate-950/95 backdrop-blur-sm flex items-center justify-center z-20 rounded-3xl"
              >
                <div className="text-center">
                  <motion.div className="success-icon mb-6">
                    <CheckCircle className="w-20 h-20 text-green-500 mx-auto" />
                  </motion.div>
                  <h3 className="text-3xl font-bold mb-2">Message Sent! 🎉</h3>
                  <p className="text-slate-400 text-lg">I'll get back to you within 24 hours.</p>
                </div>
              </motion.div>

              <form  onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2 text-slate-300">
                    Your Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-slate-950 border border-purple-500/30 rounded-xl focus:border-purple-500 focus:outline-none transition-all text-white placeholder:text-slate-500"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 text-slate-300">
                    Email Address
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-slate-950 border border-purple-500/30 rounded-xl focus:border-purple-500 focus:outline-none transition-all text-white placeholder:text-slate-500"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2 text-slate-300">
                    Your Message
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-6 py-4 bg-slate-950 border border-purple-500/30 rounded-xl focus:border-purple-500 focus:outline-none transition-all resize-none text-white placeholder:text-slate-500"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
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
