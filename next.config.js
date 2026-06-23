/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/LOKGEO',
  images: {
    unoptimized: true, // obrigatório com output: 'export'
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
      },
    ],
  },
  experimental: {
    scrollRestoration: true,
  },
}

module.exports = nextConfig