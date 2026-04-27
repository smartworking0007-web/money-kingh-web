"use client";

import React, { useState } from "react";
import { Typography } from "@/app/components/ui/Typography";

export default function LoanAgainstPropertyContent() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-10 md:px-12 py-5 md:py-5 ">
      {/* --- TOP SECTION --- */}
      <div className="text-center">
        <Typography
          variant="h3"
          as="h3"
          className="text-[#1e293b] font-bold mb-5 text-[26px] md:text-[42px] leading-[1.2]"
        >
          What is Loan Against Property?
        </Typography>

        {/* max-w-[320px] mobile par text ko ek elegant narrow shape dega */}
        <div className="max-w-[340px] md:max-w-4xl mx-auto">
          <div className="text-gray-500 leading-[1.4] text-[18px] md:text-[18px] text-center">
            <p className="inline">
              A loan against property in India offers higher loan amounts and
              lower interest rates compared to unsecured loans. Borrowers can
              enjoy flexible repayment tenures.
            </p>

            {isExpanded && (
              <span className="inline animate-in fade-in duration-700">
                {" "}
                up to 15–20 years, making EMIs more affordable. Since the loan
                is secured, lenders offer better terms based on your property
                value and credit profile.
              </span>
            )}

            {/* Read More - Clean Link Style */}
            <div className="mt-2">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-[#D84B7E] font-semibold text-[13px] uppercase tracking-wider hover:opacity-80 transition-all cursor-pointer bg-transparent border-none"
              >
                {isExpanded ? "Show Less" : "Read More"}
              </button>
            </div>
          </div>

          {/* Subtle decoration line */}
          <div className="mt-12 flex justify-center">
            <div className="h-1px w-12 bg-gray-200" />
          </div>
        </div>
      </div>
    </div>
  );
}
