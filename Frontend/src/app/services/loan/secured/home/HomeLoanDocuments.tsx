"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";

const HomeLoanDocuments = () => {
  const documentsData = [
    {
      type: "Identity proof",
      details:
        "Aadhaar card, passport, PAN card, voter ID, or driving licence.",
    },
    {
      type: "Address proof",
      details:
        "Bank passbook, voter ID, ration card, utility bills, passport, or LIC receipt.",
    },
    {
      type: "Income proof (salaried)",
      details:
        "Salary slips, Form 16, and ITR (Income Tax Return) of the last three years.",
    },
    {
      type: "Income proof (self-employed)",
      details:
        "Business details, address proof, ITR (last three years), and financial statements.",
    },
    {
      type: "Property documents",
      details:
        "Sale deed, approved building plan, allotment letter, NOC (No Objection Certificate), and construction cost estimate.",
    },
    {
      type: "Other documents",
      details: "Previous loan statements (last one year), if applicable.",
    },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-16 px-6 md:px-12 font-lexend mt-0!">
      <div className="max-w-7xl mx-auto">
        {/* --- HEADER --- */}
        <div className="mb-8">
          <Typography
            variant="h3"
            as="h3"
            className="text-[#1e293b] font-bold text-[28px] md:text-[36px] mb-3 mt-0! tracking-tight"
          >
            Documents Required for a Home Loan
          </Typography>
          <Typography
            variant="h5"
            as="h5"
            className="text-gray-500 text-base md:text-[20px] mb-6 mt-0! font-normal"
          >
            The documents need to be submitted to apply for a home loan are
            mentioned below:
          </Typography>

          {/* Purpose Line */}
          <div className="text-[#475569] text-sm md:text-base  bg-blue-50/50 p-3 rounded-lg border-l-4 border-[#00C4D8]">
            <span className="font-bold text-[#1e293b]">
              Purpose of documents:
            </span>{" "}
            Required to verify the identity, address, income, and repayment
            capacity of the applicant.
          </div>
        </div>

        {/* --- PROFESSIONAL TABLE (Bank Style) --- */}
        <div className="overflow-x-auto border border-gray-200 rounded-sm shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#0056b3] text-white">
                <th className="p-4 md:p-5 font-bold text-sm md:text-lg border-r border-white/10 w-1/3">
                  Document Category
                </th>
                <th className="p-4 md:p-5 font-bold text-sm md:text-lg">
                  List of Documents
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              {documentsData.map((doc, index) => (
                <tr
                  key={index}
                  className={`border-b border-gray-100 ${index % 2 === 0 ? "bg-white" : "bg-[#f8f9fa]"}`}
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

export default HomeLoanDocuments;
