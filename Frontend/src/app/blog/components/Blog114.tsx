"use client";

import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export const Blog114: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-full flex justify-center px-4"
        >
          <BlogCard1
            title="Home Loan Interest Rates 2026: Complete Guide on Eligibility, EMIs & Tax Benefits"
            category="HOME LOANS"
            author="Kishan Baranwal"
            date="September 30, 2026"
            image="/images/blog/Blog-114.jpg"
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
                    src="/images/blog/Blog-114.jpg"
                    alt="home loan"
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
                    href="https://moneykingfinancial.com/services/loan/secured/home"
                    className="text-[#1e3a8a] hover:underline"
                  >
                    Home Loan Interest Rates 2026
                  </NextLink>
                  : Complete Guide on Eligibility, EMIs &amp; Tax Benefits
                </Typography>

                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                  <Clock size={16} />
                  <Typography variant="b2">September 30, 2026</Typography>
                  <span className="mx-2">•</span>
                  <Typography variant="b2">By Kishan Baranwal</Typography>
                </div>

                {/* Blog Article Body */}
                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                  {/* Featured Snippet Optimized Intro */}
                  <div className="bg-slate-50 border-l-4 border-[#1e3a8a] p-4 rounded-r-lg">
                    <p className="text-gray-700 italic m-0">
                      Home loan interest rates in India generally range between 8.35% and 10.50% per annum, depending on the borrower&apos;s CIBIL score, income stability, employment type, and loan amount. Home loans are long-term financial commitments with tenure options extending up to 30 years, offered under floating or fixed interest rate structures linked to the RBI Repo Rate.
                    </p>
                  </div>

                  <p>
                    Buying a home is one of the most significant financial milestones in a person&apos;s life. However, because property acquisition involves substantial capital, choosing the right home loan with low interest rates and flexible repayment terms is critical to keeping long-term financial stress at bay.
                  </p>

                  <p>
                    Whether you are purchasing a ready-to-move apartment, constructing on a plot, or transferring your existing housing loan for lower EMIs, understanding how home loan interest rates work can save you lakhs of rupees over your loan tenure.
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Floating vs. Fixed Home Loan Interest Rates
                  </h2>
                  <p>
                    Lenders in India offer home loans under two main interest rate structures:
                  </p>

                  <div className="overflow-x-auto my-4">
                    <table className="w-full border-collapse border border-gray-200 text-left text-sm">
                      <thead className="bg-slate-100 text-gray-800">
                        <tr>
                          <th className="border border-gray-200 p-3">Feature</th>
                          <th className="border border-gray-200 p-3">Floating Interest Rate</th>
                          <th className="border border-gray-200 p-3">Fixed Interest Rate</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-200 p-3 font-semibold">Rate Movement</td>
                          <td className="border border-gray-200 p-3">Fluctuates according to RBI repo rate changes (RLLR).</td>
                          <td className="border border-gray-200 p-3">Remains constant for a specified period or entire tenure.</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-3 font-semibold">Prepayment Charges</td>
                          <td className="border border-gray-200 p-3">Zero penalty as per RBI guidelines for individual borrowers.</td>
                          <td className="border border-gray-200 p-3">Prepayment/foreclosure charges (2%–5%) may apply.</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-3 font-semibold">Initial Rate</td>
                          <td className="border border-gray-200 p-3">Typically 0.50% to 1.50% lower than fixed rates.</td>
                          <td className="border border-gray-200 p-3">Slightly higher than floating interest rates.</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-3 font-semibold">Best Choice</td>
                          <td className="border border-gray-200 p-3">Recommended Choice for long-term savings.</td>
                          <td className="border border-gray-200 p-3">Suitable only during rising interest rate cycles.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Key Eligibility Criteria for Home Loans
                  </h2>
                  <p>
                    To qualify for a high loan amount at competitive interest rates, banks evaluate several parameters:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Credit Score (CIBIL):</strong> A CIBIL score of 750 or higher guarantees faster approval and qualifies you for the lender&apos;s lowest interest bracket.
                    </li>
                    <li>
                      <strong>Age Limit:</strong> Salaried individuals aged between 21 and 60 years, and self-employed professionals up to 65–70 years.
                    </li>
                    <li>
                      <strong>Debt-to-Income Ratio (FOIR):</strong> Your existing total EMIs (including credit cards or personal loans) should not exceed 50% of your net monthly income.
                    </li>
                    <li>
                      <strong>Property Valuation (LTV Ratio):</strong> Lenders finance up to 75% to 90% of the property&apos;s market value, while the remaining margin money is paid by the homebuyer.
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Maximum Tax Savings on Home Loans
                  </h2>
                  <p>
                    Applying for a housing loan brings substantial tax deductions under the Income Tax Act, 1961:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Section 80C:</strong> Claim tax deduction up to ₹1.5 Lakh per financial year on the principal repayment component.
                    </li>
                    <li>
                      <strong>Section 24(b):</strong> Claim tax deduction up to ₹2 Lakh per financial year on the interest paid for a self-occupied property.
                    </li>
                    <li>
                      <strong>Joint Home Loan Tax Benefit:</strong> If you apply jointly with your spouse or parent as a co-borrower, both individuals can claim separate tax deductions up to the maximum limit.
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    How to Secure the Lowest Home Loan Interest Rate
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Maintain a High CIBIL Score:</strong> Pay utility bills, credit card balances, and short-term debt on time.
                    </li>
                    <li>
                      <strong>Opt for a Joint Home Loan:</strong> Adding a female co-applicant (mother/spouse) often unlocks a 0.05% (5 bps) concession on home loan interest rates with major banks.
                    </li>
                    <li>
                      <strong>Make a Higher Down Payment:</strong> Paying 20%–25% as down payment instead of the minimum 10% reduces the lender&apos;s risk and lowers overall interest costs.
                    </li>
                  </ul>

                  {/* FAQ Section */}
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                    <h2 className="text-[#1e3a8a] text-xl font-bold mb-4 flex items-center gap-2">
                      <HelpCircle size={20} /> Frequently Asked Questions (FAQ)
                    </h2>
                    <ul className="space-y-4">
                      <li>
                        <strong>Q1: What is the ideal CIBIL score needed for a home loan approval?</strong>
                        <br />
                        A CIBIL score of 750+ is ideal for getting instant home loan approvals and securing the lowest interest rates offered by top banks and HFCs.
                      </li>
                      <li>
                        <strong>Q2: Can I transfer my existing home loan to a lower interest rate bank?</strong>
                        <br />
                        Yes. You can opt for a Home Loan Balance Transfer (HLBT) to move your outstanding loan to another lender offering lower interest rates, zero foreclosure fees, and top-up loan options.
                      </li>
                      <li>
                        <strong>Q3: Are there any prepayment penalties on floating rate home loans?</strong>
                        <br />
                        No. As per Reserve Bank of India (RBI) regulations, banks and housing finance companies cannot charge prepayment or foreclosure penalties on floating-rate home loans given to individual borrowers.
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
                    Get Instant Secured Home Loans
                  </Typography>
                  <Typography variant="b2" className="text-gray-300 mb-6 block">
                    Compare the best interest rates and apply seamlessly with{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/loan/secured/home"
                      className="text-blue-400 hover:underline"
                    >
                      Money King Financial Services
                    </NextLink>{" "}
                    today.
                  </Typography>

                  <div className="flex flex-wrap gap-4 mt-2">
                    <NextLink
                      href="https://moneykingfinancial.com/services/loan/secured/home"
                      className="inline-block bg-blue-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-700 transition"
                    >
                      Apply Now
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