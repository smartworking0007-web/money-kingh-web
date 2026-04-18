"use client";

import React, { useState } from "react";
import { Typography } from "@/app/components/ui/Typography";
import { 
  Calendar, 
  TrendingUp, 
  Settings2, 
  Infinity, 
  Zap, 
  Layers, 
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const sipTypes = [
  {
    id: "regular",
    tabTitle: "Regular SIP",
    icon: <Calendar className="w-4 h-4" />,
    heading: "Regular SIP",
    subheading: "Regular SIP is the most common and simple investment option.",
    points: ["Fixed investment amount at regular intervals", "Ideal for beginners", "Promotes disciplined investing"],
    example: "Example: Investing ₹2,000 every month",
    color: "bg-[#004687]"
  },
  {
    id: "topup",
    tabTitle: "Top-Up SIP",
    icon: <TrendingUp className="w-4 h-4" />,
    heading: "Top-Up SIP (Step-Up SIP)",
    subheading: "Allows you to increase your investment amount periodically.",
    points: ["Increase SIP amount annually", "Helps match income growth", "Accelerates wealth creation"],
    example: "Best for: Salaried individuals",
    color: "bg-emerald-600"
  },
  {
    id: "flexi",
    tabTitle: "Flexible SIP",
    icon: <Settings2 className="w-4 h-4" />,
    heading: "Flexible SIP",
    subheading: "Freedom to change investment amount based on market conditions.",
    points: ["Invest more when markets are low", "Invest less when markets are high", "Full control over investment"],
    example: "Best for: Experienced investors",
    color: "bg-purple-600"
  },
  {
    id: "perpetual",
    tabTitle: "Perpetual SIP",
    icon: <Infinity className="w-4 h-4" />,
    heading: "Perpetual SIP",
    subheading: "Perpetual SIP has no fixed end date.",
    points: ["Continues until manually stopped", "Ideal for long-term goals", "No renewal required"],
    example: "Best for: Long-term investors",
    color: "bg-orange-600"
  },
  {
    id: "trigger",
    tabTitle: "Trigger SIP",
    icon: <Zap className="w-4 h-4" />,
    heading: "Trigger SIP",
    subheading: "Activated based on predefined market conditions.",
    points: ["Based on NAV or market trends", "Automated investment strategy", "Helps in strategic investing"],
    example: "Best for: Advanced investors",
    color: "bg-red-600"
  },
  {
    id: "multi",
    tabTitle: "Multi SIP",
    icon: <Layers className="w-4 h-4" />,
    heading: "Multi SIP",
    subheading: "Invest in multiple schemes through a single SIP.",
    points: ["Diversification across funds", "Reduces overall risk", "Balanced portfolio creation"],
    example: "Best for: Portfolio diversification",
    color: "bg-indigo-600"
  }
];

export default function SIPTypesTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const current = sipTypes[activeTab];

  return (
    /* -mt-10 md:-mt-20 se section ko upar shift kiya gaya hai */
    <section className="w-full bg-white py-10 md:py-16 px-4 md:px-6 font-lexend overflow-hidden -mt-10 md:-mt-20 relative z-20">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-8 md:mb-12">
          <Typography variant="h3" className="text-2xl md:text-5xl font-black text-slate-900 mb-3 mt-0">
            Different Types of SIP
          </Typography>
          <Typography variant="b1" className="text-slate-500 text-sm md:text-lg mt-0">
            Choose the SIP type that fits your financial strategy perfectly.
          </Typography>
        </div>

        {/* --- TABS (Mobile: Side Scroll | Desktop: Centered) --- */}
        <div className="flex border-b border-slate-100 overflow-x-auto no-scrollbar mb-8 md:mb-12 justify-start md:justify-center">
          {sipTypes.map((tab, idx) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-5 py-3 md:px-8 md:py-4 text-xs md:text-sm font-bold whitespace-nowrap border-b-2 transition-all duration-300 ${
                activeTab === idx 
                ? "border-[#D84B7E] text-[#D84B7E] bg-pink-50/30" 
                : "border-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              {tab.icon}
              {tab.tabTitle}
            </button>
          ))}
        </div>

        {/* --- CONTENT AREA (One page look) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left Side: Info */}
          <div className="space-y-6 order-2 lg:order-1 text-center lg:text-left">
            <div>
              <Typography variant="h4" className="text-xl md:text-4xl font-black text-slate-900 mb-3 mt-0">
                {current.heading}
              </Typography>
              <Typography variant="b1" className="text-slate-500 text-sm md:text-lg mt-0 leading-relaxed">
                {current.subheading}
              </Typography>
            </div>

            <div className="space-y-3 flex flex-col items-center lg:items-start">
              {current.points.map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span className="text-slate-700 font-bold text-xs md:text-base">{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <div className="px-4 py-2 bg-slate-50 rounded-xl border border-slate-100 text-slate-600 font-bold text-[11px] md:text-sm">
                {current.example}
              </div>
              <button className="flex items-center gap-2 text-[#D84B7E] font-bold hover:gap-3 transition-all text-sm md:text-base">
                Get Started <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Right Side: Visual Card */}
          <div className={`relative rounded-[2rem] p-6 md:p-10 transition-all duration-500 ${current.color} order-1 lg:order-2 shadow-xl`}>
             <div className="relative z-10 bg-white rounded-2xl shadow-lg p-6 md:p-8 transform hover:scale-[1.02] transition-transform">
                <div className="flex justify-between items-center mb-6 border-b border-slate-50 pb-4">
                  <span className="font-black text-slate-800 uppercase tracking-widest text-[10px] md:text-xs">Category: Mutual Funds</span>
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                </div>

                <div className="space-y-4 text-center">
                   <p className="text-slate-400 text-[10px] md:text-xs font-bold uppercase mb-1">SIP Model</p>
                   <h4 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-none">
                     {current.tabTitle}
                   </h4>
                   <div className="h-1.5 w-16 bg-[#D84B7E] mx-auto rounded-full"></div>
                </div>

                <div className="mt-8 bg-slate-50 rounded-xl p-4 flex justify-between items-center">
                   <span className="text-[10px] md:text-xs font-bold text-slate-500 uppercase">Risk Level</span>
                   <span className="text-[10px] md:text-xs font-bold text-[#D84B7E] bg-pink-50 px-3 py-1 rounded-full border border-pink-100">
                     Market Linked
                   </span>
                </div>

                <button className="w-full mt-6 py-3 bg-[#1e293b] text-white rounded-xl font-bold text-xs md:text-sm hover:bg-black transition-all shadow-md">
                  Invest Now
                </button>
             </div>
             
             {/* Decorative circles */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
          </div>

        </div>
      </div>
    </section>
  );
}