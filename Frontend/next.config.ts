import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  // Ye code www wali site ko non-www (Money King) par redirect karega
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
        permanent: true, // 301 Redirect: Google ko batata hai ki sirf ek hi site hai
      },
    ];
  },
};

export default nextConfig;