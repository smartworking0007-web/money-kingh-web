"use client";

import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export const Blog88: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className="w-full flex justify-center">
            {!isOpen ? (
                <div
                    onClick={() => setIsOpen(true)}
                    className="cursor-pointer w-full flex justify-center px-4"
                >
                    <BlogCard1
                        title="Personal Loan vs. Credit Card Loan: Which Is Better for Urgent Cash Needs?"
                        category="LOANS"
                        author="Sumit Mishra"
                        date="August 25, 2026"
                        image="/images/blog/blog-88.jpg"
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
                                    src="/images/blog/blog-88.jpg"
                                    alt="PERSONAL LOAN VS CREDITCARD"
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
                                    Personal Loan vs.{" "}
                                    <NextLink
                                        href="https://moneykingfinancial.com/services/credit/hdfc"
                                        className="text-[#1e3a8a] hover:underline"
                                    >
                                        Credit Card
                                    </NextLink>{" "}
                                    Loan: Which Is Better for Urgent Cash Needs ?
                                </Typography>

                                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                                    <Clock size={16} />
                                    <Typography variant="b2">August 25, 2026</Typography>
                                </div>

                                {/* Blog Article Body */}
                                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                                    <p>
                                        When choosing between a{" "}
                                        <NextLink
                                            href="https://moneykingfinancial.com/services/loan/unsecured/personal"
                                            className="text-blue-600 font-semibold hover:underline"
                                        >
                                            personal loan
                                        </NextLink>{" "}
                                        and a{" "}
                                        <NextLink
                                            href="https://moneykingfinancial.com/services/credit/hdfc"
                                            className="text-blue-600 font-semibold hover:underline"
                                        >
                                            credit card
                                        </NextLink>{" "}
                                        loan, the best option depends on urgency, loan amount, and interest rates. A{" "}
                                        <NextLink
                                            href="https://moneykingfinancial.com/services/credit/hdfc"
                                            className="text-blue-600 font-semibold hover:underline"
                                        >
                                            credit card
                                        </NextLink>{" "}
                                        loan (pre-approved) provides instant, hassle-free cash disbursal with zero
                                        documentation, making it ideal for small, immediate emergencies. Conversely, a{" "}
                                        <NextLink
                                            href="https://moneykingfinancial.com/services/loan/unsecured/personal"
                                            className="text-blue-600 font-semibold hover:underline"
                                        >
                                            personal loan
                                        </NextLink>{" "}
                                        offers lower interest rates, higher borrowing limits, and longer repayment
                                        tenures, making it the smarter financial choice for larger medical expenses,
                                        home renovation, or debt consolidation.
                                    </p>

                                    <p>
                                        When unexpected financial emergencies arise, having access to quick liquidity is
                                        crucial. Today, two of the most popular ways to secure fast cash are{" "}
                                        <NextLink
                                            href="https://moneykingfinancial.com/services/loan/unsecured/personal"
                                            className="text-blue-600 font-semibold hover:underline"
                                        >
                                            Personal Loans
                                        </NextLink>{" "}
                                        and Loans against{" "}
                                        <NextLink
                                            href="https://moneykingfinancial.com/services/credit/hdfc"
                                            className="text-blue-600 font-semibold hover:underline"
                                        >
                                            Credit Cards
                                        </NextLink>
                                        .
                                    </p>

                                    <p>
                                        While both options fall under the umbrella of unsecured borrowing (requiring no
                                        collateral), they differ significantly in terms of interest rates, processing
                                        speed, loan limits, and total repayment costs. In this guide, we break down the
                                        core differences between a personal loan and a credit card loan to help you pick
                                        the right borrowing avenue without straining your monthly budget.
                                    </p>

                                    <h2 className="text-xl font-bold text-gray-800 pt-4">
                                        1. Understanding Personal Loans
                                    </h2>
                                    <p>
                                        A{" "}
                                        <NextLink
                                            href="https://moneykingfinancial.com/services/loan/unsecured/personal"
                                            className="text-blue-600 font-semibold hover:underline"
                                        >
                                            Personal Loan
                                        </NextLink>{" "}
                                        is a traditional unsecured loan offered by banks and NBFCs based on your credit
                                        score, monthly income, and employment stability.
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>
                                            <strong>High Borrowing Limits:</strong> Ideal for substantial financial needs
                                            ranging from ₹50,000 to ₹40 Lakhs or more.
                                        </li>
                                        <li>
                                            <strong>Flexible Repayment Tenures:</strong> Repayment terms generally span
                                            between 12 to 60 months (1 to 5 years).
                                        </li>
                                        <li>
                                            <strong>Competitive Interest Rates:</strong> Interest rates are fixed and
                                            generally lower than credit card borrowing, typically ranging between 10.5% to
                                            18% per annum depending on your CIBIL score.
                                        </li>
                                        <li>
                                            <strong>Documentation &amp; Approval:</strong> Requires income verification
                                            (salary slips, bank statements, ITR) and takes anywhere from a few hours to 2
                                            business days for disbursal.
                                        </li>
                                    </ul>

                                    <h2 className="text-xl font-bold text-gray-800 pt-4">
                                        2. Understanding Credit Card Loans
                                    </h2>
                                    <p>
                                        A{" "}
                                        <NextLink
                                            href="https://moneykingfinancial.com/services/credit/hdfc"
                                            className="text-blue-600 font-semibold hover:underline"
                                        >
                                            Credit Card
                                        </NextLink>{" "}
                                        Loan is a pre-approved, instant loan facility provided by your card issuer based
                                        on your credit limit and card usage history.
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>
                                            <strong>Instant Disbursal:</strong> Money is credited to your bank account
                                            almost instantly (within a few clicks on your mobile banking app) as it
                                            leverages pre-verified eligibility.
                                        </li>
                                        <li>
                                            <strong>Minimal Documentation:</strong> Requires zero paperwork or fresh
                                            income proof.
                                        </li>
                                        <li>
                                            <strong>Shorter Tenures:</strong> Typically repaid over 3 to 24 months.
                                        </li>
                                        <li>
                                            <strong>Interest Rates &amp; Charges:</strong> Interest rates can vary
                                            widely—from competitive promotional offers (12% to 15%) up to standard cash
                                            advance rates (24% to 42% p.a.).
                                        </li>
                                    </ul>

                                    <h2 className="text-xl font-bold text-gray-800 pt-4">
                                        Direct Comparison: Personal Loan vs. Credit Card Loan
                                    </h2>
                                    <div className="overflow-x-auto">
                                        <table className="w-full border-collapse border border-gray-200">
                                            <thead>
                                                <tr className="bg-gray-100 text-left">
                                                    <th className="border p-2">Feature / Parameter</th>
                                                    <th className="border p-2">
                                                        <NextLink
                                                            href="https://moneykingfinancial.com/services/loan/unsecured/personal"
                                                            className="text-blue-600 font-semibold hover:underline"
                                                        >
                                                            Personal Loan
                                                        </NextLink>
                                                    </th>
                                                    <th className="border p-2">
                                                        <NextLink
                                                            href="https://moneykingfinancial.com/services/credit/hdfc"
                                                            className="text-blue-600 font-semibold hover:underline"
                                                        >
                                                            Credit Card
                                                        </NextLink>{" "}
                                                        Loan (Pre-Approved)
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="border p-2 font-bold">Disbursal Speed</td>
                                                    <td className="border p-2">Few hours to 2 working days</td>
                                                    <td className="border p-2 font-semibold text-green-600">
                                                        Instant (Within minutes)
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="border p-2 font-bold">Documentation</td>
                                                    <td className="border p-2">Income proof, bank statements, KYC</td>
                                                    <td className="border p-2 font-semibold text-green-600">
                                                        Zero documentation required
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="border p-2 font-bold">Maximum Loan Amount</td>
                                                    <td className="border p-2">High (up to ₹25–40 Lakhs)</td>
                                                    <td className="border p-2">
                                                        Moderate (limited to card limit/pre-approved offer)
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="border p-2 font-bold">Interest Rate Range</td>
                                                    <td className="border p-2 font-semibold text-green-600">
                                                        Moderate (10.5%–18% p.a.)
                                                    </td>
                                                    <td className="border p-2">Variable (12%–28%+ p.a.)</td>
                                                </tr>
                                                <tr>
                                                    <td className="border p-2 font-bold">Repayment Tenure</td>
                                                    <td className="border p-2">Flexible (1 to 5 years)</td>
                                                    <td className="border p-2">Short to Medium (3 months to 2 years)</td>
                                                </tr>
                                                <tr>
                                                    <td className="border p-2 font-bold">Impact on Card Limit</td>
                                                    <td className="border p-2">No impact on credit card limit</td>
                                                    <td className="border p-2">May block or reduce available card limit</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    {/* FAQ Section */}
                                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                                        <h2 className="text-[#1e3a8a] text-xl font-bold mb-4 flex items-center gap-2">
                                            <HelpCircle size={20} /> Frequently Asked Questions (FAQ)
                                        </h2>
                                        <ul className="space-y-4">
                                            <li>
                                                <strong>
                                                    Q: Does taking a{" "}
                                                    <NextLink
                                                        href="https://moneykingfinancial.com/services/credit/hdfc"
                                                        className="text-blue-600 hover:underline"
                                                    >
                                                        credit card
                                                    </NextLink>{" "}
                                                    loan block my credit card limit?
                                                </strong>
                                                <br />
                                                A: It depends on the lender. In a Loan Within Credit Limit, your available
                                                credit limit is blocked by the loan amount and reduces progressively as you
                                                pay monthly EMIs. In a Loan Over Credit Limit, the loan is sanctioned over
                                                and above your card limit without affecting your regular limit.
                                            </li>
                                            <li>
                                                <strong>
                                                    Q: Can I prepay or foreclose a{" "}
                                                    <NextLink
                                                        href="https://moneykingfinancial.com/services/credit/hdfc"
                                                        className="text-blue-600 hover:underline"
                                                    >
                                                        credit card
                                                    </NextLink>{" "}
                                                    loan early?
                                                </strong>
                                                <br />
                                                A: Yes, most credit card issuers allow foreclosure. However, check for
                                                prepayment/foreclosure penalty charges (usually 2% to 3% of the outstanding
                                                principal balance) before closing the loan ahead of schedule.
                                            </li>
                                            <li>
                                                <strong>
                                                    Q: Which loan is better for rebuilding a CIBIL score?
                                                </strong>
                                                <br />
                                                A: Both personal loans and credit card loans are reported to credit bureaus
                                                as installment debt. Timely monthly EMI payments on either loan type will
                                                positively boost your credit history and score. Check your credit profile on
                                                our{" "}
                                                <NextLink
                                                    href="https://moneykingfinancial.com/services/credit/hdfc"
                                                    className="text-blue-600 font-bold hover:underline"
                                                >
                                                    credit services portal
                                                </NextLink>{" "}
                                                to explore your pre-approved options.
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
                                        Need Emergency Cash? Explore Your Loan Options!
                                    </Typography>
                                    <Typography variant="b2" className="text-gray-300 mb-6 block">
                                        Compare customized personal loan rates, check pre-approved credit card offers,
                                        and get instant disbursal support tailored to your financial profile.
                                    </Typography>

                                    <div className="flex flex-wrap gap-4">
                                        <NextLink
                                            href="https://moneykingfinancial.com/services/loan/unsecured/personal"
                                            className="inline-block bg-red-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-red-700 transition"
                                        >
                                            Apply for Personal Loan
                                        </NextLink>
                                        <NextLink
                                            href="https://moneykingfinancial.com/services/credit/hdfc"
                                            className="inline-block bg-blue-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-700 transition"
                                        >
                                            Check Credit Card Offers
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