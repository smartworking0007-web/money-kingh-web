"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Clock,
  Folder,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  TrendingDown,
  TrendingUp,
  Target,
} from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";
import { Button } from "@/app/components/ui/Button";

interface FAQItem {
  q: string;
  a: string;
}

export const Blog16 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number): void =>
    setActiveFaq(activeFaq === index ? null : index);

  const faqs: FAQItem[] = [
    {
      q: "Q: Can I start an SIP with a very small amount?",
      a: "Yes! Most funds allow you to start an SIP with as little as ₹500. It’s about the habit of disciplined saving, not just the large amount.",
    },
    {
      q: "Q: Is Lumpsum too risky for a beginner?",
      a: "Generally, yes. If you put all your money in today and the market drops tomorrow, it can be emotionally painful. SIPs help you stay disciplined without that 'heartbreak'.",
    },
    {
      q: "Q: Should I stop my SIP if the market crashes?",
      a: "NEVER. A market crash is actually the 'Golden Period' for an SIP. Stopping your SIP during a crash is like walking out of a store right when they announce a 50% discount!",
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
            title="Lumpsum vs. SIP: Which Strategy Wins the Volatile Market War?"
            category="MUTUAL FUND"
            author="Sumit Mishra"
            date="May 07, 2026"
            image="/images/blog/blog-16.jpeg"
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

            <div className="bg-white rounded-xl overflow-hidden  ">
              <div className="relative h-[250px] sm:h-[300px] md:h-[500px] w-full">
                <Image
                  src="/images/blog/blog-16.jpeg"
                  alt="A creative illustration of a turtle (SIP) and a lion (Lumpsum) representing two different investment styles."
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="px-5 py-8 md:px-12 md:py-14 text-justify">
                <Typography variant="h5" className="text-[#1e3a8a] mb-4 font-bold leading-tight uppercase">
                  Lumpsum vs. SIP: The Ultimate Investment Showdown
                </Typography>

                <div className="flex gap-4 text-gray-400 mb-8 pb-4 border-b overflow-x-auto no-scrollbar">
                  <div className="flex items-center gap-2 shrink-0">
                    <Clock size={16} />
                    <Typography variant="b2">May 07, 2026</Typography>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Folder size={16} />
                    <Typography variant="b2">Mutual Fund</Typography>
                  </div>
                </div>

                <Typography variant="s2" className="text-gray-600 mb-10 font-medium leading-relaxed block">
                  The market is swinging, the headlines are panicking, and you’re sitting there with your savings, wondering: &quot;Do I drop it all now, or play it slow?&quot;
                </Typography>

                <section className="space-y-12">
                  {/* The Contenders Section */}
                  <div>
                    <Typography variant="h5" className="text-[#1e3a8a] mb-8 font-bold uppercase">
                      1. The Contenders
                    </Typography>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* SIP Box */}
                      <div className="p-6 bg-green-50 rounded-2xl border ">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-2xl">🐢</span>
                          <Typography variant="s1" className="font-bold text-green-900">The SIP: The &quot;Slow & Steady&quot; Ninja</Typography>
                        </div>
                        <Typography variant="b2" className="text-gray-700 leading-relaxed">
                          Best for salaried individuals. It uses <strong>Rupee Cost Averaging</strong>—buying more units when prices are low and fewer when high, keeping your average cost low over time.
                        </Typography>
                      </div>

                      {/* Lumpsum Box */}
                      <div className="p-6 bg-orange-50 rounded-2xl border border-orange-100">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-2xl">🦁</span>
                          <Typography variant="s1" className="font-bold text-orange-900">The Lumpsum: The &quot;Big Game&quot; Hunter</Typography>
                        </div>
                        <Typography variant="b2" className="text-gray-700 leading-relaxed">
                          Best for windfalls or bonuses. It leverages the <strong>Power of Compounding</strong> on the full amount immediately. Catching a market bottom here leads to massive gains.
                        </Typography>
                      </div>
                    </div>
                  </div>

                  {/* Volatility Verdict Section */}
                  <div>
                    <Typography variant="h5" className="text-[#1e3a8a] mb-6 font-bold uppercase">
                      2. The Volatility Verdict: Who Wins?
                    </Typography>
                    
                    <div className="space-y-4">
                      <div className="flex gap-4 p-5 bg-white border border-gray-100 rounded-xl shadow-sm">
                        <TrendingDown className="text-red-500 shrink-0" size={24} />
                        <div>
                          <Typography variant="s2" className="font-bold text-gray-900">Scenario A: The Market is Falling (SIP Wins)</Typography>
                          <Typography variant="b2" className="text-gray-600">You are buying the &quot;sale&quot;. Your SIP picks up more units at cheaper prices, leading to higher wealth during recovery.</Typography>
                        </div>
                      </div>

                      <div className="flex gap-4 p-5 bg-white border border-gray-100 rounded-xl shadow-sm">
                        <TrendingUp className="text-green-500 shrink-0" size={24} />
                        <div>
                          <Typography variant="s2" className="font-bold text-gray-900">Scenario B: The Market is Rising (Lumpsum Wins)</Typography>
                          <Typography variant="b2" className="text-gray-600">Since you put all money in early at lower prices, your entire investment enjoys the full ride up.</Typography>
                        </div>
                      </div>

                      <div className="flex gap-4 p-5 bg-white border border-gray-100 rounded-xl shadow-sm">
                        <Target className="text-blue-500 shrink-0" size={24} />
                        <div>
                          <Typography variant="s2" className="font-bold text-gray-900">Scenario C: The Roller Coaster (SIP Wins)</Typography>
                          <Typography variant="b2" className="text-gray-600">Removes guesswork and provides peace of mind. You don&apos;t have to time the market; you just stay consistent.</Typography>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Golden Tip */}
                  <div className="bg-[#1e3a8a] p-8 rounded-3xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <Typography variant="h5" className="text-white font-bold mb-2 uppercase">Ready to Start?</Typography>
                        <Typography variant="b2" className="text-blue-100 opacity-80">Don&apos;t wait for the &quot;perfect&quot; market. Time in the market is better than timing the market.</Typography>
                    </div>
                    <Button className="bg-white text-[#1e3a8a] font-bold px-8 py-6 hover:bg-gray-100 shadow-lg">Start SIP Now</Button>
                  </div>

                  {/* FAQ Section */}
                  <div className="pt-10 border-t border-gray-100">
                    <Typography variant="h5" className="text-[#1e3a8a] mb-8 font-bold uppercase underline decoration-blue-200 underline-offset-8">
                      Frequently Asked Questions
                    </Typography>
                    <div className="space-y-4">
                      {faqs.map((faq, index) => (
                        <div key={index} className="border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                          <button 
                            onClick={() => toggleFaq(index)} 
                            className="w-full flex items-center justify-between p-5 text-left bg-gray-50/50 hover:bg-white transition-colors"
                          >
                            <Typography variant="s2" className="font-bold text-gray-900 leading-tight">{faq.q}</Typography>
                            {activeFaq === index ? <ChevronUp size={20} className="text-[#1e3a8a]" /> : <ChevronDown size={20} className="text-gray-400" />}
                          </button>
                          {activeFaq === index && (
                            <div className="p-5 bg-white border-t border-gray-100 animate-in slide-in-from-top-2 duration-300">
                              <Typography variant="b1" className="text-gray-600">{faq.a}</Typography>
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