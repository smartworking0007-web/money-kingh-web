"use client";

import React, { useState } from "react";
import { Typography } from "@/app/components/ui/Typography";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function HomeLoanBTFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is a Home Loan Balance Transfer?",
      a: "A Home Loan Balance Transfer is the process of shifting your existing home loan to another lender offering lower interest rates, reduced EMI, and better loan terms, helping you save on overall interest."
    },
    {
      q: "Can I get a Top-Up Loan with a Home Loan Balance Transfer?",
      a: "Yes, most lenders offer a Top-Up Loan along with Home Loan Balance Transfer based on your income, credit score, and repayment history. It provides additional funds at lower interest rates."
    },
    {
      q: "What is the maximum Top-Up Loan amount I can get?",
      a: "The top-up loan amount depends on factors like property value, existing loan outstanding, income, and lender policies. Higher eligibility is offered to borrowers with strong repayment records."
    },
    {
      q: "Are there tax benefits on Home Loan Top-Up?",
      a: "Yes, tax benefits may be available under applicable laws if the top-up loan is used for home renovation, construction, or purchase purposes. Please consult a tax advisor for details."
    },
    {
      q: "How long does the Home Loan Balance Transfer process take?",
      a: "The process usually takes 3 to 7 working days, depending on document verification, lender approval, and property evaluation."
    },
    {
      q: "Are there foreclosure or prepayment charges on balance transfer?",
      a: "For floating rate home loans, foreclosure is generally free as per RBI guidelines, but charges may apply in some specific cases or for fixed-rate loans."
    },
    {
      q: "What is the minimum credit score required for Home Loan Balance Transfer?",
      a: "A minimum CIBIL score of 650+ is required, while a score of 700+ improves approval chances and helps secure lower interest rates."
    },
    {
      q: "Can self-employed individuals apply for Home Loan Balance Transfer?",
      a: "Yes, both salaried and self-employed individuals can apply, provided they meet the lender’s eligibility criteria and income requirements."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-12 py-16 bg-white font-lexend relative z-20">
      
      {/* --- HEADER (Centered) --- */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-3">
          <HelpCircle className="text-blue-600" size={28} />
          <Typography
            variant="h4"
            as="h4"
            className="text-[#1e293b] font-black text-xl md:text-3xl m-0 uppercase tracking-tight"
          >
            Home Loan FAQs
          </Typography>
        </div>
        <Typography className="text-slate-400 text-sm md:text-base font-medium">
          Home Loan Balance Transfer & Top-Up – Frequently Asked Questions
        </Typography>
      </div>

      {/* --- FAQ ACCORDION --- */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 gap-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`border rounded-2xl transition-all duration-300 ${
              openIndex === index 
              ? "border-blue-200 bg-blue-50/20 shadow-md" 
              : "border-slate-100 bg-white hover:border-slate-200"
            }`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
            >
              <span className={`font-bold text-sm md:text-base pr-4 leading-snug ${
                openIndex === index ? "text-blue-700" : "text-slate-700"
              }`}>
                {index + 1}. {faq.q}
              </span>
              <ChevronDown 
                className={`text-slate-400 shrink-0 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180 text-blue-600" : ""
                }`} 
                size={20} 
              />
            </button>
            
            <div 
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                openIndex === index ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-5 pt-0 text-slate-500 text-sm md:text-[15px] leading-relaxed border-t border-slate-100/50">
                {faq.a}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}