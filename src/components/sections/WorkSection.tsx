'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'

export default function WorkSection() {
  const projects = [
    {
      id: 1,
      title: 'E-commerce SEO Campaign',
      category: 'Marketing',
      description: '200% organic traffic growth in 4 months through strategic SEO optimization, content marketing, and technical improvements.',
      gradient: 'from-purple-600 via-violet-600 to-indigo-600',
      metrics: { traffic: '+200%', revenue: '+150%', keywords: '500+' },
      tags: ['SEO', 'Analytics', 'Content Marketing'],
      featured: true,
    },
    {
      id: 2,
      title: 'Next.js SaaS Platform',
      category: 'Development',
      description: 'Full-stack SaaS application with authentication, subscription payments, real-time analytics, and admin dashboard.',
      gradient: 'from-pink-600 via-rose-600 to-red-600',
      metrics: { users: '1000+', performance: '95%', uptime: '99.9%' },
      tags: ['Next.js', 'TypeScript', 'Supabase', 'Stripe'],
      featured: true,
    },
    {
      id: 3,
      title: 'Python Automation Suite',
      category: 'Automation',
      description: 'Automated web scraping and data collection tools for market research, competitor analysis, and lead generation.',
      gradient: 'from-cyan-600 via-blue-600 to-indigo-600',
      metrics: { dataPoints: '10K+', accuracy: '98%', timeSaved: '80%' },
      tags: ['Python', 'Selenium', 'BeautifulSoup', 'Pandas'],
      featured: false,
    },
    {
      id: 4,
      title: 'Multi-Platform Ad Campaigns',
      category: 'Marketing',
      description: 'Managed Google Ads, Meta Ads, and LinkedIn campaigns with data-driven optimization and high ROI.',
      gradient: 'from-orange-600 via-amber-600 to-yellow-600',
      metrics: { roi: '+300%', ctr: '8.5%', conversions: '+250%' },
      tags: ['Google Ads', 'Meta Ads', 'GTM', 'Analytics'],
      featured: true,
    },
    {
      id: 5,
      title: '3D Product Configurator',
      category: 'Development',
      description: 'Interactive 3D product viewer and customizer built with Three.js and React for e-commerce platform.',
      gradient: 'from-teal-600 via-emerald-600 to-green-600',
      metrics: { engagement: '+400%', conversions: '+180%', bounce: '-60%' },
      tags: ['Three.js', 'React', 'WebGL', '3D'],
      featured: false,
    },
    {
      id: 6,
      title: 'Dropshipping Business',
      category: 'Business',
      description: 'Built and scaled e-commerce dropshipping operation from zero to $50K+ monthly revenue.',
      gradient: 'from-violet-600 via-purple-600 to-fuchsia-600',
      metrics: { revenue: '$50K+', orders: '500+', products: '200+' },
      tags: ['Shopify', 'Meta Ads', 'E-commerce', 'Analytics'],
      featured: false,
    },
  ]

  return (
    <section className="relative py-32 px-4" id="work">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-6xl md:text-7xl font-bold mb-6">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A collection of successful projects spanning marketing campaigns, web applications, and business ventures.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="card-3d h-full glass rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 flex flex-col">
                {/* Gradient Header */}
                <div className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-yellow-500/90 backdrop-blur-sm rounded-full text-xs font-bold text-black flex items-center gap-1">
                        ⭐ Featured
                      </span>
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 glass rounded-full text-sm font-semibold backdrop-blur-md border border-white/20">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Actions */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <motion.button
                      className="p-4 bg-white rounded-full text-black shadow-lg"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label="View project"
                    >
                      <ExternalLink size={20} />
                    </motion.button>
                    <motion.button
                      className="p-4 bg-white rounded-full text-black shadow-lg"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label="View code"
                    >
                      <Github size={20} />
                    </motion.button>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -bottom-1 left-0 right-0 h-20 bg-gradient-to-t from-slate-900 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-gradient transition-all">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 mb-6 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div
                        key={key}
                        className="text-center p-3 bg-slate-900/50 rounded-lg border border-purple-500/10 hover:border-purple-500/30 transition-colors"
                      >
                        <div className="text-base font-bold text-gradient">{value}</div>
                        <div className="text-xs text-slate-500 capitalize mt-1">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-xs text-purple-400 hover:bg-purple-500/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View More Link */}
                  <div className="mt-6 pt-4 border-t border-slate-700">
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold group/link"
                    >
                      View Details
                      <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className={`h-1 bg-gradient-to-r ${project.gradient} opacity-50 group-hover:opacity-100 transition-opacity`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Want to see more?
            <ArrowUpRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
