"use client";

import React, { useState } from "react";
import { Typography } from "@/app/components/ui/Typography";
import {
  Settings,
  Calendar,
  Zap,
  Eye,
  Smartphone,
  BarChart3,
  TrendingUp,
  PlusCircle,
} from "lucide-react";
import Link from "next/link";

const machineryBenefits = [
  {
    id: 1,
    title: "Flexible Loan Amounts",
    desc: "Get funding ranging from ₹2 lakh to ₹15 crore based on your business needs and machinery value, helping you manage equipment costs efficiently.",
    icon: <Settings className="w-4 h-4 md:w-6 md:h-6" />,
  },
  {
    id: 2,
    title: "Flexible Repayment Tenure",
    desc: "Choose a comfortable repayment tenure of up to 84–120 months, ensuring better financial planning and manageable EMIs.",
    icon: <Calendar className="w-4 h-4 md:w-6 md:h-6" />,
  },
  {
    id: 3,
    title: "Faster Approval Process",
    desc: "Get quick loan approvals, often within 24–48 hours, subject to eligibility and document verification.",
    icon: <Zap className="w-4 h-4 md:w-6 md:h-6" />,
  },
  {
    id: 4,
    title: "Transparent Charges",
    desc: "Enjoy complete transparency with no hidden charges. All fees and terms are clearly communicated before loan processing.",
    icon: <Eye className="w-4 h-4 md:w-6 md:h-6" />,
  },
  {
    id: 5,
    title: "End-to-End Digital Process",
    desc: "Apply for machinery loan refinance or top-up online from anywhere, with minimal paperwork and hassle-free processing.",
    icon: <Smartphone className="w-4 h-4 md:w-6 md:h-6" />,
  },
  {
    id: 6,
    title: "Real-Time Loan Tracking",
    desc: "Track your loan status, approval progress, and repayment schedule with ease, ensuring better financial control.",
    icon: <BarChart3 className="w-4 h-4 md:w-6 md:h-6" />,
  },
  {
    id: 7,
    title: "High Funding Value",
    desc: "Avail funding of up to 90%–100% of machinery value, depending on lender policies and asset condition.",
    icon: <TrendingUp className="w-4 h-4 md:w-6 md:h-6" />,
  },
  {
    id: 8,
    title: "Additional Top-Up Facility",
    desc: "Get extra funds over your existing loan for business expansion, working capital, or purchasing new machinery.",
    icon: <PlusCircle className="w-4 h-4 md:w-6 md:h-6" />,
  },
];

export default function MachineryLoanBenefits() {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full bg-white py-12 md:py-10 px-4 font-lexend overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        {/* --- HEADER (H3) --- */}
        <Typography
          variant="h4"
          as="h4"
          className="text-2xl md:text-4xl font-black text-slate-900 mb-6 md:mb-8 mt-0 leading-tight"
        >
          Features & Benefits of{" "}
          <span className="text-[#8B1D1D]">Machinery Loan</span>{" "}
          <br className="hidden md:block" /> Balance Transfer & Top-Up
        </Typography>

        <Typography
          variant="b1"
          className="text-slate-500 max-w-4xl mx-auto text-sm md:text-lg leading-relaxed mb-12 md:mb-20 mt-0"
        >
          Optimize your industrial financing with our feature-rich machinery
          loan solutions. Experience a seamless transition and unlock additional
          capital for your business growth.
        </Typography>

        {/* --- INTERACTIVE GRID/PROGRESS UI --- */}
        <div className="relative flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-16 max-w-4xl mx-auto px-2">
          {/* Connecting Line (Hidden on mobile for better grid layout) */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-red-50 -translate-y-1/2 z-0 hidden md:block" />

          {machineryBenefits.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActive(idx)}
              className={`relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center transition-all duration-500 border-2 ${
                active === idx
                  ? "bg-[#8B1D1D] border-red-100 text-white scale-110 md:scale-125 shadow-xl shadow-red-200"
                  : "bg-red-50 border-white text-[#8B1D1D] hover:bg-red-100 shadow-sm"
              }`}
            >
              {item.icon}
              {active === idx && (
                <div className="absolute inset-0 rounded-2xl animate-ping bg-red-400 opacity-20" />
              )}
            </button>
          ))}
        </div>

        {/* --- CONTENT AREA (DYNAMIC) --- */}
        <div className="max-w-3xl mx-auto min-h-160px md:min-h-[180px] px-4 py-8 bg-slate-50 rounded-32px border border-slate-100 transition-all duration-500">
          <Typography
            variant="h4"
            className="text-xl md:text-3xl font-black text-slate-900 mb-4 mt-0"
          >
            {machineryBenefits[active].title}
          </Typography>
          <Typography
            variant="b1"
            className="text-slate-600 text-sm md:text-xl leading-relaxed mt-0 font-medium"
          >
            {machineryBenefits[active].desc}
          </Typography>
        </div>

        {/* --- CTA BUTTON --- */}
        <div className="mt-12 md:mt-16">
          <Link
            href="/contact"
            className="inline-block px-10 md:px-14 py-4 md:py-5 bg-[#8B1D1D] text-white rounded-2xl font-bold text-sm md:text-lg shadow-2xl hover:bg-red-900 transition-all active:scale-95 uppercase tracking-widest no-underline"
          >
            Unlock Funding Now
          </Link>
        </div>

        <p className="mt-8 text-slate-400 text-[10px] md:text-xs uppercase tracking-tighter font-bold">
          *Approval is subject to lender verification and machinery condition.
        </p>
      </div>
    </section>
  );
}
