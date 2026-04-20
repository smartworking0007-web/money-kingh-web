"use client";

import React, { useState } from "react";
import { Typography } from "@/app/components/ui/Typography";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqData = [
  {
    question: "Right age to buy life insurance?",
    answer: "The earlier you buy, the lower your premium. Buying in your 20s/30s ensures security at a very affordable cost.",
  },
  {
    question: "How much coverage do I need?",
    answer: "Ideally, your life insurance cover should be 10–15 times your annual income to secure your family's future.",
  },
  {
    question: "Can I buy life insurance online?",
    answer: "Yes, you can easily compare and purchase plans online with minimal documentation and instant calculations.",
  },
  {
    question: "Missed a premium payment?",
    answer: "You get a grace period (15-30 days). If still unpaid, the policy may lapse and benefits could be lost.",
  },
  {
    question: "Are benefits taxable?",
    answer: "Tax benefits are available under Section 80C and 10(10D) as per current Indian tax laws.",
  },
];

export default function InsuranceFAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // py-6 (mobile) aur py-14 (desktop) se section upar shift ho gaya hai
    <section className="w-full bg-[#f8faff] py-6 md:py-14 px-4 md:px-10 font-lexend">
      <div className="max-w-3xl mx-auto">
        
        {/* --- HEADER (Compact) --- */}
        <div className="flex items-center justify-center space-x-2 mb-6 md:mb-10">
          <HelpCircle className="text-blue-600 w-5 h-5 md:w-7 md:h-7" />
          <Typography
            variant="h4"
            as="h2"
            className="text-lg md:text-3xl font-black text-[#1e293b] mt-0"
          >
            Frequently Asked <span className="text-blue-600">Questions</span>
          </Typography>
        </div>

        {/* --- ACCORDION LIST --- */}
        <div className="space-y-3">
          {faqData.map((faq, idx) => (
            <div
              key={idx}
              className={`border border-slate-200 rounded-xl overflow-hidden transition-all duration-300 ${
                openIndex === idx ? "bg-white shadow-sm border-blue-100" : "bg-white/60"
              }`}
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full flex items-center justify-between p-4 md:p-5 text-left focus:outline-none"
              >
                <Typography
                  variant="h5"
                  className={`text-[13px] md:text-base font-bold pr-3 mt-0 leading-tight ${
                    openIndex === idx ? "text-blue-600" : "text-slate-800"
                  }`}
                >
                  Q{idx + 1}. {faq.question}
                </Typography>
                <div className="shrink-0">
                  {openIndex === idx ? (
                    <Minus className="w-4 h-4 text-blue-600" />
                  ) : (
                    <Plus className="w-4 h-4 text-slate-400" />
                  )}
                </div>
              </button>

              {/* Answer Content (Compact) */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === idx ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-4 md:p-5 pt-0 border-t border-slate-50">
                  <Typography
                    variant="b1"
                    className="text-gray-500 text-[11px] md:text-sm leading-relaxed mt-0"
                  >
                    {faq.answer}
                  </Typography>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}