export interface ChildItem {
  title: string;
  href: string;
}

export interface SubItem {
  title: string;
  href?: string;
  icon?: string;
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
        icon: "home",
        children: [
          { title: "Home loan", href: "/services/loan/secured/home" },
          { title: "LAP", href: "/services/loan/secured/property" },
          { title: "Car loan", href: "/services/loan/secured/car" },
          { title: "Machinery Loan", href: "/services/loan/secured/machinery" },
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
    title: "Insurance",
    subItems: [
      {
        title: "Health Insurance",
        href: "/services/insurance/health",
        icon: "health",
      },
      {
        title: "Life Insurance",
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
  {
    title: "Loan (BT n Top Up)",
    subItems: [
      {
        title: "BT & Top-Up",
        icon: "bank",
        children: [
          { title: "Personal Loan BT", href: "/services/loan-bt/personal" },
          { title: "Home Loan BT", href: "/services/loan-bt/home" },
          { title: "LAP BT & Top-Up", href: "/services/loan-bt/lap" },
          { title: "Machinery Loan BT", href: "/services/loan-bt/machinery" },
          { title: "Car Loan BT", href: "/services/loan-bt/car" },
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
    title: "Card",
    subItems: [
      { title: "Credit Card", href: "/services/credit/hdfc", icon: "card" },
    ],
  },
];
