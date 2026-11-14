"use client";

import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

interface TenureComparisonRow {
  tenure: string;
  emis: string;
  monthlyEmi: string;
  totalInterest: string;
  totalRepaid: string;
}

export const Blog132: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Interactive Business Loan EMI Calculator State
  const [loanAmount, setLoanAmount] = useState<number>(1500000);
  const [interestRate, setInterestRate] = useState<number>(12.0);
  const [tenureYears, setTenureYears] = useState<number>(3);

  // EMI Calculations
  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = tenureYears * 12;
  const emi =
    monthlyRate > 0
      ? Math.round(
          (loanAmount *
            monthlyRate *
            Math.pow(1 + monthlyRate, totalMonths)) /
            (Math.pow(1 + monthlyRate, totalMonths) - 1)
        )
      : Math.round(loanAmount / totalMonths);

  const totalPayment = emi * totalMonths;
  const totalInterest = totalPayment - loanAmount;

  const tenureComparisonTable: TenureComparisonRow[] = [
    {
      tenure: "1 Year",
      emis: "12 Months",
      monthlyEmi: "₹1,33,273",
      totalInterest: "₹99,278",
      totalRepaid: "₹15,99,278",
    },
    {
      tenure: "2 Years",
      emis: "24 Months",
      monthlyEmi: "₹70,610",
      totalInterest: "₹1,94,645",
      totalRepaid: "₹16,94,645",
    },
    {
      tenure: "3 Years",
      emis: "36 Months",
      monthlyEmi: "₹49,821",
      totalInterest: "₹2,93,556",
      totalRepaid: "₹17,93,556",
    },
    {
      tenure: "5 Years",
      emis: "60 Months",
      monthlyEmi: "₹33,367",
      totalInterest: "₹5,02,000",
      totalRepaid: "₹20,02,000",
    },
  ];

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(false);
  };

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-full flex justify-center px-4"
        >
          <BlogCard1
            title="Business Loan EMI Calculator: How to Plan Commercial Debt, Calculate Monthly Installments, and Protect Cash Flow"
            category="BUSINESS LOAN"
            author="Kishan Baranwal"
            date="November 14, 2026"
            image="/images/blog/Blog-132.jpeg"
          />
        </div>
      ) : (
        <div className="fixed inset-0 z-40 bg-white overflow-y-auto pt-20 md:pt-28 no-scrollbar animate-in fade-in duration-300 text-left">
          <div className="relative max-w-5xl mx-auto pb-20 px-4 md:px-6">
            {/* Back Button */}
            <button
              onClick={handleClose}
              className="flex items-center mb-6 text-gray-500 hover:text-[#1e3a8a] transition-colors gap-1 cursor-pointer"
              type="button"
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
                    src="/images/blog/Blog-132.jpeg"
                    alt="business loan"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
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
                    Business Loan EMI Calculator
                  </NextLink>
                  : Calculate Commercial Loan EMIs &amp; Protect Cash Flow
                </Typography>

                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                  <Clock size={16} />
                  <Typography variant="b2">November 14, 2026</Typography>
                  <span className="mx-2">•</span>
                  <Typography variant="b2">By Kishan Baranwal</Typography>
                </div>

                {/* Blog Article Body */}
                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                  {/* Featured Snippet Box */}
                  <div className="bg-slate-50 border-l-4 border-[#1e3a8a] p-4 rounded-r-lg">
                    <p className="text-gray-700 italic m-0">
                      Looking to calculate your monthly repayment obligations using a{" "}
                      <NextLink
                        href="https://moneykingfinancial.com/services/loan/unsecured/business"
                        className="text-[#1e3a8a] font-semibold hover:underline"
                      >
                        Business Loan EMI Calculator
                      </NextLink>
                      ? Estimating your exact Equated Monthly Installment before applying helps MSMEs and business owners forecast operating cash flow, compare lender quotes, and select the optimal repayment tenure without straining working capital.
                    </p>
                  </div>

                  <p>
                    Expanding a business, purchasing new machinery, stocking up on seasonal inventory, or bridging working capital gaps often requires external financing. A{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/loan/unsecured/business"
                      className="text-[#1e3a8a] font-semibold hover:underline"
                    >
                      business loan
                    </NextLink>{" "}
                    gives enterprises the immediate capital injection needed to seize growth opportunities without diluting equity or draining operational cash reserves.
                  </p>

                  <p>
                    However, taking on commercial debt without mapping out your exact monthly repayment obligations can strain your business cash flow. Even a 1% variation in interest rates or a 12-month adjustment in loan tenure can significantly alter your monthly outflow and net profit margins. This guide by <strong>Money King Financial Services</strong> explains how commercial loan amortization works and how to optimize your repayment structure.
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    1. What is a Business Loan EMI and Why Does Pre-Calculation Matter?
                  </h2>
                  <p>
                    An Equated Monthly Installment (EMI) is a fixed monthly payment a borrower makes to a bank or Non-Banking Financial Company (NBFC) on a set date each month until the business loan is completely paid off.
                  </p>

                  <p>Every business loan EMI consists of two parts:</p>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>
                      <strong>Principal Component:</strong> The portion that directly pays down the original borrowed loan amount.
                    </li>
                    <li>
                      <strong>Interest Component:</strong> The borrowing fee charged by the lender on the outstanding principal balance.
                    </li>
                  </ol>

                  <h3 className="text-lg font-bold text-gray-800 pt-2">
                    Why Businesses Must Calculate EMIs Before Applying
                  </h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Cash Flow Forecasting:</strong> Ensures your monthly EMI fits comfortably within your business&apos;s net operating cash flow without disrupting vendor payouts or payroll.
                    </li>
                    <li>
                      <strong>Comparing Lender Offers:</strong> Allows you to compare multiple loan quotes across banks and NBFCs using exact monthly outflow numbers rather than relying solely on advertised interest rates.
                    </li>
                    <li>
                      <strong>Choosing the Right Tenure:</strong> Helps balance monthly affordability (longer tenure, lower EMI) against total interest cost (shorter tenure, lower overall interest).
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    2. Interactive Business Loan EMI &amp; Amortization Calculator
                  </h2>
                  <p>
                    Use the interactive simulator below to calculate your estimated monthly EMI, visualize your total interest outflow, and test different interest rate and tenure scenarios:
                  </p>

                  {/* Interactive Business Loan EMI Calculator */}
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 my-6 space-y-6">
                    <h3 className="text-lg font-bold text-[#1e3a8a] m-0">
                      Business Loan EMI Calculator Simulator
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase text-gray-600 mb-2">
                          Loan Amount (₹): {loanAmount.toLocaleString("en-IN")}
                        </label>
                        <input
                          type="range"
                          min="200000"
                          max="20000000"
                          step="100000"
                          value={loanAmount}
                          onChange={(e) => setLoanAmount(Number(e.target.value))}
                          className="w-full accent-[#1e3a8a] cursor-pointer"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase text-gray-600 mb-2">
                          Interest Rate (% p.a.): {interestRate}%
                        </label>
                        <input
                          type="range"
                          min="9"
                          max="24"
                          step="0.25"
                          value={interestRate}
                          onChange={(e) => setInterestRate(Number(e.target.value))}
                          className="w-full accent-[#1e3a8a] cursor-pointer"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase text-gray-600 mb-2">
                          Loan Tenure (Years): {tenureYears}{" "}
                          {tenureYears === 1 ? "Year" : "Years"}
                        </label>
                        <input
                          type="range"
                          min="1"
                          max="7"
                          step="1"
                          value={tenureYears}
                          onChange={(e) => setTenureYears(Number(e.target.value))}
                          className="w-full accent-[#1e3a8a] cursor-pointer"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-200 text-center">
                      <div className="bg-white p-4 rounded-xl border border-slate-200">
                        <span className="text-xs text-gray-500 uppercase block font-medium">
                          Estimated Monthly EMI
                        </span>
                        <span className="text-xl font-extrabold text-[#1e3a8a]">
                          ₹{emi.toLocaleString("en-IN")}
                        </span>
                      </div>
                      <div className="bg-white p-4 rounded-xl border border-slate-200">
                        <span className="text-xs text-gray-500 uppercase block font-medium">
                          Total Interest Payable
                        </span>
                        <span className="text-xl font-extrabold text-amber-600">
                          ₹{totalInterest.toLocaleString("en-IN")}
                        </span>
                      </div>
                      <div className="bg-white p-4 rounded-xl border border-slate-200">
                        <span className="text-xs text-gray-500 uppercase block font-medium">
                          Total Repayment (P + I)
                        </span>
                        <span className="text-xl font-extrabold text-slate-800">
                          ₹{totalPayment.toLocaleString("en-IN")}
                        </span>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    3. The Formula Behind Business Loan EMI Calculations
                  </h2>
                  <p>
                    Banks and NBFCs compute business loan EMIs using the standard reducing balance formula:
                  </p>

                  <div className="bg-slate-100 p-5 rounded-lg border border-slate-200 text-xs md:text-sm font-mono text-slate-800 space-y-2 my-4">
                    <p className="font-bold text-center text-base">
                      EMI = [P × r × (1 + r)^n] / [(1 + r)^n - 1]
                    </p>
                    <ul className="space-y-1 pt-2">
                      <li>
                        <strong>P:</strong> Principal Loan Amount borrowed
                      </li>
                      <li>
                        <strong>r:</strong> Monthly Interest Rate = Annual Interest Rate / (12 × 100)
                      </li>
                      <li>
                        <strong>n:</strong> Total Number of Monthly Installments = Tenure in Years × 12
                      </li>
                    </ul>
                  </div>

                  <h3 className="text-lg font-bold text-gray-800 pt-2">
                    Practical Calculation Example
                  </h3>
                  <p>
                    Suppose an SME takes an{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/loan/unsecured/business"
                      className="text-[#1e3a8a] font-semibold hover:underline"
                    >
                      unsecured business loan
                    </NextLink>{" "}
                    with the following terms:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      <strong>Loan Amount (P):</strong> ₹15,00,000 (₹15 Lakhs)
                    </li>
                    <li>
                      <strong>Annual Interest Rate:</strong> 12% per annum (r = 12 / 12 / 100 = 0.01)
                    </li>
                    <li>
                      <strong>Loan Tenure (n):</strong> 3 Years (36 Months)
                    </li>
                  </ul>

                  <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-1 text-sm">
                    <p className="font-bold text-[#1e3a8a] m-0">
                      Resulting Monthly EMI: ₹49,821 per month
                    </p>
                    <p className="m-0">• Principal Borrowed: ₹15,00,000</p>
                    <p className="m-0">• Total Interest Payable: ₹2,93,556</p>
                    <p className="m-0">• Total Repayment Amount: ₹17,93,556</p>
                  </div>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    4. Tenure Impact: Short-Term vs. Long-Term Business Loan EMIs
                  </h2>
                  <p>
                    Choosing the right repayment tenure directly affects both your monthly liquidity and your total borrowing cost. Here is how tenure shifts impact a ₹15,00,000 loan at 12% annual interest:
                  </p>

                  <div className="overflow-x-auto my-4">
                    <table className="w-full border-collapse border border-gray-200 text-left text-sm">
                      <thead className="bg-slate-100 text-gray-800">
                        <tr>
                          <th className="border border-gray-200 p-3">Loan Tenure</th>
                          <th className="border border-gray-200 p-3">Number of EMIs</th>
                          <th className="border border-gray-200 p-3">Monthly EMI</th>
                          <th className="border border-gray-200 p-3">Total Interest Payable</th>
                          <th className="border border-gray-200 p-3">Total Amount Repaid</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tenureComparisonTable.map(
                          (row: TenureComparisonRow, index: number) => (
                            <tr key={index}>
                              <td className="border border-gray-200 p-3 font-semibold">
                                {row.tenure}
                              </td>
                              <td className="border border-gray-200 p-3">{row.emis}</td>
                              <td className="border border-gray-200 p-3 font-bold text-[#1e3a8a]">
                                {row.monthlyEmi}
                              </td>
                              <td className="border border-gray-200 p-3">
                                {row.totalInterest}
                              </td>
                              <td className="border border-gray-200 p-3">
                                {row.totalRepaid}
                              </td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg text-sm text-gray-800">
                    <strong>Key Takeaway:</strong> Extending a loan from 2 years to 5 years cuts your monthly EMI in half, freeing up monthly working capital—but it more than doubles your total interest payout.
                  </div>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    5. Key Factors That Determine Your Business Loan Interest Rate &amp; EMI
                  </h2>
                  <p>
                    Lenders evaluate several business health indicators before finalizing your interest rate and sanction limit:
                  </p>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>
                      <strong>Business Vintage &amp; Stability:</strong> Enterprises operating profitably for 3+ years receive lower interest rates compared to newer businesses under 2 years old.
                    </li>
                    <li>
                      <strong>Annual Turnover &amp; Banking Cash Flows:</strong> Healthy average bank balances (ABB), consistent monthly credits, and zero cheque bounces strengthen lender confidence.
                    </li>
                    <li>
                      <strong>CIBIL Score &amp; Commercial Credit Rank (CMR):</strong> A personal CIBIL score of 750+ and a strong CIBIL Commercial Rank (CMR-1 to CMR-3) unlock prime interest rates.
                    </li>
                    <li>
                      <strong>Secured vs. Unsecured Structure:</strong> Collateral-backed loans (against commercial property, residential real estate, or machinery) carry significantly lower interest rates (9%–12%) compared to collateral-free unsecured business loans (13%–20%).
                    </li>
                    <li>
                      <strong>Debt Service Coverage Ratio (DSCR):</strong> Lenders check whether your business generates enough net operating income to comfortably cover existing and new loan EMIs (ideal DSCR is 1.5 or higher).
                    </li>
                  </ol>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    6. Proven Tips to Lower Your Business Loan EMI Burden
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Maintain Clean Banking Habits:</strong> Avoid inward cheque returns or EMI bounces for at least 6 to 12 months prior to applying.
                    </li>
                    <li>
                      <strong>Compare Reducing Balance vs. Flat Interest Rates:</strong> Always verify that your lender calculates interest on a monthly reducing balance basis rather than a flat rate, as flat rates cost nearly double in effective interest.
                    </li>
                    <li>
                      <strong>Make Part-Prepayments During Peak Seasons:</strong> If your business experiences high seasonal profits, use surplus cash to make partial principal prepayments (after checking lock-in and foreclosure terms).
                    </li>
                    <li>
                      <strong>Claim Tax Deductions on Interest:</strong> Under the Income Tax Act, interest paid on a business loan is treated as a legitimate business expense and can be deducted from your taxable business profits, lowering your effective cost of borrowing.
                    </li>
                  </ul>

                  {/* FAQ Section */}
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                    <h2 className="text-[#1e3a8a] text-xl font-bold mb-4 flex items-center gap-2">
                      <HelpCircle size={20} /> Frequently Asked Questions (FAQ)
                    </h2>
                    <ul className="space-y-4 text-sm leading-relaxed">
                      <li>
                        <strong>
                          Q1: How accurate is an online Business Loan EMI Calculator?
                        </strong>
                        <br />
                        Ans: An online Business Loan EMI Calculator provides exact monthly installment figures based on the principal, interest rate, and tenure entered. However, your final outflow may include one-time processing fees (typically 1% to 2% of the loan amount) and applicable GST charged by the lender at disbursal.
                      </li>
                      <li>
                        <strong>
                          Q2: What is the difference between a flat interest rate and a reducing balance rate?
                        </strong>
                        <br />
                        Ans: Under a flat interest rate, interest is calculated on the entire initial loan amount throughout the tenure. Under a reducing balance rate, interest is charged only on the remaining unpaid principal after each monthly EMI, making it far more economical.
                      </li>
                      <li>
                        <strong>
                          Q3: Can I prepay or foreclose my business loan early?
                        </strong>
                        <br />
                        Ans: Yes, most banks and NBFCs allow partial prepayment or full foreclosure after an initial lock-in period (usually 6 to 12 EMIs). Foreclosure charges typically range between 2% and 4% on fixed-rate unsecured loans, whereas floating-rate loans to individual proprietors often carry zero foreclosure penalties.
                      </li>
                      <li>
                        <strong>
                          Q4: Does checking my EMI or loan eligibility affect my CIBIL score?
                        </strong>
                        <br />
                        Ans: Using an EMI calculator has zero impact on your CIBIL score. Only formal loan applications where a lender pulls your credit report trigger a hard inquiry.
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
                    Compare &amp; Apply For Business Loans Today
                  </Typography>
                  <Typography variant="b2" className="text-gray-300 mb-6 block">
                    Get customized{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/loan/unsecured/business"
                      className="text-blue-400 hover:underline"
                    >
                      Business Loan
                    </NextLink>{" "}
                    offers with competitive reducing-balance interest rates and flexible repayment tenures through{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/loan/unsecured/business"
                      className="text-blue-400 hover:underline"
                    >
                      Money King Financial Services
                    </NextLink>
                    .
                  </Typography>

                  <div className="flex flex-wrap gap-4 mt-2">
                    <NextLink
                      href="https://moneykingfinancial.com/services/loan/unsecured/business"
                      className="inline-block bg-blue-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-700 transition"
                    >
                      Check Business Loan Eligibility Now
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

export default Blog132;