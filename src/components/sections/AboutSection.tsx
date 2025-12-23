'use client'

import { motion } from 'framer-motion'
import { Code2, TrendingUp, Rocket, Zap } from 'lucide-react'

export default function AboutSection() {
  const cards = [
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: 'Marketing Maven',
      description: '4+ years driving growth through SEO, SEM, and data-driven campaigns.',
      stat: '200%',
      label: 'Traffic Growth',
      gradient: 'from-purple-600 to-pink-600',
    },
    {
      icon: <Code2 className="w-12 h-12" />,
      title: 'Full-Stack Developer',
      description: 'Building modern web apps with Next.js, React, and TypeScript.',
      stat: '50+',
      label: 'Projects Built',
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      icon: <Rocket className="w-12 h-12" />,
      title: 'Python Automation',
      description: 'Creating intelligent bots and web scraping solutions.',
      stat: '10K+',
      label: 'Data Points',
      gradient: 'from-green-600 to-emerald-600',
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Performance Focused',
      description: 'Optimizing for speed, SEO, and user experience.',
      stat: '95+',
      label: 'PageSpeed Score',
      gradient: 'from-orange-600 to-red-600',
    },
  ]

  return (
    <section className="relative py-32 px-4 overflow-hidden" id="about">
      {/* Section Title */}
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-6xl md:text-7xl font-bold mb-6">
            Who <span className="text-gradient">I Am</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Bridging the gap between marketing excellence and technical innovation to deliver exceptional results.
          </p>
        </motion.div>

        {/* 3D Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              style={{ perspective: 1000 }}
            >
              <div className="card-3d relative h-full glass p-8 rounded-2xl border border-purple-500/20 overflow-hidden">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                {/* Icon */}
                <motion.div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${card.gradient} text-white mb-6`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {card.icon}
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3 group-hover:text-gradient transition-all">
                  {card.title}
                </h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {card.description}
                </p>

                {/* Stat */}
                <div className="border-t border-slate-700 pt-4 mt-auto">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-gradient">{card.stat}</span>
                    <span className="text-slate-500 text-sm">{card.label}</span>
                  </div>
                </div>

                {/* Hover Effect Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${card.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bio Section */}
        <motion.div
          className="mt-20 glass p-12 rounded-3xl border border-purple-500/20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-6">
                Passionate About <span className="text-gradient">Innovation</span>
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed mb-4">
                With over 4 years of experience, I specialize in creating data-driven marketing campaigns and building scalable web applications that drive real business results.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                My unique blend of marketing expertise and technical skills allows me to bridge the gap between business goals and technical implementation, delivering solutions that truly make an impact.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { skill: 'Digital Marketing & SEO', level: 95 },
                { skill: 'Next.js & React Development', level: 90 },
                { skill: 'Python & Automation', level: 88 },
                { skill: 'UI/UX Design', level: 85 },
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">{item.skill}</span>
                    <span className="text-purple-400">{item.level}%</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-purple-600 to-pink-600"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.level}%` }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ delay: index * 0.1, duration: 0.8 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
