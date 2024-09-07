/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enables strict mode for React
  swcMinify: true, // Enables SWC-based minification for faster builds
  images: {
    domains: ['ucarecdn.com', 'barkprotocol.net'], // Add more domains if needed
    formats: ['image/avif', 'image/webp'], // Support modern image formats for better compression
  },
  webpack(config) {
    // Modify the Webpack config if needed
    return config;
  },
  // Optional: Add future experimental features here
  experimental: {
    scrollRestoration: true, // Enables browser scroll position restoration between navigation
  },
};

export default nextConfig;
