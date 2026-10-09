"use client";

import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export const Blog118: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-full flex justify-center px-4"
        >
          <BlogCard1
            title="Business Loan Documents Required in India: The Complete 2026 Checklist for Fast Approval"
            category="BUSINESS LOAN"
            author="Kishan Baranwal"
            date="October 6, 2026"
            image="/images/blog/Blog-118.jpeg"
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
                    src="/images/blog/Blog-118.jpeg"
                    alt="business loan documents"
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
                    href="https://moneykingfinancial.com/services/loan/unsecured/business"
                    className="text-[#1e3a8a] hover:underline"
                  >
                    Business Loan Documents Required in India
                  </NextLink>
                  : The Complete 2026 Checklist for Fast Approval
                </Typography>

                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                  <Clock size={16} />
                  <Typography variant="b2">October 6, 2026</Typography>
                  <span className="mx-2">•</span>
                  <Typography variant="b2">By Kishan Baranwal</Typography>
                </div>

                {/* Blog Article Body */}
                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                  {/* Featured Snippet Box */}
                  <div className="bg-slate-50 border-l-4 border-[#1e3a8a] p-4 rounded-r-lg">
                    <p className="text-gray-700 italic m-0">
                      Applying for a business loan in India requires a structured set of documents, including KYC proof, GST registration, bank statements, and audited financial records. Having the complete document checklist ready before submitting your application to banks or NBFCs ensures a seamless verification process, reduces rejection risks, and accelerates loan disbursement for working capital or expansion needs.
                    </p>
                  </div>

                  <p>
                    Securing a business loan is one of the most effective ways to expand operations, purchase machinery, or manage daily working capital needs. However, the speed of your loan approval depends heavily on how well-organized your paperwork is. Banks and financial institutions evaluate your creditworthiness, financial stability, and legal standing using your submitted documentation.
                  </p>

                  <p>
                    Whether you are applying for an MSME loan, a proprietorship business loan, or a corporate credit line, maintaining a pre-verified document repository eliminates processing delays and ensures faster approval.
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Key Highlights of Business Loan Documentation
                  </h2>

                  <div className="overflow-x-auto my-4">
                    <table className="w-full border-collapse border border-gray-200 text-left text-sm">
                      <thead className="bg-slate-100 text-gray-800">
                        <tr>
                          <th className="border border-gray-200 p-3">Feature / Category</th>
                          <th className="border border-gray-200 p-3">Required Details &amp; Criteria</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-200 p-3 font-semibold">Primary KYC</td>
                          <td className="border border-gray-200 p-3">PAN Card (Mandatory for entity &amp; applicant), Aadhaar, Passport</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-3 font-semibold">Financial Horizon</td>
                          <td className="border border-gray-200 p-3">Last 6–12 months bank statements &amp; 2–3 years ITR</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-3 font-semibold">Entity Types Covered</td>
                          <td className="border border-gray-200 p-3">Proprietorship, Partnership, LLPs, Pvt Ltd Companies</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-3 font-semibold">Turnaround Impact</td>
                          <td className="border border-gray-200 p-3">Digital PDFs speed up underwriting by up to 50%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Complete Document Checklist by Category
                  </h2>

                  <h3 className="text-lg font-semibold text-gray-800 pt-2">
                    1. Identity &amp; Address Proof (KYC Documents)
                  </h3>
                  <p>
                    KYC verification is mandatory for the business entity as well as all primary applicants, co-applicants, partners, and company directors:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Identity Proof:</strong> PAN Card (Primary identifier), Passport, Voter ID, or Driving License.</li>
                    <li><strong>Personal Address Proof:</strong> Aadhaar Card, Passport, Utility Bills (Electricity/Water bill under 3 months old), or Registered Rent Agreement.</li>
                    <li><strong>Business Address Proof:</strong> GST Registration Certificate, Shop &amp; Establishment License, Commercial Electricity Bill, or Lease Agreement for the commercial premises.</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-800 pt-2">
                    2. Financial Documents (Core Underwriting Requirements)
                  </h3>
                  <p>
                    Financial statements give lenders visibility into your cash flows, profitability, and debt-servicing capability:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Bank Account Statements:</strong> Primary business bank account statements for the last 6 to 12 months (downloaded directly as Net Banking PDFs).</li>
                    <li><strong>Income Tax Returns (ITR):</strong> Filed ITRs for the last 2 to 3 years along with the detailed Computation of Income sheet.</li>
                    <li><strong>Audited Financial Statements:</strong> CA-certified Balance Sheet, Profit &amp; Loss (P&amp;L) Account Statement, Audit Report, and Schedules for the last 2–3 financial years.</li>
                    <li><strong>GST Returns:</strong> GSTR-3B and GSTR-1 filings for the last 6 to 12 months.</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-800 pt-2">
                    3. Entity &amp; Ownership Proofs According to Business Structure
                  </h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Proprietorship Firm:</strong> GST Certificate, Trade License, or Udyam (MSME) Registration Certificate.</li>
                    <li><strong>Partnership Firm:</strong> Registered Partnership Deed, Firm PAN Card, and Authorised Partner Resolution.</li>
                    <li><strong>Pvt Ltd / Public Ltd Company:</strong> Certificate of Incorporation (CoI), Memorandum of Association (MOA), Articles of Association (AOA), Company PAN Card, and Board Resolution authorizing the loan borrowing.</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-800 pt-2">
                    4. Existing Loans &amp; Credit Track Record
                  </h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Sanction Letters:</strong> Copy of sanction letters and 12-month repayment tracks for all ongoing personal, business, or vehicle loans.</li>
                    <li><strong>No Dues Certificate (NDC):</strong> NDC from lenders for any loans closed in the last 12 months.</li>
                    <li><strong>Projected Financials:</strong> CA-certified projected balance sheet and profitability estimates for the next 1–2 years (required primarily for large working capital loans).</li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    How to Prepare Your Application for 4-Step Fast Approval
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Step 1: Organize Digital PDFs:</strong> Download original e-statements, GST PDFs, and ITR-V forms instead of uploading scanned phone photos.</li>
                    <li><strong>Step 2: Maintain Clean Banking:</strong> Avoid cheque bounces, ECS failures, or low-balance charges in your primary operating account.</li>
                    <li><strong>Step 3: Verify CIBIL Ratings:</strong> Ensure both your personal credit score and Commercial CIBIL score are above 750 before applying.</li>
                    <li><strong>Step 4: Submit Full Sets Together:</strong> Submit KYC, financial, and business entity proofs in a single complete package to prevent underwriting holds.</li>
                  </ul>

                  {/* FAQ Section */}
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                    <h2 className="text-[#1e3a8a] text-xl font-bold mb-4 flex items-center gap-2">
                      <HelpCircle size={20} /> Frequently Asked Questions (FAQ)
                    </h2>
                    <ul className="space-y-4">
                      <li>
                        <strong>Q1: Is a PAN card compulsory for a business loan?</strong>
                        <br />
                        Yes. A PAN card is mandatory for the individual applicant as well as for the business entity (in cases of Partnerships, LLPs, and Companies).
                      </li>
                      <li>
                        <strong>Q2: Can I get a business loan without submitting ITR?</strong>
                        <br />
                        Micro-loans or specialized MSME schemes may offer small collateral-free loans based solely on GST returns and bank statements, but traditional bank business loans generally require 2–3 years of filed ITRs.
                      </li>
                      <li>
                        <strong>Q3: What if my business address is a rented property?</strong>
                        <br />
                        You can submit a valid, registered Rent/Lease Agreement along with a recent utility bill (electricity or gas bill) under the landlord&apos;s name as proof of business address.
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
                    Apply for Unsecured Business Loans Today
                  </Typography>
                  <Typography variant="b2" className="text-gray-300 mb-6 block">
                    Get quick approvals and hassle-free funding with{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/loan/unsecured/business"
                      className="text-blue-400 hover:underline"
                    >
                      Money King Financial Services
                    </NextLink>{" "}
                    now.
                  </Typography>

                  <div className="flex flex-wrap gap-4 mt-2">
                    <NextLink
                      href="https://moneykingfinancial.com/services/loan/unsecured/business"
                      className="inline-block bg-blue-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-700 transition"
                    >
                      Check Eligibility
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

export default Blog118;