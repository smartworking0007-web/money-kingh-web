"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Clock,
  Folder,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  TrendingUp,
  Scale,
  Zap,
} from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

interface FAQItem {
  q: string;
  a: string;
}

export const Blog15 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number): void =>
    setActiveFaq(activeFaq === index ? null : index);

  const faqs: FAQItem[] = [
    {
      q: "Q1: Is Term Insurance better than Endowment for tax saving?",
      a: "Both fall under Section 80C. However, since the Term Plan premium is low, you can use the rest of your ₹1.5 Lakh limit for higher-growth instruments like ELSS (Equity Linked Savings Scheme) to save tax and grow wealth simultaneously.",
    },
    {
      q: "Q2: Should I buy a 'Return of Premium' (TROP) Term Plan?",
      a: "TROP plans return your premiums if you survive, but they are significantly more expensive. It is usually better to stick to 'Pure' Term plans and invest the difference yourself for better long-term returns.",
    },
    {
      q: "Q3: When is the best time to buy Term Insurance?",
      a: "The best time is as early as possible. Premiums are locked in at the age you buy them. The younger you are, the lower the premium you pay for the entire duration of the policy.",
    },
    {
      q: "Q4: Can I have both?",
      a: "Technically, yes. But for efficient wealth creation and family security, a 'Term Plan + Mutual Funds' combination is far superior to a standalone Endowment Plan.",
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
            title="Term Insurance vs. Endowment Plans: Why Pure Protection is the Smartest Move."
            category="INSURANCE"
            author="Sumit Mishra"
            date="May 06, 2026"
            image="/images/blog/blog-15.jpeg"
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

            <div className="bg-white rounded-xl overflow-hidden border-gray-100 shadow-sm">
              <div className="relative h-[250px] sm:h-[300px] md:h-[500px] w-full">
                <Image
                  src="/images/blog/blog-15.jpeg"
                  alt="A balance scale showing Term Insurance with high protection on one side and Endowment Plan with low returns on the other"
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
                  Term Insurance vs. Endowment Plans: The Smart Choice
                </Typography>

                <div className="flex gap-4 text-gray-400 mb-8 pb-4 border-b overflow-x-auto no-scrollbar">
                  <div className="flex items-center gap-2 shrink-0">
                    <Clock size={16} />
                    <Typography variant="b2">May 06, 2026</Typography>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Folder size={16} />
                    <Typography variant="b2">Insurance</Typography>
                  </div>
                </div>

                <section className="space-y-12">
                  {/* Philosophy Section */}
                  <div className="space-y-6">
                    <Typography
                      variant="h5"
                      className="font-bold text-gray-900 uppercase"
                    >
                      1. The Core Philosophy: What are they?
                    </Typography>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                        <Typography
                          variant="s1"
                          className="text-blue-700 font-bold mb-2 block "
                        >
                          Term Insurance
                        </Typography>
                        <Typography variant="b2" className="text-gray-700">
                          <strong>&quot;Pure Protection&quot;</strong>. You pay
                          a small premium for a massive life cover. It is the
                          cheapest way to secure your family&apos;s financial
                          future.
                        </Typography>
                      </div>
                      <div className="p-6 bg-purple-50 rounded-2xl border border-purple-100">
                        <Typography
                          variant="s1"
                          className="text-purple-700 font-bold mb-2 block "
                        >
                          Endowment Plans
                        </Typography>
                        <Typography variant="b2" className="text-gray-700">
                          <strong>&quot;Hybrid Products&quot;</strong>. They
                          combine insurance with savings. Premiums are much
                          higher as they promise a &quot;maturity benefit&quot;
                          if you survive.
                        </Typography>
                      </div>
                    </div>
                  </div>

                  {/* Why Term Wins */}
                  <div className="space-y-8">
                    <Typography
                      variant="h5"
                      className="font-bold text-gray-900 uppercase"
                    >
                      2. Why Term Insurance Wins the Debate
                    </Typography>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="bg-green-50 p-4 rounded-xl shrink-0">
                        <Scale className="text-green-600" size={32} />
                      </div>
                      <div>
                        <Typography
                          variant="s1"
                          className="font-bold text-gray-900 mb-2"
                        >
                          Maximum Cover, Minimum Cost
                        </Typography>
                        <Typography variant="b1" className="text-gray-700">
                          A ₹1 Crore cover in a Term Plan costs ~₹15,000/year.
                          The same cover in an Endowment Plan could cost over ₹8
                          Lakhs/year. Most families cannot afford adequate
                          protection through hybrid plans.
                        </Typography>
                      </div>
                    </div>

                    <div className="bg-gray-900 text-white p-8 rounded-3xl relative overflow-hidden">
                      <Zap className="absolute -right-20px -top-20px text-white/5 w-40 h-40" />
                      <Typography
                        variant="h5"
                        className="text-white mb-4 font-bold"
                      >
                        Strategy: &quot;Buy Term, Invest the Difference&quot;
                      </Typography>
                      <Typography variant="b1" className="text-blue-100 mb-6">
                        Instead of paying ₹1 Lakh for a 5% endowment yield, pay
                        ₹15,000 for a Term Plan and invest ₹85,000 in Mutual
                        Funds (12% returns). Over 20 years, this strategy
                        creates massive wealth compared to any endowment plan.
                      </Typography>
                      <div className="flex items-center gap-3 text-sm font-bold text-yellow-400">
                        <TrendingUp size={20} /> History shows this outperforms
                        maturity benefits by a huge margin.
                      </div>
                    </div>
                  </div>

                  {/* The Trap */}
                  <div className="space-y-4">
                    <Typography
                      variant="h5"
                      className="font-bold text-gray-900 uppercase"
                    >
                      3. The &quot;Maturity Benefit&quot; Trap
                    </Typography>
                    <Typography
                      variant="b1"
                      className="text-gray-700 leading-relaxed"
                    >
                      Don&apos;t think of insurance as a &quot;waste&quot; if
                      you survive. Think of it like car insurance—you pay for
                      peace of mind, not to hope for a crash. Choosing a Term
                      Plan is buying the cheapest possible{" "}
                      <strong>&quot;safety net&quot;</strong> for your family.
                    </Typography>
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
                          className="border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
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
