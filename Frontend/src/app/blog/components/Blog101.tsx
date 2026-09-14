"use client";

import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export const Blog101: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-full flex justify-center px-4"
        >
          <BlogCard1
            title="How to Open a FREE Demat Account with Zero Delivery Brokerage Forever: Step-by-Step Guide"
            category="STOCKS"
            author="Sumit Mishra"
            date="September 11, 2026"
            image="/images/blog/blog-101.jpeg"
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
                  src="/images/blog/blog-101.jpeg"
                  alt="demat account open"
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
                  How to Open a FREE{" "}
                  <NextLink
                    href="https://moneykingfinancial.com/services/stock/mstock"
                    className="text-[#1e3a8a] hover:underline"
                  >
                    Demat Account
                  </NextLink>{" "}
                  with Zero Delivery Brokerage Forever: Step-by-Step Guide
                </Typography>

                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                  <Clock size={16} />
                  <Typography variant="b2">September 11, 2026</Typography>
                </div>

                {/* Blog Article Body */}
                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                  {/* Featured Snippet Box */}
                  <div className="bg-slate-50 border-l-4 border-[#1e3a8a] p-4 rounded-r-lg">
                    <p className="text-gray-700  m-0">
                      To open a free Demat account with zero delivery brokerage, apply online by entering your mobile number, completing paperless digital KYC, and uploading basic identity documents like PAN card, Aadhaar, and bank account details. Investors can trade with zero account opening fees, zero Annual Maintenance Charges (AMC), ₹0 brokerage on equity delivery, IPOs, ETFs, and mutual funds, alongside flat ₹5 low brokerage for Intraday, Futures &amp; Options (F&amp;O), and Margin Trading Facility (MTF).
                    </p>
                  </div>

                  <p>
                    Investing in the stock market is one of the most effective ways to build wealth over the long term. However, high trading charges, hidden account opening fees, and recurring Annual Maintenance Charges (AMC) can significantly eat into your total profits. Whether you are a beginner taking your first step into equity investing or an experienced trader executing frequent intraday orders, selecting a cost-effective trading platform is crucial.
                  </p>

                  <p>
                    With modern digital stock trading platforms, opening a{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/stock/mstock"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      Demat and trading account
                    </NextLink>{" "}
                    has become entirely paperless, instant, and transparent. Here is everything you need to know about opening a free Demat account with zero delivery charges and minimal brokerage fees.
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Why Choose a Zero Delivery Brokerage Demat Account?
                  </h2>
                  <p>
                    Traditional brokerage models charge a percentage of your total trade value every time you buy or sell stocks. Over time, these transaction fees substantially reduce your net returns.
                  </p>
                  <p>
                    A zero-delivery Demat account eliminates trading costs on long-term equity holdings. When you buy shares and hold them in your account overnight, you pay ₹0 brokerage.
                  </p>

                  <h3 className="text-lg font-bold text-gray-800 pt-2">
                    Key Benefits:
                  </h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Zero Account Opening Fee:</strong> Start your investment journey without paying any upfront registration charges.
                    </li>
                    <li>
                      <strong>Zero AMC Charges:</strong> Pay no recurring annual account maintenance fees.
                    </li>
                    <li>
                      <strong>₹0 Brokerage on Equity Delivery:</strong> Keep 100% of your long-term stock capital gains without paying delivery commissions.
                    </li>
                    <li>
                      <strong>Flat ₹5 Brokerage:</strong> Execute Intraday, Futures &amp; Options (F&amp;O), and Margin Trading Facility (MTF) trades at an ultra-low flat charge of just ₹5 per order.
                    </li>
                    <li>
                      <strong>Zero Commission on Mutual Funds &amp; IPOs:</strong> Invest directly in initial public offerings (IPOs), exchange-traded funds (ETFs), and mutual funds without additional fees.
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Key Features of a Superfast Trading Platform
                  </h2>
                  <p>
                    In fast-moving financial markets, platform execution speed and reliability matter as much as low pricing. A modern trading portal offers:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Lightning-Fast Execution:</strong> Real-time price tracking and instant order placement for high-frequency traders.
                    </li>
                    <li>
                      <strong>Seamless Margin Trading Facility (MTF):</strong> Access additional leverage for market trades at highly competitive rates.
                    </li>
                    <li>
                      <strong>Advanced Charting Tools:</strong> Technical indicators, real-time depth charts, and custom watchlists to analyze market movements.
                    </li>
                    <li>
                      <strong>All-in-One Dashboard:</strong> Manage equity investments, derivative trades, IPO subscriptions, and direct mutual fund portfolios from a single screen.
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Step-by-Step Guide to Opening Your Demat Account Online
                  </h2>
                  <p>Opening an account takes less than 5 minutes through an automated digital process:</p>
                  <ul className="list-disc pl-6 space-y-3">
                    <li>
                      <strong>Step 1: Submit Your Mobile Number</strong>
                      <br />
                      Visit the official{" "}
                      <NextLink
                        href="https://moneykingfinancial.com/services/stock/mstock"
                        className="text-blue-600 font-semibold hover:underline"
                      >
                        registration page
                      </NextLink>
                      , enter your active mobile number linked with your Aadhaar card, and verify it via OTP.
                    </li>
                    <li>
                      <strong>Step 2: Complete Digital KYC Verification</strong>
                      <br />
                      Upload digital copies or verify through Digilocker:
                      <ul className="list-circle pl-6 mt-1 space-y-1">
                        <li>
                          <strong>PAN Card:</strong> Essential for tax identification and regulatory compliance.
                        </li>
                        <li>
                          <strong>Aadhaar Card:</strong> Used for paperless e-signing and address verification.
                        </li>
                        <li>
                          <strong>Bank Account Details:</strong> Passbook copy or cancelled cheque to link your trading account for smooth fund transfers.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Step 3: Perform Quick Video Verification</strong>
                      <br />
                      Complete a short 15-second webcam/mobile camera verification to confirm identity authenticity.
                    </li>
                    <li>
                      <strong>Step 4: Digital E-Sign &amp; Account Activation</strong>
                      <br />
                      Sign your digital account opening form using Aadhaar-based OTP authentication. Once verified, your trading credentials will be sent to your registered email address within a few hours.
                    </li>
                  </ul>

                  {/* FAQ Section */}
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                    <h2 className="text-[#1e3a8a] text-xl font-bold mb-4 flex items-center gap-2">
                      <HelpCircle size={20} /> Frequently Asked Questions (FAQ)
                    </h2>
                    <ul className="space-y-4">
                      <li>
                        <strong>Q1: Is the Demat account opening really free?</strong>
                        <br />
                        Yes, there are ₹0 account opening charges and ₹0 Annual Maintenance Charges (AMC).
                      </li>
                      <li>
                        <strong>Q2: Are there any hidden delivery charges on stock investments?</strong>
                        <br />
                        No, equity delivery trades attract ₹0 brokerage forever. Only standard statutory government taxes (like STT, exchange turnover charges, and GST) apply as mandated by SEBI.
                      </li>
                      <li>
                        <strong>Q3: What are the brokerage charges for Intraday and F&amp;O trading?</strong>
                        <br />
                        Intraday, Futures &amp; Options (F&amp;O), and Margin Trading Facility (MTF) orders are charged at a flat rate of just ₹5 per executed order.
                      </li>
                      <li>
                        <strong>Q4: Which documents are required to open a Demat account?</strong>
                        <br />
                        You need a PAN card, Aadhaar card (linked with your mobile number for OTP), bank account details, and a signature copy. Income proof (like 6 months&apos; bank statement) is only required if you wish to activate the F&amp;O derivative segment.
                      </li>
                      <li>
                        <strong>Q5: Can I invest in Mutual Funds and IPOs through this account?</strong>
                        <br />
                        Yes, you can apply for upcoming IPOs and invest in direct mutual funds and ETFs with zero brokerage fees through the{" "}
                        <NextLink
                          href="https://moneykingfinancial.com/services/stock/mstock"
                          className="text-blue-600 font-bold hover:underline"
                        >
                          m.Stock platform
                        </NextLink>
                        .
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
                    Open Your Free Demat Account &amp; Save Brokerage Forever!
                  </Typography>
                  <Typography variant="b2" className="text-gray-300 mb-6 block">
                    Enjoy zero delivery brokerage, zero AMC, and trade Intraday &amp; F&amp;O at just flat ₹5 with Money King Financial Services.
                  </Typography>

                  <NextLink
                    href="https://moneykingfinancial.com/services/stock/mstock"
                    className="inline-block bg-red-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-red-700 transition"
                  >
                    Open Free Demat Account Now
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