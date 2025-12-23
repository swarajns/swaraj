'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, FormEvent, useState } from 'react'
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle } from 'lucide-react'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export default function Contact() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true })
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setIsSubmitted(false)
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'swarajns79@gmail.com',
      href: 'mailto:swarajns79@gmail.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '+91 8431373779',
      href: 'tel:+918431373779'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: 'Ernakulam, Kerala, India',
      href: null
    }
  ]

  return (
    <section id="contact" className="py-20 px-4 bg-slate-900/50" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-4 text-center">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-slate-400 text-center mb-16 text-lg">
            Let's discuss how I can help grow your business
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold mb-6">Let's Connect</h3>
                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  Whether you need SEO optimization, digital marketing campaigns, or custom web development with Next.js and Python, I'm here to help drive your business forward.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        className="flex items-center gap-4 text-slate-300 hover:text-purple-400 transition-colors group"
                      >
                        <motion.div
                          className="p-3 bg-slate-800 rounded-lg group-hover:bg-purple-500/20 transition-colors"
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          transition={{ type: 'spring' }}
                        >
                          {item.icon}
                        </motion.div>
                        <div>
                          <p className="text-sm text-slate-400">{item.label}</p>
                          <p className="font-semibold">{item.value}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 text-slate-300">
                        <div className="p-3 bg-slate-800 rounded-lg">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-sm text-slate-400">{item.label}</p>
                          <p className="font-semibold">{item.value}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-6">
                {[
                  { icon: <Linkedin className="w-6 h-6" />, href: 'https://linkedin.com' },
                  { icon: <Github className="w-6 h-6" />, href: 'https://github.com' }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-800 rounded-lg hover:bg-purple-500/20 hover:text-purple-400 transition-all"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 relative overflow-hidden"
            >
              {/* Success Message Overlay */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isSubmitted ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                className="absolute inset-0 bg-slate-800/95 backdrop-blur-sm flex items-center justify-center z-20"
              >
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isSubmitted ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.2, type: 'spring' }}
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-300">I'll get back to you soon.</p>
                </div>
              </motion.div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg focus:border-purple-500 focus:outline-none transition-colors text-white"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg focus:border-purple-500 focus:outline-none transition-colors text-white"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg focus:border-purple-500 focus:outline-none transition-colors text-white"
                    placeholder="How can I help you?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg focus:border-purple-500 focus:outline-none transition-colors resize-none text-white"
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
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-16 pt-8 border-t border-slate-700 text-center"
          >
            <p className="text-slate-400">
              © 2025 Swaraj N S. Built with <span className="text-pink-500">❤</span> using Next.js & Tailwind CSS
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
