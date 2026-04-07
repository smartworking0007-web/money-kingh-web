import WhyChoose from "./components/Choose/WhyChoose";
import FinancialPartners from "./components/FinancialPartners/FinancialPartners";
import Founders from "./components/founders/Founders";
import HeroSlider from "./components/hero/HeroSlideCard";
import LoanCalculator from "./components/LoanCalculator/LoanCalculator";
import ServiceGrid from "./components/Service/ServiceGrid";
import CompanyIntro from "./components/stats/CompanyIntro";
import MutualPartners from "./components/MutualPartners/MutualPartners";
import Testimonials from "./components/Testimonials/Testimonials";
import Kings from "./components/kings/Kings";
import AboutFincart from "./components/AboutFincart/AboutFincart";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Hero Section */}
      <HeroSlider />
      
      {/* Content Wrapper with vertical spacing (gap) */}
      <div className="flex flex-col">
        <Kings />
        
        {/* Company Intro Section */}
        <CompanyIntro />
        <AboutFincart />
        
        {/* Loan Calculator Section - Padding add ki gayi hai overlap rokne ke liye */}
        <div className="relative z-10 py-5 md:py-24 bg-white">
          <LoanCalculator />
        </div>
        <div className="relative z-20">
          <ServiceGrid />
        </div>

        <FinancialPartners />
        <MutualPartners />
        <WhyChoose />
        <Founders />
        <Testimonials />
      </div>
    </main>
  );
}