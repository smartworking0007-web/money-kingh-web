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
    image: "/images/Partners/1.png",
    href: "/services/loan/unsecured/business",
    width: 400,
    height: 300,
  },
  {
    id: 2,
    title: "Home Loan",
    image: "/images/Partners/2.jpg",
    href: "/services/loan/unsecured/home",
    width: 400,
    height: 300,
  },
  {
    id: 3,
    title: "Loan Against Property",
    image: "/images/Partners/3.png",
    href: "/services/loan/secured/property",
    width: 400,
    height: 300,
  },
  {
    id: 4,
    title: "Personal Loan",
    image: "/images/Partners/4.jpg",
    href: "/services/loan/unsecured/personal",
    width: 400,
    height: 300,
  },
  {
    id: 5,
    title: "Used Car Loan",
    image: "/images/Partners/5.png",
    href: "/services/loan/unsecured/used-car",
    width: 400,
    height: 300,
  },
  {
    id: 6,
    title: "Machinery Loan",
    image: "/images/Partners/6.png",
    href: "/services/loan/unsecured/machinery",
    width: 400,
    height: 300,
  },
  
];

export const partnerLogos: PartnerLogo[] = [
  { name: "Tata Capital", src: "/images/Partners/1.png", width: 140, height: 50 },
  { name: "Hero Fincorp", src: "/images/Partners/2.jpg", width: 140, height: 50 },
  { name: "Aditya Birla", src: "/images/Partners/3.png", width: 140, height: 50 },
  { name: "IIFL Finance", src: "/images/Partners/4.jpg", width: 140, height: 50 },
  { name: "Godrej Capital", src: "/images/Partners/5.png", width: 140, height: 50 },
  { name: "Godrej Capital Alt", src: "/images/Partners/6.png", width: 140, height: 50 },
  { name: "L&T Finance", src: "/images/Partners/7.png", width: 140, height: 50 },
  { name: "L&T Finance", src: "/images/Partners/8.png", width: 140, height: 50 },
  { name: "L&T Finance", src: "/images/Partners/9.png", width: 140, height: 50 },
  { name: "L&T Finance", src: "/images/Partners/10.jpg", width: 140, height: 50 },
  { name: "L&T Finance", src: "/images/Partners/11.jpg", width: 140, height: 50 },
];