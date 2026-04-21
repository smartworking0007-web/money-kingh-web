"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";
import { PiggyBank, IndianRupee, Zap, LayoutDashboard } from "lucide-react";

export default function PersonalLoanBTWhyChoose() {
  const reasons = [
    {
      icon: <PiggyBank size={24} />,
      title: "Save money on interest",
      desc: "Reduce your overall interest outgo by switching to lower rates.",
    },
    {
      icon: <IndianRupee size={24} />,
      title: "Improve monthly cash flow",
      desc: "Lower EMIs mean more liquid cash in your pocket every month.",
    },
    {
      icon: <Zap size={24} />,
      title: "Get additional funds instantly",
      desc: "Avail quick Top-Up loans along with your balance transfer.",
    },
    {
      icon: <LayoutDashboard size={24} />,
      title: "Simplify debt management",
      desc: "Consolidate multiple payments into one easy-to-manage loan.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-12 py-8 bg-white font-lexend -mt-6 md:-mt-10 relative z-10">
      {/* --- HEADER --- */}
      <div className="text-center mb-10">
        <Typography
          variant="h4"
          as="h4"
          className="text-[#1e293b] font-black text-xl md:text-3xl mb-3 mt-0"
        >
          Why Choose Balance Transfer & Top-Up?
        </Typography>
        <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full" />
      </div>

      {/* --- REASONS GRID --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="group p-6 bg-slate-50 border border-slate-100 rounded-[28px] hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
          >
            {/* Icon Circle */}
            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-blue-600 shadow-sm mb-5 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              {reason.icon}
            </div>

            <Typography
              variant="h5"
              className="text-slate-800 font-bold text-base md:text-lg mb-2 mt-0 leading-tight"
            >
              {reason.title}
            </Typography>

            <Typography className="text-slate-500 text-sm leading-relaxed mt-0">
              {reason.desc}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
}
