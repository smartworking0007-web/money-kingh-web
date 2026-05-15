"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Clock,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Baby,
  TrendingUp,
  ShieldAlert,
  GraduationCap,
  PieChart,
} from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

interface FAQItem {
  q: string;
  a: string;
}

export const Blog37 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number): void =>
    setActiveFaq(activeFaq === index ? null : index);

  const faqs: FAQItem[] = [
    {
      q: "Q1: Should I buy an insurance policy in my child's name?",
      a: "Generally, no. Insurance replaces the income of a breadwinner. Since children don't earn, it's more logical to insure the parent (the provider) and name the child as the beneficiary.",
    },
    {
      q: "Q2: Which is better: Sukanya Samriddhi Yojana (SSY) or a Child ULIP?",
      a: "SSY is superior for guaranteed, tax-free returns for a girl child. A ULIP may offer higher market-linked returns but comes with higher risks and management charges.",
    },
    {
      q: "Q3: How much should I save monthly for my child’s higher education?",
      a: "For a degree costing ₹25 lakhs today, you'd need ~₹1 crore in 15 years (assuming 10% inflation). We can help you calculate the exact SIP required to reach this target.",
    },
    {
      q: "Q4: Is the 'Waiver of Premium' feature available in Term Insurance?",
      a: "No, but Term Insurance provides a large lump sum payout immediately. This sum is usually much larger than the 'waived premiums' of a traditional plan, securing the goal instantly.",
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
            title="What’s in a Name? A Case Study on the Reality of Child Insurance Plans"
            category="EDUCATION PLANNING"
            author="Sumit Mishra"
            date="May 16, 2026"
            image="/images/blog/blog-37.png"
          />
        </div>
      ) : (
        <div className="fixed inset-0 z-40 bg-white overflow-y-auto pt-20 md:pt-28 no-scrollbar animate-in fade-in duration-300 text-left">
          <div className="relative max-w-5xl mx-auto pb-20 px-4 md:px-6">
            <div className="mb-6">
              <button
                onClick={() => setIsOpen(false)}
                className="flex items-center pt-3 text-gray-500 hover:text-[#1e3a8a] transition-colors cursor-pointer tracking-widest gap-1"
              >
                <ArrowLeft size={14} />
                <Typography variant="caption" as="span" className="font-bold uppercase text-inherit">
                  Back to Blogs
                </Typography>
              </button>
            </div>

            <div className="bg-white rounded-xl overflow-hidden border-gray-100 shadow-sm">
              <div className="relative h-[250px] sm:h-[300px] md:h-[500px] w-full">
                <Image
                  src="/images/blog/blog-37.png"
                  alt="Comparison Table Child Plans vs Term Insurance plus SIP"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="px-5 py-8 md:px-12 md:py-14 text-justify">
                <Typography
                  variant="h2"
                  className="text-[#1e3a8a] uppercase mt-0"
                >
                  Beyond Labels: Securing Your Child&apos;s Global Future
                </Typography>

                <div className="flex gap-4 text-gray-400 mb-8 pb-4 border-b overflow-x-auto no-scrollbar">
                  <div className="flex items-center gap-2 shrink-0">
                    <Clock size={16} />
                    <Typography variant="b2" as="span" className="text-gray-400">May 16, 2026</Typography>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Baby size={16} />
                    <Typography variant="b2" as="span" className="text-gray-400">Education Planning</Typography>
                  </div>
                </div>

                <Typography
                  variant="s1"
                  className="text-gray-600 mb-10 block italic"
                >
                  Does the name &quot;Child Plan&quot; guarantee the best result
                  for your child? In this case study, we deconstruct the
                  mechanics to find the true value for education and marriage
                  goals.
                </Typography>

                <section className="space-y-12">
                  {/* The Reality Check Section */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-6 bg-red-50 rounded-3xl border border-red-100">
                      <ShieldAlert className="text-red-600 mb-4" size={28} />
                      <Typography
                        variant="h4"
                        className="text-red-950 uppercase my-0 mb-3"
                      >
                        The Returns Trap
                      </Typography>
                      <Typography
                        variant="b2"
                        className="text-red-800"
                      >
                        Traditional plans often return 4-6%. With education
                        inflation at 10-12%, these plans may lead to a
                        significant shortfall when the university bills arrive.
                      </Typography>
                    </div>
                    <div className="p-6 bg-blue-50 rounded-3xl border border-blue-100">
                      <TrendingUp className="text-blue-600 mb-4" size={28} />
                      <Typography
                        variant="h4"
                        className="text-blue-950 uppercase my-0 mb-3"
                      >
                        The Label Illusion
                      </Typography>
                      <Typography
                        variant="b2"
                        className="text-blue-800"
                      >
                        Most &quot;Child Plans&quot; are simply Endowment or
                        ULIP policies. The child is just the nominee; the real
                        focus should be on high-growth assets.
                      </Typography>
                    </div>
                  </div>

                  {/* Comparison Table */}
                  <div className="space-y-6">
                    <Typography
                      variant="h3"
                      className="text-gray-900 uppercase my-0"
                    >
                      Comparison: Child Plan vs. Term + SIP
                    </Typography>
                    <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-lg">
                      <table className="w-full text-left border-collapse bg-white">
                        <thead className="bg-slate-900 text-white">
                          <tr>
                            <th className="p-4">
                              <Typography variant="b3" as="span" className="font-bold uppercase tracking-wider text-white">
                                Feature
                              </Typography>
                            </th>
                            <th className="p-4">
                              <Typography variant="b3" as="span" className="font-bold uppercase tracking-wider text-white">
                                Traditional Child Plan
                              </Typography>
                            </th>
                            <th className="p-4">
                              <Typography variant="b3" as="span" className="font-bold uppercase tracking-wider text-blue-400">
                                Term Insurance + SIP
                              </Typography>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="text-sm">
                          <tr>
                            <td className="p-4 border-b">
                              <Typography variant="b2" className="font-bold text-gray-900">Avg. Returns</Typography>
                            </td>
                            <td className="p-4 border-b">
                              <Typography variant="b2">4% - 6%</Typography>
                            </td>
                            <td className="p-4 border-b">
                              <Typography variant="b2" className="text-blue-700 font-bold">12% - 15% (Equity)</Typography>
                            </td>
                          </tr>
                          <tr>
                            <td className="p-4 border-b">
                              <Typography variant="b2" className="font-bold text-gray-900">Life Cover</Typography>
                            </td>
                            <td className="p-4 border-b">
                              <Typography variant="b2">Low (10x Premium)</Typography>
                            </td>
                            <td className="p-4 border-b">
                              <Typography variant="b2" className="text-blue-700 font-bold">High (e.g., ₹1 Crore+)</Typography>
                            </td>
                          </tr>
                          <tr>
                            <td className="p-4 border-b">
                              <Typography variant="b2" className="font-bold text-gray-900">Flexibility</Typography>
                            </td>
                            <td className="p-4 border-b">
                              <Typography variant="b2">Rigid/Locked</Typography>
                            </td>
                            <td className="p-4 border-b">
                              <Typography variant="b2" className="text-blue-700 font-bold">High (Partial Withdrawals)</Typography>
                            </td>
                          </tr>
                          <tr className="bg-slate-50">
                            <td className="p-4 border-b">
                              <Typography variant="b2" className="font-bold text-gray-900">Inflation Hedge</Typography>
                            </td>
                            <td className="p-4 border-b">
                              <Typography variant="b2" className="text-red-600 font-medium">Poor</Typography>
                            </td>
                            <td className="p-4 border-b">
                              <Typography variant="b2" className="text-blue-700 font-bold">Excellent</Typography>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* specialized avenues */}
                  <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[40px] shadow-xl relative overflow-hidden">
                    <Typography
                      variant="h4"
                      className="text-blue-400 mb-8 uppercase text-center mt-0"
                    >
                      Smarter Avenues for Your Child
                    </Typography>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
                      <div className="flex gap-4">
                        <div className="bg-blue-500/20 p-3 rounded-xl h-fit">
                          <GraduationCap className="text-blue-300" />
                        </div>
                        <div>
                          <Typography variant="s2" className="font-bold text-white">
                            Sukanya Samriddhi (SSY)
                          </Typography>
                          <Typography
                            variant="caption"
                            className="text-gray-400 block mt-1"
                          >
                            Highest govt-backed rates for a girl child with E-E-E tax status.
                          </Typography>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="bg-blue-500/20 p-3 rounded-xl h-fit">
                          <PieChart className="text-blue-300" />
                        </div>
                        <div>
                          <Typography variant="s2" className="font-bold text-white">
                            Mutual Fund SIPs
                          </Typography>
                          <Typography
                            variant="caption"
                            className="text-gray-400 block mt-1"
                          >
                            Equity exposure to beat 12% education inflation over 15 years.
                          </Typography>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* FAQ Section */}
                  <div className="pt-10 border-t border-gray-100">
                    <Typography
                      variant="h4"
                      className="text-[#1e3a8a] mb-8 uppercase underline decoration-blue-200 underline-offset-8 mt-0"
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
                              className="font-bold text-gray-900"
                            >
                              {faq.q}
                            </Typography>
                            {activeFaq === index ? (
                              <ChevronUp size={20} className="text-[#1e3a8a] shrink-0 ml-4" />
                            ) : (
                              <ChevronDown
                                size={20}
                                className="text-gray-400 shrink-0 ml-4"
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

                <div className="mt-14">
                  <ShareSection />
                </div>
                <div className="mt-10 flex justify-center border-t pt-8">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 flex items-center gap-2 hover:text-[#1e3a8a] transition-all group"
                  >
                    <Typography variant="caption" as="span" className="font-bold uppercase tracking-widest text-inherit">
                      ← Back to Articles
                    </Typography>
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