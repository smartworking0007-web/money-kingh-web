"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Typography } from "@/app/components/ui/Typography";
import CompanyIntro from "@/app/components/stats/CompanyIntro";
import ServiceGrid from "@/app/components/Service/ServiceGrid";
import LoanCalculator from "@/app/components/LoanCalculator/LoanCalculator";
import FinancialPartners from "@/app/components/FinancialPartners/FinancialPartners";

export default function LoanAgainstPropertyPage() {
  const data = {
    title: "Loan Against Property",
    description:
      "Unlock substantial funds by mortgaging your residential or commercial property without selling it. Ideal for business expansion, education, marriage, medical expenses, debt consolidation, or any personal/business purpose with competitive rates and flexible repayment.",
    features: [
      "Loan up to 70% Market Value",
      "Tenure up to 15-20 years",
      "Personal & Business Use",
      "Rates starting @ 9.00% p.a.",
      "Overdraft Facility Available",
      "Top-up Loan Options",
      "Quick Digital Processing",
      "Minimal Documentation",
    ],
    
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 py-16 md:py-24 overflow-hidden">
        {/* Decorative Background Blur */}
        <div className="absolute top-0 right-0 -z-10 w-1/3 h-full bg-blue-50/50 rounded-full blur-3xl" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Content */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            {/* Premium Badge */}


            <Typography
              variant="h1"
              as="h1"
              className="text-[#004687] text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
            >
              {data.title}
            </Typography>

            <Typography
              variant="b1"
              className="text-gray-600 mb-10 text-lg md:text-xl leading-relaxed max-w-2xl"
            >
              {data.description}
            </Typography>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {data.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors duration-200 border border-transparent hover:border-gray-100">
                  <div className="bg-green-100 rounded-full p-1">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                  </div>
                  <Typography variant="s2" className="text-gray-800 font-semibold">
                    {feature}
                  </Typography>
                </div>
              ))}
            </div>
          </div>
          {/* Right Side: Image Card */}
          <div className="lg:col-span-5 order-1 lg:order-2 relative">
            <div className="relative z-10 w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-white">
              <Image
                src="/images/loanpage/loan.jpg"
                alt="Loan Against Property background"
                fill
                className="object-cover transition-transform "
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            
            {/* Decorative Background Shapes */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full -z-10 opacity-60 blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 border-4 border-dashed border-blue-200 rounded-full -z-10 opacity-40" />
          </div>
          
        </div>
      </section>

      {/* Other Components */}
      <div className="space-y-20 pb-20">
        <CompanyIntro />
        <ServiceGrid />
        <LoanCalculator />
        <FinancialPartners />
      </div>
    </main>
  );
}