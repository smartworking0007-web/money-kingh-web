"use client";

import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export const Blog79 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-full flex justify-center px-4"
        >
          <BlogCard1
            title="Why Teenagers Should Start Investing in Mutual Funds Early"
            category="INVESTMENTS"
            author="Sumit Mishra"
            date="August 12, 2026"
            image="/images/blog/blog79.jpeg"
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
                  src="/images/blog/blog79.jpeg"
                  alt="mutual funds with teenagers"
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
                  Why Teenagers Should Start Investing in Mutual Funds Early (2026 Guide)
                </Typography>

                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                  <Clock size={16} />
                  <Typography variant="b2">August 12, 2026</Typography>
                </div>

                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                  <p>
                    Financial literacy is rarely taught in traditional classrooms, yet managing money is one of the most vital skills a young adult can possess. Traditionally, teenagers saved pocket money in piggy banks or basic savings accounts. However, in an economy shaped by inflation, keeping cash idle means losing purchasing power over time.
                  </p>

                  <p>
                    This is where{" "}
                    <NextLink
                      href="/services/investment/sip"
                      className="text-red-600 font-bold hover:underline"
                    >
                      Mutual Funds
                    </NextLink>{" "}
                    come into play.
                  </p>

                  <p>
                    Whether a teenager earns an allowance, receives festival gifts, or generates income through freelancing and part-time gigs, entering the investment world early provides a massive financial advantage.
                  </p>

                  <p>
                    In this comprehensive guide, we explore the key benefits of mutual funds for teenagers, how the math of early investing works, and how parents and teens can get started together.
                  </p>

                  <h2>1. Unlocking the Magic of the Power of Compounding</h2>
                  <p>
                    The biggest asset a teenager possesses is time. When you invest early, your money earns returns, and those returns generate their own returns—a process known as compounding.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>The Time Advantage:</strong> A 15-year-old who starts investing just ₹1,000 per month in an equity{" "}
                      <NextLink
                        href="/services/investment/sip"
                        className="text-red-600 font-bold hover:underline"
                      >
                        mutual fund
                      </NextLink>{" "}
                      yielding an average of 12% per annum will accumulate a vastly larger corpus by age 45 compared to someone who starts investing ₹5,000 per month at age 30.
                    </li>
                    <li>
                      <strong>Longer Investment Horizon:</strong> Because teenagers do not have immediate financial obligations like home loans or family expenses, their money can remain invested uninterrupted for 10, 15, or even 20 years.
                    </li>
                  </ul>

                  <div className="bg-gray-100 p-4 rounded-lg text-center font-semibold text-gray-800 my-4 overflow-x-auto">
                    <div className="inline-flex items-center gap-2 text-lg md:text-xl">
                      <span>Compounded Wealth =</span>
                      <span>P &times; (1 + r)<sup>n</sup></span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 italic text-center">
                    Where &quot;n&quot; (time in years) acts as the exponential multiplier that accelerates wealth generation.
                  </p>

                  <h2>2. Building Lifelong Financial Discipline and Habits</h2>
                  <p>
                    Investing in mutual funds at a young age shifts a teenager&apos;s mindset from passive consuming to active wealth creation:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Budgeting and Delayed Gratification:</strong> Managing a regular Systematic Investment Plan (SIP) teaches teenagers to set aside a portion of their money first before spending on discretionary items. Start a disciplined journey via our{" "}
                      <NextLink
                        href="/services/investment/sip"
                        className="text-red-600 font-bold hover:underline"
                      >
                        SIP investment portal
                      </NextLink>
                      .
                    </li>
                    <li>
                      <strong>Understanding Risk vs. Reward:</strong> Exposure to market dynamics helps teens learn that market fluctuations are natural, teaching them emotional restraint rather than panic-selling during temporary downturns. Developing healthy money habits early also builds a strong foundation for managing future credit profiles, which you can track on our{" "}
                      <NextLink
                        href="/services/credit/hdfc"
                        className="text-blue-600 font-bold hover:underline"
                      >
                        credit portal
                      </NextLink>
                      .
                    </li>
                  </ul>

                  <h2>3. Higher Risk Tolerance Profile</h2>
                  <p>
                    Risk capacity generally decreases as financial responsibilities increase. Teenagers have a unique advantage when it comes to market risk:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Ability to Absorb Market Volatility:</strong> Young investors can comfortably invest in higher-growth equity{" "}
                      <NextLink
                        href="/services/investment/sip"
                        className="text-red-600 font-bold hover:underline"
                      >
                        mutual funds
                      </NextLink>{" "}
                      (such as small-cap or mid-cap funds). Even if the market experiences short-term corrections, teenagers have decades ahead of them for the market to recover and trend upwards.
                    </li>
                    <li>
                      <strong>Learning from Small Mistakes:</strong> Making investment mistakes with smaller amounts during teenage years provides valuable experience without causing catastrophic financial damage.
                    </li>
                  </ul>

                  <h2>4. Beating Inflation Effortlessly</h2>
                  <p>
                    A standard bank savings account typically offers low interest rates that struggle to keep pace with inflation.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Purchasing Power Protection:</strong> Mutual funds, particularly equity-oriented schemes, are structured to deliver inflation-beating capital growth over long periods.
                    </li>
                    <li>
                      <strong>Goal-Based Savings:</strong> Teenagers can align specific mutual fund investments with future milestones—such as funding higher education abroad, purchasing a first vehicle, or starting a business startup fund.
                    </li>
                  </ul>

                  <h2>Key Comparison: Savings Account vs. Mutual Funds for Teens</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-200">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border p-2">Parameter</th>
                          <th className="border p-2">Traditional Savings Account</th>
                          <th className="border p-2">Mutual Funds (Equity/Hybrid)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-2 font-bold">Average Annual Returns</td>
                          <td className="border p-2">2.5% to 4.0%</td>
                          <td className="border p-2">10% to 15% (Historical long-term averages)</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">Inflation Protection</td>
                          <td className="border p-2">Low (Loses real purchasing power)</td>
                          <td className="border p-2">High (Beats inflation over time)</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">Primary Objective</td>
                          <td className="border p-2">Capital safety &amp; short-term liquidity</td>
                          <td className="border p-2">Wealth creation &amp; long-term growth</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">Financial Learning Value</td>
                          <td className="border p-2">Minimal</td>
                          <td className="border p-2">High (Teaches markets, economics &amp; discipline)</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">Power of Compounding</td>
                          <td className="border p-2">Low impact</td>
                          <td className="border p-2">Exponential impact over 10–20+ years</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h2>How Can Teenagers Invest in Mutual Funds?</h2>
                  <p>
                    Under existing regulatory guidelines, minors (individuals under 18 years of age) can invest in{" "}
                    <NextLink
                      href="/services/investment/sip"
                      className="text-red-600 font-bold hover:underline"
                    >
                      mutual funds
                    </NextLink>{" "}
                    through a structured process:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Minor Mutual Fund Account:</strong> The account is opened in the name of the minor, managed by a natural guardian (father/mother) or a legally appointed court guardian.
                    </li>
                    <li>
                      <strong>KYC Documentation:</strong> The guardian completes the standard Know Your Customer (KYC) verification using their identity and address proofs, alongside the teenager&apos;s birth certificate or passport for age verification.
                    </li>
                    <li>
                      <strong>Smooth Transition at Age 18:</strong> Once the teenager turns 18, the account status is updated from &quot;Minor&quot; to &quot;Major&quot; after completing their personal KYC, giving them complete independent control over their portfolio.
                    </li>
                  </ul>

                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                    <h2 className="text-[#1e3a8a] text-xl font-bold mb-4 flex items-center gap-2">
                      <HelpCircle size={20} /> Frequently Asked Questions (FAQ)
                    </h2>
                    <ul className="space-y-4">
                      <li>
                        <strong>Q: Can a 16-year-old invest in mutual funds directly?</strong>
                        <br />
                        A: A minor cannot operate a mutual fund account independently. The investment account is opened in the minor&apos;s name with a parent or legal guardian acting as the operator until the teenager turns 18.
                      </li>
                      <li>
                        <strong>Q: What is the minimum amount a teenager can start investing with?</strong>
                        <br />
                        A: Many mutual funds allow investors to start a Systematic Investment Plan (SIP) with as little as ₹100 to ₹500 per month through our{" "}
                        <NextLink
                          href="/services/investment/sip"
                          className="text-blue-600 font-bold hover:underline"
                        >
                          SIP options
                        </NextLink>
                        , making it highly affordable for teenagers using pocket money or gift funds.
                      </li>
                      <li>
                        <strong>Q: Which type of mutual fund is best for teenagers?</strong>
                        <br />
                        A: Since teenagers have a long investment horizon, Equity Mutual Funds (such as Flexi-Cap or Index Funds) are generally well-suited for long-term growth. However, fund selection should align with the risk tolerance discussed with a parent or financial advisor.
                      </li>
                      <li>
                        <strong>Q: What happens to the mutual fund account when the teen turns 18?</strong>
                        <br />
                        A: Upon turning 18, all transactions by the guardian are paused until the young adult completes their individual KYC process and submits a status change application to transition the account to a major status.
                      </li>
                    </ul>
                  </div>
                </article>

                <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[40px] mt-10">
                  <Typography variant="h5" className="text-blue-400 uppercase mb-3">
                    Start Your Wealth Creation Journey Today!
                  </Typography>
                  <Typography variant="b2" className="text-gray-300 mb-6 block">
                    Leverage the power of compounding by starting early with top-rated mutual funds and SIP options tailored to long-term goals.
                  </Typography>

                  <NextLink
                    href="/services/investment/sip"
                    className="inline-block bg-red-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-red-700 transition"
                  >
                    Start an Investment SIP
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