'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface StatCard {
  value: string
  description: string
  color: 'primary' | 'secondary' | 'accent'
}

export default function About() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true })

  const stats: StatCard[] = [
    {
      value: "200%",
      description: "Organic Traffic Growth in 4 Months",
      color: "primary"
    },
    {
      value: "4+ Years",
      description: "Digital Marketing Experience",
      color: "secondary"
    },
    {
      value: "Multi-Platform",
      description: "WordPress, Shopify, Next.js Expertise",
      color: "accent"
    }
  ]

  const getColorClass = (color: 'primary' | 'secondary' | 'accent'): string => {
    const colors = {
      primary: 'text-primary',
      secondary: 'text-secondary',
      accent: 'text-accent'
    }
    return colors[color]
  }

  return (
    <section id="about" className="py-20 px-4 bg-slate-900/50" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-12 text-center">
            About <span className="text-gradient">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gradient">
                Marketing Professional & Developer
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                With <span className="text-primary font-semibold">4+ years of experience</span>, I drive growth through SEO, paid advertising, and content strategy. I specialize in developing and executing data-driven campaigns that optimize performance, boost customer acquisition, and enhance brand visibility across digital channels.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                My technical expertise includes <span className="text-secondary font-semibold">Next.js development</span> and <span className="text-secondary font-semibold">Python web scraping</span>, enabling me to build custom solutions that bridge marketing and technology.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                I'm experienced in leveraging analytics to design incentive programs, manage cross-functional initiatives, and deliver measurable business impact.
              </p>
            </div>

            <div className="space-y-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-primary transition-colors"
                >
                  <h4 className={`text-2xl font-bold ${getColorClass(stat.color)} mb-2`}>
                    {stat.value}
                  </h4>
                  <p className="text-slate-300">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
