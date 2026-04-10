"use client";

import React, { useState } from "react";
import { Typography } from "@/app/components/ui/Typography";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  HelpCircle,
  Landmark,
  Percent,
  Receipt,
  IndianRupee,
  Briefcase,
  History,
  ShieldCheck,
  Scale,
  TrendingUp, // Fix: Added TrendingUp to imports
} from "lucide-react";

const LAPLoanFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is a Loan Against Property (LAP)?",
      a: "A Loan Against Property (LAP) is a secured loan where you pledge your residential or commercial property as collateral to get funds for personal or business needs. It allows you to unlock the hidden value of your real estate assets.",
      icon: <Landmark className="w-5 h-5 text-blue-600" />,
    },
    {
      q: "What is the interest rate for a Loan Against Property?",
      a: "The LAP interest rate typically starts from 9.00% p.a. onwards. The final rate depends on factors like your CIBIL score, income stability, property type, and lender policies.",
      icon: <Percent className="w-5 h-5 text-emerald-600" />,
    },
    {
      q: "How much loan can I get against my property?",
      a: "Lenders usually provide up to 60% – 75% of the market value of your property (LTV - Loan to Value ratio), depending on your repayment capacity and property evaluation.",
      icon: <IndianRupee className="w-5 h-5 text-purple-600" />,
    },
    {
      q: "What is the maximum tenure for LAP?",
      a: "Repayment tenure for a Loan Against Property is flexible and can go up to 15–20 years, making EMIs affordable for borrowers.",
      icon: <History className="w-5 h-5 text-orange-600" />,
    },
    {
      q: "What CIBIL score is required for LAP?",
      a: "A CIBIL score of 700–750+ is generally preferred. While some lenders consider lower scores, a higher score ensures quicker approval and more competitive interest rates.",
      icon: <ShieldCheck className="w-5 h-5 text-red-600" />,
    },
    {
      q: "What documents are required for LAP?",
      a: "You need KYC (Aadhaar, PAN), income proof (Salary slips/ITR), bank statements (6-12 months), and original property documents including the title deed and approved plans.",
      icon: <Receipt className="w-5 h-5 text-indigo-600" />,
    },
    {
      q: "Can I prepay or foreclose my LAP loan?",
      a: "Yes, most lenders allow prepayment. While floating-rate loans for individuals often have zero foreclosure charges, fixed-rate loans or business loans might attract a fee (usually 2-4%).",
      icon: <Scale className="w-5 h-5 text-pink-600" />,
    },
    {
      q: "How long does it take to get a LAP loan approved?",
      a: "Approval and disbursal usually take 5–10 working days. The timeline depends heavily on the speed of legal verification and technical evaluation of the property.",
      icon: <HelpCircle className="w-5 h-5 text-cyan-600" />,
    },
    {
      q: "Is Loan Against Property better than a personal loan?",
      a: "Generally, yes. LAP offers significantly lower interest rates and much higher loan amounts compared to personal loans because it is a secured form of credit.",
      icon: <TrendingUp className="w-5 h-5 text-teal-600" />,
    },
    {
      q: "Can self-employed individuals apply for LAP?",
      a: "Absolutely. Self-employed professionals and business owners are primary applicants for LAP, provided they can demonstrate business stability and consistent income through ITRs.",
      icon: <Briefcase className="w-5 h-5 text-slate-600" />,
    },
  ];

  return (
    <section className="w-full bg-[#F8FAFC] py-12 md:py-24 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Typography
            variant="h3"
            as="h3"
            className="text-2xl md:text-5xl font-black text-slate-900 mb-4 md:mb-6 leading-tight mt-0!"
          >
            Loan Against Property FAQs
          </Typography>
          <div className="h-1 w-16 md:w-20 bg-blue-600 mx-auto rounded-full" />
        </div>

        {/* Accordion Container */}
        <div className="space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`border rounded-xl md:rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? "bg-white border-blue-200 shadow-lg shadow-blue-500/5"
                  : "bg-white border-slate-200 hover:border-blue-300 shadow-sm"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 md:p-6 text-left transition-colors"
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <div
                    className={`p-2 rounded-lg ${openIndex === index ? "bg-blue-50" : "bg-slate-100"} transition-colors shrink-0`}
                  >
                    {faq.icon}
                  </div>
                  <span
                    className={`font-bold text-sm md:text-lg leading-snug ${openIndex === index ? "text-blue-600" : "text-slate-800"}`}
                  >
                    {faq.q}
                  </span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 md:w-5 md:h-5 text-slate-400 shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180 text-blue-600" : ""}`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-4 md:px-6 pb-5 md:pb-6 pt-0 md:pl-[72px]">
                      <div className="h-px bg-slate-100 mb-4" />
                      <p className="text-slate-600 leading-relaxed text-xs md:text-base whitespace-pre-line">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LAPLoanFAQ;