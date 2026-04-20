"use client";
import Image from "next/image";
import GeneralInsuranceContent from "./GeneralInsuranceContent";
import GeneralInsuranceTypes from "./GeneralInsuranceTypes";
import GeneralBenefits from "./GeneralBenefits";
import GeneralInsuranceGuide from "./GeneralInsuranceGuide";
import ChooseInsuranceGuide from "./ChooseInsuranceGuide";
import FAQSection from "./FAQSection";

export default function HealthInsuranceHero() {
  return (
    <main className="w-full bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative w-full overflow-hidden">
        {/* Aspect ratio ko thoda adjust kiya hai mobile ke liye */}
        <div className="relative w-full aspect-4/3 md:aspect-15/9 lg:aspect-14/5">
          <Image
            src="/images/general insurance/general insurance.jpeg"
            alt="Family Health Insurance"
            fill
            // bg-color hata diya aur object-cover laga diya taaki nila border na dikhe
            className="object-cover"
            priority
          />
        </div>
      </section>

      <section className="bg-white pt-2 md:pt-10">
        <GeneralInsuranceContent />
      </section>
      <section className="bg-white pt-2 md:pt-10">
        <GeneralInsuranceTypes />
      </section>

      <section className="bg-white pt-2 md:pt-10">
        <GeneralBenefits />
      </section>
      <section className="bg-white pt-2 md:pt-10">
        <GeneralInsuranceGuide />
      </section>
      <section className="bg-white pt-2 md:pt-10">
        <ChooseInsuranceGuide />
      </section>
      <section className="bg-white pt-2 md:pt-10">
        <FAQSection />
      </section>
    </main>
  );
}
