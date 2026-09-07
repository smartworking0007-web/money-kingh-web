"use client";

import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export const Blog97: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className="w-full flex justify-center">
            {!isOpen ? (
                <div
                    onClick={() => setIsOpen(true)}
                    className="cursor-pointer w-full flex justify-center px-4"
                >
                    <BlogCard1
                        title="Loan Service Provider: How to Choose the Best Financial Partner for Instant Approvals"
                        category="LOANS"
                        author="Sumit Mishra"
                        date="September 7, 2026"
                        image="/images/blog/blog-97.jpeg"
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
                                    src="/images/blog/blog-97.jpeg"
                                    alt="LOAN SERVICE PROVIDER"
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
                                    <NextLink
                                        href="https://moneykingfinancial.com/services"
                                        className="text-[#1e3a8a] hover:underline"
                                    >
                                        Loan Service Provider
                                    </NextLink>
                                    : How to Choose the Best Financial Partner for Instant Approvals
                                </Typography>

                                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                                    <Clock size={16} />
                                    <Typography variant="b2">September 7, 2026</Typography>
                                </div>

                                {/* Blog Article Body */}
                                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                                    {/* Featured Snippet Box */}
                                    <div className="bg-slate-50 border-l-4 border-[#1e3a8a] p-4 rounded-r-lg">
                                        <p className="text-gray-700  m-0">
                                            A loan service provider acts as a professional bridge between borrowers and top financial institutions, simplifying the process of securing{" "}
                                            <NextLink
                                                href="https://moneykingfinancial.com/services/loan/unsecured/personal"
                                                className="text-blue-600 font-semibold hover:underline"
                                            >
                                                personal loans
                                            </NextLink>
                                            ,{" "}
                                            <NextLink
                                                href="https://moneykingfinancial.com/services/loan/unsecured/business"
                                                className="text-blue-600 font-semibold hover:underline"
                                            >
                                                business loans
                                            </NextLink>
                                            ,{" "}
                                            <NextLink
                                                href="https://moneykingfinancial.com/services/loan/secured/home"
                                                className="text-blue-600 font-semibold hover:underline"
                                            >
                                                home loans
                                            </NextLink>
                                            , or debt consolidation loans. By evaluating your credit profile, comparing competitive interest rates across multiple lenders, and handling complex paperwork, a trusted loan service provider ensures faster loan sanctioning, higher approval odds, and tailored repayment terms without unnecessary financial stress.
                                        </p>
                                    </div>

                                    <h2 className="text-xl font-bold text-gray-800 pt-4">
                                        Loan Service Provider: Your Complete Guide to Smart &amp; Fast Borrowing
                                    </h2>
                                    <p>
                                        Navigating the financial landscape to secure a loan can often feel overwhelming. With dozens of banks, non-banking financial companies (NBFCs), and digital lending platforms available, finding the right loan with low interest rates and flexible terms requires time and expertise.
                                    </p>
                                    <p>
                                        This is where a professional loan service provider becomes invaluable. Whether you need immediate cash for a personal emergency, capital to expand your business, or funds to buy your dream home, a dedicated service provider streamlines the entire process from application to disbursal.
                                    </p>

                                    <h2 className="text-xl font-bold text-gray-800 pt-4">
                                        What is a Loan Service Provider and How Does It Work?
                                    </h2>
                                    <p>
                                        A loan service provider is an expert financial consulting agency or platform that helps individuals and businesses identify, apply for, and secure the best lending products available in the market.
                                    </p>
                                    <p>
                                        Instead of visiting multiple bank branches individually, a loan service provider evaluates your financial profile, matches you with eligible lenders, negotiates competitive interest rates, and manages end-to-end documentation.
                                    </p>

                                    <h3 className="text-lg font-bold text-gray-800 pt-2">
                                        Core Benefits of Partnering with a Service Provider
                                    </h3>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>
                                            <strong>Multiple Lender Options:</strong> Gain access to a wide network of partner banks and NBFCs through a single consultation.
                                        </li>
                                        <li>
                                            <strong>Higher Approval Rates:</strong> Pre-screening your credit profile and organizing proper documentation minimizes application rejections.
                                        </li>
                                        <li>
                                            <strong>Time &amp; Effort Savings:</strong> Expert advisors handle paperwork, follow-ups, and bank queries on your behalf.
                                        </li>
                                        <li>
                                            <strong>Customized Loan Structuring:</strong> Get loan amounts, tenures, and EMIs aligned directly with your monthly cash flow.
                                        </li>
                                    </ul>

                                    <h2 className="text-xl font-bold text-gray-800 pt-4">
                                        Key Financial Services Offered by a Loan Service Provider
                                    </h2>
                                    <p>
                                        A comprehensive loan service provider offers a broad portfolio of credit solutions tailored to different life stages and commercial requirements:
                                    </p>

                                    <h3 className="text-lg font-bold text-gray-800 pt-2">
                                        1. Personal Loans
                                    </h3>
                                    <p>
                                        Unsecured{" "}
                                        <NextLink
                                            href="https://moneykingfinancial.com/services/loan/unsecured/personal"
                                            className="text-blue-600 font-semibold hover:underline"
                                        >
                                            personal loans
                                        </NextLink>{" "}
                                        provide quick liquidity without requiring collateral. Ideal for medical expenses, wedding costs, home repairs, or travel, an unsecured{" "}
                                        <NextLink
                                            href="https://moneykingfinancial.com/services/loan/unsecured/personal"
                                            className="text-blue-600 font-semibold hover:underline"
                                        >
                                            personal loan
                                        </NextLink>{" "}
                                        offers fast processing and flexible repayment schedules.
                                    </p>

                                    <h3 className="text-lg font-bold text-gray-800 pt-2">
                                        2. Business and MSME Loans
                                    </h3>
                                    <p>
                                        For entrepreneurs and small business owners, working capital is the lifeblood of growth. Loan service providers assist with machinery purchase financing, inventory funding, and tailored{" "}
                                        <NextLink
                                            href="https://moneykingfinancial.com/services/loan/unsecured/business"
                                            className="text-blue-600 font-semibold hover:underline"
                                        >
                                            business loans
                                        </NextLink>{" "}
                                        or non-collateral{" "}
                                        <NextLink
                                            href="https://moneykingfinancial.com/services/loan/unsecured/business"
                                            className="text-blue-600 font-semibold hover:underline"
                                        >
                                            unsecured business finance
                                        </NextLink>{" "}
                                        to keep operations scaling smoothly.
                                    </p>

                                    <h3 className="text-lg font-bold text-gray-800 pt-2">
                                        3. Home Loans &amp; Balance Transfers
                                    </h3>
                                    <p>
                                        Purchasing property is one of the largest financial commitments you will make. A specialized provider helps you compare low-interest{" "}
                                        <NextLink
                                            href="https://moneykingfinancial.com/services/loan/secured/home"
                                            className="text-blue-600 font-semibold hover:underline"
                                        >
                                            home loan
                                        </NextLink>{" "}
                                        offers, clear property verification checks, and execute a seamless{" "}
                                        <NextLink
                                            href="https://moneykingfinancial.com/services/loan-bt/home"
                                            className="text-blue-600 font-semibold hover:underline"
                                        >
                                            home loan balance transfer
                                        </NextLink>{" "}
                                        to lower your existing monthly EMIs.
                                    </p>

                                    <h3 className="text-lg font-bold text-gray-800 pt-2">
                                        4. Debt Consolidation Loans &amp; Credit Solutions
                                    </h3>
                                    <p>
                                        If you are managing multiple credit cards and high-cost short-term loans, a debt consolidation program merges all existing liabilities into a single, manageable monthly installment at a significantly lower interest rate. You can also explore premium credit card partnerships like{" "}
                                        <NextLink
                                            href="https://moneykingfinancial.com/services/credit/hdfc"
                                            className="text-blue-600 font-semibold hover:underline"
                                        >
                                            HDFC credit solutions
                                        </NextLink>{" "}
                                        to optimize your daily expenses and build a solid credit profile.
                                    </p>

                                    <h2 className="text-xl font-bold text-gray-800 pt-4">
                                        Direct Comparison: DIY Bank Application vs. Loan Service Provider
                                    </h2>
                                    <div className="overflow-x-auto">
                                        <table className="w-full border-collapse border border-gray-200">
                                            <thead>
                                                <tr className="bg-gray-100 text-left">
                                                    <th className="border p-2">Parameter / Feature</th>
                                                    <th className="border p-2">Direct Bank Application</th>
                                                    <th className="border p-2">Via Loan Service Provider</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="border p-2 font-bold">Lender Access</td>
                                                    <td className="border p-2">Single bank at a time</td>
                                                    <td className="border p-2 font-semibold text-green-600">
                                                        Multiple banks &amp; NBFCs simultaneously
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="border p-2 font-bold">Approval Odds</td>
                                                    <td className="border p-2">Standard (High rejection risk if documentation fails)</td>
                                                    <td className="border p-2 font-semibold text-green-600">
                                                        Maximized (Pre-screened before final submission)
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="border p-2 font-bold">Negotiation Power</td>
                                                    <td className="border p-2">Limited individual leverage</td>
                                                    <td className="border p-2 font-semibold text-green-600">
                                                        Higher institutional leverage for better ROI
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="border p-2 font-bold">Documentation Effort</td>
                                                    <td className="border p-2">Self-managed and time-consuming</td>
                                                    <td className="border p-2 font-semibold text-green-600">
                                                        Managed end-to-end by loan experts
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="border p-2 font-bold">CIBIL Score Impact</td>
                                                    <td className="border p-2">Multiple hard inquiries if applying everywhere</td>
                                                    <td className="border p-2 font-semibold text-green-600">
                                                        Soft evaluation first; targeted hard inquiry
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <h2 className="text-xl font-bold text-gray-800 pt-4">
                                        Important Factors to Consider When Choosing a Loan Service Provider
                                    </h2>
                                    <p>Before selecting a lending partner, keep these critical checkpoints in mind:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>
                                            <strong>Transparency on Charges:</strong> Ensure all processing fees, administrative costs, and foreclosure terms are clearly communicated upfront.
                                        </li>
                                        <li>
                                            <strong>Turnaround Time (TAT):</strong> Choose a provider known for quick profile processing and fast loan disbursal.
                                        </li>
                                        <li>
                                            <strong>Market Reputation &amp; Track Record:</strong> Look for positive customer reviews, client testimonials, and verified industry presence.
                                        </li>
                                        <li>
                                            <strong>Data Security &amp; Privacy:</strong> Confirm that your personal financial documents and identity proofs are handled securely.
                                        </li>
                                    </ul>

                                    <h2 className="text-xl font-bold text-gray-800 pt-4">
                                        Essential Documents Required for Loan Approval
                                    </h2>
                                    <div className="overflow-x-auto">
                                        <table className="w-full border-collapse border border-gray-200">
                                            <thead>
                                                <tr className="bg-gray-100 text-left">
                                                    <th className="border p-2">Document Type</th>
                                                    <th className="border p-2">Salaried Individuals</th>
                                                    <th className="border p-2">Self-Employed / Business Owners</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="border p-2 font-bold">Identity Proof</td>
                                                    <td className="border p-2">PAN Card / Aadhaar Card / Passport</td>
                                                    <td className="border p-2">PAN Card / Aadhaar Card / Passport</td>
                                                </tr>
                                                <tr>
                                                    <td className="border p-2 font-bold">Address Proof</td>
                                                    <td className="border p-2">Utility Bill / Rent Agreement / Voter ID</td>
                                                    <td className="border p-2">Office Registration / Electricity Bill</td>
                                                </tr>
                                                <tr>
                                                    <td className="border p-2 font-bold">Income Proof</td>
                                                    <td className="border p-2">Last 3–6 Months&apos; Salary Slips</td>
                                                    <td className="border p-2">Last 2–3 Years&apos; ITR with Computation</td>
                                                </tr>
                                                <tr>
                                                    <td className="border p-2 font-bold">Banking Records</td>
                                                    <td className="border p-2">Last 6 Months&apos; Bank Statement</td>
                                                    <td className="border p-2">Last 6–12 Months&apos; Current Account Statement</td>
                                                </tr>
                                                <tr>
                                                    <td className="border p-2 font-bold">Business Proof</td>
                                                    <td className="border p-2">Not Applicable</td>
                                                    <td className="border p-2">GST Registration / MSME Udyam Certificate</td>
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
                                                <strong>Q: Does consulting a loan service provider hurt my CIBIL score?</strong>
                                                <br />
                                                A: No. Initial discussions and profile assessments by a loan service provider involve soft checks that do not impact your credit score. A hard inquiry is only generated when an official application is submitted to a bank or NBFC.
                                            </li>
                                            <li>
                                                <strong>Q: What is the minimum CIBIL score required for fast loan approval?</strong>
                                                <br />
                                                A: A CIBIL score of 750 or higher is ideal for obtaining the lowest interest rates and instant approvals. However, service providers can also assist applicants with lower scores by finding specialized lending options.
                                            </li>
                                            <li>
                                                <strong>Q: Are loan service provider services free for borrowers?</strong>
                                                <br />
                                                A: Most professional loan service providers work as authorized channel partners for financial institutions and receive payout from lenders, offering free or minimal consultation services to borrowers.
                                            </li>
                                            <li>
                                                <strong>Q: Can self-employed individuals apply for loans without a GST registration?</strong>
                                                <br />
                                                A: Yes. Self-employed professionals and small business owners can apply for{" "}
                                                <NextLink
                                                    href="https://moneykingfinancial.com/services/loan/unsecured/business"
                                                    className="text-blue-600 hover:underline"
                                                >
                                                    business loans
                                                </NextLink>{" "}
                                                or{" "}
                                                <NextLink
                                                    href="https://moneykingfinancial.com/services/loan/unsecured/personal"
                                                    className="text-blue-600 hover:underline"
                                                >
                                                    personal loans
                                                </NextLink>{" "}
                                                based on banking turnover, income tax returns (ITR), and audit reports. Explore structured solutions on our{" "}
                                                <NextLink
                                                    href="https://moneykingfinancial.com/"
                                                    className="text-blue-600 font-bold hover:underline"
                                                >
                                                    financial portal
                                                </NextLink>{" "}
                                                to find the best borrowing path.
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
                                        Find the Right Loan with Instant Approval Today!
                                    </Typography>
                                    <Typography variant="b2" className="text-gray-300 mb-6 block">
                                        Compare interest rates across top banks, simplify your documentation, and secure the ideal credit facility with Money King Financial Services.
                                    </Typography>

                                    <NextLink
                                        href="https://moneykingfinancial.com/services"
                                        className="inline-block bg-red-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-red-700 transition"
                                    >
                                        Apply Through Loan Service Provider
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