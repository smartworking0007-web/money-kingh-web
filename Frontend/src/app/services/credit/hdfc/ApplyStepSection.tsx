"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";
import { User, CreditCard, Video, CheckCircle } from "lucide-react";

export default function ApplyStepSection() {
  const steps = [
    {
      title: "Enter personal details",
      icon: <User className="w-6 h-6 md:w-8 md:h-8" />,
    },
    {
      title: "Choose your credit card",
      icon: <CreditCard className="w-6 h-6 md:w-8 md:h-8" />,
    },
    {
      title: "Complete your VKYC",
      icon: <Video className="w-6 h-6 md:w-8 md:h-8" />,
    },
  ];

  return (
    <section className="w-full bg-white py-0 px-4 md:px-6 font-lexend overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* --- MAIN HEADING --- */}
        <Typography
          variant="h3"
          className="text-2xl md:text-5xl font-black text-slate-900 mb-4 leading-tight px-2"
        >
          How to get your credit card <br className="hidden md:block" /> instantly?
        </Typography>

        {/* --- ELIGIBILITY CRITERIA --- */}
        <div className="flex flex-col items-center space-y-2 mb-8">
          <p className="font-bold text-slate-800 text-sm md:text-base">
            Check credit card eligibility criteria
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 text-slate-500 font-medium text-[11px] md:text-sm">
            <div className="flex items-center gap-1.5 bg-slate-50 md:bg-transparent px-2 py-1 md:p-0 rounded-lg">
              <User size={14} className="text-slate-400" />
              <span>Min. 18 years of age</span>
            </div>
            <div className="h-3 w-px bg-slate-200 hidden md:block" />
            <div className="flex items-center gap-1.5 bg-slate-50 md:bg-transparent px-2 py-1 md:p-0 rounded-lg">
              <CheckCircle size={14} className="text-slate-400" />
              <span>Resident of India</span>
            </div>
          </div>
        </div>

        {/* --- STEPS CARD --- */}
        <div className="relative bg-linear-to-b from-slate-50 to-white rounded-1.5rem md:rounded-2rem p-6 md:p-10 border border-slate-100 shadow-lg mx-auto">
          <p className="text-[10px] md:text-sm font-bold text-slate-800 mb-8 md:mb-10 uppercase tracking-widest">
            Apply for a credit card online
          </p>

          <div className="relative flex flex-col md:flex-row justify-between items-center gap-10 md:gap-4">
            
            {/* Desktop Dotted Line */}
            <div className="absolute top-[35%] left-[20%] right-[20%] h-px border-t-2 border-dotted border-red-200 hidden md:block -z-10" />
            
            {/* Mobile Vertical Dotted Line (Optional decoration) */}
            <div className="absolute left-1/2 top-[10%] bottom-[10%] w-px border-l-2 border-dotted border-red-200 md:hidden -z-10 -translate-x-1/2" />

            {steps.map((step, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center space-y-3 max-w-[140px] relative z-10 bg-inherit md:bg-transparent px-2"
              >
                <div className="w-14 h-14 md:w-18 md:h-18 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-md border-4 border-white md:border-0">
                  {step.icon}
                </div>
                <p className="text-xs md:text-sm font-bold text-slate-800 leading-snug">
                  {step.title}
                </p>
              </div>
            ))}
          </div>

          {/* Assured Text */}
          <div className="mt-8 md:mt-10 pt-6 border-t border-slate-100">
            <p className="text-[11px] md:text-sm font-bold text-slate-600 bg-slate-50 inline-block px-4 py-1 rounded-full">
              Get an assured credit card with FD.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}