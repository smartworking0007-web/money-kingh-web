"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";

export default function SIPBenefits() {
  const benefits = [
    {
      title: "No Need to Time the Market",
      desc: "SIP mein aapko market ke ups and downs ka tension lene ki zarurat nahi hoti. Regular investment se aap automatically different market levels par invest karte ho.",
      highlight: "Best for: Beginners jo market timing nahi samajhte",
    },
    {
      title: "Rupee Cost Averaging",
      desc: "Jab market low hota hai to aapko zyada units milte hain, aur jab high hota hai to kam units — isse overall cost average ho jati hai.",
      highlight: "Result: Long-term mein better returns ka potential",
    },
    {
      title: "Low Investment Cost",
      desc: "SIP kaafi affordable hai. Aap sirf ₹500 per month se bhi start kar sakte ho, jo ise har income group ke liye accessible banata hai.",
      highlight: "Perfect for: Students aur salaried individuals",
    },
    {
      title: "Power of Compounding",
      desc: "Regular investment aur reinvestment se aapko compounding ka benefit milta hai. Time ke saath aapka paisa exponential grow karta hai.",
      highlight: "Tip: Jaldi start karna sabse zyada beneficial hota hai",
    },
    {
      title: "Ease of Investment",
      desc: "SIP process simple aur hassle-free hota hai. Auto-debit facility ke through aapka investment automatically ho jata, bina kisi manual effort ke.",
      highlight: "Benefit: Time-saving aur stress-free investing",
    },
  ];

  return (
    /* -mt-20 se -mt-40 ka use karke section ko upar shift kiya gaya hai */
    <section className="w-full bg-white pb-16 px-4 md:px-6 font-lexend -mt-20 md:-mt-12 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* --- HEADER --- */}
        <div className="text-center mb-10 md:mb-14 space-y-4">
          <Typography
            variant="h4"
            as="h4"
            className=" font-black "
          >
            What is SIP (Systematic Investment Plan)?
          </Typography>
          <div className="max-w-5xl mx-auto">
            <Typography
              variant="b1"
              className="text-gray-500 text-base md:text-[18px] leading-relaxed mt-0"
            >
              Systematic Investment Plan (SIP) ek smart aur disciplined
              investment method hai jisme investors mutual funds mein regular
              intervals par ek fixed amount invest karte hain. SIP beginners aur
              experienced investors dono ke liye best option hai.
            </Typography>
          </div>
        </div>

        {/* --- BENEFITS GRID --- */}
        <div className="flex flex-wrap justify-center gap-6">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="w-full md:w-[calc(33.33%-1.5rem)] lg:w-[calc(33.33%-1.5rem)] bg-white p-8 rounded-1.5rem border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between min-h-240px"
            >
              <div className="space-y-4">
                <Typography
                  variant="h4"
                  className="text-xl font-bold text-slate-800 mt-0 leading-tight"
                >
                  {benefit.title}
                </Typography>
                <Typography
                  variant="b1"
                  className="text-gray-500 text-sm leading-relaxed mt-0"
                >
                  {benefit.desc}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
