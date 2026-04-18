"use client";

import React, { useState } from "react";
import { Typography } from "@/app/components/ui/Typography";

export default function StockMarketInvestment() {
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
          Stock Market Investment
        </Typography>

        <div className="max-w-5xl mx-auto border-b border-gray-200 pb-12">
          <p className="text-gray-500 leading-relaxed text-base md:text-[18px]">
            The stock market is one of the most effective ways to build long-term 
            wealth and generate passive income. By investing in shares of listed 
            companies, you can participate in their growth and earn returns through 
            price appreciation and dividends.
            
            {/* Conditional Content */}
            <span className={`${isExpanded ? "inline" : "hidden"}`}>
              {" "} At Money King Financial, we help you understand and invest in the 
              stock market with the right strategy and guidance. Our experts analyze 
              market trends, company fundamentals, and technical indicators to ensure 
              your portfolio is positioned for consistent growth while managing 
              market risks effectively.
            </span>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="ml-2 text-[#004687] hover:text-[#003566] font-medium underline-offset-4 border-b border-[#004687] transition-all cursor-pointer bg-transparent border-none"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}