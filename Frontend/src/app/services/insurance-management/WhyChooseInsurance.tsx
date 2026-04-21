"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";
import {
  UserCheck,
  Settings,
  Layers,
  BarChart4,
  Handshake,
  LucideIcon,
} from "lucide-react";

interface ReasonItem {
  title: string;
  desc: string;
  icon: LucideIcon;
}

const reasons: ReasonItem[] = [
  {
    title: "Expert Guidance",
    desc: "Our professionals help you choose the best insurance plans and risk strategies.",
    icon: UserCheck,
  },
  {
    title: "Customized Solutions",
    desc: "Tailored insurance and risk management services based on your specific needs.",
    icon: Settings,
  },
  {
    title: "Wide Range of Options",
    desc: "Access multiple insurance products and risk tools under one platform.",
    icon: Layers,
  },
  {
    title: "Advanced Risk Analysis",
    desc: "Use data-driven insights to identify and minimize potential financial risks.",
    icon: BarChart4,
  },
  {
    title: "Trusted & Transparent",
    desc: "We ensure complete transparency and customer satisfaction in every service.",
    icon: Handshake,
  },
];

export default function WhyChooseInsurance() {
  return (
    <section className="w-full bg-slate-50/50 py-10 md:py-16 px-4 md:px-6 font-lexend relative z-20">
      <div className="max-w-6xl mx-auto">
        {/* --- HEADER --- */}
        <div className="text-center mb-10 md:mb-14">
          <Typography
            variant="h4"
            as="h4"
            className="text-2xl md:text-4xl font-black text-slate-900 mb-3 mt-0 leading-tight"
          >
            Why Choose Money King for Insurance and Risk Management?
          </Typography>
        </div>

        {/* --- COMPACT REASONS GRID --- */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-5">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)] p-5 md:p-6 bg-white border border-slate-100 rounded-2rem hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Compact Icon Box */}
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-5 bg-red-50 text-[#8B1D1D] transition-all group-hover:bg-[#8B1D1D] group-hover:text-white">
                  <Icon size={24} />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <Typography
                    variant="h5"
                    className="text-base md:text-lg font-bold text-slate-900 mt-0 leading-tight group-hover:text-[#8B1D1D] transition-colors"
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="b1"
                    className="text-slate-500 text-[11px] md:text-sm leading-relaxed mt-0 opacity-80"
                  >
                    {item.desc}
                  </Typography>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
