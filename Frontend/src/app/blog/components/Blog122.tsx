"use client";

import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export const Blog122: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-full flex justify-center px-4"
        >
          <BlogCard1
            title="Lumpsum Return Calculator Guide 2026: Calculate Wealth Growth on One-Time Investments"
            category="MUTUAL FUND"
            author="Kishan Baranwal"
            date="October 14, 2026"
            image="/images/blog/Blog-122.jpeg"
          />
        </div>
      ) : (
        <div className="fixed inset-0 z-40 bg-white overflow-y-auto pt-20 md:pt-28 no-scrollbar animate-in fade-in duration-300 text-left">
          <div className="relative max-w-5xl mx-auto pb-20 px-4 md:px-6">
            
            {/* Back Button */}
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsOpen(false);
              }}
              className="flex items-center mb-6 text-gray-500 hover:text-[#1e3a8a] transition-colors gap-1 cursor-pointer"
            >
              <ArrowLeft size={14} />
              <Typography variant="caption" className="font-bold uppercase">
                Back to Blogs
              </Typography>
            </button>

            {/* Main Blog Container */}
            <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
              {/* Professional Image Preview Section */}
              <div className="w-full flex justify-center bg-slate-50 py-4 px-4 border-b border-gray-100">
                <div className="relative w-full max-w-3xl aspect-[16/9] rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/images/blog/Blog-122.jpeg"
                    alt="lumpsum return calculator"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="px-5 py-8 md:px-12 md:py-14">
                <Typography
                  variant="h5"
                  className="text-[#1e3a8a] uppercase text-2xl md:text-4xl mb-4 font-bold"
                >
                  <NextLink
                    href="https://moneykingfinancial.com/services/mutual-fund/lumpsum"
                    className="text-[#1e3a8a] hover:underline"
                  >
                    Lumpsum Return Calculator Guide 2026
                  </NextLink>
                  : Calculate Wealth Growth on One-Time Investments
                </Typography>

                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                  <Clock size={16} />
                  <Typography variant="b2">October 14, 2026</Typography>
                  <span className="mx-2">•</span>
                  <Typography variant="b2">By Kishan Baranwal</Typography>
                </div>

                {/* Blog Article Body */}
                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                  {/* Featured Snippet Box */}
                  <div className="bg-slate-50 border-l-4 border-[#1e3a8a] p-4 rounded-r-lg">
                    <p className="text-gray-700 italic m-0">
                      A Lumpsum Return Calculator is an online financial tool that helps investors project the future value of a one-time lump sum mutual fund investment based on expected annual rates of return and tenure. By inputting the initial investment amount, expected rate of return (CAGR), and time horizon, investors can instantly calculate total wealth accumulation and net estimated gains.
                    </p>
                  </div>

                  <p>
                    While Systematic Investment Plans (SIPs) are popular for disciplined monthly savings, making a Lumpsum Investment is one of the most powerful strategies to deploy surplus capital—such as annual bonuses, property sale proceeds, or maturity payouts.
                  </p>

                  <p>
                    However, understanding how a single investment grows over 5, 10, or 20 years requires evaluating compound growth. Using an online{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/mutual-fund/lumpsum"
                      className="text-[#1e3a8a] font-semibold hover:underline"
                    >
                      lumpsum return calculator
                    </NextLink>{" "}
                    allows you to test different return rates and horizons in seconds, helping you map out your long-term wealth goals without manual financial calculations.
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Key Highlights of Lumpsum Mutual Fund Investment
                  </h2>

                  <div className="overflow-x-auto my-4">
                    <table className="w-full border-collapse border border-gray-200 text-left text-sm">
                      <thead className="bg-slate-100 text-gray-800">
                        <tr>
                          <th className="border border-gray-200 p-3">Feature / Factor</th>
                          <th className="border border-gray-200 p-3">Details &amp; Insights</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-200 p-3 font-semibold">Investment Type</td>
                          <td className="border border-gray-200 p-3">One-time single payment upfront</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-3 font-semibold">Primary Formula Basis</td>
                          <td className="border border-gray-200 p-3">Compound Interest Formula: A = P(1 + r/n)^nt</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-3 font-semibold">Ideal Market Timing</td>
                          <td className="border border-gray-200 p-3">Market corrections, sharp dips, or long-term growth horizons</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-3 font-semibold">Key Advantage</td>
                          <td className="border border-gray-200 p-3">Maximum exposure to compounding from Day 1</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    How Does a Lumpsum Return Calculation Work?
                  </h2>
                  <p>
                    Lumpsum investment returns in mutual funds are calculated using the standard Compound Interest / CAGR formula:
                  </p>

                  {/* Formula Display Box */}
                  <div className="bg-slate-100 p-4 rounded-lg font-mono text-gray-800 text-center text-sm md:text-base my-4">
                    A = P(1 + i)^n
                  </div>

                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li><strong>A</strong> = Future Value / Estimated Amount</li>
                    <li><strong>P</strong> = Principal Lumpsum Investment Amount</li>
                    <li><strong>i</strong> = Expected Annual Rate of Return (%)</li>
                    <li><strong>n</strong> = Investment Horizon / Duration (in years)</li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Illustrative Example: Growth Projection of a ₹1,00,000 (₹1 Lakh) Lumpsum Investment
                  </h2>
                  <p>
                    Suppose you make a one-time investment of ₹1,00,000 at an expected average annual return rate of 12% p.a.:
                  </p>

                  <div className="overflow-x-auto my-4">
                    <table className="w-full border-collapse border border-gray-200 text-left text-sm">
                      <thead className="bg-slate-100 text-gray-800">
                        <tr>
                          <th className="border border-gray-200 p-3">Investment Horizon</th>
                          <th className="border border-gray-200 p-3">Initial Principal (₹)</th>
                          <th className="border border-gray-200 p-3">Estimated Wealth Gain (₹)</th>
                          <th className="border border-gray-200 p-3">Total Future Value (₹)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-200 p-3 font-semibold">5 Years</td>
                          <td className="border border-gray-200 p-3">₹1,00,000</td>
                          <td className="border border-gray-200 p-3">₹76,234</td>
                          <td className="border border-gray-200 p-3 font-semibold text-slate-900">₹1,76,234</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-3 font-semibold">10 Years</td>
                          <td className="border border-gray-200 p-3">₹1,00,000</td>
                          <td className="border border-gray-200 p-3">₹2,10,585</td>
                          <td className="border border-gray-200 p-3 font-semibold text-slate-900">₹3,10,585</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-3 font-semibold">15 Years</td>
                          <td className="border border-gray-200 p-3">₹1,00,000</td>
                          <td className="border border-gray-200 p-3">₹4,47,357</td>
                          <td className="border border-gray-200 p-3 font-semibold text-slate-900">₹5,47,357</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-3 font-semibold">20 Years</td>
                          <td className="border border-gray-200 p-3">₹1,00,000</td>
                          <td className="border border-gray-200 p-3">₹8,64,629</td>
                          <td className="border border-gray-200 p-3 font-semibold text-slate-900">₹9,64,629</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-3 font-semibold">25 Years</td>
                          <td className="border border-gray-200 p-3">₹1,00,000</td>
                          <td className="border border-gray-200 p-3">₹16,00,006</td>
                          <td className="border border-gray-200 p-3 font-semibold text-slate-900">₹17,00,006</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="bg-amber-50 border-l-4 border-amber-400 p-3 text-sm text-amber-900 font-medium rounded-r-lg">
                    <strong>Key Takeaway:</strong> Due to the power of compounding, staying invested for 25 years transforms a ₹1 Lakh initial amount into ₹17 Lakhs!
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Lumpsum vs SIP: Which One Should You Choose?
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Lumpsum Investment:</strong> Best suited when you have a lump sum amount readily available and market valuations are attractive. It puts 100% of your capital to work immediately.
                    </li>
                    <li>
                      <strong>SIP (Systematic Investment Plan):</strong> Ideal for salaried individuals who want to invest monthly and mitigate market volatility through rupee cost averaging.
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    How to Use the Lumpsum Calculator Efficiently
                  </h2>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li><strong>Step 1:</strong> Enter your total one-time investment amount (e.g., ₹50,000 or ₹5,00,000).</li>
                    <li><strong>Step 2:</strong> Input your expected annual return rate based on the fund category (e.g., 10%–12% for Large Cap/Index, 12%–15% for Flexi Cap).</li>
                    <li><strong>Step 3:</strong> Select your investment horizon (in years).</li>
                    <li><strong>Step 4:</strong> Review the total future wealth and net estimated gains instantly.</li>
                  </ol>

                  {/* FAQ Section */}
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                    <h2 className="text-[#1e3a8a] text-xl font-bold mb-4 flex items-center gap-2">
                      <HelpCircle size={20} /> Frequently Asked Questions (FAQ)
                    </h2>
                    <ul className="space-y-4">
                      <li>
                        <strong>Q1: What is a good return rate to assume for mutual fund lumpsum investments?</strong>
                        <br />
                        For long-term equity mutual funds (like Nifty 50 Index Funds or Flexi Cap Funds), a conservative annual return expectation ranges between 11% to 14% p.a. over a 5–10 year horizon.
                      </li>
                      <li>
                        <strong>Q2: Is a lumpsum investment risky during market peaks?</strong>
                        <br />
                        Investing a large amount at all-time market highs carries short-term volatility risk. In such market conditions, investors often use a Systematic Transfer Plan (STP) to transfer funds gradually from a liquid fund to an equity fund.
                      </li>
                      <li>
                        <strong>Q3: Are lumpsum mutual fund returns taxable?</strong>
                        <br />
                        Yes. For Equity Mutual Funds, Long-Term Capital Gains (LTCG) above ₹1.25 Lakh per financial year are taxed at 12.5%, while Short-Term Capital Gains (STCG) on investments held for less than 12 months are taxed at 20%.
                      </li>
                    </ul>
                  </div>
                </article>

                {/* Call To Action Banner */}
                <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[40px] mt-10">
                  <Typography
                    variant="h5"
                    className="text-blue-400 uppercase mb-3 font-bold"
                  >
                    Calculate Your Lumpsum Returns Today
                  </Typography>
                  <Typography variant="b2" className="text-gray-300 mb-6 block">
                    Use our free calculator and start your investment journey with{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/mutual-fund/lumpsum"
                      className="text-blue-400 hover:underline"
                    >
                      Money King Financial Services
                    </NextLink>{" "}
                    now.
                  </Typography>

                  <div className="flex flex-wrap gap-4 mt-2">
                    <NextLink
                      href="https://moneykingfinancial.com/services/mutual-fund/lumpsum"
                      className="inline-block bg-blue-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-700 transition"
                    >
                      Calculate Lumpsum Now
                    </NextLink>
                  </div>
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

export default Blog122;