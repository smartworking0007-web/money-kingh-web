"use client";

import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export const Blog103: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-full flex justify-center px-4"
        >
          <BlogCard1
            title="Home Loan vs Loan Against Property (LAP): Why Home Loans Offer Better Interest Rates"
            category="LOANS"
            author="Sumit Mishra"
            date="September 14, 2026"
            image="/images/blog/blog-103.jpeg"
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
                  src="/images/blog/blog-103.jpeg"
                  alt="home loan vs lap loan"
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
                    href="https://moneykingfinancial.com/services/loan/secured/home"
                    className="text-[#1e3a8a] hover:underline"
                  >
                    Home Loan
                  </NextLink>{" "}
                  vs{" "}
                  <NextLink
                    href="https://moneykingfinancial.com/services/loan/secured/property"
                    className="text-[#1e3a8a] hover:underline"
                  >
                    Loan Against Property
                  </NextLink>{" "}
                  (LAP): Why Home Loans Offer Better Interest Rates
                </Typography>

                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                  <Clock size={16} />
                  <Typography variant="b2">September 14, 2026</Typography>
                </div>

                {/* Blog Article Body */}
                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                  {/* Featured Snippet Box */}
                  <div className="bg-slate-50 border-l-4 border-[#1e3a8a] p-4 rounded-r-lg">
                    <p className="text-gray-700 italic m-0">
                      Home loans offer lower interest rates than a{" "}
                      <NextLink
                        href="https://moneykingfinancial.com/services/loan/secured/property"
                        className="text-blue-600 font-semibold hover:underline"
                      >
                        Loan Against Property (LAP)
                      </NextLink>{" "}
                      because home loans carry lower risk for lenders, as they fund a primary residential property purchase. Additionally, home loans feature higher Loan-to-Value (LTV) ratios up to 90%, longer repayment tenures up to 30 years, and tax deduction benefits, whereas a LAP is a end-use unrestricted mortgage on an existing property with higher risk and interest rates.
                    </p>
                  </div>

                  <p>
                    When searching for long-term financing, understanding the cost of borrowing is critical to managing your overall financial health. Two of the most common secured financial products in the market are{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/loan/secured/home"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      Home Loans
                    </NextLink>{" "}
                    and{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/loan/secured/property"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      Loan Against Property (LAP)
                    </NextLink>
                    . While both loans require real estate as collateral, their interest rates, borrowing costs, and structural terms differ significantly.
                  </p>

                  <p>
                    If you are evaluating your options, you will notice that home loans consistently come with better (lower) interest rates compared to LAP. Here is a detailed breakdown of why home loans are cheaper, how both products compare, and how to choose the right financial option for your needs.
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Why Home Loans Have Lower Interest Rates Than LAP
                  </h2>
                  <p>
                    Although both home loans and LAP are secured loans backed by real estate, banks and financial institutions price their interest rates based on risk. Here is why home loans offer better interest rates:
                  </p>

                  <h3 className="text-lg font-bold text-gray-800 pt-2">
                    1. End-Use Restriction &amp; Risk Profile
                  </h3>
                  <p>
                    <strong>Home Loan:</strong> The funds can only be used to purchase, construct, or renovate a residential property. Since the money directly creates an asset, lenders view{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/loan/secured/home"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      home loans
                    </NextLink>{" "}
                    as low-risk investments.
                  </p>
                  <p>
                    <strong>Loan Against Property (LAP):</strong> The funds can be used for any personal or business purpose (except illegal activities). Because lenders cannot monitor how the money is spent, the perceived risk is higher, resulting in a higher interest rate premium on a{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/loan/secured/property"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      loan against property
                    </NextLink>
                    .
                  </p>

                  <h3 className="text-lg font-bold text-gray-800 pt-2">
                    2. Higher Loan-to-Value (LTV) Ratio
                  </h3>
                  <p>
                    <strong>Home Loan:</strong> Lenders sanction up to 80% to 90% of the total property value.
                  </p>
                  <p>
                    <strong>LAP:</strong> Lenders usually restrict the sanction amount to 50% to 70% of the current market value of your property to hedge against potential market fluctuations.
                  </p>

                  <h3 className="text-lg font-bold text-gray-800 pt-2">
                    3. Repayment Tenure &amp; EMI Distribution
                  </h3>
                  <p>
                    <strong>Home Loan:</strong> Offers extended repayment tenures up to 30 years, allowing borrowers to distribute EMIs comfortably over a longer horizon.
                  </p>
                  <p>
                    <strong>LAP:</strong> Tenure is generally limited to 15 to 20 years, which slightly increases monthly EMI commitments alongside higher interest charges.
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Key Comparison: Home Loan vs. Loan Against Property
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-200">
                      <thead>
                        <tr className="bg-gray-100 text-left">
                          <th className="border p-2">Feature</th>
                          <th className="border p-2">
                            <NextLink
                              href="https://moneykingfinancial.com/services/loan/secured/home"
                              className="text-blue-600 font-semibold hover:underline"
                            >
                              Home Loan
                            </NextLink>
                          </th>
                          <th className="border p-2">
                            <NextLink
                              href="https://moneykingfinancial.com/services/loan/secured/property"
                              className="text-blue-600 font-semibold hover:underline"
                            >
                              Loan Against Property (LAP)
                            </NextLink>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-2 font-bold">Primary Purpose</td>
                          <td className="border p-2 font-semibold text-green-600">
                            Buying / constructing a home
                          </td>
                          <td className="border p-2">
                            Business expansion, education, emergency funds
                          </td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">Interest Rates</td>
                          <td className="border p-2 font-semibold text-green-600">
                            Lowest among all loan categories
                          </td>
                          <td className="border p-2">1.5% to 3% higher than Home Loans</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">Maximum Tenure</td>
                          <td className="border p-2 font-semibold text-green-600">Up to 30 Years</td>
                          <td className="border p-2">Up to 15–20 Years</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">LTV Ratio</td>
                          <td className="border p-2 font-semibold text-green-600">Up to 80% – 90%</td>
                          <td className="border p-2">Up to 50% – 70%</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">Tax Benefits</td>
                          <td className="border p-2 font-semibold text-green-600">
                            Available under Sec 80C &amp; Sec 24(b)
                          </td>
                          <td className="border p-2">
                            Available only if used for business expenses
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Tax Advantages of a Home Loan
                  </h2>
                  <p>
                    Beyond lower interest rates, home loans offer significant tax savings that further reduce the effective cost of your loan:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Principal Repayment:</strong> Deductions up to ₹1.5 Lakh per financial year under Section 80C.
                    </li>
                    <li>
                      <strong>Interest Paid:</strong> Deductions up to ₹2 Lakh per financial year on self-occupied properties under Section 24(b).
                    </li>
                  </ul>
                  <p>
                    In contrast, a{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/loan/secured/property"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      Loan Against Property
                    </NextLink>{" "}
                    does not offer standard tax benefits unless the funds are explicitly used for business expansion purposes.
                  </p>

                  {/* FAQ Section */}
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                    <h2 className="text-[#1e3a8a] text-xl font-bold mb-4 flex items-center gap-2">
                      <HelpCircle size={20} /> Frequently Asked Questions (FAQ)
                    </h2>
                    <ul className="space-y-4">
                      <li>
                        <strong>Q1: Why is the interest rate on a LAP higher than a home loan?</strong>
                        <br />
                        Because a{" "}
                        <NextLink
                          href="https://moneykingfinancial.com/services/loan/secured/property"
                          className="text-blue-600 hover:underline"
                        >
                          LAP
                        </NextLink>{" "}
                        allows multi-purpose fund usage without end-use restrictions, lenders classify it under a higher risk category and charge a premium of 1.5% to 3% above standard{" "}
                        <NextLink
                          href="https://moneykingfinancial.com/services/loan/secured/home"
                          className="text-blue-600 hover:underline"
                        >
                          home loan rates
                        </NextLink>.
                      </li>
                      <li>
                        <strong>Q2: Can I transfer my LAP to a home loan to get a lower interest rate?</strong>
                        <br />
                        No, you cannot convert a LAP into a home loan unless the funds are specifically utilized to purchase or construct another residential property. However, you can transfer your LAP to another lender offering lower LAP balance transfer rates.
                      </li>
                      <li>
                        <strong>Q3: Which option is better for emergency business funding?</strong>
                        <br />
                        If you already own a property and need a large sum of money for business expansion, medical expenses, or education, a{" "}
                        <NextLink
                          href="https://moneykingfinancial.com/services/loan/secured/property"
                          className="text-blue-600 hover:underline"
                        >
                          Loan Against Property
                        </NextLink>{" "}
                        is the ideal choice, as home loan funds cannot be used for non-housing purposes.
                      </li>
                      <li>
                        <strong>Q4: Does a home loan require lower income eligibility than a LAP?</strong>
                        <br />
                        Home loan eligibility focuses on stable income and home affordability, while LAP eligibility heavily depends on the current appraised market value and legal clearance of your pledged property alongside income stability. Explore both financing options on our{" "}
                        <NextLink
                          href="https://moneykingfinancial.com/"
                          className="text-blue-600 font-bold hover:underline"
                        >
                          financial portal
                        </NextLink>{" "}
                        to find the best deal.
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
                    Find the Best Secured Financing for Your Needs Today!
                  </Typography>
                  <Typography variant="b2" className="text-gray-300 mb-6 block">
                    Whether you need a new{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/loan/secured/home"
                      className="text-blue-400 hover:underline"
                    >
                      home loan
                    </NextLink>{" "}
                    at lowest interest rates or want to unlock equity through a{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/loan/secured/property"
                      className="text-blue-400 hover:underline"
                    >
                      Loan Against Property
                    </NextLink>
                    , Money King Financial Services ensures fast approvals and transparent processing.
                  </Typography>

                  <div className="flex flex-wrap gap-4 mt-2">
                    <NextLink
                      href="https://moneykingfinancial.com/services/loan/secured/home"
                      className="inline-block bg-red-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-red-700 transition"
                    >
                      Apply for Home Loan
                    </NextLink>
                    <NextLink
                      href="https://moneykingfinancial.com/services/loan/secured/property"
                      className="inline-block bg-blue-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-700 transition"
                    >
                      Apply for Loan Against Property
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