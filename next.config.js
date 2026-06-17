/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
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
    // Faz o Next restaurar a posição de rolagem ao recarregar a página (F5),
    // evitando que o site sempre "volte pro topo".
    scrollRestoration: true,
  },
}

module.exports = nextConfig
