"use client";

import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export const Blog78 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-full flex justify-center px-4"
        >
          <BlogCard1
            title="Why Credit Score Isn’t the Only Factor for Getting a Car Loan"
            category="LOANS"
            author="Sumit Mishra"
            date="August 05, 2026"
            image="/images/blog/blog-78.jpeg"
          />
        </div>
      ) : (
        <div className="fixed inset-0 z-40 bg-white overflow-y-auto pt-20 md:pt-28 no-scrollbar animate-in fade-in duration-300 text-left">
          <div className="relative max-w-5xl mx-auto pb-20 px-4 md:px-6">
            <button
              onClick={() => setIsOpen(false)}
              className="flex items-center mb-6 text-gray-500 hover:text-[#1e3a8a] gap-1"
            >
              <ArrowLeft size={14} />
              <Typography variant="caption" className="font-bold uppercase">
                Back to Blogs
              </Typography>
            </button>

            <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
              <div className="relative h-[300px] md:h-[500px] w-full">
                <Image
                  src="/images/blog/blog-78.jpeg"
                  alt="car loan is better then others"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="px-5 py-8 md:px-12 md:py-14">
                <Typography
                  variant="h5"
                  className="text-[#1e3a8a] uppercase text-2xl md:text-4xl mb-4"
                >
                  Why Credit Score Isn&apos;t the Only Factor for Getting a Car Loan (2026 Guide)
                </Typography>

                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                  <Clock size={16} />
                  <Typography variant="b2">August 05, 2026</Typography>
                </div>

                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                  <p>
                    When applying for unsecured debt like a{" "}
                    <NextLink
                      href="/services/loan/unsecured/personal"
                      className="text-red-600 font-bold hover:underline"
                    >
                      personal loan
                    </NextLink>{" "}
                    or credit card, a low CIBIL or{" "}
                    <NextLink
                      href="/services/credit/hdfc"
                      className="text-blue-600 font-bold hover:underline"
                    >
                      credit score
                    </NextLink>{" "}
                    usually results in an immediate rejection. Because of this, many prospective car buyers believe that a less-than-perfect credit score will automatically disqualify them from securing auto financing.
                  </p>

                  <p>
                    However, the auto finance industry operates differently. While a healthy credit score (750+) can help you unlock lower interest rates, having a lower score rarely leads to a total rejection for a{" "}
                    <NextLink
                      href="/services/loan/secured/car"
                      className="text-red-600 font-bold hover:underline"
                    >
                      car loan
                    </NextLink>
                    .
                  </p>

                  <p>
                    Why does credit score play a secondary role in auto financing compared to{" "}
                    <NextLink
                      href="/services/loan/unsecured/personal"
                      className="text-red-600 font-bold hover:underline"
                    >
                      personal loans
                    </NextLink>
                    ?
                  </p>

                  <p>
                    In this comprehensive guide, we break down why lenders look beyond credit scores when approving{" "}
                    <NextLink
                      href="/services/loan/secured/car"
                      className="text-red-600 font-bold hover:underline"
                    >
                      car loans
                    </NextLink>
                    , what key parameters they evaluate, and how you can secure auto financing even with a limited credit history.
                  </p>

                  <h2>1. Car Loans Are Secured by Physical Assets (Hypothecation)</h2>
                  <p>
                    The single biggest reason credit scores hold less weight in auto financing is that a{" "}
                    <NextLink
                      href="/services/loan/secured/car"
                      className="text-red-600 font-bold hover:underline"
                    >
                      car loan
                    </NextLink>{" "}
                    is a secured loan.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Legal Hypothecation:</strong> When you buy a car through bank financing, the vehicle is legally registered with the Regional Transport Office (RTO) under hypothecation to the lending bank.
                    </li>
                    <li>
                      <strong>Repossession Rights:</strong> If a borrower fails to service their monthly EMIs, the bank does not need lengthy court battles to recover their money. They maintain the right to repossess the car, put it up for public auction, and recover the outstanding debt.
                    </li>
                    <li>
                      <strong>Lower Risk Profile:</strong> Because the lender holds a physical asset that can be liquidated, their risk of total capital loss is significantly lower than with unsecured loans.
                    </li>
                  </ul>

                  <h2>2. The Power of Down Payments and Loan-to-Value (LTV) Ratio</h2>
                  <p>
                    Auto lenders focus heavily on the Loan-to-Value (LTV) Ratio—the percentage of the car&apos;s total price being financed by the bank versus the cash paid upfront by the borrower.
                  </p>

                  <div className="bg-gray-100 p-4 rounded-lg text-center font-semibold text-gray-800 my-4 overflow-x-auto">
                    <div className="inline-flex items-center gap-3 text-lg md:text-xl">
                      <span>LTV Ratio =</span>
                      <div className="inline-flex flex-col items-center">
                        <span className="border-b border-gray-600 px-2 pb-1">
                          Loan Amount
                        </span>
                        <span className="px-2 pt-1">
                          Total On-Road Price of Vehicle
                        </span>
                      </div>
                      <span>&times; 100</span>
                    </div>
                  </div>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>High Down Payment Lowers Lender Risk:</strong> If you pay a substantial down payment (20%–40% of the vehicle cost), the bank only finances 60%–80%.
                    </li>
                    <li>
                      <strong>Equity Cushion:</strong> In this scenario, even if you default, the market value of the repossessed car is almost guaranteed to cover the remaining loan balance. As a result, lenders gladly approve{" "}
                      <NextLink
                        href="/services/loan/secured/car"
                        className="text-red-600 font-bold hover:underline"
                      >
                        car loans
                      </NextLink>{" "}
                      for borrowers with average credit scores if they offer a higher upfront down payment.
                    </li>
                  </ul>

                  <h2>3. Strong Focus on Current Income &amp; Debt-to-Income (DTI) Ratio</h2>
                  <p>
                    While your credit score reflects past repayment habits, auto lenders prioritize your current income and cash flow stability.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Fixed Income Multipliers:</strong> Banks evaluate whether your monthly salary or business income can comfortably absorb the new EMI alongside your existing living expenses.
                    </li>
                    <li>
                      <strong>Healthy DTI Ratio:</strong> If your total monthly debt obligations (including the new car EMI) stay below 40%–50% of your net monthly income, lenders view you as a safe applicant, regardless of a minor credit score dip caused by past credit card inquiries.
                    </li>
                  </ul>

                  <h2>4. Aggressive Auto Dealer &amp; NBFC Tie-Ups</h2>
                  <p>
                    The automotive industry relies heavily on financing to sell vehicles. To boost car sales, automobile manufacturers, dealerships, and Non-Banking Financial Companies (NBFCs) form strategic financing tie-ups:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Special Dealership Schemes:</strong> Auto manufacturers frequently launch specialized financing schemes to clear inventory, offering low-documentation loans or subvented interest rates.
                    </li>
                    <li>
                      <strong>Flexible NBFC Underwriting:</strong> NBFCs and captive finance companies (like dealer finance arms) specialize in custom credit underwriting. They cater specifically to first-time buyers, self-employed individuals, or applicants without a formal CIBIL score.
                    </li>
                  </ul>

                  <h2>Comparison: Car Loan vs. Personal Loan Evaluation</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-200">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border p-2">Parameter</th>
                          <th className="border p-2">Car Loan (Auto Financing)</th>
                          <th className="border p-2">Personal Loan</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-2 font-bold">Loan Type</td>
                          <td className="border p-2">Secured (Hypothecated Vehicle)</td>
                          <td className="border p-2">Unsecured (No Collateral)</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">Credit Score Weightage</td>
                          <td className="border p-2">Moderate (Affects interest rate, not approval)</td>
                          <td className="border p-2">Critical (750+ required for approval)</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">Primary Approval Metric</td>
                          <td className="border p-2">Down Payment Size, Income &amp; Vehicle Value</td>
                          <td className="border p-2">Credit History &amp; Fixed Net Monthly Salary</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">Lender Default Recovery</td>
                          <td className="border p-2">Vehicle Repossession &amp; Auction</td>
                          <td className="border p-2">Legal Notices &amp; Collection Processes</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">Impact of Down Payment</td>
                          <td className="border p-2">Higher down payment offsets low credit score</td>
                          <td className="border p-2">Not Applicable (No down payment option)</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">Approval Flexibility</td>
                          <td className="border p-2">High (Dealer schemes &amp; NBFC flexibility)</td>
                          <td className="border p-2">Strict (Standard automated risk engines)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h2>How to Get a Car Loan with a Low Credit Score</h2>
                  <p>
                    If your{" "}
                    <NextLink
                      href="/services/credit/hdfc"
                      className="text-blue-600 font-bold hover:underline"
                    >
                      credit score
                    </NextLink>{" "}
                    is lower than desired, follow these proven strategies to secure auto financing smoothly:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Increase Your Down Payment:</strong> Paying 20%–30% of the vehicle price in cash lowers the bank&apos;s risk and makes loan approval virtually certain.
                    </li>
                    <li>
                      <strong>Opt for a Co-Applicant:</strong> Adding a family member (spouse or parent) with a strong CIBIL score and stable income as a co-applicant instantly strengthens your application.
                    </li>
                    <li>
                      <strong>Choose an In-Demand Vehicle Model:</strong> Lenders approve loans more easily on popular vehicle models that hold high resale value, as they are easier to liquidate in case of default.
                    </li>
                    <li>
                      <strong>Apply Through Dealer Finance Options:</strong> Dealership finance managers have direct relationships with multiple bank credit officers and can often negotiate custom approvals.
                    </li>
                  </ul>

                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                    <h2 className="text-[#1e3a8a] text-xl font-bold mb-4 flex items-center gap-2">
                      <HelpCircle size={20} /> Frequently Asked Questions (FAQ)
                    </h2>
                    <ul className="space-y-4">
                      <li>
                        <strong>Q: Can I get a 100% on-road car loan with a low CIBIL score?</strong>
                        <br />
                        A: Obtaining 100% on-road financing usually requires a high{" "}
                        <NextLink
                          href="/services/credit/hdfc"
                          className="text-blue-600 font-bold hover:underline"
                        >
                          credit score
                        </NextLink>{" "}
                        (750+) and strong income profile. If your credit score is low, banks will typically ask for a 15%–25% down payment.
                      </li>
                      <li>
                        <strong>Q: Does a car loan help improve a low credit score?</strong>
                        <br />
                        A: Yes! Because a{" "}
                        <NextLink
                          href="/services/loan/secured/car"
                          className="text-blue-600 font-bold hover:underline"
                        >
                          car loan
                        </NextLink>{" "}
                        is an installment-based secured loan, making consistent, on-time EMI payments builds a positive repayment history on your credit report, steadily increasing your overall score over time. Check your current standing via our{" "}
                        <NextLink
                          href="/services/credit/hdfc"
                          className="text-blue-600 font-bold hover:underline"
                        >
                          credit portal
                        </NextLink>
                        .
                      </li>
                      <li>
                        <strong>Q: What is the minimum CIBIL score required for a car loan?</strong>
                        <br />
                        A: While 750+ gets you the lowest interest rates, many banks and NBFCs approve{" "}
                        <NextLink
                          href="/services/loan/secured/car"
                          className="text-blue-600 font-bold hover:underline"
                        >
                          car loans
                        </NextLink>{" "}
                        for scores between 600 and 700, provided income proof is stable and a reasonable down payment is made.
                      </li>
                      <li>
                        <strong>Q: What happens if I miss my car loan EMIs?</strong>
                        <br />
                        A: If you miss consecutive EMIs, the bank will send reminder notices. Continued non-payment allows the lender to legally repossess the hypothecated vehicle and auction it to recover the outstanding balance.
                      </li>
                    </ul>
                  </div>
                </article>

                <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[40px] mt-10">
                  <Typography variant="h5" className="text-blue-400 uppercase mb-3">
                    Looking to Finance Your New Car?
                  </Typography>
                  <Typography variant="b2" className="text-gray-300 mb-6 block">
                    Get attractive interest rates, flexible tenures, and quick approval on your car loan through tailored financing solutions.
                  </Typography>

                  <NextLink
                    href="/services/loan/secured/car"
                    className="inline-block bg-red-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-red-700 transition"
                  >
                    Apply for Car Loan
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