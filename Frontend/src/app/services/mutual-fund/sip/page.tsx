"use client";

import Image from "next/image";
import SIPMutualFundContent from "./SIPMutualFundContent";
import SIPBenefits from "./SIPBenefits";
import SIPAccordionBenefits from "./SIPAccordionBenefits";
import HowSIPWorks from "./HowSIPWorks";
import SIPMistakesSection from "./SIPMistakesSection";
import SIPCalculator from "./SIPCalculator";
import SIPTypesTabs from "./SIPTypesTabs";
import SIPDocumentsFAQ from "./SIPDocumentsFAQ";

export default function LoanAgainstPropertyPage() {
  return (
    <main className="min-h-screen">
      {/* --- HERO SECTION --- */}
      {/* Mobile par height 400px aur Desktop par 600px rakhi hai */}
      <section className="relative w-full h-[400px] md:h-[600px] flex items-center overflow-hidden">
        
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Sip/sip.jpeg"
            alt="Loan Against Property"
            fill
            /* object-right desktop ke liye aur mobile par center-right taaki main subject dikhe */
            className="object-cover object-right md:object-right"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t to-transparent md:bg-linear-to-r md:to-transparent" />
        </div>

  
        <div className="container mx-auto px-6 md:px-20 relative z-10">
          <div className="max-w-xl">
          </div>
        </div>
      </section>
       <section className="bg-white py-10 md:py-5 ">
        <SIPMutualFundContent />
      </section>
      <section className="bg-white py-10 md:py-5 ">
        <SIPBenefits />
      </section>
      <section className="bg-white py-10 md:py-5 ">
        <SIPAccordionBenefits />
      </section>
       <section className="bg-white py-10 md:py-5 ">
        <HowSIPWorks />
      </section>
      <section className="bg-white py-10 md:py-5 ">
        <SIPMistakesSection />
      </section>
       <section className="bg-white py-10 md:py-5 ">
        <SIPCalculator />
      </section>
      <section className="bg-white py-10 md:py-5 ">
        <SIPTypesTabs />
      </section>
        <section className="bg-white py-10 md:py-5 ">
        <SIPDocumentsFAQ />
      </section>
    </main>
  );
}