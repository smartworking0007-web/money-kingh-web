"use client";

import React, { useState } from "react";
import { Typography } from "@/app/components/ui/Typography";

export default function SIPMutualFundContent() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 font-lexend">
      {/* --- TOP SECTION --- */}
      <div className="text-center mb-12">
        {/* Meta Title - H4 styled as a prominent header */}
        <Typography
          variant="h4"
          as="h4"
          className="text-[#1e293b] font-bold mb-6 text-2xl md:text-[38px] leading-tight mt-0"
        >
          SIPs in Mutual Funds – Smart & Easy Investment Solution
        </Typography>

        <div className="max-w-5xl mx-auto border-b border-gray-200 pb-12">
          <p className="text-gray-500 leading-relaxed text-base md:text-[18px] mt-0">
            Systematic Investment Plan (SIP) ek simple aur effective tarika hai
            mutual funds mein invest karne ka. Isme aap regular intervals
            (monthly/quarterly) par ek fixed amount invest karte ho, jisse aap
            disciplined aur long-term wealth create kar sakte ho.
            {/* Conditional Content */}
            <span className={`${isExpanded ? "inline" : "hidden"}`}>
              {" "}
              SIP ka sabse bada fayda **Rupee Cost Averaging** aur **Power of
              Compounding** hai. Choti shuruaat karke bhi aap bade financial
              goals jaise ghar, baccho ki padhai, ya retirement ko asani se
              achieve kar sakte hain. Isme market timing ki tension nahi hoti
              kyunki aap har market cycle mein invest karte rehte hain.
            </span>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="ml-2 text-[#D84B7E] hover:text-[#b03a64] font-semibold underline-offset-4 border-b-2 border-[#D84B7E] transition-all cursor-pointer bg-transparent border-none py-0"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
