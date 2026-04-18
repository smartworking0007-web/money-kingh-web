"use client";

import React, { useState } from "react";
import { Typography } from "@/app/components/ui/Typography";

export default function MachineryLoanContent() {
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
          What is Machinery Loan?
        </Typography>

        <div className="max-w-5xl mx-auto border-b border-gray-200 pb-12">
          <p className="text-gray-500 leading-relaxed text-base md:text-[18px]">
            Our machinery finance solutions are designed to support manufacturers, MSMEs, 
            and businesses looking to expand capacity or adopt new technology. Whether 
            you want to replace outdated equipment or invest in advanced machinery, 
            we ensure a smooth and hassle-free loan process with flexible repayment options.
            
            {/* Conditional Content */}
            <span className={`${isExpanded ? "inline" : "hidden"}`}>
              {" "} With fast disbursal and expert guidance, you can achieve your business 
              goals while maintaining financial stability. We offer customized financing 
              for both new and used machinery, ensuring that capital constraints never 
              hinder your production efficiency. Benefit from competitive interest rates 
              and tenures designed to match your business cash flow cycles.
            </span>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="ml-2 text-blue-600 hover:text-blue-800 font-medium underline-offset-4 border-b border-blue-600 transition-all cursor-pointer bg-transparent border-none"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}