"use client";

import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export const Blog99: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-full flex justify-center px-4"
        >
          <BlogCard1
            title="Secured Business Loan Rates in India: Lowest Interest Rates, Collateral Types & Comparison Guide"
            category="LOANS"
            author="Sumit Mishra"
            date="September 9, 2026"
            image="/images/blog/blog-99.jpeg"
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
                  src="/images/blog/blog-99.jpeg"
                  alt="SECURED LOAN INTEREST RATE"
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
                  Secured Business Loan Rates in India: Lowest Interest Rates, Collateral Types &amp; Comparison Guide
                </Typography>

                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                  <Clock size={16} />
                  <Typography variant="b2">September 9, 2026</Typography>
                </div>

                {/* Blog Article Body */}
                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                  {/* Featured Snippet Box */}
                  <div className="bg-slate-50 border-l-4 border-[#1e3a8a] p-4 rounded-r-lg">
                    <p className="text-gray-700 italic m-0">
                      Secured business loan rates in India currently range from 8.40% to 16.00% per annum, depending on the type of pledged collateral, the borrower&apos;s CIBIL score, and the lending institution. Because secured loans are backed by tangible assets such as commercial property, industrial land, heavy machinery, or liquid financial deposits, they carry significantly lower interest rates and longer repayment tenures (up to 15–20 years) compared to collateral-free{" "}
                      <NextLink
                        href="https://moneykingfinancial.com/services/loan/unsecured/business"
                        className="text-blue-600 font-semibold hover:underline"
                      >
                        business loans
                      </NextLink>
                      . Top public and private sector banks offer the most competitive rates to businesses maintaining a clean financial track record and a high Debt Service Coverage Ratio (DSCR).
                    </p>
                  </div>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Comprehensive Guide to Secured Business Loan Rates in India
                  </h2>
                  <p>
                    Expanding an enterprise, acquiring industrial machinery, or funding long-term capital expenditure requires substantial capital. When financing requirements run into millions or tens of millions of rupees, relying solely on collateral-free{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/loan/unsecured/business"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      business loans
                    </NextLink>{" "}
                    often leads to higher interest expenses and tighter repayment windows. This is where secured business loans become the strategic financing tool of choice for Indian business owners, MSMEs, and corporate firms.
                  </p>
                  <p>
                    By offering a tangible business or personal asset as security to the lender, you significantly mitigate the risk for banks and Non-Banking Financial Companies (NBFCs). In return, financial institutions reward borrowers with single-digit or low double-digit interest rates, larger loan quantum, and manageable EMI schedules.
                  </p>
                  <p>
                    This detailed guide breaks down current secured business loan interest rates across top Indian lenders, explores how collateral choices impact your pricing, details mandatory documentation, and outlines actionable steps to lock in the lowest interest rate for your business.
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Current Secured Business Loan Interest Rates in India
                  </h2>
                  <p>
                    Interest rates for secured credit vary according to the nature of the institution—public sector banks, private sector banks, or NBFCs. Below is a comparative snapshot of published rate structures across leading Indian lenders.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-200">
                      <thead>
                        <tr className="bg-gray-100 text-left">
                          <th className="border p-2">Bank / Financial Institution</th>
                          <th className="border p-2">Category</th>
                          <th className="border p-2">Expected Interest Rate Range (p.a.)</th>
                          <th className="border p-2">Processing Fee</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-2 font-bold">State Bank of India (SBI)</td>
                          <td className="border p-2">Public Sector Bank</td>
                          <td className="border p-2 font-semibold text-green-600">8.40% – 10.75%</td>
                          <td className="border p-2">0.35% to 1.00% + GST</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">Bank of Baroda</td>
                          <td className="border p-2">Public Sector Bank</td>
                          <td className="border p-2 font-semibold text-green-600">8.50% – 11.00%</td>
                          <td className="border p-2">Up to 0.75% + GST</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">HDFC Bank</td>
                          <td className="border p-2">Private Sector Bank</td>
                          <td className="border p-2 font-semibold text-green-600">9.25% – 13.50%</td>
                          <td className="border p-2">Up to 1.50% + GST</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">ICICI Bank</td>
                          <td className="border p-2">Private Sector Bank</td>
                          <td className="border p-2 font-semibold text-green-600">9.50% – 13.75%</td>
                          <td className="border p-2">0.50% to 2.00% + GST</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">Axis Bank</td>
                          <td className="border p-2">Private Sector Bank</td>
                          <td className="border p-2 font-semibold text-green-600">9.40% – 14.00%</td>
                          <td className="border p-2">Up to 1.50% + GST</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">Kotak Mahindra Bank</td>
                          <td className="border p-2">Private Sector Bank</td>
                          <td className="border p-2 font-semibold text-green-600">9.75% – 14.50%</td>
                          <td className="border p-2">Up to 2.00% + GST</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">Bajaj Finserv</td>
                          <td className="border p-2">NBFC</td>
                          <td className="border p-2 font-semibold text-green-600">11.50% – 16.00%</td>
                          <td className="border p-2">Up to 2.50% + GST</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">Tata Capital</td>
                          <td className="border p-2">NBFC</td>
                          <td className="border p-2 font-semibold text-green-600">11.00% – 15.50%</td>
                          <td className="border p-2">1.00% to 2.00% + GST</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    How Collateral Types Impact Secured Loan Interest Rates
                  </h2>
                  <p>
                    The nature, market liquidity, and physical condition of the asset pledged as security play a central role in determining your final interest rate and Loan-to-Value (LTV) ratio.
                  </p>

                  <div className="bg-slate-50 p-5 rounded-xl border border-gray-200 text-center">
                    <Typography variant="b2" className="font-bold text-[#1e3a8a] mb-4 uppercase">
                      Collateral Categories &amp; Typical Rates
                    </Typography>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                      <div className="p-3 bg-white rounded-lg border border-gray-200">
                        <div className="font-bold text-gray-800">Liquid Financial</div>
                        <div className="text-xs text-gray-500">(FDs, Govt Bonds, Gold)</div>
                        <div className="text-green-600 font-semibold text-sm mt-1">Rate: 8.00% - 9.50% p.a.</div>
                      </div>
                      <div className="p-3 bg-white rounded-lg border border-gray-200">
                        <div className="font-bold text-gray-800">Real Estate Assets</div>
                        <div className="text-xs text-gray-500">(Commercial / Residential)</div>
                        <div className="text-green-600 font-semibold text-sm mt-1">Rate: 8.50% - 13.00% p.a.</div>
                      </div>
                      <div className="p-3 bg-white rounded-lg border border-gray-200">
                        <div className="font-bold text-gray-800">Plant &amp; Machinery</div>
                        <div className="text-xs text-gray-500">(Industrial Equipment, Tools)</div>
                        <div className="text-green-600 font-semibold text-sm mt-1">Rate: 10.00% - 14.50% p.a.</div>
                      </div>
                      <div className="p-3 bg-white rounded-lg border border-gray-200">
                        <div className="font-bold text-gray-800">Commercial Vehicles</div>
                        <div className="text-xs text-gray-500">(Trucks, Logistics Fleets)</div>
                        <div className="text-green-600 font-semibold text-sm mt-1">Rate: 9.50% - 15.00% p.a.</div>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-800 pt-2">
                    1. Loan Against Commercial or Residential Property (LAP)
                  </h3>
                  <p>
                    Pledging factory land, office buildings, retail space, or personal residential property represents the most common route for high-value business financing.
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Interest Rates:</strong> 8.50% – 13.00% p.a.</li>
                    <li><strong>LTV Ratio:</strong> 50% to 75% of the property’s current market value as per independent bank valuation.</li>
                    <li><strong>Tenure:</strong> Up to 15 to 20 years.</li>
                  </ul>

                  <h3 className="text-lg font-bold text-gray-800 pt-2">
                    2. Machinery Loan and Equipment Financing
                  </h3>
                  <p>
                    When a business requires funding specifically to buy new plant machinery, print presses, medical equipment, or CNC units, the asset being purchased is hypothecated to the bank.
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Interest Rates:</strong> 10.00% – 14.50% p.a.</li>
                    <li><strong>LTV Ratio:</strong> 70% to 85% of the equipment quotation/invoice value.</li>
                    <li><strong>Tenure:</strong> 3 to 7 years (aligned with asset depreciation cycles).</li>
                  </ul>

                  <h3 className="text-lg font-bold text-gray-800 pt-2">
                    3. Loan Against Fixed Deposits &amp; Liquid Securities
                  </h3>
                  <p>
                    Businesses holding company FDs, sovereign gold bonds, mutual funds, or LIC policies can leverage them for instant credit lines without breaking their investments.
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Interest Rates:</strong> Usually 1.00% to 2.00% above the underlying deposit rate (effective 8.00% – 9.50% p.a.).</li>
                    <li><strong>LTV Ratio:</strong> Up to 85% – 90% of the surrender or face value.</li>
                    <li><strong>Tenure:</strong> Flexible, mapped directly to the maturity of the underlying financial instrument.</li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Secured vs. Unsecured Business Loans: A Detailed Comparison
                  </h2>
                  <p>
                    Understanding the structural differences between secured and{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/loan/unsecured/business"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      unsecured business loans
                    </NextLink>{" "}
                    helps clarify why secured credit offers substantially lower overall capital costs.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-200">
                      <thead>
                        <tr className="bg-gray-100 text-left">
                          <th className="border p-2">Comparison Parameter</th>
                          <th className="border p-2">Secured Loan</th>
                          <th className="border p-2">
                            Unsecured{" "}
                            <NextLink
                              href="https://moneykingfinancial.com/services/loan/unsecured/business"
                              className="text-blue-600 font-semibold hover:underline"
                            >
                              Business Loan
                            </NextLink>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-2 font-bold">Interest Rate Range</td>
                          <td className="border p-2 font-semibold text-green-600">8.40% – 16.00% p.a.</td>
                          <td className="border p-2">13.50% – 28.00% p.a.</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">Collateral Expectation</td>
                          <td className="border p-2">Mandatory (Property, Machinery, Securities)</td>
                          <td className="border p-2 font-semibold text-green-600">Zero collateral required</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">Maximum Loan Quantum</td>
                          <td className="border p-2 font-semibold text-green-600">Up to ₹100 Crore+ (based on collateral)</td>
                          <td className="border p-2">Typically capped between ₹30 Lakh to ₹75 Lakh</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">Repayment Tenure</td>
                          <td className="border p-2 font-semibold text-green-600">Extended windows (5 to 20 years)</td>
                          <td className="border p-2">Short-to-medium term (1 to 5 years)</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">Processing &amp; Turnaround</td>
                          <td className="border p-2">7 to 15 working days (due to legal verification)</td>
                          <td className="border p-2 font-semibold text-green-600">24 to 72 hours (digital document checks)</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">Risk to Borrower</td>
                          <td className="border p-2">Default can lead to legal asset liquidation</td>
                          <td className="border p-2">Default causes severe CIBIL damage &amp; recovery suits</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Key Factors That Influence Your Secured Loan Interest Rate
                  </h2>
                  <p>
                    While collateral eliminates primary credit risk for lenders, banks still evaluate several financial and operational parameters before issuing a formal sanction letter.
                  </p>

                  <h3 className="text-lg font-bold text-gray-800 pt-2">
                    1. CIBIL Score &amp; Personal/Corporate Credit History
                  </h3>
                  <p>
                    Even with prime real estate as collateral, lenders evaluate the promoter&apos;s individual CIBIL score and the company&apos;s Commercial CIBIL Rank (CMR). A CIBIL score above 750 or a CMR score between CMR-1 and CMR-3 signals low default probability, commanding the lowest interest rate tier. Prior delays, write-offs, or frequent loan inquiries push rates up by 150 to 300 basis points.
                  </p>

                  <h3 className="text-lg font-bold text-gray-800 pt-2">
                    2. Debt Service Coverage Ratio (DSCR)
                  </h3>
                  <p>
                    Lenders use the DSCR to evaluate whether your operating cash flows can comfortably service proposed monthly interest and principal obligations.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-900 font-mono text-center">
                    DSCR = Net Operating Income / Total Debt Service (Principal + Interest)
                  </div>
                  <p>
                    A healthy DSCR of 1.5 or higher gives banks confidence that repayment isn&apos;t dependent solely on collateral liquidation, unlocking lower interest margins.
                  </p>

                  <h3 className="text-lg font-bold text-gray-800 pt-2">
                    3. Business Vintage &amp; Industry Stability
                  </h3>
                  <p>
                    Enterprises operating steadily for over 3 to 5 years with audited balance sheets, consistent revenue growth, and positive net profit margins are classed as low-risk borrowers. Companies operating in cyclical or high-volatility sectors may encounter risk markups on baseline interest rates.
                  </p>

                  <h3 className="text-lg font-bold text-gray-800 pt-2">
                    4. Legal Clarity and Title of Collateral
                  </h3>
                  <p>
                    Property offered as security must carry clear, marketable, and unencumbered title deeds. Properties with ancestral ownership disputes, unapproved building plans, or environmental clearance issues will either be rejected or subjected to higher risk premiums.
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Step-by-Step Guide to Applying for a Secured Loan
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Step 1: Self-Audit &amp; Asset Valuation:</strong> Assess the market value of the property or asset you plan to pledge. Obtain municipal tax receipts, title deeds, or equipment proforma invoices.
                    </li>
                    <li>
                      <strong>Step 2: Compare Lender Quotes:</strong> Evaluate multiple public and private lenders on annual percentage rate (APR), processing fees, legal search charges, and foreclosure terms.
                    </li>
                    <li>
                      <strong>Step 3: Document Compilation:</strong> Organize organizational, financial, legal, and identity documentation into a unified submission folder.
                    </li>
                    <li>
                      <strong>Step 4: Legal &amp; Technical Verification:</strong> The bank deploys empaneled advocates and civil engineers to perform title searches, legal verification, and technical valuation of the pledged asset.
                    </li>
                    <li>
                      <strong>Step 5: Mortgage Creation &amp; Disbursal:</strong> Upon approval, execute a formal loan agreement alongside an Equitable or Registered Mortgage. Once registered, funds are disbursed directly to your business bank account.
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Required Documentation Checklist
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-200">
                      <thead>
                        <tr className="bg-gray-100 text-left">
                          <th className="border p-2">Category</th>
                          <th className="border p-2">Required Files</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-2 font-bold">Business &amp; Identity Proofs</td>
                          <td className="border p-2">
                            PAN Card of the Business Entity, Promoters, and Directors; Identity Proof (Passport / Voter ID / Aadhaar card); Business Registration (GST Certificate, Udyam Registration, Partnership Deed, or MOA/AOA)
                          </td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">Financial Documentation</td>
                          <td className="border p-2">
                            Last 3 years audited Balance Sheets and P&amp;L statements; Last 3 years ITR of business and guarantors; Last 12 months Current Account statements; Current year GST returns (GSTR-3B &amp; GSTR-1)
                          </td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">Collateral &amp; Asset Documents</td>
                          <td className="border p-2">
                            Original Title Deeds &amp; chain documents (13 to 30 years); Approved building plans; Property tax receipts; Municipal NOC; Machinery proforma invoices (for equipment financing)
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    5 Practical Tips to Secure the Lowest Interest Rate
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Maintain a High DSCR:</strong> Aim to keep your DSCR comfortably above 1.5. Clean financial statements displaying steady profit margins incentivize underwriters to offer baseline benchmark rates.
                    </li>
                    <li>
                      <strong>Opt for Floating Rates Linked to RLLR:</strong> Choose floating-rate loans benchmarked directly to the RBI Repo Rate (Repo Rate Linked Lending Rate). When the central bank cuts policy rates, rate reductions transfer directly to your loan.
                    </li>
                    <li>
                      <strong>Pledge Prime Real Estate or Liquid Assets:</strong> Commercial properties in primary urban hubs or liquid financial securities carry lower valuation discounts and lower risk margins.
                    </li>
                    <li>
                      <strong>Negotiate Processing Fees &amp; Foreclosure Charges:</strong> While floating-rate loans for MSMEs carry zero prepayment penalties under RBI guidelines, always negotiate processing fees and legal valuation charges.
                    </li>
                    <li>
                      <strong>Leverage Existing Banking Relationships:</strong> Approach your primary current account bank where daily business cash flows pass through to obtain relationship-driven rate concessions.
                    </li>
                  </ul>

                  {/* FAQ Section */}
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                    <h2 className="text-[#1e3a8a] text-xl font-bold mb-4 flex items-center gap-2">
                      <HelpCircle size={20} /> Frequently Asked Questions (FAQ)
                    </h2>
                    <ul className="space-y-4">
                      <li>
                        <strong>Q: What is the minimum interest rate for a secured business loan in India?</strong>
                        <br />
                        A: Public sector banks like SBI and Bank of Baroda offer secured business loan rates starting as low as 8.40% to 8.50% per annum, provided the borrower presents clear property collateral and a high credit rating.
                      </li>
                      <li>
                        <strong>Q: Can I get a secured business loan on residential property?</strong>
                        <br />
                        A: Yes, banks routinely accept residential property—whether self-occupied or rented out—as collateral under Loan Against Property (LAP) schemes for business expansion, provided title deeds are free of legal disputes.
                      </li>
                      <li>
                        <strong>Q: What happens if my business defaults on a secured loan?</strong>
                        <br />
                        A: If repayments stall and the account becomes a Non-Performing Asset (NPA), the lender issues formal notices under the SARFAESI Act, 2002. This grants the institution legal rights to auction the pledged asset to recover outstanding principal and interest balances.
                      </li>
                      <li>
                        <strong>Q: Are there any prepayment penalties on secured business loans?</strong>
                        <br />
                        A: According to RBI directives, individual borrowers and micro/small enterprises holding floating-rate loans are exempt from foreclosure or prepayment penalties. However, fixed-rate loans or non-MSME corporate entities may incur prepayment charges ranging between 2% and 4%.
                      </li>
                      <li>
                        <strong>Q: How much loan amount can I get against property worth ₹1 Crore?</strong>
                        <br />
                        A: Lenders typically offer a Loan-to-Value (LTV) ratio of 50% to 75% on property collateral. For a property valued independently at ₹1 Crore, you can expect a loan sanction between ₹50 Lakh and ₹75 Lakh, depending on business cash flows. If you require immediate funds without pledging property, explore collateral-free{" "}
                        <NextLink
                          href="https://moneykingfinancial.com/services/loan/unsecured/business"
                          className="text-blue-600 font-bold hover:underline"
                        >
                          business loans
                        </NextLink>{" "}
                        on our{" "}
                        <NextLink
                          href="https://moneykingfinancial.com/"
                          className="text-blue-600 font-bold hover:underline"
                        >
                          financial portal
                        </NextLink>.
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
                    Secure Low-Interest Business Funding for Your Company!
                  </Typography>
                  <Typography variant="b2" className="text-gray-300 mb-6 block">
                    Whether you are seeking high-value secured financing against property or fast collateral-free{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/loan/unsecured/business"
                      className="text-blue-400 hover:underline"
                    >
                      business loans
                    </NextLink>
                    , Money King Financial Services helps you access the lowest interest rates from top banks and NBFCs.
                  </Typography>

                  <NextLink
                    href="https://moneykingfinancial.com/services/loan/unsecured/business"
                    className="inline-block bg-red-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-red-700 transition"
                  >
                    Apply for Business Loan
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