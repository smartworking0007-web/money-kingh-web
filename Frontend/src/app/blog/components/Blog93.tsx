"use client";

import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export const Blog93: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-full flex justify-center px-4"
        >
          <BlogCard1
            title="Debt Consolidation Loan Guide: How to Merge Multiple EMIs into One Lower Payment (2026)"
            category="LOANS"
            author="Sumit Mishra"
            date="September 2, 2026"
            image="/images/blog/blog-93.jpeg"
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
                  src="/images/blog/blog-93.jpeg"
                  alt="loan"
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
                  Debt Consolidation{" "}
                  <NextLink
                    href="https://moneykingfinancial.com/services/loan/unsecured/personal"
                    className="text-[#1e3a8a] hover:underline"
                  >
                    Loan
                  </NextLink>{" "}
                  Guide: How to Merge Multiple EMIs into One Lower Payment (2026)
                </Typography>

                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                  <Clock size={16} />
                  <Typography variant="b2">September 2, 2026</Typography>
                </div>

                {/* Blog Article Body */}
                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                  <p>
                    A debt consolidation{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/loan/unsecured/personal"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      loan
                    </NextLink>{" "}
                    is a personal financing strategy that combines multiple high-interest debts—such
                    as credit card balances, personal loans, and consumer EMIs—into a single,
                    manageable{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/loan/unsecured/personal"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      loan
                    </NextLink>{" "}
                    with one monthly payment. By replacing multiple high-rate lenders with a single
                    loan at a lower overall interest rate, borrowers can significantly reduce their
                    monthly cash outflow, simplify tracking, and fast-track their journey to becoming
                    debt-free.
                  </p>

                  <p>
                    Managing multiple{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/loan/unsecured/personal"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      loan
                    </NextLink>{" "}
                    repayment dates, varying interest rates, and hefty credit card bills every month
                    can quickly become overwhelming. When a major portion of your income goes toward
                    servicing different EMIs, saving money or achieving long-term financial goals
                    feels almost impossible.
                  </p>

                  <p>
                    This is where a Debt Consolidation{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/loan/unsecured/personal"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      Loan
                    </NextLink>{" "}
                    acts as a powerful financial resetting tool. Instead of juggling multiple
                    obligations, debt consolidation allows you to streamline your financial life,
                    lower your total monthly payout, and clear your debts systematically.
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    1. How Does Debt Consolidation Work?
                  </h2>
                  <p>Debt consolidation is simple in execution:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Take One New Loan:</strong> You apply for a single{" "}
                      <NextLink
                        href="https://moneykingfinancial.com/services/loan/unsecured/personal"
                        className="text-blue-600 font-semibold hover:underline"
                      >
                        personal loan
                      </NextLink>{" "}
                      large enough to cover all your existing high-interest debts.
                    </li>
                    <li>
                      <strong>Pay Off Existing Debt:</strong> The funds from the new{" "}
                      <NextLink
                        href="https://moneykingfinancial.com/services/loan/unsecured/personal"
                        className="text-blue-600 font-semibold hover:underline"
                      >
                        loan
                      </NextLink>{" "}
                      are used immediately to clear your high-interest credit cards, short-term
                      loans, and consumer EMIs.
                    </li>
                    <li>
                      <strong>Manage One Single EMI:</strong> Going forward, you only make one
                      single monthly payment to one lender at a fixed interest rate and specified
                      tenure.
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    2. Key Advantages of Debt Consolidation
                  </h2>

                  <h3 className="text-lg font-bold text-gray-800 pt-2">
                    A. Lower Overall Interest Cost
                  </h3>
                  <p>
                    Credit card outstanding balances often carry exorbitant interest rates ranging
                    from 36% to 42% per annum. By replacing card debts with a structured personal
                    debt consolidation{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/loan/unsecured/personal"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      loan
                    </NextLink>{" "}
                    (typically 11% to 16% p.a.), you instantly save substantial money on interest
                    costs.
                  </p>

                  <h3 className="text-lg font-bold text-gray-800 pt-2">
                    B. Single Due Date &amp; Reduced Stress
                  </h3>
                  <p>
                    Tracking multiple due dates increases the risk of missed payments, late fee
                    penalties, and credit score damage. Consolidating into a single monthly EMI date
                    simplifies budgeting completely.
                  </p>

                  <h3 className="text-lg font-bold text-gray-800 pt-2">
                    C. Improved Credit Score (CIBIL)
                  </h3>
                  <p>
                    High credit utilization across multiple credit lines damages your credit score.
                    Paying off several revolving accounts with a single structured installment{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/loan/unsecured/personal"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      loan
                    </NextLink>{" "}
                    lowers your credit utilization ratio (CUR) and builds a positive repayment
                    history over time.
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Direct Comparison: Multiple Debts vs. Consolidated Loan
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-200">
                      <thead>
                        <tr className="bg-gray-100 text-left">
                          <th className="border p-2">Parameter</th>
                          <th className="border p-2">Multiple Independent Debts</th>
                          <th className="border p-2">
                            Consolidated Single{" "}
                            <NextLink
                              href="https://moneykingfinancial.com/services/loan/unsecured/personal"
                              className="text-blue-600 font-semibold hover:underline"
                            >
                              Loan
                            </NextLink>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-2 font-bold">Number of Due Dates</td>
                          <td className="border p-2">4 to 6+ different dates per month</td>
                          <td className="border p-2 font-semibold text-green-600">
                            1 single monthly date
                          </td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">Average Interest Rate</td>
                          <td className="border p-2">Very High (24%–42% mixed)</td>
                          <td className="border p-2 font-semibold text-green-600">
                            Lower &amp; Fixed (11%–16% avg.)
                          </td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">Monthly Cash Outflow</td>
                          <td className="border p-2">High and unpredictable</td>
                          <td className="border p-2 font-semibold text-green-600">
                            Reduced &amp; Predictable EMI
                          </td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">CIBIL Score Impact</td>
                          <td className="border p-2">Negative due to high credit utilization</td>
                          <td className="border p-2 font-semibold text-green-600">
                            Positive (Lowers utilization ratio)
                          </td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">Financial Clarity</td>
                          <td className="border p-2">Confusing and stressful</td>
                          <td className="border p-2 font-semibold text-green-600">
                            Clear timeline to become 100% debt-free
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
                        <strong>Q: Does debt consolidation eliminate my debt?</strong>
                        <br />
                        A: No. Debt consolidation does not erase the principal amount you owe;
                        rather, it reorganizes your debt into a cheaper, more structured repayment
                        format so you can pay it off faster with lower monthly stress.
                      </li>
                      <li>
                        <strong>
                          Q: Can I consolidate debt with a bad CIBIL score?
                        </strong>
                        <br />
                        A: Obtaining a low-interest{" "}
                        <NextLink
                          href="https://moneykingfinancial.com/services/loan/unsecured/personal"
                          className="text-blue-600 hover:underline"
                        >
                          personal loan
                        </NextLink>{" "}
                        with a low credit score can be challenging. However, you can consider
                        secured consolidation options (such as a loan against property or mutual
                        funds) to qualify for lower interest rates.
                      </li>
                      <li>
                        <strong>
                          Q: Are there pre-closure charges when paying off old loans?
                        </strong>
                        <br />
                        A: Some personal loans levy foreclosure charges (2% to 4%). However, credit
                        card balances can generally be paid off in full at any time without
                        prepayment penalties. Always verify total closure fees before refinancing.
                        Check your credit standing and eligibility on our{" "}
                        <NextLink
                          href="https://moneykingfinancial.com/"
                          className="text-blue-600 font-bold hover:underline"
                        >
                          financial portal
                        </NextLink>{" "}
                        to find the best restructuring solution.
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
                    Simplify Your Debts &amp; Lower Your Monthly EMI Today!
                  </Typography>
                  <Typography variant="b2" className="text-gray-300 mb-6 block">
                    Consolidate multiple high-interest credit cards and EMIs into one easy-to-manage{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/loan/unsecured/personal"
                      className="text-blue-400 hover:underline"
                    >
                      personal loan
                    </NextLink>{" "}
                    with Money King Financial Services.
                  </Typography>

                  <NextLink
                    href="https://moneykingfinancial.com/services/loan/unsecured/personal"
                    className="inline-block bg-red-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-red-700 transition"
                  >
                    Apply for Debt Consolidation Loan
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