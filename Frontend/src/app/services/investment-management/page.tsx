"use client";
import LoanCalculator from "@/app/components/LoanCalculator/LoanCalculator";
import Image from "next/image";
import InvestmentPlanningContent from "./InvestmentPlanningContent";
import InvestmentMistakes from "./InvestmentMistakes";
import InvestmentAdvisoryAdvantages from "./InvestmentAdvisoryAdvantages";
import EarlyInvestmentPlanning from "./EarlyInvestmentPlanning";
import InvestmentPlanningFAQ from "./InvestmentPlanningFAQ";

export default function CarLoanHero() {
  return (
    <main className="w-full bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative w-full overflow-hidden">
        {/* Mobile par aspect-[4/3] ya aspect-square use karein taaki height achhi mile.
          'object-right' use kiya hai taaki right side ka part (car) na kate.
        */}
        <div className="relative w-full aspect-6/3 sm:aspect-10/9 md:aspect-15/9 lg:aspect-15/6">
          <Image
            src="/images/footer/investment.jpeg"
            alt="Car Loan BT"
            fill
            // object-right: ye right side ko focus mein rakhega
            // md:object-center: desktop par wapis center kar dega
            className="object-cover object-right md:object-center transition-all duration-500"
            priority
          />
        </div>
      </section>

      {/* --- CALCULATOR SECTION --- */}
      <section className="bg-white py-40 md:py-40">
        <LoanCalculator />
      </section>
      <section className="bg-white py-0 md:py-0">
        <InvestmentPlanningContent />
      </section>
      <section className="bg-white py-0 md:py-0">
        <InvestmentMistakes />
      </section>
      <section className="bg-white py-0 md:py-0">
        <InvestmentAdvisoryAdvantages />
      </section>
       <section className="bg-white py-0 md:py-0">
        <EarlyInvestmentPlanning />
      </section>
       <section className="bg-white py-0 md:py-0">
        <InvestmentPlanningFAQ />
      </section>
    </main>
  );
}
