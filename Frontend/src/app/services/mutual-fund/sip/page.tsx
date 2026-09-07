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
import SIPDocuments from "./SIPDocuments";

export default function LoanAgainstPropertyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* --- HERO BANNER SECTION --- */}
      {/* Mobile: 16/9 ya 4/3 ratio me image bina kate clear dikhegi */}
      {/* Desktop: 21/9 widescreen me natural fit hogi */}
      <section className="relative w-full aspect-16/10 sm:aspect-16/9 md:aspect-21/9 max-h-[650px] bg-slate-100 overflow-hidden">
        <Image
          src="/images/Sip/sip3.jpeg"
          alt="SIP Investment Banner"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
          quality={95}
        />
        
        {/* Subtle Bottom Fade */}
        <div className="absolute inset-x-0 bottom-0 h-16 md:h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* --- MAIN CONTENT SECTIONS --- */}
      <div className="relative z-10 bg-white">
        
        <section className="py-8 md:py-5">
          <SIPMutualFundContent />
        </section>
        
        <section className="py-6 md:py-5">
          <SIPBenefits />
        </section>
        
        <section className="py-6 md:py-10">
          <SIPAccordionBenefits />
        </section>
        
        <section className="py-8 md:py-5">
          <HowSIPWorks />
        </section>
        
        <section className="py-8 md:py-12">
          <SIPMistakesSection />
        </section>
        
        <section className="py-8 md:py-10">
          <div className="max-w-7xl mx-auto px-4">
            <SIPCalculator />
          </div>
        </section>
        
        <section className="py-8 md:py-12">
          <SIPTypesTabs />
        </section>
        
        <section className="-my-10 md:py-5">
          <SIPDocuments />
        </section>
        
        <section className="py-8 md:py-14 pb-20">
          <SIPDocumentsFAQ />
        </section>
        
      </div>
    </main>
  );
}