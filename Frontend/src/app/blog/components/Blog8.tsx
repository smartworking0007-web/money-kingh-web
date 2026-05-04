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

export const Blog8 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) =>
    setActiveFaq(activeFaq === index ? null : index);

  const faqs = [
    {
      q: "Q1. Is ₹1 Lakh enough for a Lumpsum retirement fund?",
      a: "Absolutely. While more is better, ₹1 Lakh invested at age 25 with a 12% return grows to over ₹52 Lakhs by age 60. Every bit counts when you have time on your side.",
    },
    {
      q: "Q2. What if the market crashes right after I invest?",
      a: "Over a 30-year period, the market will crash several times. However, history shows that markets always recover and reach new highs. For a retirement goal, short-term crashes are just 'noise.'",
    },
    {
      q: "Q3. Should I clear my debts before doing a Lumpsum investment?",
      a: "Follow this rule: If your debt interest (like a credit card at 36%) is higher than your expected investment return (12%), pay off the debt first. If it's a low-interest loan, you can balance both.",
    },
    {
      q: "Q4. Can I withdraw the money early?",
      a: "You can, but you shouldn't. The real growth in compounding happens in the last 10 years of the 35-year cycle. Withdrawing early kills the 'momentum' of your wealth.",
    },
    {
      q: "Q5. Do I need a financial advisor for this?",
      a: "For large Lumpsum amounts, consulting an expert helps in choosing the right tax-efficient funds and rebalancing your portfolio as you age.",
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
            title="The Retirement Revolution: How One Lumpsum in Your 20s Can Fund Your 60s"
            category="RETIREMENT"
            author="Sumit Mishra"
            date="May 04, 2026"
            image="/images/blog/blog-8.jpeg"
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
                  src="/images/blog/blog-8.jpeg"
                  alt="Retirement Planning: How a One-Time Lumpsum in Your 20s Grows into Crores"
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
                  The Retirement Revolution: How One Lumpsum in Your 20s Can
                  Fund Your 60s
                </Typography>

                <div className="flex gap-4 text-gray-400 mb-6 pb-4 border-b overflow-x-auto no-scrollbar">
                  <div className="flex items-center gap-2 shrink-0">
                    <Clock size={16} />
                    <Typography variant="b2">May 04, 2026</Typography>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Folder size={16} />
                    <Typography variant="b2">Retirement</Typography>
                  </div>
                </div>

                <Typography
                  variant="s2"
                  className="text-gray-600 mb-10 font-medium leading-relaxed"
                >
                  There is a mathematical &quot;superpower&quot; that only
                  20-somethings possess: Time. Discover how a single Lumpsum
                  investment today can transform into a massive retirement
                  corpus by the time you reach 60.
                </Typography>

                <section className="space-y-10">
                  <div>
                    <Typography
                      variant="h5"
                      className="text-[#1e3a8a] mb-4 font-bold uppercase"
                    >
                      The Magic of the &quot;Head Start&quot;
                    </Typography>
                    <Typography
                      variant="b1"
                      className="text-gray-700 leading-relaxed"
                    >
                      Most people wait until their 40s to start thinking about
                      retirement. By then, they have to invest massive amounts.
                      But if you invest a Lumpsum in your 20s, you are investing
                      time for that money to multiply.
                    </Typography>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <Typography
                      variant="s1"
                      className="text-[#1e3a8a] mb-4 font-bold uppercase"
                    >
                      The Math of Compounding
                    </Typography>
                    <div className="space-y-2 mb-6">
                      <Typography variant="b1">
                        <strong>Investment:</strong> ₹5,00,000 (One-time)
                      </Typography>
                      <Typography variant="b1">
                        <strong>Duration:</strong> 35 Years (Age 25 to 60)
                      </Typography>
                      <Typography variant="b1">
                        <strong>Return:</strong> 12% p.a.
                      </Typography>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-sm border-l-4 border-green-500">
                      <Typography variant="h5" className="text-green-700">
                        Result: ~₹2.6 Crores
                      </Typography>
                      <Typography variant="b2" className="text-gray-500 italic">
                        Waiting until 45 would result in only ~₹27 Lakhs. A
                        20-year delay costs ₹2.3 Crores!
                      </Typography>
                    </div>
                  </div>

                  <div>
                    <Typography
                      variant="h5"
                      className="text-[#1e3a8a] mb-4 font-bold uppercase"
                    >
                      Why Lumpsum is Better Than &quot;Timing the Market&quot;
                    </Typography>
                    <div className="space-y-6">
                      <div>
                        <Typography variant="s1" className="font-bold">
                          1. Beating Inflation Early
                        </Typography>
                        <Typography variant="b1" className="text-gray-700">
                          Locking in early ensures your capital grows faster
                          than inflation, preserving your future lifestyle.
                        </Typography>
                      </div>
                      <div>
                        <Typography variant="s1" className="font-bold">
                          2. The &quot;Wealth Buffer&quot;
                        </Typography>
                        <Typography variant="b1" className="text-gray-700">
                          It acts as a safety net that grows in the background,
                          even if life events prevent you from saving in your
                          30s.
                        </Typography>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <Typography
                      variant="h5"
                      className="text-[#1e3a8a] mb-4 font-bold uppercase"
                    >
                      Where Should You Put Your Lumpsum?
                    </Typography>
                    <ul className="space-y-4">
                      <li className="flex gap-2 items-start">
                        <ChevronRight
                          size={18}
                          className="text-blue-600 mt-1"
                        />
                        <Typography variant="b1">
                          <strong>Equity Mutual Funds:</strong> Best for
                          long-term growth by investing in top companies.
                        </Typography>
                      </li>
                      <li className="flex gap-2 items-start">
                        <ChevronRight
                          size={18}
                          className="text-blue-600 mt-1"
                        />
                        <Typography variant="b1">
                          <strong>Index Funds:</strong> A low-cost mirroring of
                          the Nifty 50 or Sensex.
                        </Typography>
                      </li>
                      <li className="flex gap-2 items-start">
                        <ChevronRight
                          size={18}
                          className="text-blue-600 mt-1"
                        />
                        <Typography variant="b1">
                          <strong>STP Strategy:</strong> Move money from Liquid
                          to Equity slowly to average out market dips.
                        </Typography>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#1e3a8a] text-white p-10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 my-14 shadow-2xl">
                    <div className="text-center md:text-left">
                      <Typography
                        variant="h5"
                        className="text-white mb-2 font-bold uppercase"
                      >
                        Secure Your Freedom
                      </Typography>
                      <Typography
                        variant="b2"
                        className="text-blue-100 opacity-80"
                      >
                        Don&apos;t wait for your 40s. Start your retirement
                        revolution today.
                      </Typography>
                    </div>
                    <Link href="/contact" className="w-full md:w-auto">
                      <Button
                        size="lg"
                        className="bg-white text-[#1e3a8a] hover:bg-gray-100 px-12 py-6 w-full font-bold text-lg shadow-lg"
                      >
                        Apply Now
                      </Button>
                    </Link>
                  </div>

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
                          className="border border-gray-100 rounded-lg overflow-hidden shadow-sm"
                        >
                          <button
                            onClick={() => toggleFaq(index)}
                            className="w-full flex items-center justify-between p-4 md:p-5 text-left bg-gray-50 hover:bg-white transition-colors"
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
                                className="text-gray-600"
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

                <div className="mt-10">
                  <ShareSection />
                </div>
                <div className="mt-8 flex justify-center border-t pt-5">
                  <Button
                    variant="ghost"
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 cursor-pointer hover:text-[#1e3a8a]"
                  >
                    ← Back to Article List
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
