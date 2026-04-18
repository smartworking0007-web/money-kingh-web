"use client";

import React, { useState } from "react";
import { Typography } from "@/app/components/ui/Typography";

export default function HealthInsuranceContent() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 font-lexend">
      {/* --- TOP SECTION --- */}
      <div className="text-center mb-12">
        <Typography
          variant="h3"
          as="h3"
          className="text-[#1e293b] font-black mb-6 text-xl md:text-[42px]  mt-0"
        >
          What is Health Insurance?
        </Typography>

        <div className="max-w-5xl mx-auto border-b border-gray-200 pb-12">
          <p className="text-gray-500 leading-relaxed text-base md:text-[18px] mt-0">
            Health Insurance is a financial protection plan that covers your medical 
            expenses during illnesses, accidents, or hospitalization. It acts as a 
            safety net, ensuring that you and your family do not face financial 
            stress during medical emergencies.
            
            {/* Conditional Content */}
            <span className={`${isExpanded ? "inline" : "hidden"}`}>
              {" "} Contrary to the common belief that only elderly individuals need 
              health insurance, it is essential for people of all age groups. A 
              well-chosen health insurance policy provides peace of mind by covering 
              hospital bills, treatments, and other healthcare expenses. It also 
              offers benefits like pre and post-hospitalization costs, annual health 
              check-ups, and tax savings under Section 80D.
            </span>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="ml-2 text-[#004687] hover:text-[#003566] font-bold underline-offset-4 border-b-2 border-[#004687] transition-all cursor-pointer bg-transparent border-none py-0"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}