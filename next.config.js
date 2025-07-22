/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd3atms9ic4lahi.cloudfront.net',
      },
    ],
  },
};

module.exports = nextConfig;
