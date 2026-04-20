"use client";

import React, { useState } from "react";
import { Typography } from "@/app/components/ui/Typography";
import { Globe, Search, ShieldCheck, Laptop } from "lucide-react";
import Link from "next/link";

const nriBenefits = [
  {
    id: 1,
    title: "Global Accessibility",
    desc: "Explore and purchase the best Indian life insurance plans from anywhere in the world through our secure portal.",
    icon: <Globe className="w-4 h-4 md:w-5 md:h-5" />,
  },
  {
    id: 2,
    title: "Easy Comparison",
    desc: "Compare multiple plans in one place—evaluate features, benefits, and premiums side-by-side.",
    icon: <Search className="w-4 h-4 md:w-5 md:h-5" />,
  },
  {
    id: 3,
    title: "Secure Platform",
    desc: "A reliable and secure platform designed specifically for NRIs to protect their family's future.",
    icon: <ShieldCheck className="w-4 h-4 md:w-5 md:h-5" />,
  },
  {
    id: 4,
    title: "Fully Digital",
    desc: "A simple, transparent, and hassle-free digital process without any complex paperwork.",
    icon: <Laptop className="w-4 h-4 md:w-5 md:h-5" />,
  },
];

export default function NRIHelpSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full bg-white py-10 md:py-20 px-4 font-lexend overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        {/* --- HEADER --- */}
        <Typography
          variant="h3"
          className="text-xl md:text-4xl font-black text-slate-900 mb-4 md:mb-6 mt-0"
        >
          How We Help NRIs with{" "}
          <span className="text-[#D84B7E]">Life Insurance Plans</span>
        </Typography>

        <Typography
          variant="b1"
          className="text-slate-500 max-w-4xl mx-auto text-sm md:text-lg leading-relaxed mb-10 md:mb-12 mt-0"
        >
          We provide a reliable and secure platform specially designed for
          Non-Resident Indians (NRIs) to explore and purchase the best life
          insurance plans from anywhere in the world.
        </Typography>

        {/* --- PROGRESS LINE UI --- */}
        <div className="relative flex items-center justify-between mb-12 md:mb-16 max-w-sm md:max-w-3xl mx-auto px-2">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-pink-100 -translate-y-1/2 z-0" />

          {nriBenefits.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActive(idx)}
              className={`relative z-10 w-10 h-10 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all duration-500 border-2 md:border-4 ${
                active === idx
                  ? "bg-[#D84B7E] border-pink-100 text-white scale-110 md:scale-125 shadow-lg md:shadow-xl shadow-pink-200"
                  : "bg-pink-50 border-white text-[#D84B7E] hover:bg-pink-100 shadow-sm"
              }`}
            >
              {item.icon}
              {active === idx && (
                <div className="absolute inset-0 rounded-full animate-ping bg-pink-400 opacity-20" />
              )}
            </button>
          ))}
        </div>

        {/* --- CONTENT AREA --- */}
        <div className="max-w-2xl mx-auto min-h-160px md:min-h-[140px] px-2 transition-all duration-500">
          <Typography
            variant="h4"
            className="text-lg md:text-2xl font-bold text-slate-800 mb-3 md:mb-4 mt-0"
          >
            {nriBenefits[active].title}
          </Typography>
          <Typography
            variant="b1"
            className="text-slate-500 text-[13px] md:text-lg leading-relaxed mt-0"
          >
            {nriBenefits[active].desc}
          </Typography>
        </div>

        {/* --- EXTRA DESCRIPTION SECTION --- */}
        <div className="mt-10 md:mt-16 p-5 md:p-10 bg-slate-50 rounded-2xl md:rounded-3xl border border-slate-100 text-center">
          <Typography
            variant="h3"
            className="text-lg md:text-2xl font-bold text-slate-900 mb-3 md:mb-4 mt-0"
          >
            Easy Plan Comparison & Selection
          </Typography>
          <Typography
            variant="b1"
            className="text-slate-500 text-[13px] md:text-base leading-relaxed mt-0"
          >
            Our platform allows NRIs to compare multiple life insurance plans in
            one place. Evaluate features, benefits, and coverage options to
            choose a plan that matches your goals.
          </Typography>
        </div>

        {/* --- LINK (BUTTON) --- */}
        <div className="mt-10 md:mt-12">
          <Link
            href="/contact"
            className="inline-block px-8 md:px-10 py-3 md:py-3.5 bg-linear-to-r from-[#D84B7E] to-[#b03a64] text-white rounded-full font-bold text-xs md:text-base shadow-lg hover:shadow-pink-200 transition-all active:scale-95 uppercase tracking-wider no-underline"
          >
            Start Comparing Now
          </Link>
        </div>
      </div>
    </section>
  );
}
