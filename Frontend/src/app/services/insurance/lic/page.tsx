"use client";
import Image from "next/image";
import LifeInsuranceContent from "./LifeInsuranceContent";
import LifeInsuranceTables from "./LifeInsuranceTables";
import NRIInsuranceInfo from "./NRIHelpSection";
import InsuranceTypesPage from "./InsuranceTypesPage";
import InsuranceTypesDetail from "./InsuranceTypesDetail";
import HowInsuranceWorks from "./HowInsuranceWorks";
import InsuranceDocuments from "./InsuranceDocuments";
import WhoCanBuy from "./WhoCanBuy";
import TestimonialSlider from "./TestimonialSlider";
import DosAndDonts from "./DosAndDonts";
import InsuranceFAQs from "./InsuranceFAQs";

export default function HealthInsuranceHero() {
  return (
    <main className="w-full bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative w-full overflow-hidden">
        {/* Aspect ratio ko thoda adjust kiya hai mobile ke liye */}
        <div className="relative w-full aspect-4/3 md:aspect-15/9 lg:aspect-15/6">
          <Image
            src="/images/life/life.jpeg"
            alt="Family Health Insurance"
            fill
            // bg-color hata diya aur object-cover laga diya taaki nila border na dikhe
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section className="bg-white pt-2 md:pt-10">
        <LifeInsuranceContent />
      </section>
      <section className="bg-white pt-2 md:pt-10">
        <LifeInsuranceTables />
      </section>
      <section className="bg-white pt-2 md:pt-10">
        <NRIInsuranceInfo />
      </section>
      <section className="bg-white pt-2 md:pt-10">
        <InsuranceTypesPage />
      </section>
      <section className="bg-white pt-2 md:pt-10">
        <InsuranceTypesDetail />
      </section>
      <section className="bg-white pt-2 md:pt-10">
        <HowInsuranceWorks />
      </section>
      <section className="bg-white pt-2 md:pt-10">
        <InsuranceDocuments />
      </section>
      <section className="bg-white pt-2 md:pt-10">
        <WhoCanBuy />
      </section>
      <section className="bg-white pt-2 md:pt-10">
        <TestimonialSlider />
      </section>
      <section className="bg-white pt-2 md:pt-10">
        <DosAndDonts />
      </section>
      <section className="bg-white pt-2 md:pt-10">
        <InsuranceFAQs />
      </section>
    </main>
  );
}
