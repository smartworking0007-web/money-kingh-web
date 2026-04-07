"use client";

import React, { useState } from "react";
import { Typography } from "@/app/components/ui/Typography";

export default function HomeLoanContent() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 font-lexend">
      {/* --- TOP SECTION (Image Reference Style) --- */}
      <div className="text-center mb-12">
        <Typography
          variant="h3"
          as="h3"
          className="text-[#1e293b] font-bold mb-6 text-3xl md:text-[42px]"
        >
          What is home loan?
        </Typography>

        <div className="max-w-5xl mx-auto border-b border-gray-200 pb-12">
          <p className="text-gray-500 leading-relaxed text-base md:text-[18px]">
            A home loan is a secured financial product that helps individuals 
            purchase, construct, or renovate a residential property. In India, 
            banks and NBFCs provide home loans at competitive interest rates, 
            where the property itself acts as collateral until the loan is fully repaid.
            
            {/* Conditional Content */}
            <span className={`${isExpanded ? "inline" : "hidden"}`}>
              {" "} Home loans are one of the most popular financing options for turning 
              the dream of owning a house into reality. Discover our diverse selection 
              of products offering highly competitive{" "}
                Home Loan Interest Rates
              , extended repayment periods, and additional advantages such as
              EMI waivers.
            </span>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="ml-2 text-[#D84B7E] hover:text-[#b03a64] font-medium underline-offset-4 border-b border-[#D84B7E] transition-all"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}