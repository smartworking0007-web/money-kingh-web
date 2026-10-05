// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   reactCompiler: true,
//   images: {
//     qualities: [75, 95], // Fixed: Allows quality={95}
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'images.unsplash.com',
//       },
//     ],
//   },
//   async redirects() {
//     return [
//       {
//         source: '/:path*',
//         has: [{ type: 'host', value: 'www.moneykingfinancial.com' }],
//         destination: 'https://moneykingfinancial.com/:path*',
//         permanent: true,
//       },
//     ];
//   },
// };

// export default nextConfig;

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
      // 1. WWW to non-WWW redirect (Aapka purana code)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.moneykingfinancial.com' }],
        destination: 'https://moneykingfinancial.com/:path*',
        permanent: true,
      },
      
      // 2. SEO 301 Redirects: Old /Apply URLs to New /services/ URLs
      {
        source: '/Apply/Business-Loan',
        destination: '/services/loan/unsecured/business',
        permanent: true,
      },
      {
        source: '/Apply/Home-Loan',
        destination: '/services/loan/secured/home',
        permanent: true,
      },
      {
        source: '/Apply/Loan-Against-Property',
        destination: '/services/loan/secured/property',
        permanent: true,
      },
      {
        source: '/Apply/Personal-Loan',
        destination: '/services/loan/unsecured/personal',
        permanent: true,
      },
      {
        source: '/Apply/Used-Car-Loan',
        destination: '/services/loan/secured/car',
        permanent: true,
      },
      {
        source: '/Apply/Machinery-Loan',
        destination: '/services/loan/secured/machinery',
        permanent: true,
      },
      {
        source: '/Apply/Bill-Discounting-Loan',
        destination: '/services/loan/bill-discounting',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;