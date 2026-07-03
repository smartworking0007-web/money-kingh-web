"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export const Blog63 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-full flex justify-center px-4"
        >
          <BlogCard1
            title="Personal Loan vs. Credit Card EMI: Which One Should You Choose for Your Financial Needs?"
            category="LOANS & DEBT"
            author="Sumit Mishra"
            date="July 03, 2026"
            image="/images/blog/blog-63.png"
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
                  src="/images/blog/blog-63.png"
                  alt="Personal Loan and a Credit Card EMI comparison"
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
                  Personal Loan vs. Credit Card EMI: Which One Should You
                  Choose?
                </Typography>

                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                  <Clock size={16} />
                  <Typography variant="b2">July 03, 2026</Typography>
                </div>

                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                  <p>
                    In the digital age, access to credit is just a click away.
                    Whether you’re eyeing a new high-end laptop or dealing with
                    an unexpected medical expense, the decision between taking a
                    personal loan or converting a credit card purchase into EMIs
                    is a critical financial crossroads.
                  </p>

                  <h2>1. Understanding the Options</h2>
                  <ul>
                    <li>
                      <strong>Personal Loans:</strong> An unsecured credit
                      facility with a lump-sum disbursement. It features fixed
                      interest rates, longer tenures (1–5 years), and structured
                      monthly repayments.
                    </li>
                    <li>
                      <strong>Credit Card EMIs:</strong> An extension of your
                      existing credit limit. These are typically pre-approved
                      and allow you to convert specific purchases into
                      installments without fresh documentation.
                    </li>
                  </ul>

                  <h2>2. Comparison Matrix</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-200">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border p-2">Feature</th>
                          <th className="border p-2">Personal Loan</th>
                          <th className="border p-2">Credit Card EMI</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-2">Interest Rate</td>
                          <td className="border p-2">Lower (10-18%)</td>
                          <td className="border p-2">Higher (14-24%+)</td>
                        </tr>
                        <tr>
                          <td className="border p-2">Eligibility</td>
                          <td className="border p-2">Credit/Doc Check</td>
                          <td className="border p-2">Pre-approved</td>
                        </tr>
                        <tr>
                          <td className="border p-2">Impact on Limit</td>
                          <td className="border p-2">No impact</td>
                          <td className="border p-2">
                            Blocks available credit
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h2>3. The No-Cost EMI Myth</h2>
                  <p>
                    The biggest trap in Credit Card EMIs is the no-cost EMI
                    marketing. Often, the retailer hides the interest cost by
                    reducing the cash discount you would have otherwise
                    received. Always calculate the true APR (Annual Percentage
                    Rate) before committing.
                  </p>

                  <h2>4. Credit Score Impact</h2>
                  <p>
                    Converting a large purchase into a Credit Card EMI blocks
                    your available credit limit. If your utilization exceeds 30%
                    of your total limit, your credit score may dip. Conversely,
                    a personal loan is an installment loan that adds diversity
                    to your credit mix, which can actually help your score if
                    managed responsibly.
                  </p>

                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                    <h2 className="text-[#1e3a8a] text-xl font-bold mb-4 flex items-center gap-2">
                      <HelpCircle size={20} /> Frequently Asked Questions
                    </h2>
                    <ul className="space-y-4">
                      <li>
                        <strong>
                          Q: Do I need a CIBIL score for Credit Card EMIs?
                        </strong>
                        <br />
                        No, because they are pre-approved. However, your
                        repayment history is reported to CIBIL and will affect
                        your score.
                      </li>
                      <li>
                        <strong>Q: Can I close a personal loan early?</strong>
                        <br />
                        Yes, but most banks charge a foreclosure fee of 2–5%
                        of the remaining balance.
                      </li>
                      <li>
                        <strong>Q: Are No-Cost EMIs really free?</strong>
                        <br />
                        Often, no. You typically lose out on a cash discount,
                        making the free EMI effectively a paid-interest
                        product.
                      </li>
                    </ul>
                  </div>
                </article>

                <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[40px] mt-10">
                  <Typography
                    variant="h5"
                    className="text-blue-400 uppercase mb-3"
                  >
                    Stop overpaying on interest.
                  </Typography>
                  <Typography variant="b2" className="text-gray-300">
                    Use our Loan vs. EMI Calculator to see exactly how much you
                    can save by choosing the right credit path for your needs.
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
