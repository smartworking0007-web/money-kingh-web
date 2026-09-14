"use client";

import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export interface Blog100Props {
  title?: string;
}

export const Blog100: React.FC<Blog100Props> = ({ title }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const defaultTitle =
    "How to Get an Instant Unsecured Business Loan in Delhi: Complete 2026 Guide for Fast Approval";
  const displayTitle = title || defaultTitle;

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-full flex justify-center px-4"
        >
          <BlogCard1
            title={displayTitle}
            category="LOANS"
            author="Sumit Mishra"
            date="September 10, 2026"
            image="/images/blog/blog-100.jpeg"
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
                  src="/images/blog/blog-100.jpeg"
                  alt="unsecured loan in delhi"
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
                  {displayTitle}
                </Typography>

                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                  <Clock size={16} />
                  <Typography variant="b2">September 10, 2026</Typography>
                </div>

                {/* Blog Article Body */}
                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                  {/* Featured Snippet Box */}
                  <div className="bg-slate-50 border-l-4 border-[#1e3a8a] p-4 rounded-r-lg">
                    <p className="text-gray-700 italic m-0">
                      To get an unsecured business loan in Delhi quickly, ensure your business has been operational for at least 12 to 24 months, maintains a minimum monthly turnover of ₹1 Lakh to ₹2 Lakh, and holds a CIBIL score above 680 to 700. Apply online through digital lenders or fintech platforms with key documents including 12 months of bank statements, GST returns, PAN card, Aadhaar card, and business registration proof. Fast-track approval usually happens within 24 to 48 hours when your bank statements reflect steady cash flow and all KYC records match seamlessly.
                    </p>
                  </div>

                  <p>
                    Running a enterprise in Delhi comes with its own unique set of opportunities and financial demands. Whether you operate a retail shop in Chandni Chowk, a bustling trading firm in Karol Bagh, a manufacturing unit in Okhla, or a tech startup in Connaught Place, immediate access to capital is often the difference between scaling up and missing out on business expansion.
                  </p>
                  <p>
                    Unlike traditional bank loans that require you to pledge physical collateral like property or fixed deposits, an unsecured{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/loan/unsecured/business"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      business loan
                    </NextLink>{" "}
                    allows you to secure funds based purely on your business health, cash flows, and creditworthiness. If you need funds urgently for working capital, inventory purchase, equipment upgrades, or seasonal cash flow requirements, here is a step-by-step roadmap to getting an unsecured business loan approved quickly in Delhi.
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Understanding Unsecured Business Loans in Delhi NCR
                  </h2>
                  <p>
                    An unsecured business loan is a short-to-medium-term credit facility provided by banks, Non-Banking Financial Companies (NBFCs), and fintech lending platforms without requiring any physical security or collateral. Lenders evaluate your business stability, daily or monthly bank balance, GST filings, and personal/business CIBIL scores to determine your loan eligibility and interest rates.
                  </p>
                  <p>
                    Because Delhi is one of India&apos;s largest trading and commercial hubs, financial institutions offer specialized digital lending solutions tailored specifically to local traders, wholesalers, manufacturers, and service providers. With digital verification and automated underwriting, loan processing times have drastically dropped from weeks to less than 48 hours.
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Step-By-Step Guide to Securing Quick Loan Approval
                  </h2>

                  <h3 className="text-lg font-bold text-gray-800 pt-2">
                    Step 1: Keep Your Eligibility Metrics Strong Before Applying
                  </h3>
                  <p>
                    Lenders in Delhi look at specific parameters before approving an instant collateral-free business loan:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Business Vintage:</strong> Your business must be active for a minimum of 1 to 2 years.</li>
                    <li><strong>Annual Turnover:</strong> A healthy annual turnover ranging between ₹12 Lakhs and ₹25 Lakhs (or average monthly banking credits of at least ₹1 Lakh).</li>
                    <li><strong>Credit Score:</strong> A personal CIBIL score of 700 or higher significantly speeds up approval and helps negotiate better interest rates.</li>
                    <li><strong>Banking Discipline:</strong> Consistent bank balances with minimal cheque bounces or auto-debit bounces over the past 12 months.</li>
                  </ul>

                  <h3 className="text-lg font-bold text-gray-800 pt-2">
                    Step 2: Organize Your Documents in Advance
                  </h3>
                  <p>
                    Delay in document submission is the primary reason business loan applications stall. Keep digital copies (PDF format) of the following ready:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Identity &amp; Address Proof:</strong> PAN Card and Aadhaar Card of the business owner/partners/directors.</li>
                    <li><strong>Business Proof:</strong> GST registration certificate, MSME/Udyam Registration, Shop &amp; Establishment license, or Trade License.</li>
                    <li><strong>Financial Records:</strong> 12 months of updated bank account statements (main operational account) in PDF format downloaded directly from net banking.</li>
                    <li><strong>Tax Filings:</strong> Latest 1 to 2 years of Income Tax Returns (ITR) along with computation of income, balance sheets, and Profit &amp; Loss statements (for higher loan amounts above ₹10 Lakhs).</li>
                  </ul>

                  <h3 className="text-lg font-bold text-gray-800 pt-2">
                    Step 3: Choose the Right Financial Institution
                  </h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Fintech Lenders &amp; Digital NBFCs:</strong> Ideal if speed is your absolute priority. They utilize automated algorithms to analyze bank statements and GST data, often disbursing funds within 24 to 48 hours.</li>
                    <li><strong>Private Banks:</strong> Offer competitive interest rates but usually take 3 to 7 working days to verify physical business locations and review financial reports.</li>
                  </ul>

                  <h3 className="text-lg font-bold text-gray-800 pt-2">
                    Step 4: Submit a Clean Digital Application
                  </h3>
                  <p>
                    Apply online through the lender&apos;s official portal. Ensure that all details entered match your PAN and Aadhaar records exactly. Any discrepancy in business address, name spelling, or date of birth will trigger manual verification, slowing down your loan application.
                  </p>

                  <h3 className="text-lg font-bold text-gray-800 pt-2">
                    Step 5: Complete Video KYC and Banking Verification
                  </h3>
                  <p>
                    Modern fintechs use Bank Account Aggregator services or net banking credentials to verify bank statements instantly. Complete your Video KYC (VKYC) promptly using your original PAN card to avoid field-verification delays.
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Key Tips to Speed Up Your Loan Disbursement
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Avoid Multiple Simultaneous Applications:</strong> Applying with 4 to 5 lenders at the same time creates multiple hard inquiries on your credit report, lowering your CIBIL score and flagging your profile as credit-hungry.
                    </li>
                    <li>
                      <strong>Highlight Strong GST Filings:</strong> Regular, non-zero GST filings signal reliable business activity to lenders.
                    </li>
                    <li>
                      <strong>Maintain Healthy Average Monthly Balance (AMB):</strong> Avoid letting your bank account balance drop to zero near the end of the month.
                    </li>
                    <li>
                      <strong>Utilize MSME Registration:</strong> Having an active Udyam registration gives lenders additional confidence regarding your business identity and eligibility under government financial frameworks.
                    </li>
                  </ul>

                  {/* FAQ Section */}
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                    <h2 className="text-[#1e3a8a] text-xl font-bold mb-4 flex items-center gap-2">
                      <HelpCircle size={20} /> Frequently Asked Questions (FAQ)
                    </h2>
                    <ul className="space-y-4">
                      <li>
                        <strong>Q1: How fast can I get an unsecured business loan in Delhi?</strong>
                        <br />
                        A: Fintech lenders and digital NBFCs can process and disburse unsecured business loans within 24 to 48 hours after you submit complete documentation and pass digital verification. Traditional banks may take 3 to 7 business days.
                      </li>
                      <li>
                        <strong>Q2: What is the minimum CIBIL score required for a collateral-free business loan?</strong>
                        <br />
                        A: A credit score of 700 or above is ideal for fast approval. However, some NBFCs consider applicants with scores between 650 and 700 if their monthly bank cash flows and GST filings are strong.
                      </li>
                      <li>
                        <strong>Q3: Can I get an unsecured business loan in Delhi without GST registration?</strong>
                        <br />
                        A: Yes, small business owners or micro-enterprises can apply using alternative proofs such as a Shop &amp; Establishment license, Trade License, or Udyam Registration, though GST-registered businesses typically receive higher loan sanctions and better interest rates.
                      </li>
                      <li>
                        <strong>Q4: What is the average interest rate for unsecured business loans in Delhi?</strong>
                        <br />
                        A: Interest rates generally range from 13% to 24% per annum, depending on your business stability, turnover, credit score, and financial background.
                      </li>
                      <li>
                        <strong>Q5: How much loan amount can I get without offering collateral?</strong>
                        <br />
                        A: Unsecured business loan amounts usually range from ₹50,000 up to ₹50 Lakhs, depending on your company&apos;s monthly turnover and banking history. You can apply directly on our{" "}
                        <NextLink
                          href="https://moneykingfinancial.com/"
                          className="text-blue-600 font-bold hover:underline"
                        >
                          financial portal
                        </NextLink>{" "}
                        or check options for{" "}
                        <NextLink
                          href="https://moneykingfinancial.com/services/loan/unsecured/business"
                          className="text-blue-600 font-bold hover:underline"
                        >
                          unsecured business loans
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
                    Apply for an Instant Unsecured Business Loan in Delhi Today!
                  </Typography>
                  <Typography variant="b2" className="text-gray-300 mb-6 block">
                    Get quick collateral-free financing tailored for your Delhi NCR enterprise with fast approval, minimal documentation, and flexible repayment options through Money King Financial Services.
                  </Typography>

                  <NextLink
                    href="https://moneykingfinancial.com/services/loan/unsecured/business"
                    className="inline-block bg-red-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-red-700 transition-colors"
                  >
                    Apply for Business Loan
                  </NextLink>
                </div>

                {/* Social Share Section (Fixed: removed title prop) */}
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