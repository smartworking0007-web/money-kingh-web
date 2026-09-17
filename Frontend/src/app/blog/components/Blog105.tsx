"use client";

import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export const Blog105: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-full flex justify-center px-4"
        >
          <BlogCard1
            title="Complete Checklist of Documents Required for a Business Loan in India"
            category="LOANS"
            author="Sumit Mishra"
            date="September 17, 2026"
            image="/images/blog/blog-105.jpeg"
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
                  src="/images/blog/blog-105.jpeg"
                  alt="business loan documents"
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
                  Complete Checklist of Documents Required for a{" "}
                  <NextLink
                    href="https://moneykingfinancial.com/services/loan/unsecured/business"
                    className="text-[#1e3a8a] hover:underline"
                  >
                    Business Loan
                  </NextLink>{" "}
                  in India
                </Typography>

                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                  <Clock size={16} />
                  <Typography variant="b2">September 17, 2026</Typography>
                </div>

                {/* Blog Article Body */}
                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                  {/* Featured Snippet Box */}
                  <div className="bg-slate-50 border-l-4 border-[#1e3a8a] p-4 rounded-r-lg">
                    <p className="text-gray-700 italic m-0">
                      To apply for a business loan in India, applicants must submit primary identity proof, address proof, business registration certificates, bank statements for the last 6 to 12 months, and income tax returns (ITR) for the last 2 years along with audited financial statements. Having these documents ready ensures faster verification and seamless loan disbursal.
                    </p>
                  </div>

                  <p>
                    Securing a business loan is one of the most effective ways to expand operations, purchase inventory, manage working capital, or invest in new equipment. However, one of the primary reasons business loan applications face delay or rejection is incomplete or inaccurate documentation.
                  </p>

                  <p>
                    Whether you are applying for an{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/loan/unsecured/business"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      unsecured business loan
                    </NextLink>
                    , a working capital credit line, or equipment financing, having a structured document checklist speeds up the underwriting process. Here is a comprehensive guide to all the essential documents required for a business loan application.
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Master Document Checklist for Business Loans
                  </h2>
                  <p>
                    Lenders require documentation to evaluate two main aspects: Identity/Legal Legitimacy and Financial Repayment Capacity.
                  </p>

                  <h3 className="text-lg font-bold text-gray-800 pt-2">
                    1. Know Your Customer (KYC) Documents
                  </h3>
                  <p>
                    KYC documents establish the identity and residential address of the business owners, partners, or directors.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Identity Proof:</strong> Aadhaar Card, PAN Card, Voter ID, or Passport of all promoters/proprietors.
                    </li>
                    <li>
                      <strong>Address Proof:</strong> Utility bills (electricity/water bill), Aadhaar Card, or valid Rent Agreement.
                    </li>
                  </ul>

                  <h3 className="text-lg font-bold text-gray-800 pt-2">
                    2. Business Proof &amp; Entity Registration
                  </h3>
                  <p>
                    Lenders require legal proof that your business is registered and operating legally.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Proprietorship:</strong> GST Registration Certificate, Shop &amp; Establishment License, or Udhyam Aadhaar (MSME Registration).
                    </li>
                    <li>
                      <strong>Partnership Firm:</strong> Partnership Deed and Registration Certificate.
                    </li>
                    <li>
                      <strong>Private Limited / LLP:</strong> Certificate of Incorporation, Memorandum of Association (MOA), Articles of Association (AOA), and Board Resolution authorizing the loan.
                    </li>
                  </ul>

                  <h3 className="text-lg font-bold text-gray-800 pt-2">
                    3. Financial Statements &amp; Income Proof
                  </h3>
                  <p>
                    Your financial records demonstrate your business cash flow, profit margins, and existing debt obligations.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Bank Statements:</strong> Official bank statements of the primary business account for the last 6 to 12 months.
                    </li>
                    <li>
                      <strong>Income Tax Returns (ITR):</strong> Computation of income and ITR for the previous 2 to 3 financial years (for both the business entity and individual promoters).
                    </li>
                    <li>
                      <strong>Audited Financial Statements:</strong> Profit &amp; Loss (P&amp;L) Account, Balance Sheet, and Auditor&apos;s Report for the last 2 years (certified by a Chartered Accountant).
                    </li>
                    <li>
                      <strong>GST Returns:</strong> Latest GST filing returns (Form GSTR-3B and GSTR-1) for verification of monthly turnover.
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Category-Wise Document Requirements
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-200">
                      <thead>
                        <tr className="bg-gray-100 text-left">
                          <th className="border p-2">Business Structure</th>
                          <th className="border p-2">Mandatory Key Documents</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-2 font-bold">Sole Proprietorship</td>
                          <td className="border p-2">
                            Proprietor KYC, GST / Udhyam Aadhaar, 12 Months Bank Statement, 2 Years ITR
                          </td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">Partnership Firm</td>
                          <td className="border p-2">
                            Partnership Deed, Firm PAN Card, Partner KYCs, GST Returns, Audited Financials
                          </td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">Private Limited Company</td>
                          <td className="border p-2">
                            Certificate of Incorporation, MOA &amp; AOA, Board Resolution, Company PAN, 2–3 Years CA-Audited Financials
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Key Tips for Faster Business Loan Approval
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Maintain Clean Bank Statements:</strong> Avoid cheque bounces or excessive overdraft utilization, as lenders closely analyze your daily bank balances.
                    </li>
                    <li>
                      <strong>Reconcile GST and Financials:</strong> Ensure the sales numbers in your GST returns match the turnover reported in your audited Profit &amp; Loss statement.
                    </li>
                    <li>
                      <strong>Keep Digital Copies Ready:</strong> Keep high-quality PDF scans of all documents organized in a folder to enable 100% paperless digital verification.
                    </li>
                  </ul>

                  {/* FAQ Section */}
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                    <h2 className="text-[#1e3a8a] text-xl font-bold mb-4 flex items-center gap-2">
                      <HelpCircle size={20} /> Frequently Asked Questions (FAQ)
                    </h2>
                    <ul className="space-y-4">
                      <li>
                        <strong>Q1: Can I get a business loan without filing an Income Tax Return (ITR)?</strong>
                        <br />
                        While established banks require 2 to 3 years of ITR, non-banking financial companies (NBFCs) and fintech lenders offer specialized banking surrogate schemes that evaluate loan eligibility purely based on 12 months of bank statement cash flow.
                      </li>
                      <li>
                        <strong>Q2: Is Udhyam (MSME) registration mandatory for a business loan?</strong>
                        <br />
                        Udhyam registration is not legally mandatory for all commercial loans, but having an active MSME registration helps you unlock lower interest rates, collateral-free credit schemes (like CGTMSE), and priority sector lending benefits.
                      </li>
                      <li>
                        <strong>Q3: How many months of bank statements are required for a business loan?</strong>
                        <br />
                        Lenders generally require 6 to 12 months of consecutive business bank account statements to assess your operational turnover and average monthly balance.
                      </li>
                      <li>
                        <strong>Q4: Do I need collateral documents for an unsecured business loan?</strong>
                        <br />
                        No. Unsecured{" "}
                        <NextLink
                          href="https://moneykingfinancial.com/services/loan/unsecured/business"
                          className="text-blue-600 hover:underline"
                        >
                          business loans
                        </NextLink>{" "}
                        do not require property deeds or asset hypothecation. You only need to provide business proof, KYC, bank statements, and income documents. Check your eligibility online on our{" "}
                        <NextLink
                          href="https://moneykingfinancial.com/"
                          className="text-blue-600 font-bold hover:underline"
                        >
                          financial portal
                        </NextLink>.
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
                    Get Your Business Loan Approved with Minimal Paperwork!
                  </Typography>
                  <Typography variant="b2" className="text-gray-300 mb-6 block">
                    Fast-track your application, compare competitive interest rates across leading lenders, and secure funding for your enterprise with Money King Financial Services.
                  </Typography>

                  <NextLink
                    href="https://moneykingfinancial.com/services/loan/unsecured/business"
                    className="inline-block bg-red-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-red-700 transition"
                  >
                    Apply for Business Loan
                  </NextLink>
                </div>

                {/* Social Share Section */}
                <div className="mt-8 border-t pt-6">
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