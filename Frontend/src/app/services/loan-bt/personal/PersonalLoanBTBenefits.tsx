"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";
import { 
  Percent, 
  Wallet, 
  PlusCircle, 
  Calendar, 
  Zap, 
  ShieldOff, 
  BarChart3 
} from "lucide-react";

export default function PersonalLoanBTBenefits() {
  const benefits = [
    {
      icon: <Percent size={24} />,
      title: "Lower Interest Rates",
      desc: "Transfer your existing loan to reduce your interest burden and save money over time.",
    },
    {
      icon: <Wallet size={24} />,
      title: "Reduced EMI",
      desc: "Lower interest rates directly result in more manageable monthly EMIs.",
    },
    {
      icon: <PlusCircle size={24} />,
      title: "Additional Loan (Top-Up)",
      desc: "Get extra funds without applying for a fresh loan for any financial need.",
    },
    {
      icon: <Calendar size={24} />,
      title: "Flexible Tenure",
      desc: "Choose repayment tenure as per your financial comfort and cash flow.",
    },
    {
      icon: <Zap size={24} />,
      title: "Quick Processing",
      desc: "Fast approval and disbursal within 24–72 hours with minimal paperwork.",
    },
    {
      icon: <ShieldOff size={24} />,
      title: "No Collateral Required",
      desc: "Completely unsecured facility—no need to pledge any assets or gold.",
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Better Management",
      desc: "Consolidate your existing debt and improve your monthly savings.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 bg-white font-lexend -mt-4 relative z-20">
      
      {/* --- HEADER --- */}
      <div className="text-center mb-12">
        <Typography
          variant="h3"
          as="h3"
          className="text-[#1e293b] font-black text-xl md:text-3xl mb-2 mt-0"
        >
          Key Features & <span className="text-blue-600">Benefits</span>
        </Typography>
        <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
      </div>

      {/* --- BENEFITS GRID --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="group p-6 rounded-24px border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col items-start"
          >
            {/* Icon Circle */}
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-blue-600 shadow-sm mb-5 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              {benefit.icon}
            </div>

            <Typography
              variant="h5"
              className="text-slate-800 font-bold text-base md:text-lg mb-2 mt-0"
            >
              {benefit.title}
            </Typography>

            <Typography className="text-slate-500 text-sm leading-relaxed mt-0">
              {benefit.desc}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
}