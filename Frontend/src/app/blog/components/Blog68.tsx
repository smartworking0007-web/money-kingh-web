"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export const Blog68 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-full flex justify-center px-4"
        >
          <BlogCard1
            title="What is a Demat Account? Meaning, Features, Types, and Benefits (2026 Guide)"
            category="STOCK MARKET"
            author="Sumit Mishra"
            date="July 11, 2026"
            image="/images/blog/blog-68.jpeg"
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
                  src="/images/blog/blog-68.jpeg"
                  alt="A conceptual visual showing the flow of securities from the stock exchange"
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
                  What is a Demat Account? Meaning, Features, Types, and
                  Benefits (2026 Guide)
                </Typography>

                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                  <Clock size={16} />
                  <Typography variant="b2">July 11, 2026</Typography>
                </div>

                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                  <p>
                    In the digital age, the stock market is entirely electronic,
                    and at the heart of this revolution lies the{" "}
                    <strong>Demat Account</strong>. Short for Dematerialized,
                    it is the digital repository that holds your financial
                    securities—such as shares, bonds, mutual funds, and ETFs—in
                    a secure electronic format.
                  </p>

                  <h2>1. Demat Account vs. Trading Account</h2>
                  <p>Beginners often confuse the two:</p>
                  <ul>
                    <li>
                      <strong>Trading Account:</strong> Acts as your window to
                      the stock exchange. You use this to place buy and sell
                      orders.
                    </li>
                    <li>
                      <strong>Demat Account:</strong> Acts as a vault where
                      your purchased shares are securely stored after the trade
                      is settled.
                    </li>
                  </ul>

                  <h2>2. Types of Demat Accounts</h2>
                  <p>
                    Accounts are tailored based on residency and investor needs:
                  </p>
                  <ul>
                    <li>
                      <strong>Regular Demat Account:</strong> Standard account
                      for Indian residents.
                    </li>
                    <li>
                      <strong>Repatriable Demat Account:</strong> For NRIs
                      linked to an NRE bank account, allowing earnings to be
                      transferred abroad.
                    </li>
                    <li>
                      <strong>Non-Repatriable Demat Account:</strong> For NRIs
                      linked to an NRO bank account, where funds remain within
                      India.
                    </li>
                  </ul>

                  <h2>3. Key Features & Benefits</h2>
                  <ul>
                    <li>
                      <strong>Electronic Safety:</strong> Zero risk of physical
                      certificates being lost, stolen, or forged.
                    </li>
                    <li>
                      <strong>Real-Time Access:</strong> Track your portfolio
                      value, gains, and losses via mobile apps instantly.
                    </li>
                    <li>
                      <strong>Corporate Benefits:</strong> Dividends, bonuses,
                      and stock splits are automatically credited to your linked
                      bank/Demat account.
                    </li>
                    <li>
                      <strong>Efficient Settlements:</strong> Modern T+1
                      settlement cycles ensure trades are settled in hours, not
                      weeks.
                    </li>
                  </ul>

                  <h2>4. Security Measures</h2>
                  <p>
                    Security is paramount. Modern safeguards include{" "}
                    <strong>T-PIN/E-DIS authorization</strong>, which requires
                    an OTP for every sell order, and mandatory SMS/Email alerts
                    from NSDL/CDSL for every account activity. Your shares are
                    ultimately held by the central depository, not the broker,
                    ensuring your assets remain safe even if a brokerage faces
                    financial difficulty.
                  </p>

                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                    <h2 className="text-[#1e3a8a] text-xl font-bold mb-4 flex items-center gap-2">
                      <HelpCircle size={20} /> Frequently Asked Questions
                    </h2>
                    <ul className="space-y-4">
                      <li>
                        <strong>
                          Q: Is a Demat account mandatory for trading?
                        </strong>
                        <br />
                        Yes, in India, you cannot buy or sell shares on the
                        exchanges (BSE/NSE) without a Demat account.
                      </li>
                      <li>
                        <strong>Q: Can I have multiple Demat accounts?</strong>
                        <br />
                        Yes, but remember that each account may attract Annual
                        Maintenance Charges (AMC).
                      </li>
                      <li>
                        <strong>Q: What is the cost of maintaining it?</strong>
                        <br />
                        Most brokers charge an AMC ranging from ₹0 to ₹1,000 per
                        year, depending on the service level.
                      </li>
                    </ul>
                  </div>
                </article>

                <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[40px] mt-10">
                  <Typography
                    variant="h5"
                    className="text-blue-400 uppercase mb-3"
                  >
                    Start Your Investment Journey
                  </Typography>
                  <Typography variant="b2" className="text-gray-300">
                    Ready to enter the stock market? Opening a Demat account is
                    the first step toward building your wealth. Contact us to
                    learn how to choose the right broker for your financial
                    goals.
                  </Typography>
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
