"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";
import Link from "next/link";

const MachineryLoanRatesBanner = () => {
  return (
    <section className="w-full bg-white py-10 md:py-20 px-4 md:px-10 font-lexend relative z-20">
      <div className="max-w-7xl mx-auto">
        
        {/* --- ROUNDED CARD --- */}
        <div className="w-full max-w-5xl mx-auto bg-white border border-slate-100 shadow-[0_20px_60px_rgba(0,0,0,0.05)] rounded-[40px] md:rounded-[80px] py-12 md:py-24 px-6 md:px-20 text-center relative overflow-hidden">
          
          {/* Subtle decoration (Aapke screenshot wale circles) */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/5 rounded-full -ml-16 -mb-16"></div>

          <div className="relative z-10">
            {/* --- TITLE --- */}
            <Typography
              variant="h3"
              as="h3"
              className="text-[#1e293b] font-extrabold text-[24px] sm:text-3xl md:text-5xl mb-6 md:mb-8 mt-0! leading-[1.2] tracking-tight"
            >
              Interest Rate & Fees Applicable for <br className="hidden md:block" /> Machinery Loan in India
            </Typography>

            {/* --- DESCRIPTION --- */}
            <div className="max-w-3xl mx-auto mb-10 md:mb-14">
              <Typography
                variant="s2"
                as="p"
                className="text-gray-500 text-[14px] md:text-[18px] leading-relaxed mt-0! font-medium"
              >
                Machinery loan interest rates in India vary based on your business profile, credit score, loan amount, and repayment tenure. At Money King Financial, we help you secure machinery finance at competitive interest rates.
              </Typography>
            </div>

            {/* --- BUTTONS (Fixed UI) --- */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-[200px] bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-bold text-base md:text-lg transition-all duration-300 shadow-lg shadow-blue-500/20 active:scale-95 cursor-pointer border-none outline-none">
                  Apply Now
                </button>
              </Link>

              <button className="w-full sm:w-[200px] bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-10 py-4 rounded-full font-bold text-base md:text-lg transition-all duration-300 active:scale-95 cursor-pointer outline-none">
                View Rates
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MachineryLoanRatesBanner;