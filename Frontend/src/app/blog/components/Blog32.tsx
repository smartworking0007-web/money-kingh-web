"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Clock,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Gauge,
  CalendarCheck,
  CreditCard,
  Search,
  History,
  AlertCircle,
} from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

interface FAQItem {
  q: string;
  a: string;
}

export const Blog32 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number): void =>
    setActiveFaq(activeFaq === index ? null : index);

  const faqs: FAQItem[] = [
    {
      q: "1. How long does it take to improve a credit score?",
      a: "There is no 'quick fix.' Depending on your starting point, it can take several months of consistent on-time payments and lowered debt levels to see a significant rise in your score.",
    },
    {
      q: "2. Will checking my own credit score lower it?",
      a: "No. Checking your own score is considered a 'soft inquiry' and does not affect your credit rating at all. In fact, monitoring it regularly is a healthy financial habit.",
    },
    {
      q: "3. Does a higher income mean a better credit score?",
      a: "Not necessarily. Your credit score is based on how you manage debt, not how much money you earn. Someone with a modest income can have a perfect score by being disciplined.",
    },
    {
      q: "4. Can I remove late payments from my report?",
      a: "If accurate, a late payment generally stays on your report for seven years. However, its negative impact on your score decreases as the entry gets older.",
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
            title="Simple and Effective Ways to Improve Your Credit Score"
            category="CREDIT SCORE"
            author="Sumit Mishra"
            date="May 14, 2026"
            image="/images/blog/blog-32.jpeg"
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
                  src="/images/blog/blog-32.jpeg"
                  alt="Credit score meter showing improvement from fair to excellent rating."
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
                  Master Your Financial Reputation: The Credit Score Guide
                </Typography>

                <div className="flex gap-4 text-gray-400 mb-8 pb-4 border-b overflow-x-auto no-scrollbar">
                  <div className="flex items-center gap-2 shrink-0">
                    <Clock size={16} />
                    <Typography variant="b2">May 14, 2026</Typography>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Gauge size={16} />
                    <Typography variant="b2">Credit Score</Typography>
                  </div>
                </div>

                <Typography
                  variant="s2"
                  className="text-gray-600 mb-10 font-medium leading-relaxed block "
                >
                  Your credit score is the single most important number in your
                  financial life. It is your reputation with banks, and
                  improving it requires discipline, not just income.
                </Typography>

                <section className="space-y-12">
                  {/* Key Pillars Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-6 bg-blue-50 rounded-3xl border border-blue-100">
                      <CalendarCheck className="text-blue-600 mb-4" size={28} />
                      <Typography
                        variant="h5"
                        className="font-bold uppercase mb-3"
                      >
                        1. Timely Payments
                      </Typography>
                      <Typography
                        variant="b2"
                        className="text-gray-600 leading-relaxed"
                      >
                        Payment history is the biggest factor. Set up{" "}
                        <strong>Autopay</strong> or calendar alerts to ensure
                        you never miss a due date.
                      </Typography>
                    </div>
                    <div className="p-6 bg-green-50 rounded-3xl border border-green-100">
                      <CreditCard className="text-green-600 mb-4" size={28} />
                      <Typography
                        variant="h5"
                        className="font-bold uppercase mb-3"
                      >
                        2. Credit Utilization
                      </Typography>
                      <Typography
                        variant="b2"
                        className="text-gray-600 leading-relaxed"
                      >
                        Keep your utilization <strong>below 30%</strong>. Pay
                        down high-interest balances and consider asking for
                        limit increases to lower this ratio.
                      </Typography>
                    </div>
                  </div>

                  {/* Pro-Tips Banner */}
                  <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[40px] shadow-xl relative overflow-hidden">
                    <div className="relative z-10 space-y-6">
                      <div className="flex items-start gap-4">
                        <Search className="text-blue-400 shrink-0" size={24} />
                        <div>
                          <Typography
                            variant="s1"
                            className="font-bold uppercase"
                          >
                            3. Monitor for Errors
                          </Typography>
                          <Typography
                            variant="caption"
                            className="text-gray-400"
                          >
                            Regularly check your report for accounts you
                            didn&apos;t open or incorrect late markers. Dispute
                            them immediately.
                          </Typography>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 border-t border-white/10 pt-6">
                        <History
                          className="text-orange-400 shrink-0"
                          size={24}
                        />
                        <div>
                          <Typography
                            variant="s1"
                            className="font-bold uppercase"
                          >
                            4. Don&apos;t Close Old Accounts
                          </Typography>
                          <Typography
                            variant="caption"
                            className="text-gray-400"
                          >
                            The length of history matters. Keep your oldest
                            cards open and active with small occasional
                            purchases.
                          </Typography>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mindful Inquiries Section */}
                  <div className="p-8 bg-orange-50 rounded-3xl border border-orange-100 flex flex-col md:flex-row items-center gap-8">
                    <AlertCircle
                      className="text-orange-600 shrink-0"
                      size={48}
                    />
                    <div>
                      <Typography
                        variant="h5"
                        className="text-orange-900 font-bold mb-2 uppercase"
                      >
                        5. Be Mindful of New Inquiries
                      </Typography>
                      <Typography
                        variant="b1"
                        className="text-gray-700 leading-relaxed"
                      >
                        Every application for new credit triggers a &quot;hard
                        inquiry&quot; which can temporarily dip your score.
                        Avoid opening multiple accounts in a short window. Apply
                        only when necessary.
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

                  {/* Conclusion Image */}
                  <div className="rounded-3xl overflow-hidden border border-gray-100 relative h-[250px] md:h-[400px]">
                    <Image
                      src="/images/blog/blog-32-footer.jpeg"
                      alt="Individual happy with financial growth and improved credit score."
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 gradient-to-t from-black/60 to-transparent flex items-end p-8">
                      <Typography
                        variant="h5"
                        className="text-white font-bold uppercase"
                      >
                        Consistency is the key to financial freedom.
                      </Typography>
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
