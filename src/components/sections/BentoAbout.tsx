'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, TrendingUp, Rocket, Award, Users, Coffee } from 'lucide-react'

export default function BentoAbout() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true })

  const bentoItems = [
    {
      title: "Marketing Maven",
      description: "4+ years driving growth through SEO, SEM, and data-driven campaigns. Achieved 200% traffic growth in 4 months.",
      icon: <TrendingUp className="w-8 h-8" />,
      gradient: "from-purple-500 to-pink-500",
      size: "lg:col-span-2",
      stats: { value: "200%", label: "Traffic Growth" }
    },
    {
      title: "Web Developer",
      description: "Building modern web applications with Next.js, React & TypeScript.",
      icon: <Code2 className="w-8 h-8" />,
      gradient: "from-blue-500 to-cyan-500",
      size: "lg:col-span-1",
      stats: { value: "50+", label: "Projects" }
    },
    {
      title: "Python Expert",
      description: "Automation & web scraping solutions for data collection and analysis.",
      icon: <Rocket className="w-8 h-8" />,
      gradient: "from-green-500 to-emerald-500",
      size: "lg:col-span-1",
      stats: { value: "10K+", label: "Data Points" }
    },
    {
      title: "Client Success",
      description: "Delivered results for startups, agencies, and e-commerce businesses.",
      icon: <Users className="w-8 h-8" />,
      gradient: "from-orange-500 to-red-500",
      size: "lg:col-span-1",
      stats: { value: "100%", label: "Satisfaction" }
    },
    {
      title: "Always Learning",
      description: "Staying updated with latest trends in marketing, development, and AI.",
      icon: <Award className="w-8 h-8" />,
      gradient: "from-indigo-500 to-purple-500",
      size: "lg:col-span-2",
      stats: { value: "Daily", label: "Learning" }
    }
  ]

  return (
    <section id="about" className="py-24 px-4 bg-slate-950" ref={ref}>
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">About Me</span>
          <h2 className="text-5xl font-bold mt-4 mb-6">
            Bridging <span className="text-gradient">Marketing & Technology</span>
          </h2>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto">
            Combining marketing expertise with technical skills to deliver data-driven results and build scalable solutions.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {bentoItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`${item.size} group relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 p-8 hover:border-purple-500/50 transition-all duration-300`}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${item.gradient} text-white mb-6`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {item.icon}
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">{item.description}</p>

                {/* Stats */}
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-gradient">{item.stats.value}</span>
                  <span className="text-slate-500">{item.stats.label}</span>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Fun Fact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 p-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/20 text-center"
        >
          <Coffee className="w-12 h-12 mx-auto mb-4 text-purple-400" />
          <p className="text-xl text-slate-300">
            <span className="font-bold text-gradient">Fun Fact:</span> I've automated over 100 hours of manual work through Python scripts and love finding creative solutions to complex problems! ☕️
          </p>
        </motion.div>
      </div>
    </section>
  )
}
