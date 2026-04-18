"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
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
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image Section */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Machinery/Machinery.jpeg"
            alt="Background"
            fill
            className="object-cover object-center brightness-[0.7]"
            priority
          />
          <div className="absolute inset-0 bg-black/40"/>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <Typography
                variant="h1"
                as="h1"
                className="text-4xl md:text-6xl font-bold mb-6 text-white"
              >
                {data.title || " "}
              </Typography>

              <Typography
                variant="b1"
                className="text-white/90 mb-10 text-lg md:text-xl max-w-2xl"
              >
                {data.description || " "}
              </Typography>

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

              {/* Features */}
              <div className="flex flex-wrap gap-3">
                {data.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full"
                  >
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    <span className="text-sm font-semibold text-white">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-20 bg-white space-y-24 pb-24">
        <MachineryLoanInfo />
      </div>

      <div className="relative z-20 bg-white space-y-24 pb-24">
        <LoanCalculator />
      </div>

      <div className="relative z-20 bg-white space-y-30 pb-0">
        <MachineryFeatures />
      </div>

      <div className="relative z-20 bg-white space-y-10 pb-0">
        <div className="-mt-5">
          {" "}
          {/* Ye space-y-10 ke effect ko cancel kar dega */}
          <MachineryEligibility />
        </div>
      </div>

      <div className="relative z-20 bg-white space-y-10 pb-10">
        <DocumentsAccordionPage />
      </div>

      <div className="relative z-20 bg-white space-y-10 pb-10">
        <MachineryProcess />
      </div>

      {/* space-y-6 mobile ke liye, space-y-50 desktop ke liye */}
      <div className="relative z-20 bg-white space-y-10 md:space-y-50 pb-6 md:pb-10">
        <MachineryLoanRatesBanner />
        {/* Agla component yahan aayega */}
      </div>

      <div className="relative z-20 bg-white space-y-10 pb-10">
        <ProductSegmentation />
      </div>

      

      <div className="relative z-20 bg-white space-y-24 pb-24">
        <FinancialPartners />
      </div>

      <div className="relative z-20 bg-white space-y-10 pb-10">
        <MachineryFAQ  />
      </div>
    </main>
  );
}
