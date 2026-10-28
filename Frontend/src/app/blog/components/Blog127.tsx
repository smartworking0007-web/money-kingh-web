"use client";

import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export const Blog127: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(false);
  };

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-full flex justify-center px-4"
        >
          <BlogCard1
            title="The Power of Compounding: How to Plan Your Wealth with a Mutual Fund SIP"
            category="MUTUAL FUND"
            author="Kishan Baranwal"
            date="October 28, 2026"
            image="/images/blog/Blog-127.jpeg"
          />
        </div>
      ) : (
        <div className="fixed inset-0 z-40 bg-white overflow-y-auto pt-20 md:pt-28 no-scrollbar animate-in fade-in duration-300 text-left">
          <div className="relative max-w-5xl mx-auto pb-20 px-4 md:px-6">
            {/* Back Button */}
            <button
              onClick={handleClose}
              className="flex items-center mb-6 text-gray-500 hover:text-[#1e3a8a] transition-colors gap-1 cursor-pointer"
              type="button"
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
                    src="/images/blog/Blog-127.jpeg"
                    alt="sip calculator"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
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
                    href="https://moneykingfinancial.com/services/mutual-fund/sip"
                    className="text-[#1e3a8a] hover:underline"
                  >
                    The Power of Compounding
                  </NextLink>
                  : How to Plan Your Wealth with a Mutual Fund SIP
                </Typography>

                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                  <Clock size={16} />
                  <Typography variant="b2">October 28, 2026</Typography>
                  <span className="mx-2">•</span>
                  <Typography variant="b2">By Kishan Baranwal</Typography>
                </div>

                {/* Blog Article Body */}
                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                  {/* Featured Snippet Box */}
                  <div className="bg-slate-50 border-l-4 border-[#1e3a8a] p-4 rounded-r-lg">
                    <p className="text-gray-700 italic m-0">
                      Building long-term wealth does not require a massive
                      fortune or complex market timing. In fact, one of the most
                      effective and stress-free ways to achieve your financial
                      goals—whether it is buying a home, funding higher
                      education, or building a comfortable retirement corpus—is
                      through a Systematic Investment Plan (SIP). Using an
                      online{" "}
                      <NextLink
                        href="https://moneykingfinancial.com/services/mutual-fund/sip"
                        className="text-[#1e3a8a] font-semibold hover:underline"
                      >
                        SIP calculator
                      </NextLink>{" "}
                      helps you estimate your returns and plan your financial
                      journey seamlessly.
                    </p>
                  </div>

                  <p>
                    In this guide, we break down how an SIP works, the
                    compounding math behind it, and how you can use a{" "}
                    <strong>Systematic Investment Plan Calculator</strong> to
                    achieve your long-term financial milestones.
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    1. What is an SIP and How Does It Work?
                  </h2>
                  <p>
                    A Systematic Investment Plan (SIP) is an investment route
                    offered by mutual funds that allows you to invest a fixed
                    sum of money at regular intervals (monthly, quarterly, or
                    weekly) into a selected mutual fund scheme.
                  </p>
                  <p>
                    Instead of investing a large lump-sum amount at once, an SIP
                    instills financial discipline while offering two powerful
                    advantages:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Rupee Cost Averaging:</strong> When market prices
                      (NAV) drop, your fixed monthly installment buys more
                      units. When markets rise, you buy fewer units. Over time,
                      this lowers your average cost per unit and protects you
                      from market volatility.
                    </li>
                    <li>
                      <strong>Power of Compounding:</strong> Returns earned on
                      your invested capital are reinvested back into the scheme,
                      generating their own returns over time. The earlier you
                      start, the more exponential your growth becomes.
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    2. Key Benefits of Investing via SIP
                  </h2>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>
                      <strong>Low Entry Barrier:</strong> You can start your
                      wealth-creation journey with as little as ₹500 per month.
                    </li>
                    <li>
                      <strong>Automated Saving Habit:</strong> Auto-debit
                      facilities ensure that you save and invest before
                      discretionary spending happens.
                    </li>
                    <li>
                      <strong>Flexibility:</strong> You can step up, pause, or
                      top up your monthly SIP amount as your income grows.
                    </li>
                    <li>
                      <strong>No Need to Time the Market:</strong> Eliminates
                      emotional investing during market highs and market
                      crashes, maximizing your{" "}
                      <strong>SIP investment returns</strong>.
                    </li>
                  </ol>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    3. The Math Behind SIP Calculations
                  </h2>
                  <p>
                    Unlike a fixed deposit where the principal is deposited
                    once, each monthly SIP installment compounds for a different
                    number of months. A{" "}
                    <strong>Mutual Fund SIP Calculator</strong> uses standard
                    compounding formulas to project your future corpus.
                  </p>

                  {/* Formula Display Box */}
                  <div className="bg-slate-100 p-4 rounded-lg font-mono text-gray-800 text-center text-sm md:text-base my-4">
                    A = P × [((1 + i)^n - 1) / i] × (1 + i)
                  </div>

                  <p className="text-sm font-medium">Where:</p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>
                      <strong>A</strong> = Projected estimated corpus (Total
                      wealth output)
                    </li>
                    <li>
                      <strong>P</strong> = Monthly SIP installment amount
                    </li>
                    <li>
                      <strong>i</strong> = Periodic rate of interest [Annual
                      Rate / 12 / 100]
                    </li>
                    <li>
                      <strong>n</strong> = Total number of monthly installments
                      [Years × 12]
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    4. Step-by-Step Guide: How to Start Your First SIP
                  </h2>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>
                      <strong>Define Your Goal:</strong> Determine why you are
                      investing (e.g., retirement in 20 years vs. a car purchase
                      in 3 years).
                    </li>
                    <li>
                      <strong>Determine Your Risk Profile:</strong>
                      <ul className="list-disc pl-6 mt-1 space-y-1">
                        <li>
                          <strong>Conservative:</strong> Debt Mutual Funds or
                          Hybrid Funds.
                        </li>
                        <li>
                          <strong>Moderate:</strong> Large-Cap Equity or
                          Flexi-Cap Funds.
                        </li>
                        <li>
                          <strong>Aggressive:</strong> Mid-Cap, Small-Cap, or
                          Sectoral Equity Funds.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Complete Your KYC:</strong> Complete your e-KYC
                      digital verification online using standard government
                      identity proofs with a SEBI-registered platform or
                      financial expert.
                    </li>
                    <li>
                      <strong>Automate Monthly Installments:</strong> Set up an
                      auto-debit Mandate with your bank on a date right after
                      your salary credit (e.g., 5th of every month).
                    </li>
                    <li>
                      <strong>Annual Review:</strong> Use an online{" "}
                      <strong>SIP wealth calculator</strong> to review your
                      portfolio once a year and increase your SIP amount by 10%
                      annually as your salary increases.
                    </li>
                  </ol>

                  {/* FAQ Section */}
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                    <h2 className="text-[#1e3a8a] text-xl font-bold mb-4 flex items-center gap-2">
                      <HelpCircle size={20} /> Frequently Asked Questions (FAQ)
                    </h2>
                    <ul className="space-y-4">
                      <li>
                        <strong>
                          Q1: Can I stop or pause my SIP at any time without
                          penalty?
                        </strong>
                        <br />
                        Yes. Mutual fund SIPs offer complete flexibility. You
                        can pause or stop your monthly SIP payments anytime
                        without incurring any penalty or lock-in charges (except
                        for ELSS tax-saving funds which carry a 3-year lock-in).
                      </li>
                      <li>
                        <strong>
                          Q2: Is SIP better than a lump-sum investment?
                        </strong>
                        <br />
                        SIP is ideal for regular monthly earners as it reduces
                        the risk of market volatility through rupee cost
                        averaging. However, if you have a large sum of surplus
                        cash during a market dip, a lump-sum investment can also
                        be effective.
                      </li>
                      <li>
                        <strong>
                          Q3: Are mutual fund SIP returns guaranteed?
                        </strong>
                        <br />
                        No, mutual fund investments are subject to market risks
                        and do not offer guaranteed returns like fixed deposits.
                        However, historically, long-term equity SIPs (over 5–10+
                        years) have delivered inflation-beating returns ranging
                        between 12%–15% p.a.
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
                    Start Building Long-Term Wealth Today
                  </Typography>
                  <Typography variant="b2" className="text-gray-300 mb-6 block">
                    Calculate your SIP returns and start your mutual fund
                    journey with{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/mutual-fund/sip"
                      className="text-blue-400 hover:underline"
                    >
                      Money King Financial Services
                    </NextLink>{" "}
                    now.
                  </Typography>

                  <div className="flex flex-wrap gap-4 mt-2">
                    <NextLink
                      href="https://moneykingfinancial.com/services/mutual-fund/sip"
                      className="inline-block bg-blue-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-700 transition"
                    >
                      Calculate SIP Returns Now
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

export default Blog127;
