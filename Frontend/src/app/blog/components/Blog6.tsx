"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  Folder,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  ChevronRight,
} from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";
import { Button } from "@/app/components/ui/Button";

export const Blog6 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) =>
    setActiveFaq(activeFaq === index ? null : index);

  const faqs = [
    {
      q: "Q1. Which is better, SIP or Lumpsum?",
      a: "For beginners, SIP is better because it offers Rupee Cost Averaging and doesn't require 'timing the market.' Lumpsum is better if you have a large surplus and the market is at a low point.",
    },
    {
      q: "Q2. Can I lose money in a SIP?",
      a: "Short-term market fluctuations can show negative returns, but historically, long-term SIPs (5+ years) have provided excellent wealth creation opportunities.",
    },
    {
      q: "Q3. Can I withdraw my SIP money anytime?",
      a: "Yes, most funds are open-ended, meaning you can withdraw money whenever you need it for your long-term goals.",
    },
    {
      q: "Q4. Is ₹500 enough to become a millionaire?",
      a: "If you start a ₹500 SIP and 'Step-Up' the amount annually, the power of compounding can certainly help you reach a 7-figure corpus over time.",
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
            title="SIP for Beginners: How to Start Investing with Just ₹500 a Month"
            category="INVESTMENT"
            author="Sumit Mishra"
            date="May 02, 2026"
            image="/images/blog/blog-6.jpeg"
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
                  src="/images/blog/blog-6.jpeg"
                  alt="SIP for beginners starting with 500 rupees monthly in 2026"
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
                  SIP for Beginners: How to Start Investing with Just ₹500 a Month
                </Typography>

                <div className="flex gap-4 text-gray-400 mb-6 pb-4 border-b overflow-x-auto no-scrollbar">
                  <div className="flex items-center gap-2 shrink-0">
                    <Clock size={16} />
                    <Typography variant="b2">May 02, 2026</Typography>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Folder size={16} />
                    <Typography variant="b2">Investment</Typography>
                  </div>
                </div>

                <Typography
                  variant="s2"
                  className="text-gray-600 mb-10 font-medium leading-relaxed"
                >
                  Start your wealth creation journey in 2026! Learn how to invest in Mutual Funds via SIP with just ₹500. Our guide covers compounding, rupee cost averaging, and more.
                </Typography>

                <section className="space-y-10">
                  {/* Introduction Section */}
                  <div>
                    <Typography
                      variant="s1"
                      className="text-[#1e3a8a] mb-4 font-bold uppercase"
                    >
                      Introduction: You Don’t Need to Be Rich to Start Investing
                    </Typography>
                    <Typography variant="b1" className="text-gray-700 leading-relaxed">
                      One of the biggest financial myths is that you need a large sum of money to enter the stock market. In 2026, the financial landscape has changed. With a Systematic Investment Plan (SIP), you can start your wealth creation journey with the cost of a single pizza—just ₹500 a month. At Money King Financial, we believe that consistency is more powerful than the amount you invest.
                    </Typography>
                  </div>

                  {/* Definition Section */}
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <Typography variant="s1" className="font-bold mb-4">1. What exactly is a SIP?</Typography>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <ChevronRight size={18} className="text-blue-600 mt-1 shrink-0" />
                        <Typography variant="b1"><strong>Automation:</strong> The amount is automatically deducted from your bank account.</Typography>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight size={18} className="text-blue-600 mt-1 shrink-0" />
                        <Typography variant="b1"><strong>Flexibility:</strong> You can stop or increase the amount whenever you want.</Typography>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight size={18} className="text-blue-600 mt-1 shrink-0" />
                        <Typography variant="b1"><strong>Accessibility:</strong> Start with as little as ₹500 for inflation-beating returns.</Typography>
                      </li>
                    </ul>
                  </div>

                  {/* Compounding Section */}
                  <div>
                    <Typography variant="s1" className="font-bold mb-4">2. The Magic of Compounding: Why ₹500 Matters</Typography>
                    <Typography variant="b1" className="text-gray-700 mb-4">
                      The secret weapon of a SIP is compounding. When you invest, you earn returns on your principal, and then you earn returns on those returns.
                    </Typography>
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                      <Typography variant="b1" className="italic">
                        Example: If you invest ₹500 every month for 20 years at a 12% average return, your money grows to nearly ₹5 Lakhs.
                      </Typography>
                    </div>
                  </div>

                  {/* Rupee Cost Averaging */}
                  <div>
                    <Typography variant="s1" className="font-bold mb-4">3. Rupee Cost Averaging: Your Shield Against Volatility</Typography>
                    <Typography variant="b1" className="text-gray-700">
                      Market ups and downs can be scary, but SIPs use this to your advantage. When the market is down, your ₹500 buys more units. When it is up, it buys fewer. Over time, your average cost per unit reduces, making it a safer bet for beginners.
                    </Typography>
                  </div>

                  {/* How to Start */}
                  <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
                    <Typography variant="s1" className="text-[#1e3a8a] mb-4 font-bold uppercase">4. Step-by-Step: How to Start Your First SIP</Typography>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-3 bg-white rounded shadow-sm"><Typography variant="b2"><strong>KYC:</strong> Keep PAN and Aadhaar ready.</Typography></div>
                      <div className="p-3 bg-white rounded shadow-sm"><Typography variant="b2"><strong>Pick Fund:</strong> Index Funds are great for beginners.</Typography></div>
                      <div className="p-3 bg-white rounded shadow-sm"><Typography variant="b2"><strong>Date:</strong> Select a date right after your salary.</Typography></div>
                      <div className="p-3 bg-white rounded shadow-sm"><Typography variant="b2"><strong>Automate:</strong> Set an E-Mandate to never miss a SIP.</Typography></div>
                    </div>
                  </div>

                  {/* Step-Up Section */}
                  <div>
                    <Typography variant="s1" className="font-bold mb-4">5. The &quot;Step-Up&quot; Secret</Typography>
                    <Typography variant="b1" className="text-gray-700">
                      To reach your goals faster, increase your SIP by 10% every year. This ensures that as your salary grows, your Mutual Fund investment grows too, helping you fight inflation effectively.
                    </Typography>
                  </div>

                  {/* Apply Now Section */}
                  <div className="bg-[#1e3a8a] text-white p-10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 my-14 shadow-2xl">
                    <div className="text-center md:text-left">
                      <Typography variant="h5" className="text-white mb-2 font-bold uppercase">Start Your Wealth Journey</Typography>
                      <Typography variant="b2" className="text-blue-100 opacity-80">Begin your first SIP with just ₹500 at Money King Financial.</Typography>
                    </div>
                    <Link href="/contact" className="w-full md:w-auto">
                      <Button size="lg" className="bg-white text-[#1e3a8a] hover:bg-gray-100 px-12 py-6 w-full font-bold text-lg shadow-lg">Apply Now</Button>
                    </Link>
                  </div>

                  {/* FAQ Section */}
                  <div className="pt-10 border-t border-gray-100">
                    <Typography variant="h5" className="text-[#1e3a8a] mb-8 font-bold uppercase underline decoration-blue-200 underline-offset-8">Expert FAQs</Typography>
                    <div className="space-y-4">
                      {faqs.map((faq, index) => (
                        <div key={index} className="border border-gray-100 rounded-lg overflow-hidden shadow-sm">
                          <button onClick={() => toggleFaq(index)} className="w-full flex items-center justify-between p-4 md:p-5 text-left bg-gray-50 hover:bg-white transition-colors">
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

                <div className="mt-10">
                  <ShareSection />
                </div>
                <div className="mt-8 flex justify-center border-t pt-5">
                  <Button variant="ghost" onClick={() => setIsOpen(false)} className="text-gray-400 cursor-pointer hover:text-[#1e3a8a]">← Back to Article List</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};