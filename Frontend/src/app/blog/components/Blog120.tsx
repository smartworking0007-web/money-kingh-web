"use client";

import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export const Blog120: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-full flex justify-center px-4"
        >
          <BlogCard1
            title="Become Our Channel Partner: Expand Your Business & Unlock Unlimited Earning Potential in 2026"
            category="DSA PROGRAM"
            author="Kishan Baranwal"
            date="October 12, 2026"
            image="/images/blog/Blog-120.jpeg"
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
                    src="/images/blog/Blog-120.jpeg"
                    alt="channel partner program"
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
                    href="https://moneykingfinancial.com/partner"
                    className="text-[#1e3a8a] hover:underline"
                  >
                    Become Our Channel Partner
                  </NextLink>
                  : Expand Your Business &amp; Unlock Unlimited Earning Potential in 2026
                </Typography>

                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                  <Clock size={16} />
                  <Typography variant="b2">October 12, 2026</Typography>
                  <span className="mx-2">•</span>
                  <Typography variant="b2">By Amarjeet Singh</Typography>
                </div>

                {/* Blog Article Body */}
                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                  {/* Featured Snippet Box */}
                  <div className="bg-slate-50 border-l-4 border-[#1e3a8a] p-4 rounded-r-lg">
                    <p className="text-gray-700 italic m-0">
                      Joining our Channel Partner Program allows real estate agents, financial advisors, chartered accountants, and independent professionals to monetize their existing network by offering a wide portfolio of loan and financial products. With zero capital investment, transparent payout systems, and dedicated operational support,{" "}
                      <NextLink
                        href="https://moneykingfinancial.com/partner"
                        className="text-[#1e3a8a] font-semibold hover:underline"
                      >
                        becoming our channel partner
                      </NextLink>{" "}
                      is a seamless path to growing your business revenue.
                    </p>
                  </div>

                  <p>
                    The financial landscape in India is growing rapidly, creating immense demand for business loans, personal loans, home loans, and credit solutions. If you are an entrepreneur, consultant, or finance professional looking to scale your business, partnering with an established financial network is the smartest move.
                  </p>

                  <p>
                    By becoming our official Channel Partner (DSA) through our <strong>channel partner program India</strong> initiative, you gain access to major banks, NBFCs, and fintech platforms through a single portal—enabling you to offer tailored financial solutions to your clients while earning competitive commission payouts.
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Program Highlights &amp; Overview
                  </h2>

                  <div className="overflow-x-auto my-4">
                    <table className="w-full border-collapse border border-gray-200 text-left text-sm">
                      <thead className="bg-slate-100 text-gray-800">
                        <tr>
                          <th className="border border-gray-200 p-3">Key Feature</th>
                          <th className="border border-gray-200 p-3">Program Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-200 p-3 font-semibold">Investment Required</td>
                          <td className="border border-gray-200 p-3">
                            ₹0 (
                            <NextLink
                              href="https://moneykingfinancial.com/partner"
                              className="text-[#1e3a8a] hover:underline font-medium"
                            >
                              Zero investment business opportunity
                            </NextLink>
                            )
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-3 font-semibold">Eligible Partners</td>
                          <td className="border border-gray-200 p-3">CAs, Financial Advisors, Freelancers, Real Estate Agents, DSA Networks</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-3 font-semibold">Product Portfolio</td>
                          <td className="border border-gray-200 p-3">Business Loans, Personal Loans, Home Loans, LAP, Machinery Loans</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-3 font-semibold">Payout Cycle</td>
                          <td className="border border-gray-200 p-3">
                            Timely &amp; Automated Monthly / Weekly Payouts (
                            <NextLink
                              href="https://moneykingfinancial.com/partner"
                              className="text-[#1e3a8a] hover:underline font-medium"
                            >
                              Payout automation
                            </NextLink>
                            )
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Why Should You Become Our Channel Partner?
                  </h2>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>
                      <strong>Diverse{" "}
                      <NextLink
                        href="https://moneykingfinancial.com/partner"
                        className="text-[#1e3a8a] hover:underline"
                      >
                        Financial products portfolio
                      </NextLink>:</strong> Access a complete suite of credit products (Business Loans, Personal Loans, Home Loans, Working Capital) under one roof.
                    </li>
                    <li>
                      <strong>High &amp; Transparent Payouts:</strong> Enjoy industry-leading commission percentages with zero hidden deductions and complete visibility on lead stages through our{" "}
                      <NextLink
                        href="https://moneykingfinancial.com/partner"
                        className="text-[#1e3a8a] hover:underline"
                      >
                        referral commission structure
                      </NextLink>.
                    </li>
                    <li>
                      <strong>Dedicated Operational Support:</strong> Our dedicated desk manages documentation, credit underwriting coordination, and bank follow-ups on your behalf—saving you operational hassle.
                    </li>
                    <li>
                      <strong>Digital Lead Management:</strong> Submit and track client applications in real time through our intuitive partner onboarding portal for fast{" "}
                      <NextLink
                        href="https://moneykingfinancial.com/partner"
                        className="text-[#1e3a8a] hover:underline"
                      >
                        DSA registration
                      </NextLink>.
                    </li>
                  </ol>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Who Can Join Our Partner Network?
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Chartered Accountants (CAs) &amp; Tax Consultants:</strong> Offer structured loan facilities to corporate clients needing capital expansion.
                    </li>
                    <li>
                      <strong>Real Estate Agents &amp; Brokers:</strong> Help property buyers secure fast home loans or loans against property (LAP).
                    </li>
                    <li>
                      <strong>Financial Advisors &amp; Mutual Fund Distributors:</strong> Cross-sell lending products to existing wealth-management clients.
                    </li>
                    <li>
                      <strong>Independent Freelancers &amp; Entrepreneurs:</strong> Capitalize on your personal and business network with zero financial risk.
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Simple 4-Step Partner Onboarding Process
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Step 1: Partner Registration:</strong> Fill out the online Channel Partner registration form with basic business details.
                    </li>
                    <li>
                      <strong>Step 2: KYC &amp; Document Verification:</strong> Submit identity, address, and bank account proofs for payout setup.
                    </li>
                    <li>
                      <strong>Step 3: Access Partner Portal:</strong> Receive your login credentials and access promotional collaterals and referral links.
                    </li>
                    <li>
                      <strong>Step 4: Start Referring &amp; Earning:</strong> Share client leads, track loan disbursements live, and receive direct bank payouts!
                    </li>
                  </ul>

                  {/* FAQ Section */}
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                    <h2 className="text-[#1e3a8a] text-xl font-bold mb-4 flex items-center gap-2">
                      <HelpCircle size={20} /> Frequently Asked Questions (FAQ)
                    </h2>
                    <ul className="space-y-4">
                      <li>
                        <strong>Q1: Is there any registration fee to become a channel partner?</strong>
                        <br />
                        No. Our Channel Partner Program is completely free to join with zero registration fees or hidden charges.
                      </li>
                      <li>
                        <strong>Q2: Do I need prior experience in banking or financial services?</strong>
                        <br />
                        While a finance background is helpful, it is not mandatory. We provide complete product orientation, guidance, and dedicated backend operational support to help you get started.
                      </li>
                      <li>
                        <strong>Q3: How are partner payouts calculated and processed?</strong>
                        <br />
                        Payouts are calculated as a percentage of the total loan amount disbursed to your referred client. Commissions are credited directly to your registered bank account on a fixed payout cycle.
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
                    Become Our Channel Partner Today
                  </Typography>
                  <Typography variant="b2" className="text-gray-300 mb-6 block">
                    Expand your financial consultancy and earn high payouts with{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/partner"
                      className="text-blue-400 hover:underline"
                    >
                      Money King Financial Services
                    </NextLink>{" "}
                    now.
                  </Typography>

                  <div className="flex flex-wrap gap-4 mt-2">
                    <NextLink
                      href="https://moneykingfinancial.com/partner"
                      className="inline-block bg-blue-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-700 transition"
                    >
                      Register As Partner Now
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

export default Blog120;