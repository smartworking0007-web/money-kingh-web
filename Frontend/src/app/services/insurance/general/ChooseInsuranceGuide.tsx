"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";
import {
  Search,
  ArrowLeftRight,
  ShieldCheck,
  FileText,
  BadgeDollarSign,
  HelpCircle
} from "lucide-react";

const stepsData = [
  { 
    id: 1, 
    title: "Identify Risks", 
    desc: "Understand if you need health, motor, or business cover.", 
    icon: <Search className="w-5 h-5" /> 
  },
  { 
    id: 2, 
    title: "Compare Plans", 
    desc: "Compare multiple plans based on benefits and premiums.", 
    icon: <ArrowLeftRight className="w-5 h-5" /> 
  },
  { 
    id: 3, 
    title: "Check CSR", 
    desc: "Choose insurers with high claim settlement ratios.", 
    icon: <ShieldCheck className="w-5 h-5" /> 
  },
  { 
    id: 4, 
    title: "Review Terms", 
    desc: "Read exclusions and conditions carefully before buying.", 
    icon: <FileText className="w-5 h-5" /> 
  },
  { 
    id: 5, 
    title: "Adequate Cover", 
    desc: "Ensure sum insured is enough to cover all risks.", 
    icon: <BadgeDollarSign className="w-5 h-5" /> 
  },
];

export default function ChooseInsuranceGuide() {
  return (
    <section className="w-full bg-white pt-6 pb-12 md:pt-10 md:pb-16 px-4 md:px-10 font-lexend overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
          <div className="max-w-xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 mb-3 bg-blue-50 text-blue-600 rounded-full">
              <HelpCircle className="w-3 h-3" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Expert Guide</span>
            </div>
            <Typography
              variant="h4"
              as="h2"
              className="text-2xl md:text-3xl font-black text-[#1e293b] leading-tight mt-0"
            >
              How to Choose the Right <span className="text-blue-600">General Insurance?</span>
            </Typography>
          </div>

          <div className="max-w-sm">
            <Typography
              variant="b1"
              className="text-gray-500 text-[12px] md:text-sm leading-relaxed mt-0"
            >
              Choosing the right insurance plan is important for maximum protection. 
              Follow these simple steps to find your match.
            </Typography>
          </div>
        </div>

        {/* --- GRID --- */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
          {stepsData.map((step) => (
            <div
              key={step.id}
              className="group p-4 rounded-2xl transition-all duration-300 border border-slate-100 flex flex-col bg-[#f8faff] hover:bg-white hover:shadow-md hover:border-blue-100"
            >
              {/* Icon */}
              <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-4 bg-white text-blue-600 shadow-sm border border-slate-50 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <div className="scale-90">
                  {step.icon}
                </div>
              </div>

              {/* Step Number */}
              <span className="text-[10px] font-bold text-blue-300 uppercase mb-1">Step 0{step.id}</span>

              {/* Title */}
              <Typography
                variant="h5"
                as="h3"
                className="text-[13px] md:text-sm font-bold mb-1.5 mt-0 text-slate-900 leading-tight"
              >
                {step.title}
              </Typography>

              {/* Description */}
              <Typography
                variant="b1"
                as="p"
                className="text-[11px] leading-snug mt-0 text-slate-500"
              >
                {step.desc}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}