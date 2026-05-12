"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Clock,
  Folder,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Coins,
  CreditCard,
  BarChart3,
  Home,
  AlertTriangle,
} from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

interface FAQItem {
  q: string;
  a: string;
}

export const Blog28 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number): void =>
    setActiveFaq(activeFaq === index ? null : index);

  const faqs: FAQItem[] = [
    {
      q: "Q1: Is gold still a reliable investment for long-term wealth?",
      a: "Gold is a great hedge against inflation, but it shouldn't be your only investment. Experts suggest keeping it to 5-10% of your portfolio. Consider Sovereign Gold Bonds (SGBs) to avoid making charges and storage risks.",
    },
    {
      q: "Q2: How can I use a Credit Card without falling into a 'debt trap'?",
      a: "The secret is simple: Always pay your 'Total Amount Due' in full every month. Never pay just the 'Minimum Amount.' This way, you avoid interest and gain free perks like reward points and cashback.",
    },
    {
      q: "Q3: Why is a Credit Score important if I already have enough savings?",
      a: "Savings show you have money, but a Credit Score shows banks you are disciplined. Even if you are wealthy, a low score can lead to loan rejection or higher interest rates on your dream home.",
    },
    {
      q: "Q4: Should I prioritize Real Estate over Mutual Funds?",
      a: "Real estate is illiquid and has high upfront costs. Mutual Funds (SIPs) allow you to start small, offer better diversification, and let you withdraw money in 48 hours for emergencies.",
    },
    {
      q: "Q5: Is Fixed Deposit (FD) a bad investment choice?",
      a: "No, but it's for safety, not growth. FDs are great for emergency funds. For long-term goals like retirement, FDs often fail to beat inflation, stagnanting your purchasing power.",
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
            title="Wedding Season Survival Guide: Swiping Left on Un-Smart Money Advice"
            category="FINANCE"
            author="Sumit Mishra"
            date="May 12, 2026"
            image="/images/blog/blog-28.jpeg"
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
                  src="/images/blog/blog-28.jpeg"
                  alt="happy wedding with easy personal loan"
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
                  Wedding Season Survival: Swiping Left on Financial Myths
                </Typography>

                <div className="flex gap-4 text-gray-400 mb-8 pb-4 border-b overflow-x-auto no-scrollbar">
                  <div className="flex items-center gap-2 shrink-0">
                    <Clock size={16} />
                    <Typography variant="b2">May 12, 2026</Typography>
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
                  Stop following outdated money myths! From gold obsessions to
                  FD traps, we debunk common Desi wedding financial advice for
                  2026.
                </Typography>

                <section className="space-y-12">
                  {/* Myth vs Reality Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Gold Section */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-yellow-600">
                        <Coins size={24} />
                        <Typography
                          variant="h5"
                          className="font-bold uppercase"
                        >
                          The Gold Obsession
                        </Typography>
                      </div>
                      <div className="p-5 bg-red-50 border-l-4 border-red-400 rounded-r-xl">
                        <Typography
                          variant="caption"
                          className="text-red-700 font-bold "
                        >
                          The Myth: &quot;Put everything into gold.&quot;
                        </Typography>
                      </div>
                      <div className="p-5 bg-green-50 border-l-4 border-green-400 rounded-r-xl">
                        <Typography variant="b2" className="text-green-800">
                          <strong>The Modern Fix:</strong> Use Sovereign Gold
                          Bonds (SGBs). No making charges, plus 2.5% annual
                          interest!
                        </Typography>
                      </div>
                    </div>

                    {/* Credit Card Section */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-blue-600">
                        <CreditCard size={24} />
                        <Typography
                          variant="h5"
                          className="font-bold uppercase"
                        >
                          Plastic Money Fear
                        </Typography>
                      </div>
                      <div className="p-5 bg-red-50 border-l-4 border-red-400 rounded-r-xl">
                        <Typography
                          variant="caption"
                          className="text-red-700 font-bold "
                        >
                          The Myth: &quot;Credit cards are a debt trap.&quot;
                        </Typography>
                      </div>
                      <div className="p-5 bg-green-50 border-l-4 border-green-400 rounded-r-xl">
                        <Typography variant="b2" className="text-green-800">
                          <strong>The Reality:</strong> It&apos;s a lifestyle
                          upgrade. Enjoy reward points and lounge access by
                          paying in full every month.
                        </Typography>
                      </div>
                    </div>
                  </div>

                  {/* Score & Real Estate */}
                  <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[40px] relative overflow-hidden">
                    <div className="flex flex-col md:flex-row gap-10">
                      <div className="space-y-4 flex-1">
                        <div className="flex items-center gap-2 text-blue-400">
                          <BarChart3 size={24} />
                          <Typography
                            variant="h5"
                            className="font-bold uppercase"
                          >
                            Credit Score Factor
                          </Typography>
                        </div>
                        <Typography variant="b2" className="text-gray-300">
                          You could have 10 lakhs in savings, but without a 750+
                          score, you&apos;re not &quot;Financial Royalty&quot;.
                          Building your reputation is as important as building
                          your bank balance.
                        </Typography>
                      </div>
                      <div className="space-y-4 flex-1 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-10">
                        <div className="flex items-center gap-2 text-orange-400">
                          <Home size={24} />
                          <Typography
                            variant="h5"
                            className="font-bold uppercase"
                          >
                            Real Estate Trap
                          </Typography>
                        </div>
                        <Typography variant="b2" className="text-gray-300">
                          Property is solid but &quot;sticky&quot;. Diversity is
                          the secret sauce. Keep your portfolio liquid with SIPs
                          while you plan for your dream home.
                        </Typography>
                      </div>
                    </div>
                  </div>

                  {/* The FD Check */}
                  <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100 flex flex-col md:flex-row items-center gap-8">
                    <AlertTriangle
                      className="text-orange-500 shrink-0"
                      size={48}
                    />
                    <div>
                      <Typography
                        variant="h5"
                        className="text-blue-900 font-bold mb-2 uppercase"
                      >
                        The FD Security Blanket
                      </Typography>
                      <Typography
                        variant="b1"
                        className="text-gray-700 leading-relaxed"
                      >
                        FDs often yield only ~1% growth after inflation and
                        taxes. They are excellent for emergency funds, but let{" "}
                        <strong>Mutual Funds</strong> do the heavy lifting for
                        long-term wealth creation.
                      </Typography>
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
