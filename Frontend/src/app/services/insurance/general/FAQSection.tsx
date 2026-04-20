"use client";

import React, { useState } from "react";
import { Typography } from "@/app/components/ui/Typography";
import { Plus, Minus, HelpCircle } from "lucide-react";

// Typescript interface for FAQ items
interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What does general insurance cover?",
    answer: "General insurance covers non-life risks such as medical expenses, vehicle damage, property loss, and travel-related issues."
  },
  {
    id: 2,
    question: "Is general insurance mandatory?",
    answer: "Motor insurance is mandatory in India, while other types like health or home insurance are optional but highly recommended."
  },
  {
    id: 3,
    question: "Can I buy general insurance online?",
    answer: "Yes, you can easily compare and purchase general insurance policies online from trusted providers for quick approval."
  },
  {
    id: 4,
    question: "What is a claim in general insurance?",
    answer: "A claim is a formal request made by the policyholder to the insurance company for compensation against a covered loss."
  },
  {
    id: 5,
    question: "How is premium calculated?",
    answer: "Premium is calculated based on factors like coverage amount, risk level, type of insurance, and your personal details."
  }
];

export default function FAQSection() {
  // Fix: Adding <number | null> to resolve TypeScript error
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    // pt-4 (mobile) and pt-8 (web) for top alignment
    <section className="w-full bg-[#f8fafc] pt-4 md:pt-8 pb-16 px-4 font-lexend overflow-hidden">
      <div className="max-w-2xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="text-left mb-6">
          <div className="flex items-center space-x-2 mb-2 justify-start">
            <HelpCircle className="w-4 h-4 text-blue-600" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
              FAQ – Banking and Cash Management
            </span>
          </div>

          <Typography
            variant="h3"
            as="h2"
            className="text-xl md:text-2xl font-black text-slate-800 mb-2 leading-tight mt-0"
          >
            Your Questions Answered
          </Typography>
          
          <Typography className="text-slate-500 text-[11px] md:text-xs max-w-lg leading-relaxed">
            Find clear answers to common questions about our services and features.
          </Typography>
        </div>

        {/* --- FAQ LIST --- */}
        <div className="space-y-2.5">
          {faqData.map((faq) => (
            <div 
              key={faq.id}
              className={`border rounded-lg transition-all duration-300 ${
                openId === faq.id 
                ? "border-blue-200 bg-white shadow-sm" 
                : "border-slate-200 bg-white/50 hover:bg-white"
              }`}
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between p-3.5 text-left outline-none"
              >
                <span className={`text-[12px] md:text-[13px] font-bold leading-snug ${
                  openId === faq.id ? "text-blue-600" : "text-slate-700"
                }`}>
                  {faq.question}
                </span>
                <div className={`shrink-0 ml-3 p-1 rounded-md transition-colors ${
                  openId === faq.id ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-400"
                }`}>
                  {openId === faq.id ? (
                    <Minus className="w-3 h-3 stroke-3" />
                  ) : (
                    <Plus className="w-3 h-3 stroke-3" />
                  )}
                </div>
              </button>

              {/* Answer with smooth transition */}
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openId === faq.id ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-4 pb-4 pt-1">
                  <div className="h-1px w-full bg-slate-100 mb-3" />
                  <Typography className="text-slate-500 text-[11px] md:text-[12px] leading-relaxed">
                    {faq.answer}
                  </Typography>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}