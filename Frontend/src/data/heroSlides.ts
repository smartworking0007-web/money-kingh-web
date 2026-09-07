export type HeroSlide = {
  id: number;
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  contactLink: string;
};

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    imageUrl: "/images/frame6.jpg",
    imageAlt: "Finance Strategy",
    title: "Loans & Financial\nServices in India\nMoney King",
    description: "Money King Financial Services connects individuals and businesses with loan, insurance and financial solutions from partner banks, NBFCs and financial institutions across India",
    contactLink: "/contact",
  },
];