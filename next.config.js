/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['media.graphcms.com', 'media.graphassets.com', 'via.placeholder.com'],
  },
};

module.exports = nextConfig;
