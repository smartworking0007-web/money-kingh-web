"use client";
import Image from "next/image";
import MachineryLoanContent from "./MachineryLoanContent";
import LoanCalculator from "@/app/components/LoanCalculator/LoanCalculator";
import MachineryLoanBenefits from "./MachineryLoanBenefits";

import MachineryLoanEligibility from "./MachineryLoanEligibility";
import MachineryLoanApplyStep from "./MachineryLoanApplyStep";
import MachineryLoanFAQs from "./MachineryLoanFAQs";

export default function HealthInsuranceHero() {
  return (
    <main className="w-full bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative w-full overflow-hidden">
        {/* Aspect ratio ko thoda adjust kiya hai mobile ke liye */}
        <div className="relative w-full aspect-4/3 md:aspect-15/9 lg:aspect-15/6">
          <Image
            src="/images/bt/ma.jpeg"
            alt="Family Health Insurance"
            fill
            // bg-color hata diya aur object-cover laga diya taaki nila border na dikhe
            className="object-cover"
            priority
          />
        </div>
      </section>
       <section className="bg-white py-10 md:py-5 ">
        <MachineryLoanContent />
      </section>
      <section className="bg-white py-10 md:py-5 ">
        <LoanCalculator />
      </section>
       <section className="bg-white py-10 md:py-5 ">
        <MachineryLoanBenefits />
      </section>
      <section className="bg-white py-10 md:py-5 ">
        <MachineryLoanEligibility />
      </section>
      <section className="bg-white py-0 md:py-5 ">
        <MachineryLoanApplyStep />
      </section>
        <section className="bg-white py-10 md:py-5 ">
        <MachineryLoanFAQs />
      </section>
    </main>
  );
}
