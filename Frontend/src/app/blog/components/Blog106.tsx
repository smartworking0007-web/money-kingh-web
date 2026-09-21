"use client";

import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export const Blog106: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-full flex justify-center px-4"
        >
          <BlogCard1
            title="Stock Market for Minors: A Complete Guide to Investing for Kids & Teens"
            category="STOCKS"
            author="Kishan Baranwal"
            date="September 18, 2026"
            image="/images/blog/Blog106.jpeg"
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
              {/* Image Container - Adjusted width and height matching natural square image ratio without unnecessary side padding */}
              <div className="w-full flex justify-center bg-white py-4">
                <div className="relative w-full max-w-xl aspect-square rounded-xl overflow-hidden shadow-sm border border-gray-100">
                  <Image
                    src="/images/blog/Blog106.jpeg"
                    alt="Stock Market for Minors"
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
                  Stock Market for Minors: A Complete Guide to Investing for Kids & Teens
                </Typography>

                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                  <Clock size={16} />
                  <Typography variant="b2">September 18, 2026</Typography>
                </div>

                {/* Blog Article Body */}
                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                  {/* Featured Snippet Box */}
                  <div className="bg-slate-50 border-l-4 border-[#1e3a8a] p-4 rounded-r-lg">
                    <p className="text-gray-700 italic m-0">
                      In India, a minor (under 18 years of age) can invest in the stock market through a custodial Demat account operated by a parent or legal guardian. While minors cannot directly engage in intraday trading or derivative contracts (F&amp;O), they can build long-term wealth by holding equity shares, Mutual Funds, and ETFs until they reach adulthood.
                    </p>
                  </div>

                  <p>
                    Financial literacy is one of the most valuable life skills a parent can impart to a child. Introducing teenagers and kids to the stock market early helps them grasp fundamental financial concepts like inflation, compounding, and value creation.
                  </p>

                  <p>
                    While the stock market might seem complex, modern digital platforms make it simple for parents to set up investment accounts for their children. Here is a complete guide on how minors can legally invest in the stock market, account restrictions, and strategies for building long-term wealth.
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Can a Minor Invest in the Stock Market in India?
                  </h2>
                  <p>
                    Yes, a minor can legally hold stocks and mutual fund units in India. Under the rules set by the Securities and Exchange Board of India (SEBI), a minor cannot independently open or operate a Demat account. Instead, the account is opened under the minor’s name and managed by a parent or natural guardian until the child turns 18.
                  </p>

                  <h3 className="text-lg font-bold text-gray-800 pt-2">
                    Key Features of a Minor Demat Account:
                  </h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Account Ownership:</strong> The Demat account is held in the minor&apos;s name using their PAN card.
                    </li>
                    <li>
                      <strong>Guardian Control:</strong> The legal guardian manages all buy/sell transactions until the minor reaches adulthood.
                    </li>
                    <li>
                      <strong>Investment Scope:</strong> Minors can invest in equity delivery (long-term stock holding), Mutual Funds, SIPs, and ETFs.
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    What Minors Can and Cannot Do in the Stock Market
                  </h2>
                  <p>
                    To protect young investors, SEBI and stock exchanges enforce strict operational rules on minor accounts:
                  </p>

                  <h3 className="text-lg font-bold text-gray-800 pt-2">
                    Permitted Investments:
                  </h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Buying shares for long-term delivery.</li>
                    <li>Investing in equity, debt, or index Mutual Funds.</li>
                    <li>Holding Sovereign Gold Bonds (SGBs) and Exchange Traded Funds (ETFs).</li>
                  </ul>

                  <h3 className="text-lg font-bold text-gray-800 pt-2">
                    Restricted Activities:
                  </h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>No Intraday Trading:</strong> Minors cannot buy and sell stocks on the same day.
                    </li>
                    <li>
                      <strong>No Futures &amp; Options (F&amp;O):</strong> Trading in complex financial derivatives is strictly prohibited.
                    </li>
                    <li>
                      <strong>No Margin Trading:</strong> Minors cannot borrow funds or trade on margin leverage.
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Benefits of Starting Stock Market Investment Early
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Power of Compounding:</strong> Time is the biggest advantage for a young investor. Small monthly investments started at age 12 or 15 can grow exponentially over 10 to 20 years.
                    </li>
                    <li>
                      <strong>Practical Financial Education:</strong> Learning about company earnings, business models, and market cycles prepares teens to handle personal finances responsibly as adults.
                    </li>
                    <li>
                      <strong>Building Capital for Future Goals:</strong> Equity investments made during childhood can fund higher education, studying abroad, or starting a business upon turning 18.
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Documents Required to Open a Minor Demat Account
                  </h2>
                  <p>
                    Keep digital scans of the following documents ready:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Minor&apos;s Documents:</strong> Birth Certificate, Aadhaar Card, and PAN Card.
                    </li>
                    <li>
                      <strong>Guardian&apos;s Documents:</strong> Aadhaar Card, PAN Card, Address Proof, and Bank Details.
                    </li>
                    <li>
                      <strong>Bank Proof:</strong> Cancelled cheque or bank statement showing the minor’s bank account (linked with the guardian).
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    What Happens When the Minor Turns 18?
                  </h2>
                  <p>
                    When the minor completes 18 years of age, the custodial account is temporarily frozen until a status conversion process is completed:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>The account transitions from a Minor Account to a Major Demat Account.</li>
                    <li>Fresh KYC verification is conducted with the individual’s own adult signatures, bank details, and updated documents.</li>
                    <li>Full independent control of the portfolio and trading features is handed over to the young adult.</li>
                  </ul>

                  {/* FAQ Section */}
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                    <h2 className="text-[#1e3a8a] text-xl font-bold mb-4 flex items-center gap-2">
                      <HelpCircle size={20} /> Frequently Asked Questions (FAQ)
                    </h2>
                    <ul className="space-y-4">
                      <li>
                        <strong>Q1: Can a 15-year-old buy stocks in India?</strong>
                        <br />
                        Yes, a 15-year-old can hold stocks in a Minor Demat Account opened and managed on their behalf by a parent or legal guardian.
                      </li>
                      <li>
                        <strong>Q2: Is a separate bank account required for a minor&apos;s Demat account?</strong>
                        <br />
                        Yes, the Demat account must be linked to a bank account held in the minor&apos;s name (either a minor bank account or a joint account with the guardian).
                      </li>
                      <li>
                        <strong>Q3: How are profits from a minor&apos;s stock investments taxed?</strong>
                        <br />
                        Capital gains and dividends earned from a minor&apos;s investments are clubbed with the income of the parent whose income is higher, as per Indian Income Tax laws (Section 64(1A)).
                      </li>
                      <li>
                        <strong>Q4: Can a minor do intraday trading or F&amp;O?</strong>
                        <br />
                        No, regulatory guidelines prohibit minor accounts from engaging in intraday trading, short selling, or speculative trading in Futures &amp; Options.
                      </li>
                    </ul>
                  </div>
                </article>

                {/* Call To Action Banner */}
                <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[40px] md:rounded-[48px] mt-10">
                  <Typography
                    variant="h5"
                    className="text-blue-400 uppercase mb-3 font-bold"
                  >
                    Start Your Child&apos;s Investment Journey Today!
                  </Typography>
                  <Typography variant="b2" className="text-gray-300 mb-6 block">
                    Build a secure financial future for the next generation. Learn more about custodial demat accounts and expert investment guidance with Money King Financial Services.
                  </Typography>

                  <div className="flex flex-wrap gap-4 mt-2">
                    <NextLink
                      href="https://moneykingfinancial.com/"
                      className="inline-block bg-blue-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-700 transition"
                    >
                      Visit Portal
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