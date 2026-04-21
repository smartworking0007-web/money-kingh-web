"use client";

import React, { useState } from "react";
import { Typography } from "@/app/components/ui/Typography";
import { ChevronDown } from "lucide-react";

export default function LAPBTJourney() {
  const [activeStep, setActiveStep] = useState<number | null>(0); // Default first step open

  const steps = [
    {
      title: "Step 1: Apply Online",
      content:
        "Share your details and submit the Balance Transfer request through our secure digital portal for a hassle-free experience.",
    },
    {
      title: "Step 2: Submit Documents",
      content:
        "Provide the required loan and property documents from your existing lender. Our experts will then conduct necessary verifications like income assessment, personal discussion, legal, and technical evaluations.",
    },
    {
      title: "Step 3: Loan Transfer and Approval",
      content:
        "Once verified online, your loan is successfully transferred to Money King LAP, allowing you to enjoy better rates and top-up facilities.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-12 py-12 font-lexend bg-white relative z-20">
      
      {/* --- HEADER (META H3) --- */}
      <div className="mb-10 text-center md:text-left">
        <Typography
          variant="h3"
          as="h3"
          className="text-[#1e293b] font-black text-xl md:text-3xl mb-2"
        >
          Switching Your Loan is Easy
        </Typography>
        <div className="w-20 h-1 bg-red-700 rounded-full mx-auto md:mx-0 mt-4" />
      </div>

      {/* --- ACCORDION STEPS --- */}
      <div className="max-w-5xl mx-auto space-y-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
              activeStep === index
                ? "border-red-200 shadow-lg shadow-red-50/50"
                : "border-slate-100 shadow-sm"
            }`}
          >
            {/* Header Clickable Area */}
            <button
              onClick={() => setActiveStep(activeStep === index ? null : index)}
              className={`w-full flex items-center justify-between p-5 text-left transition-colors ${
                activeStep === index
                  ? "bg-red-50/30"
                  : "bg-white hover:bg-slate-50"
              }`}
            >
              <Typography
                className={`font-bold text-sm md:text-lg m-0 transition-colors ${
                  activeStep === index ? "text-[#8B1D1D]" : "text-slate-700"
                }`}
              >
                {step.title}
              </Typography>
              <ChevronDown
                size={20}
                className={`text-slate-400 transition-transform duration-300 ${
                  activeStep === index ? "rotate-180 text-[#8B1D1D]" : ""
                }`}
              />
            </button>

            {/* Content Area */}
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                activeStep === index
                  ? "max-h-60 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-5 pt-0 text-slate-500 text-xs md:text-base leading-relaxed">
                <div className="w-full h-1px bg-red-100/50 mb-4" />
                {step.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}