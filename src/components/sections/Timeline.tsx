'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Briefcase, MapPin, Calendar, ChevronRight } from 'lucide-react'
import { experience } from '@/lib/data'

export default function Timeline() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true })
  const [activeIndex, setActiveIndex] = useState(0)

  const colorMap = {
    purple: 'from-purple-500 to-purple-600',
    pink: 'from-pink-500 to-pink-600',
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600'
  }

  return (
    <section id="experience" className="py-24 px-4 bg-slate-900/50" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">Experience</span>
          <h2 className="text-5xl font-bold mt-4 mb-6">
            Professional <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto">
            4+ years of delivering results across marketing, development, and business operations.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                onMouseEnter={() => setActiveIndex(index)}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1">
                  <motion.div
                    className={`w-6 h-6 rounded-full bg-gradient-to-r ${colorMap[item.color as keyof typeof colorMap]} border-4 border-slate-950`}
                    animate={{
                      scale: activeIndex === index ? 1.3 : 1,
                      boxShadow: activeIndex === index ? '0 0 20px rgba(168, 85, 247, 0.6)' : 'none'
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-[calc(50%-2rem)] ml-12 md:ml-0 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  <motion.div
                    className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300 group"
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Year Badge */}
                    <motion.div
                      className={`inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r ${colorMap[item.color as keyof typeof colorMap]} rounded-full mb-4`}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-semibold">{item.year}</span>
                    </motion.div>

                    {/* Company & Role */}
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-gradient transition-all">
                      {item.role}
                    </h3>
                    <div className="flex items-center gap-4 mb-4 text-slate-400">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        <span>{item.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    {/* Achievements */}
                    <ul className="space-y-2">
                      {item.achievements.map((achievement, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: index * 0.2 + idx * 0.1 }}
                          className={`flex items-start gap-2 text-slate-300 ${index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''}`}
                        >
                          <ChevronRight className={`w-5 h-5 text-purple-400 flex-shrink-0 ${index % 2 === 0 ? 'md:rotate-180' : ''}`} />
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
