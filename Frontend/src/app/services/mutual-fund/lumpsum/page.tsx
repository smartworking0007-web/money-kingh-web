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
      {/* Desktop height thodi badhayi hai taaki image ka laptop part cut na ho */}
      <section className="relative w-full h-[300px] md:h-[400px] lg:h-[1000px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/lumsum/lumsum2.png"
            alt="Lumpsum Investment"
            fill
            // DESKTOP FIX: 'object-bottom' laptop screen ko frame ke upar rakhega
            // MOBILE FIX: 'object-[80%]' subject (person + laptop) ko frame mein layega
            className="object-cover object-[80%_center] md:object-bottom transition-all duration-700"
            priority
            quality={100}
          />

          {/* Smooth Gradients */}
          <div className="absolute inset-0 bg-linear-to-t  via-transparent to-transparent md:hidden" />
          <div className="hidden md:block absolute inset-0 bg-linear-to-r from-white/20 via-transparent to-transparent" />
        </div>
      </section>

      {/* --- CONTENT WRAPPER WITH DIVS --- */}
      {/* Calculator Section - Floating Effect */}
      <div className="relative z-20  py-8 md:py-20 mt-10 md:-mt-32 rounded-t-[40px] md:rounded-t-none">
        <LumpsumCalculator />
      </div>

      <div className="relative z-20  mt-10 md:-mt-25">
        <InvestmentComparisonContent />
      </div>

      <div className="relative z-20 -mt-25 md:py-20">
        <SIPRulesOfThumb />
      </div>

      <div className="relative z-20  mt-10 md:-mt-25">
        <LumpsumBenefitsUI />
      </div>

      <div className="relative z-20 bg-white mt-10 md:-mt-20 pb-24">
        <LumpsumFAQ />
      </div>
    </main>
  );
}