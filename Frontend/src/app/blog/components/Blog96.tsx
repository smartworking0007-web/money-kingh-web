"use client";

import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export const Blog96: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className="w-full flex justify-center">
            {!isOpen ? (
                <div
                    onClick={() => setIsOpen(true)}
                    className="cursor-pointer w-full flex justify-center px-4"
                >
                    <BlogCard1
                        title="Home Loan Eligibility Guide 2026: How to Maximize Your Loan Amount & Secure Low Interest Rates"
                        category="LOANS"
                        author="Sumit Mishra"
                        date="September 5, 2026"
                        image="/images/blog/blog-96.jpeg"
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
                                    src="/images/blog/blog-96.jpeg"
                                    alt="home loan in noida"
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
                                    Home Loan Eligibility Guide 2026: How to Maximize Your{" "}
                                    <NextLink
                                        href="https://moneykingfinancial.com/services/loan/secured/home"
                                        className="text-[#1e3a8a] hover:underline"
                                    >
                                        Home Loan
                                    </NextLink>{" "}
                                    Amount &amp; Secure Low Interest Rates
                                </Typography>

                                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                                    <Clock size={16} />
                                    <Typography variant="b2">September 5, 2026</Typography>
                                </div>

                                {/* Blog Article Body */}
                                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                                    {/* Featured Snippet Box */}
                                    <div className="bg-slate-50 border-l-4 border-[#1e3a8a] p-4 rounded-r-lg">
                                        <p className="text-gray-700 italic m-0">
                                            Home loan eligibility is the maximum loan amount a bank or housing finance company (HFC) is willing to sanction based on an applicant's repayment capacity. Lenders evaluate factors such as net monthly income, existing debt obligations (FOIR), credit (CIBIL) score, age, and property valuation. Maintaining a credit score above 750 and keeping overall debt obligations below 50% of monthly income significantly increases{" "}
                                            <NextLink
                                                href="https://moneykingfinancial.com/services/loan/secured/home"
                                                className="text-blue-600 font-semibold hover:underline"
                                            >
                                                home loan
                                            </NextLink>{" "}
                                            approval chances and unlocks the lowest available interest rates.
                                        </p>
                                    </div>

                                    <p>
                                        Buying a home is one of the most significant financial milestones in an individual's life. While securing a{" "}
                                        <NextLink
                                            href="https://moneykingfinancial.com/services/loan/secured/home"
                                            className="text-blue-600 font-semibold hover:underline"
                                        >
                                            home loan
                                        </NextLink>{" "}
                                        makes property ownership accessible, navigating bank approval criteria, documentation, and fluctuating interest rates can feel daunting.
                                    </p>

                                    <p>
                                        How do financial institutions determine how much money you can borrow? More importantly, how can you structure your profile to land the lowest possible interest rate? In this detailed guide, we break down the eligibility formulas used by banks, critical approval factors, and actionable strategies to maximize your sanctioned loan amount.
                                    </p>

                                    <h2 className="text-xl font-bold text-gray-800 pt-4">
                                        1. How Lenders Calculate Home Loan Eligibility
                                    </h2>
                                    <p>
                                        Lenders don't just look at your gross salary; they evaluate your disposable income using the FOIR (Fixed Obligation to Income Ratio) metric.
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>
                                            <strong>The 50% Rule:</strong> Most banks prefer that your total monthly debt payments (including the proposed new{" "}
                                            <NextLink
                                                href="https://moneykingfinancial.com/services/loan/secured/home"
                                                className="text-blue-600 font-semibold hover:underline"
                                            >
                                                home loan
                                            </NextLink>{" "}
                                            EMI) do not exceed 50%–60% of your net monthly income.
                                        </li>
                                        <li>
                                            <strong>Loan-to-Value (LTV) Ratio:</strong> Banks fund up to 75%–90% of the property's agreement value depending on the loan size. The remaining amount must be paid upfront as a down payment.
                                        </li>
                                    </ul>

                                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-900 font-mono text-center">
                                        [ Net Monthly Income ] ──&gt; Less [ Existing EMIs ] ──&gt; Available Capacity (Max 50% FOIR) ──&gt; Sanctioned Loan
                                    </div>

                                    <h2 className="text-xl font-bold text-gray-800 pt-4">
                                        2. Key Factors Affecting Your Home Loan Application
                                    </h2>

                                    <h3 className="text-lg font-bold text-gray-800 pt-2">
                                        A. Credit Score (CIBIL)
                                    </h3>
                                    <p>
                                        A CIBIL score of 750 or higher is the benchmark for instant approval. A strong credit history demonstrates responsible borrowing behavior and gives you leverage to negotiate lower interest rates on your{" "}
                                        <NextLink
                                            href="https://moneykingfinancial.com/services/loan/secured/home"
                                            className="text-blue-600 font-semibold hover:underline"
                                        >
                                            home loan
                                        </NextLink>.
                                    </p>

                                    <h3 className="text-lg font-bold text-gray-800 pt-2">
                                        B. Employment Stability &amp; Income Continuity
                                    </h3>
                                    <p>
                                        Salaried individuals with at least 2 years of work experience (and 1 year with the current employer) or self-employed professionals with 3 years of audited profit &amp; loss statements are viewed as low-risk borrowers.
                                    </p>

                                    <h3 className="text-lg font-bold text-gray-800 pt-2">
                                        C. Age &amp; Loan Tenure
                                    </h3>
                                    <p>
                                        Younger applicants (aged 25–40) can opt for longer tenure options (up to 30 years), which reduces the monthly EMI burden and automatically increases total eligibility when applying for a{" "}
                                        <NextLink
                                            href="https://moneykingfinancial.com/services/loan/secured/home"
                                            className="text-blue-600 font-semibold hover:underline"
                                        >
                                            home loan
                                        </NextLink>.
                                    </p>

                                    <h2 className="text-xl font-bold text-gray-800 pt-4">
                                        Direct Comparison: Salaried vs. Self-Employed Applicants
                                    </h2>
                                    <div className="overflow-x-auto">
                                        <table className="w-full border-collapse border border-gray-200">
                                            <thead>
                                                <tr className="bg-gray-100 text-left">
                                                    <th className="border p-2">Parameter</th>
                                                    <th className="border p-2">Salaried Applicants</th>
                                                    <th className="border p-2">Self-Employed Applicants</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="border p-2 font-bold">Primary Income Proof</td>
                                                    <td className="border p-2">Salary slips (3 months) &amp; Form 16</td>
                                                    <td className="border p-2">ITR filings with Computation (3 years)</td>
                                                </tr>
                                                <tr>
                                                    <td className="border p-2 font-bold">Max Tenure Offered</td>
                                                    <td className="border p-2 font-semibold text-green-600">Up to 30 Years</td>
                                                    <td className="border p-2">Up to 20–25 Years</td>
                                                </tr>
                                                <tr>
                                                    <td className="border p-2 font-bold">Interest Rate Baseline</td>
                                                    <td className="border p-2 font-semibold text-green-600">Standard preferred rates</td>
                                                    <td className="border p-2">Slight risk premium depending on business profile</td>
                                                </tr>
                                                <tr>
                                                    <td className="border p-2 font-bold">Primary Evaluation</td>
                                                    <td className="border p-2">Net take-home income stability</td>
                                                    <td className="border p-2">Net profit, cash flow, and business turnover</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <h2 className="text-xl font-bold text-gray-800 pt-4">
                                        5 Proven Tips to Boost Your Home Loan Eligibility
                                    </h2>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>
                                            <strong>Add a Co-Applicant:</strong> Apply jointly with a working spouse, parent, or sibling. Combining incomes instantly boosts total borrowing capacity.
                                        </li>
                                        <li>
                                            <strong>Clear Existing Short-Term Debts:</strong> Pay off credit card balances and small personal loans to lower your FOIR score before applying.
                                        </li>
                                        <li>
                                            <strong>Choose a Longer Tenure:</strong> Selecting a 25 or 30-year tenure lowers the immediate monthly EMI calculation, allowing banks to sanction a higher capital amount.
                                        </li>
                                        <li>
                                            <strong>Declare Additional Income Sources:</strong> Include verified secondary income such as rental yield, performance bonuses, or freelance retainers.
                                        </li>
                                        <li>
                                            <strong>Check for Pre-Approved Offers:</strong> Maintain healthy savings account relationships with your primary bank to unlock pre-approved zero-processing fee loans.
                                        </li>
                                    </ul>

                                    {/* FAQ Section */}
                                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                                        <h2 className="text-[#1e3a8a] text-xl font-bold mb-4 flex items-center gap-2">
                                            <HelpCircle size={20} /> Frequently Asked Questions (FAQ)
                                        </h2>
                                        <ul className="space-y-4">
                                            <li>
                                                <strong>Q: What is the minimum CIBIL score required for a home loan?</strong>
                                                <br />
                                                A: While a minimum score of 650 is required by most lenders, a score of 750+ is highly recommended to secure competitive interest rates and faster processing for your{" "}
                                                <NextLink
                                                    href="https://moneykingfinancial.com/services/loan/secured/home"
                                                    className="text-blue-600 hover:underline"
                                                >
                                                    home loan
                                                </NextLink>.
                                            </li>
                                            <li>
                                                <strong>Q: Can I get tax benefits on a home loan?</strong>
                                                <br />
                                                A: Yes. Under the Indian Income Tax Act, you can claim deductions up to ₹1.5 Lakhs on principal repayment under Section 80C, and up to ₹2 Lakhs on interest paid under Section 24(b) for a self-occupied property.
                                            </li>
                                            <li>
                                                <strong>Q: Is a home loan balance transfer beneficial?</strong>
                                                <br />
                                                A: A balance transfer allows you to move your existing high-interest{" "}
                                                <NextLink
                                                    href="https://moneykingfinancial.com/services/loan/secured/home"
                                                    className="text-blue-600 hover:underline"
                                                >
                                                    home loan
                                                </NextLink>{" "}
                                                to another lender offering lower rates. It is highly beneficial if done during the early years of your loan tenure. Check your eligibility directly on our{" "}
                                                <NextLink
                                                    href="https://moneykingfinancial.com/"
                                                    className="text-blue-600 font-bold hover:underline"
                                                >
                                                    financial portal
                                                </NextLink>{" "}
                                                to find the best refinancing options.
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
                                        Get the Best Home Loan Rates for Your Dream Home!
                                    </Typography>
                                    <Typography variant="b2" className="text-gray-300 mb-6 block">
                                        Access tailored housing finance options, compare competitive interest rates across leading banks, and maximize your borrowing eligibility with Money King Financial Services.
                                    </Typography>

                                    <NextLink
                                        href="https://moneykingfinancial.com/services/loan/secured/home"
                                        className="inline-block bg-red-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-red-700 transition"
                                    >
                                        Apply for Home Loan
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