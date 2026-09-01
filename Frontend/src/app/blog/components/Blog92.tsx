"use client";

import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export const Blog92: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-full flex justify-center px-4"
        >
          <BlogCard1
            title="Lump Sum Investment Strategy: How to Invest One-Time Surplus Capital for Maximum Growth"
            category="MUTUAL FUNDS"
            author="Sumit Mishra"
            date="September 1, 2026"
            image="/images/blog/blog-92.png"
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
                  src="/images/blog/blog-92.png"
                  alt="lumpsum investment"
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
                  <NextLink
                    href="https://moneykingfinancial.com/services/mutual-fund/lumpsum"
                    className="text-[#1e3a8a] hover:underline"
                  >
                    Lump Sum
                  </NextLink>{" "}
                  Investment Strategy: How to Invest One-Time Surplus Capital for Maximum Growth
                </Typography>

                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                  <Clock size={16} />
                  <Typography variant="b2">September 1, 2026</Typography>
                </div>

                {/* Blog Article Body */}
                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                  <p>
                    A{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/mutual-fund/lumpsum"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      lump sum investment
                    </NextLink>{" "}
                    is a financial strategy where an investor deploys their entire surplus capital
                    in a single transaction into a mutual fund, stock, or fixed-income security,
                    rather than spreading it out over time. It is ideal for individuals receiving a
                    windfall—such as an annual bonus, property sale proceeds, or maturity payouts.
                    Because 100% of the principal compounds from Day 1,{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/mutual-fund/lumpsum"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      lump sum investments
                    </NextLink>{" "}
                    can yield higher long-term returns during bullish or recovering market cycles.
                  </p>

                  <p>
                    Receiving a substantial sum of money—whether through an annual corporate bonus,
                    inheritance, business profit, or an asset sale—presents a huge wealth-building
                    opportunity. However, deciding how to deploy that money effectively can be
                    challenging.
                  </p>

                  <p>
                    Should you invest the entire amount at once via a{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/mutual-fund/lumpsum"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      Lump Sum Investment
                    </NextLink>
                    , or break it down into monthly contributions via a{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/mutual-fund/sip"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      SIP
                    </NextLink>
                    ? While market volatility makes investors cautious, deploying lump sum capital
                    correctly allows your money to harness the full power of long-term market
                    compounding.
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    What Is a Lump Sum Investment?
                  </h2>
                  <p>
                    A{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/mutual-fund/lumpsum"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      lump sum investment
                    </NextLink>{" "}
                    means committing your entire available funds into a selected financial instrument
                    at one go.
                  </p>
                  <p>
                    Unlike a{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/mutual-fund/sip"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      Systematic Investment Plan (SIP)
                    </NextLink>
                    —which spreads investments into smaller, recurring monthly installments—a lump
                    sum immediately assigns all your capital to purchase mutual fund units based on
                    the prevailing Net Asset Value (NAV) on that day.
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Top Benefits of Lump Sum Investing
                  </h2>

                  <h3 className="text-lg font-bold text-gray-800 pt-2">
                    1. Maximum Time in the Market (Full Compounding Power)
                  </h3>
                  <p>
                    In investing, time in the market is critical. When you invest a lump sum, 100%
                    of your principal starts earning returns and compounding immediately, giving
                    your portfolio a substantial head start compared to staggered investments.
                  </p>

                  <h3 className="text-lg font-bold text-gray-800 pt-2">
                    2. High Outperformance During Bull Markets
                  </h3>
                  <p>
                    In a rising market, buying all your fund units early locks in lower unit
                    prices. A{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/mutual-fund/lumpsum"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      lump sum
                    </NextLink>{" "}
                    avoids the risk of buying subsequent units at progressively higher valuations,
                    leading to higher overall wealth generation.
                  </p>

                  <h3 className="text-lg font-bold text-gray-800 pt-2">
                    3. Lower Transaction &amp; Administrative Hassle
                  </h3>
                  <p>
                    Deploying a single chunk of capital simplifies portfolio tracking. You don&apos;t
                    have to monitor recurring bank deductions or maintain minimum balances every month
                    for automated SIP mandates.
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    The Risk Factor: Market Timing Sensitivity
                  </h2>
                  <p>
                    The main drawdown of a lump sum investment is Market Timing Risk. If you invest
                    a large amount right before a major market correction, your portfolio value will
                    take a sharp temporary hit.
                  </p>

                  {/* Flow Diagram */}
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-center font-mono text-sm text-gray-700 my-6">
                    <p className="font-semibold text-gray-800">
                      [ Market at Peak ] ──&gt; Lump Sum Deployed ──&gt; Market Correction ──&gt; Temporary Portfolio Loss
                    </p>
                    <p className="text-blue-600 font-bold my-1">│</p>
                    <p className="font-bold text-blue-900">
                      [ Solution: Use STP ] ◄───────────────────────────────────────────────────────┘
                    </p>
                  </div>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    The Smart Alternative: Systematic Transfer Plan (STP)
                  </h2>
                  <p>
                    If you hold a large lump sum but fear near-term market volatility:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Park the entire lump sum in a low-risk Liquid or Ultra-Short Term Debt Fund.
                    </li>
                    <li>
                      Set up an STP (Systematic Transfer Plan) to automatically transfer fixed amounts
                      every week or month into a high-growth Equity Mutual Fund over a 6 to 12-month
                      horizon.
                    </li>
                    <li>
                      This preserves your capital while capturing the full benefit of Rupee Cost
                      Averaging.
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Comparison: Lump Sum vs. SIP Investment
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-200">
                      <thead>
                        <tr className="bg-gray-100 text-left">
                          <th className="border p-2">Feature / Parameter</th>
                          <th className="border p-2">
                            <NextLink
                              href="https://moneykingfinancial.com/services/mutual-fund/lumpsum"
                              className="text-blue-600 font-semibold hover:underline"
                            >
                              Lump Sum Investment
                            </NextLink>
                          </th>
                          <th className="border p-2">
                            <NextLink
                              href="https://moneykingfinancial.com/services/mutual-fund/sip"
                              className="text-blue-600 font-semibold hover:underline"
                            >
                              Systematic Investment Plan (SIP)
                            </NextLink>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-2 font-bold">Capital Requirement</td>
                          <td className="border p-2">Large one-time upfront amount</td>
                          <td className="border p-2">Small regular periodic amounts</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">Market Timing Risk</td>
                          <td className="border p-2">High (sensitive to entry valuation)</td>
                          <td className="border p-2 font-semibold text-green-600">
                            Very Low (averages out market volatility)
                          </td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">Compounding Start</td>
                          <td className="border p-2 font-semibold text-green-600">
                            100% capital compounds from Day 1
                          </td>
                          <td className="border p-2">Capital enters and compounds gradually</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">Ideal Market Condition</td>
                          <td className="border p-2">Market corrections / Sideways markets</td>
                          <td className="border p-2">All-time highs / Volatile markets</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">Best Suited For</td>
                          <td className="border p-2">Bonuses, property sales, inheritances</td>
                          <td className="border p-2">Salaried individuals with monthly savings</td>
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
                        <strong>
                          Q: When is the best time to make a{" "}
                          <NextLink
                            href="https://moneykingfinancial.com/services/mutual-fund/lumpsum"
                            className="text-blue-600 hover:underline"
                          >
                            lump sum investment
                          </NextLink>
                          ?
                        </strong>
                        <br />
                        A: The ideal time for a lump sum deployment is after a market correction or
                        healthy pullback, when fund NAVs are lower and underlying asset valuations
                        are attractive.
                      </li>
                      <li>
                        <strong>
                          Q: Can I redeem a{" "}
                          <NextLink
                            href="https://moneykingfinancial.com/services/mutual-fund/lumpsum"
                            className="text-blue-600 hover:underline"
                          >
                            lump sum investment
                          </NextLink>{" "}
                          anytime?
                        </strong>
                        <br />
                        A: Yes, open-ended mutual funds allow you to redeem your investment anytime.
                        However, exit loads (usually 1% if redeemed within 1 year) and capital gains
                        taxes apply depending on your asset category and holding period.
                      </li>
                      <li>
                        <strong>
                          Q: How are lump sum equity mutual fund investments taxed?
                        </strong>
                        <br />
                        A: Equity mutual funds held for less than 12 months incur Short-Term Capital
                        Gains (STCG) tax. If held for more than 12 months, Long-Term Capital Gains
                        (LTCG) tax applies on profits exceeding standard statutory thresholds. Check
                        our{" "}
                        <NextLink
                          href="https://moneykingfinancial.com/"
                          className="text-blue-600 font-bold hover:underline"
                        >
                          financial portal
                        </NextLink>{" "}
                        to structure your wealth and minimize tax leakages.
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
                    Maximize Returns on Your Surplus Capital!
                  </Typography>
                  <Typography variant="b2" className="text-gray-300 mb-6 block">
                    Deploy your one-time funds into top-rated mutual funds or structure a smart
                    Systematic Transfer Plan (STP) with Money King Financial Services.
                  </Typography>

                  <div className="flex flex-wrap gap-4">
                    <NextLink
                      href="https://moneykingfinancial.com/services/mutual-fund/lumpsum"
                      className="inline-block bg-red-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-red-700 transition"
                    >
                      Invest Lumpsum Now
                    </NextLink>
                    <NextLink
                      href="https://moneykingfinancial.com/services/mutual-fund/sip"
                      className="inline-block bg-blue-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-700 transition"
                    >
                      Explore SIP Options
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