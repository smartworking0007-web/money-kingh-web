import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    qualities: [75, 95], // Fixed: Allows quality={95}
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.moneykingfinancial.com' }],
        destination: 'https://moneykingfinancial.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;