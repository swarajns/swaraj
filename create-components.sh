#!/bin/bash

# Create SkillsShowcase.tsx
cat > src/components/sections/SkillsShowcase.tsx << 'EOF'
'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { skills } from '@/lib/data'

export default function SkillsShowcase() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true })
  const [activeTab, setActiveTab] = useState<'marketing' | 'development' | 'tools'>('marketing')

  return (
    <section id="skills" className="py-24 px-4 bg-slate-950" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mt-4 mb-6">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
        </motion.div>

        <div className="flex justify-center gap-4 mb-12">
          {['marketing', 'development', 'tools'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as typeof activeTab)}
              className={`px-6 py-3 rounded-xl font-semibold ${
                activeTab === tab ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' : 'bg-slate-800'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills[activeTab].map((skill, index) => (
            <div key={index} className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{skill.icon}</span>
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>
                <span className="text-purple-400 font-bold">{skill.level}%</span>
              </div>
              <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ delay: index * 0.1, duration: 1 }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
EOF

echo "✅ Created SkillsShowcase.tsx"
