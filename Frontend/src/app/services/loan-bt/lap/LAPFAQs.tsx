"use client";

import React, { useState } from "react";
import { Typography } from "@/app/components/ui/Typography";
import { Plus, Minus,  } from "lucide-react";

export default function LAPFAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is Loan Against Property (LAP) Balance Transfer?",
      answer:
        "A Loan Against Property Balance Transfer is the process of transferring your existing LAP to another lender offering lower interest rates, reduced EMI, and better loan terms, helping you save on overall interest costs.",
    },
    {
      question: "Can I get a Top-Up Loan with LAP Balance Transfer?",
      answer:
        "Yes, most lenders offer a Top-Up Loan on LAP Balance Transfer, allowing you to access additional funds over your existing loan at competitive interest rates.",
    },
    {
      question: "What is the maximum Top-Up Loan amount in LAP?",
      answer:
        "The top-up loan amount depends on property value, existing loan outstanding, income profile, and repayment history. Higher eligibility is offered for strong financial profiles.",
    },
    {
      question: "What are the benefits of LAP Balance Transfer & Top-Up?",
      answer:
        "Key benefits include: Lower interest rates, Reduced EMI burden, Access to additional funds, Better repayment flexibility, and Improved cash flow management.",
    },
    {
      question: "How long does the LAP Balance Transfer process take?",
      answer:
        "The process typically takes 5 to 10 working days, depending on property verification, legal checks, and documentation.",
    },
    {
      question: "Are there foreclosure or prepayment charges in LAP?",
      answer:
        "Charges depend on the lender and loan type. In many cases, floating rate loans may have minimal or no foreclosure charges, as per guidelines of the Reserve Bank of India.",
    },
    {
      question:
        "What is the minimum credit score required for LAP Balance Transfer?",
      answer:
        "A minimum credit score of 650+ is required, while 700+ is preferred to get better interest rates and higher approval chances.",
    },
    {
      question: "Who can apply for LAP Balance Transfer & Top-Up?",
      answer:
        "Salaried individuals, Self-employed professionals, Business owners, and Property owners with a clear title can apply.",
    },
    {
      question: "What documents are required for LAP Balance Transfer?",
      answer:
        "Required documents include KYC documents (PAN, Aadhaar), Income proof (Salary slips / ITR), Bank statements, Existing loan statement, and Property documents.",
    },
    {
      question: "Is LAP Top-Up loan usage restricted?",
      answer:
        "No, LAP top-up loans are multi-purpose. Funds can be used for business expansion, medical expenses, education, or personal needs.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-12 py-16 font-lexend bg-white relative z-20 -mt-10 md:-mt-16">
      {/* --- HEADER --- */}
      <div className="flex flex-col items-center gap-4 mb-12 text-center">
        <Typography
          variant="h4"
          as="h4"
          className="text-[#1e293b] font-black text-2xl md:text-4xl"
        >
          Frequently Asked Questions (FAQs)
        </Typography>
        <p className="text-slate-500 font-medium text-sm md:text-lg">
          Got questions about LAP Balance Transfer? We&apos;ve got answers.
        </p>
      </div>

      {/* --- FAQ ACCORDION --- */}
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
              openIndex === index
                ? "border-red-200 shadow-xl shadow-red-50/40"
                : "border-slate-100 hover:border-slate-200 shadow-sm"
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
                  openIndex === index ? "text-[#8B1D1D]" : "text-[#1e293b]"
                }`}
              >
                {index + 1}. {faq.question}
              </span>
              <div
                className={`p-1 rounded-full transition-all duration-300 ${
                  openIndex === index
                    ? "bg-[#8B1D1D] text-white rotate-0"
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
    </div>
  );
}
