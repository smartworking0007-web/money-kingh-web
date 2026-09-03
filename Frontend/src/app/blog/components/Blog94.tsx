"use client";

import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export const Blog94: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-full flex justify-center px-4"
        >
          <BlogCard1
            title="Private Banking vs. Wealth Management: Key Differences & Which Is Right for You in 2026"
            category="WEALTH"
            author="Sumit Mishra"
            date="September 3, 2026"
            image="/images/blog/blog-94.jpeg"
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
                  src="/images/blog/blog-94.jpeg"
                  alt="private bank vs financial"
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
                  Private Banking vs. Wealth Management: Key Differences &amp; Which Is Right for You in 2026
                </Typography>

                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                  <Clock size={16} />
                  <Typography variant="b2">September 3, 2026</Typography>
                </div>

                {/* Blog Article Body */}
                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                  {/* Featured Snippet Box */}
                  <div className="bg-slate-50 border-l-4 border-[#1e3a8a] p-4 rounded-r-lg">
                    <p className="text-gray-700 italic m-0">
                      The primary difference between private banking and wealth management lies in their scope of service. Private banking focuses on customized banking and credit solutions—such as high-value jumbo loans, preferred interest rates, and specialized deposit accounts—offered by major banks to High-Net-Worth Individuals (HNWIs). Conversely, wealth management is a comprehensive financial advisory strategy focused on long-term wealth accumulation, investment portfolio growth, estate planning, and tax optimization.
                    </p>
                  </div>

                  <p>
                    As your personal net worth grows, standard retail banking services no longer meet your complex financial needs. Managing significant capital requires specialized financial attention, leading many High-Net-Worth Individuals (HNWIs) to explore{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      Private Banking
                    </NextLink>{" "}
                    and Wealth Management.
                  </p>

                  <p>
                    While these terms are frequently used interchangeably, they address completely different aspects of your financial life. Understanding the distinction between private banking and wealth management ensures you select the right financial partner to preserve, grow, and transfer your assets seamlessly.
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    1. What Is Private Banking?
                  </h2>
                  <p>
                    Private Banking is a VIP banking service offered by financial institutions exclusively to wealthy clients. It provides personalized, high-touch banking solutions managed by a dedicated Private Banker.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Core Focus:</strong> Cash management, liquidity, custom lending, and everyday banking concierge services.
                    </li>
                    <li>
                      <strong>Specialized Credit:</strong> Access to high-value collateralized loans, customized jumbo mortgages, and margin financing at preferential interest rates.
                    </li>
                    <li>
                      <strong>Perks &amp; Privileges:</strong> Waived transaction fees, higher transfer limits, multi-currency accounts, and exclusive lifestyle concierge perks.
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    2. What Is Wealth Management?
                  </h2>
                  <p>
                    Wealth Management is a holistic, long-term financial advisory service that encompasses all aspects of an individual’s financial picture. A Wealth Manager acts as a central financial strategist.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Core Focus:</strong> Portfolio construction, capital growth, risk management, and intergenerational wealth preservation.
                    </li>
                    <li>
                      <strong>Comprehensive Advisory:</strong> Combines investment management, retirement planning, tax optimization, and estate/trust planning into a single unified plan.
                    </li>
                    <li>
                      <strong>Holistic Approach:</strong> Integrates real estate assets, business equities, alternative investments, and liquid assets into one master roadmap.
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Direct Comparison: Private Banking vs. Wealth Management
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-200">
                      <thead>
                        <tr className="bg-gray-100 text-left">
                          <th className="border p-2">Parameter</th>
                          <th className="border p-2">Private Banking</th>
                          <th className="border p-2">Wealth Management</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-2 font-bold">Primary Goal</td>
                          <td className="border p-2">Liquidity management &amp; custom lending</td>
                          <td className="border p-2 font-semibold text-green-600">
                            Long-term wealth accumulation &amp; growth
                          </td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">Key Service</td>
                          <td className="border p-2">Premium deposit accounts &amp; jumbo loans</td>
                          <td className="border p-2 font-semibold text-green-600">
                            Portfolio management &amp; estate planning
                          </td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">Primary Advisor</td>
                          <td className="border p-2">Dedicated Private Banker</td>
                          <td className="border p-2 font-semibold text-green-600">
                            Wealth Manager / Financial Advisor
                          </td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">Asset Focus</td>
                          <td className="border p-2">Cash, currency, and credit facilities</td>
                          <td className="border p-2 font-semibold text-green-600">
                            Equities, debt, real estate, and private equity
                          </td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">Entry Threshold</td>
                          <td className="border p-2">Typically lower (e.g., $250k–$500k liquidity)</td>
                          <td className="border p-2 font-semibold text-green-600">
                            Typically higher (e.g., $1M+ in investable assets)
                          </td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">Tax &amp; Estate Help</td>
                          <td className="border p-2">Basic guidance / Referrals</td>
                          <td className="border p-2 font-semibold text-green-600">
                            Comprehensive, hands-on strategic planning
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
                        <strong>Q: Can a person use both private banking and wealth management?</strong>
                        <br />
                        A: Yes. Many High-Net-Worth Individuals utilize Private Banking for day-to-day liquidity, specialized loans, and treasury operations, while retaining an independent Wealth Manager to oversee long-term investment portfolios and estate planning.
                      </li>
                      <li>
                        <strong>Q: What is the typical minimum net worth requirement for private banking?</strong>
                        <br />
                        A: While entry bars vary by institution, most private banking arms require a minimum deposit or liquid relationship balance ranging from ₹50 Lakhs to ₹2+ Crores (or $250,000 to $500,000 internationally).
                      </li>
                      <li>
                        <strong>Q: Does wealth management guarantee portfolio returns?</strong>
                        <br />
                        A: No. Wealth management involves market-linked investments (stocks, bonds, mutual funds, real estate), which carry inherent market risks. However, professional wealth managers use asset diversification and risk-hedging strategies to protect and grow capital over time. Explore holistic planning options via our{" "}
                        <NextLink
                          href="https://moneykingfinancial.com/"
                          className="text-blue-600 font-bold hover:underline"
                        >
                          financial portal
                        </NextLink>{" "}
                        to optimize your asset allocation.
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
                    Optimize Your Wealth &amp; Secure Tailored Advisory Today!
                  </Typography>
                  <Typography variant="b2" className="text-gray-300 mb-6 block">
                    Connect with certified wealth managers and private credit specialists at Money King Financial Services to preserve and accelerate your portfolio growth.
                  </Typography>

                  <NextLink
                    href="https://moneykingfinancial.com/services"
                    className="inline-block bg-red-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-red-700 transition"
                  >
                    Explore Wealth Advisory Services
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