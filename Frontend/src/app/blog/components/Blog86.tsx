"use client";

import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export const Blog86: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className="w-full flex justify-center">
            {!isOpen ? (
                <div
                    onClick={() => setIsOpen(true)}
                    className="cursor-pointer w-full flex justify-center px-4"
                >
                    <BlogCard1
                        title="SIP vs Lumpsum Investment: Which Mutual Fund Strategy Is Best in 2026?"
                        category="MUTUAL FUNDS"
                        author="Sumit Mishra"
                        date="August 22, 2026"
                        image="/images/blog/blog-86.jpeg"
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
                                    src="/images/blog/blog-86.jpeg"
                                    alt="SIP vs lumpsum mutual fund investment"
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
                                        href="https://moneykingfinancial.com/services/mutual-fund/sip"
                                        className="text-[#1e3a8a] hover:underline"
                                    >
                                        SIP
                                    </NextLink>{" "}
                                    vs{" "}
                                    <NextLink
                                        href="https://moneykingfinancial.com/services/mutual-fund/lumpsum"
                                        className="text-[#1e3a8a] hover:underline"
                                    >
                                        Lumpsum
                                    </NextLink>{" "}
                                    Investment: Which Mutual Fund Strategy Is Best in 2026?
                                </Typography>

                                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                                    <Clock size={16} />
                                    <Typography variant="b2">August 22, 2026</Typography>
                                </div>

                                {/* Blog Article Body */}
                                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                                    <p>
                                        When entering the world of mutual funds, one of the most fundamental choices
                                        every investor faces is whether to invest via a{" "}
                                        <NextLink
                                            href="https://moneykingfinancial.com/services/mutual-fund/sip"
                                            className="text-blue-600 font-semibold hover:underline"
                                        >
                                            SIP
                                        </NextLink>{" "}
                                        (Systematic Investment Plan) or make a one-time{" "}
                                        <NextLink
                                            href="https://moneykingfinancial.com/services/mutual-fund/lumpsum"
                                            className="text-blue-600 font-semibold hover:underline"
                                        >
                                            lumpsum
                                        </NextLink>{" "}
                                        investment. Both approaches have distinct advantages depending on your cash
                                        flow, risk tolerance, and prevailing market conditions.
                                    </p>

                                    <p>
                                        A{" "}
                                        <NextLink
                                            href="https://moneykingfinancial.com/services/mutual-fund/sip"
                                            className="text-blue-600 font-semibold hover:underline"
                                        >
                                            SIP
                                        </NextLink>{" "}
                                        allows you to invest fixed amounts periodically (monthly or quarterly),
                                        averaging out market highs and lows. Conversely, a{" "}
                                        <NextLink
                                            href="https://moneykingfinancial.com/services/mutual-fund/lumpsum"
                                            className="text-blue-600 font-semibold hover:underline"
                                        >
                                            lumpsum
                                        </NextLink>{" "}
                                        allocation deploys a large sum into the market at once, allowing maximum capital
                                        exposure to compound over long horizons.
                                    </p>

                                    <h2 className="text-xl font-bold text-gray-800 pt-4">
                                        1. Understanding Systematic Investment Plans (SIP)
                                    </h2>
                                    <p>
                                        A{" "}
                                        <NextLink
                                            href="https://moneykingfinancial.com/services/mutual-fund/sip"
                                            className="text-blue-600 font-semibold hover:underline"
                                        >
                                            SIP
                                        </NextLink>{" "}
                                        is ideal for salaried professionals and retail investors who earn regular monthly
                                        income and want to build wealth with discipline.
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>
                                            <strong>Rupee Cost Averaging:</strong> When markets are down, your fixed{" "}
                                            <NextLink
                                                href="https://moneykingfinancial.com/services/mutual-fund/sip"
                                                className="text-blue-600 font-semibold hover:underline"
                                            >
                                                SIP
                                            </NextLink>{" "}
                                            installment purchases more mutual fund units; when markets are up, it buys
                                            fewer units. Over time, this smooths out purchase costs.
                                        </li>
                                        <li>
                                            <strong>Removes Emotional Timing:</strong> With a{" "}
                                            <NextLink
                                                href="https://moneykingfinancial.com/services/mutual-fund/sip"
                                                className="text-blue-600 font-semibold hover:underline"
                                            >
                                                SIP
                                            </NextLink>
                                            , you don&apos;t have to guess market bottoms or peaks. Investing happens
                                            automatically every month regardless of market volatility.
                                        </li>
                                        <li>
                                            <strong>Flexible &amp; Accessible:</strong> You can start a{" "}
                                            <NextLink
                                                href="https://moneykingfinancial.com/services/mutual-fund/sip"
                                                className="text-blue-600 font-semibold hover:underline"
                                            >
                                                SIP
                                            </NextLink>{" "}
                                            with as little as ₹500 per month and step up your investment as your salary
                                            grows.
                                        </li>
                                    </ul>

                                    <h2 className="text-xl font-bold text-gray-800 pt-4">
                                        2. Understanding Lumpsum Investments
                                    </h2>
                                    <p>
                                        A{" "}
                                        <NextLink
                                            href="https://moneykingfinancial.com/services/mutual-fund/lumpsum"
                                            className="text-blue-600 font-semibold hover:underline"
                                        >
                                            lumpsum
                                        </NextLink>{" "}
                                        mutual fund strategy involves depositing a substantial amount of capital in a
                                        single transaction. This method is often preferred when receiving annual
                                        bonuses, business profits, inheritance, or asset liquidation proceeds.
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>
                                            <strong>Higher Compounding Potential:</strong> When markets are on an upward
                                            trajectory, putting a{" "}
                                            <NextLink
                                                href="https://moneykingfinancial.com/services/mutual-fund/lumpsum"
                                                className="text-blue-600 font-semibold hover:underline"
                                            >
                                                lumpsum
                                            </NextLink>{" "}
                                            amount to work immediately gives 100% of your capital maximum time to compound.
                                        </li>
                                        <li>
                                            <strong>Best During Market Corrections:</strong> Deploying a{" "}
                                            <NextLink
                                                href="https://moneykingfinancial.com/services/mutual-fund/lumpsum"
                                                className="text-blue-600 font-semibold hover:underline"
                                            >
                                                lumpsum
                                            </NextLink>{" "}
                                            corpus during broader market dips or corrections lets you acquire premium
                                            equity units at discounted valuations.
                                        </li>
                                        <li>
                                            <strong>STP Alternative:</strong> If you hold a{" "}
                                            <NextLink
                                                href="https://moneykingfinancial.com/services/mutual-fund/lumpsum"
                                                className="text-blue-600 font-semibold hover:underline"
                                            >
                                                lumpsum
                                            </NextLink>{" "}
                                            corpus but worry about market volatility, you can park the funds in a liquid
                                            debt fund and run a Systematic Transfer Plan (STP) into equity funds.
                                        </li>
                                    </ul>

                                    <h2 className="text-xl font-bold text-gray-800 pt-4">
                                        Key Comparison: SIP vs. Lumpsum Investment
                                    </h2>
                                    <div className="overflow-x-auto">
                                        <table className="w-full border-collapse border border-gray-200">
                                            <thead>
                                                <tr className="bg-gray-100 text-left">
                                                    <th className="border p-2">Parameter</th>
                                                    <th className="border p-2">
                                                        <NextLink
                                                            href="https://moneykingfinancial.com/services/mutual-fund/sip"
                                                            className="text-blue-600 font-semibold hover:underline"
                                                        >
                                                            SIP Investment
                                                        </NextLink>
                                                    </th>
                                                    <th className="border p-2">
                                                        <NextLink
                                                            href="https://moneykingfinancial.com/services/mutual-fund/lumpsum"
                                                            className="text-blue-600 font-semibold hover:underline"
                                                        >
                                                            Lumpsum Investment
                                                        </NextLink>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="border p-2 font-bold">Investment Mode</td>
                                                    <td className="border p-2">Periodic installments (Monthly/Quarterly)</td>
                                                    <td className="border p-2">One-time upfront capital payment</td>
                                                </tr>
                                                <tr>
                                                    <td className="border p-2 font-bold">Market Timing Risk</td>
                                                    <td className="border p-2">Low (Eliminated by Rupee Cost Averaging)</td>
                                                    <td className="border p-2">High (Dependent on entry valuation)</td>
                                                </tr>
                                                <tr>
                                                    <td className="border p-2 font-bold">Ideal Investor Profile</td>
                                                    <td className="border p-2">Salaried professionals, regular earners</td>
                                                    <td className="border p-2">Investors with idle windfall cash or bonuses</td>
                                                </tr>
                                                <tr>
                                                    <td className="border p-2 font-bold">Minimum Entry Amount</td>
                                                    <td className="border p-2">Starts from ₹500 to ₹1,000</td>
                                                    <td className="border p-2">Usually ₹5,000 and above</td>
                                                </tr>
                                                <tr>
                                                    <td className="border p-2 font-bold">Market Volatility Impact</td>
                                                    <td className="border p-2">Benefits from volatility and market dips</td>
                                                    <td className="border p-2">Short-term corrections can impact returns</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <h2 className="text-xl font-bold text-gray-800 pt-4">
                                        Which Strategy Should You Choose?
                                    </h2>
                                    <p>
                                        Your decision between a{" "}
                                        <NextLink
                                            href="https://moneykingfinancial.com/services/mutual-fund/sip"
                                            className="text-blue-600 font-semibold hover:underline"
                                        >
                                            SIP
                                        </NextLink>{" "}
                                        and a{" "}
                                        <NextLink
                                            href="https://moneykingfinancial.com/services/mutual-fund/lumpsum"
                                            className="text-blue-600 font-semibold hover:underline"
                                        >
                                            lumpsum
                                        </NextLink>{" "}
                                        should depend directly on how you earn and manage liquidity:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>
                                            Choose a{" "}
                                            <NextLink
                                                href="https://moneykingfinancial.com/services/mutual-fund/sip"
                                                className="text-blue-600 font-semibold hover:underline"
                                            >
                                                SIP
                                            </NextLink>{" "}
                                            if you want to automate your monthly savings, avoid the stress of timing the
                                            stock market, and build long-term wealth steadily over 5 to 15 years.
                                        </li>
                                        <li>
                                            Choose a{" "}
                                            <NextLink
                                                href="https://moneykingfinancial.com/services/mutual-fund/lumpsum"
                                                className="text-blue-600 font-semibold hover:underline"
                                            >
                                                lumpsum
                                            </NextLink>{" "}
                                            if you have idle cash reserves ready for deployment and are prepared to stay
                                            invested across full market cycles.
                                        </li>
                                    </ul>

                                    {/* FAQ Section */}
                                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                                        <h2 className="text-[#1e3a8a] text-xl font-bold mb-4 flex items-center gap-2">
                                            <HelpCircle size={20} /> Frequently Asked Questions (FAQ)
                                        </h2>
                                        <ul className="space-y-4">
                                            <li>
                                                <strong>
                                                    Q: Can I do both a{" "}
                                                    <NextLink
                                                        href="https://moneykingfinancial.com/services/mutual-fund/sip"
                                                        className="text-blue-600 hover:underline"
                                                    >
                                                        SIP
                                                    </NextLink>{" "}
                                                    and a{" "}
                                                    <NextLink
                                                        href="https://moneykingfinancial.com/services/mutual-fund/lumpsum"
                                                        className="text-blue-600 hover:underline"
                                                    >
                                                        lumpsum
                                                    </NextLink>{" "}
                                                    in the same mutual fund scheme?
                                                </strong>
                                                <br />
                                                A: Yes! You can run an ongoing monthly{" "}
                                                <NextLink
                                                    href="https://moneykingfinancial.com/services/mutual-fund/sip"
                                                    className="text-blue-600 hover:underline"
                                                >
                                                    SIP
                                                </NextLink>{" "}
                                                and simultaneously make ad-hoc{" "}
                                                <NextLink
                                                    href="https://moneykingfinancial.com/services/mutual-fund/lumpsum"
                                                    className="text-blue-600 hover:underline"
                                                >
                                                    lumpsum
                                                </NextLink>{" "}
                                                investments in the same folio whenever you have surplus funds or when the
                                                market experiences a correction.
                                            </li>
                                            <li>
                                                <strong>
                                                    Q: Is a{" "}
                                                    <NextLink
                                                        href="https://moneykingfinancial.com/services/mutual-fund/sip"
                                                        className="text-blue-600 hover:underline"
                                                    >
                                                        SIP
                                                    </NextLink>{" "}
                                                    always safer than a{" "}
                                                    <NextLink
                                                        href="https://moneykingfinancial.com/services/mutual-fund/lumpsum"
                                                        className="text-blue-600 hover:underline"
                                                    >
                                                        lumpsum
                                                    </NextLink>
                                                    ?
                                                </strong>
                                                <br />
                                                A: A{" "}
                                                <NextLink
                                                    href="https://moneykingfinancial.com/services/mutual-fund/sip"
                                                    className="text-blue-600 hover:underline"
                                                >
                                                    SIP
                                                </NextLink>{" "}
                                                minimizes volatility and timing risks due to rupee cost averaging, making it
                                                psychologically and financially safer for most retail investors. However, over
                                                long 10+ year bull market periods, an early{" "}
                                                <NextLink
                                                    href="https://moneykingfinancial.com/services/mutual-fund/lumpsum"
                                                    className="text-blue-600 hover:underline"
                                                >
                                                    lumpsum
                                                </NextLink>{" "}
                                                can generate higher absolute returns.
                                            </li>
                                            <li>
                                                <strong>
                                                    Q: How do I calculate returns for my{" "}
                                                    <NextLink
                                                        href="https://moneykingfinancial.com/services/mutual-fund/sip"
                                                        className="text-blue-600 hover:underline"
                                                    >
                                                        SIP
                                                    </NextLink>{" "}
                                                    or{" "}
                                                    <NextLink
                                                        href="https://moneykingfinancial.com/services/mutual-fund/lumpsum"
                                                        className="text-blue-600 hover:underline"
                                                    >
                                                        lumpsum
                                                    </NextLink>{" "}
                                                    portfolio?
                                                </strong>
                                                <br />
                                                A: You can use our dedicated financial tools to project your wealth creation
                                                milestones and choose the optimal fund allocation for your goals.
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
                                        Start Your Mutual Fund Journey Today!
                                    </Typography>
                                    <Typography variant="b2" className="text-gray-300 mb-6 block">
                                        Whether you want to build wealth through a disciplined monthly{" "}
                                        <NextLink
                                            href="https://moneykingfinancial.com/services/mutual-fund/sip"
                                            className="text-blue-400 hover:underline"
                                        >
                                            SIP
                                        </NextLink>{" "}
                                        or invest a one-time{" "}
                                        <NextLink
                                            href="https://moneykingfinancial.com/services/mutual-fund/lumpsum"
                                            className="text-blue-400 hover:underline"
                                        >
                                            lumpsum
                                        </NextLink>
                                        , discover top-rated funds curated for maximum long-term growth.
                                    </Typography>

                                    <div className="flex flex-wrap gap-4">
                                        <NextLink
                                            href="https://moneykingfinancial.com/services/mutual-fund/sip"
                                            className="inline-block bg-red-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-red-700 transition"
                                        >
                                            Start SIP Plan
                                        </NextLink>
                                        <NextLink
                                            href="https://moneykingfinancial.com/services/mutual-fund/lumpsum"
                                            className="inline-block bg-blue-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-700 transition"
                                        >
                                            Invest Lumpsum
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