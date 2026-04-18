"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";

const tools = [
  {
    title: "Option Strategy Builder",
    description: "Use pre-built or create your own options strategies",
    highlight: true,
  },
  {
    title: "Trading API",
    description: "Automate your trades with unlimited GET requests & orders/day",
    highlight: false,
  },
  {
    title: "Basket Orders",
    description: "Create a basket of scrips and execute orders in 1-click",
    highlight: false,
  },
  {
    title: "OI Alerts",
    description: "Set alerts for changes in open interest to stay on top of your trades",
    highlight: false,
  },
];

export default function OptionsTools() {
  return (
    /* -mt-12 se -mt-24 ka use kiya hai section ko upar shift karne ke liye */
    <section className="w-full bg-white pt-0 pb-12 px-4 md:px-6 font-lexend -mt-12 md:-mt-24 relative z-20">
      <div className="max-w-6xl mx-auto">
        
        {/* --- HEADER (Compact Spacing) --- */}
        <div className="text-center mb-8 md:mb-12">
          <Typography
            variant="h2"
            as="h2"
            className="text-[#FF7A00] font-bold text-2xl md:text-5xl leading-tight"
          >
            Advanced Options <span className="text-[#003B73]">Trading Tools</span>
          </Typography>
        </div>

        {/* --- TOOLS GRID (Responsive) --- */}
        <div className="flex flex-col gap-4">
          
          {/* Main Cards: Mobile par 1 column, Desktop par 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
            {tools.map((tool, idx) => (
              <ToolCard key={idx} {...tool} />
            ))}
          </div>

          {/* Bottom Card: Centered on Desktop, Full on Mobile */}
          <div className="flex justify-center">
            <div className="w-full md:w-[calc(50%-10px)] lg:w-[calc(50%-12px)]">
              <ToolCard 
                title="Watchlist Pro" 
                description="Enter and exit trades quickly using our 1-click Watchlist Pro" 
                highlight={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ToolCard({ title, description, highlight }: { title: string; description: string; highlight: boolean }) {
  return (
    <div 
      className={`flex flex-col items-center text-center p-5 md:p-8 rounded-xl border transition-all duration-300 cursor-pointer shadow-sm active:scale-[0.98] md:hover:shadow-md h-full
        ${highlight 
          ? "bg-[#FFF2E9] border-[#FF7A00]/40" 
          : "bg-white border-orange-100 md:hover:border-[#FF7A00]"
        }`}
    >
      <h3 className={`font-bold text-base md:text-xl mb-1.5 md:mb-2 ${highlight ? "text-[#FF7A00]" : "text-[#1e293b]"}`}>
        {title}
      </h3>
      <p className="text-gray-500 text-xs md:text-base leading-relaxed px-2">
        {description}
      </p>
    </div>
  );
}