'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download, Sparkles } from 'lucide-react'
import { TypeAnimation } from 'react-type-animation'
import { personalInfo, stats } from '@/lib/data'

export default function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-slate-950">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 min-h-screen items-center py-20">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300">Available for freelance</span>
            </motion.div>

            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-bold">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </h1>

              <div className="text-3xl lg:text-4xl font-semibold text-slate-300 h-20">
                <TypeAnimation
                  sequence={[
                    'Digital Marketer 📊',
                    2000,
                    'SEO Specialist 🎯',
                    2000,
                    'Web Developer 💻',
                    2000,
                    'Next.js Expert ⚛️',
                    2000,
                    'Python Developer 🐍',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </div>

              <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
                {personalInfo.bio}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Work Together
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="/resume.pdf"
                download
                className="px-8 py-4 border-2 border-slate-600 rounded-full font-semibold flex items-center gap-2 hover:border-purple-500 hover:bg-purple-500/10 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                Download CV
              </motion.a>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-8 pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - 3D Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square">
              {/* Floating Card */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border border-slate-700 p-8 shadow-2xl"
              >
                {/* Profile Image Placeholder */}
                <div className="w-full h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl mb-6 flex items-center justify-center">
                  <div className="text-9xl">👨‍💻</div>
                </div>

                {/* Quick Stats */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                    <span className="text-slate-400">Location</span>
                    <span className="font-semibold">📍 Kerala, India</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                    <span className="text-slate-400">Experience</span>
                    <span className="font-semibold">💼 4+ Years</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                    <span className="text-slate-400">Specialization</span>
                    <span className="font-semibold">🚀 Growth Marketing</span>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500 rounded-full filter blur-3xl opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-500 rounded-full filter blur-3xl opacity-50"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-purple-500 rounded-full"></div>
        </motion.div>
      </motion.div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  )
}
