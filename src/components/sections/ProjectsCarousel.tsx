'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github, TrendingUp } from 'lucide-react'
import { projects } from '@/lib/data'

export default function ProjectsCarousel() {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"])

  return (
    <section id="projects" className="py-24 bg-slate-900/50 overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">Portfolio</span>
          <h2 className="text-5xl font-bold mt-4 mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto">
            Showcasing successful campaigns, web applications, and automation tools.
          </p>
        </motion.div>
      </div>

      {/* Horizontal Scroll */}
      <motion.div style={{ x }} className="flex gap-8 px-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex-shrink-0 w-[400px]"
          >
            <div className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 h-full">
              {/* Project Image/Gradient */}
              <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                <motion.div
                  className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex gap-4">
                    <motion.button
                      className="p-3 bg-white rounded-full text-slate-900"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={20} />
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

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-sm font-semibold">
                    {project.category}
                  </span>
                </div>

                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-yellow-500/90 rounded-full text-xs font-bold text-slate-900">
                      ⭐ Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-gradient transition-all">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="text-center p-2 bg-slate-800/50 rounded-lg">
                      <div className="text-lg font-bold text-gradient">{value}</div>
                      <div className="text-xs text-slate-500 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-800 rounded-md text-xs text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Accent */}
              <div className={`h-1 bg-gradient-to-r ${project.color}`}></div>
            </div>
          </motion.div>
        ))}

        {/* View All Card */}
        <motion.div
          className="flex-shrink-0 w-[400px] flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
        >
          <div className="bg-slate-900 border-2 border-dashed border-slate-700 rounded-2xl p-12 text-center hover:border-purple-500/50 transition-all cursor-pointer">
            <TrendingUp className="w-16 h-16 mx-auto mb-4 text-purple-400" />
            <h3 className="text-2xl font-bold mb-2">View All Projects</h3>
            <p className="text-slate-400">Explore my complete portfolio</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
