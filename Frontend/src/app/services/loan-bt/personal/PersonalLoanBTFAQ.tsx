"use client";

import React, { useState } from "react";
import { Typography } from "@/app/components/ui/Typography";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function PersonalLoanBTFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is the benefit of a personal loan balance transfer in India?",
      a: "It helps reduce your interest rate and EMI, leading to overall savings on your loan. It also allows you to consolidate debt and improve your monthly cash flow."
    },
    {
      q: "Can I get a top-up loan with balance transfer?",
      a: "Yes, most lenders offer a top-up loan based on your eligibility and repayment history at the time of transferring the balance."
    },
    {
      q: "How much top-up loan can I get?",
      a: "It depends on your current income, credit score, existing loan balance, and the lender's policy regarding your repayment capacity."
    },
    {
      q: "Will my credit score be affected?",
      a: "Initially, a hard inquiry might cause a slight temporary dip, but timely repayments of the new loan will significantly improve your score in the long run."
    },
    {
      q: "Is collateral required?",
      a: "No, both balance transfer and top-up loans are unsecured facilities, meaning you don't need to pledge any assets or gold."
    },
    {
      q: "How long does the process take?",
      a: "Typically, the process is completed within 24 to 72 hours once the document verification and lender approval are in place."
    },
    {
      q: "Can I transfer my loan multiple times?",
      a: "Technically yes, but frequent transfers are not advisable as they involve processing fees every time and may impact your credit profile."
    },
    {
      q: "What is the minimum EMI paid to apply?",
      a: "Usually, lenders require that at least 6 to 12 EMIs should be successfully paid on your existing loan before you can apply for a balance transfer."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-12 py-12 bg-white font-lexend -mt-15 md:-mt-10 relative z-10">
      
      {/* --- HEADER --- */}
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-2 mb-2">
          <HelpCircle className="text-blue-600" size={24} />
          <Typography
            variant="h3"
            as="h3"
            className="text-[#1e293b] font-black text-xl md:text-3xl m-0"
          >
            Frequently Asked Questions
          </Typography>
        </div>
      </div>

      {/* --- FAQ ACCORDION --- */}
      <div className="max-w-4xl mx-auto space-y-3">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="border border-slate-100 rounded-2xl overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className={`w-full flex items-center justify-between p-5 text-left transition-colors ${
                openIndex === index ? "bg-blue-50/50" : "bg-slate-50/30 hover:bg-slate-50"
              }`}
            >
              <span className={`font-bold text-sm md:text-base pr-4 ${
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
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-5 pt-0 text-slate-500 text-sm md:text-[15px] leading-relaxed border-t border-slate-100/50 bg-blue-50/30">
                {faq.a}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}