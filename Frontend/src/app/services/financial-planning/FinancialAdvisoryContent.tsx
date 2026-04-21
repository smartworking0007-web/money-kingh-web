"use client";

import React, { useState } from "react";
import { Typography } from "@/app/components/ui/Typography";

export default function FinancialAdvisoryContent() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    /* -mt-28: Mobile par image ke upar 112px upar shift karega
       md:-mt-44: Desktop par 176px upar shift karega 
       z-30: Ensure karega ki content image ke upar hi rahe
    */
    <div className="max-w-7xl mx-auto px-6 md:px-10 py-0 font-lexend bg-white relative z-30 -mt-28 md:-mt-44 ">
      {/* --- CONTENT WRAPPER --- */}
      <div className="text-center mb-12 pt-16 md:pt-24">
        <Typography
          variant="h4"
          as="h4"
          className="text-[#1e293b] font-black mb-6 text-2xl md:text-[42px] mt-0 leading-tight"
        >
          Financial Advisory Services in India
        </Typography>

        <div className="max-w-5xl mx-auto border-b border-gray-100 pb-12">
          <p className="text-gray-500 leading-relaxed text-base md:text-[20px] mt-0 inline">
            Financial advisory services play a crucial role in helping
            individuals and businesses manage their finances efficiently and
            achieve long-term financial success. With expert guidance, you can
            make informed decisions about investments, savings, risk management,
            and wealth creation.
            {/* Conditional Content */}
            <span className={`${isExpanded ? "inline" : "hidden"}`}>
              {" "}
              At our platform, we simplify financial planning by offering
              personalized advisory services designed to match your unique
              financial goals. Whether you are planning for retirement,
              investing for wealth growth, or securing your family’s future, our
              experienced financial experts are here to guide you every step of
              the way. Our approach ensures that your portfolio remains
              resilient against market volatility while consistently working
              towards your milestones.
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
