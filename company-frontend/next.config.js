/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  env: {
   
  },
  images: {
    unoptimized: true,
  },
  // Entfernen aller server-seitigen Konfigurationen
}

module.exports = nextConfig