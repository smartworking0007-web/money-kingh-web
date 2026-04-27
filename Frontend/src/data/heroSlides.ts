export type HeroSlide = {
  id: number;
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  contactLink: string; // <-- Add this line to fix the error
};

export const heroSlides: HeroSlide[] = [
  {
  id: 1,
  imageUrl: "/images/frame6.png",
  imageAlt: "Finance Strategy",
  title: "Your Wealth.\nOur Strategy.\nYour Future.",
  description: "Bespoke financial strategies designed for discerning individuals, families, and businesses who demand clarity, precision, and measurable results.",
  // Yahan change karein taaki link dynamic ho jaye
  contactLink: "http://application.dsacrm.com/e22787fa-e05f-4643-a0af-d4a5b98889ba/apply", 
},
];