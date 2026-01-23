'use client'

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { ArrowDown, Github, Linkedin, Mail, Twitter, Instagram } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="home">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none z-10" />

      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center space-y-8">
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl md:text-9xl font-bold tracking-tight">
              <span className="text-gradient">SWARAJ</span>
            </h1>
          </motion.div>

          {/* Typing Animation */}
          <motion.div
            className="h-24 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <TypeAnimation
              sequence={[
                'Digital Marketing Specialist',
                2000,
                'SEO Expert',
                2000,
                'Next.js Developer',
                2000,
                'Python Automation',
                2000,
                'Growth Hacker',
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="text-2xl md:text-4xl font-semibold text-purple-400"
              repeat={Infinity}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Transforming businesses through data-driven marketing strategies and cutting-edge web solutions.
            <br />
            <span className="text-gradient font-semibold">200% growth</span> achieved in 4 months.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <motion.a
              href="#contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Let's Collaborate
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>

            <motion.a
              href="#work"
              className="px-8 py-4 glass rounded-full font-semibold border border-purple-500/30 hover:border-purple-500 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex gap-6 justify-center pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            {[
              { Icon: Mail, href: 'mailto:swarajns79@gmail.com', label: 'Email' },
              { Icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
              { Icon: Github, href: 'https://github.com', label: 'GitHub' },
              { Icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
              { Icon: Instagram, href:'https://www.instagram.com/swaraj_ns_/', label: 'Instagram'},
            ].map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 glass rounded-full hover:bg-purple-500/20 transition-all group"
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="w-6 h-6 text-purple-400 group-hover:text-purple-300" />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-8 h-8 text-purple-400" />
          </motion.div>
        </div>
      </div>

      {/* Stats Floating Cards */}
      <motion.div
        className="absolute bottom-20 left-10 hidden lg:block"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.div
          className="glass p-6 rounded-2xl glow"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="text-4xl font-bold text-gradient">4+</div>
          <div className="text-sm text-slate-400">Years Experience</div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute top-40 right-10 hidden lg:block"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <motion.div
          className="glass p-6 rounded-2xl glow"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <div className="text-4xl font-bold text-gradient">200%</div>
          <div className="text-sm text-slate-400">Growth Achieved</div>
        </motion.div>
      </motion.div>
    </section>
  )
}
