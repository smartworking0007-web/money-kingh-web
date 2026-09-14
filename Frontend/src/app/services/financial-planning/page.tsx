"use client";

import React from "react";
import Image from "next/image";
import FinancialAdvisoryContent from "./FinancialAdvisoryContent";
import FinancialPlanningTypes from "./FinancialPlanningTypes";
import FinancialAdvisoryAdvantages from "./FinancialAdvisoryAdvantages";
import FinancialConsultingSelection from "./FinancialConsultingSelection";
import BankingFAQ from "./BankingFAQ";

export default function FinancialPlanningPage() {
  return (
    <main className="w-full bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative w-full overflow-hidden">
        {/* Mobile: 4/3 aspect ratio */}
        <div className="relative w-full aspect-4/3 sm:aspect-10/9 md:aspect-15/9 lg:aspect-15/6">
          <Image
            src="/images/footer/financial.jpeg"
            alt="Expert Financial Planning and Advisory Services"
            fill
            className="object-cover object-right md:object-center transition-all duration-500"
            priority
          />

          {/* --- LEFT SIDE TEXT OVERLAY (H1) --- */}
          <div className="absolute inset-0 bg-linear-to-r from-slate-900/90 via-slate-900/50 to-transparent flex items-center">
            <div className="container mx-auto px-4 md:px-12 lg:px-20">
              <div className="max-w-2xl text-white">
                <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg">
                  Professional <br />
                  <span className="text-emerald-400">Financial Planning</span> <br />
                  & Advisory
                </h1>

                <p className="mt-2 md:mt-4 text-sm md:text-xl text-gray-200 max-w-[280px] sm:max-w-md md:max-w-lg drop-shadow-md font-light">
                  Expert financial planning and advisory services. Get customized wealth management, risk consulting, and strategic investment guidance tailored to your goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SUB-HEADER SECTION (H2) --- */}
      <section className="w-full pt-12 md:pt-16 pb-4 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Strategic Solutions for <span className="text-emerald-600">Wealth & Asset Growth</span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base mt-3 max-w-2xl mx-auto">
            Achieve financial freedom through structured portfolio management, tax-efficient savings, and expert risk assessment.
          </p>
        </div>
      </section>

      {/* --- CONTENT SECTIONS --- */}
      <section className="bg-white py-8 md:py-12">
        <FinancialAdvisoryContent />
      </section>

      <section className="bg-white py-8 md:py-12">
        <FinancialPlanningTypes />
      </section>

      <section className="bg-white py-8 md:py-12">
        <FinancialAdvisoryAdvantages />
      </section>

      <section className="bg-white py-8 md:py-12">
        <FinancialConsultingSelection />
      </section>

      <section className="bg-white py-8 md:py-12">
        <BankingFAQ />
      </section>
    </main>
  );
}