"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Typography } from "@/app/components/ui/Typography";

export default function DocumentsAccordionPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: "KYC Documents",
      content: [
        "PAN Card (Individual / Business)",
        "Aadhaar Card / Voter ID / Passport",
        "Address Proof (Utility Bill / Rent Agreement)",
      ],
    },
    {
      title: "Business Proof",
      content: [
        "Business Registration Certificate (GST / MSME / Shop Act)",
        "Partnership Deed / Incorporation Certificate",
        "Trade License (if applicable)",
      ],
    },
    {
      title: "Financial Documents",
      content: [
        "Bank Statements (last 6–12 months)",
        "Income Tax Returns (ITR) for last 2–3 years",
        "GST Returns (if applicable)",
        "Profit & Loss Statement and Balance Sheet",
      ],
    },
    {
      title: "Machinery Details",
      content: [
        "Quotation / Invoice of Machinery",
        "Vendor Details",
        "Proforma Invoice",
      ],
    },
  ];

  return (
    /* py-8 mobile ke liye aur md:py-16 desktop ke liye rakha hai taaki gap kam ho jaye */
    <section className="bg-gray-50 py-8 md:py-16 px-4 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-4xl mx-auto">

        {/* Page Heading - Adjusted margins for mobile */}
        <Typography 
          variant="h3" 
          as="h3" 
          className="text-2xl md:text-4xl font-semibold text-gray-800 mb-2 mt-0 leading-tight"
        >
          Documents Required for Machinery Loan in India
        </Typography>

        <Typography 
          variant="b1" 
          className="text-gray-500 mb-6 md:mb-10 text-sm md:text-lg leading-relaxed mt-0"
        >
          To apply for a machinery loan in India, businesses need to submit
          basic KYC, financial, and business-related documents.
        </Typography>

        {/* Accordion List */}
        <div className="space-y-3 md:space-y-5">
          {accordionData.map((item, index) => (
            <div
              key={index}
              className={`rounded-xl border transition-all duration-300 ${
                openIndex === index ? "border-blue-200 shadow-md bg-white" : "border-gray-200 bg-white"
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between px-4 py-4 md:px-6 md:py-5 text-left"
              >
                <span
                  className={`text-base md:text-lg font-medium transition-colors ${
                    openIndex === index ? "text-blue-600 font-bold" : "text-gray-700"
                  }`}
                >
                  {item.title}
                </span>

                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`p-1.5 rounded-full border ${
                    openIndex === index
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-gray-50 text-gray-400 border-gray-100"
                  }`}
                >
                  <ChevronDown size={16} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-4 pb-5 md:px-6 md:pb-6 pt-0">
                      <ul className="space-y-2 text-gray-600 text-[13px] md:text-base">
                        {item.content.map((point, i) => (
                          <li key={i} className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 mr-3 shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}