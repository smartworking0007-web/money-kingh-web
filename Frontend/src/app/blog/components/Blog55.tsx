"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export const Blog55 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-full flex justify-center px-4"
        >
          <BlogCard1
            title="How Mutual Fund Expense Ratios Are Set and What You Actually Pay"
            category="MUTUAL FUNDS"
            author="Sumit Mishra"
            date="June 23, 2026"
            image="/images/blog/blog-55.jpeg"
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
                  src="/images/blog/blog-55.jpeg"
                  alt="A clean financial infographic comparing the compounding drag of direct vs regular mutual fund"
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
                  How Mutual Fund Expense Ratios Are Set and What You Actually
                  Pay
                </Typography>

                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                  <Clock size={16} />
                  <Typography variant="b2">June 22, 2026</Typography>
                </div>

                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                  <p>
                    When you invest in a mutual fund, you aren t just putting
                    your money to work in the stock market; you are also hiring
                    a professional ecosystem to manage it for you. This includes
                    fund managers, analysts, and compliance officers. This cost
                    is encapsulated in a single, vital metric: the{" "}
                    <strong>Expense Ratio</strong>.
                  </p>

                  <h2>1. The Core Concept: Total Expense Ratio (TER)</h2>
                  <p>
                    The TER represents the annual percentage of a fund s total
                    assets that goes toward operational and management expenses.
                    The formula is:
                  </p>
                  <p className="font-mono bg-gray-50 p-4 border rounded">
                    Expense Ratio = (Total Fund Expenses / Total AUM) × 100
                  </p>
                  <p>
                    The Asset Management Company (AMC) deducts this fee
                    automatically every day, meaning the Net Asset Value (NAV)
                    you see is already net of these expenses.
                  </p>

                  <h2>2. Who Sets the Limit? SEBI s Guardrails</h2>
                  <p>
                    SEBI has established strict tiered slab structures to ensure
                    economies of scale. As a fund’s total Assets Under
                    Management (AUM) grows, the maximum allowable expense ratio
                    decreases.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-200">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border p-2">AUM Slabs</th>
                          <th className="border p-2">Max TER Limit</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-2">First ₹500 Cr</td>
                          <td className="border p-2">Up to 2.25%</td>
                        </tr>
                        <tr>
                          <td className="border p-2">Next ₹250 Cr</td>
                          <td className="border p-2">Up to 2.00%</td>
                        </tr>
                        <tr>
                          <td className="border p-2">Next ₹1,250 Cr</td>
                          <td className="border p-2">Up to 1.75%</td>
                        </tr>
                        <tr>
                          <td className="border p-2">Balance AUM</td>
                          <td className="border p-2">Up to 1.05%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h2>3. Breakdown of Expenses</h2>
                  <p>Your money is split across several cost categories:</p>
                  <ul>
                    <li>
                      <strong>Investment Management Fees:</strong> Paid to the
                      fund manager and research team.
                    </li>
                    <li>
                      <strong>Administrative Costs:</strong> Includes legal,
                      audit, and registrar fees.
                    </li>
                    <li>
                      <strong>Distribution Expenses:</strong> Commissions paid
                      to agents (the difference between Regular and Direct
                      plans).
                    </li>
                  </ul>

                  <h2>4. Direct vs. Regular Funds: The 1% Compounding Trap</h2>
                  <p>Every mutual fund scheme has two versions:</p>
                  <ul>
                    <li>
                      <strong>Regular Plan:</strong> Includes a distribution
                      commission (0.5%–1.25%) to pay your broker.
                    </li>
                    <li>
                      <strong>Direct Plan:</strong> You buy directly from the
                      AMC; no commissions are involved, leading to a
                      significantly lower TER.
                    </li>
                  </ul>
                  <p>
                    Over a 20-year horizon, a 1% difference in expense ratio can
                    result in a 15% to 20% drop in your final wealth due to the
                    lost compounding velocity.
                  </p>

                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                    <h2 className="text-[#1e3a8a] text-xl font-bold mb-4 flex items-center gap-2">
                      <HelpCircle size={20} /> Frequently Asked Questions
                    </h2>
                    <ul className="space-y-4">
                      <li>
                        <strong>
                          Q: Do index funds have lower expense ratios?
                        </strong>
                        <br />
                        Yes. Index funds simply copy a market index, dropping
                        operational complexity and keeping ratios low, often
                        between 0.1% to 0.4%.
                      </li>
                      <li>
                        <strong>
                          Q: Does a high expense ratio guarantee better
                          performance?
                        </strong>
                        <br />
                        No. Historical data shows no correlation between high
                        expenses and superior performance.
                      </li>
                      <li>
                        <strong>Q: Can an AMC change its expense ratio?</strong>
                        <br />
                        Yes, AMCs can adjust ratios based on AUM fluctuations,
                        provided they stay within SEBI s regulatory caps and
                        provide transparent disclosure.
                      </li>
                    </ul>
                  </div>
                </article>

                <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[40px] mt-10">
                  <Typography
                    variant="h5"
                    className="text-blue-400 uppercase mb-3"
                  >
                    Need Professional Financial Guidance?
                  </Typography>
                  <Typography variant="b2" className="text-gray-300">
                    At Money King Financial Services, we specialize in
                    simplifying complex financial decisions. Contact our team
                    today to get a customized roadmap for your financial goals.
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
