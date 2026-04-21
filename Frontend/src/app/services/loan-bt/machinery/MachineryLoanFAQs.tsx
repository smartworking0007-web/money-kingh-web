"use client";

import React, { useState } from "react";
import { Typography } from "@/app/components/ui/Typography";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is Machinery Loan Balance Transfer?",
    answer: "Machinery Loan Balance Transfer (also called refinance) is the process of transferring your existing equipment loan to another lender offering lower interest rates, reduced EMI, and better repayment terms."
  },
  {
    question: "Is Machinery Loan Balance Transfer available in India?",
    answer: "Yes, but it is usually offered as a refinance facility by banks and NBFCs rather than a direct balance transfer."
  },
  {
    question: "Can I get a Top-Up Loan on Machinery Finance?",
    answer: "Yes, you can avail a top-up loan along with refinance, depending on your repayment history, business performance, and machinery valuation."
  },
  {
    question: "What is the maximum Top-Up Loan amount?",
    answer: "The top-up amount depends on machinery value, existing loan outstanding, business income, and lender policies."
  },
  {
    question: "What are the benefits of Machinery Loan Balance Transfer?",
    answer: "Key benefits include: Lower interest rate, Reduced EMI, Better loan terms, Improved cash flow, and Access to additional funds."
  },
  {
    question: "What is the interest rate for Machinery Loan BT & Top-Up?",
    answer: "Interest rates typically start from 10.50% p.a. onwards, depending on your credit profile, business stability, and machinery type."
  },
  {
    question: "What is the minimum credit score required?",
    answer: "A minimum credit score of 650+ is required, while 700+ is preferred for better approval chances and interest rates."
  },
  {
    question: "Who can apply for Machinery Loan Balance Transfer?",
    answer: "MSME business owners, Manufacturers & traders, Contractors & industrial businesses, and Self-employed professionals are eligible."
  },
  {
    question: "How long does the process take?",
    answer: "The process usually takes 3 to 7 working days, depending on document verification and lender approval."
  },
  {
    question: "Is collateral required for machinery loan refinance?",
    answer: "Yes, the machinery itself acts as primary collateral in most cases."
  },
  {
    question: "Can I refinance a used machinery loan?",
    answer: "Yes, many lenders provide refinance options for used or second-hand machinery, subject to valuation."
  },
  {
    question: "Which lenders provide Machinery Loan BT & Top-Up?",
    answer: "Leading NBFCs like Tata Capital, L&T Finance, and Shriram Finance offer machinery refinance and top-up solutions."
  }
];

export default function MachineryLoanFAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-7xl mx-auto px-5 md:px-12 py-16 font-lexend bg-white">
      
      {/* --- HEADER --- */}
      <div className="flex flex-col items-center gap-4 mb-12 text-center">
        <div className="bg-red-50 p-3 rounded-2xl text-[#8B1D1D] shadow-sm">
          <HelpCircle size={32} />
        </div>
        <Typography variant="h3" as="h3" className="text-[#1e293b] font-black text-2xl md:text-4xl">
          Frequently Asked Questions (FAQs)
        </Typography>
        <p className="text-slate-500 font-medium text-sm md:text-lg">
          Clear your doubts about Machinery Loan Balance Transfer & Top-Up
        </p>
      </div>

      {/* --- ACCORDION LIST --- */}
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
              <span className={`font-bold text-sm md:text-base pr-4 ${
                openIndex === index ? "text-[#8B1D1D]" : "text-[#1e293b]"
              }`}>
                {index + 1}. {faq.question}
              </span>
              <div className={`p-1 rounded-full transition-all duration-300 ${
                openIndex === index ? "bg-[#8B1D1D] text-white" : "bg-slate-100 text-slate-500"
              }`}>
                {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
              </div>
            </button>

            <div 
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
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