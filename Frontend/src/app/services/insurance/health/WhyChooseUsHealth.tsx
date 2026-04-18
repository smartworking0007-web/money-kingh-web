"use client";

import React, { useState } from "react";
import { Typography } from "@/app/components/ui/Typography";
import { 
  ShieldCheck, 
  Headset, 
  Home, 
  Clock, 
  Hospital, 
  Trophy 
} from "lucide-react";

const claimsData = [
  {
    title: "Anywhere Cashless",
    desc: "Avail Cashless Claims across India with 14000+ Network Hospitals.",
    icon: <ShieldCheck className="w-4 h-4 text-blue-600" />,
  },
  {
    title: "24*7 Support",
    desc: "Call for claim intimation and telehealth services anytime, 24*7.",
    icon: <Headset className="w-4 h-4 text-blue-600" />,
  },
  {
    title: "In-house Settlement",
    desc: "We settle claims without TPAs through our qualified in-house team.",
    icon: <Home className="w-4 h-4 text-blue-600" />,
  },
  {
    title: "3-Hour Approval",
    desc: "96% of cashless claims are settled within just 3 hours for quick care.",
    icon: <Clock className="w-4 h-4 text-blue-600" />,
  },
  {
    title: "Quality Network",
    desc: "Best insurance plans under our verified network for quality treatment.",
    icon: <Hospital className="w-4 h-4 text-blue-600" />,
  },
  {
    title: "Awarded Service",
    desc: "Awarded for best claim settlement and innovative health products.",
    icon: <Trophy className="w-4 h-4 text-blue-600" />,
  },
];

export default function WhyChooseUsHealth() {
  const [activeTab, setActiveTab] = useState("claims");

  return (
   
    <section className="w-full bg-[#f8fafc] py-10 md:py-16 px-4 font-lexend -mt-10 md:-mt-16 relative z-20 rounded-t-2rem md:rounded-t-none">
      <div className="max-w-5xl mx-auto">
        
        {/* --- COMPACT HEADER --- */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <Typography variant="h3" as="h3" className="text-xl md:text-3xl font-black text-slate-900 mb-3 mt-0 leading-tight">
            Why Choose Us?
          </Typography>
          <Typography variant="b1" className="text-slate-500 text-[11px] md:text-sm leading-relaxed mt-0">
            Trusted partner offering customized and affordable health solutions with seamless claim assistance.
          </Typography>
        </div>

        {/* --- MINI TOGGLE TABS --- */}
        <div className="flex justify-center mb-8">
          <div className="bg-slate-200/50 p-1 rounded-xl flex items-center gap-1 border border-slate-200">
            <button 
              onClick={() => setActiveTab("claims")}
              className={`px-5 py-2 rounded-lg font-bold text-[10px] md:text-xs transition-all ${activeTab === 'claims' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
            >
              CLAIMS
            </button>
            <button 
              onClick={() => setActiveTab("advantages")}
              className={`px-5 py-2 rounded-lg font-bold text-[10px] md:text-xs transition-all ${activeTab === 'advantages' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
            >
              ADVANTAGES
            </button>
          </div>
        </div>

        {/* --- SMALL CARDS GRID --- */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {claimsData.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white p-4 md:p-5 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all group flex flex-col items-center text-center"
            >
              <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <Typography variant="h4" className="text-[12px] md:text-sm font-bold text-[#004687] mb-1.5 mt-0 leading-tight">
                {item.title}
              </Typography>
              <Typography variant="b2" className="text-slate-500 text-[10px] md:text-[11px] leading-snug mt-0 line-clamp-2">
                {item.desc}
              </Typography>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}