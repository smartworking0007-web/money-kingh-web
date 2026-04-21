"use client";

import React, { useState } from "react";
import { Typography } from "@/app/components/ui/Typography";

export default function MachineryLoanContent() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    // 'mt-10' se ye section Hero image ke niche shift ho jayega
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20 font-lexend bg-white relative z-20 mt-10">
      
      {/* --- CONTENT SECTION --- */}
      <div className="text-center">
        {/* Meta Title H3 */}
        <Typography
          variant="h3"
          as="h3"
          className="text-[#1e293b] font-black mb-6 text-2xl md:text-[42px] leading-tight"
        >
          Machinery Loan Balance Transfer & Top-Up
        </Typography>

        <div className="max-w-5xl mx-auto border-b border-gray-100 pb-12">
          {/* Sub-heading/Description */}
          <Typography 
            as="h4" 
            className="text-[#8B1D1D] font-bold text-lg md:text-2xl mb-6"
          >
            Reduce EMI & Get Additional Funds for Business Growth
          </Typography>

          <p className="text-gray-500 leading-relaxed text-base md:text-[20px] inline">
            A Machinery Loan Balance Transfer (BT), also known as Refinance, allows you to 
            shift your existing equipment loan to another lender offering lower interest rates 
            and better repayment terms. Along with this, you can also avail a Top-Up Loan to 
            meet your growing business needs.

            {/* Expandable Text */}
            {isExpanded && (
              <span className="ml-1 transition-all duration-500">
                {" "}This solution helps businesses optimize cash flow, reduce financial burden, 
                and access additional capital without taking a completely new loan. Whether 
                you want to upgrade your technology or manage working capital, Machinery 
                Loan BT with Top-Up is the most efficient financial tool for modern industries.
              </span>
            )}

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="ml-2 text-[#D84B7E] hover:text-[#b03a64] font-bold underline underline-offset-4 transition-all text-sm md:text-lg"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}