"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MachineryEligibility() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const eligibilityTable = [
    { factor: "Business Type", requirement: "MSME, Proprietorship, Partnership, LLP, Pvt/Public Ltd" },
    { factor: "Business Vintage", requirement: "Usually established business preferred" },
    { factor: "Age", requirement: "Lender-specific" },
    { factor: "Credit Profile", requirement: "Good credit history preferred" },
    { factor: "Business Performance", requirement: "Stable turnover/profitability" },
    { factor: "Banking", requirement: "Regular business banking" },
    { factor: "Machinery", requirement: "Eligible new/used machinery" },
  ];

  const accordionData = [
    {
      title: "Eligibility Criteria for Machinery Finance",
      content: (
        <div className="space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-2.5 px-3 text-xs md:text-sm font-semibold text-gray-900 bg-gray-50/75 rounded-l-lg">
                    Eligibility Factor
                  </th>
                  <th className="py-2.5 px-3 text-xs md:text-sm font-semibold text-gray-900 bg-gray-50/75 rounded-r-lg">
                    General Requirement
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {eligibilityTable.map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-2.5 px-3 text-xs md:text-sm font-medium text-gray-800">
                      {row.factor}
                    </td>
                    <td className="py-2.5 px-3 text-xs md:text-sm text-gray-600">
                      {row.requirement}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      title: "Documents Required for Machinery Loan",
      content: (
        <div className="space-y-6">
          {/* KYC Documents */}
          <div>
            <h5 className="text-gray-900 font-semibold text-sm md:text-base mb-2">
              KYC Documents
            </h5>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {["PAN", "Aadhaar", "Address proof"].map((doc) => (
                <li
                  key={doc}
                  className="flex items-center text-gray-600 text-xs md:text-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2 shrink-0" />
                  {doc}
                </li>
              ))}
            </ul>
          </div>

          {/* Business Documents */}
          <div className="pt-4 border-t border-gray-100">
            <h5 className="text-gray-900 font-semibold text-sm md:text-base mb-2">
              Business Documents
            </h5>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                "GST registration",
                "Business registration proof",
                "Partnership deed / incorporation documents (where applicable)",
              ].map((doc) => (
                <li
                  key={doc}
                  className="flex items-center text-gray-600 text-xs md:text-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2 shrink-0" />
                  {doc}
                </li>
              ))}
            </ul>
          </div>

          {/* Financial Documents */}
          <div className="pt-4 border-t border-gray-100">
            <h5 className="text-gray-900 font-semibold text-sm md:text-base mb-2">
              Financial Documents
            </h5>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                "ITR",
                "Balance Sheet",
                "Profit & Loss",
                "Bank statements",
                "GST returns (where applicable)",
              ].map((doc) => (
                <li
                  key={doc}
                  className="flex items-center text-gray-600 text-xs md:text-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2 shrink-0" />
                  {doc}
                </li>
              ))}
            </ul>
          </div>

          {/* Machinery Documents */}
          <div className="pt-4 border-t border-gray-100">
            <h5 className="text-gray-900 font-semibold text-sm md:text-base mb-2">
              Machinery Documents
            </h5>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                "Machinery quotation",
                "Proforma invoice",
                "Supplier details",
                "Machinery specifications",
                "Purchase invoice",
              ].map((doc) => (
                <li
                  key={doc}
                  className="flex items-center text-gray-600 text-xs md:text-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2 shrink-0" />
                  {doc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-10 lg:px-12 overflow-hidden">
      <div className="max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">

          {/* LEFT SIDE (8 Columns) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8"
          >
            <h2 className="text-gray-900 font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight mb-5">
              Machinery Finance Eligibility & Requirements
            </h2>

            <p className="text-gray-600 text-base lg:text-lg mb-8 leading-relaxed">
              Check the general requirements and key criteria needed to secure funding for new or used industrial machinery.
            </p>

            {/* Accordion */}
            <div className="space-y-4">
              {accordionData.map((item, index) => (
                <div
                  key={index}
                  className={`rounded-xl border transition-all duration-300 ${openIndex === index
                    ? "border-gray-300 bg-white shadow-sm"
                    : "border-gray-200 bg-white"
                    }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left"
                  >
                    <span
                      className={`text-base md:text-lg transition-colors ${openIndex === index
                        ? "text-blue-600 font-semibold"
                        : "text-gray-700 font-medium"
                        }`}
                    >
                      {item.title}
                    </span>

                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`p-2 rounded-full border shrink-0 ${openIndex === index
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-gray-100 text-gray-500 border-gray-200"
                        }`}
                    >
                      <ChevronDown size={18} />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-5 pb-5">{item.content}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE (4 Columns) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex justify-center lg:justify-end lg:-ml-4"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px]">
              <div className="absolute inset-0 bg-blue-100 rounded-full opacity-80" />

              <div className="absolute inset-0 overflow-hidden rounded-full">
                <Image
                  src="/images/Machinery/mac.png"
                  alt="Machinery Loan Eligibility"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}