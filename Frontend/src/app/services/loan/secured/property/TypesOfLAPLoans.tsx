"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";

const lapTypesData = [
  {
    title: "Loan Against Residential Property",
    desc: "Leverage your home, flat, or rented apartment to secure high-value funding for personal or business use. Ideal for long-term financial stability with minimal hassle."
  },
  {
    title: "Loan Against Commercial Property",
    desc: "Use your office space, warehouse, or commercial complex as collateral to fuel your business growth with competitive interest rates and professional processing."
  },
  {
    title: "LAP for Plot/Land",
    desc: "Get immediate liquidity by pledging your urban or industrial land parcels. This allows you to unlock capital from non-constructed assets quickly."
  }
];

const TypesOfLAPLoans = () => {
  return (
    <section className="relative w-full bg-white pt-10 md:pt-16 pb-12 md:pb-24 font-lexend z-10">
      <div className="max-w-7xl mx-auto px-5 md:px-12">
        
        {/* --- HEADER (Meta Title & Description) --- */}
        <div className="mb-8 md:mb-10 border-b border-gray-100 pb-5 md:pb-6">
          <Typography 
            variant="h3" 
            as="h3" 
            className="text-[#1e293b] font-bold text-xl md:text-3xl mb-2 md:mb-3 mt-0! scroll-mt-0!"
          >
            Types of LAP Loans in India
          </Typography>
          
          <Typography 
            variant="s2" 
            as="h5"
            className="text-gray-500 text-[14px] md:text-lg font-medium max-w-4xl mt-0! leading-relaxed"
          >
            Unlock the true value of your real estate assets with flexible financing options. We offer tailored Loan Against Property solutions for both residential and commercial needs:
          </Typography>
        </div>

        {/* --- RESPONSIVE LAYOUT (Key Paragraph Data) --- */}
        <div className="flex flex-col gap-6 md:gap-10">
          {lapTypesData.map((item, index) => (
            <div 
              key={index} 
              className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-12 items-start group border-b border-gray-50 md:border-0 pb-6 md:pb-0"
            >
              {/* Left Side: Title */}
              <div className="md:col-span-4 pl-3 md:pl-4 transition-all duration-300">
                <Typography 
                  variant="h5" 
                  as="h3" 
                  className="text-[#0f172a] font-bold text-base md:text-xl leading-tight transition-colors mt-0!"
                >
                  {item.title}
                </Typography>
              </div>

              {/* Right Side: Description */}
              <div className="md:col-span-8">
                <Typography 
                  variant="s2" 
                  className="text-[#475569] text-[13px] md:text-base leading-relaxed font-normal mt-0!"
                >
                  {item.desc}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TypesOfLAPLoans;