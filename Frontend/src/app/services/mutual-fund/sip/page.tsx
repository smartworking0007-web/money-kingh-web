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
      {/* --- HERO SECTION (ONLY IMAGE) --- */}
      <section className="relative w-full h-[350px] md:h-[550px] lg:h-[700px]">
        
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Sip/sip.jpeg"
            alt="SIP Investment Banner"
            fill
            // MOBILE FIX: 'object-center' mobile par image ko beech mein rakhega
            // 'md:object-right' laptop par image ko side mein rakhega
            className="object-cover object-[100%_center] md:object-right transition-all duration-700"
            priority
            quality={100}
          />
          
          {/* Halka sa gradient taaki transition smooth lage niche wale section ke saath */}
          <div className="absolute inset-0 bg-linear-to-t from-white/20 to-transparent" />
        </div>
      </section>

      {/* --- CONTENT WRAPPER --- */}
      {/* Laptop par negative margin se ye upar chala jayega, mobile par flat rahega */}
      <div className="relative z-20 bg-white md:-mt-16 rounded-t-32px md:rounded-t-none">
        
        <section className="py-10 md:py-14">
          <SIPMutualFundContent />
        </section>
        
        <section className="py-10 md:py-14">
          <SIPBenefits />
        </section>
        
        <section className="-mt-30 md:py-14">
          <SIPAccordionBenefits />
        </section>
        
        <section className="py-10 md:py-14">
          <HowSIPWorks />
        </section>
        
        <section className="py-10 md:py-14">
          <SIPMistakesSection />
        </section>
        
        <section className="py-10 md:py-14">
          <SIPCalculator />
        </section>
        
        <section className="py-10 md:py-14">
          <SIPTypesTabs />
        </section>
        
        <section className="-mt-10 md:py-14">
          <SIPDocuments />
        </section>
        
        <section className="-mt-20 md:py-14 pb-24">
          <SIPDocumentsFAQ />
        </section>
        
      </div>
    </main>
  );
}