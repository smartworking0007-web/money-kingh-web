"use client";

import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export const Blog104: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-full flex justify-center px-4"
        >
          <BlogCard1
            title="Machinery Loan in Noida: Fast Equipment Financing for MSMEs & Businesses"
            category="LOANS"
            author="Sumit Mishra"
            date="September 16, 2026"
            image="/images/blog/blog-104.jpeg"
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
                  src="/images/blog/blog-104.jpeg"
                  alt="machinery loan in noida"
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
                    href="https://moneykingfinancial.com/services/loan/secured/machinery"
                    className="text-[#1e3a8a] hover:underline"
                  >
                    Machinery Loan
                  </NextLink>{" "}
                  in Noida: Fast Equipment Financing for MSMEs &amp; Businesses
                </Typography>

                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                  <Clock size={16} />
                  <Typography variant="b2">September 16, 2026</Typography>
                </div>

                {/* Blog Article Body */}
                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                  {/* Featured Snippet Box */}
                  <div className="bg-slate-50 border-l-4 border-[#1e3a8a] p-4 rounded-r-lg">
                    <p className="text-gray-700 italic m-0">
                      To get a{" "}
                      <NextLink
                        href="https://moneykingfinancial.com/services/loan/secured/machinery"
                        className="text-blue-600 font-semibold hover:underline"
                      >
                        machinery loan in Noida
                      </NextLink>
                      , manufacturing units and MSMEs can apply online by submitting business registration proof, financial statements, and a proforma invoice of the equipment. Financial institutions offer equipment financing up to 80%–90% of the machinery cost with flexible repayment tenures of 12 to 84 months, competitive interest rates, and paperless digital processing.
                    </p>
                  </div>

                  <p>
                    Noida and Greater Noida have emerged as major manufacturing, industrial, and technology hubs in North India. From manufacturing units and textile factories to electronics, auto components, and packaging industries, businesses require high-performance, automated machinery to scale operations and meet market demand.
                  </p>

                  <p>
                    Acquiring modern machinery or upgrading existing plant equipment requires significant capital expenditure. A{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/loan/secured/machinery"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      machinery loan in Noida
                    </NextLink>{" "}
                    allows business owners to purchase advanced equipment without draining their operational cash flow or working capital.
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Key Benefits of Equipment Financing in Noida
                  </h2>
                  <p>
                    A specialized{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/loan/secured/machinery"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      machinery loan
                    </NextLink>{" "}
                    provides structured capital tailored to industrial requirements:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>High-Value Capital Funding:</strong> Get financing up to 80% to 90% of the total machinery invoice value.
                    </li>
                    <li>
                      <strong>Preserve Operational Cash Flow:</strong> Avoid heavy upfront capital spending by spreading equipment costs into manageable monthly EMIs.
                    </li>
                    <li>
                      <strong>Flexible Repayment Options:</strong> Choose customized tenure options ranging from 12 to 84 months tailored to your cash cycle.
                    </li>
                    <li>
                      <strong>Collateral-Free Options:</strong> Many government schemes (like CGTMSE) and NBFCs offer unsecured machinery loans for eligible MSMEs.
                    </li>
                    <li>
                      <strong>Tax Benefits:</strong> Claim tax deductions on the interest paid and annual depreciation on the purchased machinery under the Income Tax Act.
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Eligible Business Types for Machinery Loans
                  </h2>
                  <p>
                    Machinery financing is available for a wide variety of industrial and commercial entities across Noida:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Manufacturing Units:</strong> CNC machines, packaging systems, textile machinery, and plastic molding units.
                    </li>
                    <li>
                      <strong>MSMEs &amp; Small Enterprises:</strong> Food processing equipment, printing presses, and small-scale manufacturing units.
                    </li>
                    <li>
                      <strong>Healthcare &amp; Diagnostics:</strong> Advanced medical diagnostic equipment, imaging systems, and lab tools.
                    </li>
                    <li>
                      <strong>Construction &amp; Earthmoving:</strong> Excavators, cranes, concrete mixers, and heavy transport equipment.
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Key Eligibility Criteria
                  </h2>
                  <p>
                    To secure fast approval, applicants should meet the following standard criteria:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Business Vintage:</strong> Minimum 2 to 3 years of continuous business operations.
                    </li>
                    <li>
                      <strong>Annual Turnover:</strong> Stable annual revenue as required by the specific lender.
                    </li>
                    <li>
                      <strong>Credit Score:</strong> A CIBIL/CMR score of 700+ for the business and promoters.
                    </li>
                    <li>
                      <strong>Profitability:</strong> Positive net worth and profitable track record for the last 2 financial years.
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Required Documents for Machinery Loan Application
                  </h2>
                  <p>Keep the following digital copies ready for smooth processing:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>KYC Documents:</strong> Aadhaar Card, PAN Card, and Voter ID of the business owners/partners.
                    </li>
                    <li>
                      <strong>Business Proof:</strong> GST Registration Certificate, Udyam Aadhaar, MSME certificate, or Factory License in Noida.
                    </li>
                    <li>
                      <strong>Financial Statements:</strong> Last 2 years&apos; audited Balance Sheets, Profit &amp; Loss accounts, and Income Tax Returns (ITR).
                    </li>
                    <li>
                      <strong>Bank Statements:</strong> Latest 6 to 12 months&apos; primary business bank account statements.
                    </li>
                    <li>
                      <strong>Proforma Invoice:</strong> Official quote/proforma invoice of the machinery from the authorized seller or manufacturer.
                    </li>
                  </ul>

                  {/* FAQ Section */}
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                    <h2 className="text-[#1e3a8a] text-xl font-bold mb-4 flex items-center gap-2">
                      <HelpCircle size={20} /> Frequently Asked Questions (FAQ)
                    </h2>
                    <ul className="space-y-4">
                      <li>
                        <strong>Q1: What percentage of the machinery cost can be financed?</strong>
                        <br />
                        Lenders typically finance between 80% and 90% of the total machinery invoice value (excluding taxes/shipping, depending on lender terms). The remaining 10% to 20% is paid as a margin down payment by the borrower.
                      </li>
                      <li>
                        <strong>Q2: Can I buy imported machinery with an equipment loan?</strong>
                        <br />
                        Yes, equipment loans cover both indigenous (locally manufactured) and imported machinery, including custom clearance and freight costs in select financing structures.
                      </li>
                      <li>
                        <strong>Q3: Is collateral mandatory for a machinery loan in Noida?</strong>
                        <br />
                        Not always. In many cases, the purchased machinery itself acts as primary collateral (hypothecation). Additionally, MSMEs can access collateral-free equipment financing through credit guarantee schemes like CGTMSE.
                      </li>
                      <li>
                        <strong>Q4: How fast is a machinery loan disbursed?</strong>
                        <br />
                        Upon submitting complete financial documents and the proforma invoice, digital approval and disbursal take approximately 3 to 7 business days. Check your eligibility and apply on our{" "}
                        <NextLink
                          href="https://moneykingfinancial.com/services/loan/secured/machinery"
                          className="text-blue-600 font-bold hover:underline"
                        >
                          machinery loan portal
                        </NextLink>{" "}
                        to fast-track your industrial financing.
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
                    Upgrade Your Industrial Equipment with Fast Machinery Loans!
                  </Typography>
                  <Typography variant="b2" className="text-gray-300 mb-6 block">
                    Finance up to 90% of equipment costs with competitive interest rates and flexible tenures through Money King Financial Services.
                  </Typography>

                  <NextLink
                    href="https://moneykingfinancial.com/services/loan/secured/machinery"
                    className="inline-block bg-red-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-red-700 transition-colors"
                  >
                    Apply for Machinery Loan
                  </NextLink>
                </div>

                {/* Social Share Section */}
                <div className="mt-8 border-t pt-6">
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