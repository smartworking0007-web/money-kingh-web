"use client";

import React, { useState } from "react";
import { Typography } from "@/app/components/ui/Typography";

export default function BankingManagementContent() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    /* Overlap Fix: Mobile (-mt-28) aur Web (-mt-44) dono par image ke upar perfectly set hoga */
    <div className="max-w-7xl mx-auto px-6 md:px-10 py-0 font-lexend bg-white relative z-30 mt-0 md:mt-0 ">
      {/* --- CONTENT WRAPPER --- */}
      <div className="text-center mb-12 pt-16 md:pt-24">
        {/* Meta Title (H3) */}
        <Typography
          variant="h3"
          as="h3"
          className="text-[#1e293b] font-black mb-6 text-2xl md:text-[42px] mt-0 leading-tight"
        >
          Banking and Cash Management Services in India
        </Typography>

        <div className="max-w-5xl mx-auto border-b border-gray-100 pb-12">
          <p className="text-gray-500 leading-relaxed text-base md:text-[20px] mt-0 inline">
            Banking and Cash Management Services in India are essential for
            businesses to manage cash flow, optimize liquidity, and ensure
            secure financial transactions. In today’s digital economy, companies
            require advanced cash flow management and business banking solutions
            to handle receivables, payables, and real-time fund tracking
            efficiently.
            {/* Conditional Content */}
            <span className={`${isExpanded ? "inline" : "hidden"}`}>
              {" "}
              At{" "}
              <span className="font-bold text-[#8B1D1D]">
                Money King Financial Services
              </span>
              , we provide customized banking and cash management solutions that
              help businesses streamline operations, reduce risks, and improve
              financial efficiency. Our expert advisory ensures that your
              capital is utilized effectively, providing you with the liquidity
              needed to seize growth opportunities while maintaining robust
              financial health in a competitive market.
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
