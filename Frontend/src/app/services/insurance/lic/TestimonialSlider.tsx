"use client";

import React, { useState } from "react";
import { Typography } from "@/app/components/ui/Typography";
import { ChevronLeft, ChevronRight } from "lucide-react";

const dimeMethod = [
  {
    id: 1,
    title: "Debt",
    subtitle: "Clear Liabilities",
    text: "Start by evaluating any outstanding debts you owe, such as auto loans, personal loans, credit card balances, or other liabilities. Your coverage should ensure these don't become a burden for your family.",
    img: "/images/Insurance/debt.jpg", // Replace with your actual icon/image paths
  },
  {
    id: 2,
    title: "Income",
    subtitle: "Livelihood Protection",
    text: "As a general rule, aim for 10 to 15 times your annual income. This ensures that in your absence, your family's living expenses and financial livelihood remain secure.",
    img: "/images/Insurance/income.jpg",
  },
  {
    id: 3,
    title: "Mortgage",
    subtitle: "Home Security",
    text: "Home loan payments are often the largest monthly expense. Choose a death benefit sufficient to cover the entire outstanding loan amount to protect your home.",
    img: "/images/Insurance/mortgage.jpg",
  },
  {
    id: 4,
    title: "Education",
    subtitle: "Future Aspirations",
    text: "The cost of education is rising. It is essential to have a plan that can fully support your children's higher education and life goals, ensuring their future stays on track.",
    img: "/images/Insurance/education.jpg",
  },
];

export default function InsuranceDimeSlider() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % dimeMethod.length);
  const prev = () => setCurrent((current - 1 + dimeMethod.length) % dimeMethod.length);

  return (
    <section className="w-full bg-[#f0ebeb] py-6 md:py-16 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10 pt-2">
        {/* --- HEADER --- */}
        <Typography
          variant="h4"
          className="text-xl md:text-6xl font-black text-[#1e293b] mb-6 md:mb-10 mt-0 tracking-tight leading-tight"
        >
          How Much Life Insurance <br className="hidden md:block" /> Do I Need?
        </Typography>

        {/* --- ICON/DIME INDICATOR --- */}
        <div className="flex justify-center mb-6">
          <div className="bg-[#171615] px-3 py-2 md:py-4 rounded-md  shadow-md">
            <Typography variant="h5" className="text-white  m-0">
              {dimeMethod[current].title}
            </Typography>
          </div>
        </div>

        {/* --- DESCRIPTION TEXT --- */}
        <div className="min-h-[100px] md:min-h-[140px] mb-6 md:mb-8 px-2">
          <Typography
            variant="h5"
            as="p"
            className="text-base md:text-2xl text-[#334155] font-medium leading-relaxed mt-0 animate-in fade-in duration-500"
          >
            {dimeMethod[current].text}
          </Typography>
        </div>

        {/* --- CATEGORY SUBTITLE --- */}
        <div className="mb-8 md:mb-10">
          <Typography
            variant="h5"
            className="text-[#1e293b] font-bold text-sm md:text-xl mb-1 mt-0 uppercase"
          >
            {dimeMethod[current].subtitle}
          </Typography>
          <Typography
            variant="b1"
            className="text-gray-500 text-[10px] md:text-sm uppercase tracking-widest mt-0 font-semibold"
          >
            The D.I.M.E. Method
          </Typography>
        </div>

        {/* --- NAVIGATION & SELECTORS --- */}
        <div className="flex items-center justify-center space-x-3 md:space-x-8">
          <button
            onClick={prev}
            className="p-2 md:p-3 rounded-lg bg-black/5 border border-black/10 text-[#1e293b] hover:bg-black/10 transition-all"
          >
            <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
          </button>

          <div className="flex items-center -space-x-2 md:-space-x-4">
            {dimeMethod.map((item, idx) => (
              <div
                key={item.id}
                className={`relative rounded-full flex items-center justify-center transition-all duration-500 cursor-pointer border-2
                  ${
                    current === idx
                      ? "w-12 h-12 md:w-20 md:h-20 border-[#ff4d14] bg-white scale-110 z-20 shadow-lg"
                      : "w-8 h-8 md:w-14 md:h-14 border-transparent bg-gray-300 opacity-40 scale-90 z-10 hover:opacity-100"
                  }`}
                onClick={() => setCurrent(idx)}
              >
                <span className={`font-bold ${current === idx ? "text-[#ff4d14] text-lg md:text-2xl" : "text-gray-600 text-xs md:text-sm"}`}>
                   {item.title.charAt(0)}
                </span>
              </div>
            ))}
          </div>

          <button
            onClick={next}
            className="p-2 md:p-3 rounded-lg bg-[#ff4d14] text-white shadow-lg hover:opacity-90 transition-all"
          >
            <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}