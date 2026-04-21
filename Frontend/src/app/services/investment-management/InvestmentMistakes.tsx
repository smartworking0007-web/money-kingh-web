"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";
import { 
  Target, 
  PieChart, 
  Hourglass, 
  LineChart, 
  ShieldAlert, 
  SearchCheck,
  LucideProps
} from "lucide-react";

const mistakes = [
  {
    title: "Not setting clear goals",
    desc: "A well-defined goal helps you choose right options and instills discipline.",
    icon: <Target />,
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
  },
  {
    title: "Not diversifying",
    desc: "Spreading money across assets minimizes risks and balances returns.",
    icon: <PieChart />,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    title: "Waiting too long",
    desc: "Early investing lets your money take advantage of compound interest.",
    icon: <Hourglass />,
    iconBg: "bg-lime-50",
    iconColor: "text-lime-600",
  },
  {
    title: "Timing the market",
    desc: "Focus on consistent contributions rather than waiting for the perfect time.",
    icon: <LineChart />,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    title: "No emergency plan",
    desc: "Prevents selling investments during unexpected circumstances.",
    icon: <ShieldAlert />,
    iconBg: "bg-pink-50",
    iconColor: "text-pink-600",
  },
  {
    title: "Not monitoring",
    desc: "Review regularly to ensure it doesn't stray from your goals.",
    icon: <SearchCheck />,
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-600",
  },
];
export default function InvestmentMistakes() {
  return (
    <section className="w-full bg-white py-10 md:py-10 px-4 md:px-6 font-lexend relative z-20">
      <div className="max-w-6xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-10 md:mb-16">
          <Typography
            variant="h4"
            as="h4"
            className="text-2xl md:text-4xl font-black text-slate-900 mb-3 mt-0"
          >
            Mistakes to Avoid
          </Typography>
        </div>

        {/* --- MISTAKES GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {mistakes.map((item, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center text-center p-5 md:p-6 bg-slate-50/50 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Smaller Icon Container */}
              <div
                className={`shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${item.iconBg} ${item.iconColor}`}
              >
                {React.cloneElement(item.icon as React.ReactElement<LucideProps>, { size: 24 })}
              </div>

              {/* Text Content */}
              <div className="space-y-2">
                <Typography
                  variant="h5"
                  className="text-base md:text-lg font-bold text-slate-900 mt-0 leading-tight"
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="b1"
                  className="text-slate-500 text-xs md:text-sm leading-relaxed mt-0"
                >
                  {item.desc}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}