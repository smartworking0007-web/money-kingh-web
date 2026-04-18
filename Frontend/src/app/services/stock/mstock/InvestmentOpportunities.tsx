"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";
import { ChevronRight, RefreshCw } from "lucide-react";

export default function InvestmentOpportunities() {
  return (
    /* md:-mt-44 desktop ke liye aur -mt-20 mobile ke liye taaki overlap sahi dikhe */
    <section className="max-w-7xl mx-auto px-6 pt-0 pb-12 bg-white font-lexend -mt-20 md:-mt-44 relative z-30 overflow-x-hidden">
      
      {/* Grid Configuration: 12 columns on large screens */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start lg:justify-end">
        
        {/* --- LEFT CONTENT --- 
            lg:col-start-2 se Desktop par right shift hoga.
            Mobile par normal center-to-left rahega.
        */}
        <div className="lg:col-span-7 lg:col-start-2 pt-0 text-center lg:text-left">
          <Typography
            variant="h2"
            as="h2"
            className="text-[#003B73] font-bold text-3xl md:text-[45px] leading-tight mb-2 mt-0"
          >
            Multiply your{" "}
            <span className="text-[#FF7A00]">investment opportunities!</span>
          </Typography>
          
          <p className="text-gray-500 text-lg md:text-xl mb-8 font-medium">
            Enjoy unlimited holding period with
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left">
            {/* Pay Later (MTF) Card */}
            <div className="p-6 rounded-xl border border-[#FF7A00]/30 bg-white hover:border-[#FF7A00] transition-all cursor-pointer group shadow-sm active:scale-95">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="text-[#FF7A00]">
                    <RefreshCw size={24} strokeWidth={2.5} />
                  </div>
                  <span className="font-bold text-[#FF7A00] text-xl">
                    Pay Later (MTF)
                  </span>
                </div>
                <ChevronRight size={22} className="text-[#FF7A00] group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="text-gray-600 text-[15px] leading-snug">
                Get funding for 4X investments @ interests starting from{" "}
                <span className="font-semibold text-gray-800">6.99% p.a.</span> (0.0192% per day)
              </p>
            </div>

            {/* Pledge Card */}
            <div className="p-6 rounded-xl border border-[#FF7A00]/30 bg-white hover:border-[#FF7A00] transition-all cursor-pointer group shadow-sm active:scale-95">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="text-[#FF7A00]">
                    <RefreshCw size={24} strokeWidth={2.5} />
                  </div>
                  <span className="font-bold text-[#FF7A00] text-xl">
                    Pledge Shares
                  </span>
                </div>
                <ChevronRight size={22} className="text-[#FF7A00] group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="text-gray-600 text-[15px] leading-snug">
                Pledge holdings and get instant margin @ <span className="font-semibold text-gray-800">₹0 pledge creation cost</span>
              </p>
            </div>
          </div>
        </div>

        {/* --- RIGHT VISUAL (Pie Chart) --- 
            Mobile par nichhe aur Desktop par right-aligned
        */}
        <div className="lg:col-span-4 flex justify-center lg:justify-start items-start pt-8 lg:pt-12">
          <div className="relative w-full max-w-[340px] md:max-w-[380px] h-[300px] md:h-320px flex items-center justify-center">
            <div className="relative w-48 h-48 md:w-56 md:h-56">
              
              {/* SVG mStock Style Pie Chart */}
              <svg viewBox="0 0 36 36" className="w-full h-full drop-shadow-xl overflow-visible">
                <path
                  d="M18 18 L18 2 A16 16 0 1 1 5 28 L18 18"
                  fill="#FF7A00"
                  className="stroke-white stroke-[0.5]"
                />
                <path
                  d="M16.5 17.5 L4.5 26.5 A16 16 0 0 1 16.5 2 Z"
                  fill="#003B73"
                  className="stroke-white stroke-[0.5] transform -translate-x-1 -translate-y-1"
                />
              </svg>

              {/* Labels - Mobile font size and padding optimized */}
              <div className="absolute top-[20%] -left-[18%] md:-left-15% bg-white p-2 md:p-3 rounded-lg shadow-xl border border-gray-100 text-center min-w-80px md:min-w-[90px]">
                <p className="text-[#003B73] font-black text-lg md:text-xl leading-none">20%</p>
                <p className="text-gray-400 text-[8px] md:text-[10px] uppercase font-bold mt-1">Your<br/>Funding</p>
              </div>

              <div className="absolute bottom-[5%] -right-[10%] md:right-[-5%] bg-white p-3 md:p-4 rounded-lg shadow-xl border border-gray-100 text-center min-w-[100px] md:min-w-[110px]">
                <p className="text-[#716f6c] font-black text-xl md:text-2xl leading-none">80%</p>
                <p className="text-gray-400 text-[8px] md:text-[10px] uppercase font-bold mt-1">mStock s<br/>Funding</p>
              </div>

              {/* Decorative Rupee Icons */}
              <span className="absolute -top-6 md:-top-8 right-0 text-orange-100 text-3xl md:text-4xl font-bold">₹</span>
              <span className="absolute -bottom-6 md:-bottom-8 left-6 md:left-8 text-orange-100 text-xl md:text-2xl font-bold">₹</span>
            </div>
            
            {/* Background dashed circle */}
            <div className="absolute inset-0 border-2 border-dashed border-gray-100 rounded-full scale-110 -z-10 hidden md:block"></div>
          </div>
        </div>

      </div>
    </section>
  );
}