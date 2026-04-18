"use client";

import React, { useState } from "react";
import { Typography } from "@/app/components/ui/Typography";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MachineryFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is a machinery loan?",
      answer: "A machinery loan is a type of business loan that helps companies purchase new or used equipment. It allows businesses to upgrade operations without affecting working capital.",
    },
    {
      question: "Who is eligible for a machinery loan in India?",
      answer: "MSMEs, manufacturers, proprietorships, LLPs, and private limited companies with stable income, good credit score, and minimum business vintage (2–3 years) are eligible.",
    },
    {
      question: "What is the interest rate for machinery loans?",
      answer: "Machinery loan interest rates in India usually start from 10%–12% p.a., depending on your credit profile, loan amount, and business performance.",
    },
    {
      question: "What is the maximum loan amount I can get?",
      answer: "You can avail machinery loans ranging from ₹5 lakh up to ₹10 crore, depending on eligibility and business requirements.",
    },
    {
      question: "Is collateral required for machinery finance?",
      answer: "Collateral may or may not be required. Some lenders offer collateral-free machinery loans for eligible MSMEs and businesses.",
    },
    {
      question: "What is the repayment tenure for machinery loans?",
      answer: "Repayment tenure typically ranges from 1 to 10 years, allowing businesses to manage EMIs comfortably.",
    },
    {
      question: "What documents are required for a machinery loan?",
      answer: "Basic documents include: KYC (PAN, [Aadhaar Redacted]), Business proof (GST, registration), Bank statements (6–12 months), ITR and financial statements, and Machinery quotation.",
    },
    {
      question: "Can I get 100% financing for machinery?",
      answer: "Yes, some lenders offer up to 100% financing, including installation and taxes, depending on your business profile.",
    },
    {
      question: "How long does it take to get a machinery loan approved?",
      answer: "Machinery loan approval usually takes 3–7 working days, depending on documentation and the lender's process.",
    },
    {
      question: "Can I prepay my machinery loan?",
      answer: "Yes, most lenders allow prepayment or foreclosure, but some charges may apply based on the specific loan terms.",
    },
  ];

  return (
    <section className="bg-white py-12 md:py-0 px-4 md:px-5 lg:px-20 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-10">
          <Typography
            variant="h3"
            as="h2"
            className="text-[#1e293b]  text-3xl md:text-5xl mb-10 mt-0 tracking-tight"
          >
            Machinery Loan FAQs in India
          </Typography>
          <Typography
            variant="b1"
            className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base mt-0"
          >
            Find answers to common questions about machinery finance, eligibility, and the application process.
          </Typography>
        </div>

        {/* --- FAQ ACCORDION --- */}
        <div className="space-y-3 md:space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-300 ${
                openIndex === index 
                ? "border-blue-100 bg-blue-50/30 shadow-sm" 
                : "border-slate-100 bg-white"
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none"
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <HelpCircle className={`w-5 h-5 mt-1 shrink-0 ${openIndex === index ? "" : "text-slate-400"}`} />
                  <Typography
                    variant="s2"
                    className={`text-sm md:text-lg leading-tight mt-0 transition-colors ${
                      openIndex === index ? "" : "text-[#1e293b]"
                    }`}
                  >
                    {item.question}
                  </Typography>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`p-1 rounded-full shrink-0 ${openIndex === index ? "text-blue-600" : "text-slate-400"}`}
                >
                  <ChevronDown className="w-5 h-5 md:w-6 md:h-6" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                  >
                    <div className="px-5 pb-6 md:px-16 md:pb-8 pt-0">
                      <Typography
                        variant="b2"
                        className="text-slate-600 text-sm md:text-base leading-relaxed mt-0"
                      >
                        {item.answer}
                      </Typography>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}