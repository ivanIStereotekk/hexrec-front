/** @type {import('next').NextConfig} */

// That's how we do configure the pics source
const nextConfig = {
    experimental: {
        serverActions: true,
      },
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: '127.0.0.1',
            port: '8000',
            pathname: '/pictures/get/**',
          },
        ],
      },
}

module.exports = nextConfig




