"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Clock,
  Folder,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Merge,
  TrendingDown,
  CalendarCheck,
  Zap,
} from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

interface FAQItem {
  q: string;
  a: string;
}

export const Blog19 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number): void =>
    setActiveFaq(activeFaq === index ? null : index);

  const faqs: FAQItem[] = [
    {
      q: "1. Will debt consolidation hurt my credit score?",
      a: "Initially, a 'hard inquiry' for a new loan might cause a small, temporary dip. However, in the long run, paying off multiple high-utilization debts and making consistent on-time payments will significantly increase your credit score.",
    },
    {
      q: "2. Can I consolidate my debt if I have a low credit score?",
      a: "While it is more challenging, it’s not impossible. You might consider a secured loan (like a Loan Against Property) or adding a co-signer with a strong profile to improve your chances of approval.",
    },
    {
      q: "3. Is there a processing fee for consolidation loans?",
      a: "Yes, most banks charge a fee (usually 1% to 2% of the loan amount). Always calculate if the long-term interest savings outweigh these initial costs before proceeding.",
    },
    {
      q: "4. What types of debt can be consolidated?",
      a: "You can consolidate credit card debt, personal loans, medical bills, and other unsecured high-interest credit into one single manageable loan.",
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
            title="The Ultimate Guide to Debt Consolidation in 2026: Simplify Your Finances"
            category="FINANCE"
            author="Sumit Mishra"
            date="May 08, 2026"
            image="/images/blog/blog-19.jpeg"
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
                  src="/images/blog/blog-19.jpeg"
                  alt="Credit Scores by reducing credit utilization"
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
                  Debt Consolidation 2026: Simplify & Save Big
                </Typography>

                <div className="flex gap-4 text-gray-400 mb-8 pb-4 border-b overflow-x-auto no-scrollbar">
                  <div className="flex items-center gap-2 shrink-0">
                    <Clock size={16} />
                    <Typography variant="b2">May 08, 2026</Typography>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Folder size={16} />
                    <Typography variant="b2">Finance</Typography>
                  </div>
                </div>

                <Typography
                  variant="s2"
                  className="text-gray-600 mb-10 font-medium leading-relaxed block"
                >
                  Managing multiple debt payments can feel like a never-ending
                  cycle. In 2026, Debt Consolidation has emerged as the most
                  effective strategy to regain control.
                </Typography>

                <section className="space-y-12">
                  {/* What is Section */}
                  <div className="bg-blue-50 p-6 md:p-8 rounded-3xl border border-blue-100">
                    <div className="flex items-center gap-4 mb-4">
                      <Merge className="text-blue-600" size={32} />
                      <Typography
                        variant="h5"
                        className="font-bold text-blue-900 uppercase"
                      >
                        What is Debt Consolidation?
                      </Typography>
                    </div>
                    <Typography
                      variant="b1"
                      className="text-gray-700 leading-relaxed"
                    >
                      It is the process of taking out a single new loan to pay
                      off several smaller, high-interest debts. Instead of
                      managing five different payments, you focus on{" "}
                      <strong>one single EMI</strong>.
                    </Typography>
                  </div>

                  {/* Why it's a Game Changer */}
                  <div className="space-y-8">
                    <Typography
                      variant="h5"
                      className="font-bold text-gray-900 uppercase"
                    >
                      Why it&apos;s a Game-Changer in 2026
                    </Typography>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex gap-4">
                        <TrendingDown className="text-green-600 shrink-0" />
                        <div>
                          <Typography variant="s2" className="font-bold">
                            Lower Interest Rates
                          </Typography>
                          <Typography variant="b2" className="text-gray-600">
                            Replace 40% p.a. credit card debt with a ~12% p.a.
                            Personal Loan.
                          </Typography>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <CalendarCheck className="text-blue-600 shrink-0" />
                        <div>
                          <Typography variant="s2" className="font-bold">
                            One Due Date
                          </Typography>
                          <Typography variant="b2" className="text-gray-600">
                            No more missed payments or multiple late fees to
                            track.
                          </Typography>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <Zap className="text-yellow-600 shrink-0" />
                        <div>
                          <Typography variant="s2" className="font-bold">
                            Boost Credit Score
                          </Typography>
                          <Typography variant="b2" className="text-gray-600">
                            Reduces credit utilization ratio by closing
                            high-interest cards.
                          </Typography>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <Clock className="text-purple-600 shrink-0" />
                        <div>
                          <Typography variant="s2" className="font-bold">
                            Fixed Timeline
                          </Typography>
                          <Typography variant="b2" className="text-gray-600">
                            Unlike cards, consolidation loans have a fixed 3-5
                            year exit plan.
                          </Typography>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Success Steps */}
                  <div className="bg-gray-900 text-white p-8 md:p-12 rounded-[40px] relative overflow-hidden">
                    <Typography
                      variant="h5"
                      className="text-white mb-8 font-bold uppercase text-center"
                    >
                      How to Consolidate Successfully
                    </Typography>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                      {[
                        {
                          step: "1",
                          title: "List Your Debts",
                          desc: "Note every balance and its current rate.",
                        },
                        {
                          step: "2",
                          title: "Check Eligibility",
                          desc: "Ensure your score is ready for low rates.",
                        },
                        {
                          step: "3",
                          title: "Compare Offers",
                          desc: "Find a loan lower than your current average.",
                        },
                        {
                          step: "4",
                          title: "Close Old Accounts",
                          desc: "Pay them off immediately once disbursed.",
                        },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="flex gap-4 bg-white/10 p-5 rounded-2xl backdrop-blur-sm"
                        >
                          <span className="text-3xl font-black text-blue-400 opacity-50">
                            {item.step}
                          </span>
                          <div>
                            <Typography
                              variant="s2"
                              className="text-white font-bold"
                            >
                              {item.title}
                            </Typography>
                            <Typography
                              variant="caption"
                              className="text-gray-300"
                            >
                              {item.desc}
                            </Typography>
                          </div>
                        </div>
                      ))}
                    </div>
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
                          className="border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:border-blue-200 transition-all"
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
