"use client";

import React, { useState } from "react";
import { Typography } from "@/app/components/ui/Typography";
import {
  ArrowRightLeft,
  PlusCircle,
  Home,
  GraduationCap,
  HeartPulse,
} from "lucide-react";

export default function HomeLoanContent() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Iska use niche map function mein kiya hai (Error Fix)
  const topUpUses = [
    { icon: <Home size={18} />, label: "Renovation" },
    { icon: <GraduationCap size={18} />, label: "Education" },
    { icon: <HeartPulse size={18} />, label: "Medical" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-12 py-6 font-lexend bg-white -mt-40 md:-mt-60 relative z-30 rounded-t-[40px] md:rounded-t-[60px] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
      {/* --- SECTION 1: WHAT IS HOME LOAN --- */}
      <div className="text-center mb-10 pt-10 md:pt-16">
        <Typography
          variant="h3"
          as="h3"
          className="text-[#1e293b] font-black mb-4 text-2xl md:text-[40px] leading-tight"
        >
          What is a <span className="text-blue-600">Home Loan?</span>
        </Typography>

        <div className="max-w-4xl mx-auto border-b border-slate-100 pb-10">
          <p className="text-slate-500 leading-relaxed text-sm md:text-lg px-4">
            A home loan is a secured financial product that helps individuals
            purchase, construct, or renovate a residential property. In India,
            banks and NBFCs provide home loans at competitive interest rates,
            where the property itself acts as collateral until the loan is fully
            repaid.
            <span
              className={`${isExpanded ? "inline" : "hidden"} transition-all duration-500`}
            >
              {" "}
              Discover our diverse selection of products offering highly
              competitive interest rates, extended repayment periods, and
              additional advantages such as EMI waivers.
            </span>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="ml-2 text-blue-600 hover:text-blue-800 font-bold underline transition-all text-xs md:text-sm"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </p>
        </div>
      </div>

      {/* --- SECTION 2: BALANCE TRANSFER & TOP-UP --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch bg-slate-50 rounded-[30px] md:rounded-[40px] p-6 md:p-12 border border-slate-100">
        {/* Left Side: Content */}
        <div className="space-y-6 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider w-fit">
            <ArrowRightLeft size={14} /> Balance Transfer + Top Up
          </div>

          <Typography
            variant="h4"
            as="h3"
            className="text-[#1e293b] font-black text-xl md:text-3xl leading-tight"
          >
            Reduce Your EMI & Unlock <br className="hidden md:block" />
            <span className="text-blue-600">Extra Funds</span> on Your Property
          </Typography>

          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            A Home Loan Balance Transfer allows you to shift your existing loan
            to another lender offering <strong>lower interest rates</strong>.
          </p>

          {/* FIX: Yahan topUpUses use ho raha hai, ab error nahi aayega */}
          <div className="grid grid-cols-3 md:flex md:flex-wrap gap-3 pt-2">
            {topUpUses.map((item, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row items-center gap-2 bg-white p-3 rounded-2xl shadow-sm border border-slate-100 text-slate-700 text-[10px] md:text-sm font-bold text-center"
              >
                <span className="text-blue-600">{item.icon}</span>
                {item.label}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Highlight Box */}
        <div className="bg-blue-600 rounded-[30px] p-8 text-white relative overflow-hidden shadow-xl mt-6 lg:mt-0">
          <PlusCircle
            className="absolute -right-8 -top-8 text-blue-500 opacity-30"
            size={160}
          />

          <Typography className="text-blue-100 font-bold uppercase tracking-widest text-[10px] md:text-xs mb-4">
            The Money King Advantage
          </Typography>

          <Typography
            variant="h5"
            className="text-white font-black text-lg md:text-2xl mb-6 leading-relaxed"
          >
            Access additional funds at interest rates lower than personal loans.
          </Typography>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-500 rounded-full flex items-center justify-center shrink-0">
                ✓
              </div>
              <span className="text-sm md:text-base font-medium">
                Lower Monthly EMI Burden
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-500 rounded-full flex items-center justify-center shrink-0">
                ✓
              </div>
              <span className="text-sm md:text-base font-medium">
                Instant Funds for Urgent Needs
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
