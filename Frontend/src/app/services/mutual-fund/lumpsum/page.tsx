"use client";

import Image from "next/image";
import LumpsumCalculator from "./LumpsumCalculator";
import InvestmentComparisonContent from "./InvestmentComparisonContent";
import SIPRulesOfThumb from "./SIPRulesOfThumb";
import LumpsumBenefitsUI from "./LumpsumBenefitsUI";
import LumpsumFAQ from "./LumpsumFAQ";

export default function LumpsumInvestmentPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-320px md:h-[500px] lg:h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/lumsum/lumpsum.jpg"
            alt="Lumpsum Investment"
            fill
            className="object-cover object-center md:object-right"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t  via-white/20 to-transparent md:bg-linear-to-r :via-white/30 md:to-transparent" />
        </div>

        <div className="container mx-auto px-4 md:px-12 lg:px-20 relative z-10">
          <div className="max-w-[280px] md:max-w-md lg:max-w-xl text-center md:text-left"></div>
        </div>
      </section>

      {/* --- CALCULATOR SECTION --- */}
      <section className="relative bg-white py-8 md:py-16 -mt-12 md:-mt-20 z-20">
        <div className="max-w-5xl mx-auto px-4">
          <LumpsumCalculator />
        </div>
      </section>
      <section className="bg-white py-10 md:py-5 ">
        <InvestmentComparisonContent />
      </section>

      <section className="bg-white py-10 md:py-5 ">
        <SIPRulesOfThumb />
      </section>
       <section className="bg-white py-10 md:py-5 ">
        <LumpsumBenefitsUI />
      </section>

       <section className="bg-white py-10 md:py-5 ">
        <LumpsumFAQ />
      </section>
      
    </main>
  );
}
