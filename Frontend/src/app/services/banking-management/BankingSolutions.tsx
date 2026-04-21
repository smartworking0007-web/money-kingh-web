"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";
import {
  BarChart3,
  Zap,
  Smartphone,
  Wallet,
  Users,
  ShieldCheck,
  Building2,
} from "lucide-react";

const solutionsData = [
  {
    id: 1,
    title: "Cash Flow Analysis",
    desc: "Expert analysis and accurate forecasting.",
    icon: <BarChart3 className="w-5 h-5" />,
  },
  {
    id: 2,
    title: "Automated Systems",
    desc: "Seamless payment and collection setup.",
    icon: <Zap className="w-5 h-5" />,
  },
  {
    id: 3,
    title: "Digital Banking",
    desc: "Modern solutions for the digital economy.",
    icon: <Smartphone className="w-5 h-5" />,
  },
  {
    id: 4,
    title: "Capital Management",
    desc: "Optimizing your working capital flow.",
    icon: <Wallet className="w-5 h-5" />,
  },
  {
    id: 5,
    title: "Vendor & Payroll",
    desc: "Efficient management of disbursements.",
    icon: <Users className="w-5 h-5" />,
  },
  {
    id: 6,
    title: "Secure Processing",
    desc: "Safe and encrypted transaction handling.",
    icon: <ShieldCheck className="w-5 h-5" />,
  },
  {
    id: 7,
    title: "Corporate Banking",
    desc: "Tailored solutions for large enterprises.",
    icon: <Building2 className="w-5 h-5" />,
  },
];

export default function BankingSolutions() {
  return (
    <section className="w-full bg-white py-10 md:py-16 px-4 md:px-10 font-lexend overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-4 md:gap-6">
          <div className="max-w-xl">
            <Typography
              variant="h4"
              as="h4"
              className="text-2xl md:text-4xl font-black text-[#1e293b] leading-tight mt-0"
            >
              Our Banking & Cash Management Solutions
            </Typography>
          </div>

          <div className="max-w-sm">
            <Typography
              variant="b1"
              className="text-gray-500 text-[13px] md:text-sm leading-relaxed mt-0"
            >
              At Money King Financial Services, we streamline your financial
              operations with advanced technology and expert advisory.
            </Typography>
          </div>
        </div>

        {/* --- GRID --- */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {solutionsData.map((item) => (
            <div
              key={item.id}
              className="group relative p-4 md:p-6 rounded-2xl md:rounded-3xl transition-all duration-300 border border-slate-100 flex flex-col justify-between bg-slate-50/50 hover:bg-white hover:shadow-xl hover:border-red-100"
            >
              <div className="w-full">
                {/* Icon Circle */}
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center mb-4 md:mb-6 bg-white text-[#8B1D1D] shadow-sm border border-slate-50 transition-colors group-hover:bg-[#8B1D1D] group-hover:text-white">
                  <div className="scale-75 md:scale-100">{item.icon}</div>
                </div>

                {/* Title */}
                <Typography
                  variant="h5"
                  as="h4"
                  className="text-sm md:text-base font-bold mb-1 md:mb-2 mt-0 text-slate-900 leading-tight"
                >
                  {item.title}
                </Typography>

                {/* Description */}
                <Typography
                  variant="b1"
                  as="p"
                  className="text-[11px] md:text-[12px] leading-tight mt-0 text-slate-500"
                >
                  {item.desc}
                </Typography>
              </div>
            </div>
          ))}

          {/* Contact Card (Placeholder for the 8th slot in the grid) */}
          <div className="p-4 md:p-6 rounded-2xl md:rounded-3xl border border-dashed border-red-200 flex flex-col items-center justify-center text-center bg-red-50/30">
            <p className="text-[10px] md:text-xs font-bold text-[#8B1D1D] uppercase mb-2 tracking-tighter">
              Need custom help?
            </p>
            <button className="text-[11px] md:text-sm font-black text-slate-900 underline underline-offset-4 hover:text-[#8B1D1D]">
              Talk to Expert
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
