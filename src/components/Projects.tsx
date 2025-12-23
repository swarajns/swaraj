'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Code, Github, Eye } from 'lucide-react'
import Tilt from 'react-parallax-tilt'

interface Project {
  title: string
  description: string
  tags: string[]
  metrics: string
  image?: string
  link?: string
  github?: string
  color: string
}

export default function Projects() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true })
  const [activeFilter, setActiveFilter] = useState('All')

  const projects: Project[] = [
    {
      title: "E-commerce SEO Campaign",
      description: "Increased organic traffic by 200% in 4 months through comprehensive SEO strategy including technical optimization, content creation, and link building.",
      tags: ["SEO", "Analytics", "Content"],
      metrics: "200% Traffic Increase",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Next.js Portfolio Platform",
      description: "Built modern, responsive portfolio websites using Next.js, React, and Tailwind CSS with advanced animations and optimal performance.",
      tags: ["Next.js", "React", "Tailwind"],
      metrics: "Custom Development",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Python Web Scraping Tool",
      description: "Developed automated web scraping solutions using Python for market research, competitor analysis, and data collection for marketing campaigns.",
      tags: ["Python", "Automation", "Data"],
      metrics: "Automated Collection",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Dropshipping Business",
      description: "Founded and managed successful dropshipping operation with complete business setup, product research, Meta Ads optimization, and profit management.",
      tags: ["E-commerce", "Meta Ads", "Business"],
      metrics: "Full Operations",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Multi-Platform Ad Campaigns",
      description: "Executed data-driven advertising campaigns across Google Ads, Meta Ads, and LinkedIn with conversion tracking and performance optimization.",
      tags: ["Google Ads", "Meta Ads", "GTM"],
      metrics: "Cross-Platform Success",
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "WordPress & Shopify Solutions",
      description: "Developed and optimized multiple WordPress and Shopify websites with custom themes, plugins, and e-commerce functionality.",
      tags: ["WordPress", "Shopify", "E-commerce"],
      metrics: "Multiple Deployments",
      color: "from-pink-500 to-rose-500"
    }
  ]

  const filters = ['All', 'Marketing', 'Development', 'E-commerce']

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => 
        p.tags.some(tag => tag.toLowerCase().includes(activeFilter.toLowerCase()))
      )

  return (
    <section id="projects" className="py-20 px-4 bg-slate-950" ref={ref}>
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-4 text-center">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-400 text-center mb-12 text-lg">
            Showcasing marketing campaigns and development work
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter}
              </motion.button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                layout
              >
                <Tilt
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  perspective={1000}
                  scale={1.05}
                  transitionSpeed={2000}
                  gyroscope={true}
                >
                  <div className="bg-slate-800/50 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 overflow-hidden group h-full">
                    {/* Project Image Placeholder with Gradient */}
                    <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                      <motion.div
                        className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ scale: 1.1 }}
                      >
                        <div className="flex gap-4">
                          <motion.button
                            className="p-3 bg-white rounded-full text-slate-900"
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Eye size={20} />
                          </motion.button>
                          <motion.button
                            className="p-3 bg-white rounded-full text-slate-900"
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Github size={20} />
                          </motion.button>
                        </div>
                      </motion.div>
                      <Code className="absolute top-4 right-4 text-white/70 w-8 h-8" />
                    </div>

                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-gradient transition-all">
                        {project.title}
                      </h3>
                      <p className="text-slate-300 mb-4 leading-relaxed text-sm">
                        {project.description}
                      </p>
                      
                      <div className="mb-4">
                        <span className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full text-sm font-semibold text-purple-300 border border-purple-500/30">
                          {project.metrics}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, idx) => (
                          <motion.span
                            key={idx}
                            className="px-3 py-1 bg-slate-700/50 rounded-md text-xs text-slate-400 hover:bg-slate-700 transition-colors"
                            whileHover={{ scale: 1.1 }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
