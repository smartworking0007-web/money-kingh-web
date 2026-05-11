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
  TrendingUp,
  CheckCircle2,
  Brain,
  Percent,
} from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

interface FAQItem {
  q: string;
  a: string;
}

export const Blog27 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number): void =>
    setActiveFaq(activeFaq === index ? null : index);

  const faqs: FAQItem[] = [
    {
      q: "Q1: Will consolidating my debt hurt my credit score?",
      a: "Initially, you might see a small dip due to the 'hard inquiry'. However, in the long run, your score improves as you pay off high-interest balances and maintain a consistent, on-time payment history with your single EMI.",
    },
    {
      q: "Q2: Can I consolidate my credit card debt along with my personal loans?",
      a: "Yes. In fact, credit card debt is the most important to include because it carries the highest interest rate (up to 42%). Merging it saves you a significant amount of money.",
    },
    {
      q: "Q3: Is a Debt Consolidation Loan the same as a Personal Loan?",
      a: "Essentially, yes. It is a personal loan used specifically to pay off other creditors. Some banks offer specialized 'Consolidation' products, but a standard personal loan with a lower rate works the same way.",
    },
    {
      q: "Q4: How do I know if the 'One EMI' solution is right for me?",
      a: "If you struggle to track multiple due dates, or if more than 40% of your income is going toward high-interest debt, consolidation is a very smart move for your financial health.",
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
            title="The One EMI Solution: How to Simplify Your Life by Merging Your Debts"
            category="LOAN"
            author="Sumit Mishra"
            date="May 11, 2026"
            image="/images/blog/blog-27.jpeg"
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

            <div className="bg-white rounded-xl overflow-hidden border-gray-100 ">
              <div className="relative h-[250px] sm:h-[300px] md:h-[500px] w-full">
                <Image
                  src="/images/blog/blog-27.jpeg"
                  alt="Professional financial advisor explaining debt consolidation benefits to a client in a modern office."
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="px-5 py-8 md:px-12 md:py-14 text-justify">
                <Typography variant="h5" className="text-[#1e3a8a] mb-4 font-bold leading-tight uppercase">
                  The One EMI Solution: Reclaim Your Financial Peace
                </Typography>

                <div className="flex gap-4 text-gray-400 mb-8 pb-4 border-b overflow-x-auto no-scrollbar">
                  <div className="flex items-center gap-2 shrink-0">
                    <Clock size={16} />
                    <Typography variant="b2">May 11, 2026</Typography>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Folder size={16} />
                    <Typography variant="b2">Loan</Typography>
                  </div>
                </div>

                <Typography variant="s2" className="text-gray-600 mb-10 font-medium leading-relaxed block">
                  Managing multiple loan repayments can feel like a never-ending cycle of stress. Debt Consolidation—often called the <strong>&quot;One EMI&quot;</strong> solution—is your strategic exit.
                </Typography>

                <section className="space-y-12">
                  {/* Strategy Box */}
                  <div className="bg-blue-50 p-6 md:p-8 rounded-3xl border border-blue-100 flex gap-6 items-start">
                    <Merge className="text-blue-600 shrink-0" size={32} />
                    <div>
                      <Typography variant="h5" className="font-bold text-blue-900 uppercase mb-2">How it Works</Typography>
                      <Typography variant="b1" className="text-gray-700">
                        Take out one single new loan at a lower rate to pay off all high-interest credit cards and small EMIs. You are left with <strong>one lender, one date, and one installment.</strong>
                      </Typography>
                    </div>
                  </div>

                  {/* Benefits Grid */}
                  <div className="space-y-6">
                    <Typography variant="h5" className="font-bold text-gray-900 uppercase">Strategic Benefits</Typography>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="p-6 border border-gray-100 rounded-2xl shadow-sm">
                        <Percent className="text-green-600 mb-3" size={24} />
                        <Typography variant="s2" className="font-bold mb-2 block">Lower Interest</Typography>
                        <Typography variant="caption" className="text-gray-500">Move 42% credit card debt to a ~12% structured loan.</Typography>
                      </div>
                      <div className="p-6 border border-gray-100 rounded-2xl shadow-sm">
                        <TrendingUp className="text-blue-600 mb-3" size={24} />
                        <Typography variant="s2" className="font-bold mb-2 block">CIBIL Boost</Typography>
                        <Typography variant="caption" className="text-gray-500">Lower credit utilization ratio by paying off multiple cards.</Typography>
                      </div>
                      <div className="p-6 border border-gray-100 rounded-2xl shadow-sm">
                        <Brain className="text-purple-600 mb-3" size={24} />
                        <Typography variant="s2" className="font-bold mb-2 block">Mental Clarity</Typography>
                        <Typography variant="caption" className="text-gray-500">Stop &quot;survival mode&quot; and start planning for future goals.</Typography>
                      </div>
                    </div>
                  </div>

                  {/* Action Steps */}
                  <div className="bg-gray-900 text-white p-8 md:p-12 rounded-[40px] relative overflow-hidden">
                    <Typography variant="h5" className="text-white mb-8 font-bold uppercase">Success Checklist</Typography>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="text-blue-400" size={20} />
                        <Typography variant="b1"><strong>Audit:</strong> List every loan, its interest rate, and balance.</Typography>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="text-blue-400" size={20} />
                        <Typography variant="b1"><strong>Eligibility:</strong> Ensure your credit history is ready for the best rates.</Typography>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="text-blue-400" size={20} />
                        <Typography variant="b1"><strong>No New Debt:</strong> Stop using credit cards once you consolidate.</Typography>
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