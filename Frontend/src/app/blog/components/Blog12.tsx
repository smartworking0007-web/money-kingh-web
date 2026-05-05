"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, Folder, ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";
import { Button } from "@/app/components/ui/Button";

export const Blog12 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) =>
    setActiveFaq(activeFaq === index ? null : index);

  const faqs = [
    {
      q: "Q1. Is my money 'wasted' if I survive the Term Insurance period?",
      a: "No. You are paying for the 'risk cover.' Just like you don't feel your car insurance premium is wasted if you don't have an accident, term insurance is the price of mental peace.",
    },
    {
      q: "Q2. Can I get my premiums back in Term Insurance?",
      a: "Yes, there are TROP (Term Return of Premium) plans. However, these are more expensive. A 'Pure Term' plan is usually more cost-effective.",
    },
    {
      q: "Q3. What is the ideal age to buy Term Insurance?",
      a: "As early as possible. In your 20s, you can lock in a massive cover for a premium that is as low as a monthly OTT subscription. This premium stays fixed for life.",
    },
    {
      q: "Q4. Should I buy a Term Plan if I have no dependents?",
      a: "If you have a Personal Loan, Car Loan, or plan to have a family in the future, buying it now locks in a lower rate and protects your liabilities.",
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
            title="The Wealth Secret: Why 'Pure Protection' Is Your Smartest Financial Move"
            category="INSURANCE"
            author="Sumit Mishra"
            date="May 05, 2026"
            image="/images/blog/blog-12.jpeg"
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
                  src="/images/blog/blog-12.jpeg"
                  alt="High-end-minimalist-watch-and-car-keys-on-financial-contract-white-desk"
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
                  The Wealth Secret: Why &quot;Pure Protection&quot; Is Your
                  Smartest Financial Move
                </Typography>

                <div className="flex gap-4 text-gray-400 mb-6 pb-4 border-b overflow-x-auto no-scrollbar">
                  <div className="flex items-center gap-2 shrink-0">
                    <Clock size={16} />
                    <Typography variant="b2">May 05, 2026</Typography>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Folder size={16} />
                    <Typography variant="b2">Insurance</Typography>
                  </div>
                </div>

                <Typography
                  variant="s2"
                  className="text-gray-600 mb-10 font-medium leading-relaxed"
                >
                  Mixing insurance with investment is like using a Swiss Army
                  knife to cut down a tree. It&apos;s better to have a dedicated
                  axe (Term Insurance) and a dedicated saw (Equity).
                </Typography>

                <section className="space-y-10">
                  <div>
                    <Typography
                      variant="h5"
                      className="text-[#1e3a8a] mb-4 font-bold uppercase"
                    >
                      1. The Identity Crisis: What are you actually buying?
                    </Typography>
                    <Typography
                      variant="b1"
                      className="text-gray-700 leading-relaxed mb-4"
                    >
                      Traditional Endowment Plans are often a confused
                      hybrid—little insurance, tiny growth, and high hidden
                      fees. <strong>Term Insurance</strong> is pure protection
                      where you pay only for security.
                    </Typography>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <Typography
                      variant="s1"
                      className="text-[#1e3a8a] mb-4 font-bold uppercase"
                    >
                      2. The &quot;Sticker Shock&quot; (In a Good Way)
                    </Typography>
                    <Typography variant="b1" className="mb-4">
                      Imagine you have ₹50,000 annually:
                    </Typography>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-white rounded border">
                        <Typography
                          variant="b2"
                          className="text-red-500 font-bold"
                        >
                          Endowment Plan
                        </Typography>
                        <Typography variant="b1">Cover: ~₹10 Lakhs</Typography>
                      </div>
                      <div className="p-4 bg-white rounded border">
                        <Typography
                          variant="b2"
                          className="text-green-600 font-bold"
                        >
                          Pure Term Plan
                        </Typography>
                        <Typography variant="b1">Cover: ~₹5 Crores*</Typography>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Typography
                      variant="h5"
                      className="text-[#1e3a8a] mb-4 font-bold uppercase"
                    >
                      3. Strategy: &quot;Buy Term & Invest the Rest&quot;
                    </Typography>
                    <Typography variant="b1" className="text-gray-700 mb-6">
                      Buy a ₹1 Crore+ Term Plan for a fraction of your budget
                      and put the savings into a Lumpsum Mutual Fund. You get
                      10x protection and 3x more wealth over 20 years.
                    </Typography>
                  </div>

                  {/* Comparison Table */}
                  <div className="overflow-x-auto rounded-lg border border-gray-200">
                    <table className="w-full text-left border-collapse">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="p-4 border-b font-bold text-gray-900">
                            Feature
                          </th>
                          <th className="p-4 border-b font-bold text-gray-900">
                            Pure Term
                          </th>
                          <th className="p-4 border-b font-bold text-gray-900">
                            Endowment
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-4 border-b text-gray-700 font-medium">
                            Sum Assured
                          </td>
                          <td className="p-4 border-b text-green-600 font-bold">
                            Massive Cover
                          </td>
                          <td className="p-4 border-b text-gray-600 text-sm">
                            Tiny Cover
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 border-b text-gray-700 font-medium">
                            Monthly Cost
                          </td>
                          <td className="p-4 border-b text-gray-600 text-sm">
                            OTT Sub Price
                          </td>
                          <td className="p-4 border-b text-gray-600 text-sm">
                            Car EMI Level
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 border-b text-gray-700 font-medium">
                            Returns
                          </td>
                          <td className="p-4 border-b text-gray-600 text-sm">
                            Mental Peace
                          </td>
                          <td className="p-4 border-b text-red-500 text-sm">
                            5-6% (Low)
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-[#1e3a8a] text-white p-10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 my-14 shadow-2xl">
                    <div className="text-center md:text-left">
                      <Typography
                        variant="h5"
                        className="text-white mb-2 font-bold uppercase"
                      >
                        Protect Your Legacy
                      </Typography>
                      <Typography
                        variant="b2"
                        className="text-blue-100 opacity-80"
                      >
                        Lock in your pure term plan today for a secure tomorrow.
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
