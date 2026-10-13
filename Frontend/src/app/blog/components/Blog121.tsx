"use client";

import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export const Blog121: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-full flex justify-center px-4"
        >
          <BlogCard1
            title="Loan Against Property Interest Rates 2026: Complete Guide to Compare & Secure Lowest Rates"
            category="LAP LOAN"
            author="Kishan Baranwal"
            date="October 13, 2026"
            image="/images/blog/Blog-121.jpg"
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
                    src="/images/blog/Blog-121.jpg"
                    alt="loan against property interest rate"
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
                    href="https://moneykingfinancial.com/services/loan/secured/property"
                    className="text-[#1e3a8a] hover:underline"
                  >
                    Loan Against Property Interest Rates 2026
                  </NextLink>
                  : Complete Guide to Compare &amp; Secure Lowest Rates
                </Typography>

                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                  <Clock size={16} />
                  <Typography variant="b2">October 13, 2026</Typography>
                  <span className="mx-2">•</span>
                  <Typography variant="b2">By Kishan Baranwal</Typography>
                </div>

                {/* Blog Article Body */}
                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                  {/* Featured Snippet Box */}
                  <div className="bg-slate-50 border-l-4 border-[#1e3a8a] p-4 rounded-r-lg">
                    <p className="text-gray-700 italic m-0">
                      A Loan Against Property (LAP), also known as a mortgage loan, allows property owners to leverage the market value of their residential or commercial real estate to secure high-value funding at low interest rates. Since LAP is a secured loan, banks and NBFCs offer significantly lower interest rates compared to personal loans, with flexible repayment tenures extending up to 15–20 years.
                    </p>
                  </div>

                  <p>
                    Whether you need funds for business expansion, debt consolidation, higher education, or medical emergencies, unlocking the equity in your property via a{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/loan/secured/property"
                      className="text-[#1e3a8a] font-semibold hover:underline"
                    >
                      Loan Against Property (LAP)
                    </NextLink>{" "}
                    is one of the most cost-effective financial strategies.
                  </p>

                  <p>
                    Because the loan is backed by tangible collateral, financial institutions face lower credit risk—allowing them to provide higher sanction limits at competitive <strong>loan against property interest rate</strong> slabs.
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Overview: Key Highlights of Loan Against Property (LAP)
                  </h2>

                  <div className="overflow-x-auto my-4">
                    <table className="w-full border-collapse border border-gray-200 text-left text-sm">
                      <thead className="bg-slate-100 text-gray-800">
                        <tr>
                          <th className="border border-gray-200 p-3">Feature / Factor</th>
                          <th className="border border-gray-200 p-3">Standard Industry Benchmark</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-200 p-3 font-semibold">Interest Rate Range</td>
                          <td className="border border-gray-200 p-3">8.50% p.a. – 12.50% p.a. (Varies by lender)</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-3 font-semibold">Loan Amount (LTV)</td>
                          <td className="border border-gray-200 p-3">Up to 60% – 75% of the property&apos;s market value</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-3 font-semibold">Maximum Tenure</td>
                          <td className="border border-gray-200 p-3">Up to 15 to 20 Years</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-3 font-semibold">Processing Fees</td>
                          <td className="border border-gray-200 p-3">0.50% to 2.00% of the loan amount</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Types of Interest Rates Offered on LAP
                  </h2>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>
                      <strong>Floating Interest Rates:</strong> Linked to external benchmarks like the RBI Repo Rate (RLLR/MCLR). The interest rate fluctuates with market conditions, offering lower initial rates and zero prepayment penalties for individual borrowers.
                    </li>
                    <li>
                      <strong>Fixed Interest Rates:</strong> The interest rate remains unchanged throughout the tenure, providing predictable <strong>Equated Monthly Installment (EMI)</strong> payouts. However, fixed rates are typically 1%–2% higher than floating rates.
                    </li>
                  </ol>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Key Factors Influencing Your LAP Interest Rate
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Property Type &amp; Market Value:</strong> Commercial, residential, and industrial properties carry different risk profiles. Fully approved residential properties generally fetch the lowest interest rates.
                    </li>
                    <li>
                      <strong>Credit Score (CIBIL):</strong> A CIBIL score of 750+ demonstrates strong repayment capability and helps you negotiate the lowest interest rate slabs.
                    </li>
                    <li>
                      <strong>Income &amp; Repayment Capacity:</strong> Stable monthly cash flows, high net income, and a low existing Debt-to-Income (DTI) ratio reduce lender risk.
                    </li>
                    <li>
                      <strong>Loan-to-Value (LTV) Ratio:</strong> Opting for a lower loan amount relative to your property&apos;s total value lowers the lender&apos;s exposure, resulting in better interest rates.
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    How to Get the Lowest Interest Rate on Loan Against Property
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Compare Multiple Lenders:</strong> Evaluate offers from leading public/private banks and NBFCs before finalizing.
                    </li>
                    <li>
                      <strong>Maintain Clean Property Documentation:</strong> Clear title deeds, chain documents, and up-to-date property tax receipts prevent risk loading on interest rates.
                    </li>
                    <li>
                      <strong>Consider LAP Balance Transfer:</strong> If your current lender charges a high rate, transfer your existing loan to another bank offering a lower interest rate top-up option.
                    </li>
                  </ul>

                  {/* FAQ Section */}
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                    <h2 className="text-[#1e3a8a] text-xl font-bold mb-4 flex items-center gap-2">
                      <HelpCircle size={20} /> Frequently Asked Questions (FAQ)
                    </h2>
                    <ul className="space-y-4">
                      <li>
                        <strong>Q1: Is Loan Against Property cheaper than a Personal Loan?</strong>
                        <br />
                        Yes. LAP is a secured loan backed by property collateral, making its interest rates significantly lower (typically 8.50%–12%) compared to unsecured personal loans (11%–24%).
                      </li>
                      <li>
                        <strong>Q2: Can I apply for a LAP on a rented or commercial property?</strong>
                        <br />
                        Yes. You can mortgage residential houses, self-occupied flats, commercial shops, office spaces, or industrial plots, provided you have clear title ownership.
                      </li>
                      <li>
                        <strong>Q3: Are there any tax benefits on Loan Against Property?</strong>
                        <br />
                        Yes, but only if the loan proceeds are utilized for specific purposes:
                        <br />- Section 24(b): Tax deductions on interest if funds are used for purchasing or constructing another residential property.
                        <br />- Business Expense: Interest paid can be claimed as a deductible business expense if the funds are used for business expansion.
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
                    Apply For Loan Against Property Today
                  </Typography>
                  <Typography variant="b2" className="text-gray-300 mb-6 block">
                    Check the best interest rates and unlock the value of your property with{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/loan/secured/property"
                      className="text-blue-400 hover:underline"
                    >
                      Money King Financial Services
                    </NextLink>{" "}
                    now.
                  </Typography>

                  <div className="flex flex-wrap gap-4 mt-2">
                    <NextLink
                      href="https://moneykingfinancial.com/services/loan/secured/property"
                      className="inline-block bg-blue-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-700 transition"
                    >
                      Apply For LAP Now
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

export default Blog121;