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
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <HeroSlider />
        <Kings/>
      <CompanyIntro/>
    
      <ServiceGrid/>
      <LoanCalculator/>
      <FinancialPartners/>
      <MutualPartners/>
      <WhyChoose/>
      <Founders/>
      <Testimonials/>

    </main>
    
  );
}