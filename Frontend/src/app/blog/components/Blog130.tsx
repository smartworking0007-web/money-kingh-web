"use client";

import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

interface DocumentCategoryItem {
  type: string;
  proofs: string;
  notes: string;
}

interface RiskFactorItem {
  category: string;
  additionalDocs: string;
  riskFactors: string;
}

export const Blog130: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Inputs for interactive calculator simulation
  const [loanAmount, setLoanAmount] = useState<number>(5000000);
  const [interestRate, setInterestRate] = useState<number>(9.5);
  const [tenureYears, setTenureYears] = useState<number>(15);

  // EMI Calculations
  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = tenureYears * 12;
  const emi =
    monthlyRate > 0
      ? Math.round(
          (loanAmount *
            monthlyRate *
            Math.pow(1 + monthlyRate, totalMonths)) /
            (Math.pow(1 + monthlyRate, totalMonths) - 1)
        )
      : Math.round(loanAmount / totalMonths);

  const totalPayment = emi * totalMonths;
  const totalInterest = totalPayment - loanAmount;

  const kycDocs: DocumentCategoryItem[] = [
    {
      type: "Proof of Identity (PoI)",
      proofs: "PAN Card (Mandatory), Aadhaar Card, Passport, Voter ID, Driving License",
      notes: "Name spellings across PAN and property deeds must match exactly.",
    },
    {
      type: "Proof of Address (PoA)",
      proofs: "Aadhaar Card, Utility Bills (Electricity/Gas/Water < 3 months old), Passport, Registered Rent Agreement",
      notes: "Must reflect the current residential address where field verification will occur.",
    },
    {
      type: "Proof of Age",
      proofs: "Birth Certificate, PAN Card, Passport, School Leaving Certificate",
      notes: "Used to calculate maximum loan tenure based on retirement age (60–70 years).",
    },
    {
      type: "Passport Photos",
      proofs: "4 to 6 recent passport-sized color photographs",
      notes: "Signed across by applicants during document submission.",
    },
    {
      type: "Signature Proof",
      proofs: "Bank Verification Letter, Passport, PAN Card, Driving License",
      notes: "Must match the signature on loan application forms and title agreements.",
    },
  ];

  const propertyCategoryDocs: RiskFactorItem[] = [
    {
      category: "Residential Property (Flat / Bungalow)",
      additionalDocs: "Approved building map, OC/CC, Allotment Letter, Share Certificate, Latest Maintenance Bills",
      riskFactors: "Setback violations, unapproved extra floor construction, or unregistered family partition.",
    },
    {
      category: "Commercial Property (Office / Shop)",
      additionalDocs: "Commercial Trade License, Fire Department NOC, Rent Agreements (if tenanted), Shop Sanction Plan",
      riskFactors: "Leasehold vs freehold status, tenant eviction clauses, and zoning compliance.",
    },
    {
      category: "Industrial Property (Factory / Warehouse)",
      additionalDocs: "Industrial Layout Plan, Pollution Control Board (PCB) Consent to Operate, Factory License, Electricity Load Sanction",
      riskFactors: "Environmental clearance issues, industrial park lease covenants, and agricultural land conversion status.",
    },
    {
      category: "Plot / Land",
      additionalDocs: "Non-Agricultural (NA) Conversion Order, Land Revenue Receipts, Boundary Demarcation Certificate",
      riskFactors: "Encroachment risks, clear fencing, and access road width verification.",
    },
  ];

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(false);
  };

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-full flex justify-center px-4"
        >
          <BlogCard1
            title="Complete LAP Loan Document List: The Definitive Guide to Sanction-Ready Documentation for Loan Against Property"
            category="LAP LOAN"
            author="Kishan Baranwal"
            date="November 6, 2026"
            image="/images/blog/Blog-130.jpeg"
          />
        </div>
      ) : (
        <div className="fixed inset-0 z-40 bg-white overflow-y-auto pt-20 md:pt-28 no-scrollbar animate-in fade-in duration-300 text-left">
          <div className="relative max-w-5xl mx-auto pb-20 px-4 md:px-6">
            {/* Back Button */}
            <button
              onClick={handleClose}
              className="flex items-center mb-6 text-gray-500 hover:text-[#1e3a8a] transition-colors gap-1 cursor-pointer"
              type="button"
            >
              <ArrowLeft size={14} />
              <Typography variant="caption" className="font-bold uppercase">
                Back to Blogs
              </Typography>
            </button>

            {/* Main Blog Container */}
            <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
              {/* Professional Image Preview Section */}
              <div className="w-full flex justify-center bg-slate-50 py-4 px-4 border-b border-gray-100">
                <div className="relative w-full max-w-3xl aspect-[16/9] rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/images/blog/Blog-130.jpeg"
                    alt="lap loan documents"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="px-5 py-8 md:px-12 md:py-14">
                <Typography
                  variant="h5"
                  className="text-[#1e3a8a] uppercase text-2xl md:text-4xl mb-4 font-bold"
                >
                  <NextLink
                    href="https://moneykingfinancial.com/services/loan/secured/property"
                    className="text-[#1e3a8a] hover:underline"
                  >
                    LAP Loan Document List
                  </NextLink>
                  : Complete Checklist &amp; Guide for Sanction-Ready Approval
                </Typography>

                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                  <Clock size={16} />
                  <Typography variant="b2">November 6, 2026</Typography>
                  <span className="mx-2">•</span>
                  <Typography variant="b2">By Kishan Baranwal</Typography>
                </div>

                {/* Blog Article Body */}
                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                  {/* Featured Snippet Box */}
                  <div className="bg-slate-50 border-l-4 border-[#1e3a8a] p-4 rounded-r-lg">
                    <p className="text-gray-700 italic m-0">
                      Planning to apply for a Loan Against Property (LAP)? Having a clear and complete{" "}
                      <NextLink
                        href="https://moneykingfinancial.com/services/loan/secured/property"
                        className="text-[#1e3a8a] font-semibold hover:underline"
                      >
                        LAP loan document list
                      </NextLink>{" "}
                      is essential for fast approval. Whether you are salaried, self-employed, or managing a business entity, organizing your KYC, income proofs, and property title deeds prevents unexpected holds and ensures hassle-free disbursal.
                    </p>
                  </div>

                  <p>
                    Securing high-value capital for expanding a business, funding higher education abroad, consolidating debt, or managing major life events often requires leverage beyond unsecured personal or business loans. A Loan Against Property (LAP)—commonly known as a mortgage loan—is one of the most cost-effective financial instruments available in India.
                  </p>

                  <p>
                    Because LAP involves pledging real estate assets worth lakhs or crores of rupees, financial institutions enforce rigorous underwriting processes. This comprehensive guide by <strong>Money King Financial Services</strong> details the ultimate checklist of documents required for Loan Against Property across all borrower profiles.
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    1. What is a Loan Against Property (LAP) and How Does Documentation Work?
                  </h2>
                  <p>
                    A Loan Against Property (LAP) is a secured loan where a borrower pledges residential property (flat, house, bungalow), commercial property (office space, retail shop, showroom), or industrial property (factory plot, warehouse) as collateral to a bank or Non-Banking Financial Company (NBFC).
                  </p>

                  <div className="bg-slate-100 p-5 rounded-lg border border-slate-200 text-xs md:text-sm font-mono text-slate-800 space-y-2 my-4">
                    <p className="font-bold text-center border-b pb-2">
                      LAP UNDERWRITING TRIANGLE
                    </p>
                    <div className="flex flex-col md:flex-row justify-between text-center gap-2 pt-2">
                      <div className="p-2 bg-white rounded border border-slate-200 flex-1">
                        <span className="font-bold text-[#1e3a8a] block">1. KYC PROOFS</span>
                        Identity &amp; Address Stability
                      </div>
                      <div className="p-2 bg-white rounded border border-slate-200 flex-1">
                        <span className="font-bold text-[#1e3a8a] block">2. FINANCIAL PROOFS</span>
                        Repayment Capacity &amp; FOIR
                      </div>
                      <div className="p-2 bg-white rounded border border-slate-200 flex-1">
                        <span className="font-bold text-[#1e3a8a] block">3. PROPERTY TITLE DEEDS</span>
                        Asset Value &amp; Legal Title
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-800 pt-2">
                    The Three Pillars of LAP Documentation
                  </h3>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>
                      <strong>Borrower Identity &amp; KYC:</strong> Establishing the legal identity, residential stability, and age of all applicants and co-applicants.
                    </li>
                    <li>
                      <strong>Financial Capacity &amp; Income Documentation:</strong> Assessing Net Monthly Income (NMI), Fixed Obligation to Income Ratio (FOIR), cash flow stability, and tax compliance.
                    </li>
                    <li>
                      <strong>Property Legal &amp; Technical Documentation:</strong> Verifying clear, marketable, and unencumbered title ownership of the pledged collateral.
                    </li>
                  </ol>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    2. Interactive LAP EMI &amp; Amortization Calculator
                  </h2>
                  <p>
                    Estimate your monthly EMI payouts and interest obligations using our interactive calculator before submitting your document dossier:
                  </p>

                  {/* Calculator UI */}
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 my-6 space-y-6">
                    <h3 className="text-lg font-bold text-[#1e3a8a] m-0">
                      LAP EMI Calculator Simulator
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase text-gray-600 mb-2">
                          Loan Amount (₹): {loanAmount.toLocaleString("en-IN")}
                        </label>
                        <input
                          type="range"
                          min="1000000"
                          max="50000000"
                          step="500000"
                          value={loanAmount}
                          onChange={(e) => setLoanAmount(Number(e.target.value))}
                          className="w-full accent-[#1e3a8a] cursor-pointer"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase text-gray-600 mb-2">
                          Interest Rate (% p.a.): {interestRate}%
                        </label>
                        <input
                          type="range"
                          min="8"
                          max="16"
                          step="0.25"
                          value={interestRate}
                          onChange={(e) => setInterestRate(Number(e.target.value))}
                          className="w-full accent-[#1e3a8a] cursor-pointer"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase text-gray-600 mb-2">
                          Loan Tenure (Years): {tenureYears} Years
                        </label>
                        <input
                          type="range"
                          min="5"
                          max="20"
                          step="1"
                          value={tenureYears}
                          onChange={(e) => setTenureYears(Number(e.target.value))}
                          className="w-full accent-[#1e3a8a] cursor-pointer"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-200 text-center">
                      <div className="bg-white p-4 rounded-xl border border-slate-200">
                        <span className="text-xs text-gray-500 uppercase block font-medium">
                          Estimated Monthly EMI
                        </span>
                        <span className="text-xl font-extrabold text-[#1e3a8a]">
                          ₹{emi.toLocaleString("en-IN")}
                        </span>
                      </div>
                      <div className="bg-white p-4 rounded-xl border border-slate-200">
                        <span className="text-xs text-gray-500 uppercase block font-medium">
                          Total Interest Payable
                        </span>
                        <span className="text-xl font-extrabold text-amber-600">
                          ₹{totalInterest.toLocaleString("en-IN")}
                        </span>
                      </div>
                      <div className="bg-white p-4 rounded-xl border border-slate-200">
                        <span className="text-xs text-gray-500 uppercase block font-medium">
                          Total Payment (P + I)
                        </span>
                        <span className="text-xl font-extrabold text-slate-800">
                          ₹{totalPayment.toLocaleString("en-IN")}
                        </span>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    3. Core KYC &amp; Identity Document Checklist (Mandatory for All Applicants)
                  </h2>
                  <div className="overflow-x-auto my-4">
                    <table className="w-full border-collapse border border-gray-200 text-left text-sm">
                      <thead className="bg-slate-100 text-gray-800">
                        <tr>
                          <th className="border border-gray-200 p-3">Document Type</th>
                          <th className="border border-gray-200 p-3">Acceptable Proofs</th>
                          <th className="border border-gray-200 p-3">Key Verification Notes</th>
                        </tr>
                      </thead>
                      <tbody>
                        {kycDocs.map((item: DocumentCategoryItem, index: number) => (
                          <tr key={index}>
                            <td className="border border-gray-200 p-3 font-semibold">
                              {item.type}
                            </td>
                            <td className="border border-gray-200 p-3">{item.proofs}</td>
                            <td className="border border-gray-200 p-3">{item.notes}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    4. Income Document Checklist: Salaried vs. Self-Employed Applicants
                  </h2>

                  <h3 className="text-lg font-bold text-gray-800 pt-2">
                    A. Document List for Salaried Employees
                  </h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Salary Slips:</strong> Original or digitally signed slips for the last 3 to 6 consecutive months.</li>
                    <li><strong>Form 16 &amp; Tax Returns:</strong> Form 16 (Part A &amp; B) or ITR for the last 2 financial years.</li>
                    <li><strong>Bank Statements:</strong> Salary account statements for the last 6 to 12 months.</li>
                    <li><strong>Employment Continuity Proof:</strong> Appointment letter, offer letter, or HR credentials.</li>
                    <li><strong>Existing Loan Track Record:</strong> Sanction letters and Repayment Track Records (RTR) for active loans.</li>
                  </ul>

                  <h3 className="text-lg font-bold text-gray-800 pt-2">
                    B. Document List for Self-Employed Individuals &amp; Sole Proprietorships
                  </h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Income Tax Returns (ITR):</strong> Computation sheet and ITR acknowledgements for the last 3 assessment years.</li>
                    <li><strong>Audited Financial Statements:</strong> P&amp;L Account, Balance Sheet, and Audit Reports (CA certified with valid UDIN).</li>
                    <li><strong>Bank Statements:</strong> Current and savings account statements for the last 12 consecutive months.</li>
                    <li><strong>Business Registration:</strong> GST Certificate (Form REG-06), MSME/Udyam, Shop &amp; Establishment License.</li>
                    <li><strong>Client Contracts &amp; Invoices:</strong> Active work orders or supply retainers showing business volume.</li>
                  </ul>

                  <h3 className="text-lg font-bold text-gray-800 pt-2">
                    C. Document List for Partnership Firms &amp; Private Limited Companies
                  </h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Constitutional Documents:</strong> Partnership Deed, MoA/AoA, and Certificate of Incorporation.</li>
                    <li><strong>Board Resolutions:</strong> Formal resolution authorizing property mortgage and nominating signatories.</li>
                    <li><strong>Shareholding Pattern:</strong> CS/CA certified shareholding breakdown showing Ultimate Beneficial Owners (UBO).</li>
                    <li><strong>Corporate Financials:</strong> Audited 3-year financials along with Tax Audit Report (Form 3CD).</li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    5. Property Legal &amp; Technical Document Checklist (The Collateral Layer)
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Registered Sale Deed / Conveyance Deed:</strong> Primary ownership deed registered with the Sub-Registrar.</li>
                    <li><strong>Mother Deed / Parent Title Deeds:</strong> Historical chain deeds tracing ownership transfer over the last 13 to 30 years.</li>
                    <li><strong>Mutation Certificate (Khata / Patta):</strong> Local revenue record updating owner title in tax registries.</li>
                    <li><strong>Sanctioned Building Plan &amp; OC/CC:</strong> Approved municipal map and Occupancy/Completion Certificate.</li>
                    <li><strong>Encumbrance Certificate (EC):</strong> Form 15 &amp; 16 verifying zero prior mortgages or legal disputes for 13–30 years.</li>
                    <li><strong>Property Tax Receipts &amp; NOC:</strong> Up-to-date paid tax receipts and Society/Authority NOC permitting mortgage creation.</li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    6. Document Checklist Based on Property Type
                  </h2>
                  <div className="overflow-x-auto my-4">
                    <table className="w-full border-collapse border border-gray-200 text-left text-sm">
                      <thead className="bg-slate-100 text-gray-800">
                        <tr>
                          <th className="border border-gray-200 p-3">Property Category</th>
                          <th className="border border-gray-200 p-3">Specific Additional Documents Required</th>
                          <th className="border border-gray-200 p-3">Technical &amp; Legal Risk Factors</th>
                        </tr>
                      </thead>
                      <tbody>
                        {propertyCategoryDocs.map((item: RiskFactorItem, index: number) => (
                          <tr key={index}>
                            <td className="border border-gray-200 p-3 font-semibold">
                              {item.category}
                            </td>
                            <td className="border border-gray-200 p-3">{item.additionalDocs}</td>
                            <td className="border border-gray-200 p-3">{item.riskFactors}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    7. Master Summary Table: The Ultimate LAP Document Checklist
                  </h2>
                  <div className="bg-slate-100 p-5 rounded-lg border border-slate-200 text-xs md:text-sm font-mono text-slate-800 space-y-2 my-4">
                    <p className="font-bold text-center border-b pb-2">MASTER LAP DOCUMENT CHECKLIST</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-2">
                      <p>1. Filled &amp; Signed Application Form</p>
                      <p>2. PAN Card (Self-attested copy)</p>
                      <p>3. Aadhaar / Passport (KYC Proofs)</p>
                      <p>4. Bank Statements (6-12 Months)</p>
                      <p>5. Salary Slips / 3 Yrs Audited ITRs</p>
                      <p>6. Business &amp; GST Certificates</p>
                      <p>7. Original Sale / Conveyance Deed</p>
                      <p>8. Chain Title Deeds (13-30 Years)</p>
                      <p>9. Sanctioned Map &amp; OC/CC Copy</p>
                      <p>10. Encumbrance Certificate (EC)</p>
                      <p>11. Paid Property Tax Receipts</p>
                      <p>12. Society / Builder Mortgage NOC</p>
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    8. Common Reasons LAP Documents Get Rejected (And How to Avoid Them)
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Name Discrepancies:</strong> Variations across PAN, Aadhaar, and Sale Deeds cause immediate holds. Attach formal affidavits for minor spelling differences.</li>
                    <li><strong>Missing Chain Deeds:</strong> Missing intermediate Gift Deeds or Wills halts legal title clearance.</li>
                    <li><strong>Unapproved Construction:</strong> Physical construction exceeding municipal sanctioned limits triggers valuation cuts.</li>
                    <li><strong>Outstanding Dues:</strong> Pending property taxes or unpaid society maintenance flags risk during field inspection.</li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    9. Step-by-Step Roadmap: From Document Submission to Loan Disbursal
                  </h2>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li><strong>File Login &amp; KYC Verification:</strong> Initial desktop validation of income credentials and CIBIL credit scores.</li>
                    <li><strong>Technical Property Valuation:</strong> Site visit by an empaneled valuer to assess market valuation and structure.</li>
                    <li><strong>Legal Title Search (TIR):</strong> In-depth advocate search at the Sub-Registrar office to verify genuine ownership.</li>
                    <li><strong>Credit Sanction:</strong> Issuance of formal Sanction Letter detailing loan amount, rate, and conditions.</li>
                    <li><strong>Mortgage Execution &amp; Title Deposit:</strong> Deposit of original title deeds to create Equitable/Registered Mortgage.</li>
                    <li><strong>Final Disbursal:</strong> Transfer of sanctioned capital directly to your bank account via RTGS/NEFT.</li>
                  </ol>

                  {/* FAQ Section */}
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                    <h2 className="text-[#1e3a8a] text-xl font-bold mb-4 flex items-center gap-2">
                      <HelpCircle size={20} /> Frequently Asked Questions (FAQ)
                    </h2>
                    <ul className="space-y-4 text-sm leading-relaxed">
                      <li>
                        <strong>Q1: Can I get a Loan Against Property if original title deeds are missing?</strong>
                        <br />
                        Ans: Financial institutions strictly require original title deeds. If lost, you must file an FIR, publish notices in two local newspapers, obtain certified true copies from the Sub-Registrar office, and execute an Indemnity Bond. Approval remains subject to lender discretion.
                      </li>
                      <li>
                        <strong>Q2: Can residential property be mortgaged for commercial business expansion?</strong>
                        <br />
                        Ans: Yes! You can pledge self-occupied or rented residential property to fund commercial expansion, working capital, or personal financial requirements.
                      </li>
                      <li>
                        <strong>Q3: Is a co-owner of the property mandatory as a co-applicant on the loan?</strong>
                        <br />
                        Ans: Yes. All legal co-owners of the pledged property must join as co-applicants on the loan application.
                      </li>
                      <li>
                        <strong>Q4: How long does it take to process a Loan Against Property?</strong>
                        <br />
                        Ans: Standard LAP processing takes 7 to 14 working days from the date complete, error-free documentation is submitted.
                      </li>
                      <li>
                        <strong>Q5: What is the difference between Equitable Mortgage and Registered Mortgage?</strong>
                        <br />
                        Ans: An Equitable Mortgage involves depositing original deeds with minimal stamp duty. A Registered Mortgage is formally registered with the Sub-Registrar, incurring state-specific stamp duty and registration fees.
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
                    Apply For Loan Against Property Today
                  </Typography>
                  <Typography variant="b2" className="text-gray-300 mb-6 block">
                    Get seamless document verification and lowest interest rates with{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/loan/secured/property"
                      className="text-blue-400 hover:underline"
                    >
                      Money King Financial Services
                    </NextLink>{" "}
                    now.
                  </Typography>

                  <div className="flex flex-wrap gap-4 mt-2">
                    <NextLink
                      href="https://moneykingfinancial.com/services/loan/secured/property"
                      className="inline-block bg-blue-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-700 transition"
                    >
                      Verify Documents &amp; Apply Now
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

export default Blog130;