"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";
import {
  UserCheck,
  Briefcase,
  IndianRupee,
  Star,
  History,
  ShieldCheck,
} from "lucide-react";

export default function PersonalLoanBTEligibility() {
  const criteria = [
    {
      icon: <UserCheck size={20} className="text-blue-600" />,
      label: "Age Limit",
      value: "21 to 60 Years",
    },
    {
      icon: <Briefcase size={20} className="text-blue-600" />,
      label: "Employment",
      value: "Salaried or Self-employed",
    },
    {
      icon: <IndianRupee size={20} className="text-blue-600" />,
      label: "Minimum Income",
      value: "₹15,000 – ₹25,000/month",
    },
    {
      icon: <Star size={20} className="text-blue-600" />,
      label: "Credit Score",
      value: "650+ (Preferably 700+)",
    },
    {
      icon: <History size={20} className="text-blue-600" />,
      label: "Existing Loan",
      value: "At least 6–12 EMIs paid",
    },
    {
      icon: <ShieldCheck size={20} className="text-blue-600" />,
      label: "Job Stability",
      value: "Stable Income & Continuity",
    },
  ];

  return (
    // -mt-6 se ye Benefits wale section ke close rahega
    <div className="max-w-7xl mx-auto px-5 md:px-12 py-6 bg-white font-lexend -mt-15 md:-mt-10 relative z-10">
      <div className="max-w-4xl mx-auto bg-slate-50/50 border border-slate-100 rounded-32px p-6 md:p-10 shadow-sm">
        {/* --- HEADER --- */}
        <div className="text-center mb-10">
          <Typography
            variant="h4"
            as="h3"
            className="text-[#1e293b] font-black text-xl md:text-3xl mb-3 mt-0"
          >
            Eligibility Criteria for PL BT & Top-up
          </Typography>
          <Typography className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto mt-0">
            To apply for a Personal Loan Balance Transfer & Top-Up, you must
            meet the following criteria:
          </Typography>
        </div>

        {/* --- CRITERIA GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {criteria.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-slate-400 font-bold text-[10px] md:text-[11px] uppercase tracking-wider">
                  {item.label}
                </span>
                <span className="text-slate-800 font-extrabold text-sm md:text-base leading-tight">
                  {item.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
