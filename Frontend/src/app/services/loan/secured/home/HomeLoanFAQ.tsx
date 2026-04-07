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
} from "lucide-react";

const HomeLoanFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is a Home Loan?",
      a: "A home loan is a secured loan offered by banks and NBFCs to help individuals purchase, construct, or renovate residential property. At Money King Financial, you can apply for a home loan in India for ready-to-move, under-construction, or resale properties with competitive interest rates and flexible repayment options.",
      icon: <Landmark className="w-5 h-5 text-blue-600" />,
    },
    {
      q: "How long does it take to get a home loan approved?",
      a: "Home loan approval typically takes 7–15 working days, depending on your profile, documents, and property verification. We ensure faster processing with minimal documentation.",
      icon: <HelpCircle className="w-5 h-5 text-emerald-600" />,
    },
    {
      q: "Can I get tax benefits on a home loan?",
      a: "Yes, borrowers can avail tax benefits: \n• Up to ₹1.5 lakh on principal repayment (Section 80C)\n• Up to ₹2 lakh on interest payment (Section 24)\nAs per applicable Income Tax rules.",
      icon: <Receipt className="w-5 h-5 text-purple-600" />,
    },
    {
      q: "Who can be a co-applicant for a home loan?",
      a: "A co-applicant can be an immediate family member such as a spouse, parents, or adult children. Adding a co-applicant can significantly improve your loan eligibility.",
      icon: <HelpCircle className="w-5 h-5 text-orange-600" />,
    },
    {
      q: "What is Pre-EMI in a home loan?",
      a: "Pre-EMI is the interest paid on the loan amount disbursed partially (mainly in under-construction properties). Full EMI starts only after complete loan disbursement.",
      icon: <Percent className="w-5 h-5 text-red-600" />,
    },
    {
      q: "Can I take two home loans at the same time?",
      a: "Yes, you can take multiple home loans if your income and repayment capacity allow it. However, eligibility and tax benefits may vary for the second property.",
      icon: <Landmark className="w-5 h-5 text-indigo-600" />,
    },
    {
      q: "Do lenders provide 100% home loan financing?",
      a: "No, lenders usually finance 75%–90% of the property value. The remaining 10%-25% amount must be paid by the borrower as a down payment.",
      icon: <IndianRupee className="w-5 h-5 text-pink-600" />,
    },
    {
      q: "What is the difference between Fixed and Floating rates?",
      a: "A floating rate changes based on market conditions (repo rate), while a fixed rate remains constant throughout the tenure, ensuring stable EMIs.",
      icon: <Percent className="w-5 h-5 text-cyan-600" />,
    },
  ];

  return (
    <section className="w-full bg-[#F8FAFC] py-12 md:py-24 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Typography
            variant="h3"
            className="text-2xl md:text-5xl font-black text-slate-900 mb-4 md:mb-6 leading-tight"
          >
            Home Loan FAQs
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

export default HomeLoanFAQ;
