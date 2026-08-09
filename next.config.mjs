/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/why-choose-us', destination: '/how-we-work', permanent: true },
      { source: '/faq', destination: '/how-we-work', permanent: true },
      { source: '/gallery', destination: '/products', permanent: true },
      { source: '/meranti-wood', destination: '/products', permanent: true },
    ];
  },
};

export default nextConfig;
