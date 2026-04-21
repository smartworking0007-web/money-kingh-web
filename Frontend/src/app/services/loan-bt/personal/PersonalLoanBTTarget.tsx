"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";
import { Users, TrendingDown, Landmark, Star, HandHelping } from "lucide-react";

export default function PersonalLoanBTTarget() {
  const targetAudience = [
    {
      icon: <TrendingDown size={20} />,
      text: "Individuals paying high-interest personal loans",
    },
    {
      icon: <Users size={20} />,
      text: "Salaried employees seeking EMI reduction",
    },
    {
      icon: <HandHelping size={20} />,
      text: "Self-employed professionals needing additional funds",
    },
    {
      icon: <Star size={20} />,
      text: "Customers with good repayment history",
    },
    {
      icon: <Landmark size={20} />,
      text: "Anyone looking for better loan terms",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-12 py-8 bg-white font-lexend -mt-15 md:-mt-10 relative z-10">
      {/* --- HEADER --- */}
      <div className="text-center mb-8">
        <Typography
          variant="h4"
          as="h4"
          className="text-[#1e293b] font-black text-xl md:text-2xl mb-2 mt-0"
        >
          Who Can Use This Facility?
        </Typography>
        <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full" />
      </div>

      {/* --- TARGET LIST --- */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {targetAudience.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-slate-50 border border-slate-100 p-4 rounded-2xl hover:bg-blue-50 transition-colors group"
          >
            <div className="bg-white p-2 rounded-lg text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
              {item.icon}
            </div>
            <Typography className="text-slate-700 font-bold text-sm md:text-base m-0 leading-tight">
              {item.text}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
}
