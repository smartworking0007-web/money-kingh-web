"use client";

import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export const Blog84: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className="w-full flex justify-center">
            {!isOpen ? (
                <div
                    onClick={() => setIsOpen(true)}
                    className="cursor-pointer w-full flex justify-center px-4"
                >
                    <BlogCard1
                        title="Why a Machinery Loan Is the Smartest Funding Option for Business Growth"
                        category="BUSINESS LOAN"
                        author="Sumit Mishra"
                        date="August 19, 2026"
                        image="/images/blog/blog-84.png"
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
                                    src="/images/blog/blog-84.png"
                                    alt="machinery loan with money king"
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
                                    Why a Machinery Loan Is the Smartest Funding Option for Business Growth
                                </Typography>

                                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                                    <Clock size={16} />
                                    <Typography variant="b2">August 19, 2026</Typography>
                                </div>

                                {/* Blog Article Body */}
                                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                                    <p>
                                        A{" "}
                                        <NextLink
                                            href="https://moneykingfinancial.com/services/loan/secured/machinery"
                                            className="text-blue-600 font-semibold hover:underline"
                                        >
                                            machinery loan
                                        </NextLink>{" "}
                                        is one of the most effective funding options for manufacturing and commercial
                                        businesses because it allows companies to acquire high-value equipment without
                                        depleting their working capital. Unlike general unsecured business loans, a{" "}
                                        <NextLink
                                            href="https://moneykingfinancial.com/services/loan/secured/machinery"
                                            className="text-blue-600 font-semibold hover:underline"
                                        >
                                            machinery loan
                                        </NextLink>{" "}
                                        is purpose-tied and self-collateralized—meaning the equipment itself serves as the
                                        primary security. This reduces lender risk, resulting in lower interest rates,
                                        longer repayment tenures, tax depreciation benefits, and complete protection of
                                        daily operational cash flows.
                                    </p>

                                    <p>
                                        For any manufacturing, industrial, or service-driven enterprise, upgrading
                                        technology and expanding production capacity is essential to staying competitive.
                                        However, purchasing heavy machinery upfront with cash can severely strain a
                                        company&apos;s financial health.
                                    </p>

                                    <p>
                                        This is where asset-backed equipment financing becomes a game-changer. Instead
                                        of liquidating capital reserves or taking on high-interest personal debt,
                                        opting for a{" "}
                                        <NextLink
                                            href="https://moneykingfinancial.com/services/loan/secured/machinery"
                                            className="text-blue-600 font-semibold hover:underline"
                                        >
                                            machinery loan
                                        </NextLink>{" "}
                                        provides a structured financial runway.
                                    </p>

                                    <p>
                                        Here is a comprehensive breakdown of why securing a{" "}
                                        <NextLink
                                            href="https://moneykingfinancial.com/services/loan/secured/machinery"
                                            className="text-blue-600 font-semibold hover:underline"
                                        >
                                            machinery loan
                                        </NextLink>{" "}
                                        is considered one of the best funding solutions for growing businesses.
                                    </p>

                                    <h2 className="text-xl font-bold text-gray-800 pt-4">
                                        1. Preserves Working Capital for Daily Operations
                                    </h2>
                                    <p>
                                        The biggest risk of buying equipment outright is draining your liquid cash. Cash
                                        is required for day-to-day operational expenses like purchasing raw materials,
                                        paying salaries, managing inventory, and handling unexpected emergencies.
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>
                                            <strong>Spreads Capital Outlay:</strong> A{" "}
                                            <NextLink
                                                href="https://moneykingfinancial.com/services/loan/secured/machinery"
                                                className="text-blue-600 font-semibold hover:underline"
                                            >
                                                machinery loan
                                            </NextLink>{" "}
                                            converts a huge upfront capital expenditure into manageable, predictable
                                            monthly EMIs.
                                        </li>
                                        <li>
                                            <strong>Cash Flow Matching:</strong> Your monthly loan payments are offset
                                            directly by the revenue generated from the new machine&apos;s output, creating
                                            a self-sustaining funding cycle.
                                        </li>
                                    </ul>

                                    <h2 className="text-xl font-bold text-gray-800 pt-4">
                                        2. Built-in Security: The Equipment Acts as Collateral
                                    </h2>
                                    <p>
                                        Unlike traditional business loans that require pledging fixed assets like
                                        commercial land, residential property, or gold, machinery financing is an
                                        asset-backed loan.
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>
                                            <strong>Self-Collateralizing:</strong> In most cases, the machine being
                                            purchased serves as the primary security for the loan.
                                        </li>
                                        <li>
                                            <strong>Zero Extra Asset Risk:</strong> You don&apos;t have to lock up
                                            personal or real estate assets, making it easier for growing MSMEs and
                                            startups to qualify for a{" "}
                                            <NextLink
                                                href="https://moneykingfinancial.com/services/loan/secured/machinery"
                                                className="text-blue-600 font-semibold hover:underline"
                                            >
                                                machinery loan
                                            </NextLink>
                                            .
                                        </li>
                                    </ul>

                                    <h2 className="text-xl font-bold text-gray-800 pt-4">
                                        3. Lower Interest Rates &amp; Higher Loan-to-Value (LTV)
                                    </h2>
                                    <p>
                                        Because the lender holds a hypothecation charge over a tangible asset (the
                                        machinery), the underlying risk for the financial institution is significantly
                                        lower compared to unsecured credit.
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>
                                            <strong>Competitive Rates:</strong> Lenders offer lower interest rates on
                                            equipment finance than on standard personal or unsecured business loans.
                                        </li>
                                        <li>
                                            <strong>High LTV Ratios:</strong> Lenders often finance 70% to 90% of the
                                            machine&apos;s total invoice value, requiring minimal down payment from your
                                            end.
                                        </li>
                                    </ul>

                                    <h2 className="text-xl font-bold text-gray-800 pt-4">
                                        4. Unlocks Depreciation &amp; Tax Shields
                                    </h2>
                                    <p>
                                        Machinery financing delivers significant tax efficiency benefits under
                                        commercial tax frameworks:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>
                                            <strong>Interest Deduction:</strong> The interest component paid on your{" "}
                                            <NextLink
                                                href="https://moneykingfinancial.com/services/loan/secured/machinery"
                                                className="text-blue-600 font-semibold hover:underline"
                                            >
                                                machinery loan
                                            </NextLink>{" "}
                                            EMIs can be claimed as a tax-deductible business expense, reducing overall
                                            taxable profits.
                                        </li>
                                        <li>
                                            <strong>Depreciation Benefits:</strong> Business owners can claim annual
                                            depreciation (and in some cases, accelerated first-year depreciation) on the
                                            newly acquired asset, providing a strong tax shield.
                                        </li>
                                    </ul>

                                    <h2 className="text-xl font-bold text-gray-800 pt-4">
                                        5. Keeps Main Credit Lines Open for Crises
                                    </h2>
                                    <p>
                                        Using a general overdraft or revolving line of credit to purchase long-term
                                        machinery is a common financial mistake.
                                    </p>
                                    <p>
                                        Short-term credit lines are designed for temporary working capital gaps. Tying
                                        up your credit line with a major asset purchase leaves you vulnerable during
                                        short-term cash crunches. Applying for a dedicated{" "}
                                        <NextLink
                                            href="https://moneykingfinancial.com/services/loan/secured/machinery"
                                            className="text-blue-600 font-semibold hover:underline"
                                        >
                                            machinery loan
                                        </NextLink>{" "}
                                        keeps your short-term credit facilities free for true operational emergencies.
                                    </p>

                                    <h2 className="text-xl font-bold text-gray-800 pt-4">
                                        Comparison: Outright Cash Purchase vs. Machinery Loan Funding
                                    </h2>
                                    <div className="overflow-x-auto">
                                        <table className="w-full border-collapse border border-gray-200">
                                            <thead>
                                                <tr className="bg-gray-100 text-left">
                                                    <th className="border p-2">Feature / Parameter</th>
                                                    <th className="border p-2">Outright Cash Purchase</th>
                                                    <th className="border p-2">
                                                        <NextLink
                                                            href="https://moneykingfinancial.com/services/loan/secured/machinery"
                                                            className="text-blue-600 font-semibold hover:underline"
                                                        >
                                                            Machinery Loan
                                                        </NextLink>{" "}
                                                        Funding
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="border p-2 font-bold">Impact on Working Capital</td>
                                                    <td className="border p-2">
                                                        High risk; drains liquid cash reserves immediately
                                                    </td>
                                                    <td className="border p-2">
                                                        Minimal; spreads cost over flexible tenure
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="border p-2 font-bold">Collateral Requirement</td>
                                                    <td className="border p-2">None (paid in full)</td>
                                                    <td className="border p-2">
                                                        The machine itself acts as collateral
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="border p-2 font-bold">Tax Advantages</td>
                                                    <td className="border p-2">Asset depreciation only</td>
                                                    <td className="border p-2">
                                                        Depreciation + Loan interest tax deduction
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="border p-2 font-bold">Capacity Expansion Speed</td>
                                                    <td className="border p-2">Delayed until cash is saved</td>
                                                    <td className="border p-2">
                                                        Immediate installation and revenue generation
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="border p-2 font-bold">Emergency Risk Exposure</td>
                                                    <td className="border p-2">High (cash reserves depleted)</td>
                                                    <td className="border p-2">Low (cash reserves remain intact)</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <h2 className="text-xl font-bold text-gray-800 pt-4">
                                        Step-by-Step Flow of Machinery Loan Approval
                                    </h2>
                                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-center space-y-3 font-semibold text-gray-700 my-6">
                                        <div className="bg-white p-3 rounded-lg border shadow-sm">
                                            [ Identify Equipment &amp; Obtain Vendor Quotation ]
                                        </div>
                                        <div className="text-blue-600 font-bold">↓</div>
                                        <div className="bg-white p-3 rounded-lg border shadow-sm">
                                            [ Select Lender &amp; Apply for a{" "}
                                            <NextLink
                                                href="https://moneykingfinancial.com/services/loan/secured/machinery"
                                                className="text-blue-600 hover:underline"
                                            >
                                                Machinery Loan
                                            </NextLink>{" "}
                                            (70%–90% LTV Financing) ]
                                        </div>
                                        <div className="text-blue-600 font-bold">↓</div>
                                        <div className="bg-white p-3 rounded-lg border shadow-sm">
                                            [ Machine Acts as Primary Hypothecated Security ]
                                        </div>
                                        <div className="text-blue-600 font-bold">↓</div>
                                        <div className="bg-white p-3 rounded-lg border shadow-sm">
                                            [ Lender Disburses Loan Directly to Equipment Vendor ]
                                        </div>
                                        <div className="text-blue-600 font-bold">↓</div>
                                        <div className="bg-white p-3 rounded-lg border shadow-sm">
                                            [ Installation &amp; Revenue Generation Covers Monthly EMIs ]
                                        </div>
                                    </div>

                                    {/* FAQ Section */}
                                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                                        <h2 className="text-[#1e3a8a] text-xl font-bold mb-4 flex items-center gap-2">
                                            <HelpCircle size={20} /> Frequently Asked Questions (FAQ)
                                        </h2>
                                        <ul className="space-y-4">
                                            <li>
                                                <strong>
                                                    Q: Can startups or new businesses apply for a{" "}
                                                    <NextLink
                                                        href="https://moneykingfinancial.com/services/loan/secured/machinery"
                                                        className="text-blue-600 hover:underline"
                                                    >
                                                        machinery loan
                                                    </NextLink>
                                                    ?
                                                </strong>
                                                <br />
                                                A: Yes. While established businesses use past financial statements, startups
                                                can secure equipment financing through government-backed schemes (like
                                                CGTMSE or MUDRA) or NBFC programs that evaluate project viability, promoter
                                                profiles, and supplier quotations.
                                            </li>
                                            <li>
                                                <strong>
                                                    Q: What is the typical tenure for a{" "}
                                                    <NextLink
                                                        href="https://moneykingfinancial.com/services/loan/secured/machinery"
                                                        className="text-blue-600 hover:underline"
                                                    >
                                                        machinery loan
                                                    </NextLink>
                                                    ?
                                                </strong>
                                                <br />
                                                A: Repayment tenures generally range from 12 months to 7 years (1 to 7
                                                years). This allows you to align your loan repayment schedule with the
                                                expected productive lifespan of the equipment.
                                            </li>
                                            <li>
                                                <strong>
                                                    Q: What documents are required to apply for equipment financing?
                                                </strong>
                                                <br />
                                                A: Key documents include business registration proof, bank statements (last
                                                6–12 months), past ITRs, GST returns, and an official proforma invoice or
                                                quotation from the machinery manufacturer/vendor.
                                            </li>
                                            <li>
                                                <strong>
                                                    Q: Does the lender pay the loan amount to my bank account or the supplier?
                                                </strong>
                                                <br />
                                                A: In standard equipment financing, the lender disburses the approved{" "}
                                                <NextLink
                                                    href="https://moneykingfinancial.com/services/loan/secured/machinery"
                                                    className="text-blue-600 hover:underline"
                                                >
                                                    machinery loan
                                                </NextLink>{" "}
                                                amount directly to the machinery vendor&apos;s bank account to ensure proper
                                                usage of purpose-tied funds.
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
                                        Upgrade Your Machinery &amp; Scale Production Today!
                                    </Typography>
                                    <Typography variant="b2" className="text-gray-300 mb-6 block">
                                        Access fast-track machinery loans with high LTV, competitive interest rates,
                                        and tailored repayment plans designed to protect your cash flows.
                                    </Typography>

                                    <NextLink
                                        href="https://moneykingfinancial.com/services/loan/secured/machinery"
                                        className="inline-block bg-red-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-red-700 transition"
                                    >
                                        Apply for Machinery Loan
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