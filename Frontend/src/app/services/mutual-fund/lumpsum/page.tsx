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
      {/* Mobile par h-[400px] fix kiya hai aur Laptop par 600px tak */}
      <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/lumsum/lumpsum.jpg"
            alt="Lumpsum Investment"
            fill
            // object-[75%] se mobile par image ka main subject (coins/investment) center mein dikhega
            className="object-cover object-[75%_center] md:object-right transition-all duration-500"
            priority
          />

          {/* Responsive Overlay Gradient - Tailwind v4 syntax used correctly */}
          {/* Mobile: Bottom to Top gradient for white text readability */}
          <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent md:hidden" />

          {/* Desktop: Left to Right gradient (Pehle jaisa) */}
          <div className="hidden md:block absolute inset-0 bg-linear-to-r from-white/60 via-white/20 to-transparent" />
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          {/* Empty div for spacing, agar text add karna ho toh yahan karein */}
          <div className="max-w-[280px] md:max-w-md lg:max-w-xl"></div>
        </div>
      </section>

      {/* --- CONTENT WRAPPER --- */}
      {/* Mobile par rounded corners aur -mt-10 se ye image ke upar float karega */}
      <div className="relative z-20 bg-white -mt-10 md:-mt-20 rounded-t-32px md:rounded-t-none">
        {/* --- CALCULATOR SECTION --- */}
        <section className="py-10 md:py-16">
          <div className="max-w-5xl mx-auto px-4"></div>
        </section>

        <div className="relative z-20 bg-white space-y-16 md:space-y-24 py-8 md:py-20 -mt-10 md:-mt-24">
          <LumpsumCalculator />
        </div>
        <div className="relative z-20 bg-white space-y-16 md:space-y-24 py-8 md:py-20 -mt-10 md:-mt-24">
          <InvestmentComparisonContent />
        </div>
        <div className="relative z-20 bg-white space-y-16 md:space-y-24 py-8 md:py-20 -mt-10 md:-mt-24">
          <SIPRulesOfThumb />
        </div>
        <div className="relative z-20 bg-white space-y-16 md:space-y-24 py-8 md:py-20 -mt-10 md:-mt-24">
          <LumpsumBenefitsUI />
        </div>
        <div className="relative z-20 bg-white space-y-16 md:space-y-24 py-8 md:py-20 -mt-10 md:-mt-24">
          <LumpsumFAQ />
        </div>
      </div>
    </main>
  );
}
