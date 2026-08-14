"use client";

import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export const Blog81: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-full flex justify-center px-4"
        >
          <BlogCard1
            title="The Ultimate Guide to Achieving Financial Independence"
            category="WEALTH CREATION"
            author="Sumit Mishra"
            date="August 14, 2026"
            image="/images/blog/blog-81.jpeg"
          />
        </div>
      ) : (
        <div className="fixed inset-0 z-40 bg-white overflow-y-auto pt-20 md:pt-28 no-scrollbar animate-in fade-in duration-300 text-left">
          <div className="relative max-w-5xl mx-auto pb-20 px-4 md:px-6">
            {/* Back Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="flex items-center mb-6 text-gray-500 hover:text-[#1e3a8a] transition-colors gap-1"
            >
              <ArrowLeft size={14} />
              <Typography variant="caption" className="font-bold uppercase">
                Back to Blogs
              </Typography>
            </button>

            {/* Main Blog Container */}
            <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
              <div className="relative h-[300px] md:h-[500px] w-full">
                <Image
                  src="/images/blog/blog-81.jpeg"
                  alt="financial independence"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="px-5 py-8 md:px-12 md:py-14">
                <Typography
                  variant="h5"
                  className="text-[#1e3a8a] uppercase text-2xl md:text-4xl mb-4 font-bold"
                >
                  The Ultimate Guide to Achieving Financial Independence
                </Typography>

                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                  <Clock size={16} />
                  <Typography variant="b2">August 14, 2026</Typography>
                </div>

                {/* Blog Article Body */}
                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                  <p>
                    Financial independence means having sufficient personal
                    wealth, savings, and investments to cover living expenses
                    without relying on active employment. Achieving financial
                    independence is not about becoming a billionaire overnight;
                    it is about reaching a point where your passive income
                    covers your lifestyle expenses, giving you total control
                    over your time and career choices.
                  </p>

                  <p>
                    Whether your goal is early retirement under the FIRE
                    movement or simply having the freedom to pursue your
                    passions without financial stress, following a structured
                    roadmap is essential. Individuals achieve this through a
                    systematic approach: eliminating high-interest debt,
                    creating an emergency fund, practicing intentional spending,
                    and consistently investing in income-generating assets like
                    mutual funds, equities, and real estate.
                  </p>

                  <p>
                    Here is the comprehensive, step-by-step guide to navigating
                    your path toward true financial freedom.
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Step 1: Calculate Your Financial Independence Number
                  </h2>
                  <p>
                    Before setting off on your journey, you need a clear
                    destination. Your Financial Independence (FI) Number is the
                    total corpus required to sustain your current or desired
                    lifestyle indefinitely.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>The 25x Rule:</strong> A widely accepted financial
                      benchmark states that your target portfolio size should be
                      25 times your estimated annual living expenses.
                    </li>
                  </ul>

                  {/* Formula Box - Fixed with proper JSX text handling */}
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 my-4 text-center">
                    <p className="text-sm font-semibold text-blue-900 mb-2">
                      Core FI Target Corpus Formula
                    </p>
                    <p className="text-lg font-bold text-blue-950 font-mono">
                      FI Target Corpus = Annual Living Expenses &times; 25
                    </p>
                  </div>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>The 4% Safe Withdrawal Rate:</strong> Once you
                      accumulate this target corpus, withdrawing 4% annually
                      (adjusted for inflation) ensures your wealth continues to
                      support you indefinitely without depleting the principal
                      balance.
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Step 2: Build an Unshakeable Emergency Fund
                  </h2>
                  <p>
                    Before aggressive investing, protect yourself against
                    life&apos;s uncertainties. A medical emergency, sudden job
                    transition, or market correction should never force you into
                    high-cost borrowing.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Target Reserve:</strong> Maintain liquid funds
                      covering 6 to 12 months of essential living expenses
                      (rent, groceries, utility bills, and insurance premiums).
                    </li>
                    <li>
                      <strong>Where to Store:</strong> Keep these reserves
                      highly accessible in a combination of high-yield savings
                      accounts, sweep-in fixed deposits, and short-term liquid
                      mutual funds.
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Step 3: Eliminate High-Interest Debt
                  </h2>
                  <p>
                    Carrying high-interest debt acts as an anchor holding back
                    your wealth accumulation. If you have active obligations or
                    consumer credit balances, structure an aggressive payoff
                    plan before heavily expanding discretionary investments.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Prioritize High Interest Rates:</strong> Annual
                      percentage rates on credit cards (often 18% to 42%) and
                      unsecured personal loans outpace average market returns.
                      Consider debt consolidation options or emergency{" "}
                      <NextLink
                        href="/services/loan/unsecured/personal"
                        className="text-red-600 font-bold hover:underline"
                      >
                        personal loan refinancing
                      </NextLink>{" "}
                      if it helps lower your overall interest burden.
                    </li>
                    <li>
                      <strong>Repayment Frameworks:</strong> Utilize the{" "}
                      <em>Debt Avalanche method</em> (tackling highest interest
                      balances first to minimize total interest) or the{" "}
                      <em>Debt Snowball method</em> (knocking out smallest
                      balances first for motivational wins).
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Step 4: Maximize Savings Rate &amp; Practice Intentional
                    Spending
                  </h2>
                  <p>
                    To accelerate your timeline toward financial freedom, your
                    savings rate initially matters more than your income level.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Track Needs vs. Wants:</strong> Conduct regular
                      quarterly audits of recurring subscriptions and lifestyle
                      inflation to keep baseline overhead lean.
                    </li>
                    <li>
                      <strong>Automate Savings:</strong> Follow the &quot;Pay
                      Yourself First&quot; rule by setting up automatic
                      transfers into investment accounts on payday. Aim to scale
                      your savings rate from 30% up to 50% as your career
                      advances.
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Step 5: Invest for Exponential Compound Growth
                  </h2>
                  <p>
                    Saving cash in low-yield accounts erodes purchasing power
                    over time due to inflation. True financial independence is
                    fueled by productive capital assets.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Equity Mutual Funds &amp; Index Funds:</strong>{" "}
                      Low-cost, diversified index funds (such as Nifty 50 or
                      S&amp;P 500 funds) provide sustained long-term capital
                      growth.
                    </li>
                    <li>
                      <strong>Asset Allocation Strategy:</strong> Balance risk
                      across equities, fixed income instruments, gold, and real
                      estate according to your risk tolerance and time horizon.
                    </li>
                    <li>
                      <strong>Systematic Investment Plans (SIPs):</strong>{" "}
                      Rupee-cost averaging through disciplined monthly SIPs
                      mitigates market volatility and harnesses the full power
                      of compound interest.
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Roadmap to Financial Freedom
                  </h2>
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-center space-y-3 font-semibold text-gray-700 my-6">
                    <div className="bg-white p-3 rounded-lg border shadow-sm">
                      [ Step 1: Track Expenses &amp; Define FI Number ]
                    </div>
                    <div className="text-blue-600 font-bold">↓</div>
                    <div className="bg-white p-3 rounded-lg border shadow-sm">
                      [ Step 2: Build 6-Month Emergency Fund ]
                    </div>
                    <div className="text-blue-600 font-bold">↓</div>
                    <div className="bg-white p-3 rounded-lg border shadow-sm">
                      [ Step 3: Clear High-Interest Consumer Debt ]
                    </div>
                    <div className="text-blue-600 font-bold">↓</div>
                    <div className="bg-white p-3 rounded-lg border shadow-sm">
                      [ Step 4: Automate High Savings Rate (30%–50%) ]
                    </div>
                    <div className="text-blue-600 font-bold">↓</div>
                    <div className="bg-white p-3 rounded-lg border shadow-sm">
                      [ Step 5: Invest in High-Growth Assets (SIPs) ]
                    </div>
                    <div className="text-blue-600 font-bold">↓</div>
                    <div className="bg-white p-3 rounded-lg border shadow-sm">
                      [ Step 6: Build Diverse Passive Income Streams ]
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Key Comparison: Active Income vs. Passive Income
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-200">
                      <thead>
                        <tr className="bg-gray-100 text-left">
                          <th className="border p-2">Parameter</th>
                          <th className="border p-2">Active Income</th>
                          <th className="border p-2">
                            Passive Income (FI Benchmark)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-2 font-bold">Source</td>
                          <td className="border p-2">
                            Salaries, wages, consulting, freelancing
                          </td>
                          <td className="border p-2">
                            Dividends, mutual fund returns, rental yield,
                            royalties
                          </td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">
                            Time Investment
                          </td>
                          <td className="border p-2">
                            Directly proportional to hours worked
                          </td>
                          <td className="border p-2">
                            Decoupled from daily manual labor
                          </td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">
                            Growth Ceiling
                          </td>
                          <td className="border p-2">
                            Limited by personal time and physical energy
                          </td>
                          <td className="border p-2">
                            Unlimited upside via compounding returns
                          </td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">Stability</td>
                          <td className="border p-2">
                            Vulnerable to layoffs, restructuring, or illness
                          </td>
                          <td className="border p-2">
                            Diversified across multiple uncorrelated assets
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* FAQ Section */}
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                    <h2 className="text-[#1e3a8a] text-xl font-bold mb-4 flex items-center gap-2">
                      <HelpCircle size={20} /> Frequently Asked Questions (FAQ)
                    </h2>
                    <ul className="space-y-4">
                      <li>
                        <strong>Q: What is the FIRE movement?</strong>
                        <br />
                        A: FIRE stands for Financial Independence, Retire Early.
                        It is a financial philosophy where individuals maximize
                        their savings rates (often 50% to 70% of income) during
                        their 20s and 30s to accumulate enough wealth to retire
                        decades ahead of traditional retirement age.
                      </li>
                      <li>
                        <strong>
                          Q: Can someone with an average salary achieve
                          financial independence?
                        </strong>
                        <br />
                        A: Yes. Financial independence is determined by your
                        savings rate and spending habits rather than your raw
                        income. Maintaining a high savings rate relative to your
                        living expenses allows compounding to build substantial
                        wealth over a 15 to 20-year horizon.
                      </li>
                      <li>
                        <strong>
                          Q: How often should I rebalance my investment
                          portfolio?
                        </strong>
                        <br />
                        A: Review your portfolio&apos;s asset allocation once a
                        year or whenever market movements shift your target
                        allocation (e.g., equity vs. debt ratio) by more than 5%
                        to 10%. Rebalancing ensures your risk profile remains
                        optimal. Check your financial and credit profile on our{" "}
                        <NextLink
                          href="/services/credit/hdfc"
                          className="text-blue-600 font-bold hover:underline"
                        >
                          financial portal
                        </NextLink>{" "}
                        for holistic planning.
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
                    Take Control of Your Financial Future Today!
                  </Typography>
                  <Typography variant="b2" className="text-gray-300 mb-6 block">
                    Evaluate your financial health, calculate your wealth growth
                    trajectory, and access custom credit and investment
                    solutions built for long-term freedom.
                  </Typography>

                  <NextLink
                    href="/services/credit/hdfc"
                    className="inline-block bg-red-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-red-700 transition"
                  >
                    Check Financial &amp; Credit Profile
                  </NextLink>
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
