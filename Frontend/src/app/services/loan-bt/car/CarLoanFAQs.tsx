"use client";

import React, { useState } from "react";
import { Typography } from "@/app/components/ui/Typography";
import { Plus, Minus } from "lucide-react";

const carFaqs = [
  {
    question: "What is Car Loan Balance Transfer?",
    answer:
      "It is the process of transferring your existing car loan from your current lender to another bank or NBFC that offers lower interest rates, reduced EMI, and better repayment terms.",
  },
  {
    question: "Can I get a top-up loan with car loan transfer?",
    answer:
      "Yes, most lenders offer top-up loans as an additional amount over your existing balance, provided you have a good repayment history and meet the eligibility criteria.",
  },
  {
    question: "What is the maximum top-up amount?",
    answer:
      "The maximum amount depends on the current market value of your car, your outstanding loan balance, and your monthly income profile.",
  },
  {
    question: "How long does the process take?",
    answer:
      "The entire process of verification, approval, and transfer usually takes between 2 to 5 working days, depending on document submission.",
  },
  {
    question: "What is the minimum credit score required?",
    answer:
      "A credit score of 650+ is generally required, although a score of 700+ is preferred to secure the best interest rates and faster approval.",
  },
  {
    question: "Is collateral required?",
    answer:
      "Yes, in a car loan balance transfer, the car itself continues to act as the primary collateral for the new lender.",
  },
  {
    question: "Can I transfer my car loan multiple times?",
    answer:
      "Technically yes, but frequent transfers are not recommended as they involve processing fees and can impact your credit score if done too often.",
  },
  {
    question: "Who provides car loan BT & top-up?",
    answer:
      "Leading banks and NBFCs like HDFC Bank, ICICI Bank, and Axis Bank, along with various specialized financial institutions, provide these facilities.",
  },
];

export default function CarLoanFAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-7xl mx-auto px-5 md:px-12 py-5 font-lexend bg-white">
      {/* --- HEADER --- */}
      <div className="flex flex-col items-center gap-4 mb-12 text-center">
        <Typography
          variant="h4"
          as="h4"
          className="text-[#1e293b] font-black text-2xl md:text-4xl"
        >
          Frequently Asked Questions
        </Typography>
        <p className="text-slate-500 font-medium text-sm md:text-lg">
          Quick answers to your common queries about Car Loan BT & Top-Up
        </p>
      </div>

      {/* --- ACCORDION LIST --- */}
      <div className="max-w-4xl mx-auto space-y-4">
        {carFaqs.map((faq, index) => (
          <div
            key={index}
            className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
              openIndex === index
                ? "border-red-200 shadow-lg shadow-red-50/50"
                : "border-slate-100 hover:border-slate-200 shadow-sm"
            }`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className={`w-full flex items-center justify-between p-5 md:p-6 text-left transition-colors ${
                openIndex === index ? "bg-red-50/20" : "bg-white"
              }`}
            >
              <span
                className={`font-bold text-sm md:text-base pr-4 ${
                  openIndex === index ? "text-[#8B1D1D]" : "text-[#1e293b]"
                }`}
              >
                {index + 1}. {faq.question}
              </span>
              <div
                className={`p-1 rounded-full transition-all duration-300 ${
                  openIndex === index
                    ? "bg-[#8B1D1D] text-white"
                    : "bg-slate-100 text-slate-500"
                }`}
              >
                {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
              </div>
            </button>

            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openIndex === index
                  ? "max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-5 md:p-6 pt-0 text-slate-600 text-sm md:text-base leading-relaxed border-t border-red-50/50">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
