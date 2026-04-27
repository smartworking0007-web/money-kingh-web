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
      {/* --- HERO SECTION --- */}
      {/* Mobile height 450px rakhi hai taaki image clear dikhe */}
      <section className="relative w-full h-[500px] md:h-[550px] lg:h-[750px] overflow-hidden">
        
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Sip/sip3.jpeg"
            alt="SIP Investment Banner"
            fill
            // MOBILE: object-[75%] se main content center-right mein shift hoga
            // DESKTOP: object-right se design balance rahega
            className="object-cover object-[75%_center] md:object-right transition-all duration-700"
            priority
            quality={100}
          />
          
          {/* Transition Gradient (Tailwind v4 syntax compliant) */}
          <div className="absolute inset-0 bg-linear-to-t  via-white/5 to-transparent" />
        </div>
      </section>

      {/* --- CONTENT WRAPPER --- */}
      {/* -mt-10 mobile par aur -mt-20 desktop par design ko image ke upar float karwayega */}
      <div className="relative z-20 bg-white -mt-10 md:-mt-20 rounded-t-[40px] md:rounded-t-none">
        
        <section className="py-12 md:py-16">
          <SIPMutualFundContent />
        </section>
        
        <section className="py-10 md:py-14">
          <SIPBenefits />
        </section>
        
        {/* Spacing Fix: Mobile par negative margins overlap kar rahe the, unhe clean kiya hai */}
        <section className="py-10 md:py-14 bg-slate-50/50">
          <SIPAccordionBenefits />
        </section>
        
        <section className="py-10 md:py-14">
          <HowSIPWorks />
        </section>
        
        <section className="py-10 md:py-14 bg-slate-50/50">
          <SIPMistakesSection />
        </section>
        
        <section className="py-10 md:py-14">
          <div className="max-w-7xl mx-auto px-4">
            <SIPCalculator />
          </div>
        </section>
        
        <section className="py-10 md:py-14">
          <SIPTypesTabs />
        </section>
        
        {/* Document section spacing reset */}
        <section className="py-10 md:py-14">
          <SIPDocuments />
        </section>
        
        <section className="py-10 md:py-14 pb-24">
          <SIPDocumentsFAQ />
        </section>
        
      </div>
    </main>
  );
}