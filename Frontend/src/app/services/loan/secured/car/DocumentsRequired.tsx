"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, MapPin, ReceiptIndianRupee, Info, Car } from "lucide-react";
import { Typography } from "@/app/components/ui/Typography";

const DocumentsRequired = () => {
  const docCategories = [
    {
      title: "Identity Proof",
      subtitle: "Any one of the following",
      icon: <User className="w-5 h-5 md:w-6 md:h-6" />,
      docs: [
        "[Aadhaar Redacted]",
        "Passport",
        "Driving License",
        "Voters ID Card",
        "PAN Card",
      ],
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Address Proof",
      subtitle: "Any one of the following",
      icon: <MapPin className="w-5 h-5 md:w-6 md:h-6" />,
      docs: [
        "[Aadhaar Redacted]",
        "Passport",
        "Driving License",
        "Ration Card",
        "Utility Bills",
      ],
      color: "bg-emerald-50 text-emerald-600",
    },
    {
      title: "Proof of Income",
      subtitle: "Based on your profile",
      icon: <ReceiptIndianRupee className="w-5 h-5 md:w-6 md:h-6" />,
      docs: [
        "Form 16 / Salary Slips (Salaried)",
        "Latest Income Tax Returns",
        "Bank Statements (Last 6 Months)",
      ],
      color: "bg-purple-50 text-purple-600",
    },
  ];

  return (
    <section className="relative w-full py-12 md:py-24 bg-white font-lexend">
      <div className="max-w-7xl mx-auto px-5 md:px-6">
        {/* --- Header Section --- */}
        <div className="max-w-4xl mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h3"
              as="h1"
              className="text-[#004687] font-bold text-2xl sm:text-3xl md:text-5xl mb-4 md:mb-6 tracking-tight leading-tight"
            >
              Documents Required to Avail a Car Loan
            </Typography>

            <Typography
              variant="b1"
              className="text-gray-500 text-sm md:text-lg leading-relaxed max-w-2xl"
            >
              To prove your eligibility, you&apos;ll need to provide certain
              documents. Though this is specific to different lenders, the
              common documents will be:
            </Typography>
          </motion.div>
        </div>

        {/* --- Document Categories Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {docCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="relative p-6 md:p-8 rounded-1.5rem md:rounded-[2.5rem] bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-500"
            >
              <div
                className={`w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center mb-5 md:mb-6 ${category.color}`}
              >
                {category.icon}
              </div>

              <Typography
                variant="s1"
                className="text-gray-900 font-bold text-lg md:text-xl mb-1"
              >
                {category.title}
              </Typography>
              <p className="text-blue-600 font-medium text-[10px] md:text-xs uppercase tracking-widest mb-4 md:mb-6">
                {category.subtitle}
              </p>

              <ul className="space-y-3 md:space-y-4">
                {category.docs.map((doc, dIdx) => (
                  <li
                    key={dIdx}
                    className="flex items-start gap-3 text-gray-600 text-xs md:text-sm"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* --- Special Note Section --- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
        >
          {/* Used Car Note */}
          <div className="p-6 md:p-8 rounded-1.5rem md:rounded-2rem bg-blue-50 border border-blue-100 flex flex-col sm:flex-row items-start gap-4 md:gap-5">
            <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm">
              <Car className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <div>
              <p className="font-bold text-gray-900 text-base md:text-lg mb-1">
                Used Car Loans
              </p>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                The documents required for a used car loan are the same as
                above. No extra hassle.
              </p>
            </div>
          </div>

          {/* General Advisory */}
          <div className="p-6 md:p-8 rounded-1.5rem md:rounded-2rem bg-amber-50 border border-amber-100 flex flex-col sm:flex-row items-start gap-4 md:gap-5">
            <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl flex items-center justify-center text-amber-600 shadow-sm">
              <Info className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <div>
              <p className="font-bold text-gray-900 text-base md:text-lg mb-1">
                Important Note
              </p>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                Always confirm with your specific lender as requirements can
                change based on your situation.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DocumentsRequired;
