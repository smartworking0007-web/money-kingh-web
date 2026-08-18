"use client";

import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export const Blog83: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className="w-full flex justify-center">
            {!isOpen ? (
                <div
                    onClick={() => setIsOpen(true)}
                    className="cursor-pointer w-full flex justify-center px-4"
                >
                    <BlogCard1
                        title="Unit Linked Insurance Plans (ULIPs): What They Are & How They Work"
                        category="INSURANCE"
                        author="Sumit Mishra"
                        date="August 18, 2026"
                        image="/images/blog/blog-83.jpeg"
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
                                    src="/images/blog/blog-83.jpeg"
                                    alt="insurance plan in noida"
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
                                    Unit Linked Insurance Plans (ULIPs): What They Are &amp; How They Work
                                </Typography>

                                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                                    <Clock size={16} />
                                    <Typography variant="b2">August 18, 2026</Typography>
                                </div>

                                {/* Blog Article Body */}
                                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                                    <p>
                                        A Unit Linked{" "}
                                        <NextLink
                                            href="https://moneykingfinancial.com/services/insurance/general"
                                            className="text-blue-600 font-semibold hover:underline"
                                        >
                                            Insurance
                                        </NextLink>{" "}
                                        Plan (ULIP) is a hybrid financial product that combines life{" "}
                                        <NextLink
                                            href="https://moneykingfinancial.com/services/insurance/general"
                                            className="text-blue-600 font-semibold hover:underline"
                                        >
                                            insurance
                                        </NextLink>{" "}
                                        protection with market-linked investment growth under a single policy. A portion
                                        of the premium paid toward a ULIP goes toward providing a life{" "}
                                        <NextLink
                                            href="https://moneykingfinancial.com/services/insurance/general"
                                            className="text-blue-600 font-semibold hover:underline"
                                        >
                                            insurance
                                        </NextLink>{" "}
                                        cover (sum assured), while the remaining amount is invested in market-linked
                                        equity, debt, or hybrid funds based on the policyholder&apos;s risk tolerance.
                                        ULIPs come with a mandatory 5-year lock-in period and offer flexible fund
                                        switching options.
                                    </p>

                                    <p>
                                        When planning long-term financial goals, investors often struggle to balance
                                        two competing priorities: securing their family&apos;s financial future and
                                        growing their wealth against inflation. If you are exploring an{" "}
                                        <NextLink
                                            href="https://moneykingfinancial.com/services/insurance/general"
                                            className="text-blue-600 font-semibold hover:underline"
                                        >
                                            insurance plan in Noida
                                        </NextLink>{" "}
                                        or across urban centers, navigating the differences between pure protection and
                                        wealth-building solutions is critical.
                                    </p>

                                    <p>
                                        Traditionally, this meant purchasing a separate life{" "}
                                        <NextLink
                                            href="https://moneykingfinancial.com/services/insurance/general"
                                            className="text-blue-600 font-semibold hover:underline"
                                        >
                                            insurance
                                        </NextLink>{" "}
                                        policy and opening an independent investment account. However, Unit Linked{" "}
                                        <NextLink
                                            href="https://moneykingfinancial.com/services/insurance/general"
                                            className="text-blue-600 font-semibold hover:underline"
                                        >
                                            Insurance
                                        </NextLink>{" "}
                                        Plans (ULIPs) offer an integrated solution by merging financial protection with
                                        wealth generation in a single plan.
                                    </p>

                                    <p>
                                        In this guide, we break down how ULIPs work, their core benefits, fund types,
                                        and how they compare with other popular investment avenues like Mutual Funds.
                                    </p>

                                    <h2 className="text-xl font-bold text-gray-800 pt-4">
                                        How Does a ULIP Work?
                                    </h2>
                                    <p>
                                        When you invest in a ULIP, your premium is split into two distinct parts:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>
                                            <strong>Life Cover Portion:</strong> A small part of the premium pays for the
                                            mortality charge, securing a guaranteed life{" "}
                                            <NextLink
                                                href="https://moneykingfinancial.com/services/insurance/general"
                                                className="text-blue-600 font-semibold hover:underline"
                                            >
                                                insurance
                                            </NextLink>{" "}
                                            payout (Sum Assured) for your family in case of an unforeseen event.
                                        </li>
                                        <li>
                                            <strong>Investment Portion:</strong> The remaining major portion of your
                                            premium is invested in financial markets through funds of your choice (Equity,
                                            Debt, or Balanced funds).
                                        </li>
                                    </ul>
                                    <p>
                                        The{" "}
                                        <NextLink
                                            href="https://moneykingfinancial.com/services/insurance/general"
                                            className="text-blue-600 font-semibold hover:underline"
                                        >
                                            insurance
                                        </NextLink>{" "}
                                        company allocates units of the selected fund to your portfolio based on its
                                        prevailing Net Asset Value (NAV). As the market value of the underlying assets
                                        fluctuates, your portfolio value changes accordingly.
                                    </p>

                                    <h2 className="text-xl font-bold text-gray-800 pt-4">
                                        Key Benefits of Investing in ULIPs
                                    </h2>
                                    <p>
                                        ULIPs offer a unique set of advantages designed for long-term financial planning:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>
                                            <strong>Dual Benefit in One Product:</strong> You gain financial protection
                                            through life{" "}
                                            <NextLink
                                                href="https://moneykingfinancial.com/services/insurance/general"
                                                className="text-blue-600 font-semibold hover:underline"
                                            >
                                                insurance
                                            </NextLink>{" "}
                                            while simultaneously participating in market growth.
                                        </li>
                                        <li>
                                            <strong>Flexible Asset Allocation:</strong> Depending on market trends and
                                            your risk appetite, ULIPs allow you to switch your money between high-growth
                                            Equity Funds, safe Debt Funds, or moderate Balanced Funds. Most insurers
                                            provide a set number of free fund switches every year.
                                        </li>
                                        <li>
                                            <strong>Tax Advantages:</strong> Premiums paid qualify for tax deduction under
                                            Section 80C (up to ₹1.5 Lakhs annually in India). Additionally, maturity
                                            proceeds are tax-free under Section 10(10D), subject to prevailing government
                                            guidelines and premium caps.
                                        </li>
                                        <li>
                                            <strong>Disciplined Long-Term Growth:</strong> ULIPs feature a mandatory
                                            5-year lock-in period, which discourages premature withdrawals and helps
                                            compound wealth over the long term.
                                        </li>
                                    </ul>

                                    <h2 className="text-xl font-bold text-gray-800 pt-4">
                                        Types of Funds Available in ULIPs
                                    </h2>
                                    <p>
                                        Investors can customize their portfolio allocation across three main fund
                                        categories:
                                    </p>

                                    {/* Fund Structure Visual */}
                                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-center font-semibold text-gray-700 my-6">
                                        <div className="bg-white p-3 rounded-lg border shadow-sm max-w-sm mx-auto">
                                            [ ULIP Investment Premium ]
                                        </div>
                                        <div className="text-blue-600 font-bold my-2">│</div>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2 text-left">
                                            <div className="bg-white p-4 rounded-lg border shadow-sm space-y-1">
                                                <p className="font-bold text-blue-900">[ Equity Funds ]</p>
                                                <p className="text-sm text-gray-600">• High Growth Potential</p>
                                                <p className="text-sm text-gray-600">• High Market Risk</p>
                                                <p className="text-sm text-gray-600">• Best for Young Adults</p>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg border shadow-sm space-y-1">
                                                <p className="font-bold text-blue-900">[ Debt Funds ]</p>
                                                <p className="text-sm text-gray-600">• Capital Preservation</p>
                                                <p className="text-sm text-gray-600">• Low Risk Exposure</p>
                                                <p className="text-sm text-gray-600">• Best for Conservative Investors</p>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg border shadow-sm space-y-1">
                                                <p className="font-bold text-blue-900">[ Balanced Funds ]</p>
                                                <p className="text-sm text-gray-600">• Moderate Risk &amp; Return</p>
                                                <p className="text-sm text-gray-600">• Equity + Fixed Income Split</p>
                                                <p className="text-sm text-gray-600">• Best for Balanced Growth</p>
                                            </div>
                                        </div>
                                    </div>

                                    <h2 className="text-xl font-bold text-gray-800 pt-4">
                                        Key Comparison: ULIPs vs. Mutual Funds
                                    </h2>
                                    <div className="overflow-x-auto">
                                        <table className="w-full border-collapse border border-gray-200">
                                            <thead>
                                                <tr className="bg-gray-100 text-left">
                                                    <th className="border p-2">Feature / Parameter</th>
                                                    <th className="border p-2">
                                                        Unit Linked{" "}
                                                        <NextLink
                                                            href="https://moneykingfinancial.com/services/insurance/general"
                                                            className="text-blue-600 font-semibold hover:underline"
                                                        >
                                                            Insurance
                                                        </NextLink>{" "}
                                                        Plan (ULIP)
                                                    </th>
                                                    <th className="border p-2">Mutual Funds (SIP / Lumpsum)</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="border p-2 font-bold">Product Category</td>
                                                    <td className="border p-2">
                                                        <NextLink
                                                            href="https://moneykingfinancial.com/services/insurance/general"
                                                            className="text-blue-600 font-semibold hover:underline"
                                                        >
                                                            Insurance
                                                        </NextLink>{" "}
                                                        + Investment Hybrid
                                                    </td>
                                                    <td className="border p-2">Pure Investment Vehicle</td>
                                                </tr>
                                                <tr>
                                                    <td className="border p-2 font-bold">Life Cover Included</td>
                                                    <td className="border p-2">Yes (Guaranteed Sum Assured)</td>
                                                    <td className="border p-2">
                                                        No (Must buy separate Term{" "}
                                                        <NextLink
                                                            href="https://moneykingfinancial.com/services/insurance/general"
                                                            className="text-blue-600 font-semibold hover:underline"
                                                        >
                                                            Insurance
                                                        </NextLink>
                                                        )
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="border p-2 font-bold">Lock-in Period</td>
                                                    <td className="border p-2">5 Years</td>
                                                    <td className="border p-2">
                                                        None (except 3 years for ELSS Tax Saving Funds)
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="border p-2 font-bold">Fund Switching</td>
                                                    <td className="border p-2">
                                                        Tax-free switches between equity &amp; debt funds
                                                    </td>
                                                    <td className="border p-2">Switching incurs capital gains tax</td>
                                                </tr>
                                                <tr>
                                                    <td className="border p-2 font-bold">Tax Benefits</td>
                                                    <td className="border p-2">
                                                        Deductions under Sec 80C &amp; Sec 10(10D)
                                                    </td>
                                                    <td className="border p-2">Tax benefits applicable only on ELSS category</td>
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
                                                    Q: What happens if I surrender my ULIP policy before 5 years?
                                                </strong>
                                                <br />
                                                A: If you surrender your ULIP before completing the 5-year lock-in period,
                                                the fund value (minus surrender charges) is moved to a Discontinued Policy
                                                Fund. The payout is disbursed only after the completion of the 5-year lock-in
                                                tenure, and life cover ceases upon surrender.
                                            </li>
                                            <li>
                                                <strong>Q: What charges are associated with ULIPs?</strong>
                                                <br />
                                                A: ULIP charges typically include Premium Allocation Charges, Mortality
                                                Charges (for life{" "}
                                                <NextLink
                                                    href="https://moneykingfinancial.com/services/insurance/general"
                                                    className="text-blue-600 hover:underline"
                                                >
                                                    insurance
                                                </NextLink>{" "}
                                                cover), Fund Management Charges (FMC), and Policy Administration Charges.
                                                Modern digital-first ULIPs have significantly reduced or eliminated upfront
                                                allocation and administration fees.
                                            </li>
                                            <li>
                                                <strong>Q: Are ULIPs suitable for short-term goals?</strong>
                                                <br />
                                                A: No. ULIPs are engineered for long-term wealth creation (10 to 15+ years),
                                                such as planning for a child&apos;s higher education, purchasing a home, or
                                                building a retirement fund. The lock-in period and compounding structure
                                                deliver maximum benefits over extended horizons. Explore our comprehensive{" "}
                                                <NextLink
                                                    href="https://moneykingfinancial.com/services/insurance/general"
                                                    className="text-blue-600 font-bold hover:underline"
                                                >
                                                    general insurance and life advisory services
                                                </NextLink>{" "}
                                                to select the ideal policy for your family.
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
                                        Protect Your Family &amp; Build Wealth Together!
                                    </Typography>
                                    <Typography variant="b2" className="text-gray-300 mb-6 block">
                                        Compare customized life protection, ULIPs, and general{" "}
                                        <NextLink
                                            href="https://moneykingfinancial.com/services/insurance/general"
                                            className="text-blue-400 hover:underline"
                                        >
                                            insurance
                                        </NextLink>{" "}
                                        plans tailored to secure your long-term goals in Noida and across India.
                                    </Typography>

                                    <NextLink
                                        href="https://moneykingfinancial.com/services/insurance/general"
                                        className="inline-block bg-red-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-red-700 transition"
                                    >
                                        Explore Insurance Plans
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