"use client";

import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export const Blog75 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-full flex justify-center px-4"
        >
          <BlogCard1
            title="How a Personal Loan Balance Transfer Affects Your Credit Score (2026 Guide)"
            category="LOANS"
            author="Sumit Mishra"
            date="July 30, 2026"
            image="/images/blog/blog-75.jpeg"
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
                  src="/images/blog/blog-75.jpeg"  
                  alt="How a Personal Loan Balance Transfer Affects Your Credit Score"
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
                  How a Personal Loan Balance Transfer Affects Your Credit Score
                  (2026 Guide)
                </Typography>

                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                  <Clock size={16} />
                  <Typography variant="b2">July 30, 2026</Typography>
                </div>

                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                  <p>
                    High-interest{" "}
                    <NextLink
                      href="/services/loan/unsecured/personal"
                      className="text-red-600 font-bold hover:underline"
                    >
                      personal loans
                    </NextLink>{" "}
                    can put a significant strain on your monthly cash flow. When faced with steep monthly EMIs,
                    switching your active loan to another bank or NBFC that
                    offers lower interest rates seems like a no-brainer. This
                    process is known as a
                    <NextLink
                      href="/services/loan-bt/home"
                      className="text-red-600 font-bold hover:underline"
                    >
                      {" "}
                      Personal Loan Balance Transfer
                    </NextLink>
                    .
                  </p>

                  <p>
                    While the primary objective of a balance transfer is to
                    reduce interest burdens and lower EMIs, many borrowers
                    wonder: Will transferring my{" "}
                    <NextLink
                      href="/services/loan/unsecured/personal"
                      className="text-red-600 font-bold hover:underline"
                    >
                      personal loan
                    </NextLink>{" "}
                    hurt my CIBIL or credit score?
                  </p>

                  <p>
                    The answer is both yes and no. A balance transfer triggers
                    short-term fluctuations in your credit profile, but when
                    managed correctly, it can significantly strengthen your
                    score over time. In this detailed guide, we break down the
                    immediate and long-term impacts of a{" "}
                    <NextLink
                      href="/services/loan/unsecured/personal"
                      className="text-red-600 font-bold hover:underline"
                    >
                      personal loan
                    </NextLink>{" "}
                    balance transfer on your credit score, along with practical tips to
                    protect your credit health.
                  </p>

                  <h2>
                    Short-Term Impact: Why Your Credit Score May Drop Initially
                  </h2>
                  <p>
                    When you apply for a loan balance transfer, your credit
                    score usually experiences a small, temporary dip. Here are
                    the reasons behind this initial reduction:
                  </p>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>1. Hard Credit Inquiry:</strong> When you apply
                      with a new lender for a balance transfer, they evaluate
                      your creditworthiness by pulling your detailed credit
                      report from bureaus like CIBIL, Experian, or Equifax. This
                      process is recorded as a Hard Inquiry. Each hard inquiry
                      can temporarily reduce your score by a few points (5–15
                      points). <em>Caution:</em> Applying to multiple lenders
                      simultaneously triggers multiple hard inquiries, making
                      you look credit-hungry and causing a larger dip in your
                      score.
                    </li>
                    <li>
                      <strong>2. Closure of an Older Loan Account:</strong>{" "}
                      Credit scoring algorithms favor a long, stable credit
                      history. When you complete a balance transfer, your
                      existing loan account is fully paid off and marked as
                      Closed. Closing an older credit account reduces the
                      overall average age of your credit accounts, causing a
                      minor, temporary decrease in your credit score.
                    </li>
                    <li>
                      <strong>3. Opening a Brand-New Credit Line:</strong> The
                      new lender opens a fresh loan account in your credit
                      report. A newly generated loan account carries no prior
                      payment history, which slightly lowers your credit
                      profile s average age until you build a consistent
                      repayment record on it.
                    </li>
                  </ul>

                  <h2>
                    Long-Term Impact: How a Balance Transfer Boosts Your Credit
                    Score
                  </h2>
                  <p>
                    While the short-term dip is inevitable, the long-term
                    benefits of a{" "}
                    <NextLink
                      href="/services/loan/unsecured/personal"
                      className="text-red-600 font-bold hover:underline"
                    >
                      personal loan
                    </NextLink>{" "}
                    balance transfer far outweigh
                    the temporary downside:
                  </p>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>
                        1. Reduced Monthly EMIs and Lower Default Risk:
                      </strong>{" "}
                      By transferring your balance to a lower interest rate,
                      your monthly EMI amount decreases, making them easier to
                      manage alongside regular expenses. Reduced financial
                      strain minimizes the likelihood of missed or delayed
                      payments, safeguarding your credit score against severe
                      default damage.
                    </li>
                    <li>
                      <strong>2. Timely Repayment Track Record:</strong> Payment
                      history makes up nearly 35% of your overall credit score.
                      By consistently paying your lower EMIs on time with the
                      new lender, you build a positive, uninterrupted payment
                      track record that gradually elevates your score higher
                      than its original level.
                    </li>
                    <li>
                      <strong>3. Improved Debt-to-Income (DTI) Ratio:</strong>{" "}
                      Lower interest rates and restructured loan tenures lower
                      your overall monthly debt obligation. A healthier
                      Debt-to-Income ratio signals financial stability to future
                      lenders, enhancing your overall credit profile.
                    </li>
                  </ul>

                  <h2>Short-Term vs. Long-Term Credit Score Impact</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-200">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border p-2">Parameter</th>
                          <th className="border p-2">Short-Term Effect</th>
                          <th className="border p-2">Long-Term Effect</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-2">Credit Score Movement</td>
                          <td className="border p-2">
                            Temporary Dip (10–20 points)
                          </td>
                          <td className="border p-2">
                            Steady Rise / Improvement
                          </td>
                        </tr>
                        <tr>
                          <td className="border p-2">Primary Cause</td>
                          <td className="border p-2">
                            Hard Inquiry & Account Closure
                          </td>
                          <td className="border p-2">
                            Consistent On-Time Repayments
                          </td>
                        </tr>
                        <tr>
                          <td className="border p-2">Impact Duration</td>
                          <td className="border p-2">1–3 Months</td>
                          <td className="border p-2">
                            Permanent Positive History
                          </td>
                        </tr>
                        <tr>
                          <td className="border p-2">Financial Health</td>
                          <td className="border p-2">
                            Minor Adjustment Period
                          </td>
                          <td className="border p-2">
                            Reduced Interest & Lower DTI Ratio
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h2>
                    5 Pro-Tips to Protect Your Credit Score During a Balance
                    Transfer
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Avoid Multiple Applications:</strong> Research
                      interest rates beforehand and apply to only one preferred
                      lender to avoid multiple hard inquiries.
                    </li>
                    <li>
                      <strong>Calculate Total Transfer Costs:</strong> Ensure
                      processing fees, foreclosure charges, and stamp duties do
                      not outweigh the interest savings.
                    </li>
                    <li>
                      <strong>Do Not Miss EMIs During Transition:</strong>{" "}
                      Continue paying your existing loan EMIs until the new
                      lender officially pays off the old account and hands over
                      the foreclosure certificate.
                    </li>
                    <li>
                      <strong>Choose a Realistic Tenure:</strong> Opt for a
                      repayment tenure where the EMI comfortably fits within
                      your monthly budget.
                    </li>
                    <li>
                      <strong>Check Your Credit Report Post-Transfer:</strong>{" "}
                      After 30–45 days, verify that your old loan is officially
                      updated as Closed or Paid Off in your CIBIL report.
                    </li>
                  </ul>

                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                    <h2 className="text-[#1e3a8a] text-xl font-bold mb-4 flex items-center gap-2">
                      <HelpCircle size={20} /> Frequently Asked Questions (FAQ)
                    </h2>
                    <ul className="space-y-4">
                      <li>
                        <strong>
                          Q: How many points will my CIBIL score drop during a
                          balance transfer?
                        </strong>
                        <br />
                        A: Typically, a balance transfer causes a minor drop of
                        10 to 20 points due to the hard inquiry and account
                        closure. This drop usually recovers within 3 to 6 months
                        of timely EMI payments.
                      </li>
                      <li>
                        <strong>
                          Q: Does closing the old loan account negatively affect
                          my credit history?
                        </strong>
                        <br />
                        A: It reduces the average age of your credit accounts
                        slightly, which may cause a temporary drop. However, the
                        closed account remains on your credit report as a
                        successfully closed loan, which is positive for your
                        overall credit standing.
                      </li>
                      <li>
                        <strong>
                          Q: Can I transfer my{" "}
                          <NextLink
                            href="/services/loan/unsecured/personal"
                            className="text-blue-600 font-bold hover:underline"
                          >
                            personal loan
                          </NextLink>{" "}
                          if I already have a low credit score?
                        </strong>
                        <br />
                        A: Lenders usually require a solid CIBIL score (750+) to
                        approve a balance transfer at competitive interest
                        rates. If your score is low, lenders may reject the
                        transfer or offer less favorable rates. Check your
                        credit profile via our
                        <NextLink
                          href="/services/credit/hdfc"
                          className="text-blue-600 font-bold hover:underline"
                        >
                          {" "}
                          credit services{" "}
                        </NextLink>{" "}
                        before applying.
                      </li>
                      <li>
                        <strong>
                          Q: Will a balance transfer affect my existing credit
                          cards or other loans?
                        </strong>
                        <br />
                        A: No. A balance transfer only affects the specific{" "}
                        <NextLink
                          href="/services/loan/unsecured/personal"
                          className="text-blue-600 font-bold hover:underline"
                        >
                          personal loan
                        </NextLink>{" "}
                        account being transferred and your overall
                        credit inquiry history.
                      </li>
                    </ul>
                  </div>
                </article>

                <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[40px] mt-10">
                  <Typography
                    variant="h5"
                    className="text-blue-400 uppercase mb-3"
                  >
                    Ready to Optimize Your Debt?
                  </Typography>
                  <Typography variant="b2" className="text-gray-300 mb-6 block">
                    Manage your active borrowings effectively and lower your
                    interest outgo with a structured balance transfer plan
                    tailored to your financial goals.
                  </Typography>

                  <NextLink
                    href="/services/loan-bt/home"
                    className="inline-block bg-red-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-red-700 transition"
                  >
                    Check Balance Transfer Options
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