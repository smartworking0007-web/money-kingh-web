"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Clock,
  Folder,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  LineChart,
  ShieldCheck,
  BrainCircuit,
  Zap,
  Bot,
} from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";


interface FAQItem {
  q: string;
  a: string;
}

export const Blog26 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number): void =>
    setActiveFaq(activeFaq === index ? null : index);

  const faqs: FAQItem[] = [
    {
      q: "Q1: Is it safe to give AI apps access to my bank details?",
      a: "Most reputable Fintech apps use bank-grade encryption (AES-256) and 'read-only' access. This means the AI can analyze your data to give insights but cannot move your money without your explicit 2-factor authentication.",
    },
    {
      q: "Q2: Can AI replace a human financial advisor?",
      a: "AI is excellent for data analysis and routine tasks, but a human advisor provides emotional intelligence for complex estate planning. For 90% of daily wealth management, AI is more efficient and cost-effective.",
    },
    {
      q: "Q3: How does AI help in reducing debt?",
      a: "AI analyzes your outstanding loans and suggests the most efficient strategy (like Avalanche or Snowball). It also notifies you when interest rates drop so you can switch to a 'One EMI' solution to save money.",
    },
    {
      q: "Q4: Are robo-advisors better than manual SIPs?",
      a: "Robo-advisors remove 'human emotion' from investing. They don't panic during market crashes; they stick to a data-driven strategy, which usually leads to more consistent long-term returns.",
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
            title="AI in Personal Finance: How Technology is Revolutionizing Your Wealth"
            category="FINTECH"
            author="Sumit Mishra"
            date="May 11, 2026"
            image="/images/blog/blog-26.jpeg"
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
                  src="/images/blog/blog-26.jpeg"
                  alt="Digital interface showing AI-powered wealth management dashboard with growth charts."
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="px-5 py-8 md:px-12 md:py-14 text-justify">
                <Typography variant="h5" className="text-[#1e3a8a] mb-4 font-bold leading-tight uppercase">
                  AI in Finance: The Era of Intelligent Wealth
                </Typography>

                <div className="flex gap-4 text-gray-400 mb-8 pb-4 border-b overflow-x-auto no-scrollbar">
                  <div className="flex items-center gap-2 shrink-0">
                    <Clock size={16} />
                    <Typography variant="b2">May 11, 2026</Typography>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Folder size={16} />
                    <Typography variant="b2">Fintech</Typography>
                  </div>
                </div>

                <Typography variant="s2" className="text-gray-600 mb-10 font-medium leading-relaxed block">
                  Financial planning is no longer limited to spreadsheets. AI is empowering individuals with insights previously available only to institutional investors.
                </Typography>

                <section className="space-y-12">
                  {/* AI Transformation Section */}
                  <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[40px] relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                       <BrainCircuit size={150} />
                    </div>
                    <Typography variant="h5" className="text-blue-400 mb-4 font-bold uppercase">The Intelligent Shift</Typography>
                    <Typography variant="b1" className="text-gray-300 leading-relaxed relative z-10">
                      AI solves the &quot;boring parts&quot; of money management by providing predictive insights—telling you not just where your money went, but <strong>where it should go next.</strong>
                    </Typography>
                  </div>

                  {/* Key Features Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-blue-50 rounded-3xl border border-blue-100">
                      <Zap className="text-blue-600 mb-4" size={28} />
                      <Typography variant="s1" className="font-bold mb-2 block">Hyper-Budgeting</Typography>
                      <Typography variant="b2" className="text-gray-600">Syncs with accounts to identify patterns and alert you to overspending in real-time.</Typography>
                    </div>
                    <div className="p-6 bg-purple-50 rounded-3xl border border-purple-100">
                      <Bot className="text-purple-600 mb-4" size={28} />
                      <Typography variant="s1" className="font-bold mb-2 block">Robo-Advisors</Typography>
                      <Typography variant="b2" className="text-gray-600">Automated portfolio rebalancing and tax-loss harvesting based on your risk appetite.</Typography>
                    </div>
                    <div className="p-6 bg-green-50 rounded-3xl border border-green-100">
                      <ShieldCheck className="text-green-600 mb-4" size={28} />
                      <Typography variant="s1" className="font-bold mb-2 block">AI Security</Typography>
                      <Typography variant="b2" className="text-gray-600">Detects anomalies instantly to freeze accounts and prevent cyber-fraud.</Typography>
                    </div>
                  </div>

                  {/* Predictive Analytics Section */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 border-l-4 border-[#1e3a8a] pl-4">
                      <LineChart className="text-[#1e3a8a]" />
                      <Typography variant="h5" className="font-bold text-gray-900 uppercase tracking-wide">Predictive Analytics</Typography>
                    </div>
                    <Typography variant="b1" className="text-gray-700 leading-relaxed">
                      AI tools can forecast your future net worth by analyzing income trends and inflation. It tells you exactly when you can afford a new home or retire comfortably, making long-term products like <strong>Home Loans</strong> much easier to plan.
                    </Typography>
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