"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";
import { CandlestickChart, Star, ClipboardList, LogOut, LayoutList } from "lucide-react";

const features = [
  {
    icon: <CandlestickChart className="w-5 h-5 md:w-6 md:h-6 text-[#FF7A00]" />,
    title: "Trade from charts real time",
    active: true,
  },
  {
    icon: <Star className="w-5 h-5 md:w-6 md:h-6 text-gray-500" />,
    title: "Watchlist PRO",
    active: false,
  },
  {
    icon: <ClipboardList className="w-5 h-5 md:w-6 md:h-6 text-gray-500" />,
    title: "Advanced order types",
    active: false,
  },
  {
    icon: <LogOut className="w-5 h-5 md:w-6 md:h-6 text-gray-500 rotate-180" />,
    title: "Bulk exit",
    active: false,
  },
  {
    icon: <LayoutList className="w-5 h-5 md:w-6 md:h-6 text-gray-500" />,
    title: "Advanced option chain",
    active: false,
  },
];

export default function TradingFeatures() {
  return (
    /* -mt-12 se -mt-20 tak adjust kiya hai upar shift karne ke liye */
    <section className="w-full bg-white pt-0 pb-12 px-4 md:px-6 font-lexend -mt-12 md:-mt-24 relative z-20">
      <div className="max-w-3xl mx-auto">
        
        {/* --- HEADER SECTION (Smaller Margin) --- */}
        <div className="text-center mb-8">
          <Typography
            variant="h2"
            as="h2"
            className="text-[#003B73] font-bold text-2xl md:text-4xl mb-2"
          >
            Powerful. <span className="text-[#FF7A00]">Stable.</span> Secure.
          </Typography>
          <p className="text-gray-500 text-base md:text-lg font-light">
            Elevate your trading experience
          </p>
        </div>

        {/* --- FEATURES LIST (Compact Box) --- */}
        <div className="bg-gray-50/50 rounded-3xl md:rounded-[2.5rem] p-4 md:p-8 border border-gray-100 shadow-sm">
          <div className="space-y-2 md:space-y-3 max-w-xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 md:gap-5 p-3 md:p-4 rounded-xl md:rounded-full transition-all duration-300 cursor-pointer ${
                  feature.active 
                  ? " shadow-md border border-gray-100 scale-[1.02]" 
                  : "hover:bg-white/40"
                }`}
              >
                <div className={`p-1.5 md:p-2 rounded-lg ${feature.active ? 'bg-orange-50' : ''}`}>
                  {feature.icon}
                </div>
                <span className={`text-sm md:text-lg font-medium ${feature.active ? "text-[#1e293b]" : "text-gray-500"}`}>
                  {feature.title}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}