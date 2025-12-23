/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: 'loose'
  },
  transpilePackages: [
    'three',
    '@react-three/fiber',
    '@react-three/drei'
  ],
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      three: require.resolve('three')
    }
    return config
  }
}

module.exports = nextConfig
