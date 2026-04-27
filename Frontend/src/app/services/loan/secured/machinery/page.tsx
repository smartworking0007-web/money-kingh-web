"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@/app/components/ui/Typography";
import LoanCalculator from "@/app/components/LoanCalculator/LoanCalculator";
import FinancialPartners from "@/app/components/FinancialPartners/FinancialPartners";
import MachineryLoanInfo from "./MachineryLoanInfo";
import MachineryFeatures from "./MachineryFeatures";
import MachineryEligibility from "./MachineryEligibility";
import MachineryLoanRatesBanner from "./MachineryLoanRatesBanner";
import DocumentsAccordionPage from "./DocumentsRequiredPage";
import MachineryProcess from "./MachineryProcess.tsx";
import ProductSegmentation from "./ProductSegmentation";
import MachineryFAQ from "./MachineryFAQ";

interface StatItem {
  label: string;
  value: string;
  icon: React.ReactNode;
}

export default function MachineryLoanPage() {
  const data = {
    title: "Power Your Business With Advanced Machinery",
    description:
      "Boost your business productivity with financing for new or used machinery & equipment.",
    stats: [] as StatItem[],
    features: [] as string[],
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image Section */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Machinery/Machinery.jpeg"
            alt="Background"
            fill
            // MOBILE FIX: object-[20%_center] mobile par image ko left shift karega
            // md:object-center web par pehle jaisa hi rakhega
            className="object-cover object-[80%_center] md:object-center brightness-[0.7]"
            priority
          />
          {/* Mobile par overlay thoda strong kiya hai taaki text saaf dikhe */}
          <div className="absolute inset-0 bg-black/50 md:bg-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-10">
              <Typography
                variant="h1"
                as="h1"
                // text-3xl! se mobile heading handle hogi, md:text-6xl! desktop ke liye
                className="text-white font-bold! text-3xl! md:text-6xl! mb-6 mt-0! leading-tight!"
              >
                {data.title || " "}
              </Typography>

              <Typography
                variant="b1"
                className="text-white/90 mb-10 text-base md:text-xl max-w-2xl mt-0!"
              >
                {data.description || " "}
              </Typography>

              {/* Stats & Features agar data hai toh... */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                {data.stats.map((stat, i) => (
                  <div
                    key={i}
                    className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20"
                  >
                    <div className="text-white mb-2">{stat.icon}</div>
                    <div className="text-xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-[10px] text-white/70 uppercase font-bold">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="relative z-20 bg-white space-y-16 md:space-y-24 py-8 md:py-15">
        <MachineryLoanInfo />
      </div>
      <div className="relative z-20 bg-white space-y-16 md:space-y-24 py-8 md:py-15">
        <LoanCalculator />
      </div>
      <div className="relative z-20 bg-white space-y-16 md:space-y-24 -py-10 -md:py-10">
        <MachineryFeatures />
      </div>
      <div className="relative z-20 bg-white space-y-16 md:space-y-24 py-8 md:py-20 -mt-10 md:-mt-30">
        <MachineryEligibility />
      </div>

      <div className="relative z-20  space-y-16 md:space-y-24 py-8 md:py-20 -mt-20 md:-mt-50">
        <DocumentsAccordionPage />
      </div>

      <div className="relative z-20  space-y-16 md:space-y-24 py-8 md:py-20 -mt-10 md:-mt-30">
        <MachineryProcess />
      </div>

      <div className="relative z-20  space-y-16 md:space-y-24 py-8 md:py-20 -mt-20 md:-mt-50">
        <MachineryLoanRatesBanner />
      </div>

      <div className="relative z-20  space-y-16 md:space-y-24 py-8 md:py-20 -mt-10 md:-mt-50">
        <ProductSegmentation />
      </div>

      <div className="relative z-20  space-y-16 md:space-y-24 py-8 md:py-20 -mt-10 md:-mt-50">
        <FinancialPartners />
      </div>

      <div className="relative z-20  space-y-16 md:space-y-24 py-8 md:py-20 -mt-10 md:-mt-35">
        <MachineryFAQ />
      </div>
    </main>
  );
}
