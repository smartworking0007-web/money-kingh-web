"use client";

import React, { useState } from "react";
import { Typography } from "@/app/components/ui/Typography";
import { Zap, TrendingUp, Wallet, CheckCircle2 } from "lucide-react";

const benefits = [
  {
    id: 1,
    title: "Immediate Compounding",
    desc: "Your entire investment starts growing from day one, maximizing compounding benefits.",
    icon: <Zap className="w-5 h-5" />,
  },
  {
    id: 2,
    title: "Higher Return Potential",
    desc: "When markets perform well, lump sum investments can deliver higher returns compared to staggered investments.",
    icon: <TrendingUp className="w-5 h-5" />,
  },
  {
    id: 3,
    title: "Ideal for Surplus Funds",
    desc: "Perfect for investing bonuses, inheritance, or maturity proceeds in one go.",
    icon: <Wallet className="w-5 h-5" />,
  },
  {
    id: 4,
    title: "Simplicity",
    desc: "No need to track monthly payments—just invest once and stay invested for the long term.",
    icon: <CheckCircle2 className="w-5 h-5" />,
  },
];

export default function LumpsumBenefitsUI() {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full bg-white py-12 md:py-20 px-4 font-lexend overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* --- HEADER --- */}
        <Typography variant="h3" className="text-2xl md:text-4xl font-black text-slate-900 mb-12 mt-0">
          Benefits of <span className="text-[#D84B7E]">Lump Sum</span> Investment
        </Typography>

        {/* --- PROGRESS LINE UI --- */}
        <div className="relative flex items-center justify-between mb-16 max-w-3xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-pink-100 -translate-y-1/2 z-0" />
          
          {benefits.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActive(idx)}
              className={`relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all duration-500 border-4 ${
                active === idx 
                ? "bg-[#D84B7E] border-pink-100 text-white scale-125 shadow-xl shadow-pink-200" 
                : "bg-pink-50 border-white text-[#D84B7E] hover:bg-pink-100 shadow-sm"
              }`}
            >
              {item.icon}
              {/* Active Glow Effect */}
              {active === idx && (
                <div className="absolute inset-0 rounded-full animate-ping bg-pink-400 opacity-20" />
              )}
            </button>
          ))}
        </div>

        {/* --- CONTENT AREA (Changes on Click) --- */}
        <div className="max-w-2xl mx-auto min-h-[140px] animate-in fade-in slide-in-from-bottom-4 duration-500">
          <Typography variant="h4" className="text-xl md:text-2xl font-bold text-slate-800 mb-4 mt-0">
            {benefits[active].title}
          </Typography>
          <Typography variant="b1" className="text-slate-500 text-sm md:text-lg leading-relaxed mt-0">
            {benefits[active].desc}
          </Typography>
        </div>

        {/* --- BUTTON --- */}
        <div className="mt-12">
          <button className="px-10 py-3.5 bg-linear-to-r from-[#D84B7E] to-[#b03a64] text-white rounded-full font-bold text-sm md:text-base shadow-lg hover:shadow-pink-200 transition-all active:scale-95 uppercase tracking-wider">
            Get Started Now
          </button>
        </div>

      </div>
    </section>
  );
}