"use client";

import React, { useState } from "react";
import { Typography } from "@/app/components/ui/Typography";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    question: "How much does an m.Stock Demat account cost?",
    answer: "You can open an m.Stock Demat account for free. There are no account opening charges for our standard plan.",
  },
  {
    question: "How can I open an m.Stock Demat account?",
    answer: "You can open an m.Stock Demat account in 3 simple steps: Enter your personal details, complete the verification process by uploading the required documents and login to set password; your account is set!",
  },
  {
    question: "Which segments are covered?",
    answer: "All these segments are covered under the free demat account: equity delivery, mutual funds, IPOs and ETFs.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    /* -mt-16 (mobile) aur -mt-28 (desktop) taaki ye upar shift ho jaye */
    <section className="w-full bg-white pt-0 pb-12 px-4 md:px-6 font-lexend -mt-16 md:-mt-28 relative z-10">
      <div className="max-w-3xl mx-auto">
        
        {/* --- HEADER (Reduced Margin) --- */}
        <div className="text-center mb-6 md:mb-10">
          <Typography variant="h2" className="text-[#003B73] font-bold text-2xl md:text-4xl">
            FAQs
          </Typography>
        </div>

        {/* --- ACCORDION LIST --- */}
        <div className="space-y-3">
          {faqData.map((faq, idx) => (
            <div 
              key={idx} 
              className="border border-orange-100/50 rounded-xl overflow-hidden shadow-sm transition-all"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full flex items-center justify-between p-4 md:p-5 bg-white text-left active:bg-orange-50/30"
              >
                {/* Mobile par text thoda chota rakha hai */}
                <span className={`font-bold text-sm md:text-lg pr-4 leading-snug ${openIndex === idx ? "text-[#FF7A00]" : "text-[#003B73]"}`}>
                  {faq.question}
                </span>
                <div className="shrink-0 text-[#FF7A00]">
                  {openIndex === idx ? <Minus size={18} strokeWidth={3} /> : <Plus size={18} strokeWidth={3} />}
                </div>
              </button>

              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === idx ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-4 md:p-5 pt-0 text-gray-600 text-xs md:text-base leading-relaxed border-t border-orange-50/50">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}