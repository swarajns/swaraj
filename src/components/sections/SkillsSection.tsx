'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(0)

  const categories = [
    {
      name: 'Marketing',
      color: 'purple',
      skills: [
        { name: 'SEO & SEM', level: 95, icon: '🎯' },
        { name: 'Google Ads', level: 90, icon: '📊' },
        { name: 'Meta Ads', level: 90, icon: '📱' },
        { name: 'Analytics', level: 88, icon: '📈' },
        { name: 'Content Marketing', level: 85, icon: '✍️' },
        { name: 'Email Marketing', level: 82, icon: '📧' },
      ],
    },
    {
      name: 'Development',
      color: 'blue',
      skills: [
        { name: 'Next.js', level: 90, icon: '⚛️' },
        { name: 'React', level: 88, icon: '⚡' },
        { name: 'TypeScript', level: 85, icon: '💙' },
        { name: 'Tailwind CSS', level: 92, icon: '🎨' },
        { name: 'Node.js', level: 80, icon: '🟢' },
        { name: 'GraphQL', level: 75, icon: '🔷' },
      ],
    },
    {
      name: 'Automation',
      color: 'green',
      skills: [
        { name: 'Python', level: 85, icon: '🐍' },
        { name: 'Web Scraping', level: 90, icon: '🕷️' },
        { name: 'Selenium', level: 82, icon: '🤖' },
        { name: 'APIs', level: 87, icon: '🔌' },
        { name: 'Data Analysis', level: 80, icon: '📊' },
        { name: 'Automation Scripts', level: 88, icon: '⚙️' },
      ],
    },
  ]

  const colorMap = {
    purple: 'from-purple-600 to-pink-600',
    blue: 'from-blue-600 to-cyan-600',
    green: 'from-green-600 to-emerald-600',
  }

  return (
    <section className="relative py-32 px-4" id="skills">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-6xl md:text-7xl font-bold mb-6">
            Skill <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A comprehensive toolkit spanning marketing, development, and automation.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          {categories.map((category, index) => (
            <motion.button
              key={category.name}
              onClick={() => setActiveCategory(index)}
              className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all ${
                activeCategory === index
                  ? `bg-gradient-to-r ${colorMap[category.color as keyof typeof colorMap]} text-white shadow-lg`
                  : 'glass text-slate-400 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories[activeCategory].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="glass p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              style={{ perspective: 1000 }}
            >
              {/* Icon & Name */}
              <div className="flex items-center gap-4 mb-4">
                <motion.div
                  className="text-5xl"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  {skill.icon}
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold group-hover:text-gradient transition-all">
                    {skill.name}
                  </h3>
                  <p className="text-purple-400 font-semibold">{skill.level}%</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="relative h-3 bg-slate-900 rounded-full overflow-hidden">
                <motion.div
                  className={`absolute inset-y-0 left-0 bg-gradient-to-r ${
                    colorMap[categories[activeCategory].color as keyof typeof colorMap]
                  } rounded-full`}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.8 }}
                />

                {/* Animated Shimmer */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                />
              </div>

              {/* Proficiency Label */}
              <div className="mt-3 text-xs text-slate-500 text-right">
                {skill.level >= 90
                  ? '🏆 Expert'
                  : skill.level >= 80
                  ? '⭐ Advanced'
                  : '✅ Proficient'}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-20 glass p-12 rounded-3xl border border-purple-500/20 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-4">
            Always <span className="text-gradient">Learning</span>
          </h3>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Technology evolves rapidly. I dedicate time daily to learning new tools, frameworks, and strategies to stay ahead of the curve.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
