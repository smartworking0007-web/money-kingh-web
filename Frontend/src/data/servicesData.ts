// src/data/servicesData.ts

export interface ServiceItem {
  id: number;
  title: string;
  image: string;
  href: string;
}

export interface PartnerLogo {
  name: string;
  src: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 1,
    title: "Business Loan",
    image: "/images/servicesimages/s-1.jpg", 
    href: "/services/loan/unsecured/business", 
  },
  {
    id: 2,
    title: "Home Loan",
    image: "/images/servicesimages/s-2.jpg",
    href: "/services/loan/secured/home",
  },
  {
    id: 3,
    title: "Loan Against Property",
    image: "/images/servicesimages/s-3.jpg",
    href: "/services/loan/secured/property",
  },
  {
    id: 4,
    title: "Personal Loan",
    image: "/images/servicesimages/s-4.jpg",
    href: "/services/loan/unsecured/personal",
  },
  {
    id: 5,
    title: "Car Loan",
    image: "/images/servicesimages/s-5.jpg", 
    href: "/services/loan/secured/car",
  },
  {
    id: 6,
    title: "Machinery Loan",
    image: "/images/servicesimages/s-6.jpg",
    href: "/services/loan/secured/machinery",
  },
  {
    id: 7,
    title: "Gold Loan", // Maine title update kar diya context ke hisaab se
    image: "/images/servicesimages/s-7.jpg",
    href: "/services/loan/secured/gold",
  },
  {
    id: 8,
    title: "Open Demat Account",
    image: "/images/servicesimages/s-9.jpeg",
    href: "https://ekyc.mstock.com/Register-with-us?pdc=AE2D3E733",
  },
];

export const partnerLogos: PartnerLogo[] = [
  { name: "Tata Capital", src: "/images/Partners/1.png" },
  { name: "Hero Fincorp", src: "/images/Partners/2.jpg" },
  { name: "Aditya Birla", src: "/images/Partners/3.png" },
  { name: "IIFL Finance", src: "/images/Partners/4.jpg" },
  { name: "Godrej Capital", src: "/images/Partners/5.png" },
  { name: "Godrej Capital Alt", src: "/images/Partners/6.png" },
  { name: "L&T Finance", src: "/images/Partners/7.png" },
  { name: "L&T Finance", src: "/images/Partners/8.png" },
  { name: "L&T Finance", src: "/images/Partners/9.png" },
  { name: "L&T Finance", src: "/images/Partners/10.jpg" },
  { name: "L&T Finance", src: "/images/Partners/11.jpg" },
];