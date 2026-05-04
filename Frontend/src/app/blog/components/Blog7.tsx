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

export const Blog7 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) =>
    setActiveFaq(activeFaq === index ? null : index);

  const faqs = [
    {
      q: "Q1. Can I use LAP to pay off debt if I am self-employed?",
      a: "Yes. Business owners and self-employed professionals often use LAP for debt consolidation or business expansion. You will need to provide your ITR filings and business vintage proof.",
    },
    {
      q: "Q2. Will my property be at risk if I consolidate my debt?",
      a: "Since LAP is a secured loan, the property acts as collateral. However, because the interest rate is much lower than a credit card, the risk of default is actually lower because your monthly EMIs become more affordable.",
    },
    {
      q: "Q3. Is it possible to get a LAP with a low CIBIL score?",
      a: "While a good score helps in getting the best rates, having a valuable property as collateral makes banks more flexible. It is one of the best ways to 'reset' and improve a damaged credit score.",
    },
    {
      q: "Q4. Are there any tax benefits on LAP for debt consolidation?",
      a: "Generally, tax benefits are available if the LAP is used for business purposes or home improvement. For pure debt consolidation, tax benefits are limited, but the interest savings themselves act as a massive financial gain.",
    },
    {
      q: "Q5. How long does the processing take?",
      a: "LAP usually takes 7 to 15 working days as it involves legal and technical verification of the property.",
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
            title="The Smart Reset: Debt Consolidation via Loan Against Property (LAP)"
            category="LOAN AGAINST PROPERTY"
            author="Sumit Mishra"
            date="May 04, 2026"
            image="/images/blog/blog-7.jpeg"
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
                  src="/images/blog/blog-7.jpeg"
                  alt="loan against property(LAP) best and smart deal"
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
                  The Smart Reset: Debt Consolidation via Loan Against Property
                  (LAP)
                </Typography>

                <div className="flex gap-4 text-gray-400 mb-6 pb-4 border-b overflow-x-auto no-scrollbar">
                  <div className="flex items-center gap-2 shrink-0">
                    <Clock size={16} />
                    <Typography variant="b2">May 04, 2026</Typography>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Folder size={16} />
                    <Typography variant="b2">Loan Against Property</Typography>
                  </div>
                </div>

                <Typography
                  variant="s2"
                  className="text-gray-600 mb-10 font-medium leading-relaxed"
                >
                  Are you juggling multiple credit card bills every month? By
                  using a Loan Against Property (LAP), you can consolidate all
                  your high-interest debts into one single, low-interest EMI.
                </Typography>

                <section className="space-y-10">
                  <div>
                    <Typography
                      variant="h5"
                      className="text-[#1e3a8a] mb-4 font-bold uppercase"
                    >
                      Why LAP is the Ultimate &quot;Debt Killer&quot;
                    </Typography>
                    <Typography
                      variant="b1"
                      className="text-gray-700 leading-relaxed mb-6"
                    >
                      Using your property as collateral isn&apos;t about taking
                      on more risk; it’s about optimizing your cash flow. Credit
                      card interest rates can skyrocket up to 40% per annum.
                      Here is how LAP compares:
                    </Typography>

                    {/* Comparison Table */}
                    <div className="overflow-x-auto rounded-lg border border-gray-200">
                      <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="p-4 border-b font-bold text-gray-900">
                              Feature
                            </th>
                            <th className="p-4 border-b font-bold text-gray-900">
                              Credit Card Debt
                            </th>
                            <th className="p-4 border-b font-bold text-gray-900">
                              LAP
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="hover:bg-gray-50">
                            <td className="p-4 border-b text-gray-700">
                              Interest Rate
                            </td>
                            <td className="p-4 border-b text-red-600 font-medium">
                              36% – 42% p.a.
                            </td>
                            <td className="p-4 border-b text-green-600 font-medium">
                              9% – 13% p.a.
                            </td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="p-4 border-b text-gray-700">
                              Tenure
                            </td>
                            <td className="p-4 border-b text-gray-600">
                              Immediate/Short-term
                            </td>
                            <td className="p-4 border-b text-gray-600">
                              Up to 15 Years
                            </td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="p-4 border-b text-gray-700">
                              Monthly Burden
                            </td>
                            <td className="p-4 border-b text-gray-600">
                              Extremely High
                            </td>
                            <td className="p-4 border-b text-gray-600">
                              Low & Manageable
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <Typography
                      variant="h5"
                      className="text-[#1e3a8a] mb-4 font-bold uppercase"
                    >
                      3 Strategic Benefits of Consolidating via LAP
                    </Typography>
                    <div className="space-y-6">
                      <div>
                        <Typography variant="s1" className="font-bold">
                          1. Massive Interest Savings
                        </Typography>
                        <Typography variant="b1" className="text-gray-700">
                          Switching from 36% to 10% interest saves lakhs that
                          can be redirected into your savings.
                        </Typography>
                      </div>
                      <div>
                        <Typography variant="s1" className="font-bold">
                          2. Improved Credit Score
                        </Typography>
                        <Typography variant="b1" className="text-gray-700">
                          Paying off credit cards lowers your revolving credit
                          balance, leading to a significant boost in your CIBIL
                          score.
                        </Typography>
                      </div>
                      <div>
                        <Typography variant="s1" className="font-bold">
                          3. Single Window Management
                        </Typography>
                        <Typography variant="b1" className="text-gray-700">
                          Instead of tracking 5 different due dates, you only
                          have one EMI and one date to remember.
                        </Typography>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
                    <Typography
                      variant="h5"
                      className="text-[#1e3a8a] mb-4 font-bold uppercase"
                    >
                      The Step-by-Step Execution Plan
                    </Typography>
                    <ul className="space-y-3">
                      <li className="flex gap-2 items-start">
                        <ChevronRight
                          size={18}
                          className="text-blue-600 mt-1"
                        />
                        <Typography variant="b1">
                          <strong>Calculate:</strong> List all outstanding
                          debts.
                        </Typography>
                      </li>
                      <li className="flex gap-2 items-start">
                        <ChevronRight
                          size={18}
                          className="text-blue-600 mt-1"
                        />
                        <Typography variant="b1">
                          <strong>Evaluate:</strong> Ensure property documents
                          are in order for 60%–70% LTV.
                        </Typography>
                      </li>
                      <li className="flex gap-2 items-start">
                        <ChevronRight
                          size={18}
                          className="text-blue-600 mt-1"
                        />
                        <Typography variant="b1">
                          <strong>Liquidate:</strong> Immediately pay off the
                          most expensive debts first.
                        </Typography>
                      </li>
                      <li className="flex gap-2 items-start">
                        <ChevronRight
                          size={18}
                          className="text-blue-600 mt-1"
                        />
                        <Typography variant="b1">
                          <strong>Close:</strong> Obtain an &apos;NDC&apos; from
                          lenders to update your report.
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
                        Reset Your Finances
                      </Typography>
                      <Typography
                        variant="b2"
                        className="text-blue-100 opacity-80"
                      >
                        Stop paying high interest today with a Smart LAP deal.
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
