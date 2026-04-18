"use client";

import React, { useState } from "react";
import { Typography } from "@/app/components/ui/Typography";

export default function GoldLoanContent() {
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
          Instant Gold Loan: Fast & Secure
        </Typography>

        <div className="max-w-5xl mx-auto border-b border-gray-200 pb-12">
          <p className="text-gray-500 leading-relaxed text-base md:text-[18px]">
            Turn your idle gold into immediate funds with our fast and secure
            gold loan services. Whether you need money for emergencies, business
            needs, or personal expenses, get quick approval and the highest
            per-gram value in the market.
            {/* Conditional Content */}
            <span className={`${isExpanded ? "inline" : "hidden"}`}>
              {" "}
              Our gold loans come with flexible repayment options and lower
              interest rates compared to personal loans. Your gold ornaments are
              stored in bank-grade, highly secure vaults with insurance
              coverage, giving you complete peace of mind while you unlock the
              financial potential of your assets.
            </span>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="ml-2  font-medium underline-offset-4 border-b  transition-all cursor-pointer bg-transparent border-none"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
