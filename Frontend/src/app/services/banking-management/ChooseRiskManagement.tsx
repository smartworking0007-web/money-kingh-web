"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";
import {
  History,
  Cpu,
  ShieldCheck,
  Settings2,
  CircleDollarSign,
  CheckCircle2,
} from "lucide-react";

const selectionCriteria = [
  {
    title: "Experience in financial services",
    desc: "Look for a provider with a deep understanding of the Indian financial landscape and a proven track record.",
    icon: <History className="w-5 h-5 md:w-6 md:h-6" />,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "Advanced technology usage",
    desc: "Ensure they use modern AI and real-time data analytics to identify and mitigate risks effectively.",
    icon: <Cpu className="w-5 h-5 md:w-6 md:h-6" />,
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    title: "Strong security systems",
    desc: "Data protection is key. Verify their encryption standards and security protocols for fund safety.",
    icon: <ShieldCheck className="w-5 h-5 md:w-6 md:h-6" />,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    title: "Custom solutions",
    desc: "Avoid one-size-fits-all. The provider should offer strategies tailored to your specific business model.",
    icon: <Settings2 className="w-5 h-5 md:w-6 md:h-6" />,
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    title: "Transparent pricing",
    desc: "No hidden costs. Clear fee structures help in better financial planning and trust building.",
    icon: <CircleDollarSign className="w-5 h-5 md:w-6 md:h-6" />,
    color: "text-[#8B1D1D]",
    bg: "bg-red-50",
  },
];

export default function ChooseRiskManagement() {
  return (
    <section className="w-full bg-white py-12 md:py-20 px-4 md:px-6 font-lexend relative z-20">
      <div className="max-w-6xl mx-auto">
        {/* --- HEADER --- */}
        <div className="text-center mb-12 md:mb-16">
          <Typography
            variant="h4"
            as="h4"
            className="text-2xl md:text-[40px] font-black text-slate-900 mb-4 mt-0 leading-tight"
          >
            How to Choose the Best Risk Management Services Provider
          </Typography>
        </div>

        {/* --- SELECTION LIST --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
          {/* Left Side: Illustration Placeholder / Trust Badge */}
          <div className="order-2 lg:order-1 bg-slate-50 rounded-[3rem] p-8 md:p-12 border border-slate-100">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-2xl shadow-sm text-[#8B1D1D]">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <Typography className="text-slate-900 font-bold text-lg m-0">
                    Verified Expertise
                  </Typography>
                  <Typography className="text-slate-500 text-sm m-0">
                    Money King Financial follows strict global standards.
                  </Typography>
                </div>
              </div>
              <div className="h-px bg-slate-200" />
              <Typography className="text-slate-600  text-sm md:text-base leading-relaxed">
                Choosing the right partner means securing your business s
                future. We prioritize transparency and technological excellence
                in every risk strategy we deploy.
              </Typography>
            </div>
          </div>

          {/* Right Side: Criteria Grid */}
          <div className="order-1 lg:order-2 space-y-4 md:space-y-5">
            {selectionCriteria.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 md:p-5 rounded-2xl border border-slate-50 bg-white hover:border-red-100 hover:shadow-lg hover:shadow-red-900/5 transition-all duration-300"
              >
                <div
                  className={`shrink-0 p-3 rounded-xl ${item.bg} ${item.color}`}
                >
                  {item.icon}
                </div>
                <div>
                  <Typography
                    variant="h5"
                    className="text-sm md:text-base font-bold text-slate-900 mb-1 mt-0"
                  >
                    {item.title}
                  </Typography>
                  <Typography className="text-slate-500 text-xs md:text-sm leading-relaxed m-0">
                    {item.desc}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
