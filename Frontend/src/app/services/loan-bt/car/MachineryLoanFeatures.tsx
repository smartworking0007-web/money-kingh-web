"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";
import {
  Percent,
  Wallet,
  Zap,
  PlusCircle,
  Calendar,
  FileCheck,
} from "lucide-react";

const features = [
  {
    title: "Lower Interest Rates",
    desc: "Transfer your loan to reduce overall interest cost and save more.",
    icon: <Percent size={20} />,
  },
  {
    title: "Reduced EMI",
    desc: "Enjoy better cash flow with lower monthly payments.",
    icon: <Wallet size={20} />,
  },
  {
    title: "Quick Approval",
    desc: "Fast processing and disbursal within 24–48 hours.",
    icon: <Zap size={20} />,
  },
  {
    title: "Additional Funds",
    desc: "Get extra loan amount with our easy top-up facility.",
    icon: <PlusCircle size={20} />,
  },
  {
    title: "Flexible Tenure",
    desc: "Choose a repayment tenure ranging from 12 to 120 months.",
    icon: <Calendar size={20} />,
  },
  {
    title: "Minimal Documentation",
    desc: "Simple and hassle-free documentation process for faster approval.",
    icon: <FileCheck size={20} />,
  },
];

export default function MachineryLoanFeatures() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-10 py-0 md:py-12 font-lexend bg-white relative z-20">
      {/* --- HEADER --- */}
      <div className="text-center mb-8 md:mb-10">
        <Typography
          variant="h3"
          as="h3"
          className="text-[#1e293b] font-black text-xl md:text-3xl leading-tight mb-3"
        >
          Key Features & Benefits
        </Typography>
      </div>

      {/* --- COMPACT FEATURES GRID --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="group p-5 md:p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
          >
            {/* Smaller Icon Container */}
            <div className="w-10 h-10 bg-red-50 text-[#8B1D1D] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#8B1D1D] group-hover:text-white transition-colors">
              {feature.icon}
            </div>

            {/* Content */}
            <Typography className="text-[#1e293b] font-bold text-sm md:text-base mb-2 m-0">
              {feature.title}
            </Typography>
            <p className="text-slate-500 text-xs md:text-sm leading-snug m-0">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
