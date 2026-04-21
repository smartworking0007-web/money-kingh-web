"use client";

import React, { useState } from "react";
import { Typography } from "@/app/components/ui/Typography";
import { ChevronDown, } from "lucide-react";

const faqData = [
  {
    question: "What is insurance and risk management?",
    answer:
      "It is a strategic combination of insurance coverage and management techniques designed to identify, assess, and protect against potential financial risks.",
  },
  {
    question: "Why is insurance important?",
    answer:
      "Insurance provides a critical safety net, offering financial protection against unexpected events like medical emergencies, accidents, or business losses.",
  },
  {
    question: "Who needs insurance services?",
    answer:
      "Individuals, families, and businesses of all sizes need insurance to safeguard their assets and ensure long-term financial stability.",
  },
  {
    question: "What types of risks can be managed?",
    answer:
      "We help manage a wide range of risks including financial, operational, strategic, and compliance-related risks to protect your interests.",
  },
  {
    question: "How does risk management help businesses?",
    answer:
      "It significantly reduces potential losses, improves long-term planning accuracy, and ensures overall business stability in uncertain market conditions.",
  },
  {
    question: "Is insurance mandatory?",
    answer:
      "Certain types like Third-Party Motor Insurance are mandatory by law in India, while others like Life or Health insurance are optional but highly recommended for security.",
  },
  {
    question: "How to choose the right insurance plan?",
    answer:
      "The right plan depends on your specific financial goals, risk profile, and the level of coverage required to protect your lifestyle or business operations.",
  },
];

export default function InsuranceRiskFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-12 md:py-20 px-4 md:px-6 font-lexend relative z-20">
      <div className="max-w-4xl mx-auto">
        {/* --- HEADER --- */}
        <div className="text-center mb-10 md:mb-16">
          <Typography
            variant="h4"
            as="h4"
            className="text-2xl md:text-4xl font-black text-slate-900 mb-3 mt-0"
          >
            FAQ – Insurance & Risk Management
          </Typography>
          <div className="h-1 w-16 bg-[#8B1D1D] mx-auto rounded-full mb-6" />
          <p className="text-slate-500 text-sm md:text-base max-w-lg mx-auto">
            Your Questions Answered – Everything You Need. Find clear answers to
            common questions about our protection services.
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
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-60 opacity-100"
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
