"use client";

import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export const Blog95: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-full flex justify-center px-4"
        >
          <BlogCard1
            title="SIP vs. Fixed Deposit (FD): Which Investment Strategy Delivers Better Returns (2026)"
            category="INVESTMENTS"
            author="Sumit Mishra"
            date="September 4, 2026"
            image="/images/blog/blog-95.jpeg"
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
                  src="/images/blog/blog-95.jpeg"
                  alt="sip vs fd"
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
                  SIP vs. Fixed Deposit (FD): Which Investment Strategy Delivers Better Returns (2026)
                </Typography>

                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                  <Clock size={16} />
                  <Typography variant="b2">September 4, 2026</Typography>
                </div>

                {/* Blog Article Body */}
                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                  {/* Featured Snippet Box */}
                  <div className="bg-slate-50 border-l-4 border-[#1e3a8a] p-4 rounded-r-lg">
                    <p className="text-gray-700 italic m-0">
                      The fundamental difference between a Systematic Investment Plan (
                      <NextLink
                        href="https://moneykingfinancial.com/services/mutual-fund/sip"
                        className="text-blue-600 font-semibold hover:underline"
                      >
                        SIP
                      </NextLink>
                      ) and a Fixed Deposit (FD) lies in risk and reward. A Fixed Deposit offers guaranteed, fixed interest returns backed by low risk, making it suitable for short-term capital preservation. On the other hand, a SIP invests periodically into market-linked mutual funds, offering significantly higher long-term wealth accumulation potential by leveraging compounding and rupee cost averaging to beat inflation.
                    </p>
                  </div>

                  <p>
                    When it comes to growing wealth in India, traditional options like Fixed Deposits (FDs) have long been the default choice for conservative investors. However, with rising inflation and evolving market dynamics, Systematic Investment Plans (
                    <NextLink
                      href="https://moneykingfinancial.com/services/mutual-fund/sip"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      SIP
                    </NextLink>
                    ) in mutual funds have gained massive popularity among investors seeking inflation-beating returns.
                  </p>

                  <p>
                    Should you park your hard-earned money in the safety of a Bank FD, or commit to a monthly{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/mutual-fund/sip"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      SIP
                    </NextLink>{" "}
                    in equity mutual funds? Choosing between the two depends on your risk appetite, investment horizon, and ultimate financial objectives. In this guide, we break down the critical differences to help you build an effective investment plan.
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    1. What Is a Fixed Deposit (FD)?
                  </h2>
                  <p>
                    A Fixed Deposit is a low-risk financial instrument offered by banks and Non-Banking Financial Companies (NBFCs). You deposit a lump sum amount for a fixed tenure at a predetermined interest rate.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Guaranteed Returns:</strong> The interest rate remains locked throughout the tenure, unaffected by market fluctuations.
                    </li>
                    <li>
                      <strong>Capital Safety:</strong> Offers high principal protection, with bank deposits insured up to ₹5 Lakhs under DICGC rules.
                    </li>
                    <li>
                      <strong>Fixed Income:</strong> Ideal for senior citizens or individuals seeking predictable income streams.
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    2. What Is a Systematic Investment Plan (SIP)?
                  </h2>
                  <p>
                    A Systematic Investment Plan (
                    <NextLink
                      href="https://moneykingfinancial.com/services/mutual-fund/sip"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      SIP
                    </NextLink>
                    ) is a disciplined method of investing fixed amounts regularly (weekly, monthly, or quarterly) into a chosen mutual fund scheme.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Market-Linked Returns:</strong> Invests in equity or debt markets, offering potential returns between 12%–15% p.a. over long horizons.
                    </li>
                    <li>
                      <strong>Rupee Cost Averaging:</strong> Automates buying more fund units when market prices drop and fewer units when prices rise, minimizing market-timing risk.
                    </li>
                    <li>
                      <strong>Power of Compounding:</strong> Reinvested gains compound over time, dramatically accelerating long-term wealth creation. Start early with our dedicated{" "}
                      <NextLink
                        href="https://moneykingfinancial.com/services/mutual-fund/sip"
                        className="text-blue-600 font-semibold hover:underline"
                      >
                        SIP investment solutions
                      </NextLink>{" "}
                      to harness full compound interest benefits.
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Direct Comparison: SIP vs. Fixed Deposit
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-200">
                      <thead>
                        <tr className="bg-gray-100 text-left">
                          <th className="border p-2">Feature / Parameter</th>
                          <th className="border p-2">
                            Systematic Investment Plan (
                            <NextLink
                              href="https://moneykingfinancial.com/services/mutual-fund/sip"
                              className="text-blue-600 font-semibold hover:underline"
                            >
                              SIP
                            </NextLink>
                            )
                          </th>
                          <th className="border p-2">Fixed Deposit (FD)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-2 font-bold">Return Potential</td>
                          <td className="border p-2 font-semibold text-green-600">
                            High (12%–15% historical equity average)
                          </td>
                          <td className="border p-2">Fixed &amp; Moderate (6.5%–7.5% p.a.)</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">Risk Level</td>
                          <td className="border p-2">Market-linked (Moderate to High)</td>
                          <td className="border p-2 font-semibold text-green-600">Low / Minimal Risk</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">Inflation Protection</td>
                          <td className="border p-2 font-semibold text-green-600">
                            Excellent (Beats inflation comfortably)
                          </td>
                          <td className="border p-2">
                            Poor (Often yields negative real returns after tax)
                          </td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">Liquidity &amp; Flexibility</td>
                          <td className="border p-2 font-semibold text-green-600">
                            High (Stop, pause, or withdraw anytime*)
                          </td>
                          <td className="border p-2">Premature withdrawal penalty applies</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">Taxation</td>
                          <td className="border p-2 font-semibold text-green-600">
                            Equity LTCG taxed at 12.5% above threshold limit
                          </td>
                          <td className="border p-2">
                            Interest added to income &amp; taxed as per slab
                          </td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">Investment Style</td>
                          <td className="border p-2 font-semibold text-green-600">
                            Flexible monthly automated installments
                          </td>
                          <td className="border p-2">Generally lump sum upfront commitment</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-gray-500 italic mt-1">
                    *Note: ELSS mutual funds carry a mandatory 3-year lock-in period.
                  </p>

                  {/* FAQ Section */}
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                    <h2 className="text-[#1e3a8a] text-xl font-bold mb-4 flex items-center gap-2">
                      <HelpCircle size={20} /> Frequently Asked Questions (FAQ)
                    </h2>
                    <ul className="space-y-4">
                      <li>
                        <strong>Q: Can I lose money in a SIP?</strong>
                        <br />
                        A: Since{" "}
                        <NextLink
                          href="https://moneykingfinancial.com/services/mutual-fund/sip"
                          className="text-blue-600 hover:underline"
                        >
                          SIPs
                        </NextLink>{" "}
                        invest in market-linked mutual funds, short-term portfolio values fluctuate. However, remaining invested over long periods (5+ years) significantly reduces the probability of negative returns while delivering strong real growth.
                      </li>
                      <li>
                        <strong>Q: Is FD interest taxable?</strong>
                        <br />
                        A: Yes, interest earned on Fixed Deposits is fully taxable as per your applicable income tax slab rate. Additionally, banks deduct Tax Deducted at Source (TDS) if annual interest exceeds threshold limits.
                      </li>
                      <li>
                        <strong>Q: Can I start a SIP with a small monthly amount?</strong>
                        <br />
                        A: Absolutely! Most mutual fund schemes allow you to start a{" "}
                        <NextLink
                          href="https://moneykingfinancial.com/services/mutual-fund/sip"
                          className="text-blue-600 hover:underline"
                        >
                          SIP
                        </NextLink>{" "}
                        with as little as ₹100 or ₹500 per month, making it accessible for every budget. Visit our{" "}
                        <NextLink
                          href="https://moneykingfinancial.com/"
                          className="text-blue-600 font-bold hover:underline"
                        >
                          financial portal
                        </NextLink>{" "}
                        to kickstart your wealth creation journey.
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
                    Start Your Wealth Creation Journey with SIP Today!
                  </Typography>
                  <Typography variant="b2" className="text-gray-300 mb-6 block">
                    Beat inflation and achieve your financial freedom through disciplined, goal-based mutual fund investments with Money King Financial Services.
                  </Typography>

                  <NextLink
                    href="https://moneykingfinancial.com/services/mutual-fund/sip"
                    className="inline-block bg-red-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-red-700 transition"
                  >
                    Start a Systematic Investment Plan (SIP)
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