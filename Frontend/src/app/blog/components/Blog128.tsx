"use client";

import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

interface RiskCategoryItem {
  range: string;
  category: string;
  description: string;
}

interface PillarItem {
  name: string;
  weight: string;
  description: string;
}

interface DifferenceItem {
  parameter: string;
  score: string;
  report: string;
}

export const Blog128: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const riskCategories: RiskCategoryItem[] = [
    {
      range: "750 to 900",
      category: "Excellent",
      description:
        "Lenders consider you a low-risk borrower. You qualify for instant pre-approved loans, maximum credit limits, minimal documentation, and the lowest interest rates in the market.",
    },
    {
      range: "700 to 749",
      category: "Good",
      description:
        "You have a strong credit record. Most banks and Non-Banking Financial Companies (NBFCs) will readily approve your loan applications under standard market conditions.",
    },
    {
      range: "650 to 699",
      category: "Fair",
      description:
        "You fall into a moderate-risk category. Approvals are possible, but lenders may require higher interest rates, additional income proof, or a co-applicant.",
    },
    {
      range: "300 to 649",
      category: "Poor",
      description:
        "High risk of loan rejection. Lenders view you as financially distressed or prone to default.",
    },
    {
      range: "NA / NH",
      category: "No History",
      description:
        "If you have never taken a loan or used a credit card, you will not have a numeric score. Instead, your report will show 'NA' or 'NH' (No History). While not negative, it requires lenders to manually verify your credentials before extending credit.",
    },
  ];

  const pillars: PillarItem[] = [
    {
      name: "Repayment History",
      weight: "35%",
      description:
        "This is the single most critical factor in your credit score. It tracks whether you pay your equated monthly installments (EMIs) and credit card bills on time. Even a single delayed payment or a 30-day default can cause your score to drop by 50 to 100 points instantly.",
    },
    {
      name: "Credit Utilization Ratio (CUR)",
      weight: "30%",
      description:
        "Measures how much of your total available credit limit you use each month. Keeping your overall CUR below 30% demonstrates financial stability. Hitting 80%+ flags you as credit hungry, pulling down your score.",
    },
    {
      name: "Duration of Credit History",
      weight: "15%",
      description:
        "The age of your credit accounts matters significantly. A longer track record of responsible credit management gives lenders deeper confidence in your repayment capability.",
    },
    {
      name: "Credit Mix (Secured vs. Unsecured)",
      weight: "10%",
      description:
        "Lenders like to see a healthy blend of secured loans (home or car loans) and unsecured loans (personal loans, credit cards, or business loans). Relying entirely on unsecured loans signals higher financial risk.",
    },
    {
      name: "Hard Inquiries & Recent Seeking",
      weight: "10%",
      description:
        "Submitting multiple loan applications across different banks within a short window triggers multiple hard inquiries, causing a temporary dip in your score.",
    },
  ];

  const differences: DifferenceItem[] = [
    {
      parameter: "Definition",
      score: "A 3-digit numerical summary (300–900).",
      report: "A comprehensive statement detailing your entire credit history.",
    },
    {
      parameter: "Contents",
      score: "Just a single score number evaluating risk level.",
      report:
        "Personal details, employment details, account histories, payment records, and hard inquiries.",
    },
    {
      parameter: "Purpose",
      score: "Used by lenders for quick initial screening.",
      report:
        "Used by underwriters for in-depth credit evaluation before sanctioning large loans.",
    },
    {
      parameter: "Updates",
      score: "Changes dynamically as new data is reported.",
      report:
        "Updated monthly as financial institutions report fresh transaction records.",
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
            title="Ultimate Guide to CIBIL Score: How It Affects Loan Approvals & How to Build a 750+ Credit Score"
            category="CREDIT SCORE"
            author="Kishan Baranwal"
            date="October 30, 2026"
            image="/images/blog/Blog-128.jpeg"
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
                    src="/images/blog/Blog-128.jpeg"
                    alt="cibil score"
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
                    href="https://moneykingfinancial.com/"
                    className="text-[#1e3a8a] hover:underline"
                  >
                    Ultimate Guide to CIBIL Score
                  </NextLink>
                  : How It Affects Loan Approvals &amp; How to Build a 750+ Credit Score
                </Typography>

                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                  <Clock size={16} />
                  <Typography variant="b2">October 30, 2026</Typography>
                  <span className="mx-2">•</span>
                  <Typography variant="b2">By Kishan Baranwal</Typography>
                </div>

                {/* Blog Article Body */}
                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                  {/* Featured Snippet Box */}
                  <div className="bg-slate-50 border-l-4 border-[#1e3a8a] p-4 rounded-r-lg">
                    <p className="text-gray-700 italic m-0">
                      When you apply for a loan or a credit card in India, the first thing a lender checks is not your monthly income or your corporate designation—it is your 3-digit CIBIL score. A high credit score acts as a trust badge in the banking system, unlocking lower interest rates, faster disbursals, and higher credit limits. Learn how to check your credit score online and build a 750+ score with{" "}
                      <NextLink
                        href="https://moneykingfinancial.com/"
                        className="text-[#1e3a8a] font-semibold hover:underline"
                      >
                        Money King Financial Services
                      </NextLink>.
                    </p>
                  </div>

                  <p>
                    A high CIBIL score proves to financial institutions that you are a responsible borrower who pays debts back on time. On the flip side, a low credit score can lead to instant loan rejections, lower credit limits, or exorbitant interest rates.
                  </p>

                  <p>
                    Whether you are planning to apply for an unsecured <strong>CIBIL score for business loan</strong> assessment, a personal loan, a home loan, or simply want to take complete control of your financial health, this comprehensive guide covers everything you need to know about credit scores and actionable strategies to rebuild your credit profile fast.
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    1. What is a CIBIL Score and How Does It Work?
                  </h2>
                  <p>
                    A CIBIL score is a three-digit numerical summary of your credit history, ranging from 300 to 900. It is generated by TransUnion CIBIL, one of the four major credit bureaus authorized by the Reserve Bank of India (RBI)—the others being Experian, Equifax, and CRIF High Mark.
                  </p>
                  <p>
                    Whenever you borrow money—whether through a credit card, a personal loan, an auto loan, or a business credit line—your lender reports your repayment behavior to these credit bureaus on a monthly basis.
                  </p>

                  <h3 className="text-lg font-bold text-gray-800 pt-2">
                    The Good CIBIL Score Range: Where Do You Stand?
                  </h3>
                  <div className="overflow-x-auto my-4">
                    <table className="w-full border-collapse border border-gray-200 text-left text-sm">
                      <thead className="bg-slate-100 text-gray-800">
                        <tr>
                          <th className="border border-gray-200 p-3">Score Range</th>
                          <th className="border border-gray-200 p-3">Category</th>
                          <th className="border border-gray-200 p-3">Impact &amp; Eligibility</th>
                        </tr>
                      </thead>
                      <tbody>
                        {riskCategories.map((item: RiskCategoryItem, index: number) => (
                          <tr key={index}>
                            <td className="border border-gray-200 p-3 font-semibold">
                              {item.range}
                            </td>
                            <td className="border border-gray-200 p-3 font-medium">
                              {item.category}
                            </td>
                            <td className="border border-gray-200 p-3">
                              {item.description}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    2. The 5 Core Pillars: How Your CIBIL Score Is Calculated
                  </h2>
                  <p>
                    TransUnion CIBIL evaluates your credit profile across five key weightage areas:
                  </p>

                  <div className="overflow-x-auto my-4">
                    <table className="w-full border-collapse border border-gray-200 text-left text-sm">
                      <thead className="bg-slate-100 text-gray-800">
                        <tr>
                          <th className="border border-gray-200 p-3">Core Pillar</th>
                          <th className="border border-gray-200 p-3">Weightage</th>
                          <th className="border border-gray-200 p-3">How It Influences Your Score</th>
                        </tr>
                      </thead>
                      <tbody>
                        {pillars.map((item: PillarItem, index: number) => (
                          <tr key={index}>
                            <td className="border border-gray-200 p-3 font-semibold">
                              {item.name}
                            </td>
                            <td className="border border-gray-200 p-3 font-bold text-[#1e3a8a]">
                              {item.weight}
                            </td>
                            <td className="border border-gray-200 p-3">
                              {item.description}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    3. CIBIL Score vs. Credit Report: Understanding the Difference
                  </h2>
                  <p>
                    Many people confuse a credit score with a credit report. While closely related, they serve different functions:
                  </p>

                  <div className="overflow-x-auto my-4">
                    <table className="w-full border-collapse border border-gray-200 text-left text-sm">
                      <thead className="bg-slate-100 text-gray-800">
                        <tr>
                          <th className="border border-gray-200 p-3">Parameter</th>
                          <th className="border border-gray-200 p-3">CIBIL Score</th>
                          <th className="border border-gray-200 p-3">CIBIL Credit Report (CIR)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {differences.map((item: DifferenceItem, index: number) => (
                          <tr key={index}>
                            <td className="border border-gray-200 p-3 font-semibold">
                              {item.parameter}
                            </td>
                            <td className="border border-gray-200 p-3">
                              {item.score}
                            </td>
                            <td className="border border-gray-200 p-3">
                              {item.report}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    4. Why Your CIBIL Score Is Vital for Business Loans &amp; Personal Growth
                  </h2>
                  <p>
                    If you run a small or medium enterprise (SME) or are planning a corporate expansion, your personal credit history directly affects your commercial funding potential:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Collateral-Free Business Loans:</strong> Unsecured business loans do not require mortgaging machinery, real estate, or gold. Lenders rely heavily on the promoter&apos;s CIBIL score (750+) to evaluate credibility.
                    </li>
                    <li>
                      <strong>Lower Interest Rates &amp; Processing Fees:</strong> A high score puts you in a strong position to negotiate better interest rates and minimal processing charges with banks.
                    </li>
                    <li>
                      <strong>Higher Loan Sanction Limits:</strong> Lenders are far more willing to approve higher sanction limits when your credit history shows consistent, defect-free repayments.
                    </li>
                    <li>
                      <strong>Faster Disbursal Cycles:</strong> Pre-approved offers and fast-track processing allow businesses to meet urgent working capital needs without operational delays.
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    5. How to Improve CIBIL Score Fast: Actionable 5-Step Roadmap
                  </h2>
                  <ol className="list-decimal pl-6 space-y-3">
                    <li>
                      <strong>Step 1: Automate All Bill Payments &amp; EMIs:</strong> Set up standing instructions or auto-debit mandates with your bank for all credit card bills and loan EMIs. Ensure your savings account has sufficient balance at least 2 days prior to the debit date.
                    </li>
                    <li>
                      <strong>Step 2: Bring Your Credit Utilization Below 30%:</strong> Request a credit limit increase, pay off your credit card bill mid-cycle before the statement generates, or spread expenses across multiple cards.
                    </li>
                    <li>
                      <strong>Step 3: Audit Your Credit Report for Errors:</strong> Download your official CIBIL report, review the &quot;Accounts&quot; and &quot;Enquiries&quot; sections carefully, and raise an official dispute on the CIBIL portal if you spot any incorrect entries.
                    </li>
                    <li>
                      <strong>Step 4: Avoid Closing Your Oldest Credit Accounts:</strong> Closing your oldest account reduces your overall average credit history length and shrinks your total available credit limit—both of which can lower your score.
                    </li>
                    <li>
                      <strong>Step 5: Space Out Your Credit Applications:</strong> Avoid applying for multiple credit cards or loans simultaneously to prevent a surge of Hard Inquiries on your profile.
                    </li>
                  </ol>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    6. Common Myths &amp; Misconceptions About CIBIL Score
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Myth 1: Checking my own credit score lowers my score.</strong>
                      <br />
                      <em>Fact:</em> When you perform a <strong>credit score check online</strong> for yourself, it is logged as a Soft Inquiry. Soft inquiries have zero impact on your score.
                    </li>
                    <li>
                      <strong>Myth 2: Debit cards and bank balances build your CIBIL score.</strong>
                      <br />
                      <em>Fact:</em> CIBIL tracks credit and borrowed money. Having a large sum in your savings account or using a debit card does not contribute to your credit score because no line of credit is involved.
                    </li>
                    <li>
                      <strong>Myth 3: Closing a defaulted account erases it from your history immediately.</strong>
                      <br />
                      <em>Fact:</em> Settling an account by paying less than the total outstanding amount leaves a &quot;Settled&quot; or &quot;Written Off&quot; mark on your record for up to 7 years unless you clear the full balance with the lender.
                    </li>
                  </ul>

                  {/* FAQ Section */}
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                    <h2 className="text-[#1e3a8a] text-xl font-bold mb-4 flex items-center gap-2">
                      <HelpCircle size={20} /> Frequently Asked Questions (FAQ)
                    </h2>
                    <ul className="space-y-4">
                      <li>
                        <strong>Q1: How long does it take to improve a low CIBIL score?</strong>
                        <br />
                        It typically takes 3 to 6 months of consistent, disciplined financial behavior (timely EMI payments, low credit utilization, and zero hard inquiries) to see a noticeable improvement in your credit score.
                      </li>
                      <li>
                        <strong>Q2: What is a &quot;Settled&quot; status in a CIBIL report, and why is it harmful?</strong>
                        <br />
                        A &quot;Settled&quot; status means the lender agreed to accept a partial payment and forgive the remaining balance because you were unable to pay in full. While this stops legal recovery actions, it signals to future lenders that you defaulted on a portion of your debt, making future loan approvals difficult.
                      </li>
                      <li>
                        <strong>Q3: Can a person with no credit history (NH/NA) get an unsecured business loan?</strong>
                        <br />
                        Getting an unsecured business loan with no credit history can be challenging. In such cases, lenders look closely at business turnover, banking cash flows, GST returns, and financial vintage, or may require a co-applicant with a strong credit profile.
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
                    Check Your Credit Score &amp; Get Business Funding
                  </Typography>
                  <Typography variant="b2" className="text-gray-300 mb-6 block">
                    Build a strong credit profile and secure hassle-free loan approvals with{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/"
                      className="text-blue-400 hover:underline"
                    >
                      Money King Financial Services
                    </NextLink>{" "}
                    now.
                  </Typography>

                  <div className="flex flex-wrap gap-4 mt-2">
                    <NextLink
                      href="https://moneykingfinancial.com/"
                      className="inline-block bg-blue-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-700 transition"
                    >
                      Check Eligibility &amp; Apply Now
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

export default Blog128;