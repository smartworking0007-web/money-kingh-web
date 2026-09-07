"use client";

import React, { useState } from "react";
import { Typography } from "@/app/components/ui/Typography";
import { ChevronDown, Target, Clock, Settings, ShieldCheck, PieChart, Zap } from "lucide-react";
import Image from "next/image";

const sipBenefits = [
  {
    title: "An ideal solution to the new dreams",
    desc: "One can plan different life goals be it conventional goals such as children's future, retirement, or international holidays.",
    icon: <Target className="w-4 h-4 md:w-5 md:h-5" />,
  },
  {
    title: "Convenience for the busy generation",
    desc: "In SIP, a fixed amount gets invested automatically. One doesn't need to spend time on a regular basis.",
    icon: <Clock className="w-4 h-4 md:w-5 md:h-5" />,
  },
  {
    title: "You decide when, where, how much",
    desc: "SIP allows you to choose frequency, investment amount, and tenor as per your financial goals.",
    icon: <Settings className="w-4 h-4 md:w-5 md:h-5" />,
  },
  {
    title: "Stay worry-free",
    desc: "The biggest benefit of SIP is rupee cost averaging. You get more units when markets are down.",
    icon: <ShieldCheck className="w-4 h-4 md:w-5 md:h-5" />,
  },
  {
    title: "Save regularly",
    desc: "SIP brings financial discipline by automating savings, helping you build a buffer for emergencies.",
    icon: <PieChart className="w-4 h-4 md:w-5 md:h-5" />,
  },
  {
    title: "Experience the power of compounding",
    desc: "Returns get added to the principal and generate more returns. Starting early leads to a larger corpus.",
    icon: <Zap className="w-4 h-4 md:w-5 md:h-5" />,
  },
];

export default function SIPBenefitsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-white py-6 md:py-14 px-3 sm:px-6 font-lexend overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <Typography 
          variant="h2" 
          className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1e293b] text-center mb-6 md:mb-10"
        >
          Benefits of SIP
        </Typography>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center bg-slate-50/60 p-4 sm:p-6 md:p-10 rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] border border-slate-100">
          
          {/* Mobile Image Container */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1 pt-2 lg:pt-0">
            <div className="relative w-[190px] sm:w-[240px] md:w-[280px] h-[360px] sm:h-[440px] md:h-[500px] drop-shadow-xl transition-all duration-300">
              <Image 
                src="/images/Loan/sip.webp" 
                alt="SIP Benefits Visual"
                fill
                sizes="(max-width: 640px) 190px, (max-width: 1024px) 240px, 280px"
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Accordion Container */}
          <div className="lg:col-span-7 space-y-2 sm:space-y-3 order-1 lg:order-2">
            {sipBenefits.map((benefit, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div 
                  key={idx} 
                  className={`border rounded-xl md:rounded-2xl transition-all duration-200 ${
                    isOpen 
                      ? "border-[#981b48]/60 bg-white shadow-sm ring-1 ring-[#981b48]/20" 
                      : "border-slate-200/70 bg-white hover:border-slate-300"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-3 sm:p-4 text-left gap-3 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0">
                      <div className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                        isOpen ? "bg-[#981b48] text-white" : "bg-slate-100 text-[#981b48]"
                      }`}>
                        {benefit.icon}
                      </div>

                      <span className={`font-bold text-xs sm:text-sm md:text-base leading-snug break-words ${
                        isOpen ? "text-[#981b48]" : "text-slate-700"
                      }`}>
                        {benefit.title}
                      </span>
                    </div>

                    <ChevronDown 
                      className={`w-4 h-4 sm:w-5 sm:h-5 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[#981b48]" : "text-slate-400"
                      }`} 
                    />
                  </button>

                  {/* Accordion Content with CSS Grid Animation */}
                  <div 
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-3 pb-3.5 pt-1 sm:px-4 sm:pb-4 ml-10 sm:ml-12 md:ml-14 text-slate-500 text-xs sm:text-sm leading-relaxed border-t border-slate-100">
                        {benefit.desc}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}