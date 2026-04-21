"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";
import {
  ShieldCheck,
  SearchCode,
  Briefcase,
  LifeBuoy,
  PieChart,
  Building2,
} from "lucide-react";

const solutions = [
  {
    id: 1,
    title: "Personalized Insurance",
    desc: "Custom planning tailored to your life goals.",
    icon: <ShieldCheck className="w-5 h-5" />,
  },
  {
    id: 2,
    title: "Risk Assessment",
    desc: "In-depth analysis to identify potential threats.",
    icon: <SearchCode className="w-5 h-5" />,
  },
  {
    id: 3,
    title: "Business Risk Strategies",
    desc: "Strategic management for operational safety.",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    id: 4,
    title: "Claim Assistance",
    desc: "Dedicated support for hassle-free processing.",
    icon: <LifeBuoy className="w-5 h-5" />,
  },
  {
    id: 5,
    title: "Portfolio Diversification",
    desc: "Balancing assets to reduce financial risk.",
    icon: <PieChart className="w-5 h-5" />,
  },
  {
    id: 6,
    title: "Corporate Solutions",
    desc: "Comprehensive cover for large organizations.",
    icon: <Building2 className="w-5 h-5" />,
  },
];

export default function InsuranceRiskSolutions() {
  return (
    <section className="w-full bg-white py-12 md:py-20 px-4 md:px-10 font-lexend overflow-hidden relative z-20">
      <div className="max-w-6xl mx-auto">
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-block px-3 py-1 mb-4 bg-red-50 text-[#8B1D1D] rounded-full text-[10px] font-bold uppercase tracking-widest">
              ✦ Solutions we offer
            </div>
            <Typography
              variant="h3"
              as="h3"
              className="text-2xl md:text-5xl font-black text-[#1e293b] leading-tight mt-0"
            >
              Our Insurance & Risk Management Solutions
            </Typography>
          </div>

          <div className="max-w-xs">
            <Typography
              variant="b1"
              className="text-gray-500 text-sm md:text-base leading-relaxed mt-0"
            >
              Our goal is to provide complete financial protection and peace of
              mind through expert advisory.
            </Typography>
          </div>
        </div>

        {/* --- SOLUTIONS GRID --- */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {solutions.map((item) => (
            <div
              key={item.id}
              className="group relative p-5 md:p-8 rounded-2rem md:rounded-[2.5rem] transition-all duration-500 border border-slate-100 flex flex-col justify-between bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:shadow-red-900/5 hover:-translate-y-1"
            >
              <div className="w-full">
                {/* Icon Container */}
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center mb-6 bg-white text-[#8B1D1D] shadow-sm border border-slate-50 transition-all duration-300 group-hover:bg-[#8B1D1D] group-hover:text-white group-hover:rotate-6">
                  <div className="scale-90 md:scale-110">{item.icon}</div>
                </div>

                {/* Content */}
                <Typography
                  variant="h5"
                  as="h4"
                  className="text-sm md:text-lg font-bold mb-2 mt-0 text-slate-900 leading-tight group-hover:text-[#8B1D1D] transition-colors"
                >
                  {item.title}
                </Typography>

                <Typography
                  variant="b1"
                  as="p"
                  className="text-[11px] md:text-sm leading-relaxed mt-0 text-slate-500 opacity-80"
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
