"use client";

import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export const Blog110: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-full flex justify-center px-4"
        >
          <BlogCard1
            title="Strategic Financial Advisory & Wealth Management Partnerships for Growth"
            category="FINANCIAL SERVICES"
            author="Kishan Baranwal"
            date="September 23, 2026"
            image="/images/blog/Blog-110.jpg"
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
                    src="/images/blog/Blog-110.jpg"
                    alt="Strategic Financial Advisory and Wealth Management Partnership"
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
                    href="https://moneykingfinancial.com/"
                    className="text-[#1e3a8a] hover:underline"
                  >
                    Strategic Financial Advisory
                  </NextLink>
                  &amp; Wealth Management Partnerships for Long-Term Growth
                </Typography>

                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                  <Clock size={16} />
                  <Typography variant="b2">September 23, 2026</Typography>
                  <span className="mx-2">•</span>
                  <Typography variant="b2">By Kishan Baranwal</Typography>
                </div>

                {/* Blog Article Body */}
                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                  {/* Featured Snippet Box */}
                  <div className="bg-slate-50 border-l-4 border-[#1e3a8a] p-4 rounded-r-lg">
                    <p className="text-gray-700 italic m-0">
                      Partnering with professional financial advisors and
                      utilizing robust wealth management strategies is essential
                      for modern investors. Through expert guidance from{" "}
                      <NextLink
                        href="https://moneykingfinancial.com/"
                        className="text-blue-600 font-semibold hover:underline"
                      >
                        Money King Financial Services
                      </NextLink>{" "}
                      individuals and businesses can secure customized
                      portfolios, optimize investments, and achieve sustainable
                      financial growth.
                    </p>
                  </div>

                  <p>
                    In today&apos;s dynamic economic environment, navigating
                    financial markets requires more than just basic savings.
                    Strategic financial advisory bridges the gap between complex
                    market instruments and individual or corporate financial
                    goals.
                  </p>

                  <p>
                    Whether you are planning long-term investments, managing
                    corporate assets, or building diversified portfolios,
                    professional guidance ensures minimized risk and maximized
                    returns.
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Why Professional Financial Partnerships Matter
                  </h2>
                  <p>
                    Collaborating with trusted financial consultants provides
                    unique structural advantages over managing assets
                    independently:
                  </p>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Customized Portfolio Planning:</strong> Tailored
                      strategies designed according to specific risk appetites,
                      financial goals, and timelines.
                    </li>
                    <li>
                      <strong>Expert Market Analysis:</strong> Deep insights
                      into equity, mutual funds, debt instruments, and emerging
                      asset classes.
                    </li>
                    <li>
                      <strong>Tax Optimization &amp; Compliance:</strong>{" "}
                      Ensuring efficient tax planning across various financial
                      instruments to maximize net yields.
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Core Pillars of Wealth Management
                  </h2>
                  <p>
                    Effective wealth management relies on structured planning,
                    disciplined asset allocation, and continuous monitoring.
                    Explore our specialized services including{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/mutual-fund/sip"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      Mutual Fund SIP Solutions
                    </NextLink>{" "}
                    to kickstart your disciplined wealth creation journey.
                  </p>

                  {/* FAQ Section */}
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                    <h2 className="text-[#1e3a8a] text-xl font-bold mb-4 flex items-center gap-2">
                      <HelpCircle size={20} /> Frequently Asked Questions (FAQ)
                    </h2>
                    <ul className="space-y-4">
                      <li>
                        <strong>
                          Q1: What is the role of a financial advisor?
                        </strong>
                        <br />A financial advisor helps analyze your financial
                        situation, set realistic goals, and recommend suitable
                        investment avenues to build long-term wealth securely.
                      </li>
                      <li>
                        <strong>
                          Q2: How does wealth management benefit business
                          entities?
                        </strong>
                        <br />
                        It optimizes cash flow, protects corporate assets
                        against market volatility, and enhances profitability
                        through structured investments.
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
                    Secure Your Financial Future with Expert Guidance
                  </Typography>
                  <Typography variant="b2" className="text-gray-300 mb-6 block">
                    Connect with expert advisors at{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/"
                      className="text-blue-400 hover:underline"
                    >
                      Money King Financial Services
                    </NextLink>{" "}
                    to take control of your financial growth today.
                  </Typography>

                  <div className="flex flex-wrap gap-4 mt-2">
                    <NextLink
                      href="https://moneykingfinancial.com/partner"
                      className="inline-block bg-blue-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-700 transition"
                    >
                      Get Started
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