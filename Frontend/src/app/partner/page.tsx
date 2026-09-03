"use client";

import React from "react";
import Image from "next/image";
import PartnerBenefits from "./benefitsLeft";
import WhyChooseUs from "./WhyChooseUs";
import PartnerSteps from "./PartnerSteps";
import TestimonialsHub from "./Testimonials";
import FAQSection from "./FAQ";

export default function PartnerPage() {
  return (
    <main className="w-full bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative w-full">
        <div className="relative w-full h-auto">
          <Image
            src="/images/Become/Become1.jpeg"
            alt="Be the Partner Everyone Wishes to be"
            width={1920}
            height={800}
            className="w-full h-auto object-cover"
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