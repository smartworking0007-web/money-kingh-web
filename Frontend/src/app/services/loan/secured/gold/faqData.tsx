"use client";

import React, { useState } from "react";
import { Typography } from "@/app/components/ui/Typography";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "What is a gold loan?",
    answer: "A gold loan is a secured loan where you pledge gold jewellery as collateral to get instant funds for your financial needs.",
  },
  {
    question: "How quickly can I get a gold loan?",
    answer: "Loan approval and disbursal are extremely fast and can typically happen within a few hours of verification.",
  },
  {
    question: "How is the loan amount calculated?",
    answer: "The loan amount depends on the purity of the gold, its total weight, and the current market value per gram.",
  },
  {
    question: "Is my gold safe?",
    answer: "Yes, your gold is stored securely in bank-grade, insured vaults with advanced 24/7 security surveillance.",
  },
  {
    question: "Can I repay before tenure ends?",
    answer: "Yes, most lenders allow prepayment or foreclosure before the tenure ends, often with nil or minimal charges.",
  },
  {
    question: "What happens if I don’t repay?",
    answer: "If you default on repayment, the lender has the right to auction the pledged gold ornaments to recover the outstanding dues.",
  },
];

export default function GoldLoanFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 bg-white font-lexend">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* --- LEFT SIDE: HEADER --- */}
        <div className="lg:sticky lg:top-10">
          <Typography
            variant="s1"
            className="text-[#FF7A00] font-bold uppercase tracking-wider mb-4 text-sm"
          >
            FREQUENTLY ASKED QUESTIONS
          </Typography>
          <Typography
            variant="h2"
            as="h2"
            className="text-[#1e293b] font-bold mb-6 text-4xl md:text-5xl leading-tight"
          >
            Your Questions Answered – <br /> Everything You Need
          </Typography>
          <Typography className="text-gray-500 text-lg mb-8 leading-relaxed">
            Find clear answers to common questions about our gold loan services and features.
          </Typography>
          
          {/* Gradient Button using Tailwind v4 bg-linear syntax */}
          <button className="px-8 py-3 bg-linear-to-r from-[#A5B4FC] via-[#FCA5A5] to-[#FF7A00] text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all cursor-pointer">
            See All FAQ s
          </button>
        </div>

        {/* --- RIGHT SIDE: ACCORDION --- */}
        <div className="flex flex-col gap-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-[2.5rem] transition-all duration-300 ${
                  isOpen ? "bg-[#FFFBF2]" : "bg-[#F8F9FA]"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-7 md:p-8 text-left cursor-pointer group"
                >
                  <span className="font-bold text-lg md:text-xl text-[#1e293b] pr-4">
                    {faq.question}
                  </span>
                  
                  {/* Plus/Minus Toggle Button */}
                  <div className={`shrink-0 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isOpen ? "bg-[#FF7A00] text-white" : "bg-white text-gray-400 border border-gray-100 shadow-sm"
                  }`}>
                    <span className="text-2xl font-medium leading-none">
                      {isOpen ? "−" : "+"}
                    </span>
                  </div>
                </button>

                {/* Smooth Expand/Collapse Animation */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "circOut" }}
                    >
                      <div className="px-8 pb-10 text-gray-600 leading-relaxed text-base md:text-lg">
                        <div className="pt-2 border-t border-orange-100/30">
                          {faq.answer}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}