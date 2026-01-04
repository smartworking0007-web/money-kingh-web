export interface PartnerLogo {
  name: string;
  src: string;
}

export interface MutualFundProduct {
  id: number;
  title: string;
  image: string;
  href: string;
}

// 9 most popular / largest mutual fund houses in India
// Ordered roughly by AUM / visibility on retail platforms (Groww, Zerodha Coin, etc.) ~ Dec 2025
export const numberedMutualData: PartnerLogo[] = [
  { name: "SBI Mutual Fund",        src: "/images/mutual/2.webp" },
  { name: "ICICI Prudential",       src: "/images/mutual/3.webp" },
  { name: "Nippon India",           src: "/images/mutual/4.webp" },
  { name: "Aditya Birla Sun Life",  src: "/images/mutual/5.webp" },
  { name: "Kotak Mutual Fund",      src: "/images/mutual/6.webp" },
  { name: "Axis Mutual Fund",       src: "/images/mutual/7.webp" },
  { name: "UTI Mutual Fund",        src: "/images/mutual/8.webp" },
  { name: "Mirae Asset",            src: "/images/mutual/9.webp" },
];

export const partnerLogos: PartnerLogo[] = [
  ...numberedMutualData,
];

export const mutualFundProducts: MutualFundProduct[] = [

  {
    id: 2,
    title: "Debt Funds",
    image: "/images/categories/debt-funds.webp",
    href: "/mutual-funds/debt",
  },
  {
    id: 3,
    title: "Hybrid Funds",
    image: "/images/categories/hybrid-funds.webp",
    href: "/mutual-funds/hybrid",
  },
  {
    id: 4,
    title: "ELSS / Tax Saving",
    image: "/images/categories/elss.webp",
    href: "/mutual-funds/elss",
  },
  {
    id: 5,
    title: "Index Funds",
    image: "/images/categories/index-funds.webp",
    href: "/mutual-funds/index",
  },
  {
    id: 6,
    title: "Sectoral & Thematic",
    image: "/images/categories/sectoral.webp",
    href: "/mutual-funds/sectoral",
  },
  {
    id: 7,
    title: "International Funds",
    image: "/images/categories/international.webp",
    href: "/mutual-funds/international",
  },
  {
    id: 8,
    title: "Gold Funds",
    image: "/images/categories/gold-funds.webp",
    href: "/mutual-funds/gold",
  },
];