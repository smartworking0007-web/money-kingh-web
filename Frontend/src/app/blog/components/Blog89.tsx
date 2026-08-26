"use client";

import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export const Blog89: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className="w-full flex justify-center">
            {!isOpen ? (
                <div
                    onClick={() => setIsOpen(true)}
                    className="cursor-pointer w-full flex justify-center px-4"
                >
                    <BlogCard1
                        title="SIP vs. Fixed Deposit (FD): Which Investment Strategy Is Better in 2026?"
                        category="MUTUAL FUNDS"
                        author="Sumit Mishra"
                        date="August 26, 2026"
                        image="/images/blog/blog-89.jpg"
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
                                    src="/images/blog/blog-89.jpg"
                                    alt="sip vs fd"
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
                                    vs. Fixed Deposit (FD): Which Investment Strategy Is Better in 2026?
                                </Typography>

                                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                                    <Clock size={16} />
                                    <Typography variant="b2">August 26, 2026</Typography>
                                </div>

                                {/* Blog Article Body */}
                                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                                    <p>
                                        Choosing between a{" "}
                                        <NextLink
                                            href="https://moneykingfinancial.com/services/mutual-fund/sip"
                                            className="text-blue-600 font-semibold hover:underline"
                                        >
                                            SIP
                                        </NextLink>{" "}
                                        (Systematic Investment Plan) and a Fixed Deposit (FD) depends on your financial
                                        goals and risk tolerance. A Fixed Deposit offers guaranteed, risk-free returns,
                                        making it ideal for capital preservation and short-term safety. On the other
                                        hand, an equity{" "}
                                        <NextLink
                                            href="https://moneykingfinancial.com/services/mutual-fund/sip"
                                            className="text-blue-600 font-semibold hover:underline"
                                        >
                                            SIP
                                        </NextLink>{" "}
                                        provides market-linked growth designed to beat inflation and compound wealth
                                        over long horizons (5+ years), making it the superior choice for long-term
                                        financial independence.
                                    </p>

                                    <p>
                                        When it comes to building a disciplined savings habit, traditional bank Fixed
                                        Deposits (FDs) and mutual fund Systematic Investment Plans (SIPs) are two of the
                                        most popular choices.
                                    </p>

                                    <p>
                                        However, with inflation continuously eroding the real purchasing power of cash,
                                        relying solely on guaranteed returns may not be enough to reach your long-term
                                        goals like buying a home, funding higher education, or building a retirement
                                        pool.
                                    </p>

                                    <p>
                                        In this guide, we break down the core differences between{" "}
                                        <NextLink
                                            href="https://moneykingfinancial.com/services/mutual-fund/sip"
                                            className="text-blue-600 font-semibold hover:underline"
                                        >
                                            SIPs
                                        </NextLink>{" "}
                                        and FDs across returns, risks, tax efficiency, and liquidity to help you
                                        construct a balanced portfolio.
                                    </p>

                                    <h2 className="text-xl font-bold text-gray-800 pt-4">
                                        1. Fixed Deposits (FD): Capital Protection with Fixed Returns
                                    </h2>
                                    <p>
                                        A Fixed Deposit is a low-risk financial instrument offered by banks and
                                        non-banking financial companies (NBFCs) where you deposit a lump sum for a fixed
                                        tenure at a predetermined interest rate.
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>
                                            <strong>Guaranteed Security:</strong> FDs are not tied to market movements,
                                            ensuring complete safety of your principal amount.
                                        </li>
                                        <li>
                                            <strong>Predictable Income:</strong> You know exact return figures from the
                                            start of the tenure.
                                        </li>
                                        <li>
                                            <strong>The Inflation Challenge:</strong> FD interest rates often closely align
                                            with or lag behind the actual rate of inflation, resulting in minimal real wealth
                                            growth after tax deductions.
                                        </li>
                                    </ul>

                                    <h2 className="text-xl font-bold text-gray-800 pt-4">
                                        2. Systematic Investment Plans (SIP): Inflation-Beating Wealth Creation
                                    </h2>
                                    <p>
                                        A{" "}
                                        <NextLink
                                            href="https://moneykingfinancial.com/services/mutual-fund/sip"
                                            className="text-blue-600 font-semibold hover:underline"
                                        >
                                            SIP
                                        </NextLink>{" "}
                                        allows you to invest fixed amounts periodically (monthly or quarterly) into
                                        mutual funds, leveraging the power of equity markets without timing the market.
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>
                                            <strong>Market-Linked Growth:</strong> Historically, equity mutual funds
                                            deliver average returns of 12% to 15% over long timeframes, comfortably
                                            beating inflation.
                                        </li>
                                        <li>
                                            <strong>Rupee Cost Averaging:</strong> Monthly{" "}
                                            <NextLink
                                                href="https://moneykingfinancial.com/services/mutual-fund/sip"
                                                className="text-blue-600 font-semibold hover:underline"
                                            >
                                                SIP
                                            </NextLink>{" "}
                                            purchases automatically acquire more units during market dips, lowering average
                                            acquisition cost over time.
                                        </li>
                                        <li>
                                            <strong>Flexibility:</strong> Investors can pause, increase (step-up), or stop{" "}
                                            <NextLink
                                                href="https://moneykingfinancial.com/services/mutual-fund/sip"
                                                className="text-blue-600 font-semibold hover:underline"
                                            >
                                                SIP
                                            </NextLink>{" "}
                                            contributions anytime without harsh penalties.
                                        </li>
                                    </ul>

                                    <h2 className="text-xl font-bold text-gray-800 pt-4">
                                        Direct Comparison: SIP vs. Fixed Deposit
                                    </h2>
                                    <div className="overflow-x-auto">
                                        <table className="w-full border-collapse border border-gray-200">
                                            <thead>
                                                <tr className="bg-gray-100 text-left">
                                                    <th className="border p-2">Feature / Parameter</th>
                                                    <th className="border p-2">Fixed Deposit (FD)</th>
                                                    <th className="border p-2">
                                                        <NextLink
                                                            href="https://moneykingfinancial.com/services/mutual-fund/sip"
                                                            className="text-blue-600 font-semibold hover:underline"
                                                        >
                                                            SIP (Equity Mutual Funds)
                                                        </NextLink>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="border p-2 font-bold">Return Potential</td>
                                                    <td className="border p-2">Fixed &amp; Guaranteed (6.5%–7.5% p.a.)</td>
                                                    <td className="border p-2 font-semibold text-green-600">
                                                        Variable &amp; Market-Linked (12%–15% historical avg.)
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="border p-2 font-bold">Risk Exposure</td>
                                                    <td className="border p-2 font-semibold text-green-600">
                                                        Extremely Low (Capital Safety)
                                                    </td>
                                                    <td className="border p-2">
                                                        Moderate to High (Short-term market volatility)
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="border p-2 font-bold">Inflation Protection</td>
                                                    <td className="border p-2">Low (Struggles to outpace inflation)</td>
                                                    <td className="border p-2 font-semibold text-green-600">
                                                        High (Effective inflation-beating growth)
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="border p-2 font-bold">Tax Treatment</td>
                                                    <td className="border p-2">Taxed as per income tax slab rate</td>
                                                    <td className="border p-2">
                                                        Taxed at LTCG/STCG rates (often more tax-efficient)
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="border p-2 font-bold">Investment Mode</td>
                                                    <td className="border p-2">
                                                        Mostly{" "}
                                                        <NextLink
                                                            href="https://moneykingfinancial.com/services/mutual-fund/lumpsum"
                                                            className="text-blue-600 hover:underline"
                                                        >
                                                            Lumpsum
                                                        </NextLink>
                                                    </td>
                                                    <td className="border p-2">Staggered Periodic Installments</td>
                                                </tr>
                                                <tr>
                                                    <td className="border p-2 font-bold">Ideal Horizon</td>
                                                    <td className="border p-2">Short to Medium Term (1 to 3 Years)</td>
                                                    <td className="border p-2">Long Term (5 to 10+ Years)</td>
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
                                                    Q: Can I lose money in a{" "}
                                                    <NextLink
                                                        href="https://moneykingfinancial.com/services/mutual-fund/sip"
                                                        className="text-blue-600 hover:underline"
                                                    >
                                                        SIP
                                                    </NextLink>
                                                    ?
                                                </strong>
                                                <br />
                                                A: In the short term, market fluctuations can lead to negative or lower
                                                returns. However, holding equity mutual fund{" "}
                                                <NextLink
                                                    href="https://moneykingfinancial.com/services/mutual-fund/sip"
                                                    className="text-blue-600 hover:underline"
                                                >
                                                    SIPs
                                                </NextLink>{" "}
                                                over a long horizon (5 to 7+ years) significantly reduces the probability of
                                                negative returns while maximizing compounding.
                                            </li>
                                            <li>
                                                <strong>Q: Is FD interest fully taxable?</strong>
                                                <br />
                                                A: Yes, interest earned from a fixed deposit is added to your total income
                                                and taxed according to your applicable income tax slab rate. Additionally,
                                                banks deduct TDS if the interest earned exceeds annual threshold limits.
                                            </li>
                                            <li>
                                                <strong>
                                                    Q: Can I combine both{" "}
                                                    <NextLink
                                                        href="https://moneykingfinancial.com/services/mutual-fund/sip"
                                                        className="text-blue-600 hover:underline"
                                                    >
                                                        SIP
                                                    </NextLink>{" "}
                                                    and FD in my portfolio?
                                                </strong>
                                                <br />
                                                A: Yes! A healthy asset allocation strategy combines both instruments: keep
                                                your short-term emergency funds in FDs or liquid funds for instant safety,
                                                while routing your long-term monthly savings into equity{" "}
                                                <NextLink
                                                    href="https://moneykingfinancial.com/services/mutual-fund/sip"
                                                    className="text-blue-600 hover:underline"
                                                >
                                                    SIPs
                                                </NextLink>{" "}
                                                for wealth expansion. Check your complete financial profile on our{" "}
                                                <NextLink
                                                    href="https://moneykingfinancial.com/"
                                                    className="text-blue-600 font-bold hover:underline"
                                                >
                                                    financial portal
                                                </NextLink>{" "}
                                                for tailored asset allocation advice.
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
                                        Grow Your Wealth Faster with a Smart{" "}
                                        <NextLink
                                            href="https://moneykingfinancial.com/services/mutual-fund/sip"
                                            className="text-blue-400 hover:underline"
                                        >
                                            SIP
                                        </NextLink>{" "}
                                        Plan!
                                    </Typography>
                                    <Typography variant="b2" className="text-gray-300 mb-6 block">
                                        Beat inflation, automate your monthly investments, and achieve your financial
                                        freedom goals with top-performing mutual funds curated by experts.
                                    </Typography>

                                    <div className="flex flex-wrap gap-4">
                                        <NextLink
                                            href="https://moneykingfinancial.com/services/mutual-fund/sip"
                                            className="inline-block bg-red-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-red-700 transition"
                                        >
                                            Start SIP Online
                                        </NextLink>
                                        <NextLink
                                            href="https://moneykingfinancial.com/services/mutual-fund/lumpsum"
                                            className="inline-block bg-blue-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-700 transition"
                                        >
                                            Explore Lumpsum Funds
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