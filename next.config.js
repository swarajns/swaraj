/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  transpilePackages: [
    'three',
    '@react-three/fiber',
    '@react-three/drei',
    'react-parallax-tilt'
  ]
}

module.exports = nextConfig
