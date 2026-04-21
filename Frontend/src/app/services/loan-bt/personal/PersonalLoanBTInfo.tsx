"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";
import { CheckCircle2, Info } from "lucide-react";

export default function PersonalLoanBTInfo() {
  const btFeatures = [
    "Lower interest rates",
    "Reduced EMI",
    "Better repayment tenure",
    "Improved service benefits",
  ];

  return (
    // -mt-10 (Laptop) aur -mt-6 (Mobile) se ye upar chadh jayega
    <div className="max-w-5xl mx-auto px-4 md:px-12 -mt-30 md:-mt-20 pt-0 pb-6 bg-transparent font-lexend relative z-10">
      
      {/* Box ko white background aur shadow di hai taaki upar wale section par clean dikhe */}
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center bg-white p-4 md:p-6 rounded-32px">
        
        {/* --- SECTION 1: BALANCE TRANSFER --- */}
        <section className="mb-6 w-full">
          <div className="flex flex-col items-center justify-center gap-1 mb-2">
            <div className="w-8 bg-blue-600 h-1 rounded-full mb-1" />
            <Typography
              variant="h3"
              as="h3"
              className="text-[#1e293b] font-black text-lg md:text-2xl mt-0"
            >
              What is Personal Loan Balance Transfer?
            </Typography>
          </div>

          <Typography className="text-gray-500 leading-relaxed text-sm md:text-base mb-4 mt-0 max-w-2xl mx-auto">
            Shift your outstanding loan to another lender for better terms.
          </Typography>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-xl mx-auto">
            {btFeatures.map((item, index) => (
              <div key={index} className="flex items-center gap-2 bg-slate-50 p-2 rounded-lg border border-slate-100 text-left">
                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                <span className="text-slate-700 font-semibold text-[11px] md:text-sm">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* --- SECTION 2: TOP-UP LOAN (Extra Compact) --- */}
        <section className="w-full p-4 md:p-6 bg-blue-50/50 rounded-24px border border-blue-100 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-2">
             <div className="bg-blue-600 p-1 rounded-lg text-white">
                <Info size={16} />
             </div>
            <Typography
              variant="h3"
              as="h3"
              className="text-[#1e293b] font-black text-base md:text-xl mt-0"
            >
              What is a Top-Up Loan?
            </Typography>
          </div>

          <Typography className="text-gray-500 leading-relaxed text-[13px] md:text-sm mb-0 mt-0 max-w-2xl">
            Additional loan on existing loan with minimal documentation.
          </Typography>

          <div className="mt-4 flex flex-wrap justify-center gap-2">
              {["Reduced EMI", "Better Tenure", "Fast Processing"].map((pill) => (
                <span key={pill} className="bg-white px-3 py-1 rounded-full text-blue-700 text-[9px] md:text-[11px] font-black border border-blue-200">
                  {pill}
                </span>
              ))}
          </div>
        </section>

      </div>
    </div>
  );
}