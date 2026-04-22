"use client";
import Image from "next/image";
import InvestmentPlanningContent from "./InvestmentPlanningContent";
import InvestmentMistakes from "./InvestmentMistakes";
import InvestmentAdvisoryAdvantages from "./InvestmentAdvisoryAdvantages";
import EarlyInvestmentPlanning from "./EarlyInvestmentPlanning";
import InvestmentPlanningFAQ from "./InvestmentPlanningFAQ";

export default function InvestmentPlanningHero() {
  return (
    <main className="w-full bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative w-full overflow-hidden">
        <div className="relative w-full aspect-4/3 sm:aspect-15/9 md:aspect-15/8 lg:aspect-15/6">
          <Image
            src="/images/footer/investment.jpeg"
            alt="Expert Investment Planning"
            fill
            className="object-cover object-right md:object-center transition-all duration-500"
            priority
          />

          {/* SEO Text Overlay & Apply Now Button */}
          <div className="absolute inset-0 bg-black/20 flex items-center">
            <div className="max-w-7xl mx-auto px-6 w-full">
              <div className="max-w-xl text-left text-white space-y-4">
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 1. Investment Mistakes (Gap minimized) --- */}
      <section className="bg-white py-6 md:py-10">
        <InvestmentMistakes />
      </section>

      {/* --- 2. Investment Planning Content --- */}
      <section className="bg-white py-6 md:py-10 border-t border-gray-50">
        <InvestmentPlanningContent />
      </section>

      {/* --- 3. Advisory Advantages --- */}
      <section className="bg-white py-6 -mt-15 border-t border-gray-50">
        <InvestmentAdvisoryAdvantages />
      </section>

      {/* --- 4. Early Investment Planning --- */}
      <section className="bg-white py-4 md:py-8">
        <EarlyInvestmentPlanning />
      </section>

      {/* --- 5. FAQs --- */}
      <section className="bg-white py-4 md:py-8">
        <InvestmentPlanningFAQ />
      </section>
    </main>
  );
}
