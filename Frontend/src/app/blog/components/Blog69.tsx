"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export const Blog69 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-full flex justify-center px-4"
        >
          <BlogCard1
            title="SIPs vs. Lump Sum in ELSS: Which Is Better for Your Tax-Saving Goals?"
            category="TAXATION"
            author="Sumit Mishra"
            date="July 13, 2026"
            image="/images/blog/blog-69.jpeg"
          />
        </div>
      ) : (
        <div className="fixed inset-0 z-40 bg-white overflow-y-auto pt-20 md:pt-28 no-scrollbar animate-in fade-in duration-300 text-left">
          <div className="relative max-w-5xl mx-auto pb-20 px-4 md:px-6">
            <button
              onClick={() => setIsOpen(false)}
              className="flex items-center mb-6 text-gray-500 hover:text-[#1e3a8a] gap-1"
            >
              <ArrowLeft size={14} />
              <Typography variant="caption" className="font-bold uppercase">
                Back to Blogs
              </Typography>
            </button>

            <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
              <div className="relative h-[300px] md:h-[500px] w-full">
                <Image
                  src="/images/blog/blog-69.jpeg"
                  alt="SIP investment vs. a Lump Sum investment"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="px-5 py-8 md:px-12 md:py-14">
                <Typography
                  variant="h5"
                  className="text-[#1e3a8a] uppercase text-2xl md:text-4xl mb-4"
                >
                  SIPs vs. Lump Sum in ELSS: Which Is Better for Your Tax-Saving
                  Goals?
                </Typography>

                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                  <Clock size={16} />
                  <Typography variant="b2">July 13, 2026</Typography>
                </div>

                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                  <p>
                    Choosing between a Systematic Investment Plan (SIP) and a
                    Lump Sum investment for ELSS depends on your cash flow and
                    market outlook. ELSS (Equity Linked Saving Scheme) remains
                    one of the most powerful tax-saving vehicles under Section
                    80C, offering the dual benefit of tax deduction and
                    equity-linked wealth multiplication.
                  </p>

                  <h2>
                    1. The SIP Approach: Discipline & Volatility Mitigation
                  </h2>
                  <p>
                    A SIP allows you to invest a fixed amount at uniform
                    intervals. Its primary strength is{" "}
                    <strong>Rupee Cost Averaging</strong>:
                  </p>
                  <ul>
                    <li>
                      <strong>Bull Markets:</strong> Your fixed installment buys
                      fewer units when NAV is high.
                    </li>
                    <li>
                      <strong>Bear Markets:</strong> Your installment buys more
                      units when prices are low.
                    </li>
                    <li>
                      <strong>Psychology:</strong> It removes the stress of
                      timing the market and builds a consistent financial habit.
                    </li>
                  </ul>
                  <p>
                    <strong>Note:</strong> In ELSS, each monthly SIP installment
                    initiates its own independent 3-year lock-in period.
                  </p>

                  <h2>2. The Lump Sum Approach: Time in the Market</h2>
                  <p>
                    A Lump Sum investment involves deploying your entire
                    tax-saving corpus in one transaction. This is ideal if you
                    have a surplus (e.g., a bonus) early in the financial year.
                  </p>
                  <ul>
                    <li>
                      <strong>Maximizing Compounding:</strong> By investing
                      upfront, you maximize the time your money stays in the
                      market, which is statistically superior in a rising
                      market.
                    </li>
                    <li>
                      <strong>Simplified Liquidity:</strong> Because your entire
                      investment happens on one day, the full corpus becomes
                      liquid exactly three years later.
                    </li>
                  </ul>

                  <h2>3. Head-to-Head Comparison</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-200">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border p-2">Feature</th>
                          <th className="border p-2">SIP</th>
                          <th className="border p-2">Lump Sum</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-2">Market Risk</td>
                          <td className="border p-2">
                            Mitigated via Averaging
                          </td>
                          <td className="border p-2">Higher Timing Risk</td>
                        </tr>
                        <tr>
                          <td className="border p-2">Convenience</td>
                          <td className="border p-2">High (Automated)</td>
                          <td className="border p-2">
                            Variable (Depends on Cash)
                          </td>
                        </tr>
                        <tr>
                          <td className="border p-2">Lock-in Maturity</td>
                          <td className="border p-2">Staggered/Gradual</td>
                          <td className="border p-2">Single Date</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h2>4. The Smart Hybrid Strategy</h2>
                  <p>
                    You don t have to choose strictly one. Many investors use a{" "}
                    <strong>Hybrid Strategy</strong>: set up a base monthly SIP
                    to automate tax savings, and use tactical Lump Sum Top-Ups
                    during market corrections to lower your average purchase
                    cost.
                  </p>

                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                    <h2 className="text-[#1e3a8a] text-xl font-bold mb-4 flex items-center gap-2">
                      <HelpCircle size={20} /> Frequently Asked Questions
                    </h2>
                    <ul className="space-y-4">
                      <li>
                        <strong>
                          Q: Do I get tax benefits for every SIP installment?
                        </strong>
                        <br />
                        Yes, every installment qualifies under Section 80C, but
                        each has a 3-year lock-in from its respective date.
                      </li>
                      <li>
                        <strong>Q: Is Lump Sum riskier?</strong>
                        <br />
                        Yes, it carries a timing risk. Investing all your
                        capital right before a market correction can lead to
                        immediate portfolio decline.
                      </li>
                      <li>
                        <strong>
                          Q: Which is better for long-term growth?
                        </strong>
                        <br />
                        Both strategies yield similar results over long
                        horizons, but SIPs offer a smoother, more disciplined
                        psychological experience for most investors.
                      </li>
                    </ul>
                  </div>
                </article>

                <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[40px] mt-10">
                  <Typography
                    variant="h5"
                    className="text-blue-400 uppercase mb-3"
                  >
                    Maximize Your Tax Savings
                  </Typography>
                  <Typography variant="b2" className="text-gray-300">
                    Not sure which tax-saving path aligns with your cash flow?
                    Our financial experts are here to help you design a plan
                    that optimizes your tax liability and long-term returns.
                  </Typography>
                </div>

                <div className="mt-14">
                  <ShareSection />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
