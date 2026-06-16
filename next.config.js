/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Faz o Next restaurar a posição de rolagem ao recarregar a página (F5),
    // evitando que o site sempre "volte pro topo".
    scrollRestoration: true,
  },
}

module.exports = nextConfig
