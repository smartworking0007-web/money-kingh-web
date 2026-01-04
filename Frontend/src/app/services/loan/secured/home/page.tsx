"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, Home, Percent, Clock} from "lucide-react";
import { Typography } from "@/app/components/ui/Typography";
import WhyChoose from "@/app/components/Choose/WhyChoose";
import LoanCalculator from "@/app/components/LoanCalculator/LoanCalculator";
import FinancialPartners from "@/app/components/FinancialPartners/FinancialPartners";

export default function HomeLoanPage() {
  const data = {
    title: "Home Loan",
    description: "Turn your dream of owning a home into reality with our affordable and flexible home loan solutions. We provide end-to-end support for purchasing new flats, independent houses, or constructing on your own plot.",
    stats: [
      { label: "Interest Rate", value: "7.10% p.a.", icon: <Percent className="w-5 h-5" /> },
      { label: "Tenure Up To", value: "30 Years", icon: <Clock className="w-5 h-5" /> },
      { label: "Financing", value: "Up to 90%", icon: <Home className="w-5 h-5" /> },
    ],
    features: [
      "Quick approval and disbursal",
      "Balance transfer facility",
      "Minimal documentation",
      "Low processing fees",
      "PMAY Special benefits",
      "Flexible repayment options",
    ],
    
  };

  return (
    <main className="min-h-screen bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent rounded-full blur-3xl opacity-50" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Content Column */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            {/* Premium Badge */}
          

            <Typography
              variant="h1"
              as="h1"
              className=""
            >
            Your Future Starts at Home.
            </Typography> 
            <Typography
              variant="b1"
              className="text-gray-600 mb-10 text-lg md:text-xl leading-relaxed max-w-2xl"
            >
              {data.description}
            </Typography>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {data.stats.map((stat, i) => (
                <div key={i} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 group hover:border-blue-200 transition-all">
                  <div className="text-blue-600 mb-2 group-hover:scale-110 transition-transform">{stat.icon}</div>
                  <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-[10px] text-gray-500 uppercase font-bold tracking-tight">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Feature Tags List */}
            <div className="flex flex-wrap gap-3 mb-12">
              {data.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-100">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-semibold text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            
          </div>

          {/* Right: Premium Image Card */}
          <div className="lg:col-span-5 order-1 lg:order-2 relative">
            <div className="relative z-10 w-full aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,70,135,0.3)] ">
              <Image
                src="/images/loanpage/home.jpg"
                alt="Modern Luxury Home"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Visual Decoration */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-100 rounded-full -z-10 blur-2xl opacity-50" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#004687] rounded-3xl -z-10 opacity-10" />
          </div>
          
        </div>
      </section>

      {/* --- PAGE CONTENT BLOCKS --- */}
      <div className="space-y-24 pb-24">
        <FinancialPartners />
        <div className="bg-gray-50 py-24 shadow-inner">
          <WhyChoose />
        </div>
        <LoanCalculator />
      </div>
    </main>
  );
}