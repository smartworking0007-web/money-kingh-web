"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, } from "lucide-react";
import { Typography } from "@/app/components/ui/Typography";

const faqs = [
  {
    q: "What is a car loan?",
    a: "A car loan is a financing option that allows you to purchase a vehicle by paying in easy EMIs over a fixed tenure instead of paying the full amount upfront.",
  },
  {
    q: "Who is eligible for a car loan in India?",
    a: "Eligibility depends on factors like income, age, employment type, and credit score. Both salaried and self-employed individuals can apply.",
  },
  {
    q: "What is the minimum credit score required for a car loan?",
    a: "Most lenders prefer a credit score of 700 or above, but some may approve loans with lower scores at higher interest rates.",
  },
  {
    q: "Can I get 100% financing on a car loan?",
    a: "Yes, many lenders offer up to 100% financing on the on-road price, depending on your profile and eligibility.",
  },
  {
    q: "What is the interest rate on car loans in India?",
    a: "Car loan interest rates usually start from 8% to 12% per annum, depending on the lender and your credit profile.",
  },
  {
    q: "What is the maximum tenure for a car loan?",
    a: "The repayment tenure can go up to 8 years, depending on the lender and loan amount.",
  },
  {
    q: "Can I get a car loan for a used car?",
    a: "Yes, lenders provide used car loans, usually financing up to 80–85% of the car’s value.",
  },
  {
    q: "Are car loans secured or unsecured?",
    a: "Car loans are secured loans, where the vehicle itself acts as collateral.",
  },
  {
    q: "How long does it take to get a car loan approved?",
    a: "Approval can take 24 to 72 hours, depending on documentation and lender processes.",
  },
  {
    q: "What documents are required for a car loan?",
    a: "Common documents include ID proof, address proof, income proof, bank statements, and employment details.",
  },
  {
    q: "Can I prepay or foreclose my car loan?",
    a: "Yes, most lenders allow prepayment or foreclosure, but some may charge a small fee.",
  },
  {
    q: "How is car loan EMI calculated?",
    a: "EMI is calculated based on loan amount, interest rate, and tenure.",
  },
];

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="w-full py-12 md:py-24 bg-gray-50/30 font-lexend">
      <div className="max-w-4xl mx-auto px-5 md:px-6">
        {/* --- Header --- */}
        <div className="text-center mb-12 md:mb-16">
          <Typography
            variant="h3"
            as="h1"
            className="text-[#004687] font-bold text-3xl md:text-5xl mb-4 tracking-tight"
          >
            Frequently Asked Questions
          </Typography>
          <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto">
            Everything you need to know about Car Loans at Money King.
          </p>
        </div>

        {/* --- Accordion List --- */}
        <div className="space-y-3 md:space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className={`border rounded-2xl md:rounded-2rem transition-all duration-300 ${
                activeIndex === idx
                  ? "bg-white border-blue-200 shadow-xl shadow-blue-900/5"
                  : "bg-white border-gray-100 hover:border-gray-200"
              }`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-5 md:p-8 text-left outline-none"
              >
                <span
                  className={`text-base md:text-lg font-bold transition-colors ${
                    activeIndex === idx ? "text-[#004687]" : "text-gray-900"
                  }`}
                >
                  {faq.q}
                </span>
                <div
                  className={`shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    activeIndex === idx
                      ? "bg-blue-600 text-white rotate-0"
                      : "bg-gray-50 text-gray-400 rotate-90"
                  }`}
                >
                  {activeIndex === idx ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-6 md:px-8 md:pb-8 text-sm md:text-base text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                      {faq.a}
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

export default FAQPage;
