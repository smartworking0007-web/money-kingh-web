"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";
import { BarChart3, ShieldCheck, Wallet, Lightbulb } from "lucide-react";

export default function SIPRulesCompact() {
  const rules = [
    {
      title: "Market Conditions",
      desc: "Lump sum for stable markets to compound longer; SIPs for uncertain markets to spread risk.",
      icon: <BarChart3 className="w-4 h-4 text-[#D84B7E]" />,
      border: "border-[#D84B7E]"
    },
    {
      title: "Risk Tolerance",
      desc: "Lumpsum if you're okay with fluctuations. SIPs for a calmer, steady entry into the market.",
      icon: <ShieldCheck className="w-4 h-4 text-[#004687]" />,
      border: "border-[#004687]"
    },
    {
      title: "Funds Availability",
      desc: "Lump sum for bonuses/inheritance; SIPs for salaried earners to invest monthly without stress.",
      icon: <Wallet className="w-4 h-4 text-emerald-500" />,
      border: "border-emerald-500"
    }
  ];

  return (
    <section className="w-full bg-white py-10 px-4 md:px-6 font-lexend">
      <div className="max-w-5xl mx-auto">
        
        {/* --- COMPACT HEADER --- */}
        <div className="mb-8 text-center md:text-left border-b border-slate-100 pb-4">
          <Typography variant="h3" className="text-xl md:text-3xl font-black text-slate-900 mt-0">
            Three Rules of Thumb
          </Typography>
        </div>

        {/* --- SMALL CARDS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {rules.map((rule, idx) => (
            <div key={idx} className={`p-5 rounded-2xl border-2 ${rule.border} bg-white shadow-sm hover:shadow-md transition-all`}>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-slate-50 rounded-lg">{rule.icon}</div>
                <Typography variant="h4" className="text-sm md:text-base font-bold text-slate-800 m-0">
                  {rule.title}
                </Typography>
              </div>
              <p className="text-slate-500 text-[11px] md:text-xs leading-relaxed font-medium m-0">
                {rule.desc}
              </p>
            </div>
          ))}
        </div>

        {/* --- MINI EXAMPLES SECTION --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-50 p-5 rounded-2xl flex items-start gap-4 border border-slate-100">
            <div className="mt-1"><Lightbulb size={18} className="text-pink-500" /></div>
            <div>
              <p className="text-xs font-bold text-slate-800 mb-1">Bonus Strategy</p>
              <p className="text-slate-500 text-[11px] leading-snug m-0">
                Investor X invests ₹3 lakh yearly bonus as a lump sum to boost compounding.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 p-5 rounded-2xl flex items-start gap-4 border border-slate-100">
            <div className="mt-1"><Lightbulb size={18} className="text-[#004687]" /></div>
            <div>
              <p className="text-xs font-bold text-slate-800 mb-1">Monthly Discipline</p>
              <p className="text-slate-500 text-[11px] leading-snug m-0">
                A professional invests ₹5,000 monthly via SIP to build wealth steadily.
              </p>
            </div>
          </div>
        </div>

        {/* --- FINAL NOTE --- */}
        <div className="mt-6 text-center">
          <p className="text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-wider">
            Match your choice with your risk comfort & life goals.
          </p>
        </div>

      </div>
    </section>
  );
}