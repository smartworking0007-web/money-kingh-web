"use client";

import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export const Blog116: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-full flex justify-center px-4"
        >
          <BlogCard1
            title="Home Loan EMI Calculator 2026: How to Calculate, Plan & Reduce Your Monthly EMIs"
            category="HOME LOANS"
            author="Kishan Baranwal"
            date="October 6, 2026"
            image="/images/blog/Blog-116.jpg"
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
                    src="/images/blog/Blog-116.jpg"
                    alt="home loan emi"
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
                    Home Loan EMI Calculator 2026
                  </NextLink>
                  : How to Calculate, Plan &amp; Reduce Your Monthly EMIs
                </Typography>

                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                  <Clock size={16} />
                  <Typography variant="b2">October 3, 2026</Typography>
                  <span className="mx-2">•</span>
                  <Typography variant="b2">By Kishan Baranwal</Typography>
                </div>

                {/* Blog Article Body */}
                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                  {/* Featured Snippet Box */}
                  <div className="bg-slate-50 border-l-4 border-[#1e3a8a] p-4 rounded-r-lg">
                    <p className="text-gray-700 italic m-0">
                      A Home Loan EMI (Equated Monthly Installment) is the fixed monthly amount a borrower pays to the bank until the loan is fully repaid. Calculated using the principal amount, interest rate, and repayment tenure, each EMI consists of both principal repayment and interest charges, with interest forming a major portion during the initial years.
                    </p>
                  </div>

                  <p>
                    Buying a house is a long-term financial commitment that spans anywhere from 10 to 30 years. Before applying for a housing loan, understanding your monthly EMI obligations is essential to avoid financial strain later on.
                  </p>

                  <p>
                    Using a Home Loan EMI Calculator helps homebuyers estimate exact monthly outflows, analyze amortization schedules, and choose the ideal loan tenure before signing an agreement.
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Understanding the Home Loan EMI Formula
                  </h2>
                  <p>
                    Banks calculate home loan EMIs using a standardized reducing-balance formula:
                  </p>

                  {/* Formula Box */}
                  <div className="bg-slate-100 p-4 rounded-lg font-mono text-gray-800 text-center text-sm md:text-base">
                    EMI = [ P × r × (1+r)^n ] / [ (1+r)^n - 1 ]
                  </div>
                  <p className="text-sm text-gray-500">
                    Where <strong>P</strong> = Principal Loan Amount, <strong>r</strong> = Monthly Interest Rate, and <strong>n</strong> = Loan Tenure in Months.
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Home Loan EMI Calculation Example
                  </h2>
                  <p>
                    If you take a home loan of ₹50 Lakhs at an interest rate of 8.50% p.a. for a 20-year tenure (240 months):
                  </p>

                  <div className="overflow-x-auto my-4">
                    <table className="w-full border-collapse border border-gray-200 text-left text-sm">
                      <thead className="bg-slate-100 text-gray-800">
                        <tr>
                          <th className="border border-gray-200 p-3">Parameter</th>
                          <th className="border border-gray-200 p-3">Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-200 p-3 font-semibold">Loan Amount (Principal)</td>
                          <td className="border border-gray-200 p-3">₹50,00,000</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-3 font-semibold">Interest Rate</td>
                          <td className="border border-gray-200 p-3">8.50% p.a.</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-3 font-semibold">Tenure</td>
                          <td className="border border-gray-200 p-3">20 Years (240 Months)</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-3 font-semibold">Monthly EMI</td>
                          <td className="border border-gray-200 p-3">₹43,391</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-3 font-semibold">Total Interest Payable</td>
                          <td className="border border-gray-200 p-3">₹54,13,879</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-3 font-semibold">Total Amount Payable</td>
                          <td className="border border-gray-200 p-3">₹1,04,13,879</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    How Interest vs. Principal Breakdown Works (Amortization)
                  </h2>
                  <p>
                    In the initial 5 to 10 years of a long-term home loan, up to 70% of your EMI goes toward paying interest, while only a small fraction reduces the actual principal amount. As the loan matures, the interest component decreases and the principal repayment component increases.
                  </p>
                  <p>
                    <strong>Key Strategy:</strong> Making partial prepayments in the first 5 years yields the maximum reduction in your total interest burden and shortens loan tenure significantly.
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    4 Proven Strategies to Reduce Your Home Loan EMI
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Make Regular Part-Prepayments:</strong> Paying just 1 extra EMI every year or putting annual bonuses toward loan prepayment can cut down a 20-year tenure by 3 to 4 years.
                    </li>
                    <li>
                      <strong>Opt for a Home Loan Balance Transfer (HLBT):</strong> If another lender offers a significantly lower interest rate, transferring your outstanding loan can immediately reduce your monthly EMI.
                    </li>
                    <li>
                      <strong>Increase Your Down Payment:</strong> Contributing 20%–25% upfront instead of the minimum 10% lowers the required principal amount and total interest charges.
                    </li>
                    <li>
                      <strong>Negotiate with Your Existing Lender:</strong> If your CIBIL score has improved above 750 or RBI repo rates drop, request your bank to revise your floating interest rate bracket.
                    </li>
                  </ul>

                  {/* FAQ Section */}
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                    <h2 className="text-[#1e3a8a] text-xl font-bold mb-4 flex items-center gap-2">
                      <HelpCircle size={20} /> Frequently Asked Questions (FAQ)
                    </h2>
                    <ul className="space-y-4">
                      <li>
                        <strong>Q1: How does an increase in RBI Repo Rate affect home loan EMIs?</strong>
                        <br />
                        When the RBI hikes repo rates, banks increase floating home loan interest rates. To keep monthly EMIs unchanged, lenders typically extend the loan tenure. If the maximum tenure is reached, the monthly EMI amount increases.
                      </li>
                      <li>
                        <strong>Q2: Is a longer loan tenure better than a shorter tenure?</strong>
                        <br />
                        A longer tenure lowers your monthly EMI amount, making it easier on monthly budgets, but it increases the total interest paid over the loan lifecycle. A shorter tenure increases monthly EMIs but drastically reduces total interest payout.
                      </li>
                      <li>
                        <strong>Q3: Are there any charges for home loan part-prepayment?</strong>
                        <br />
                        Under Reserve Bank of India (RBI) guidelines, banks cannot charge any prepayment or foreclosure penalty on floating-rate home loans issued to individual borrowers.
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
                    Calculate &amp; Apply for Secured Home Loans
                  </Typography>
                  <Typography variant="b2" className="text-gray-300 mb-6 block">
                    Plan your monthly outflows and apply seamlessly with{" "}
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