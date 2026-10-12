"use client";

import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export const Blog119: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-full flex justify-center px-4"
        >
          <BlogCard1
            title="Home Loan Calculator Guide 2026: Calculate Your EMI, Interest & Plan Your Dream Home"
            category="HOME LOAN"
            author="Kishan Baranwal"
            date="October 10, 2026"
            image="/images/blog/Blog-119.jpeg"
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
                    src="/images/blog/Blog-119.jpeg"
                    alt="home loan calculator"
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
                    Home Loan Calculator Guide 2026
                  </NextLink>
                  : Calculate Your EMI, Interest &amp; Plan Your Dream Home
                </Typography>

                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                  <Clock size={16} />
                  <Typography variant="b2">October 12, 2026</Typography>
                  <span className="mx-2">•</span>
                  <Typography variant="b2">By Kishan Baranwal</Typography>
                </div>

                {/* Blog Article Body */}
                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                  {/* Featured Snippet Box */}
                  <div className="bg-slate-50 border-l-4 border-[#1e3a8a] p-4 rounded-r-lg">
                    <p className="text-gray-700 italic m-0">
                      A Home Loan EMI Calculator is an online financial tool that helps homebuyers estimate their exact monthly installment (EMI), total interest payable, and total loan cost before applying for a housing loan. By inputting the loan amount, interest rate, and tenure, borrowers can instantly evaluate their repayment capacity and choose the most affordable loan offer.
                    </p>
                  </div>

                  <p>
                    Buying a house is one of the biggest financial decisions in a person’s life. While securing a home loan makes property purchase accessible, managing long-term monthly repayments requires careful planning. This is where an online Home Loan Calculator plays a crucial role.
                  </p>

                  <p>
                    Instead of relying on complex manual financial formulas, using an online home loan EMI calculator allows you to test different loan amounts, tenure options, and interest rates in seconds—helping you avoid financial strain during your homeownership journey.
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Key Highlights of Home Loan EMI Calculation
                  </h2>

                  <div className="overflow-x-auto my-4">
                    <table className="w-full border-collapse border border-gray-200 text-left text-sm">
                      <thead className="bg-slate-100 text-gray-800">
                        <tr>
                          <th className="border border-gray-200 p-3">Feature / Factor</th>
                          <th className="border border-gray-200 p-3">Description &amp; Impact</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-200 p-3 font-semibold">Primary Inputs</td>
                          <td className="border border-gray-200 p-3">Principal Amount, Interest Rate (p.a.), Loan Tenure (Years)</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-3 font-semibold">Output Results</td>
                          <td className="border border-gray-200 p-3">Monthly EMI, Total Interest Payable, Total Payment (Principal + Interest)</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-3 font-semibold">Maximum Tenure</td>
                          <td className="border border-gray-200 p-3">Up to 30 Years (Lower EMI, higher total interest)</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-3 font-semibold">Best Practice</td>
                          <td className="border border-gray-200 p-3">Keep EMI below 40% of your net monthly income</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    How Does a Home Loan EMI Calculation Work?
                  </h2>
                  <p>
                    Home loan EMIs are calculated using a mathematical formula that balances the principal repayment and compounding interest over your chosen tenure.
                  </p>
                  <p>
                    The standard EMI formula used by banks (such as SBI, ICICI Bank, HDFC Bank) is:
                  </p>

                  {/* Formula Display Box */}
                  <div className="bg-slate-100 p-4 rounded-lg font-mono text-gray-800 text-center text-sm md:text-base my-4">
                    EMI = [ P × R × (1+R)^N ] / [ (1+R)^N - 1 ]
                  </div>

                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li><strong>P</strong> = Principal Loan Amount (The total amount borrowed from the bank)</li>
                    <li><strong>R</strong> = Monthly Interest Rate (Annual Interest Rate divided by 12 and then by 100)</li>
                    <li><strong>N</strong> = Tenure in Months (Total number of monthly installments, e.g., 20 years = 240 months)</li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Illustrative Example: How Tenure Impacts Your EMI &amp; Total Interest
                  </h2>
                  <p>
                    Suppose you take a ₹50,00,000 (₹50 Lakhs) Home Loan at an interest rate of 8.5% per annum. Here is how choosing different tenures affects your monthly payout and interest cost:
                  </p>

                  <div className="overflow-x-auto my-4">
                    <table className="w-full border-collapse border border-gray-200 text-left text-sm">
                      <thead className="bg-slate-100 text-gray-800">
                        <tr>
                          <th className="border border-gray-200 p-3">Loan Amount</th>
                          <th className="border border-gray-200 p-3">Interest Rate</th>
                          <th className="border border-gray-200 p-3">Loan Tenure</th>
                          <th className="border border-gray-200 p-3">Monthly EMI</th>
                          <th className="border border-gray-200 p-3">Total Interest Payable</th>
                          <th className="border border-gray-200 p-3">Total Payment</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-200 p-3 font-semibold">₹50 Lakhs</td>
                          <td className="border border-gray-200 p-3">8.5% p.a.</td>
                          <td className="border border-gray-200 p-3">15 Years</td>
                          <td className="border border-gray-200 p-3 font-semibold text-slate-900">₹49,237</td>
                          <td className="border border-gray-200 p-3">₹38,62,651</td>
                          <td className="border border-gray-200 p-3 font-semibold">₹88,62,651</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-3 font-semibold">₹50 Lakhs</td>
                          <td className="border border-gray-200 p-3">8.5% p.a.</td>
                          <td className="border border-gray-200 p-3">20 Years</td>
                          <td className="border border-gray-200 p-3 font-semibold text-slate-900">₹43,391</td>
                          <td className="border border-gray-200 p-3">₹54,13,879</td>
                          <td className="border border-gray-200 p-3 font-semibold">₹1,04,13,879</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-3 font-semibold">₹50 Lakhs</td>
                          <td className="border border-gray-200 p-3">8.5% p.a.</td>
                          <td className="border border-gray-200 p-3">25 Years</td>
                          <td className="border border-gray-200 p-3 font-semibold text-slate-900">₹40,261</td>
                          <td className="border border-gray-200 p-3">₹70,78,328</td>
                          <td className="border border-gray-200 p-3 font-semibold">₹1,20,78,328</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-3 font-semibold">₹50 Lakhs</td>
                          <td className="border border-gray-200 p-3">8.5% p.a.</td>
                          <td className="border border-gray-200 p-3">30 Years</td>
                          <td className="border border-gray-200 p-3 font-semibold text-slate-900">₹38,446</td>
                          <td className="border border-gray-200 p-3">₹88,40,490</td>
                          <td className="border border-gray-200 p-3 font-semibold">₹1,38,40,490</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="bg-amber-50 border-l-4 border-amber-400 p-3 text-sm text-amber-900 font-medium rounded-r-lg">
                    <strong>Key Takeaway:</strong> Extending your tenure from 15 to 30 years reduces your monthly EMI by around ₹10,791, but it increases your total interest payout by more than ₹49 Lakhs!
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Why Should You Use an Online Home Loan Calculator Before Applying?
                  </h2>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>
                      <strong>Accurate Budgeting:</strong> Gives you an exact monthly repayment figure so you can plan household expenses without financial stress.
                    </li>
                    <li>
                      <strong>Instant &amp; Error-Free Comparison:</strong> Easily compare loan offers from different banks by tweaking interest rates and tenure.
                    </li>
                    <li>
                      <strong>Optimized Tenure Selection:</strong> Helps you strike the right balance between a comfortable EMI and minimal interest cost.
                    </li>
                    <li>
                      <strong>Prepayment Planning:</strong> Allows you to understand how making partial prepayments during the loan period can drastically shorten your tenure.
                    </li>
                  </ol>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    How to Lower Your Home Loan EMI &amp; Total Interest Cost
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Increase Your Down Payment:</strong> Paying 20%–30% upfront instead of the minimum 10% significantly reduces your principal amount and interest burden.
                    </li>
                    <li>
                      <strong>Opt for Partial Prepayments:</strong> Paying even one extra EMI every year or making lump-sum prepayments whenever you get a bonus directly reduces the principal.
                    </li>
                    <li>
                      <strong>Maintain a High CIBIL Score (750+):</strong> Lenders offer the lowest home loan interest rates to borrowers with excellent credit histories.
                    </li>
                    <li>
                      <strong>Consider Home Loan Balance Transfer:</strong> If another bank offers a significantly lower interest rate, transferring your active loan can save lakhs in interest.
                    </li>
                  </ul>

                  {/* FAQ Section */}
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                    <h2 className="text-[#1e3a8a] text-xl font-bold mb-4 flex items-center gap-2">
                      <HelpCircle size={20} /> Frequently Asked Questions (FAQ)
                    </h2>
                    <ul className="space-y-4">
                      <li>
                        <strong>Q1: What is the maximum tenure available for a home loan in India?</strong>
                        <br />
                        Most major banks and housing finance companies (HFCs) offer home loan tenures up to 30 years, subject to the borrower&apos;s age and retirement profile.
                      </li>
                      <li>
                        <strong>Q2: Does the home loan EMI remain the same throughout the tenure?</strong>
                        <br />
                        If you have a Fixed-Rate Home Loan, your EMI remains constant. However, for Floating-Rate Home Loans (which are most common), your EMI or loan tenure fluctuates when the RBI changes benchmark repo rates.
                      </li>
                      <li>
                        <strong>Q3: Can I change my home loan tenure after the loan is disbursed?</strong>
                        <br />
                        Yes. You can request your lender to adjust your tenure or EMI amount, especially when making partial prepayments or during rate revisions.
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
                    Apply for Home Loans Today
                  </Typography>
                  <Typography variant="b2" className="text-gray-300 mb-6 block">
                    Calculate your monthly installments and get best rates with{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/loan/secured/home"
                      className="text-blue-400 hover:underline"
                    >
                      Money King Financial Services
                    </NextLink>{" "}
                    now.
                  </Typography>

                  <div className="flex flex-wrap gap-4 mt-2">
                    <NextLink
                      href="https://moneykingfinancial.com/services/loan/secured/home"
                      className="inline-block bg-blue-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-700 transition"
                    >
                      Calculate &amp; Apply Now
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

export default Blog119;