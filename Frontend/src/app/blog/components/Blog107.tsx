"use client";

import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export const Blog107: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-full flex justify-center px-4"
        >
          <BlogCard1
            title="Financial Tax Audit 2026 (AY 2026-27): Limits, Forms, Due Dates & Complete Rules"
            category="TAXATION"
            author="Kishan Baranwal"
            date="September 19, 2026"
            image="/images/blog/blog-107.jpg"
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
              {/* Optimized Professional Image Preview */}
              <div className="w-full flex justify-center bg-slate-50 py-4 px-4 border-b border-gray-100">
                <div className="relative w-full max-w-3xl aspect-[16/9] rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/images/blog/blog-107.jpg"
                    alt="Financial Tax Audit 2026 Limits and Due Dates"
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
                  Financial Tax Audit 2026 (AY 2026-27): Limits, Forms, Due Dates & Complete Rules
                </Typography>

                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                  <Clock size={16} />
                  <Typography variant="b2">September 21, 2026</Typography>
                </div>

                {/* Blog Article Body */}
                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                  {/* Featured Snippet Box */}
                  <div className="bg-slate-50 border-l-4 border-[#1e3a8a] p-4 rounded-r-lg">
                    <p className="text-gray-700 italic m-0">
                      For Assessment Year 2026-27 (FY 2025-26), a financial tax audit under Section 44AB is mandatory for businesses with an annual turnover exceeding ₹1 crore, or ₹10 crore if total cash transactions (receipts and payments) do not exceed 5%. For professionals, the audit threshold is gross receipts crossing ₹50 lakh. The audit report must be filed by a practicing Chartered Accountant using Form 3CA/3CB and Form 3CD by 30th September 2026.
                    </p>
                  </div>

                  <p>
                    Managing tax compliance requires businesses, entrepreneurs, and professionals to ensure that their financial statements accurately reflect their business income and expenses. A financial tax audit under the Income Tax Act involves an independent examination of a taxpayer&apos;s account books by a qualified Chartered Accountant (CA).
                  </p>

                  <p>
                    As we prepare for the tax filing cycle for Assessment Year 2026-27, knowing the latest audit limits, digital cash rules, and forms is essential to avoid heavy statutory penalties. Here is a comprehensive guide to tax audit applicability in 2026. Explore more advisory services on our{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      Money King Financial Portal
                    </NextLink>{" "}
                    to stay compliant.
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Tax Audit Applicability &amp; Thresholds for AY 2026-27
                  </h2>
                  <p>
                    Tax audit limits depend on your business classification and the proportion of your digital transactions:
                  </p>

                  <div className="overflow-x-auto my-6">
                    <table className="w-full border-collapse border border-gray-200">
                      <thead>
                        <tr className="bg-gray-100 text-left">
                          <th className="border p-2">Category</th>
                          <th className="border p-2">Basic Turnover / Receipt Limit</th>
                          <th className="border p-2">Higher Limit (Digital Transactions)</th>
                          <th className="border p-2">Qualifying Condition for Higher Limit</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-2 font-bold">Business (General)</td>
                          <td className="border p-2">₹1 Crore</td>
                          <td className="border p-2 font-semibold text-green-600">₹10 Crore</td>
                          <td className="border p-2">Cash receipts AND payments must both be ≤ 5% of total receipts/payments.</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">Professionals</td>
                          <td className="border p-2">₹50 Lakh</td>
                          <td className="border p-2 text-gray-400">No Enhanced Limit</td>
                          <td className="border p-2">Flat limit applies regardless of digital mode payments.</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">Presumptive Business (Sec 44AD)</td>
                          <td className="border p-2">₹2 Crore</td>
                          <td className="border p-2 font-semibold text-green-600">₹3 Crore</td>
                          <td className="border p-2">Cash receipts must be ≤ 5% of total turnover.</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">Presumptive Professional (Sec 44ADA)</td>
                          <td className="border p-2">₹50 Lakh</td>
                          <td className="border p-2 font-semibold text-green-600">₹75 Lakh</td>
                          <td className="border p-2">Cash receipts must be ≤ 5% of gross receipts.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-sm text-gray-500 italic">
                    Note: If a taxpayer under Section 44AD or 44ADA declares profits below the prescribed rates (6%/8% or 50% respectively) and their total income exceeds the basic tax exemption limit, a tax audit becomes mandatory regardless of turnover.
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Key Forms Used in Financial Tax Audit
                  </h2>
                  <p>
                    The audit report is submitted online on the Income Tax Portal through specific forms:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Form 3CA:</strong> Applicable when the taxpayer&apos;s accounts are already required to be audited under any other law (e.g., Companies Act, 2013 for private limited companies).
                    </li>
                    <li>
                      <strong>Form 3CB:</strong> Applicable when the taxpayer&apos;s accounts are audited exclusively under the Income Tax Act (e.g., sole proprietorships or partnership firms).
                    </li>
                    <li>
                      <strong>Form 3CD:</strong> A detailed 44-clause statement of particulars that accompanies Form 3CA/3CB, covering GST reconciliations, related-party payments, TDS compliance, and depreciation calculations.
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Important Due Dates for Tax Audit 2026
                  </h2>
                  <p>
                    To avoid last-minute rush and technical glitches, track these key statutory deadlines for AY 2026-27:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Tax Audit Report Submission Due Date:</strong> 30th September 2026</li>
                    <li><strong>Income Tax Return (ITR-3 / ITR-5 / ITR-6) Due Date for Audit Cases:</strong> 31st October 2026</li>
                    <li><strong>Transfer Pricing Audit Cases (Form 3CEB):</strong> 30th November 2026</li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Penalty for Non-Compliance
                  </h2>
                  <p>
                    Failing to complete and file the tax audit report within the prescribed due date attracts a penalty under Section 271B of the Income Tax Act:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>0.5% of total sales, turnover, or gross receipts, OR</li>
                    <li>₹1,500,000 (₹1.5 Lakh), whichever is lower.</li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    4 Essential Preparation Steps for a Smooth Tax Audit
                  </h2>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>
                      <strong>Reconcile Books with AIS &amp; Form 26AS:</strong> Ensure all interest income, stock transactions, TDS, and high-value financial transactions match the Annual Information Statement (AIS).
                    </li>
                    <li>
                      <strong>Verify 5% Cash Limit:</strong> Calculate both cash receipts and cash payments as a percentage of total inflows and outflows to confirm eligibility for the ₹10 crore digital threshold.
                    </li>
                    <li>
                      <strong>Verify TDS/TCS Compliance:</strong> Check that tax has been deducted at source on rent, professional fees, contractor payments, and properly deposited within due dates.
                    </li>
                    <li>
                      <strong>GST Data Reconciliation:</strong> Match turnover reported in GST filings (GSTR-1 and GSTR-3B) with the sales turnover reported in the audited Profit &amp; Loss statement.
                    </li>
                  </ol>

                  {/* FAQ Section */}
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                    <h2 className="text-[#1e3a8a] text-xl font-bold mb-4 flex items-center gap-2">
                      <HelpCircle size={20} /> Frequently Asked Questions (FAQ)
                    </h2>
                    <ul className="space-y-4">
                      <li>
                        <strong>Q1: Is a tax audit mandatory if my business incurs a financial loss?</strong>
                        <br />
                        If your business turnover exceeds ₹1 crore (or ₹10 crore in digital cases), a tax audit is mandatory whether you make a profit or a loss. If turnover is below the threshold, a loss audit is required only if you opt out of the presumptive scheme declaring profits lower than the prescribed rate with total income above the basic tax exemption limit.
                      </li>
                      <li>
                        <strong>Q2: Who can perform and sign a tax audit report?</strong>
                        <br />
                        Only an independent, practicing Chartered Accountant (CA) holding a valid Certificate of Practice (COP) and generating a unique UDIN (Unique Document Identification Number) can perform and upload a tax audit report.
                      </li>
                      <li>
                        <strong>Q3: Does a rent agreement or bank statement count toward the 5% cash test?</strong>
                        <br />
                        The 5% cash limit includes all payments and receipts made in cash or bearer cheques. Electronic transfers via UPI, NEFT, RTGS, IMPS, or account payee cheques count as non-cash digital transactions.
                      </li>
                      <li>
                        <strong>Q4: Can a tax audit report be revised after submission?</strong>
                        <br />
                        Yes, a tax audit report can be revised by the Chartered Accountant in case of a change in law, revision of accounts, or correction of an obvious typographical error, provided it is submitted before the end of the relevant assessment year.
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
                    Ensure Seamless Financial Compliance Today!
                  </Typography>
                  <Typography variant="b2" className="text-gray-300 mb-6 block">
                    Need expert assistance with your{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/"
                      className="text-blue-400 hover:underline"
                    >
                      tax audits
                    </NextLink>{" "}
                    or company filings? Trust Money King Financial Services for accurate documentation and timely submissions.
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