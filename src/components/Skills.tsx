'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Code2, TrendingUp, Palette, Database, Search, Globe } from 'lucide-react'

interface Skill {
  name: string
  level: number
}

interface SkillCategory {
  icon: JSX.Element
  title: string
  skills: Skill[]
}

export default function Skills() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const skillCategories: SkillCategory[] = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Digital Marketing",
      skills: [
        { name: "SEO", level: 95 },
        { name: "Google Ads", level: 90 },
        { name: "Meta Ads", level: 90 },
        { name: "Analytics", level: 85 },
      ]
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Web Development",
      skills: [
        { name: "Next.js", level: 90 },
        { name: "React", level: 88 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 92 },
      ]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend & Tools",
      skills: [
        { name: "Python", level: 85 },
        { name: "Web Scraping", level: 90 },
        { name: "API Integration", level: 87 },
        { name: "Git", level: 85 },
      ]
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-slate-900/50" ref={ref}>
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-4 text-center">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-slate-400 text-center mb-16 text-lg">
            Comprehensive skill set across marketing, development, and analytics
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 relative overflow-hidden group"
              >
                {/* Glow Effect on Hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="relative z-10">
                  <motion.div
                    className="text-purple-400 mb-4"
                    animate={{ rotate: hoveredIndex === index ? 360 : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {category.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-6">{category.title}</h3>

                  <div className="space-y-4">
                    {category.skills.map((skill, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between mb-2">
                          <span className="text-slate-300">{skill.name}</span>
                          <span className="text-purple-400 font-semibold">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ delay: (index * 0.1) + (idx * 0.1), duration: 1 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
