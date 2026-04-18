"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";
import { motion } from "framer-motion";
import Link from "next/link";

export default function MachineryProcess() {
  const steps = [
    {
      step: "STEP 1",
      title: "Click on ",
      highlight: "'Apply Now'",
      isLink: true,
    },
    {
      step: "STEP 2",
      title: "Submit the required details",
    },
    {
      step: "STEP 3",
      title: "Our representative will contact you within 24 hours",
    },
    {
      step: "STEP 4",
      title: "Your application will be evaluated for eligibility",
    },
    {
      step: "STEP 5",
      title: "Once verified, get the loan amount in your bank account.",
    },
  ];

  return (
    /* Wahi code hai, bas -mt (negative margin) add kiya hai gap ke liye */
    <section className="w-full pt-0 pb-12 md:pb-20 px-4 md:px-20 lg:px-20 relative z-10 ">
      <div className="max-w-7xl mx-auto text-center">
        {/* --- HEADER --- */}
        <div className="mb-10 md:mb-16">
          <Typography
            variant="h3"
            as="h2"
            className="text-[#1e293b] font-bold text-3xl md:text-5xl mb-4 mt-0 tracking-tight"
          >
            How to Apply for Machinery Finance
          </Typography>
          <Typography
            variant="b1"
            className="text-slate-500 max-w-2xl mx-auto leading-relaxed text-sm md:text-base mt-0"
          >
            Applying for machinery finance with us is simple, transparent, and
            completely digital.
          </Typography>
        </div>

        {/* --- STEPS GRID (Mobile view added: grid-cols-1) --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-6 md:p-8 min-h-160px md:min-h-[220px] flex flex-col items-center justify-center border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 rounded-md group"
            >
              {/* Step Label */}
              <Typography
                variant="s1"
                as="span"
                className="mb-4 mt-0 uppercase tracking-widest text-xs md:text-sm"
              >
                {item.step}
              </Typography>

              {/* Step Title / Description */}
              <div className="text-slate-700 font-bold text-sm md:text-base leading-snug">
                {item.title}
                {item.highlight &&
                  (item.isLink ? (
                    <Link
                      href="/contact"
                      className="font-bold block mt-1 decoration-2 underline-offset-4"
                    >
                      {item.highlight}
                    </Link>
                  ) : (
                    <span className=" font-bold block mt-1">
                      {item.highlight}
                    </span>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}