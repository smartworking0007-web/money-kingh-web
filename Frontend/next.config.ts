import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  // 1. External Images Allow Karein (Unsplash fix)
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  // 2. WWW to Non-WWW Redirect (Money King)
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.moneykingfinancial.com',
          },
        ],
        destination: 'https://moneykingfinancial.com/:path*',
        permanent: true, // 301 Redirect
      },
    ];
  },
};

export default nextConfig;