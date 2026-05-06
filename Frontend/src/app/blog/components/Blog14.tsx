"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Clock,
  Folder,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  CreditCard,
  Banknote,
  CheckCircle2,
} from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";
interface FAQItem {
  q: string;
  a: string;
}

export const Blog14 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number): void =>
    setActiveFaq(activeFaq === index ? null : index);

  const faqs: FAQItem[] = [
    {
      q: "Q1: Can I build a credit score faster with a Personal Loan?",
      a: "Not necessarily. Consistency matters more than the amount. A credit card used for 6 months and paid in full can boost your score just as effectively as a 6-month loan repayment history.",
    },
    {
      q: "Q2: Does 'Minimum Amount Due' on a credit card help my score?",
      a: "No! Paying only the minimum saves you from late fees, but you get charged heavy interest (up to 42%), and your high credit utilization can actually lower your score. Always pay the Total Amount Due.",
    },
    {
      q: "Q3: What is the '30% Rule' for Credit Cards?",
      a: "To build a great score, never use more than 30% of your total limit. For example, if your limit is ₹1 Lakh, try to keep your monthly spends below ₹30,000 to show responsible usage.",
    },
    {
      q: "Q4: Will applying for both at once hurt my score?",
      a: "Yes. Every application triggers a 'Hard Inquiry.' Too many inquiries in a short time make you look 'credit hungry,' which drops your score. Pick one and stick to it for at least 6-12 months.",
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
            title="Credit Card vs. Personal Loan: Which is Better to Start Your Credit Journey?"
            category="FINANCE"
            author="Sumit Mishra"
            date="May 06, 2026"
            image="/images/blog/blog-14.jpeg"
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
                  src="/images/blog/blog-14.jpeg"
                  alt="Comparison table showing differences between credit cards and personal loans for credit building"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="px-5 py-8 md:px-12 md:py-14 text-justify">
                {/* Main Heading H5 */}
                <Typography variant="h5" className="text-[#1e3a8a] mb-4 font-bold leading-tight uppercase">
                  Credit Card vs. Personal Loan: Starting Your Journey
                </Typography>

                <div className="flex gap-4 text-gray-400 mb-8 pb-4 border-b overflow-x-auto no-scrollbar">
                  <div className="flex items-center gap-2 shrink-0">
                    <Clock size={16} />
                    <Typography variant="b2">May 06, 2026</Typography>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Folder size={16} />
                    <Typography variant="b2">Finance</Typography>
                  </div>
                </div>

                <section className="space-y-12">
                  {/* Credit Card Section - Changed h6 to h5 */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CreditCard className="text-blue-600" size={28} />
                      <Typography variant="h5" className="font-bold text-gray-900">
                        1. Credit Card: The &quot;Entry-Level&quot; Builder
                      </Typography>
                    </div>
                    <Typography variant="b1" className="text-gray-700 leading-relaxed">
                      A credit card is often the most accessible tool for beginners. It provides a <strong>&quot;revolving&quot;</strong> line of credit. If you pay your total bill on time every month, you pay <strong>0% interest</strong>.
                    </Typography>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <li className="flex items-center gap-2 text-sm bg-blue-50 p-3 rounded-lg text-blue-800">
                        <CheckCircle2 size={16} /> Rewards & Cashback
                      </li>
                      <li className="flex items-center gap-2 text-sm bg-blue-50 p-3 rounded-lg text-blue-800">
                        <CheckCircle2 size={16} /> Manage small, recurring debts
                      </li>
                    </ul>
                  </div>

                  {/* Personal Loan Section - Changed h6 to h5 */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Banknote className="text-green-600" size={28} />
                      <Typography variant="h5" className="font-bold text-gray-900">
                        2. Personal Loan: The &quot;Fixed&quot; Commitment
                      </Typography>
                    </div>
                    <Typography variant="b1" className="text-gray-700 leading-relaxed">
                      A personal loan adds <strong>&quot;Installment Credit&quot;</strong> to your profile. Lenders love seeing that you can commit to a fixed payment for 12 to 36 months, building a disciplined history.
                    </Typography>
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-xl">
                      <Typography variant="b2" className="text-yellow-800  leading-relaxed">
                        Note: Interest starts from Day 1. There is no &quot;minimum due&quot; grace here; you must pay the EMI or default.
                      </Typography>
                    </div>
                  </div>

                  {/* Which One to Choose Section - Changed h6 to h5 inside loop/grid */}
                  <div className="pt-6">
                    <Typography variant="h5" className="text-[#1e3a8a] mb-6 font-bold uppercase tracking-wide">
                      3. Which One Should You Choose?
                    </Typography>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-50 p-8 rounded-3xl border border-gray-100">
                      <div className="space-y-4">
                        <Typography variant="s1" className="text-blue-700 font-bold">Choose a Credit Card if:</Typography>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li>• You want to build score without interest.</li>
                          <li>• You have small, everyday expenses.</li>
                          <li>• You want airport lounge & shop perks.</li>
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <Typography variant="s1" className="text-green-700 font-bold">Choose a Personal Loan if:</Typography>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li>• You have a specific large expense.</li>
                          <li>• You want to show a &quot;Credit Mix&quot;.</li>
                          <li>• You have a very stable monthly income.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* FAQ Section */}
                  <div className="pt-10 border-t border-gray-100">
                    <Typography variant="h5" className="text-[#1e3a8a] mb-8 font-bold uppercase underline decoration-blue-200 underline-offset-8">
                      Frequently Asked Questions
                    </Typography>
                    <div className="space-y-4">
                      {faqs.map((faq, index) => (
                        <div key={index} className="border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:border-blue-200 transition-all">
                          <button 
                            onClick={() => toggleFaq(index)} 
                            className="w-full flex items-center justify-between p-5 text-left bg-gray-50/50 hover:bg-white transition-colors"
                          >
                            <Typography variant="s2" className="font-bold text-gray-900 leading-tight">{faq.q}</Typography>
                            {activeFaq === index ? <ChevronUp size={20} className="text-[#1e3a8a]" /> : <ChevronDown size={20} className="text-gray-400" />}
                          </button>
                          {activeFaq === index && (
                            <div className="p-5 bg-white border-t border-gray-100 animate-in slide-in-from-top-2 duration-300">
                              <Typography variant="b1" className="text-gray-600 leading-relaxed">{faq.a}</Typography>
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