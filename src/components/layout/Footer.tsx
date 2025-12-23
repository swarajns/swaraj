'use client'

import { motion } from 'framer-motion'
import { Heart, ArrowUp } from 'lucide-react'
import { personalInfo } from '@/lib/data'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Swaraj N S
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Digital Marketing Specialist & Web Developer. Building solutions that drive growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-slate-300">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-slate-400 hover:text-purple-400 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-slate-300">Get in Touch</h4>
            <div className="space-y-2 text-slate-400">
              <p>{personalInfo.email}</p>
              <p>{personalInfo.phone}</p>
              <p>{personalInfo.location}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-800">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            © 2025 Swaraj N S. Built with <Heart className="inline w-4 h-4 text-pink-500 fill-pink-500" /> using Next.js & Tailwind CSS
          </p>

          <motion.button
            onClick={scrollToTop}
            className="p-3 bg-slate-900 border border-slate-800 rounded-full hover:bg-purple-500/20 hover:border-purple-500/50 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="w-5 h-5 text-purple-400" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
