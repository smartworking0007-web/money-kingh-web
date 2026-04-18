"use client";

import Image from "next/image";
import HealthInsuranceContent from "./HealthInsuranceContent";
import WhyHealthInsurance from "./WhyHealthInsurance";
import WhyChooseUsHealth from "./WhyChooseUsHealth";
import HealthPlanGuide from "./HealthPlanGuide";
import Niva from "./nivay";
import HealthInsuranceFAQ from "./HealthInsuranceFAQ";

export default function HealthInsuranceHero() {
  return (
    <main className="w-full bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative w-full overflow-hidden">
        <div className="relative w-full aspect-20/9 md:aspect-21/9 lg:aspect-18/9">
          <Image
            src="/images/helt/helt.jpeg"
            alt="Family Health Insurance"
            fill
            className="object-contain md:object-cover bg-[#89d4f0]"
            priority
          />
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section className="relative bg-white py-10 md:py-20 z-10">
        <div className="container mx-auto px-6">
          {/* Content starts here */}
        </div>
      </section>

      <section className="-mt-20 md:-mt-30 relative z-20 bg-white rounded-t-[2.5rem] md:rounded-t-none">
        <HealthInsuranceContent />
      </section>
      <section className="bg-white py-10 md:py-5 ">
        <WhyHealthInsurance />
      </section>
      <section className="bg-white py-10 md:py-5 ">
        <WhyChooseUsHealth />
      </section>
      <section className="bg-white py-10 md:py-5 ">
        <HealthPlanGuide />
      </section>
      <section className="bg-white py-10 md:py-5 ">
        <Niva />
      </section>
      <section className="bg-white py-10 md:py-5 ">
        <HealthInsuranceFAQ />
      </section>
    </main>
  );
}
