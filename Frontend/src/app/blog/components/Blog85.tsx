"use client";

import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export const Blog85: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className="w-full flex justify-center">
            {!isOpen ? (
                <div
                    onClick={() => setIsOpen(true)}
                    className="cursor-pointer w-full flex justify-center px-4"
                >
                    <BlogCard1
                        title="Is a GST Certificate Sufficient to Get a Business Loan?"
                        category="BUSINESS LOAN"
                        author="Sumit Mishra"
                        date="August 21, 2026"
                        image="/images/blog/blog-85.png"
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
                                    src="/images/blog/blog-85.png"
                                    alt="business loan is differ to others"
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
                                    Is a GST Certificate Sufficient to Get a{" "}
                                    <NextLink
                                        href="https://moneykingfinancial.com/services/loan/unsecured/business"
                                        className="text-[#1e3a8a] hover:underline"
                                    >
                                        Business Loan
                                    </NextLink>
                                    ?
                                </Typography>

                                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                                    <Clock size={16} />
                                    <Typography variant="b2">August 21, 2026</Typography>
                                </div>

                                {/* Blog Article Body */}
                                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                                    <p>
                                        While a GST registration certificate serves as valid proof of business
                                        existence and operational vintage, it is not solely sufficient to get a{" "}
                                        <NextLink
                                            href="https://moneykingfinancial.com/services/loan/unsecured/business"
                                            className="text-blue-600 font-semibold hover:underline"
                                        >
                                            business loan
                                        </NextLink>{" "}
                                        approved. Lenders use GST returns (GSTR-3B and GSTR-1) to verify official sales
                                        turnover, but they also require bank statements (6 to 12 months), a clean CIBIL
                                        credit score (750+), and Income Tax Returns (ITR) to evaluate cash flow
                                        stability, debt repayment capacity, and overall business profitability before
                                        sanctioning a loan.
                                    </p>

                                    <p>
                                        For small and medium enterprises (MSMEs), securing timely working capital or
                                        expansion capital is critical for growth. With digitized lending processes, many
                                        business owners wonder whether having an active GST (Goods and Services Tax)
                                        registration is enough to get an unsecured{" "}
                                        <NextLink
                                            href="https://moneykingfinancial.com/services/loan/unsecured/business"
                                            className="text-blue-600 font-semibold hover:underline"
                                        >
                                            business loan
                                        </NextLink>{" "}
                                        approved.
                                    </p>

                                    <p>
                                        The short answer is no—a GST certificate alone is not sufficient, but GST
                                        returns play a pivotal role in the loan approval process. Lenders require more
                                        than just proof of business registration; they need concrete evidence of your
                                        repayment capacity.
                                    </p>

                                    <p>
                                        In this comprehensive guide, we explain how banks evaluate GST documents, what
                                        additional requirements you need, and how GST-based{" "}
                                        <NextLink
                                            href="https://moneykingfinancial.com/services/loan/unsecured/business"
                                            className="text-blue-600 font-semibold hover:underline"
                                        >
                                            business loans
                                        </NextLink>{" "}
                                        work.
                                    </p>

                                    <h2 className="text-xl font-bold text-gray-800 pt-4">
                                        1. What a GST Certificate Proves (And What It Doesn&apos;t)
                                    </h2>
                                    <p>
                                        A GST certificate is an official document issued by the government confirming
                                        that your enterprise is registered under the GST framework.
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>
                                            <strong>What It Proves:</strong> It verifies your business identity,
                                            commercial address, operational vintage, and compliance with statutory tax
                                            regulations.
                                        </li>
                                        <li>
                                            <strong>What It Doesn&apos;t Prove:</strong> It does not show your actual net
                                            profit, monthly cash balances, existing debt obligations, or creditworthiness.
                                        </li>
                                    </ul>
                                    <p>
                                        Because a loan must be repaid out of real cash flow rather than gross revenue
                                        alone, banks look beyond just the certificate when approving a{" "}
                                        <NextLink
                                            href="https://moneykingfinancial.com/services/loan/unsecured/business"
                                            className="text-blue-600 font-semibold hover:underline"
                                        >
                                            business loan
                                        </NextLink>
                                        .
                                    </p>

                                    <h2 className="text-xl font-bold text-gray-800 pt-4">
                                        2. How Lenders Use GST Data: GST Return-Based Loans
                                    </h2>
                                    <p>
                                        While the certificate itself is just an ID document, your GST Returns (GSTR-1
                                        and GSTR-3B) are powerful financial proofs used in modern fintech lending:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>
                                            <strong>Turnover Verification:</strong> Lenders cross-verify the sales figures
                                            declared in your GST returns with your bank account credits to ensure there is
                                            no discrepancy.
                                        </li>
                                        <li>
                                            <strong>Cash Flow Consistency:</strong> Regular monthly GST filings
                                            demonstrate steady business operations, which helps in securing unsecured
                                            working capital loans.
                                        </li>
                                        <li>
                                            <strong>Banking Surrogate Method:</strong> Many NBFCs and digital lenders offer
                                            specialized GST-Based{" "}
                                            <NextLink
                                                href="https://moneykingfinancial.com/services/loan/unsecured/business"
                                                className="text-blue-600 font-semibold hover:underline"
                                            >
                                                Business Loans
                                            </NextLink>{" "}
                                            where loan eligibility is calculated directly as a percentage (typically 10%
                                            to 20%) of your annual GST-declared turnover.
                                        </li>
                                    </ul>

                                    <h2 className="text-xl font-bold text-gray-800 pt-4">
                                        3. Essential Requirements Alongside GST for Business Loans
                                    </h2>
                                    <p>
                                        To secure a{" "}
                                        <NextLink
                                            href="https://moneykingfinancial.com/services/loan/unsecured/business"
                                            className="text-blue-600 font-semibold hover:underline"
                                        >
                                            business loan
                                        </NextLink>{" "}
                                        approval at competitive interest rates, you will need to provide the following
                                        supporting documents along with your GST registration:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>
                                            <strong>Bank Account Statements:</strong> 6 to 12 months of main current
                                            account statements to prove active cash flow, daily average balance, and
                                            absence of cheque bounces.
                                        </li>
                                        <li>
                                            <strong>Income Tax Returns (ITR):</strong> Past 1 to 2 years of ITR filings
                                            along with computation of income to verify net profitability.
                                        </li>
                                        <li>
                                            <strong>Good Personal &amp; Business Credit Score:</strong> A personal CIBIL
                                            score of 750 or higher is required for an unsecured{" "}
                                            <NextLink
                                                href="https://moneykingfinancial.com/services/loan/unsecured/business"
                                                className="text-blue-600 font-semibold hover:underline"
                                            >
                                                business loan
                                            </NextLink>
                                            .
                                        </li>
                                        <li>
                                            <strong>KYC Documents:</strong> PAN card, official identity proof, and
                                            valid address documentation of the business owners/promoters.
                                        </li>
                                    </ul>

                                    <h2 className="text-xl font-bold text-gray-800 pt-4">
                                        Document Checklist: GST Only vs. Complete Application
                                    </h2>
                                    <div className="overflow-x-auto">
                                        <table className="w-full border-collapse border border-gray-200">
                                            <thead>
                                                <tr className="bg-gray-100 text-left">
                                                    <th className="border p-2">Parameter</th>
                                                    <th className="border p-2">GST Certificate Only</th>
                                                    <th className="border p-2">Complete Loan Application Package</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="border p-2 font-bold">Proof of Business Existence</td>
                                                    <td className="border p-2">Verified</td>
                                                    <td className="border p-2">Verified</td>
                                                </tr>
                                                <tr>
                                                    <td className="border p-2 font-bold">Sales Turnover Proof</td>
                                                    <td className="border p-2">Partial (Requires GSTR-3B filings)</td>
                                                    <td className="border p-2">Verified via GSTR-1 &amp; GSTR-3B</td>
                                                </tr>
                                                <tr>
                                                    <td className="border p-2 font-bold">Cash Flow &amp; Liquidity</td>
                                                    <td className="border p-2">Not Available</td>
                                                    <td className="border p-2">Verified via 12-Month Bank Statements</td>
                                                </tr>
                                                <tr>
                                                    <td className="border p-2 font-bold">Net Profitability Verification</td>
                                                    <td className="border p-2">Not Available</td>
                                                    <td className="border p-2">Verified via ITR &amp; Financial Statements</td>
                                                </tr>
                                                <tr>
                                                    <td className="border p-2 font-bold">Loan Approval Probability</td>
                                                    <td className="border p-2 text-red-600 font-semibold">
                                                        Very Low / Rejected
                                                    </td>
                                                    <td className="border p-2 text-green-600 font-semibold">
                                                        High Approval Rate
                                                    </td>
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
                                                    Q: Can I get a{" "}
                                                    <NextLink
                                                        href="https://moneykingfinancial.com/services/loan/unsecured/business"
                                                        className="text-blue-600 hover:underline"
                                                    >
                                                        business loan
                                                    </NextLink>{" "}
                                                    if my GST registration is less than 6 months old?
                                                </strong>
                                                <br />
                                                A: Most traditional banks require a minimum business vintage of 1 to 2
                                                years under GST. However, certain fintech platforms and NBFCs offer
                                                short-term working capital loans to newer businesses if their bank statement
                                                reflects strong transaction volumes.
                                            </li>
                                            <li>
                                                <strong>
                                                    Q: What is a GST-based{" "}
                                                    <NextLink
                                                        href="https://moneykingfinancial.com/services/loan/unsecured/business"
                                                        className="text-blue-600 hover:underline"
                                                    >
                                                        business loan
                                                    </NextLink>
                                                    ?
                                                </strong>
                                                <br />
                                                A: A GST-based{" "}
                                                <NextLink
                                                    href="https://moneykingfinancial.com/services/loan/unsecured/business"
                                                    className="text-blue-600 hover:underline"
                                                >
                                                    business loan
                                                </NextLink>{" "}
                                                is an unsecured financing facility where the lender calculates your maximum
                                                loan eligibility based on the annual turnover declared in your GST returns,
                                                eliminating the need for hard collateral assets.
                                            </li>
                                            <li>
                                                <strong>Q: Why do banks ask for both ITR and GST returns?</strong>
                                                <br />
                                                A: GST returns reflect your gross top-line turnover (sales), whereas Income
                                                Tax Returns (ITR) show your net bottom-line income (profits after expenses).
                                                Banks evaluate both to ensure your enterprise is profitable enough to service
                                                monthly loan EMIs without strain. Explore our{" "}
                                                <NextLink
                                                    href="https://moneykingfinancial.com/services/loan/unsecured/business"
                                                    className="text-blue-600 font-bold hover:underline"
                                                >
                                                    unsecured business loan options
                                                </NextLink>{" "}
                                                to check eligibility and unlock collateral-free capital.
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
                                        Fuel Your Growth With a Fast-Track{" "}
                                        <NextLink
                                            href="https://moneykingfinancial.com/services/loan/unsecured/business"
                                            className="text-blue-400 hover:underline"
                                        >
                                            Business Loan
                                        </NextLink>
                                        !
                                    </Typography>
                                    <Typography variant="b2" className="text-gray-300 mb-6 block">
                                        Leverage your GST filings and banking turnover to unlock collateral-free{" "}
                                        <NextLink
                                            href="https://moneykingfinancial.com/services/loan/unsecured/business"
                                            className="text-blue-400 hover:underline"
                                        >
                                            business loans
                                        </NextLink>{" "}
                                        with competitive interest rates and flexible tenures.
                                    </Typography>

                                    <NextLink
                                        href="https://moneykingfinancial.com/services/loan/unsecured/business"
                                        className="inline-block bg-red-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-red-700 transition"
                                    >
                                        Apply for Business Loan
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