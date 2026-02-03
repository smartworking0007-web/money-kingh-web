export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
  rating: number;
}

export const testimonialData: TestimonialItem[] = [
  {
    id: 1,
    name: "Sumit Kumar",
    role: "Business Owner",
    content: "The loan process was incredibly smooth. I received my funds within 24 hours just as promised. Truly the best financial service!",
    image: "/images/Testimonial/1.jpeg", 
    rating: 5,
  },
  {
    id: 2,
    name: "Pooja ",
    role: "Software Engineer",
    content: "Lowest interest rates I could find in the market. The user-friendly dashboard made tracking my application very easy.",
    image: "/images/Testimonial/2.jpeg", 
    rating: 4,
  },
  {
    id: 3,
    name: "Tanu Verma",
    role: "Entrepreneur",
    content: "Secured database and minimal documentation. I felt safe sharing my details and the approval was lightning fast.",
    image: "/images/Testimonial/3.jpeg", 
    rating: 4,
  },
];