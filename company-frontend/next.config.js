/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_API_URL: process.env.DOCKER === 'true' ? 'http://backend:8082' : 'http://localhost:8082',
    NEXT_PUBLIC_BASE_URL: process.env.DOCKER === 'true' ? 'http://localhost' : 'http://localhost:3001'
  },
  images: {
    unoptimized: true,
  },
  // Entfernen aller server-seitigen Konfigurationen
}

module.exports = nextConfig