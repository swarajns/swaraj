'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, Calendar } from 'lucide-react'

interface Experience {
  title: string
  company: string
  location: string
  period: string
  achievements: string[]
}

export default function Experience() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true })

  const experiences: Experience[] = [
    {
      title: "Digital Marketing Specialist",
      company: "Paywise Technologies Pvt. Ltd.",
      location: "Bangalore, India",
      period: "Nov 2024 - May 2025",
      achievements: [
        "Increased organic traffic by 200% in 4 months",
        "Managed Meta Ads & Google Ads campaigns",
        "Social Media Management across platforms",
        "Website Development (WordPress, Shopify)",
        "LinkedIn Advertising campaigns",
        "Script and Content Creation",
        "Email & WhatsApp Marketing automation"
      ]
    },
    {
      title: "Founder & Dropshipping Manager",
      company: "Piqstor",
      location: "Kerala, India",
      period: "Dec 2023 - Oct 2024",
      achievements: [
        "Established & managed dropshipping business",
        "Product Research & Market Analysis",
        "Budgeting, profit analysis, and expense management",
        "Creating and Optimizing Meta Ads",
        "Full business operations management"
      ]
    },
    {
      title: "SEO Analyst",
      company: "Growth.cx",
      location: "Kerala, India",
      period: "May 2023 - Dec 2023",
      achievements: [
        "On-Page, Off-Page & Technical SEO",
        "Conversion Tracking with GA & GTM",
        "Local & International SEO Optimization",
        "Multiple Project Management",
        "Creating & Implementing Tailored SEO Strategies",
        "Outreaching for Link building",
        "Monitoring & Reporting Performance"
      ]
    },
    {
      title: "SEO Executive (Ecommerce)",
      company: "Sreedhareeeyam Farmherbs India Pvt. Ltd",
      location: "Kerala, India",
      period: "April 2022 - May 2023",
      achievements: [
        "Keyword Research, On-Page, Off-Page, Local SEO",
        "Website Admin Management",
        "Social Media Account Management",
        "E-commerce optimization strategies"
      ]
    },
    {
      title: "Documentation Executive",
      company: "Ancheril Agencies",
      location: "Kerala, India",
      period: "April 2021 - April 2022",
      achievements: [
        "Import and Export Documentation and Operations",
        "Shipping Bill Filing",
        "Phytosanitary Clearing Procedure",
        "Bunkering Documentation and Operations"
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-slate-900/50" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-4 text-center">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-slate-400 text-center mb-16 text-lg">
            4+ years of driving growth and delivering results
          </p>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-primary transition-all duration-300 card-hover"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <Briefcase size={18} />
                      <p className="text-lg font-semibold">{exp.company}</p>
                    </div>
                    <p className="text-slate-400">{exp.location}</p>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 mt-4 md:mt-0">
                    <Calendar size={18} />
                    <span>{exp.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-300">
                      <span className="text-primary mt-1">▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
