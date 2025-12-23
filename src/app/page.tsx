'use client'

import dynamic from 'next/dynamic'
import CustomCursor from '@/components/CustomCursor'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import WorkSection from '@/components/sections/WorkSection'
import SkillsSection from '@/components/sections/SkillsSection'
import ContactSection from '@/components/sections/ContactSection'

const Scene = dynamic(() => import('@/components/3d/Scene'), { ssr: false })

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Scene />
      <CustomCursor />
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <SkillsSection />
      <ContactSection />
      <footer className="relative py-12 px-4 border-t border-purple-500/20">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-slate-400">
            © 2025 Swaraj N S. Built with Next.js & Three.js
          </p>
        </div>
      </footer>
    </main>
  )
}
