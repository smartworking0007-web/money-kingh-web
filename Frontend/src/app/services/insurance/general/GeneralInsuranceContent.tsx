"use client";

import React, { useState } from "react";
import { Typography } from "@/app/components/ui/Typography";

export default function GeneralInsuranceContent() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 font-lexend">
      {/* --- TOP SECTION --- */}
      <div className="text-center mb-12">
        <Typography
          variant="h3"
          as="h3"
          className="text-[#1e293b] font-black mb-6 text-xl md:text-[42px] mt-0"
        >
          What is General Insurance?
        </Typography>

        <div className="max-w-5xl mx-auto border-b border-gray-200 pb-12 text-center">
          <p className="text-gray-500 leading-relaxed text-base md:text-[18px] mt-0">
            General insurance is a contract between the policyholder and the insurance company, 
            where the insurer provides financial compensation for losses other than life-related risks. 
            In return, the policyholder pays a premium for a specific period.
            
            {/* Conditional Content */}
            <span className={`${isExpanded ? "inline" : "hidden"}`}>
              {" "} In simple terms, general insurance helps protect your assets, health, 
              and finances from unexpected risks such as accidents, medical emergencies, 
              theft, fire, or natural disasters. In today’s uncertain world, having 
              general insurance is not just an option—it is a necessity for financial 
              security and peace of mind.
            </span>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="ml-2 text-[#004687] hover:text-[#003566] font-bold underline underline-offset-4 transition-all cursor-pointer bg-transparent border-none py-0"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}