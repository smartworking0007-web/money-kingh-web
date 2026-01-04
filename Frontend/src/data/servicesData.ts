// src/data/servicesData.ts

export interface ServiceItem {
  id: number;
  title: string;
  image: string;
  href: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 1,
    title: "Business Loan",
    image: "/images/servicesimages/s-1.jpg", 
    href: "/Apply/Business-Loan", 
  },
  {
    id: 2,
    title: "Home Loan",
    image: "/images/servicesimages/s-2.jpg",
    href: "/Apply/Home-Loan",
  },
  {
    id: 3,
    title: "Loan Against Property",
    image: "/images/servicesimages/s-3.jpg",
    href: "/Apply/Loan-Against-Property",
  },
  {
    id: 4,
    title: "Personal Loan",
    image: "/images/servicesimages/s-4.jpg",
    href: "/Apply/Personal-Loan",
  },
  {
    id: 5,
    title: "Used Car Loan",
    image: "/images/servicesimages/s-5.jpg", 
    href: "/Apply/Used-Car-Loan",
  },
  {
    id: 6,
    title: "Machinery Loan",
    image: "/images/servicesimages/s-6.jpg",
    href: "/Apply/Machinery-Loan",
  },
  {
    id: 7,
    title: "Bill Discounting Loan",
    image: "/images/servicesimages/s-7.jpg",
    href: "/Apply/Bill-Discounting-Loan",
  },
  {
    id: 8,
    title: "Working Capital",
    image: "/images/servicesimages/s-8.jpg",
    href: "/Apply/Working-Capital",
  },
];