"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";
import {
  AlertCircle,
  TrendingUp,
  Wallet,
  Search,
  Target,
  Clock,
} from "lucide-react";

const mistakes = [
  {
    title: "Not boosting your SIP",
    desc: "Whenever you have extra funds, boost your SIP. Combination of regular SIP and top-ups leads to greater returns.",
    icon: <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-pink-500" />,
  },
  {
    title: "Choosing a high investment",
    desc: "Choose an amount you can sustain. A very high SIP might become a burden during financial emergencies.",
    icon: <Wallet className="w-4 h-4 md:w-5 md:h-5 text-pink-500" />,
  },
  {
    title: "Opting for the wrong fund",
    desc: "Research based on your risk appetite and goals. Ensure the fund aligns with your long-term horizon.",
    icon: <Search className="w-4 h-4 md:w-5 md:h-5 text-pink-500" />,
  },
  {
    title: "Setting unrealistic goals",
    desc: "Expect realistic returns (12%-15%). Assuming much higher returns can lead to poor financial decisions.",
    icon: <Target className="w-4 h-4 md:w-5 md:h-5 text-pink-500" />,
  },
  {
    title: "Preferring only lump sum",
    desc: "SIP is for everyone. It benefits from rupee cost averaging, buying more units when markets are low.",
    icon: <AlertCircle className="w-4 h-4 md:w-5 md:h-5 text-pink-500" />,
  },
  {
    title: "Making short-term investments",
    desc: "Tenure is more important than amount. SIP needs time to grow through the power of compounding.",
    icon: <Clock className="w-4 h-4 md:w-5 md:h-5 text-pink-500" />,
  },
];

export default function SIPMistakesSection() {
  return (
    <section className="w-full bg-slate-50 py-10 md:py-20 px-4 md:px-6 font-lexend overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 md:mb-16">
          <div className="space-y-2 md:space-y-4">
            <div className="flex items-center gap-3">
              <Typography
                variant="h3"
                as="h3"
                className="text-xl md:text-4xl font-black text-slate-800 mt-0"
              >
                6 mistakes to avoid
              </Typography>
            </div>
            <Typography
              variant="h5"
              as="h5"
              className="text-slate-500 font-medium text-xs md:text-lg mt-0 leading-relaxed max-w-xl"
            >
              Common mistakes new investors often make when starting a SIP.
            </Typography>
          </div>

          {/* Navigation Buttons (Hidden on small mobile for cleaner look, optional) */}
          <div className="flex gap-2 md:gap-3"></div>
        </div>

        {/* --- MISTAKES GRID --- */}
        {/* Mobile: Horizontal Scroll with smaller boxes | Desktop: Grid */}
        <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-6 overflow-x-auto pb-4 md:pb-0 no-scrollbar snap-x snap-mandatory">
          {mistakes.map((item, idx) => (
            <div
              key={idx}
              className="min-w-240px md:min-w-full bg-white p-5 md:p-8 rounded-1.5rem md:rounded-2rem border-t-4 border-pink-500 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-3 md:gap-4 snap-center"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-pink-50 flex items-center justify-center">
                {item.icon}
              </div>

              <Typography
                variant="h4"
                className="text-sm md:text-xl font-bold text-slate-800 mt-0 leading-tight"
              >
                {item.title}
              </Typography>

              <Typography
                variant="b1"
                className="text-slate-500 text-[11px] md:text-sm leading-relaxed mt-0"
              >
                {item.desc}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
