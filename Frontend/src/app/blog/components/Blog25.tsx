"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Clock,
  Folder,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Leaf,
  Globe,
  Users,
  ShieldCheck,
  TrendingUp,
  Zap,
} from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";


interface FAQItem {
  q: string;
  a: string;
}

export const Blog25 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number): void =>
    setActiveFaq(activeFaq === index ? null : index);

  const faqs: FAQItem[] = [
    {
      q: "Q1: Does Green Finance offer lower returns compared to traditional finance?",
      a: "No. Modern data shows that ESG funds often provide competitive, and sometimes superior, returns because they invest in more efficient, well-governed, and future-proof companies.",
    },
    {
      q: "Q2: How do I know if a company is truly 'Green' or just 'Greenwashing'?",
      a: "Look for third-party ESG ratings from agencies like MSCI or Morningstar, and check for international certifications like the 'Global Reporting Initiative' (GRI).",
    },
    {
      q: "Q3: Can I use debt consolidation to start investing in ESG?",
      a: "Yes. By consolidating high-interest debts into one lower EMI, the money you save on interest can be redirected into high-growth ESG mutual funds or Green SIPs.",
    },
    {
      q: "Q4: Is Green Finance only for large corporations?",
      a: "Absolutely not. Retail investors can participate through ESG-themed ETFs, Green SIPs, and even 'Green Fixed Deposits' offered by many modern banks.",
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
            title="Green Finance & ESG Investing: The Future of Responsible Wealth Creation"
            category="INVESTMENT"
            author="Sumit Mishra"
            date="May 11, 2026"
            image="/images/blog/blog-25.jpeg"
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
                  src="/images/blog/blog-25.jpeg"
                  alt="A professional growth chart where bars are replaced by growing green plants, symbolizing sustainable profit"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="px-5 py-8 md:px-12 md:py-14 text-justify">
                <Typography variant="h5" className="text-[#1e3a8a] mb-4 font-bold leading-tight uppercase">
                  Green Finance & ESG: Investing with a Conscience
                </Typography>

                <div className="flex gap-4 text-gray-400 mb-8 pb-4 border-b overflow-x-auto no-scrollbar">
                  <div className="flex items-center gap-2 shrink-0">
                    <Clock size={16} />
                    <Typography variant="b2">May 11, 2026</Typography>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Folder size={16} />
                    <Typography variant="b2">Investment</Typography>
                  </div>
                </div>

                <Typography variant="s2" className="text-gray-600 mb-10 font-medium leading-relaxed block">
                  Investors are no longer just asking, &quot;How much profit will I make?&quot; Instead, they are asking, &quot;At what cost to the planet is this profit being made?&quot;
                </Typography>

                <section className="space-y-12">
                  {/* Definition Section */}
                  <div className="bg-green-50 p-6 md:p-8 rounded-3xl border border-green-100 flex flex-col md:flex-row gap-6 items-center">
                    <div className="bg-green-600 p-4 rounded-2xl text-white shrink-0">
                      <Leaf size={32} />
                    </div>
                    <div>
                      <Typography variant="h5" className="font-bold text-green-900 uppercase mb-2">What is Green Finance?</Typography>
                      <Typography variant="b1" className="text-gray-700 leading-relaxed">
                        It refers to any financial product—loans, debt, or investments—created to ensure better environmental outcomes like renewable energy and sustainable water management.
                      </Typography>
                    </div>
                  </div>

                  {/* ESG Framework Grid */}
                  <div className="space-y-6">
                    <Typography variant="h5" className="font-bold text-gray-900 uppercase">Understanding the ESG Framework</Typography>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="p-6 border border-gray-100 rounded-2xl shadow-sm text-center">
                        <Globe className="text-blue-500 mx-auto mb-3" size={28} />
                        <Typography variant="s1" className="font-bold mb-2 block">Environmental (E)</Typography>
                        <Typography variant="caption" className="text-gray-500">Carbon footprint, waste management, and resource stewardship.</Typography>
                      </div>
                      <div className="p-6 border border-gray-100 rounded-2xl shadow-sm text-center">
                        <Users className="text-orange-500 mx-auto mb-3" size={28} />
                        <Typography variant="s1" className="font-bold mb-2 block">Social (S)</Typography>
                        <Typography variant="caption" className="text-gray-500">Relationships with employees, suppliers, and communities.</Typography>
                      </div>
                      <div className="p-6 border border-gray-100 rounded-2xl shadow-sm text-center">
                        <ShieldCheck className="text-purple-500 mx-auto mb-3" size={28} />
                        <Typography variant="s1" className="font-bold mb-2 block">Governance (G)</Typography>
                        <Typography variant="caption" className="text-gray-500">Leadership ethics, audits, and shareholder rights.</Typography>
                      </div>
                    </div>
                  </div>

                  {/* Momentum Section */}
                  <div className="bg-[#1e3a8a] text-white p-8 md:p-12 rounded-[40px] relative overflow-hidden">
                    <Typography variant="h5" className="text-white mb-6 font-bold uppercase">Why ESG is the Future</Typography>
                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <TrendingUp className="text-blue-300 shrink-0" />
                        <Typography variant="b1"><strong>Risk Mitigation:</strong> Avoiding &quot;hidden&quot; legal and environmental costs.</Typography>
                      </div>
                      <div className="flex gap-4">
                        <Zap className="text-yellow-400 shrink-0" />
                        <Typography variant="b1"><strong>Performance:</strong> Sustainable models are more resilient to market shifts.</Typography>
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