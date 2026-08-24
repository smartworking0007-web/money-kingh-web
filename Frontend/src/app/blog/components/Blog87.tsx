"use client";

import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export const Blog87: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className="w-full flex justify-center">
            {!isOpen ? (
                <div
                    onClick={() => setIsOpen(true)}
                    className="cursor-pointer w-full flex justify-center px-4"
                >
                    <BlogCard1
                        title="Why Finance Is Important for Everyone: The Ultimate Guide to Financial Literacy"
                        category="FINANCIAL LITERACY"
                        author="Sumit Mishra"
                        date="August 24, 2026"
                        image="/images/blog/blog-87.jpg"
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
                                    src="/images/blog/blog-87.jpg"
                                    alt="financial terms"
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
                                    Why{" "}
                                    <NextLink
                                        href="https://moneykingfinancial.com/"
                                        className="text-[#1e3a8a] hover:underline"
                                    >
                                        Finance
                                    </NextLink>{" "}
                                    Is Important for Everyone: The Ultimate Guide to Financial Literacy
                                </Typography>

                                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                                    <Clock size={16} />
                                    <Typography variant="b2">August 24, 2026</Typography>
                                </div>

                                {/* Blog Article Body */}
                                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                                    <p>
                                        <NextLink
                                            href="https://moneykingfinancial.com/"
                                            className="text-blue-600 font-semibold hover:underline"
                                        >
                                            Finance
                                        </NextLink>{" "}
                                        is important for everyone because it directly determines your quality of life,
                                        security, and freedom to make life choices. Understanding personal{" "}
                                        <NextLink
                                            href="https://moneykingfinancial.com/"
                                            className="text-blue-600 font-semibold hover:underline"
                                        >
                                            finance
                                        </NextLink>{" "}
                                        allows individuals to manage daily expenses, build an emergency safety net,
                                        protect their savings against inflation, and eliminate high-interest debt.
                                        Regardless of income level, mastering basic{" "}
                                        <NextLink
                                            href="https://moneykingfinancial.com/"
                                            className="text-blue-600 font-semibold hover:underline"
                                        >
                                            financial
                                        </NextLink>{" "}
                                        management turns your hard-earned salary into long-term wealth, leading to true
                                        financial independence.
                                    </p>

                                    <p>
                                        Many people believe that &quot;
                                        <NextLink
                                            href="https://moneykingfinancial.com/"
                                            className="text-blue-600 font-semibold hover:underline"
                                        >
                                            finance
                                        </NextLink>
                                        &quot; is a complex subject reserved only for bankers, corporate executives, or
                                        stock market traders. However, in reality,{" "}
                                        <NextLink
                                            href="https://moneykingfinancial.com/"
                                            className="text-blue-600 font-semibold hover:underline"
                                        >
                                            finance
                                        </NextLink>{" "}
                                        touches every single aspect of daily human life.
                                    </p>

                                    <p>
                                        Whether you earn a modest monthly wage or run a multi-million dollar enterprise,
                                        how you manage, invest, and preserve your money dictates your long-term comfort
                                        and peace of mind. Without basic financial knowledge, high earnings can easily
                                        dissolve due to poor spending habits, inflation, and unexpected medical crises.
                                    </p>

                                    <p>
                                        Here is a comprehensive breakdown of why personal{" "}
                                        <NextLink
                                            href="https://moneykingfinancial.com/"
                                            className="text-blue-600 font-semibold hover:underline"
                                        >
                                            financial
                                        </NextLink>{" "}
                                        management is essential for every individual.
                                    </p>

                                    <h2 className="text-xl font-bold text-gray-800 pt-4">
                                        1. Protects Against Unexpected Emergencies
                                    </h2>
                                    <p>
                                        Life is inherently unpredictable. Sudden medical bills, temporary job loss,
                                        vehicle breakdowns, or urgent home repairs can occur without warning.
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>
                                            <strong>The Emergency Safety Net:</strong> Understanding{" "}
                                            <NextLink
                                                href="https://moneykingfinancial.com/"
                                                className="text-blue-600 font-semibold hover:underline"
                                            >
                                                finance
                                            </NextLink>{" "}
                                            encourages you to maintain an emergency fund covering at least 6 months of
                                            essential living expenses.
                                        </li>
                                        <li>
                                            <strong>Prevents Distress Loans:</strong> Having a cash cushion prevents you
                                            from turning to high-interest credit cards or informal debt traps during a
                                            sudden crisis.
                                        </li>
                                    </ul>

                                    <h2 className="text-xl font-bold text-gray-800 pt-4">
                                        2. Beats Inflation &amp; Preserves Purchasing Power
                                    </h2>
                                    <p>
                                        Leaving your money idle in cash or low-yielding accounts guarantees that you lose
                                        purchasing power over time due to inflation.
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>
                                            <strong>The Inflation Trap:</strong> If inflation runs at 6% per year, ₹100
                                            sitting idle today will only hold the purchasing power of ₹94 next year.
                                        </li>
                                        <li>
                                            <strong>Investing to Grow:</strong> Sound{" "}
                                            <NextLink
                                                href="https://moneykingfinancial.com/"
                                                className="text-blue-600 font-semibold hover:underline"
                                            >
                                                financial
                                            </NextLink>{" "}
                                            literacy teaches you to allocate money into growth assets—such as equity
                                            mutual funds, index funds, or real estate—that deliver returns higher than the
                                            prevailing inflation rate.
                                        </li>
                                    </ul>

                                    {/* Real Return Formula Box */}
                                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 my-4 text-center">
                                        <p className="text-sm font-semibold text-blue-900 mb-2">
                                            Real Wealth Calculation Formula
                                        </p>
                                        <p className="text-lg font-bold text-blue-950 font-mono">
                                            Real Return = Investment Return - Inflation Rate
                                        </p>
                                    </div>

                                    <h2 className="text-xl font-bold text-gray-800 pt-4">
                                        3. Prevents Debt Traps and Builds Good Credit
                                    </h2>
                                    <p>
                                        Debt can either be a powerful wealth catalyst or a dangerous trap depending on
                                        how you manage it:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>
                                            <strong>Avoiding High-Interest Traps:</strong>{" "}
                                            <NextLink
                                                href="https://moneykingfinancial.com/"
                                                className="text-blue-600 font-semibold hover:underline"
                                            >
                                                Financial
                                            </NextLink>{" "}
                                            awareness stops individuals from carrying revolving balances on credit cards
                                            (which often charge 36% to 42% annual interest).
                                        </li>
                                        <li>
                                            <strong>Smart Borrowing:</strong> It helps you differentiate between bad debt
                                            (discretionary consumer spending) and good debt (low-cost machinery, education,
                                            or home loans) while maintaining a prime CIBIL score (750+).
                                        </li>
                                    </ul>

                                    <h2 className="text-xl font-bold text-gray-800 pt-4">
                                        4. Secures Comfortable Retirement &amp; Financial Freedom
                                    </h2>
                                    <p>
                                        Relying solely on active work income is precarious as health and physical energy
                                        levels decline over time.
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>
                                            <strong>The Power of Compounding:</strong> By starting early—even with small
                                            monthly SIPs—you leverage compound growth across decades.
                                        </li>
                                        <li>
                                            <strong>Achieving True Autonomy:</strong> True{" "}
                                            <NextLink
                                                href="https://moneykingfinancial.com/"
                                                className="text-blue-600 font-semibold hover:underline"
                                            >
                                                financial
                                            </NextLink>{" "}
                                            freedom means reaching a stage where your passive income covers all living
                                            expenses, allowing you to choose how you spend your time without money-related
                                            stress.
                                        </li>
                                    </ul>

                                    <h2 className="text-xl font-bold text-gray-800 pt-4">
                                        Key Comparison: Financially Literate vs. Financially Unaware Individual
                                    </h2>
                                    <div className="overflow-x-auto">
                                        <table className="w-full border-collapse border border-gray-200">
                                            <thead>
                                                <tr className="bg-gray-100 text-left">
                                                    <th className="border p-2">Parameter</th>
                                                    <th className="border p-2">Financially Literate Individual</th>
                                                    <th className="border p-2">Financially Unaware Individual</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="border p-2 font-bold">Monthly Budgeting</td>
                                                    <td className="border p-2">Tracks expenses and saves 20%–40% first</td>
                                                    <td className="border p-2">Spends first and saves whatever is left</td>
                                                </tr>
                                                <tr>
                                                    <td className="border p-2 font-bold">Emergency Preparedness</td>
                                                    <td className="border p-2">6-Month cash buffer in liquid funds</td>
                                                    <td className="border p-2">Zero savings; relies on debt during emergencies</td>
                                                </tr>
                                                <tr>
                                                    <td className="border p-2 font-bold">Approach to Wealth</td>
                                                    <td className="border p-2">Invests in inflation-beating growth assets</td>
                                                    <td className="border p-2">Keeps cash idle in low-interest accounts</td>
                                                </tr>
                                                <tr>
                                                    <td className="border p-2 font-bold">Debt Management</td>
                                                    <td className="border p-2">Uses credit strategically; zero card interest</td>
                                                    <td className="border p-2">Carries high-interest balances and multiple EMIs</td>
                                                </tr>
                                                <tr>
                                                    <td className="border p-2 font-bold">Retirement Outlook</td>
                                                    <td className="border p-2">Clear, compound-driven portfolio plan</td>
                                                    <td className="border p-2">Dependent on future employment or children</td>
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
                                                    Q: Do I need a background in math or business to manage personal{" "}
                                                    <NextLink
                                                        href="https://moneykingfinancial.com/"
                                                        className="text-blue-600 hover:underline"
                                                    >
                                                        finance
                                                    </NextLink>
                                                    ?
                                                </strong>
                                                <br />
                                                A: No. Personal{" "}
                                                <NextLink
                                                    href="https://moneykingfinancial.com/"
                                                    className="text-blue-600 hover:underline"
                                                >
                                                    finance
                                                </NextLink>{" "}
                                                requires basic arithmetic (addition, subtraction, percentages) paired with
                                                emotional discipline and consistency. Following fundamental rules like
                                                budgeting and regular investing is far more impactful than complex mathematical
                                                modeling.
                                            </li>
                                            <li>
                                                <strong>Q: What is the 50/30/20 budget rule?</strong>
                                                <br />
                                                A: The 50/30/20 rule is a simple framework where you allocate your after-tax
                                                income into three buckets: 50% for Needs (rent, food, healthcare), 30% for
                                                Wants (entertainment, dining out), and 20% for Savings &amp; Investments.
                                            </li>
                                            <li>
                                                <strong>
                                                    Q: At what age should a person start learning about{" "}
                                                    <NextLink
                                                        href="https://moneykingfinancial.com/"
                                                        className="text-blue-600 hover:underline"
                                                    >
                                                        finance
                                                    </NextLink>
                                                    ?
                                                </strong>
                                                <br />
                                                A: Sound money habits begin early. Teenagers and young adults should start
                                                learning cash flow principles with their first allowance or paycheck. However,
                                                it is never too late to take control of your financial life. Explore our{" "}
                                                <NextLink
                                                    href="https://moneykingfinancial.com/"
                                                    className="text-blue-600 font-bold hover:underline"
                                                >
                                                    financial portal
                                                </NextLink>{" "}
                                                for expert credit, insurance, and wealth-building advisory.
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
                                        Take Control of Your{" "}
                                        <NextLink
                                            href="https://moneykingfinancial.com/"
                                            className="text-blue-400 hover:underline"
                                        >
                                            Finance
                                        </NextLink>{" "}
                                        &amp; Future Today!
                                    </Typography>
                                    <Typography variant="b2" className="text-gray-300 mb-6 block">
                                        Access customized loan solutions, compare investment plans, and build an
                                        unshakeable financial foundation with Money King Financial Services.
                                    </Typography>

                                    <NextLink
                                        href="https://moneykingfinancial.com/"
                                        className="inline-block bg-red-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-red-700 transition"
                                    >
                                        Explore Financial Services
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