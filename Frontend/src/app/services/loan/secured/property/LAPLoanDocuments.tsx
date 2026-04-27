"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";

const LAPLoanDocuments = () => {
  const documentsData = [
    {
      type: "Identity Proof",
      details: "Aadhaar Card, PAN Card, Passport, Voter ID, or Driving License.",
    },
    {
      type: "Address Proof",
      details: "Aadhaar Card, Utility Bills, Passport, or Rental Agreement.",
    },
    {
      type: "Income Proof (Salaried)",
      details: "Last 3–6 months salary slips, Form 16, and Bank statements (6 months).",
    },
    {
      type: "Income Proof (Self-Employed)",
      details: "ITR (2–3 years), Profit & Loss statement, Balance Sheet, and Bank statements.",
    },
    {
      type: "Property Documents",
      details: "Sale Deed, Title Deed, Property Tax Receipts, and Approved Building Plan.",
    },
    {
      type: "Bank Statements",
      details: "Last 6–12 months bank statements for income and repayment verification.",
    },
    {
      type: "Business Proof",
      details: "GST Registration, Shop Act License, or other Business Proof documents (if applicable).",
    },
    {
      type: "Photographs",
      details: "Recent passport-size photographs of all applicants and co-applicants.",
    },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-16 px-6 md:px-12 font-lexend mt-0!">
      <div className="max-w-7xl mx-auto">
        {/* --- HEADER --- */}
        <div className="mb-8">
          <Typography
            variant="h4"
            as="h3"
            className="text-[#1e293b] font-bold text-[28px] md:text-[36px] mb-3 mt-0! tracking-tight"
          >
            Documents Required for a LAP Loan
          </Typography>
          <Typography
            variant="b1"
            as="h5"
            className="text-gray-500 text-base md:text-[18px] mb-6 mt-0! font-normal leading-relaxed"
          >
            Apply for Loan Against Property with minimal documentation including KYC, income proof, and property papers for quick approval.
          </Typography>

          {/* Purpose Line */}
          <div className="text-[#475569] text-sm md:text-base bg-blue-50/50 p-3 rounded-lg border-l-4 border-[#00C4D8]">
            <span className="font-bold text-[#1e293b]">
              Purpose of documents:
            </span>{" "}
            Required to verify the identity, address, legal ownership of the property, and the repayment capacity of the borrower.
          </div>
        </div>

        {/* --- PROFESSIONAL TABLE --- */}
        <div className="overflow-x-auto border border-gray-200 rounded-sm shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#0056b3] text-white">
                <th className="p-4 md:p-5 font-bold text-sm md:text-lg border-r border-white/10 w-1/3 uppercase tracking-wider">
                  Document Type
                </th>
                <th className="p-4 md:p-5 font-bold text-sm md:text-lg uppercase tracking-wider">
                  Details
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              {documentsData.map((doc, index) => (
                <tr
                  key={index}
                  className={`border-b border-gray-100 ${
                    index % 2 === 0 ? "bg-white" : "bg-[#f8f9fa]"
                  } hover:bg-blue-50/30 transition-colors`}
                >
                  <td className="p-4 md:p-5 text-sm md:text-base font-semibold text-[#1e293b]">
                    {doc.type}
                  </td>
                  <td className="p-4 md:p-5 text-sm md:text-base leading-relaxed">
                    {doc.details}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default LAPLoanDocuments;