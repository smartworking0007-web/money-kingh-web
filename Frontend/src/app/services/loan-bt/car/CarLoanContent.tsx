"use client";

import React, { useState } from "react";
import { Typography } from "@/app/components/ui/Typography";

export default function CarLoanContent() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 pt-0 pb-10 font-lexend bg-white relative z-30 -mt-40 md:-mt-24">
      {/* --- TOP SECTION --- */}
      <div className="text-center">
        {/* Meta Title H3 */}
        <Typography
          variant="h4"
          as="h4"
          className="text-[#1e293b] font-black mb-6 text-2xl md:text-[42px] leading-tight"
        >
          Car Loan Balance Transfer & Top-Up
        </Typography>

        <div className="max-w-5xl mx-auto border-b border-gray-100 pb-12">
          {/* Sub-heading/Description H5 */}
          <Typography
            variant="s1"
            as="h2"
            className="text-[#8B1D1D] font-bold text-lg md:text-2xl mb-6"
          >
            Reduce Your EMI & Get Extra Funds on Your Car Loan
          </Typography>

          <p className="text-gray-500 leading-relaxed text-base md:text-[20px] inline">
            A Car Loan Balance Transfer (BT) allows you to transfer your
            existing car loan to another lender offering lower interest rates
            and better repayment terms. Along with this, you can also avail a
            Top-Up Loan to meet additional financial needs such as personal
            expenses, emergencies, or business use.
            {/* Expandable Text */}
            {isExpanded && (
              <span className="ml-1 transition-all duration-500">
                {" "}
                This solution helps you save on interest, reduce EMI burden, and
                access extra funds easily. Whether you want to clear other debts
                or need quick capital for immediate requirements, our Car Loan
                BT with Top-Up facility ensures maximum savings and convenience
                without the need for multiple loans.
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
