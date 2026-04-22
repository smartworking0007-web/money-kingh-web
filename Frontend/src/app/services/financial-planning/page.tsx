"use client";
import Image from "next/image";
import FinancialAdvisoryContent from "./FinancialAdvisoryContent";
import FinancialPlanningTypes from "./FinancialPlanningTypes";
import FinancialAdvisoryAdvantages from "./FinancialAdvisoryAdvantages";
import FinancialConsultingSelection from "./FinancialConsultingSelection";
import BankingFAQ from "./BankingFAQ";

export default function CarLoanHero() {
  return (
    <main className="w-full bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative w-full overflow-hidden">
        {/* Mobile par aspect ratio 4/3 rakha hai taaki text ke liye vertical space mile */}
        <div className="relative w-full aspect-4/3 sm:aspect-10/9 md:aspect-15/9 lg:aspect-15/6">
          <Image
            src="/images/footer/financial.jpeg"
            alt="Expert Financial Planning and Advisory Services" 
            fill
            className="object-cover object-right md:object-center transition-all duration-500"
            priority
          />

          {/* --- LEFT SIDE TEXT OVERLAY --- */}
          {/* Mobile par flex-start use kiya hai aur thodi pt-12 (padding top) taaki text top se safe rahe */}
          <div className="absolute inset-0 bg-linear-to-r from-slate-900/90 via-slate-900/50 to-transparent flex items-center md:items-center">
            <div className="container mx-auto px-4 md:px-12 lg:px-20">
              <div className="max-w-2xl text-white">
                {/* Mobile par text-2xl aur leading-tight rakha hai taaki words overlap na karein */}
                <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg">
                  Professional <br />
                  <span className="text-emerald-400">Financial Planning</span> <br />
                  & Advisory
                </h1>
                
                {/* Mobile par font size chota (text-sm) aur margin-top kam kiya hai */}
                <p className="mt-2 md:mt-4 text-sm md:text-xl text-gray-200 max-w-[280px] sm:max-w-md md:max-w-lg drop-shadow-md font-light">
                  Apne financial goals ko hasil karein expert advisory ke saath. Hum dete hain customized wealth management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* --- CONTENT SECTIONS --- */}
      <section className="bg-white mt-50 md:py-0">
        <FinancialAdvisoryContent />
      </section>
      <section className="bg-white">
        <FinancialPlanningTypes />
      </section>
      <section className="bg-white">
        <FinancialAdvisoryAdvantages />
      </section>
      <section className="bg-white">
        <FinancialConsultingSelection />
      </section>
      <section className="bg-white">
        <BankingFAQ />
      </section>
    </main>
  );
}