"use client";

import React from "react";
import Link from "next/link";
import { Typography } from "@/app/components/ui/Typography";
import {
  ShieldCheck,
  TrendingUp,
  ReceiptIndianRupee,
  Stethoscope,
  CreditCard,
  Truck,
} from "lucide-react";

const benefits = [
  {
    title: "Financial Protection",
    desc: "Ensures savings stay safe during medical emergencies.",
    icon: <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />,
  },
  {
    title: "Medical Inflation",
    desc: "Manage rising costs and receive best treatment easily.",
    icon: <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />,
  },
  {
    title: "Tax Benefits (80D)",
    desc: "Claim tax deductions on premiums under Section 80D.",
    icon: (
      <ReceiptIndianRupee className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
    ),
  },
  {
    title: "Pre-existing Cover",
    desc: "Chronic conditions protected after a waiting period.",
    icon: <Stethoscope className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />,
  },
  {
    title: "Cashless Treatment",
    desc: "Get treated at network hospitals without upfront cash.",
    icon: <CreditCard className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />,
  },
  {
    title: "Ambulance Charges",
    desc: "Emergency transport costs are covered for quick access.",
    icon: <Truck className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />,
  },
];

export default function WhyHealthInsurance() {
  return (
    /* -mt-10 md:-mt-16 se section upar shift ho jayega */
    <section className="w-full bg-[#f8fafc] py-8 md:py-16 px-4 md:px-6 font-lexend -mt-30 md:-mt-16 relative z-20 rounded-t-[2.5rem] md:rounded-t-none">
      <div className="max-w-5xl mx-auto">
        {/* --- COMPACT HEADER --- */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
          <Typography
            variant="caption"
            className="text-blue-600 font-black uppercase tracking-widest mb-2 block text-[10px] md:text-xs"
          >
            Importance of Health Insurance
          </Typography>
          <Typography
            variant="h3"
            as="h3"
            className="text-xl md:text-4xl font-black text-slate-900 mb-3 mt-0 leading-tight"
          >
            Why Do You Need a Policy?
          </Typography>
          <Typography
            variant="b1"
            className="text-slate-500 text-[11px] md:text-base leading-relaxed mt-0"
          >
            With rising costs, health insurance is essential for your family s
            financial stability.
          </Typography>
        </div>

        {/* --- COMPACT GRID (Sleek Mobile View) --- */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 mb-8">
          {benefits.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-4 md:p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <Typography
                variant="h4"
                className="text-[12px] md:text-lg font-bold text-slate-800 mb-1 mt-0 leading-tight"
              >
                {item.title}
              </Typography>
              <Typography
                variant="b2"
                className="text-slate-500 text-[10px] md:text-xs leading-relaxed mt-0 hidden md:block"
              >
                {item.desc}
              </Typography>
            </div>
          ))}
        </div>

        {/* --- CTA BUTTON --- */}
        <div className="text-center">
          <Link href="/contact" className="inline-block">
            <button className="px-8 py-2.5 md:py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-[10px] md:text-sm shadow-lg shadow-blue-200 transition-all active:scale-95 uppercase tracking-wide">
              Buy Online Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
