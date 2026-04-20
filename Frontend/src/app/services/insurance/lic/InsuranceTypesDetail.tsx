"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";
import {
  ShieldCheck,
  Banknote,
  Lock,
  Scale,
  TrendingUp,
  HeartPulse,
  Milestone,
  Settings2,
} from "lucide-react";

const benefitsData = [
  { id: 1, title: "Financial Security", desc: "Protected for expenses and emergencies.", icon: <ShieldCheck className="w-5 h-5" /> },
  { id: 2, title: "Income Replace", desc: "Maintains family standard of living.", icon: <Banknote className="w-5 h-5" /> },
  { id: 3, title: "Debt Protection", desc: "Covers loans and personal debts.", icon: <Lock className="w-5 h-5" /> },
  { id: 4, title: "Tax Benefits", desc: "Enjoy deductions under 80D/10(10D).", icon: <Scale className="w-5 h-5" /> },
  { id: 5, title: "Wealth Creation", desc: "Build savings with ULIPs and cover.", icon: <TrendingUp className="w-5 h-5" /> },
  { id: 6, title: "Peace of Mind", desc: "Focus on goals without worries.", icon: <HeartPulse className="w-5 h-5" /> },
  { id: 7, title: "Future Planning", desc: "Plan for education and retirement.", icon: <Milestone className="w-5 h-5" /> },
  { id: 8, title: "Flexible Riders", desc: "Add-ons for critical illness/accident.", icon: <Settings2 className="w-5 h-5" /> },
];

export default function LifeInsuranceBenefits() {
  return (
    <section className="w-full bg-white py-10 md:py-16 px-4 md:px-10 font-lexend overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-4 md:gap-6">
          <div className="max-w-xl">
            <div className="inline-block px-3 py-1 mb-3 bg-blue-50 text-blue-600 rounded-full text-[10px] font-bold uppercase tracking-wider">
              ✦ Why choose us
            </div>
            <Typography
              variant="h4"
              as="h1"
              className="text-2xl md:text-4xl font-black text-[#1e293b] leading-tight mt-0"
            >
              Benefits of <span className="text-[#004687]">Life Insurance</span>
            </Typography>
          </div>

          <div className="max-w-sm">
            <Typography
              variant="b1"
              className="text-gray-500 text-[13px] md:text-sm leading-relaxed mt-0"
            >
              Life insurance secures your family’s future, providing protection
              and supporting long-term financial planning.
            </Typography>
          </div>
        </div>

        {/* --- GRID --- */}
        {/* Mobile par 2 columns (grid-cols-2) aur Desktop par 4 (lg:grid-cols-4) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {benefitsData.map((benefit) => (
            <div
              key={benefit.id}
              className="group relative p-4 md:p-6 rounded-2xl md:rounded-3xl transition-all duration-300 border border-slate-100 flex flex-col justify-between bg-[#f8faff] hover:bg-white hover:shadow-lg hover:border-slate-200"
            >
              <div className="w-full">
                {/* Icon Circle - Mobile par thoda chota */}
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center mb-4 md:mb-6 bg-white text-slate-700 shadow-sm border border-slate-50">
                  <div className="scale-75 md:scale-100">
                    {benefit.icon}
                  </div>
                </div>

                {/* Title */}
                <Typography
                  variant="h5"
                  as="h3"
                  className="text-sm md:text-base font-bold mb-1 md:mb-2 mt-0 text-slate-900 leading-tight"
                >
                  {benefit.title}
                </Typography>

                {/* Description */}
                <Typography
                  variant="b1"
                  as="p"
                  className="text-[11px] md:text-[12px] leading-tight mt-0 text-slate-500"
                >
                  {benefit.desc}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}