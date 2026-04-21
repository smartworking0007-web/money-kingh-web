"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";
import { 
  ShieldCheck, 
  Lock, 
  BarChart3, 
  RotateCw, 
  HeartHandshake 
} from "lucide-react";

const benefits = [
  { 
    title: "Financial Security", 
    desc: "Ensures long-term stability for you and your family.", 
    icon: <ShieldCheck className="w-5 h-5 md:w-6 md:h-6" />,
    bg: "bg-blue-50",
    color: "text-blue-600"
  },
  { 
    title: "Loss Protection", 
    desc: "Safeguards against sudden and unexpected financial losses.", 
    icon: <Lock className="w-5 h-5 md:w-6 md:h-6" />,
    bg: "bg-emerald-50",
    color: "text-emerald-600"
  },
  { 
    title: "Better Planning", 
    desc: "Helps in creating a structured and secure financial roadmap.", 
    icon: <BarChart3 className="w-5 h-5 md:w-6 md:h-6" />,
    bg: "bg-amber-50",
    color: "text-amber-600"
  },
  { 
    title: "Business Continuity", 
    desc: "Ensures operations continue smoothly even during crises.", 
    icon: <RotateCw className="w-5 h-5 md:w-6 md:h-6" />,
    bg: "bg-purple-50",
    color: "text-purple-600"
  },
  { 
    title: "Peace of Mind", 
    desc: "Focus on your goals while we manage your uncertainties.", 
    icon: <HeartHandshake className="w-5 h-5 md:w-6 md:h-6" />,
    bg: "bg-red-50",
    color: "text-[#8B1D1D]"
  },
];

export default function InsuranceBenefits() {
  return (
    <section className="w-full bg-white py-12 md:py-20 px-4 md:px-6 font-lexend relative z-20">
      <div className="max-w-6xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-10 md:mb-16">
          <Typography
            variant="h3"
            as="h3"
            className="text-2xl md:text-4xl font-black text-slate-900 mb-3 mt-0 leading-tight"
          >
            Benefits of Insurance and Risk Management
          </Typography>
          <div className="h-1.5 w-20 bg-[#8B1D1D] mx-auto rounded-full" />
        </div>

        {/* --- BENEFITS GRID (Compact & Balanced) --- */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="group w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)] p-6 bg-white border border-slate-100 rounded-[2.5rem] hover:shadow-2xl hover:shadow-red-900/5 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon Container */}
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${benefit.bg} ${benefit.color}`}>
                {benefit.icon}
              </div>

              {/* Text Content */}
              <div className="space-y-2">
                <Typography
                  variant="h5"
                  className="text-lg md:text-xl font-bold text-slate-900 mt-0 leading-tight group-hover:text-[#8B1D1D] transition-colors"
                >
                  {benefit.title}
                </Typography>
                <Typography
                  variant="b1"
                  className="text-slate-500 text-xs md:text-sm leading-relaxed mt-0 opacity-80"
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