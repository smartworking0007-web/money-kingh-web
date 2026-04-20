"use client";

import React from "react";
import Image from "next/image";
// Yahan humne PartnerBenefits ko import kiya hai
import PartnerBenefits from "./benefitsLeft";
import WhyChooseUs from "./WhyChooseUs";
import PartnerSteps from "./PartnerSteps";
import TestimonialsHub from "./Testimonials";
import FAQSection from "./FAQ";

export default function HealthInsuranceHero() {
  return (
    <main className="w-full bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative w-full">
        <div className="relative w-full h-auto">
          <Image
            src="/images/Become/Become.jpeg"
            alt="Be the Partner Everyone Wishes to be"
            width={1920}
            height={800}
            layout="responsive"
            className="w-full h-auto"
            priority
          />
        </div>
      </section>

      <PartnerBenefits />
      <WhyChooseUs />
      <PartnerSteps />
      <TestimonialsHub />
      <FAQSection />
      </main>
  );
}