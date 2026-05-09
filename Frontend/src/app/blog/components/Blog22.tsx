"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Clock,
  Folder,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Target,
  Calculator,
  TrendingUp,
  ShieldCheck,
  AlertCircle,
  Users,
} from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

interface FAQItem {
  q: string;
  a: string;
}

export const Blog22 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number): void =>
    setActiveFaq(activeFaq === index ? null : index);

  const faqs: FAQItem[] = [
    {
      q: "Q1: Is the 10X cover enough if I am the sole breadwinner?",
      a: "10X is the absolute minimum. If you have multiple dependents (parents, spouse, kids) and no other major assets, aiming for 15X to 20X is a safer professional strategy to account for rising education and medical costs.",
    },
    {
      q: "Q2: Should I include my company’s group life insurance in this 10X calculation?",
      a: "It is risky to rely solely on corporate insurance. If you lose your job or change careers, you are left without cover. Treat your personal 10X policy as your primary shield and the company cover as a secondary bonus.",
    },
    {
      q: "Q3: Can I have multiple term plans to reach the 10X target?",
      a: "Yes, you can. In fact, having policies from two different insurers can be a strategic move to diversify 'claim settlement risk,' provided you disclose all previous policies to both insurers accurately.",
    },
    {
      q: "Q4: How does the 10X rule handle lifestyle inflation?",
      a: "The rule should be reviewed every 3-5 years. As your income and lifestyle costs increase, your economic value increases. If your salary doubles, you should top up your insurance to maintain the 10X ratio.",
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
            title="The 10X Rule: How to Calculate the Exact Life Cover You Need"
            category="INSURANCE"
            author="Sumit Mishra"
            date="May 09, 2026"
            image="/images/blog/blog-22.jpeg"
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

            <div className="bg-white rounded-xl overflow-hidden border-gray-100">
              <div className="relative h-[250px] sm:h-[300px] md:h-[500px] w-full">
                <Image
                  src="/images/blog/blog-22.jpeg"
                  alt="Checklist graphic for selecting the right life insurance sum assured"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="px-5 py-8 md:px-12 md:py-14 text-justify">
                <Typography variant="h5" className="text-[#1e3a8a] mb-4 font-bold leading-tight uppercase">
                  The 10X Rule: Securing Your Family&apos;s Future
                </Typography>

                <div className="flex gap-4 text-gray-400 mb-8 pb-4 border-b overflow-x-auto no-scrollbar">
                  <div className="flex items-center gap-2 shrink-0">
                    <Clock size={16} />
                    <Typography variant="b2">May 09, 2026</Typography>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Folder size={16} />
                    <Typography variant="b2">Insurance</Typography>
                  </div>
                </div>

                <Typography variant="s2" className="text-gray-600 mb-10 font-medium leading-relaxed block">
                  Choosing a Life Insurance cover shouldn&apos;t be a random guess. It is a replacement for your economic value. To simplify this, financial experts globally rely on the <strong>10X Rule</strong>.
                </Typography>

                <section className="space-y-12">
                  {/* Philosophy Section */}
                  <div className="bg-blue-50 p-6 md:p-8 rounded-3xl border border-blue-100">
                    <div className="flex items-center gap-4 mb-4">
                      <Target className="text-blue-600" size={32} />
                      <Typography variant="h5" className="font-bold text-blue-900 uppercase">Understanding the 10X Philosophy</Typography>
                    </div>
                    <Typography variant="b1" className="text-gray-700 leading-relaxed">
                      The rule suggests your Sum Assured should be <strong>10 times your annual gross income</strong>. The logic? If the family invests this payout in a safe instrument at 7-8%, the interest generated can effectively replace your monthly salary while keeping the main corpus intact.
                    </Typography>
                  </div>

                  {/* Why Income Replacement Matters */}
                  <div className="space-y-6">
                    <Typography variant="h5" className="font-bold text-gray-900 uppercase">Why &quot;Income Replacement&quot; Wins</Typography>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex gap-3 p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
                        <ShieldCheck className="text-green-600 shrink-0" />
                        <Typography variant="b2">Pay off all outstanding liabilities (Loans)</Typography>
                      </div>
                      <div className="flex gap-3 p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
                        <Users className="text-blue-600 shrink-0" />
                        <Typography variant="b2">Provide a monthly &quot;salary&quot; to your spouse</Typography>
                      </div>
                      <div className="flex gap-3 p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
                        <TrendingUp className="text-purple-600 shrink-0" />
                        <Typography variant="b2">Fund future milestones (Education/Weddings)</Typography>
                      </div>
                      <div className="flex gap-3 p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
                        <AlertCircle className="text-orange-600 shrink-0" />
                        <Typography variant="b2">Account for inflation in daily expenses</Typography>
                      </div>
                    </div>
                  </div>

                  {/* Modification Factors */}
                  <div className="bg-gray-900 text-white p-8 md:p-12 rounded-[40px] relative overflow-hidden">
                    <Typography variant="h5" className="text-white mb-8 font-bold uppercase">When to push for 15X or 20X?</Typography>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4 border-l-2 border-blue-400 pl-6">
                        <Typography variant="b1" className="text-blue-100">
                          <strong>Existing Debt:</strong> If you have a ₹50 Lakh home loan, add it on top of your 10X cover.
                        </Typography>
                      </div>
                      <div className="flex items-start gap-4 border-l-2 border-blue-400 pl-6">
                        <Typography variant="b1" className="text-blue-100">
                          <strong>Life Stage:</strong> A 25-year-old with young dependents needs more cover than someone at 55 near retirement.
                        </Typography>
                      </div>
                    </div>
                  </div>

                  {/* Actionable Steps */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <Calculator className="text-[#1e3a8a]" size={28} />
                      <Typography variant="h5" className="font-bold uppercase text-gray-900">Actionable Steps to Implement</Typography>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-5 bg-gray-50 rounded-2xl flex gap-4">
                        <div className="h-8 w-8 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center font-bold shrink-0">1</div>
                        <Typography variant="b2"><strong>Calculate Gross Income:</strong> Include salary, bonuses, and side income.</Typography>
                      </div>
                      <div className="p-5 bg-gray-50 rounded-2xl flex gap-4">
                        <div className="h-8 w-8 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center font-bold shrink-0">2</div>
                        <Typography variant="b2"><strong>Audit Liabilities:</strong> List every single loan to be cleared first.</Typography>
                      </div>
                      <div className="p-5 bg-gray-50 rounded-2xl flex gap-4">
                        <div className="h-8 w-8 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center font-bold shrink-0">3</div>
                        <Typography variant="b2"><strong>Evaluate Assets:</strong> Subtract significant liquid assets from the total cover.</Typography>
                      </div>
                      <div className="p-5 bg-gray-50 rounded-2xl flex gap-4">
                        <div className="h-8 w-8 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center font-bold shrink-0">4</div>
                        <Typography variant="b2"><strong>Pick Tenure:</strong> Cover until retirement age (60 or 65), not for life.</Typography>
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