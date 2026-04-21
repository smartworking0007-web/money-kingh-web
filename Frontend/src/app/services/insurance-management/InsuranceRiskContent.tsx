"use client";

import React, { useState } from "react";
import { Typography } from "@/app/components/ui/Typography";

export default function InsuranceRiskContent() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    /* Background white rakha hai aur top margins zero hain takki ye header/hero ke turant baad set ho jaye */
    <div className="max-w-7xl mx-auto px-6 md:px-10 py-0 font-lexend bg-white relative z-30 mt-0 md:mt-0">
      
      {/* --- CONTENT WRAPPER --- */}
      <div className="text-center mb-12 pt-16 md:pt-24">
        
        {/* Meta Title (H3) */}
        <Typography
          variant="h4"
          as="h4"
          className="text-[#1e293b] font-black mb-6 text-2xl md:text-[42px] mt-0 leading-tight"
        >
          Insurance and Risk Management Services in India
        </Typography>

        <div className="max-w-5xl mx-auto border-b border-gray-100 pb-12">
          <p className="text-gray-500 leading-relaxed text-base md:text-[20px] mt-0 inline">
            Insurance and Risk Management Services in India are essential for 
            individuals and businesses to protect their financial future and 
            minimize potential risks. In today’s uncertain environment, unexpected 
            events such as medical emergencies, accidents, natural disasters, or 
            business losses can significantly impact financial stability.
            
            {/* Conditional Content */}
            <span className={`${isExpanded ? "inline" : "hidden"}`}>
              {" "}
              With the right combination of insurance coverage and risk management 
              strategies, you can safeguard your assets, ensure business continuity, 
              and reduce financial uncertainties. At{" "}
              <span className="font-bold text-[#8B1D1D]">
                Money King Financial Services
              </span>
              , we provide comprehensive insurance and risk management solutions 
              tailored to your needs, helping you stay financially secure and 
              prepared for any situation. Our focus is on mitigating threats before 
              they arise, ensuring peace of mind for you and your family.
            </span>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="ml-2 text-[#8B1D1D] hover:text-[#701a1a] font-bold underline underline-offset-4 transition-all cursor-pointer bg-transparent border-none py-0 text-sm md:text-lg"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}