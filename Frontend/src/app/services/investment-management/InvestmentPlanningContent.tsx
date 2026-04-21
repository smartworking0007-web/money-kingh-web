"use client";

import React, { useState } from "react";
import { Typography } from "@/app/components/ui/Typography";

export default function InvestmentPlanningContent() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    /* Overlap Fix: Mobile (-mt-28) aur Web (-mt-44) dono par image ke upar perfectly set hoga */
    <div className="max-w-7xl mx-auto px-6 md:px-10 py-0 font-lexend bg-white relative z-30 -mt-28 md:-mt-44 ">
      {/* --- CONTENT WRAPPER --- */}
      <div className="text-center mb-12 pt-16 md:pt-24">
        {/* Meta Title (H3) */}
        <Typography
          variant="h4"
          as="h4"
          className="text-[#1e293b] font-black mb-6 text-2xl md:text-[42px] mt-0 leading-tight"
        >
          Investment Planning Services – Best Solutions for Your Financial Goals
        </Typography>

        <div className="max-w-5xl mx-auto border-b border-gray-100 pb-12">
          <p className="text-gray-500 leading-relaxed text-base md:text-[20px] mt-0 inline">
            In the realm of investment planning, an advisor plays a crucial role
            in guiding individuals and businesses toward achieving their
            financial goals. These professionals may be categorized as asset
            managers, wealth managers, investment consultants, or financial
            advisors. Regardless of their title, their primary mission is to
            provide expert advice and strategies tailored to your specific
            investment needs.
            {/* Conditional Content */}
            <span className={`${isExpanded ? "inline" : "hidden"}`}>
              {" "}
              Investment advisors help you identify the right investment
              opportunities, manage your portfolio efficiently, and navigate the
              complexities of financial markets with confidence. As a leading
              investment advisory firm, we assess your financial situation, risk
              tolerance, and future goals to design a personalized investment
              strategy that ensures optimal growth and security of your wealth.
              At Money King,
              our team is committed to delivering customized solutions that
              empower you to make smart, confident, and goal-oriented investment
              decisions.
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
