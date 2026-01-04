// data/services.ts
export interface SubItem {
  title: string;
  href?: string;
  children?: { title: string; href: string }[];
}

export interface ServiceItem {
  title: string;
  href?: string;
  subItems?: SubItem[];
}

export const services: ServiceItem[] = [
  {
    title: "Loan",
    subItems: [
      {
        title: "Secured Loan",
        children: [
          { title: "Home loan", href: "/services/loan/secured/home" },
          { title: "Loan against property", href: "/services/loan/secured/property" },
          { title: "Car loan", href: "/services/loan/secured/car" },
          { title: "Machinery Loan", href: "/services/loan/secured/machinery" },
          { title: "Gold loan", href: "/services/loan/secured/gold" },
        ],
      },
      {
        title: "Unsecured loan",
        children: [
          { title: "Personal loan", href: "/services/loan/unsecured/personal" },
          { title: "Business loan", href: "/services/loan/unsecured/business" },
        ],
      },
    ],
  },
  {
    title: "Mutual Fund",
    subItems: [
      { title: "SIP", href: "/services/mutual-fund/sip" },
      { title: "Lumpsum", href: "/services/mutual-fund/lumpsum" },
    ],
  },
  {
    title: "Stocks",
    subItems: [
      { title: "PMS, AIF, Demat Ac", href: "/services/stock/pms-aif-demat" },
      { title: "M-Stock", href: "/services/stock/mstock" },
    ],
  },
  {
    title: "Credit Card",
    subItems: [{ title: "HDFC", href: "/services/credit/hdfc" }],
  },
  {
    title: "Insurance",
    subItems: [
      {
        title: "Health Insurance",
        href: "/services/insurance/health",
      },
      {
        title: "Life Insurance (LI)",
        href: "/services/insurance/lic",
      },
      {
        title: "General Insurance",
        href: "/services/insurance/general",
      },
    ],
  },
];