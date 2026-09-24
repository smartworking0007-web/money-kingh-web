"use client";

import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export const Blog111: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-full flex justify-center px-4"
        >
          <BlogCard1
            title="Stock Market for Beginners: Complete Guide to Investing & Building Wealth"
            category="STOCK MARKET"
            author="Kishan Baranwal"
            date="September 24, 2026"
            image="/images/blog/Blog-111.jpg"
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
                    src="/images/blog/Blog-111.jpg"
                    alt="Stock market for beginners guide"
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
                    href="https://moneykingfinancial.com/services/stock/mstock"
                    className="text-[#1e3a8a] hover:underline"
                  >
                    Stock Market for Beginners
                  </NextLink>
                  : Complete Guide to Investing &amp; Building Wealth
                </Typography>

                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                  <Clock size={16} />
                  <Typography variant="b2">September 24, 2026</Typography>
                  <span className="mx-2">•</span>
                  <Typography variant="b2">By Kishan Baranwal</Typography>
                </div>

                {/* Blog Article Body */}
                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                  {/* Featured Snippet Box */}
                  <div className="bg-slate-50 border-l-4 border-[#1e3a8a] p-4 rounded-r-lg">
                    <p className="text-gray-700 italic m-0">
                      To start investing in the stock market in India, individual investors need to open a Demat and Trading account with a SEBI-registered stockbroker, link their bank account, and complete paperless digital KYC verification. By investing in publicly traded companies listed on the NSE or BSE, investors can build wealth through long-term capital appreciation, regular dividend payouts, and the power of compound returns. Explore more options via{" "}
                      <NextLink
                        href="https://moneykingfinancial.com/services/stock/mstock"
                        className="text-blue-600 font-semibold hover:underline"
                      >
                        Money King Financial Stock Services
                      </NextLink>.
                    </p>
                  </div>

                  <p>
                    The stock market is one of the most powerful instruments for beating inflation and creating long-term wealth. However, for many beginners, market terms like Sensex, Nifty, intraday trading, and market volatility can feel overwhelming.
                  </p>

                  <p>
                    Understanding how the equity market works and adopting a disciplined investment strategy helps eliminate fear and builds financial confidence. Here is a step-by-step guide on how the stock market operates in India, essential concepts to master, and smart strategies for beginner investors.
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    How Does the Stock Market Work in India?
                  </h2>
                  <p>
                    When a business wants to raise capital to scale operations, build new facilities, or clear debt, it issues shares to the public via an Initial Public Offering (IPO). Once listed, these shares are traded daily between buyers and sellers on stock exchanges.
                  </p>

                  <h3 className="text-lg font-bold text-gray-800 pt-2">
                    1. Key Stock Exchanges
                  </h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>National Stock Exchange (NSE):</strong> India&apos;s leading stock exchange, home to the benchmark index Nifty 50.
                    </li>
                    <li>
                      <strong>Bombay Stock Exchange (BSE):</strong> Asia’s oldest stock exchange, home to the benchmark index Sensex.
                    </li>
                  </ul>

                  <h3 className="text-lg font-bold text-gray-800 pt-2">
                    2. Regulatory Oversight
                  </h3>
                  <p>
                    All market activities, stockbrokers, and listed corporations in India are strictly regulated by the Securities and Exchange Board of India (SEBI) to protect retail investors from fraud and unfair practices.
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Step-by-Step Guide to Start Investing
                  </h2>
                  <p>
                    Getting started in the stock market today is 100% paperless and digital. Make sure to <NextLink href="https://moneykingfinancial.com/services/stock/mstock" className="text-blue-600 font-semibold hover:underline">Open Demat Account Online</NextLink> using the following steps:
                  </p>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Open a Demat &amp; Trading Account:</strong> A Demat account holds your shares in electronic form, while a Trading account enables buying and selling transactions.
                    </li>
                    <li>
                      <strong>Complete KYC Verification:</strong> Submit your PAN Card, [Aadhaar Redacted], bank statement, and a cancelled cheque for instant online verification.
                    </li>
                    <li>
                      <strong>Link Your Bank Account:</strong> Connect your primary savings account for seamless fund transfers via UPI or Net Banking.
                    </li>
                    <li>
                      <strong>Start Small with Index Funds or Blue-Chip Stocks:</strong> Begin your investment journey with well-established companies or low-cost Nifty 50 Index Mutual Funds before attempting direct stock picking.
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Key Investment Strategies for Beginners
                  </h2>
                  <p>
                    To minimize market risk and achieve stable financial returns according to the best equity investment guide principles, keep these fundamental guidelines in mind:
                  </p>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Diversify Your Portfolio:</strong> Never invest all your capital into a single stock or sector. Spread funds across finance, IT, consumer goods, and healthcare sectors for robust diversified portfolio management.
                    </li>
                    <li>
                      <strong>Invest for the Long Term:</strong> Short-term stock market prices fluctuate due to news and market sentiment. Long-term stock performance follows the underlying growth and profitability of the company.
                    </li>
                    <li>
                      <strong>Avoid Emotional Trading:</strong> Base buy/sell decisions on company fundamentals, financial earnings reports, and valuation rather than tips or fear of missing out (FOMO).
                    </li>
                    <li>
                      <strong>Use SIP for Consistency:</strong> If you prefer automated, disciplined investing without timing the market, set up a monthly Systematic Investment Plan (SIP) in Equity Mutual Funds to harness share market compounding power.
                    </li>
                  </ul>

                  {/* FAQ Section */}
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                    <h2 className="text-[#1e3a8a] text-xl font-bold mb-4 flex items-center gap-2">
                      <HelpCircle size={20} /> Frequently Asked Questions (FAQ)
                    </h2>
                    <ul className="space-y-4">
                      <li>
                        <strong>
                          Q1: What is the minimum amount needed to start investing in the stock market?
                        </strong>
                        <br />There is no fixed minimum limit. You can start investing in the stock market by purchasing a single share of a company or starting a mutual fund SIP with as little as ₹100 to ₹500 per month.
                      </li>
                      <li>
                        <strong>
                          Q2: What is the difference between direct stock investing and Mutual Funds?
                        </strong>
                        <br />
                        Direct stock investing involves buying individual company shares directly through your Demat account, requiring research and active monitoring. Mutual Funds pool money from multiple investors to buy a diversified basket of stocks managed by professional fund managers.
                      </li>
                      <li>
                        <strong>
                          Q3: Can I lose money in the stock market?
                        </strong>
                        <br />
                        Yes, stock market prices fluctuate daily based on market supply, demand, and economic conditions. However, staying invested in fundamental blue-chip stocks or diversified index funds for 5 to 10+ years significantly reduces the risk of long-term losses.
                      </li>
                      <li>
                        <strong>
                          Q4: Is trading the same as investing?
                        </strong>
                        <br />
                        No. Trading involves buying and selling stocks over short horizons (minutes, hours, or days) to profit from rapid price movements. Investing involves buying quality shares and holding them for years to benefit from company growth, dividends, and compounding.
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
                    Ready to Start Your Equity Investment Journey?
                  </Typography>
                  <Typography variant="b2" className="text-gray-300 mb-6 block">
                    Trade safely with SEBI regulated stock brokers and experience seamless digital account opening with{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/stock/mstock"
                      className="text-blue-400 hover:underline"
                    >
                      Money King Financial
                    </NextLink>{" "}
                    today.
                  </Typography>

                  <div className="flex flex-wrap gap-4 mt-2">
                    <NextLink
                      href="https://moneykingfinancial.com/services/stock/mstock"
                      className="inline-block bg-blue-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-700 transition"
                    >
                      Open Demat Account Online
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