"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Typography } from "@/app/components/ui/Typography";
import WhyChoose from "@/app/components/Choose/WhyChoose";
import LoanCalculator from "@/app/components/LoanCalculator/LoanCalculator";
import FinancialPartners from "@/app/components/FinancialPartners/FinancialPartners";

export default function GoldLoanPage() {
  const data = {
    title: "Gold Loan",
    description:
      "Get instant cash against your gold jewellery or coins with no income proof required. Enjoy the highest loan-to-value ratio, quick disbursal, safe storage of your gold, and competitive rates – perfect for urgent financial needs.",
    features: [
      "Highest LTV up to 75% of gold value",
      "Short & flexible tenure from 3 months to 4 years",
      "No income proof or credit score required",
      "Competitive interest rates starting @ 8.75% p.a.",
      "Safe vault storage of your pledged gold",
      "Overdraft facility & bullet repayment options",
      "Instant approval & disbursal in minutes",
    ],
   
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Main Content */}
          <div className="lg:col-span-8 order-2 lg:order-1">
            <Typography
              variant="h1"
              as="h1"
              className="text-[#004687] mb-8 mt-0 scroll-mt-20"
            >
              {data.title}
            </Typography>

            <Typography variant="b1" className="text-gray-700 mb-8 leading-relaxed">
              {data.description}
            </Typography>

            {/* Features List */}
            <div className="flex flex-wrap gap-x-8 gap-y-4 mb-10">
              {data.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                  <Typography
                    variant="s2"
                    as="span"
                    className="text-black font-medium"
                  >
                    {feature}
                  </Typography>
                </div>
              ))}
            </div>

            {/* Last Updated */}
            <div className="pt-6 border-t border-gray-100">
             
            </div>
          </div>

          {/* Right: Image Sidebar (Desktop only) */}
          <div className="lg:col-span-4 order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative w-full h-96 lg:h-full min-h-96 rounded-xl overflow-hidden shadow-2xl border border-gray-100">
              <Image
                src="/images/loanpage/gold.webp"
                alt="Gold jewellery and cash – instant Gold Loan with Money King"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
            
          </div>
          
        </div>
      </section>

      {/* Common Sections */}
      <FinancialPartners />
      <WhyChoose />
      <LoanCalculator />
    </main>
  );
}