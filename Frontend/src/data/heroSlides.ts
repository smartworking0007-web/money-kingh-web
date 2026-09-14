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
    description:
      "Apply for personal loans, business loans, insurance, and mutual funds with Money King Financial Services. Get expert financial solutions in India.",
    contactLink: "/contact",
  },
];