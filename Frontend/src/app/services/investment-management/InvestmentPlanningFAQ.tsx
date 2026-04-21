"use client";

import React, { useState } from "react";
import { Typography } from "@/app/components/ui/Typography";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "What is investment planning?",
    answer:
      "Investment planning is the process of setting financial goals and choosing the right investment options like mutual funds, stocks, or fixed deposits to achieve those goals over time.",
  },
  {
    question: "Why is investment planning important?",
    answer:
      "It helps you grow your wealth, beat inflation, achieve life goals (like buying a house, education, or retirement), and secure your financial future through disciplined saving.",
  },
  {
    question: "When should I start investment planning?",
    answer:
      "The earlier you start, the better. Early investment allows your money to grow through the power of compounding, helping you build a larger corpus over time with smaller initial amounts.",
  },
  {
    question: "What are the best investment options in India?",
    answer:
      "Popular options include Mutual Funds (SIP & Lump Sum), Fixed Deposits (FD), Public Provident Fund (PPF), Stocks/Equity Market, Real Estate, and Gold Investments.",
  },
  {
    question: "What is the difference between SIP and lump sum investment?",
    answer:
      "SIP (Systematic Investment Plan) allows you to invest a fixed amount regularly (monthly/quarterly), while a lump sum investment involves investing a large single amount at one time.",
  },
  {
    question: "How much should I invest every month?",
    answer:
      "The amount depends on your income, financial goals, risk appetite, and time horizon. A financial advisor can help you decide the right amount based on your surplus cash flow.",
  },
  {
    question: "Is investment planning risky?",
    answer:
      "All investments carry some risk. However, proper planning, diversification, and expert guidance can help minimize these risks while maximizing your potential returns.",
  },
  {
    question: "What is diversification in investment?",
    answer:
      "Diversification means spreading your investments across different asset classes (like equity, debt, gold) so that a poor performance in one doesn't impact your entire portfolio.",
  },
  {
    question: "How do I choose the right investment plan?",
    answer:
      "Consider your financial goals, risk tolerance, investment duration, and expected returns. Consulting a financial advisor can help you navigate these factors effectively.",
  },
  {
    question: "Can I change my investment plan later?",
    answer:
      "Yes, investment plans are flexible. You can modify your strategy or rebalance your portfolio based on changing financial goals, life stages, or market conditions.",
  },
  {
    question: "What is a long-term investment?",
    answer:
      "Long-term investments are those held for more than 3–5 years. These are ideal for beating market volatility and benefiting from long-term compounding.",
  },
  {
    question: "Do I need a financial advisor for investment planning?",
    answer:
      "While not mandatory, an advisor provides expert guidance, helps you avoid emotional mistakes, and creates a customized strategy tailored to your specific needs.",
  },
  {
    question: "What documents are required for investment planning?",
    answer:
      "Common documents include PAN Card, Identity/Address proof, Bank Details, Income Proof (for some high-value investments), and standard KYC documents.",
  },
  {
    question: "How does inflation affect investments?",
    answer:
      "Inflation reduces the purchasing power of money. Effective investment planning ensures your returns are higher than the inflation rate, actually growing your wealth.",
  },
  {
    question: "What are tax-saving investments in India?",
    answer:
      "Options under Section 80C include ELSS Mutual Funds, PPF, Life Insurance premiums, and National Savings Certificates (NSC).",
  },
];

export default function InvestmentPlanningFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-7xl mx-auto px-5 md:px-12 py-16 font-lexend bg-white relative z-20">
      {/* --- HEADER --- */}
      <div className="flex flex-col items-center gap-4 mb-12 text-center">
        <Typography
          variant="h4"
          as="h4"
          className="text-[#1e293b] font-black text-2xl md:text-4xl mt-0"
        >
          FAQ – 
        </Typography>
        <div className="max-w-2xl">
          <p className="text-[#8B1D1D] font-bold text-sm md:text-lg mb-1">
            Your Questions Answered – Everything You Need.
          </p>
          <p className="text-slate-500 text-xs md:text-base leading-relaxed">
            Find clear answers to common questions about our services and
            features.
          </p>
        </div>
      </div>

      {/* --- FAQ GRID (Desktop par 2 columns, Mobile par 1) --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
              openIndex === index
                ? "border-red-100 shadow-lg shadow-red-50/40"
                : "border-slate-100 hover:border-slate-200"
            }`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className={`w-full flex items-center justify-between p-5 text-left transition-colors ${
                openIndex === index ? "bg-red-50/20" : "bg-white"
              }`}
            >
              <span
                className={`font-bold text-sm md:text-base pr-4 ${
                  openIndex === index ? "text-[#8B1D1D]" : "text-slate-700"
                }`}
              >
                {index + 1}. {faq.question}
              </span>
              <div
                className={`p-1 rounded-full transition-all duration-300 ${
                  openIndex === index
                    ? "bg-[#8B1D1D] text-white rotate-180"
                    : "bg-slate-100 text-slate-400"
                }`}
              >
                <ChevronDown size={18} />
              </div>
            </button>

            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openIndex === index
                  ? "max-h-[300px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-5 pt-0 text-slate-500 text-xs md:text-sm leading-relaxed border-t border-red-50/50">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
