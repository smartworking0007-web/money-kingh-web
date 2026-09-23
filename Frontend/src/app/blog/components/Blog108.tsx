"use client";

import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export const Blog108: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-full flex justify-center px-4"
        >
          <BlogCard1
            title="Gold Loan EMI: Everything You Need to Know About Calculation & Repayment Options"
            category="LOANS"
            author="Kishan Baranwal"
            date="September 21, 2026"
            image="/images/blog/blog-108.jpg"
          />
        </div>
      ) : (
        <div className="fixed inset-0 z-40 bg-white overflow-y-auto pt-20 md:pt-28 no-scrollbar animate-in fade-in duration-300 text-left">
          <div className="relative max-w-5xl mx-auto pb-20 px-4 md:px-6">
            {/* Back Button */}
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
                    src="/images/blog/blog-108.jpg"
                    alt="Gold Loan EMI Calculation and Repayment Options"
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
                    href="https://moneykingfinancial.com/services/loan/secured/gold"
                    className="text-[#1e3a8a] hover:underline"
                  >
                    Gold Loan EMI
                  </NextLink>
                  : Everything You Need to Know About Calculation &amp;
                  Repayment Options
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
                      A{" "}
                      <NextLink
                        href="https://moneykingfinancial.com/services/loan/secured/gold"
                        className="text-blue-600 font-semibold hover:underline"
                      >
                        Gold Loan EMI
                      </NextLink>{" "}
                      is an Equated Monthly Instalment that combines both
                      principal repayment and accrued interest paid over a
                      chosen tenure against pledged gold ornaments. Gold loans
                      offer flexible repayment structures—including regular
                      monthly EMIs, interest-only payments, and bullet
                      repayments—allowing borrowers to secure fast funding at
                      lower interest rates compared to unsecured personal loans.
                    </p>
                  </div>

                  <p>
                    Gold is one of the most liquid and valuable assets in India.
                    Pledging gold jewellery to meet short-term financial
                    needs—such as medical emergencies, business capital
                    requirements, or educational expenses—is a fast and reliable
                    way to access capital.
                  </p>

                  <p>
                    Unlike unsecured personal loans that require extensive
                    income verification and high credit scores, a{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/loan/secured/gold"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      gold loan
                    </NextLink>{" "}
                    is collateral-backed, offering lower interest rates and
                    streamlined documentation. Understanding how a gold loan EMI
                    works and selecting the right repayment mode can save
                    significant money in interest charges. Explore more
                    financing options on our{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      Money King Financial Portal
                    </NextLink>
                    .
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    How Does a Gold Loan EMI Work?
                  </h2>
                  <p>
                    When you borrow against gold, financial institutions
                    evaluate your gold’s purity (generally 18K to 22K) and net
                    weight to calculate the sanctioned loan amount based on the
                    current market rate and regulatory Loan-to-Value (LTV)
                    limits.
                  </p>
                  <p>An EMI-based gold loan works like a standard term loan:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Monthly Installments:</strong> You pay a fixed
                      amount every month covering both principal reduction and
                      interest.
                    </li>
                    <li>
                      <strong>Reducing Interest Burden:</strong> Interest is
                      calculated using the reducing balance method, lowering
                      your monthly interest payout as the principal shrinks.
                    </li>
                    <li>
                      <strong>Collateral Release:</strong> Once the final EMI is
                      settled, your pledged gold ornaments are returned safely
                      to you.
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Types of Gold Loan Repayment Options
                  </h2>
                  <p>
                    Lenders offer multiple flexible repayment methods to suit
                    different income streams:
                  </p>

                  <div className="overflow-x-auto my-6">
                    <table className="w-full border-collapse border border-gray-200">
                      <thead>
                        <tr className="bg-gray-100 text-left">
                          <th className="border p-2">Repayment Method</th>
                          <th className="border p-2">How It Works</th>
                          <th className="border p-2">Ideal For</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-2 font-bold">
                            Regular Monthly EMI
                          </td>
                          <td className="border p-2">
                            Equal monthly payments of both principal and
                            interest.
                          </td>
                          <td className="border p-2 font-semibold text-green-600">
                            Salaried individuals with predictable monthly
                            income.
                          </td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">
                            Interest-Only EMI
                          </td>
                          <td className="border p-2">
                            Pay interest every month; pay the entire principal
                            amount at tenure end.
                          </td>
                          <td className="border p-2">
                            Freelancers or business owners managing temporary
                            monthly cash flows.
                          </td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">
                            Bullet Repayment
                          </td>
                          <td className="border p-2">
                            No monthly payments; pay total principal + accrued
                            interest in one lump sum at tenure end.
                          </td>
                          <td className="border p-2">
                            Borrowers expecting a guaranteed windfall, bonus, or
                            crop sale within 3 to 12 months.
                          </td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">
                            Overdraft Facility
                          </td>
                          <td className="border p-2">
                            Withdraw funds as needed up to your sanctioned gold
                            limit and pay interest only on the utilized amount.
                          </td>
                          <td className="border p-2">
                            Small businesses requiring ongoing working capital
                            support.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    EMI vs. Bullet Repayment: Which Should You Choose?
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Choose Regular EMI if:</strong> You want a
                      disciplined, predictable repayment schedule without facing
                      a large lump-sum burden at the end of the tenure. Paying
                      off the principal monthly also significantly reduces total
                      interest outgo.
                    </li>
                    <li>
                      <strong>Choose Bullet Repayment if:</strong> You need cash
                      for a short period (1–6 months) and do not want monthly
                      deduction hassles, provided you are confident in receiving
                      a lump-sum inflow to clear the entire balance.
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    How to Calculate Your Gold Loan EMI
                  </h2>
                  <p>
                    The EMI amount for a gold loan depends on three key factors:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Loan Amount ($P$):</strong> The total principal
                      borrowed against the assessed value of gold.
                    </li>
                    <li>
                      <strong>Interest Rate ($R$):</strong> The monthly or
                      annual interest rate charged by the bank or NBFC.
                    </li>
                    <li>
                      <strong>Tenure ($N$):</strong> The total number of months
                      chosen for repayment (typically 3 to 36 months).
                    </li>
                  </ul>
                  <p className="font-semibold text-gray-800 pt-2">
                    EMI Calculation Formula:
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm text-center">
                    {`$$\\text{EMI} = \\left[ P \\times R \\times (1 + R)^N \\right] / \\left[ (1 + R)^N - 1 \\right]$$`}
                  </div>
                  <p>
                    Using an online Gold Loan EMI Calculator helps you adjust
                    the loan amount and tenure in real time to find an
                    affordable monthly EMI prior to applying through our{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/loan/secured/gold"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      Gold Loan Portal
                    </NextLink>
                    .
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Documents Required for an EMI Gold Loan
                  </h2>
                  <p>
                    Since gold acts as primary security, documentation is
                    straightforward:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Identity Proof:</strong> PAN Card, Passport, or
                      Voter ID. (Note: ID numbers are kept secure).
                    </li>
                    <li>
                      <strong>Address Proof:</strong> Utility Bills or Driving
                      License.
                    </li>
                    <li>
                      <strong>Passport-Size Photographs</strong>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-500 italic">
                    Note: Formal income proof (ITR or salary slips) is generally
                    not required for standard gold loans.
                  </p>

                  {/* FAQ Section */}
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                    <h2 className="text-[#1e3a8a] text-xl font-bold mb-4 flex items-center gap-2">
                      <HelpCircle size={20} /> Frequently Asked Questions (FAQ)
                    </h2>
                    <ul className="space-y-4">
                      <li>
                        <strong>
                          Q1: What happens if I miss a gold loan EMI?
                        </strong>
                        <br />
                        Missing an EMI attracts late payment charges and penal
                        interest. Continued default over extended periods may
                        cause the account to be flagged, and the lender reserves
                        the right to auction the pledged gold to recover the
                        outstanding balance after giving due legal notice under
                        regulatory norms.
                      </li>
                      <li>
                        <strong>
                          Q2: Can I foreclose or prepay my gold loan EMI early?
                        </strong>
                        <br />
                        Yes, most financial institutions allow partial
                        prepayments or complete loan foreclosure before the
                        tenure ends. Doing so reduces the outstanding principal
                        balance and lowers overall interest costs.
                      </li>
                      <li>
                        <strong>
                          Q3: What is the maximum loan amount I can get against
                          my gold?
                        </strong>
                        <br />
                        The loan amount depends on the purity of your gold and
                        the maximum Loan-to-Value (LTV) ratio allowed by
                        regulatory guidelines (typically up to 75%–85% of the
                        appraised gold value depending on loan size).
                      </li>
                      <li>
                        <strong>
                          Q4: Is an EMI gold loan safer than local moneylenders?
                        </strong>
                        <br />
                        Yes. Regulated banks and financial institutions store
                        your pledged gold in secure, insured bank vaults with
                        official purity certification, whereas unorganized
                        moneylenders often charge exorbitant interest rates
                        without safety guarantees.
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
                    Get Instant Funds with Low Interest Gold Loans!
                  </Typography>
                  <Typography variant="b2" className="text-gray-300 mb-6 block">
                    Unlock the best value for your gold ornaments with flexible
                    repayment structures and lowest interest rates through{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/"
                      className="text-blue-400 hover:underline"
                    >
                      Money King Financial Services
                    </NextLink>
                    .
                  </Typography>

                  <div className="flex flex-wrap gap-4 mt-2">
                    <NextLink
                      href="https://moneykingfinancial.com/services/loan/secured/gold"
                      className="inline-block bg-blue-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-700 transition"
                    >
                      Apply for Gold Loan
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
