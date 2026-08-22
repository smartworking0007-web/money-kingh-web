"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";
import { motion } from "framer-motion";

export default function MachineryProcess() {
  const steps = [
    {
      step: "STEP 1",
      title: "Check Eligibility",
    },
    {
      step: "STEP 2",
      title: "Submit Your Business & Machinery Details",
    },
    {
      step: "STEP 3",
      title: "Upload Required Documents",
    },
    {
      step: "STEP 4",
      title: "Business & Credit Assessment",
    },
    {
      step: "STEP 5",
      title: "Machinery/Quotation Verification",
    },
    {
      step: "STEP 6",
      title: "Loan Approval & Disbursal",
    },
  ];

  return (
    <section className="w-full pt-0 pb-12 md:pb-20 px-4 md:px-20 lg:px-20 relative z-10 font-lexend">
      <div className="max-w-7xl mx-auto text-center">
        {/* --- HEADER --- */}
        <div className="mb-10 md:mb-16">
          <Typography
            variant="h3"
            as="h2"
            className="text-[#1e293b] font-bold text-3xl md:text-5xl mb-4 mt-0 tracking-tight"
          >
            How to Apply for a Machinery Loan Online
          </Typography>
          <Typography
            variant="b1"
            className="text-slate-500 max-w-2xl mx-auto leading-relaxed text-sm md:text-base mt-0"
          >
            Follow this simple, step-by-step digital process to get funding for your business machinery quickly and efficiently.
          </Typography>
        </div>

        {/* --- STEPS GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-5">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="bg-white p-6 md:p-6 min-h-[160px] md:min-h-[190px] flex flex-col items-center justify-center border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 rounded-xl group"
            >
              {/* Step Label */}
              <Typography
                variant="s1"
                as="span"
                className="mb-3 mt-0 uppercase tracking-widest text-xs font-semibold text-blue-600"
              >
                {item.step}
              </Typography>

              {/* Step Title */}
              <div className="text-slate-800 font-bold text-sm md:text-base leading-snug">
                {item.title}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}