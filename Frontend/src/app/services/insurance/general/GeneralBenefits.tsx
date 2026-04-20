"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";
import { CheckCircle2,} from "lucide-react";

const benefits = [
  {
    title: "Financial Protection Against Unexpected Losses",
    desc: "Covers sudden expenses due to accidents, medical emergencies, or damages.",
  },
  {
    title: "Covers Medical and Repair Expenses",
    desc: "Reduces the burden of hospital bills and repair costs.",
  },
  {
    title: "Protection for Valuable Assets",
    desc: "Safeguards your home, vehicle, and business assets.",
  },
  {
    title: "Peace of Mind During Emergencies",
    desc: "Ensures you are financially prepared for uncertain situations.",
  },
  {
    title: "Affordable Premiums with High Coverage",
    desc: "Provides high coverage at reasonable costs.",
  },
];

export default function GeneralBenefits() {
  return (
    <section className="w-full bg-white py-12 md:py-10 px-4 md:px-10 font-lexend overflow-hidden">
      {/* Container ko center karne ke liye flex aur text-center add kiya gaya hai */}
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        
        {/* --- CONTENT AREA --- */}
        <div className="w-full">
          <Typography
            variant="h3"
            as="h2"
            className="text-3xl md:text-5xl font-black text-[#1e293b] leading-[1.1] mb-6 mt-0"
          >
            Benefits of <span className="text-blue-600">General Insurance</span>
          </Typography>

          <Typography
            variant="b1"
            as="h3"
            className="text-gray-500 text-sm md:text-lg font-medium mb-10 mt-0 leading-relaxed max-w-2xl mx-auto"
          >
            General insurance offers multiple benefits that help individuals and businesses stay financially secure:
          </Typography>

          {/* Benefit List - max-w-lg aur mx-auto se items center mein rahenge par text left-aligned rahega list ke andar */}
          <div className="space-y-6 mb-12 max-w-xl mx-auto text-left">
            {benefits.map((item, idx) => (
              <div key={idx} className="flex items-start space-x-4 group">
                <div className="mt-1 shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-green-500 fill-green-50" />
                </div>
                <div>
                  <Typography variant="b1" className="text-slate-800 font-bold text-sm md:text-[17px] mt-0 leading-tight">
                    {item.title}
                  </Typography>
                  <Typography variant="b1" className="text-gray-400 text-xs md:text-sm mt-1.5 leading-snug">
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