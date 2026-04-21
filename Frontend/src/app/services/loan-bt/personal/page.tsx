"use client";

import Image from "next/image";
import PersonalLoanBTContent from "./PersonalLoanBTContent";
import LoanCalculator from "@/app/components/LoanCalculator/LoanCalculator";
import PersonalLoanBTInfo from "./PersonalLoanBTInfo";
import PersonalLoanBTBenefits from "./PersonalLoanBTBenefits";
import PersonalLoanBTEligibility from "./PersonalLoanBTEligibility";
import PersonalLoanBTDocuments from "./PersonalLoanBTDocuments";
import PersonalLoanBTInterest from "./PersonalLoanBTInterest";
import PersonalLoanBTFees from "./PersonalLoanBTFees";
import PersonalLoanBTTarget from "./PersonalLoanBTTarget";
import PersonalLoanBTSteps from "./PersonalLoanBTSteps";
import PersonalLoanBTWhyChoose from "./PersonalLoanBTWhyChoose";
import PersonalLoanCategories from "./PersonalLoanCategories";
import PersonalLoanBTFAQ from "./PersonalLoanBTFAQ";
export default function GoldLoanPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-[500px] md:h-[600px] flex items-center overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/bt/per bt.png"
            alt="Turn your gold into opportunities"
            fill
            className="object-cover object-right"
            priority
          />
          {/* Gradient Overlay using v4 bg-linear syntax */}
          <div className="absolute inset-0 bg-linear-to-r from-white via-white/95 to-transparent md:via-white/40" />
        </div>
      </section>
      <section className="bg-white py-10 md:py-5 ">
        <PersonalLoanBTContent />
      </section>
      <section className="bg-white py-20 md:py-30 ">
        <LoanCalculator />
      </section>
      <section className="bg-white py-10 md:py-5 ">
        <PersonalLoanBTInfo />
      </section>
      <section className="bg-white py-10 md:py-5 ">
        <PersonalLoanBTBenefits />
      </section>
      <section className="bg-white py-10 md:py-5 ">
        <PersonalLoanBTEligibility />
      </section>
       <section className="bg-white py-10 md:py-5 ">
        <PersonalLoanBTDocuments />
      </section>
      <section className="bg-white py-10 md:py-5 ">
        <PersonalLoanBTInterest />
      </section>
       <section className="bg-white py-10 md:py-5 ">
        <PersonalLoanBTFees />
      </section>
       <section className="bg-white py-10 md:py-5 ">
        <PersonalLoanBTTarget />
      </section>
      <section className="bg-white py-10 md:py-5 ">
        <PersonalLoanBTSteps />
      </section>
      <section className="bg-white py-10 md:py-5 ">
        <PersonalLoanBTWhyChoose />
      </section>
       <section className="bg-white py-10 md:py-5 ">
        <PersonalLoanCategories />
      </section>
      <section className="bg-white py-10 md:py-5 ">
        <PersonalLoanBTFAQ />
      </section>
    </main>
  );
}
