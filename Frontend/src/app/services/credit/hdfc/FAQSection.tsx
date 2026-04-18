"use client";

import React, { useState } from "react";
import { Typography } from "@/app/components/ui/Typography";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    question: "What is a credit card?",
    answer: "A credit card allows you to borrow money from a bank to make purchases and repay later.",
  },
  {
    question: "What is the interest-free period?",
    answer: "It is the time (up to 50 days) during which no interest is charged on purchases.",
  },
  {
    question: "What is the minimum credit score required?",
    answer: "A score of 650+ is required, while 700+ is preferred for better approval rates.",
  },
  {
    question: "Can I withdraw cash using a credit card?",
    answer: "Yes, but cash withdrawals attract higher charges and immediate interest from the date of withdrawal.",
  },
  {
    question: "How can I increase my credit limit?",
    answer: "By maintaining a good repayment history, low credit utilization, and providing proof of income growth.",
  },
  {
    question: "Is there any annual fee?",
    answer: "Some cards are lifetime free, while others charge an annual fee based on the premium benefits offered.",
  },
  {
    question: "What happens if I miss a payment?",
    answer: "Late fees and high-interest charges will apply, and it can significantly negatively impact your credit score.",
  },
  {
    question: "Can self-employed individuals apply?",
    answer: "Yes, both salaried and self-employed individuals can apply by providing relevant income proof like ITR.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-slate-50 py-0 md:py-20 px-4 md:px-6 font-lexend">
      <div className="max-w-3xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-10 md:mb-14">
          <Typography variant="h2" className="text-3xl md:text-5xl font-black text-[#003B73] mb-4">
            FAQs
          </Typography>
          <Typography variant="b1" className="text-slate-500 text-sm md:text-base">
            Quick answers to your most common questions
          </Typography>
        </div>

        {/* --- ACCORDION LIST --- */}
        <div className="space-y-4">
          {faqData.map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm transition-all hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left transition-colors active:bg-slate-50"
              >
                <span className={`font-bold text-sm md:text-base pr-4 ${openIndex === idx ? "text-[#003B73]" : "text-slate-700"}`}>
                  {idx + 1}. {faq.question}
                </span>
                <div className={`shrink-0 transition-transform duration-300 ${openIndex === idx ? "rotate-180" : ""}`}>
                  {openIndex === idx ? (
                    <Minus size={18} className="text-[#003B73]" strokeWidth={3} />
                  ) : (
                    <Plus size={18} className="text-slate-400" strokeWidth={3} />
                  )}
                </div>
              </button>

              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === idx ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-5 md:p-6 pt-0 text-slate-500 text-xs md:text-sm leading-relaxed border-t border-slate-50">
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