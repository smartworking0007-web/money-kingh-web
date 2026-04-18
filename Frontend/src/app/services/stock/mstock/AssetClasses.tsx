"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";
import { 
  BarChart2, 
  FileText, 
  TrendingUp, 
  RefreshCw, 
  Zap, 
  Megaphone, 
  Briefcase 
} from "lucide-react";

const allAssets = [
  { icon: <BarChart2 className="w-6 h-6" />, title: "Stocks" },
  { icon: <FileText className="w-6 h-6" />, title: "Futures & Options" },
  { icon: <TrendingUp className="w-6 h-6" />, title: "Pay Later (MTF)" },
  { icon: <RefreshCw className="w-6 h-6" />, title: "Pledge Shares" },
  { icon: <Zap className="w-6 h-6" />, title: "ETFs" },
  { icon: <Megaphone className="w-6 h-6" />, title: "IPO" },
  { icon: <Briefcase className="w-6 h-6" />, title: "Mutual Funds" },
];

export default function AssetClasses() {
  return (
    <section className="w-full bg-white pt-4 pb-16 px-4 md:px-6 font-lexend -mt-10 md:-mt-20 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-10">
          <Typography
            variant="h2"
            as="h2"
            className="text-[#003B73] font-bold text-2xl md:text-5xl mb-2"
          >
            Invest. <span className="text-[#FF7A00]">Trade.</span> Prosper.
          </Typography>
          <p className="text-gray-500 text-base md:text-xl font-medium">
            One platform for all your needs
          </p>
        </div>

        {/* --- RESPONSIVE GRID SYSTEM --- */}
        <div className="flex flex-col gap-3 md:gap-4">
          
          {/* Row 1: Desktop pe 4, Tablet pe 2, Mobile pe 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {allAssets.slice(0, 4).map((item, idx) => (
              <AssetCard key={idx} icon={item.icon} title={item.title} />
            ))}
          </div>

          {/* Row 2: Desktop pe center align, Mobile pe normal grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap lg:justify-center gap-3 md:gap-4">
            {allAssets.slice(4).map((item, idx) => (
              <div key={idx} className="w-full lg:w-[calc(25%-12px)]">
                <AssetCard icon={item.icon} title={item.title} />
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}

function AssetCard({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-3 md:gap-4 p-4 md:p-5 bg-white border border-orange-100 rounded-xl shadow-sm hover:border-[#FF7A00] transition-all cursor-pointer group active:scale-95">
      <div className="text-[#FF7A00] shrink-0 transition-transform group-hover:scale-110">
        {icon}
      </div>
      <span className="text-[#003B73] font-bold text-base md:text-xl whitespace-nowrap">
        {title}
      </span>
    </div>
  );
}