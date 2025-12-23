'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState('default')

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', mouseMove)

    // Add hover effects
    const links = document.querySelectorAll('a, button')
    links.forEach((link) => {
      link.addEventListener('mouseenter', () => setCursorVariant('hover'))
      link.addEventListener('mouseleave', () => setCursorVariant('default'))
    })

    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      scale: 1,
    },
    hover: {
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      scale: 1.5,
      backgroundColor: 'rgba(168, 85, 247, 0.2)',
    },
  }

  return (
    <>
      <motion.div
        className="cursor hidden md:block"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />
      <motion.div
        className="cursor-dot hidden md:block"
        animate={{ x: mousePosition.x - 4, y: mousePosition.y - 4 }}
        transition={{ type: 'spring', stiffness: 1000, damping: 50 }}
      />
    </>
  )
}
