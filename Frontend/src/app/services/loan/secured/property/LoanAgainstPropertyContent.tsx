"use client";

import React, { useState } from "react";
import { Typography } from "@/app/components/ui/Typography";

export default function LoanAgainstPropertyContent() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 font-lexend">
      {/* --- TOP SECTION --- */}
      <div className="text-center mb-12">
        <Typography
          variant="h3"
          as="h3"
          className="text-[#1e293b] font-bold mb-6 text-3xl md:text-[42px] leading-tight"
        >
          What is Loan Against Property?
        </Typography>

        <div className="max-w-5xl mx-auto border-b border-gray-200 pb-12">
          <p className="text-gray-500 leading-relaxed text-base md:text-[18px]">
            A loan against property in India offers higher loan amounts and 
            lower interest rates compared to unsecured loans. Borrowers can 
            enjoy flexible repayment tenures of up to 15–20 years, making EMIs 
            more affordable.
            
            {/* Conditional Content */}
            <span className={`${isExpanded ? "inline" : "hidden"}`}>
              {" "} Since the loan is secured, lenders offer better terms based on 
              your property value, income profile, and credit score. This financial 
              product allows you to unlock the hidden value of your residential or 
              commercial property while still retaining its ownership.
            </span>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="ml-2 text-[#D84B7E] hover:text-[#b03a64] font-medium underline-offset-4 border-b border-[#D84B7E] transition-all cursor-pointer bg-transparent border-none"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}