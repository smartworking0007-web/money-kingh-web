"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Clock,
  Folder,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  RefreshCw,
  TrendingDown,
  Calculator,
  CheckCircle2,
  Zap,
} from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

interface FAQItem {
  q: string;
  a: string;
}

export const Blog20 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number): void =>
    setActiveFaq(activeFaq === index ? null : index);

  const faqs: FAQItem[] = [
    {
      q: "1. What documents are needed for a balance transfer?",
      a: "You will need your KYC, salary slips/ITR, a Foreclosure Statement from your current bank, and the original property documents (which the new bank will collect from the old one).",
    },
    {
      q: "2. Does the new bank charge a processing fee?",
      a: "Yes, usually ranging from ₹5,000 to 0.5% of the loan. However, in 2026, many banks waive these fees during festive offers—always negotiate for a waiver!",
    },
    {
      q: "3. Can I transfer my loan if I have a pending property registration?",
      a: "Usually, lenders require the property to be fully registered or at a specific stage of construction. Check with the new lender regarding their specific policy for under-construction projects.",
    },
    {
      q: "4. Should I reduce my EMI or my Tenure?",
      a: "If your goal is monthly cash flow, reduce the EMI. If your goal is to save the maximum amount of total interest and be debt-free faster, keep the EMI same and reduce the tenure.",
    },
  ];

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-full flex justify-center px-4"
        >
          <BlogCard1
            title="How Home Loan Balance Transfer Can Save You Lakhs: Your 2026 Guide"
            category="HOME LOAN"
            author="Sumit Mishra"
            date="May 08, 2026"
            image="/images/blog/blog-20.jpeg"
          />
        </div>
      ) : (
        <div className="fixed inset-0 z-40 bg-white overflow-y-auto pt-20 md:pt-28 no-scrollbar animate-in fade-in duration-300 text-left">
          <div className="relative max-w-5xl mx-auto pb-20 px-4 md:px-6">
            <div className="mb-6">
              <button
                onClick={() => setIsOpen(false)}
                className="flex items-center pt-3 text-gray-500 hover:text-[#1e3a8a] transition-colors font-bold uppercase text-[10px] cursor-pointer tracking-widest"
              >
                <ArrowLeft size={14} /> Back to Blogs
              </button>
            </div>

            <div className="bg-white rounded-xl overflow-hidden border-gray-100 shadow-sm">
              <div className="relative h-[250px] sm:h-[300px] md:h-[500px] w-full">
                <Image
                  src="/images/blog/blog-20.jpeg"
                  alt="how to move an existing Home Loan to another bank for a lower interest rate."
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="px-5 py-8 md:px-12 md:py-14 text-justify">
                <Typography
                  variant="h5"
                  className="text-[#1e3a8a] mb-4 font-bold leading-tight uppercase"
                >
                  Home Loan Balance Transfer: Save Your Hard-Earned Money
                </Typography>

                <div className="flex gap-4 text-gray-400 mb-8 pb-4 border-b overflow-x-auto no-scrollbar">
                  <div className="flex items-center gap-2 shrink-0">
                    <Clock size={16} />
                    <Typography variant="b2">May 08, 2026</Typography>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Folder size={16} />
                    <Typography variant="b2">Home Loan</Typography>
                  </div>
                </div>

                <section className="space-y-12">
                  {/* Definition Section */}
                  <div className="bg-blue-50 p-6 md:p-8 rounded-3xl border border-blue-100">
                    <div className="flex items-center gap-4 mb-4">
                      <RefreshCw className="text-blue-600" size={32} />
                      <Typography
                        variant="h5"
                        className="font-bold text-blue-900 uppercase"
                      >
                        What is HLBT?
                      </Typography>
                    </div>
                    <Typography
                      variant="b1"
                      className="text-gray-700 leading-relaxed"
                    >
                      A process where you move your outstanding home loan
                      balance from your current lender to a new one to take
                      advantage of lower interest rates or better terms.
                    </Typography>
                  </div>

                  {/* Savings Calculator Example */}
                  <div className="bg-gray-900 text-white p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                      <Calculator size={120} />
                    </div>
                    <Typography
                      variant="h5"
                      className="text-white mb-6 font-bold uppercase"
                    >
                      The &quot;Savings&quot; Impact
                    </Typography>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                      <div className="space-y-4">
                        <div className="flex justify-between border-b border-white/10 pb-2">
                          <Typography variant="b2">Loan Amount</Typography>
                          <Typography variant="s2" className="font-bold">
                            ₹50 Lakh
                          </Typography>
                        </div>
                        <div className="flex justify-between border-b border-white/10 pb-2">
                          <Typography variant="b2">Old Rate (9.25%)</Typography>
                          <Typography variant="s2" className="text-red-400">
                            EMI: ~₹45,500
                          </Typography>
                        </div>
                        <div className="flex justify-between border-b border-white/10 pb-2">
                          <Typography variant="b2">New Rate (8.50%)</Typography>
                          <Typography variant="s2" className="text-green-400">
                            EMI: ~₹43,275
                          </Typography>
                        </div>
                      </div>
                      <div className="bg-blue-600 p-6 rounded-2xl text-center">
                        <Typography
                          variant="h4"
                          className="text-white font-black"
                        >
                          ₹4,00,500
                        </Typography>
                        <Typography variant="b2" className="text-blue-100">
                          Total Savings over 15 Years
                        </Typography>
                      </div>
                    </div>
                  </div>

                  {/* Benefits Grid */}
                  <div className="space-y-6">
                    <Typography
                      variant="h5"
                      className="font-bold text-gray-900 uppercase"
                    >
                      Benefits of Switching in 2026
                    </Typography>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        {
                          title: "Reduced EMIs",
                          desc: "Lower monthly outflow for better budgeting.",
                          icon: <TrendingDown />,
                        },
                        {
                          title: "Shortened Tenure",
                          desc: "Keep EMI same to become debt-free faster.",
                          icon: <Clock />,
                        },
                        {
                          title: "Top-Up Facility",
                          desc: "Low-interest loans for home renovation.",
                          icon: <Zap />,
                        },
                        {
                          title: "Zero Penalty",
                          desc: "RBI mandates no foreclosure fees for floating rates.",
                          icon: <CheckCircle2 />,
                        },
                      ].map((benefit, i) => (
                        <div
                          key={i}
                          className="p-5 border border-gray-100 rounded-2xl hover:bg-gray-50 transition-colors flex gap-4"
                        >
                          <div className="text-blue-600 shrink-0">
                            {benefit.icon}
                          </div>
                          <div>
                            <Typography variant="s2" className="font-bold">
                              {benefit.title}
                            </Typography>
                            <Typography
                              variant="caption"
                              className="text-gray-500"
                            >
                              {benefit.desc}
                            </Typography>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Timing Section */}
                  <div className="p-8 bg-orange-50 rounded-3xl border border-orange-100">
                    <Typography
                      variant="h5"
                      className="text-orange-900 font-bold mb-4 uppercase"
                    >
                      When is the Right Time?
                    </Typography>
                    <ul className="space-y-4">
                      <li className="flex gap-3">
                        <span className="text-orange-500 font-bold">•</span>
                        <Typography variant="b1">
                          <strong>Early Years:</strong> Most effective during
                          the first 3-5 years.
                        </Typography>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-orange-500 font-bold">•</span>
                        <Typography variant="b1">
                          <strong>Rate Gap:</strong> When you see a difference
                          of 0.25% or more.
                        </Typography>
                      </li>
                    </ul>
                  </div>

                  {/* FAQ Section */}
                  <div className="pt-10 border-t border-gray-100">
                    <Typography
                      variant="h5"
                      className="text-[#1e3a8a] mb-8 font-bold uppercase underline decoration-blue-200 underline-offset-8"
                    >
                      Frequently Asked Questions
                    </Typography>
                    <div className="space-y-4">
                      {faqs.map((faq, index) => (
                        <div
                          key={index}
                          className="border border-gray-100 rounded-xl overflow-hidden shadow-sm"
                        >
                          <button
                            onClick={() => toggleFaq(index)}
                            className="w-full flex items-center justify-between p-5 text-left bg-gray-50/50 hover:bg-white transition-colors"
                          >
                            <Typography
                              variant="s2"
                              className="font-bold text-gray-900 leading-tight"
                            >
                              {faq.q}
                            </Typography>
                            {activeFaq === index ? (
                              <ChevronUp size={20} className="text-[#1e3a8a]" />
                            ) : (
                              <ChevronDown
                                size={20}
                                className="text-gray-400"
                              />
                            )}
                          </button>
                          {activeFaq === index && (
                            <div className="p-5 bg-white border-t border-gray-100 animate-in slide-in-from-top-2 duration-300">
                              <Typography
                                variant="b1"
                                className="text-gray-600 leading-relaxed"
                              >
                                {faq.a}
                              </Typography>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                <div className="mt-14">
                  <ShareSection />
                </div>
                <div className="mt-10 flex justify-center border-t pt-8">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 flex items-center gap-2 hover:text-[#1e3a8a] font-bold uppercase text-[10px] tracking-widest transition-all"
                  >
                    ← Back to Articles
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
