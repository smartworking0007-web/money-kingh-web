"use client";

import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export const Blog72 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-full flex justify-center px-4"
        >
          <BlogCard1
            title="LAP Loan Balance Transfer vs. Home Loan Top-Up: Which Is the Right Financial Move for You in NCR?"
            category="LOANS"
            author="Sumit Mishra"
            date="July 16, 2026"
            image="/images/blog/blog-72.jpeg"
          />
        </div>
      ) : (
        <div className="fixed inset-0 z-40 bg-white overflow-y-auto pt-20 md:pt-28 no-scrollbar animate-in fade-in duration-300 text-left">
          <div className="relative max-w-5xl mx-auto pb-20 px-4 md:px-6">
            <button
              onClick={() => setIsOpen(false)}
              className="flex items-center mb-6 text-gray-500 hover:text-[#1e3a8a] gap-1"
            >
              <ArrowLeft size={14} />
              <Typography variant="caption" className="font-bold uppercase">
                Back to Blogs
              </Typography>
            </button>

            <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
              <div className="relative h-[300px] md:h-[500px] w-full">
                <Image
                  src="/images/blog/blog-72.jpeg"
                  alt="A professional couple reviewing financial documents and property plans in a modern Delhi NCR apartment, illustrating the process of mortgage comparison."
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="px-5 py-8 md:px-12 md:py-14">
                <Typography
                  variant="h5"
                  className="text-[#1e3a8a] uppercase text-2xl md:text-4xl mb-4"
                >
                  LAP Loan Balance Transfer vs. Home Loan Top-Up: Which Is the
                  Right Financial Move for You in NCR?
                </Typography>

                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                  <Clock size={16} />
                  <Typography variant="b2">July 16, 2026</Typography>
                </div>

                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                  <p>
                    <strong>
                      Introduction: Navigating Financial Options in NCR
                    </strong>
                  </p>
                  <p>
                    For residents of Delhi NCR, where property values have seen
                    significant appreciation, leveraging home equity is a common
                    financial strategy. However, when you need additional
                    capital, the terminology—LAP vs. Home Loan Top-Up—often
                    creates confusion. Understanding which one suits your
                    specific situation can save you lakhs in interest costs.
                  </p>

                  <p>
                    <strong>Home Loan Top-Up: The Convenience Choice</strong>
                  </p>
                  <p>
                    A Home Loan Top-Up is essentially a loan on top of your
                    loan.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>The Appeal:</strong> Since your lender already has
                      your property documents and has verified your
                      creditworthiness, the processing time is minimal [1.1.1,
                      1.3.2].
                    </li>
                    <li>
                      <strong>Best For:</strong> When you need a relatively
                      smaller amount for home renovations, medical emergencies,
                      or minor personal expenses [1.1.1, 1.3.2].
                    </li>
                    <li>
                      <strong>The Advantage:</strong> Interest rates are
                      typically lower than those of a fresh LAP because the
                      lender treats it as a low-risk extension of an existing
                      housing loan [1.1.1, 1.2.3].
                    </li>
                  </ul>

                  <p>
                    <strong>
                      LAP Balance Transfer: The Restructuring Powerhouse
                    </strong>
                  </p>
                  <p>
                    A LAP Balance Transfer involves moving your entire
                    outstanding loan amount to a new lender to secure better
                    terms [1.1.2, 1.2.1].
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>The Appeal:</strong> It allows you to reset your
                      interest rate, extend your tenure to reduce EMIs, or
                      increase the total loan amount significantly based on
                      current property valuations [1.2.1, 1.2.2].
                    </li>
                    <li>
                      <strong>Best For:</strong> Individuals with high-interest
                      existing loans, business owners requiring large working
                      capital, or those looking to consolidate multiple
                      high-interest debts into one manageable EMI [1.2.1,
                      1.2.2].
                    </li>
                    <li>
                      <strong>The Advantage:</strong> It provides a fresh start
                      with a lender that may offer more favorable policies for
                      self-employed professionals or those with improved credit
                      scores since the original loan was sanctioned [1.2.2,
                      1.3.3].
                    </li>
                  </ul>

                  <h2>Comparative Breakdown</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-200">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border p-2">Feature</th>
                          <th className="border p-2">Home Loan Top-Up</th>
                          <th className="border p-2">LAP Balance Transfer</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-2">Primary Purpose</td>
                          <td className="border p-2">
                            Quick liquidity for specific needs
                          </td>
                          <td className="border p-2">
                            Debt restructuring & large capital
                          </td>
                        </tr>
                        <tr>
                          <td className="border p-2">Interest Rate</td>
                          <td className="border p-2">Usually lower</td>
                          <td className="border p-2">
                            Competitive, but varies by risk
                          </td>
                        </tr>
                        <tr>
                          <td className="border p-2">Processing Time</td>
                          <td className="border p-2">
                            Very fast (existing lender)
                          </td>
                          <td className="border p-2">
                            Moderate (fresh valuation needed)
                          </td>
                        </tr>
                        <tr>
                          <td className="border p-2">End-Use Flexibility</td>
                          <td className="border p-2">
                            Restricted (mostly personal/home)
                          </td>
                          <td className="border p-2">
                            Highly flexible (business/personal)
                          </td>
                        </tr>
                        <tr>
                          <td className="border p-2">Tenure</td>
                          <td className="border p-2">
                            Linked to original loan
                          </td>
                          <td className="border p-2">
                            Extended (up to 20 years)
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h2>
                    Why LAP Balance Transfer Often Wins for Large NCR
                    Requirements
                  </h2>
                  <p>
                    In a bustling economic hub like Delhi NCR, business owners
                    and professionals often require significant liquidity that
                    exceeds the limits of a standard top-up. A LAP Balance
                    Transfer is often better in these specific scenarios:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Lowering Overall Interest Burden:</strong> If your
                      existing loan was taken years ago at a higher rate,
                      transferring it can lead to massive long-term interest
                      savings [1.2.2].
                    </li>
                    <li>
                      <strong>Accessing Higher LTV:</strong> If your property
                      value in NCR has soared, a fresh LAP appraisal might allow
                      you to unlock more capital than a conservative top-up
                      would [1.4.1].
                    </li>
                    <li>
                      <strong>Customization:</strong> It allows you to shift
                      from a rigid EMI structure to one that aligns better with
                      your current income cycle, especially for self-employed
                      professionals [1.2.2, 1.3.3].
                    </li>
                  </ul>

                  <p>
                    <strong>Strategic Conclusion</strong>
                  </p>
                  <p>
                    If you need a small amount of cash quickly for home repairs,
                    stick with your existing lender and opt for a Home Loan
                    Top-Up. However, if you are looking to optimize your debt,
                    reduce EMIs, or secure a large fund for business expansion
                    in NCR, a LAP Balance Transfer is almost always the superior
                    strategic move.
                  </p>

                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                    <h2 className="text-[#1e3a8a] text-xl font-bold mb-4 flex items-center gap-2">
                      <HelpCircle size={20} /> FAQ Section
                    </h2>
                    <ul className="space-y-4">
                      <li>
                        <strong>
                          Q: Will a balance transfer affect my CIBIL score?
                        </strong>
                        <br />
                        A: A new credit inquiry may cause a minor, temporary
                        dip, but timely payments on the new loan will improve
                        your score in the long run.
                      </li>
                      <li>
                        <strong>
                          Q: Can I get tax benefits on a LAP Balance Transfer?
                        </strong>
                        <br />
                        A: Generally, no. Tax benefits are primarily tied to
                        home loans under Section 80C/24(b). LAP interest is only
                        deductible if used for specific business purposes or
                        home renovation, subject to tax advisor verification.
                      </li>
                      <li>
                        <strong>
                          Q: Are there hidden costs in a Balance Transfer?
                        </strong>
                        <br />
                        A: Always account for processing fees, valuation
                        charges, and potential prepayment penalties from your
                        old lender before switching [1.2.1, 1.3.3].
                      </li>
                    </ul>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-lg font-bold mb-4">
                      Internal Linking Suggestions
                    </h3>
                    <ul className="list-disc pl-6 space-y-2 text-blue-600 font-semibold">
                      <li>
                        <NextLink href="#">
                          How to Improve Your CIBIL Score for Better Loan Rates
                        </NextLink>
                      </li>
                      <li>
                        <NextLink href="#">
                          Top 5 Areas for Property Investment in NCR in 2026
                        </NextLink>
                      </li>
                      <li>
                        <NextLink href="#">
                          Understanding EMI Calculators for Mortgage
                          Restructuring
                        </NextLink>
                      </li>
                    </ul>
                  </div>
                </article>

                <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[40px] mt-10">
                  <Typography
                    variant="h5"
                    className="text-blue-400 uppercase mb-3"
                  >
                    Need Help Comparing?
                  </Typography>
                  <Typography variant="b2" className="text-gray-300 mb-6 block">
                    Not sure if your current mortgage is costing you too much?
                    Click here to use our Loan Comparison Tool and see how much
                    you could save with a balance transfer.
                  </Typography>
                  <NextLink
                    href="#"
                    className="inline-block bg-red-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-red-700 transition"
                  >
                    Use Loan Comparison Tool
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
