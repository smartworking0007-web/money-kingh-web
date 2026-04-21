"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";
import { TrendingUp, Clock, Info } from "lucide-react";

export default function EarlyInvestmentPlanning() {
  return (
    <section className="w-full bg-white py-12 md:py-15 px-4 md:px-6 font-lexend relative z-20">
      <div className="max-w-7xl mx-auto">
        {/* --- MAIN HEADER (H3) --- */}
        <div className="text-center mb-12 md:mb-16">
          <Typography
            variant="h4"
            as="h4"
            className="text-2xl md:text-[42px] font-black text-slate-900 mb-4 mt-0 leading-tight"
          >
            Why Early Investment Planning Is Key to Wealth Creation
          </Typography>
        </div>

        {/* --- CONTENT GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left Side: Core Message */}
          <div className="space-y-6">
            <Typography className="text-slate-600 text-base md:text-xl leading-relaxed mt-0">
              Starting your investment journey early is one of the most powerful
              steps you can take toward building long-term wealth. The earlier
              you begin, the more time your money gets to grow and benefit from
              the{" "}
              <span className="font-bold text-[#8B1D1D]">
                power of compounding.
              </span>
            </Typography>

            <div className="bg-red-50/50 border-l-4 border-[#8B1D1D] p-6 rounded-r-2xl">
              <Typography className="text-slate-700 font-medium text-sm md:text-base m-0">
                Compounding is the process where your investment generates
                returns, and those returns start earning additional returns over
                time.
              </Typography>
            </div>

            <Typography className="text-slate-500 text-sm md:text-lg leading-relaxed">
              In simple terms, you earn returns not only on your initial
              investment but also on the gains accumulated along the way. While
              the impact may seem small initially, it becomes substantial over
              the long term.
            </Typography>
          </div>

          {/* Right Side: Example Box (Clean UI) */}
          <div className="relative">
            <div className="bg-white border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-[2.5rem] p-8 md:p-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-red-50 rounded-2xl text-[#8B1D1D]">
                  <TrendingUp size={24} />
                </div>
                <Typography
                  variant="h5"
                  className="font-black text-slate-900 m-0"
                >
                  The Snowball Effect
                </Typography>
              </div>

              <div className="space-y-6">
                {/* Step 1 */}
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold">
                      1
                    </div>
                    <div className="w-0.5 h-full bg-slate-100 my-1"></div>
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">
                      Year 1
                    </p>
                    <p className="text-slate-800 font-medium">
                      Invest <span className="font-bold">₹100</span> at 10% →
                      Grows to{" "}
                      <span className="text-emerald-600 font-bold">₹110</span>
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold">
                      2
                    </div>
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">
                      Year 2
                    </p>
                    <p className="text-slate-800 font-medium">
                      10% on <span className="font-bold">₹110</span> → Total
                      reaches{" "}
                      <span className="text-emerald-600 font-bold">₹121</span>
                    </p>
                  </div>
                </div>

                {/* Info Note */}
                <div className="mt-8 pt-6 border-t border-slate-50 flex gap-3 items-start">
                  <Info size={18} className="text-[#8B1D1D] shrink-0 mt-1" />
                  <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                    Delaying investments can significantly reduce your overall
                    wealth potential. Time is your greatest asset.
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Icon */}
            <div className="absolute -bottom-6 -right-6 hidden md:block">
              <div className="bg-[#8B1D1D] p-4 rounded-2xl shadow-xl shadow-red-200">
                <Clock className="text-white" size={32} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
