"use client";

import React, { useState } from "react";
import { Typography } from "@/app/components/ui/Typography";
import { ChevronDown} from "lucide-react";

const faqData = [
  {
    question: "What is banking and cash management?",
    answer:
      "It is a specialized service that helps businesses manage their daily cash flow, maintain liquidity, and handle financial transactions with high efficiency and precision.",
  },
  {
    question: "Why is cash management important?",
    answer:
      "Effective cash management ensures that your business operations run smoothly without fund shortages and helps in better utilization of available capital for growth.",
  },
  {
    question: "Who can use these services?",
    answer:
      "Our services are designed for a wide range of clients including Startups, SMEs (Small and Medium Enterprises), large Corporates, and individuals looking for professional financial handling.",
  },
  {
    question: "Are these services secure?",
    answer:
      "Absolutely. We utilize industry-leading encryption protocols and advanced fraud protection systems to ensure every transaction and piece of data is completely secure.",
  },
  {
    question: "What is liquidity management?",
    answer:
      "Liquidity management is the practice of ensuring a business has enough ready cash or liquid assets to meet its daily operational expenses and short-term obligations.",
  },
];

export default function BankingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-5 md:py-10 px-4 md:px-6 font-lexend relative z-20">
      <div className="max-w-4xl mx-auto">
        {/* --- HEADER --- */}
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 "></div>
          <Typography
            variant="h4"
            as="h4"
            className="text-2xl md:text-4xl font-black text-slate-900 mb-3 mt-0"
          >
            FAQ – Banking and Cash Management
          </Typography>
          <p className="text-slate-500 text-sm md:text-base max-w-lg mx-auto">
            Your Questions Answered – Everything You Need. Find clear answers to
            common questions about our services.
          </p>
        </div>

        {/* --- COMPACT ACCORDION --- */}
        <div className="space-y-3">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-2xl transition-all duration-300 ${
                openIndex === index
                  ? "border-red-100 shadow-lg shadow-red-900/5 bg-red-50/10"
                  : "border-slate-100 hover:border-slate-200"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-4 md:p-5 text-left"
              >
                <span
                  className={`font-bold text-sm md:text-base leading-tight pr-4 ${
                    openIndex === index ? "text-[#8B1D1D]" : "text-slate-700"
                  }`}
                >
                  {index + 1}. {faq.question}
                </span>
                <div
                  className={`shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180 text-[#8B1D1D]" : "text-slate-400"}`}
                >
                  <ChevronDown size={20} />
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-4 md:px-5 pb-5 text-slate-500 text-xs md:text-sm leading-relaxed border-t border-red-50/50 pt-4">
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
