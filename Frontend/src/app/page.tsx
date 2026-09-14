import type { Metadata } from "next";
// import { heroSlides } from "@/data/herosliders"; // Path apne folder structure ke according check kar lein
import { heroSlides } from "@/data/heroSlides"; 
import WhyChoose from "./components/Choose/WhyChoose";
import FinancialPartners from "./components/FinancialPartners/FinancialPartners";
// import Founders from "./components/founders/Founders";
import HeroSlider from "./components/hero/HeroSlideCard";
import LoanCalculator from "./components/LoanCalculator/LoanCalculator";
import ServiceGrid from "./components/Service/ServiceGrid";
import CompanyIntro from "./components/stats/CompanyIntro";
import MutualPartners from "./components/MutualPartners/MutualPartners";
import Testimonials from "./components/Testimonials/Testimonials";
import Kings from "./components/kings/Kings";
import AboutFincart from "./components/AboutFincart/AboutFincart";

export const metadata: Metadata = {
  title: "Money King Financial Services | Loans, Insurance & Wealth Planning",
  description:
    "Explore tailored personal loans, business financing, machinery loans, insurance, and mutual fund advisory with Money King Financial Services.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Yeh raha H1 tag jo SEO extension me count hoga */}
      <h5 className="sr-only whitespace-pre-line">
        {heroSlides[0].title}
      </h5>

      {/* Hero Section */}
      <HeroSlider /> 

      {/* Content Wrapper */}
      <div className="flex flex-col">
        <Kings />
        <CompanyIntro />
        <AboutFincart />
        
        {/* Loan Calculator Section */}
        <div className="relative z-10 py-5 md:py-24 bg-white">
          <LoanCalculator />
        </div>
        
        <div className="relative z-20">
          <ServiceGrid />
        </div>
        
        <FinancialPartners />
        <MutualPartners />
        <WhyChoose />
        {/* <Founders /> */}
        <Testimonials />
      </div>
    </main>
  );
}