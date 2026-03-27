// data/services.ts

export interface ChildItem {
  title: string;
  href: string;
}

export interface SubItem {
  title: string;
  href?: string;
  icon?: string; // Added to fix "Property 'icon' does not exist"
  children?: ChildItem[];
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
        icon: "home", // You can now add icon keys here
        children: [
          { title: "Home loan", href: "/services/loan/secured/home" },
          {
            title: "Loan against property",
            href: "/services/loan/secured/property",
          },
          { title: "Car loan", href: "/services/loan/secured/car" },
          { title: "Machinery Loan", href: "/services/loan/secured/machinery" },
          { title: "Gold loan", href: "/services/loan/secured/gold" },
        ],
      },
      {
        title: "Unsecured loan",
        icon: "user",
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
      { title: "SIP", href: "/services/mutual-fund/sip", icon: "chart" },
      {
        title: "Lumpsum",
        href: "/services/mutual-fund/lumpsum",
        icon: "coins",
      },
    ],
  },
  {
    title: "Stocks",
    subItems: [
      { title: "M-Stock", href: "/services/stock/mstock", icon: "bank" },
    ],
  },
  {
    title: "Credit Card",
    subItems: [
      { title: "HDFC", href: "/services/credit/hdfc", icon: "shield" },
    ],
  },
  {
    title: "Insurance",
    subItems: [
      {
        title: "Health Insurance",
        href: "/services/insurance/health",
        icon: "health",
      },
      {
        title: "Life Insurance (LI)",
        href: "/services/insurance/lic",
        icon: "user",
      },
      {
        title: "General Insurance",
        href: "/services/insurance/general",
        icon: "shield",
      },
    ],
  },
];
