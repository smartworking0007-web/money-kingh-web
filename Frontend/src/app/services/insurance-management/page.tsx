"use client";

import Image from "next/image";
import InsuranceRiskContent from "./InsuranceRiskContent";
import InsuranceRiskFeatures from "./InsuranceRiskFeatures";
import InsuranceRiskTypes from "./InsuranceRiskTypes";
import InsuranceRiskSolutions from "./InsuranceRiskSolutions";
import WhyChooseInsurance from "./WhyChooseInsurance";
import InsuranceRiskFAQ from "./InsuranceRiskFAQ";

export default function CarLoanHero() {
  return (
    <main className="w-full bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative w-full overflow-hidden">
        <div className="relative w-full aspect-6/3 sm:aspect-10/9 md:aspect-15/9 lg:aspect-15/6">
          <Image
            src="/images/footer/Risk.jpeg"
            alt="Insurance and Risk"
            fill
            className="object-cover object-right md:object-center transition-all duration-500"
            priority
          />

          {/* --- LEFT SIDE TEXT OVERLAY --- */}
          <div className="absolute inset-0 bg-leaner-to-r from-black/60 to-transparent flex items-center">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
              <div className="max-w-2xl text-white">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg">
                  Insurance & <br />
                  <span className="text-blue-400">Risk Management</span>
                </h1>
                <p className="mt-4 text-base md:text-xl text-gray-100 max-w-md drop-shadow-md">
                  Apne bhavishya aur sampatti ko surakshit karein. Hum dete hain
                  aapko sahi salah aur behtar insurance options jo har khatre ko
                  kam karein.
                </p>
                <div className="mt-8"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- OTHER SECTIONS --- */}
      <section className="bg-white">
        <InsuranceRiskContent />
      </section>

      <section className="bg-white">
        <InsuranceRiskFeatures />
      </section>

      <section className="bg-white">
        <InsuranceRiskTypes />
      </section>

      <section className="bg-white">
        <InsuranceRiskSolutions />
      </section>

      <section className="bg-white">
        <WhyChooseInsurance />
      </section>

      <section className="bg-white">
        <InsuranceRiskFAQ />
      </section>
    </main>
  );
}
