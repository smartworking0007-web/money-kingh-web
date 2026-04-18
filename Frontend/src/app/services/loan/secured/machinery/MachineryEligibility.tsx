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

  const accordionData = [
    {
      title: "Eligibility criteria for machinery finance",
      content: (
        <div className="space-y-6">
          <div>
            <h5 className="text-gray-800 font-semibold text-lg mb-3">
              Target Segments
            </h5>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "MSMEs",
                "Proprietorships",
                "Partnerships",
                "LLPs",
                "Private & Public Limited Companies",
                "Scaling operations",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center text-gray-600 text-sm md:text-base"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100">
            <div>
              <p className="text-gray-800 font-semibold text-sm mb-1">Age</p>
              <p className="text-gray-600 text-sm">25 to 68 years</p>
            </div>

            <div>
              <p className="text-gray-800 font-semibold text-sm mb-1">
                Vintage
              </p>
              <p className="text-gray-600 text-sm">Min. 3 years</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Machinery Finance documents",
      content: (
        <div className="space-y-4">
          <h5 className="text-gray-800 font-semibold text-lg">
            Financial Stability
          </h5>

          <ul className="space-y-3">
            {[
              "Positive net worth",
              "Consistent cash flow and profitability",
              "Stable financial records",
              "KYC of promoters and entity",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center text-gray-600 text-sm md:text-base"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ),
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-10 lg:px-12 overflow-hidden">
      <div className="max-w-[1300px] mx-auto">
        {/* 🔥 GAP REDUCED HERE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* LEFT SIDE (8 Columns for tighter look) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8"
          >
            <h2 className="text-gray-600 font-medium text-4xl lg:text-5xl tracking-tight leading-tight mb-5">
              Business-Focused Solutions
            </h2>

            <p className="text-gray-400 text-base lg:text-lg mb-8 leading-relaxed">
              The loan structure is designed specifically for manufacturers,
              supporting expansion, automation, and operational efficiency.
            </p>

            {/* Accordion */}
            <div className="space-y-4">
              {accordionData.map((item, index) => (
                <div
                  key={index}
                  className={`rounded-xl border transition-all duration-300 ${
                    openIndex === index
                      ? "border-gray-300 bg-white"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left"
                  >
                    <span
                      className={`text-base md:text-lg transition-colors ${
                        openIndex === index
                          ? "text-blue-600 font-semibold"
                          : "text-gray-700"
                      }`}
                    >
                      {item.title}
                    </span>

                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`p-2 rounded-full border ${
                        openIndex === index
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

          {/* RIGHT SIDE (4 Columns — closer now) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex justify-center lg:justify-end lg:-ml-4"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px]">
              
              <div className="absolute inset-0 bg-red-400 rounded-full opacity-80" />

              <div className="absolute inset-0 overflow-hidden rounded-full">
                <Image
                  src="/images/Machinery/mac.png"
                  alt="Business Solutions"
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