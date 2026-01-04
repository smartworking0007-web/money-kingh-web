"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Typography } from "@/app/components/ui/Typography";
import WhyChoose from "@/app/components/Choose/WhyChoose";
import LoanCalculator from "@/app/components/LoanCalculator/LoanCalculator";
import FinancialPartners from "@/app/components/FinancialPartners/FinancialPartners";

export default function LifeInsurancePage() {
  const data = {
    title: "Life Insurance",
    description:
      "Protect your family's financial future with reliable life insurance plans from India's most trusted insurer – LIC. Choose from pure term protection, endowment plans, ULIPs, money-back policies, child plans, and pension schemes with guaranteed returns and tax benefits.",
    features: [
      "Highest claim settlement ratio in India (99.8%+)",
      "Pure term plans with high coverage at low premiums",
      "Endowment & money-back plans with maturity benefits",
      "ULIPs for wealth creation with insurance",
      "Child education & marriage plans",
      "Pension & annuity options for retirement",
      "Tax benefits under Section 80C & 10(10D)",
      "Loan facility against policy",
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

            <div className="flex flex-wrap gap-x-8 gap-y-4 mb-10">
              {data.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                  <Typography variant="s2" as="span" className="text-black font-medium">
                    {feature}
                  </Typography>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-gray-100">
             
            </div>
          </div>

          {/* Right: Image Sidebar */}
          <div className="lg:col-span-4 order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative w-full h-96 lg:h-full min-h-96 rounded-xl overflow-hidden shadow-2xl border border-gray-100">
              <Image
                src="/images/insurance/lic.jpg"
                alt="Life Insurance Secure your family's future with LIC"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
           
          </div>
          
        </div>
      </section>

      <FinancialPartners />
      <WhyChoose />
      <LoanCalculator />
    </main>
  );
}