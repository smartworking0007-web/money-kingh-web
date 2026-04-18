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
    <section className="w-full bg-white py-8 md:py-12 px-4 md:px-6 font-lexend overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Compact Title */}
        <Typography variant="h2" className="text-2xl md:text-4xl font-black text-[#1e293b] text-center mb-8 md:mb-10">
          Benefits of SIP
        </Typography>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-50/50 p-6 md:p-10 rounded-[2.5rem] border border-slate-100">
          
          {/* LEFT: Mobile Image Area (Fixed Height for one-page look) */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="relative w-[220px] md:w-[280px] aspect-9/18 drop-shadow-2xl">
              <Image 
                src="/images/Loan/pmss.png" 
                alt="SIP Mobile App"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* RIGHT: Accordion Area */}
          <div className="lg:col-span-7 space-y-2.5 order-1 lg:order-2">
            {sipBenefits.map((benefit, idx) => (
              <div 
                key={idx} 
                className={`group border rounded-xl md:rounded-2xl transition-all duration-300 ${
                  openIndex === idx ? "border-[#981b48] bg-white shadow-md" : "border-slate-100 bg-white/50"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-3.5 md:p-4 text-left"
                >
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center transition-colors ${
                      openIndex === idx ? 'bg-[#981b48] text-white' : 'bg-slate-100 text-[#981b48]'
                    }`}>
                      {benefit.icon}
                    </div>
                    <span className={`font-bold text-xs md:text-sm lg:text-base ${
                      openIndex === idx ? 'text-[#981b48]' : 'text-slate-600'
                    }`}>
                      {benefit.title}
                    </span>
                  </div>
                  <ChevronDown 
                    size={18} 
                    className={`transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-[#981b48]' : 'text-slate-400'}`} 
                  />
                </button>

                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openIndex === idx ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 pb-4 ml-11 md:ml-14 text-slate-500 text-[11px] md:text-sm leading-relaxed border-t border-slate-50 pt-2">
                    {benefit.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}