'use client'

import dynamic from 'next/dynamic'
import SmoothScroll from '@/components/SmoothScroll'
import CustomCursor from '@/components/CustomCursor'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import WorkSection from '@/components/sections/WorkSection'
import SkillsSection from '@/components/sections/SkillsSection'
import ContactSection from '@/components/sections/ContactSection'

// Load 3D scene dynamically (client-side only)
const Scene = dynamic(() => import('@/components/3d/Scene'), { ssr: false })

export default function ClientLayout() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen">
        {/* 3D Background Scene */}
        <Scene />

        {/* Custom Cursor */}
        <CustomCursor />

        {/* Sections */}
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <SkillsSection />
        <ContactSection />

        {/* Footer */}
        <footer className="relative py-12 px-4 border-t border-purple-500/20">
          <div className="container mx-auto max-w-6xl text-center">
            <p className="text-slate-400">
              © 2025 Swaraj N S. Crafted with <span className="text-pink-500">❤️</span> using Next.js & Three.js
            </p>
          </div>
        </footer>
      </main>
    </SmoothScroll>
  )
}
