"use client";

import React, { useState } from "react";
import { Typography } from "@/app/components/ui/Typography";

export default function LifeInsuranceContent() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-12 pt-0 -mt-10px md:-mt-40px pb-10">
      
      {/* --- TOP SECTION --- */}
      <div className="text-center mb-6 md:mb-10">
        <Typography
          variant="h3"
          as="h3"
          className="text-[#1e293b] font-black mb-3 md:mb-5 text-2xl md:text-[42px] leading-tight mt-0"
        >
          Life Insurance – Secure Your Family’s Future
        </Typography>

        <div className="max-w-5xl mx-auto border-b border-gray-200 pb-6 md:pb-10">
          <p className="text-gray-600 leading-snug md:leading-relaxed text-[15px] md:text-[18px] mt-0">
            Life insurance is more than just a financial product—it is a promise 
            to protect your loved ones when they need it the most. It is a legal 
            agreement between you (the policyholder) and the insurance company, 
            ensuring financial security for your family in case of unforeseen events.
            
            {/* Conditional Content */}
            <span className={`${isExpanded ? "inline" : "hidden"}`}>
              {" "} Beyond providing a death benefit, many life insurance plans also 
              act as a long-term investment tool, helping you build wealth for 
              milestones like your child s education, marriage, or your own 
              peaceful retirement. By paying regular premiums, you ensure that 
              your family can maintain their lifestyle and cover liabilities 
              even in your absence, while also enjoying significant tax 
              benefits under applicable laws.
            </span>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-block ml-1 text-[#004687] hover:text-[#003566] font-bold underline-offset-4 border-b-2 border-[#004687] transition-all cursor-pointer bg-transparent border-none py-1 text-[15px] md:text-[18px]"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}