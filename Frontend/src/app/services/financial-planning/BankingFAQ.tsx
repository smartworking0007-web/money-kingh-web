"use client";

import React, { useState } from "react";
import { Typography } from "@/app/components/ui/Typography";
import { Plus, Minus} from "lucide-react";

const bankingFaqs = [
  {
    question: "What is the role of a financial advisor?",
    answer:
      "A financial advisor helps you manage your money, plan investments, reduce risks, and achieve your financial goals effectively through expert guidance and market analysis.",
  },
  {
    question: "Who should take financial advisory services?",
    answer:
      "Anyone looking to manage finances better, invest wisely, or plan for future goals like retirement, child education, or wealth creation can benefit from these services.",
  },
  {
    question: "How do I start financial planning?",
    answer:
      "Start by evaluating your income, expenses, and long-term goals. A financial advisor can then help you create a structured roadmap to reach those milestones efficiently.",
  },
  {
    question: "Are financial advisory services expensive?",
    answer:
      "Costs vary based on the services required, but the value provided in terms of smarter financial decisions and consistent wealth growth often far outweighs the professional fees.",
  },
  {
    question: "What are the benefits of financial planning?",
    answer:
      "It leads to better money management, disciplined savings, goal achievement, effective risk reduction, and sustainable long-term wealth creation.",
  },
];

export default function BankingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-7xl mx-auto px-5 md:px-12 py-16 font-lexend bg-white relative z-20">
      {/* --- HEADER --- */}
      <div className="flex flex-col items-center gap-4 mb-12 text-center">
        <Typography
          variant="h4"
          as="h4"
          className="text-[#1e293b] font-black text-2xl md:text-4xl mt-0"
        >
          FAQ – Banking and Cash Management
        </Typography>
        <div className="max-w-2xl">
          <p className="text-[#8B1D1D] font-bold text-sm md:text-lg mb-1">
            Your Questions Answered – Everything You Need.
          </p>
          <p className="text-slate-500 text-xs md:text-base leading-relaxed">
            Find clear answers to common questions about our services and
            features.
          </p>
        </div>
      </div>

      {/* --- ACCORDION LIST --- */}
      <div className="max-w-3xl mx-auto space-y-4">
        {bankingFaqs.map((faq, index) => (
          <div
            key={index}
            className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
              openIndex === index
                ? "border-red-100 shadow-xl shadow-red-50/30"
                : "border-slate-100 hover:border-slate-200"
            }`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className={`w-full flex items-center justify-between p-5 md:p-6 text-left transition-colors ${
                openIndex === index ? "bg-red-50/30" : "bg-white"
              }`}
            >
              <span
                className={`font-bold text-sm md:text-base pr-4 ${
                  openIndex === index ? "text-[#8B1D1D]" : "text-slate-700"
                }`}
              >
                Q{index + 1}. {faq.question}
              </span>
              <div
                className={`p-1 rounded-full transition-all duration-300 ${
                  openIndex === index
                    ? "bg-[#8B1D1D] text-white"
                    : "bg-slate-100 text-slate-400"
                }`}
              >
                {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
              </div>
            </button>

            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openIndex === index
                  ? "max-h-[300px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-5 md:p-6 pt-0 text-slate-500 text-sm md:text-base leading-relaxed border-t border-red-50/50">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- FOOTER DECORATION --- */}
      <div className="mt-12 text-center">
        <div className="w-16 h-1 bg-slate-100 mx-auto rounded-full" />
      </div>
    </section>
  );
}
