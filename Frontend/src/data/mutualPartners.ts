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
  { name: "SBI Mutual Fund", src: "/images/mutual/2.jpeg" },
  { name: "ICICI Prudential", src: "/images/mutual/3.png" },
  { name: "Kotak Mutual Fund", src: "/images/mutual/4.jpeg" },
  { name: "Baroda Pioneer Mutual Fund", src: "/images/mutual/5.jpeg" },
  { name: "Canara Robeco Mutual Fund", src: "/images/mutual/6.png" },
  { name: "IDBI Mutual", src: "/images/mutual/7.png" },
  { name: "Choice Mutual Fund", src: "/images/mutual/10.webp" },
  { name: "NJ Mutual Funds", src: "/images/mutual/11.webp" },
  { name: "PGIM India Mutual Fund", src: "/images/mutual/12.png" },
  { name: "Quant Mutual Fund", src: "/images/mutual/13.webp" },
  { name: "Samco Mutual Fund", src: "/images/mutual/14.webp" },
  { name: "Tata Mutual Fund", src: "/images/mutual/15.webp" },
  { name: "Quant Mutual Fund", src: "/images/mutual/16.webp" },
];

export const partnerLogos: PartnerLogo[] = [...numberedMutualData];

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
