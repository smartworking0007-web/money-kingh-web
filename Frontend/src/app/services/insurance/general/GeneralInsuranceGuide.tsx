"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";
import { CheckCircle2, FileText, BadgeCheck } from "lucide-react";

const targetAudience = [
  "Individuals looking for health protection",
  "Vehicle owners (mandatory motor insurance)",
  "Frequent travelers",
  "Homeowners and tenants",
  "Business owners and entrepreneurs",
];

const documents = [
  "Identity Proof (PAN/Aadhaar)",
  "Address Proof",
  "Property Documents",
  "Income Proof",
  "Passport (Travel)",
];

export default function GeneralInsuranceGuide() {
  return (
    // pt-4 (mobile) aur md:pt-8 (web) rakha hai taaki bilkul chipke bhi nahi aur top par rahe
    <section className="w-full  pt-0 md:pt-0 pb-12 px-4 font-lexend">
      <div className="max-w-3xl mx-auto mt-0">
        
        {/* --- SECTION 1: WHO SHOULD BUY --- */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-3 justify-start">
            <BadgeCheck className="w-4 h-4 text-blue-600" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
              Eligibility
            </span>
          </div>

          <Typography
            variant="h3"
            as="h2"
            className="text-xl md:text-2xl font-bold text-slate-800 mb-5 text-left leading-tight mt-0"
          >
            Who Should Buy General Insurance?
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {targetAudience.map((item, idx) => (
              <div 
                key={idx} 
                className="flex items-center space-x-3 bg-white p-2.5 rounded-lg border border-slate-200/60 shadow-sm hover:border-blue-200 transition-all"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="text-slate-600 font-medium text-[12px] md:text-sm">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* --- SECTION 2: DOCUMENTS REQUIRED --- */}
        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
          <div className="flex items-center space-x-2 mb-3">
            <FileText className="w-3.5 h-3.5 text-slate-400" />
            <Typography className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              Required Checklist
            </Typography>
          </div>
          
          <Typography
            variant="h4"
            className="text-lg md:text-xl font-bold text-slate-800 mb-4 mt-0"
          >
            Documents Required
          </Typography>

          <div className="flex flex-wrap gap-2">
            {documents.map((doc, idx) => (
              <div 
                key={idx} 
                className="flex items-center px-3 py-1.5 bg-slate-50 rounded-lg border border-slate-100 group hover:bg-blue-50 transition-colors"
              >
                <span className="w-4 h-4 flex items-center justify-center bg-white rounded text-[9px] font-bold text-slate-400 mr-2 border border-slate-200 group-hover:text-blue-600 group-hover:border-blue-200">
                  {idx + 1}
                </span>
                <span className="text-slate-600 font-medium text-[11px] md:text-[12px]">
                  {doc}
                </span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-left text-slate-400 text-[10px] mt-5">
          *Terms and conditions apply. Policy approval is subject to document verification.
        </p>
      </div>
    </section>
  );
}