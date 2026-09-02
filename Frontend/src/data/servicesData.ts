// src/data/servicesData.ts

export interface ServiceItem {
  id: number;
  title: string;
  image: string;
  href: string;
  width: number;
  height: number;
}

export interface PartnerLogo {
  name: string;
  src: string;
  width: number;
  height: number;
}

export const servicesData: ServiceItem[] = [
  {
    id: 1,
    title: "Business Loan",
    image: "/images/servicesimages/s-1.jpg",
    href: "/services/loan/unsecured/business",
    width: 400,
    height: 300,
  },
  {
    id: 2,
    title: "Home Loan",
    image: "/images/servicesimages/s-2.jpg",
    href: "/services/loan/secured/home",
    width: 400,
    height: 300,
  },
  {
    id: 3,
    title: "Loan Against Property",
    image: "/images/servicesimages/s-3.jpg",
    href: "/services/loan/secured/property",
    width: 400,
    height: 300,
  },
  {
    id: 4,
    title: "Personal Loan",
    image: "/images/servicesimages/s-4.jpg",
    href: "/services/loan/unsecured/personal",
    width: 400,
    height: 300,
  },
  {
    id: 5,
    title: "Car Loan",
    image: "/images/servicesimages/s-5.jpg",
    href: "/services/loan/secured/car",
    width: 400,
    height: 300,
  },
  {
    id: 6,
    title: "Machinery Loan",
    image: "/images/servicesimages/s-6.jpg",
    href: "/services/loan/secured/machinery",
    width: 400,
    height: 300,
  },
  {
    id: 7,
    title: "Gold Loan",
    image: "/images/servicesimages/s-7.jpg",
    href: "/services/loan/secured/gold",
    width: 400,
    height: 300,
  },
  {
    id: 8,
    title: "Open Demat Account",
    image: "/images/servicesimages/s-10.jpeg",
    href: "/services/stock/mstock",
    width: 400,
    height: 300,
  },
];

export const partnerLogos: PartnerLogo[] = [
  { name: "Tata Capital", src: "/images/Partners/1.png", width: 160, height: 60 },
  { name: "Hero Fincorp", src: "/images/Partners/2.jpg", width: 160, height: 60 },
  { name: "Aditya Birla", src: "/images/Partners/3.png", width: 160, height: 60 },
  { name: "IIFL Finance", src: "/images/Partners/4.jpg", width: 160, height: 60 },
  { name: "Godrej Capital", src: "/images/Partners/5.png", width: 160, height: 60 },
  { name: "Godrej Capital Alt", src: "/images/Partners/6.png", width: 160, height: 60 },
  { name: "L&T Finance 1", src: "/images/Partners/7.png", width: 160, height: 60 },
  { name: "L&T Finance 2", src: "/images/Partners/8.png", width: 160, height: 60 },
  { name: "L&T Finance 3", src: "/images/Partners/9.png", width: 160, height: 60 },
  { name: "L&T Finance 4", src: "/images/Partners/10.jpg", width: 160, height: 60 },
  { name: "L&T Finance 5", src: "/images/Partners/11.jpg", width: 160, height: 60 },
];