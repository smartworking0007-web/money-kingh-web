"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";
import { Percent, Settings2, Calendar, AlertCircle } from "lucide-react";

export default function PersonalLoanBTInterest() {
  const factors = [
    "Credit score",
    "Income profile",
    "Employer category",
    "Existing loan history",
  ];

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-12 py-8 bg-white font-lexend -mt-15 md:-mt-10 relative z-10">
      {/* --- HEADER --- */}
      <div className="text-center mb-10">
        <Typography
          variant="h4"
          as="h3"
          className="text-[#1e293b] font-black text-xl md:text-3xl mb-3 mt-0"
        >
          Interest Rates for PL BT & Top-up
        </Typography>
      </div>

      {/* --- CONTENT BOX --- */}
      <div className="max-w-5xl mx-auto bg-slate-50 border border-slate-100 rounded-32px p-6 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Interest Rate Column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm mb-4">
              <Percent size={24} />
            </div>
            <Typography
              variant="h5"
              className="font-bold text-slate-800 mb-2 mt-0"
            >
              Low Interest Rate
            </Typography>
            <Typography className="text-slate-500 text-sm md:text-base leading-relaxed mt-0">
              Starts from{" "}
              <span className="text-blue-600 font-bold">10.50% p.a.</span>{" "}
              onwards, calculated on a reducing balance basis.
            </Typography>
          </div>

          {/* Factors Column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm mb-4">
              <Settings2 size={24} />
            </div>
            <Typography
              variant="h5"
              className="font-bold text-slate-800 mb-2 mt-0"
            >
              Flexible Pricing
            </Typography>
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {factors.map((f, i) => (
                <span
                  key={i}
                  className="text-[11px] md:text-xs bg-white border border-slate-200 px-2 py-1 rounded-md text-slate-600 font-medium"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>

          {/* Tenure Column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm mb-4">
              <Calendar size={24} />
            </div>
            <Typography
              variant="h5"
              className="font-bold text-slate-800 mb-2 mt-0"
            >
              Flexible Tenure
            </Typography>
            <Typography className="text-slate-500 text-sm md:text-base leading-relaxed mt-0">
              Choose a repayment period that suits you, ranging from{" "}
              <span className="font-bold text-slate-700">12 to 60 months</span>.
            </Typography>
          </div>
        </div>

        {/* Note Section */}
        <div className="mt-10 flex items-start gap-3 bg-blue-50/50 p-4 rounded-2xl border border-blue-100/50">
          <AlertCircle className="text-blue-600 shrink-0 mt-0.5" size={18} />
          <Typography className="text-slate-600 text-xs md:text-sm leading-relaxed m-0">
            <strong>Note:</strong> Interest rates for Personal Loan Balance
            Transfer & Top-Up typically depend on your credit score, income
            profile, employer category, and existing loan repayment history.
          </Typography>
        </div>
      </div>
    </div>
  );
}
