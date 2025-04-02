/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['source.unsplash.com', 'i.pravatar.cc'],
    unoptimized: true,
  },
};

export default nextConfig;