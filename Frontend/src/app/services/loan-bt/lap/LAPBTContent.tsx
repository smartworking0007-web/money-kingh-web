"use client";

import React, { useState } from "react";
import { Typography } from "@/app/components/ui/Typography";

export default function LAPBTContent() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-12 py-10 font-lexend -mt-50 md:-mt-60 relative z-30 rounded-t-[40px] bg-white">
      {/* --- SECTION: WHAT IS LAP --- */}
      <div className="text-center pt-10 md:pt-16">
        <Typography
          variant="h3"
          as="h3"
          className="text-[#1e293b] font-black mb-6 text-2xl md:text-[44px] leading-tight"
        >
          What is Loan Against Property?
        </Typography>

        <div className="max-w-5xl mx-auto pb-10">
          <p className="text-slate-500 leading-relaxed text-sm md:text-xl px-4  inline">
            {/* Pehla hissa jo hamesha dikhega */}A Loan Against Property (LAP)
            is a secured financial product that helps individuals leverage their
            residential or commercial property as collateral. In India, banks
            and NBFCs provide LAP at competitive interest rates, where the
            property itself acts as security until the loan is fully repaid.
            {/* Ye hissa click karne par expand hoga */}
            {isExpanded && (
              <span className="ml-1 ">
                {" "}
                It is a powerful financial tool that provides high-value funding
                while you continue to retain ownership. LAP is widely used by
                business owners for working capital and individuals for
                long-term financial goals, offering flexible repayment tenures
                based on the market value of the property.
              </span>
            )}
            {/* Read More / Read Less Button */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="ml-2 text-[#e91e63] hover:text-[#c2185b] font-medium underline underline-offset-4 transition-all"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </p>
        </div>

        {/* Bottom Line (Optional: as per your image) */}
        <hr className="border-slate-100 max-w-5xl mx-auto" />
      </div>
    </div>
  );
}
