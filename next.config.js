/** @type {import('next').NextConfig} */
const path = require("path")
const nextConfig = {
  experimental: {
    appDir: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
    additionalData: `@import "src/styles/variables.scss";`,
  },
  images:{
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
      },
    ],
  }
}

module.exports = nextConfig
