"use client";

import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export const Blog71 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-full flex justify-center px-4"
        >
          <BlogCard1
            title="Need Additional Cash? Here’s How Home Loan Top-Up Works in Noida"
            category="LOANS"
            author="Sumit Mishra"
            date="July 15, 2026"
            image="/images/blog/blog-71.jpeg"
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
                  src="/images/blog/blog-71.jpeg"
                  alt="Homeowner discussing home renovation plans in a modern Noida apartment with a financial advisor"
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
                  Need Additional Cash? Here’s How Home Loan Top-Up Works in
                  Noida
                </Typography>

                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                  <Clock size={16} />
                  <Typography variant="b2">July 15, 2026</Typography>
                </div>

                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                  <p>
                    If you are a homeowner in Noida juggling construction costs,
                    renovation dreams, or unexpected financial emergencies, you
                    might be looking for ways to access extra liquidity. While
                    <NextLink
                      href="/services/loan/unsecured/personal"
                      className="text-red-600 font-bold hover:underline"
                    >
                      {" "}
                      personal loans{" "}
                    </NextLink>
                    and
                    <NextLink
                      href="/services/credit/hdfc"
                      className="text-red-600 font-bold hover:underline"
                    >
                      {" "}
                      credit cards{" "}
                    </NextLink>
                    are common options, they often come with high interest rates
                    and shorter repayment tenures. A{" "}
                    <strong>Home Loan Top-Up</strong> serves as a strategic
                    alternative, allowing you to leverage the equity in your
                    existing property to secure additional funds.
                  </p>

                  <p>
                    This guide explores how the top-up facility functions,
                    eligibility criteria in the Indian market, and why it might
                    be the smartest financial move for your current needs.
                  </p>

                  <h2>1. What is a Home Loan Top-Up?</h2>
                  <p>
                    A home loan top-up is a financial facility provided by banks
                    and housing finance companies (HFCs) that allows existing
                    <NextLink
                      href="/services/loan-bt/home"
                      className="text-red-600 font-bold hover:underline"
                    >
                      {" "}
                      home loan{" "}
                    </NextLink>
                    borrowers to borrow an additional amount over and above
                    their current outstanding home loan. Think of it as an
                    extension of your existing credit line rather than a
                    completely new loan. Because the lender already holds your
                    property as collateral and has verified your financial
                    profile, the process is significantly faster and more
                    convenient than applying for a separate
                    <NextLink
                      href="/services/loan/unsecured/personal"
                      className="text-red-600 font-bold hover:underline"
                    >
                      {" "}
                      personal loan
                    </NextLink>
                    .
                  </p>

                  <h2>How a Top-Up Loan Works</h2>
                  <p>
                    A top-up loan is effectively an extension of your existing
                    mortgage. Since your lender has already vetted your property
                    and financial profile, the process is streamlined. When you
                    apply for a top-up, the lender reassesses the current market
                    value of your home in Noida; if the value has appreciated,
                    you may be eligible for a significant additional amount.
                  </p>

                  <h2>Why Choose a Top-Up Over a Personal Loan?</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Cost-Efficiency:</strong> Interest rates for
                      top-ups are secured-loan rates, which are inherently lower
                      than unsecured
                      <NextLink
                        href="/services/loan/unsecured/personal"
                        className="text-red-600 font-bold hover:underline"
                      >
                        {" "}
                        personal loan{" "}
                      </NextLink>{" "}
                      rates.
                    </li>
                    <li>
                      <strong>Tenure Flexibility:</strong> You can often match
                      the top-up tenure with your existing
                      <NextLink
                        href="/services/loan-bt/home"
                        className="text-red-600 font-bold hover:underline"
                      >
                        {" "}
                        home loan
                      </NextLink>
                      , keeping your monthly EMIs manageable.
                    </li>
                    <li>
                      <strong>Convenience:</strong> Minimal documentation is
                      required since your KYC and property records are already
                      with the lender.
                    </li>
                  </ul>

                  <h2>Eligibility Criteria</h2>
                  <p>To qualify for a top-up in India, you generally need:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>A Consistent Repayment Record:</strong> At least
                      6–12 months of timely EMI payments on your current home
                      loan.
                    </li>
                    <li>
                      <strong>Stable Financial Profile:</strong> Lenders check
                      your current income and debt-to-income ratio.
                    </li>
                    <li>
                      <strong>Credit Health:</strong> A CIBIL score of 750+
                      significantly boosts approval chances.
                    </li>
                    <li>
                      <strong>Property Status:</strong> The property must have a
                      clear title with no legal disputes.
                    </li>
                  </ul>

                  <h2>Maximizing Tax Benefits</h2>
                  <p>
                    One of the most strategic reasons to use a top-up loan is
                    for home renovation or repair. Under Section 24(b) of the
                    Income Tax Act, the interest component of a loan used for
                    property repair or renovation is tax-deductible up to
                    ₹30,000 for self-occupied properties (as part of the overall
                    ₹2 lakh limit) and has no limit for rented properties.
                    Always maintain receipts of your renovation expenses to
                    substantiate these claims to the Income Tax Department.
                  </p>

                  <h2>Strategic Use Cases</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Home Upgrades:</strong> Painting, modular
                      kitchens, or structural repairs.
                    </li>
                    <li>
                      <strong>Debt Consolidation:</strong> Clearing out
                      high-interest
                      <NextLink
                        href="/services/credit/hdfc"
                        className="text-red-600 font-bold hover:underline"
                      >
                        {" "}
                        credit card{" "}
                      </NextLink>
                      debt using the lower-rate top-up funds.
                    </li>
                    <li>
                      <strong>Major Milestones:</strong> Funding education or
                      medical expenses.
                    </li>
                  </ul>

                  <h2>The Application Process</h2>
                  <p>
                    Applying for a top-up loan is a streamlined experience,
                    especially if you have online banking access:
                  </p>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>
                      <strong>Contact Your Lender:</strong> Visit your lender’s
                      official website, app, or nearest branch in Noida to
                      express interest.
                    </li>
                    <li>
                      <strong>Assessment:</strong> The lender will evaluate your
                      existing EMI track record and current property valuation.
                    </li>
                    <li>
                      <strong>Sanction:</strong> Once verified, you will receive
                      a sanction letter detailing the additional loan amount,
                      interest rate, and tenure.
                    </li>
                    <li>
                      <strong>Disbursement:</strong> After signing the necessary
                      agreements, the funds are typically credited directly to
                      your bank account.
                    </li>
                  </ol>

                  <h2>Important Considerations</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Tenure Limits:</strong> The tenure of a top-up
                      loan cannot exceed the remaining tenure of your original
                      <NextLink
                        href="/services/loan-bt/home"
                        className="text-red-600 font-bold hover:underline"
                      >
                        {" "}
                        home loan
                      </NextLink>
                      .
                    </li>
                    <li>
                      <strong>Tax Benefits:</strong> You may be eligible for tax
                      deductions under Section 24(b) of the Income Tax Act if
                      the top-up loan is utilized for home renovation,
                      construction, or extension purposes. Consult with a tax
                      advisor to see if your planned end-use qualifies.
                    </li>
                    <li>
                      <strong>Avoid Over-Leveraging:</strong> Even though a
                      top-up loan is easily available, assess your total monthly
                      financial obligations to ensure that the increased EMI
                      does not strain your household budget.
                    </li>
                  </ul>

                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                    <h2 className="text-[#1e3a8a] text-xl font-bold mb-4 flex items-center gap-2">
                      <HelpCircle size={20} /> Frequently Asked Questions
                    </h2>
                    <ul className="space-y-4">
                      <li>
                        <strong>
                          Q: Can I get a top-up if my home loan is with another
                          bank?
                        </strong>
                        <br />
                        Yes, you can opt for a
                        <NextLink
                          href="/services/loan-bt/home"
                          className="text-red-600 font-bold hover:underline"
                        >
                          {" "}
                          "Balance Transfer + Top-Up"{" "}
                        </NextLink>
                        to move your loan to a new lender and secure additional
                        funds simultaneously.
                      </li>
                      <li>
                        <strong>
                          Q: How much amount can I get as a top-up?
                        </strong>
                        <br />
                        This depends on your property's current value and your
                        repayment capacity; some lenders offer up to ₹50 lakhs.
                      </li>
                      <li>
                        <strong>Q: Are there processing fees?</strong>
                        <br />
                        Yes, lenders typically charge a processing and
                        administrative fee. Check our
                        <NextLink
                          href="/services/credit/hdfc"
                          className="text-blue-600 font-bold hover:underline"
                        >
                          {" "}
                          credit services portal{" "}
                        </NextLink>{" "}
                        for more details on current lender charges.
                      </li>
                    </ul>
                  </div>
                </article>

                <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[40px] mt-10">
                  <Typography
                    variant="h5"
                    className="text-blue-400 uppercase mb-3"
                  >
                    Conclusion
                  </Typography>
                  <Typography variant="b2" className="text-gray-300 mb-6 block">
                    A home loan top-up is a powerful financial instrument for
                    Noida homeowners. By choosing this route, you maintain the
                    security of your property while accessing affordable credit.
                    Before applying, compare offers from different lenders and
                    ensure your repayment capacity aligns with your long-term
                    goals.
                  </Typography>

                  <NextLink
                    href="/services/loan-bt/home"
                    className="inline-block bg-red-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-red-700 transition"
                  >
                    Check Eligibility Now
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
