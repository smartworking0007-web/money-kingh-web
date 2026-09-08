"use client";

import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export const Blog98: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-full flex justify-center px-4"
        >
          <BlogCard1
            title="Business Loan Upto 40 Lakhs: Eligibility, Interest Rates & Application Guide"
            category="LOANS"
            author="Sumit Mishra"
            date="September 8, 2026"
            image="/images/blog/blog-98.jpeg"
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
                  src="/images/blog/blog-98.jpeg"
                  alt="BUSINESS LOAN UPTO 40 LAKHS"
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
                  <NextLink
                    href="https://moneykingfinancial.com/services/loan/unsecured/business"
                    className="text-[#1e3a8a] hover:underline"
                  >
                    Business Loan Upto 40 Lakhs
                  </NextLink>
                  : Eligibility, Interest Rates &amp; Application Guide
                </Typography>

                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                  <Clock size={16} />
                  <Typography variant="b2">September 8, 2026</Typography>
                </div>

                {/* Blog Article Body */}
                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                  {/* Featured Snippet Box */}
                  <div className="bg-slate-50 border-l-4 border-[#1e3a8a] p-4 rounded-r-lg">
                    <p className="text-gray-700 italic m-0">
                      A{" "}
                      <NextLink
                        href="https://moneykingfinancial.com/services/loan/unsecured/business"
                        className="text-blue-600 font-semibold hover:underline"
                      >
                        business loan upto 40 lakhs
                      </NextLink>{" "}
                      is an unsecured financial solution designed to assist MSMEs, entrepreneurs, and established firms with working capital, inventory purchase, or business expansion. Since it requires no collateral, approval depends heavily on a CIBIL score of 750+, healthy annual business turnover, and consistent GST filings. With flexible repayment tenures of 12 to 60 months, business owners can secure fast disbursal with minimal documentation.
                    </p>
                  </div>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Business Loan Upto 40 Lakhs: Complete Eligibility, Interest Rates &amp; Application Guide
                  </h2>
                  <p>
                    Expanding business operations, upgrading machinery, managing working capital cycles, or hiring skilled personnel requires substantial funding. An unsecured{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/loan/unsecured/business"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      business loan upto 40 lakhs
                    </NextLink>{" "}
                    serves as a vital financial bridge for Indian small and medium enterprises (MSMEs) seeking quick growth without pledging valuable business assets.
                  </p>
                  <p>
                    Since these loans are collateral-free, financial institutions evaluate your application based on business profitability, cash flow stability, and past credit repayment history. In this guide, we cover everything you need to know about getting a 40 lakh business loan—from eligibility criteria and required paperwork to smart tips for instant approval.
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Key Benefits of a Business Loan Upto 40 Lakhs
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>No Collateral Required:</strong> Secure high-value funding up to ₹40 Lakhs without pledging property, land, or gold.
                    </li>
                    <li>
                      <strong>Flexible Repayment Tenures:</strong> Choose a repayment window ranging from 12 months to 60 months (1 to 5 years) to keep monthly EMIs manageable.
                    </li>
                    <li>
                      <strong>Quick Processing &amp; Disbursal:</strong> Digital verification of GST returns and bank statements speeds up approval, with funds disbursed within 24 to 48 hours.
                    </li>
                    <li>
                      <strong>Tax Benefits:</strong> The interest paid on business loans is considered a legitimate business expense, offering tax deductions under Indian tax regulations.
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Eligibility Criteria for a 40 Lakh Business Loan
                  </h2>
                  <p>
                    To qualify for an unsecured{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/loan/unsecured/business"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      business loan up to ₹40 Lakhs
                    </NextLink>
                    , applicants must fulfill the following general criteria:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Business Vintage:</strong> Minimum 2 to 3 years of continuous business operations.
                    </li>
                    <li>
                      <strong>Minimum Annual Turnover:</strong> ₹40 Lakhs to ₹1 Crore or more (varies by lender).
                    </li>
                    <li>
                      <strong>Credit Score:</strong> CIBIL score of 750 or above for seamless approval and lower interest rates.
                    </li>
                    <li>
                      <strong>Applicant&apos;s Age:</strong> Minimum 21 years at the time of application and maximum 65 years at loan maturity.
                    </li>
                    <li>
                      <strong>Eligible Entities:</strong> Sole Proprietorships, Partnership Firms, Private Limited Companies, and LLPs.
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Required Documents Checklist
                  </h2>
                  <p>
                    Having your financial records organized speeds up verification and loan disbursal:
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-200">
                      <thead>
                        <tr className="bg-gray-100 text-left">
                          <th className="border p-2">Document Category</th>
                          <th className="border p-2">Required Files</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-2 font-bold">Identity Proof</td>
                          <td className="border p-2">Aadhaar Card, PAN Card, Voter ID, or Passport</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">Address Proof</td>
                          <td className="border p-2">Electricity bill, Trade License, or Rent Agreement</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">Business Ownership</td>
                          <td className="border p-2">GST Registration, Udyam Certificate, Partnership Deed, or MOA/AOA</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">Financial Records</td>
                          <td className="border p-2">Last 2–3 years ITR with Audit Report &amp; Computation Sheet</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">Bank Statements</td>
                          <td className="border p-2">Last 6 to 12 months’ Current Account statements</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Interest Rates &amp; Other Charges Breakdown
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-200">
                      <thead>
                        <tr className="bg-gray-100 text-left">
                          <th className="border p-2">Parameter</th>
                          <th className="border p-2">Standard Market Range</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-2 font-bold">Interest Rate (ROI)</td>
                          <td className="border p-2 font-semibold text-green-600">
                            13.50% to 24% per annum (varies by profile)
                          </td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">Processing Fee</td>
                          <td className="border p-2">1.5% to 3% of the total loan amount</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">Loan Tenure</td>
                          <td className="border p-2 font-semibold text-green-600">12 to 60 Months</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">Foreclosure / Prepayment</td>
                          <td className="border p-2">2% to 5% on remaining principal (after lock-in period)</td>
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
                        <strong>Q: Can I get a 40 lakh business loan without GST registration?</strong>
                        <br />
                        A: For an unsecured{" "}
                        <NextLink
                          href="https://moneykingfinancial.com/services/loan/unsecured/business"
                          className="text-blue-600 hover:underline"
                        >
                          business loan
                        </NextLink>{" "}
                        of ₹40 Lakhs, a valid GST registration is generally mandatory as lenders use GST returns to verify real-time business turnover.
                      </li>
                      <li>
                        <strong>Q: How is the EMI calculated for a 40 lakh business loan?</strong>
                        <br />
                        A: EMI is calculated based on the sanctioned loan amount, interest rate, and chosen tenure. For example, a ₹40 Lakh loan at 14% interest for 5 years yields an estimated EMI of approximately ₹93,100 per month.
                      </li>
                      <li>
                        <strong>Q: Will applying for a 40 lakh business loan affect my CIBIL score?</strong>
                        <br />
                        A: Submitting an official loan application triggers a hard inquiry by the lender, which may temporarily drop your score by a few points. However, regular, timely EMI repayments will enhance your business and personal credit scores over time. Apply directly via our{" "}
                        <NextLink
                          href="https://moneykingfinancial.com/services/loan/unsecured/business"
                          className="text-blue-600 font-bold hover:underline"
                        >
                          unsecured business loan portal
                        </NextLink>{" "}
                        to evaluate eligible offers without hassle.
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
                    Fuel Your Company Growth with a 40 Lakh Business Loan!
                  </Typography>
                  <Typography variant="b2" className="text-gray-300 mb-6 block">
                    Access collateral-free working capital, compare lower interest rates across leading lending partners, and scale your business with Money King Financial Services.
                  </Typography>

                  <NextLink
                    href="https://moneykingfinancial.com/services/loan/unsecured/business"
                    className="inline-block bg-red-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-red-700 transition"
                  >
                    Apply for Business Loan Upto 40 Lakhs
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