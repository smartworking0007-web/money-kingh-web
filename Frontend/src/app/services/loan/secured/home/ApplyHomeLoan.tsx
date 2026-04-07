"use client";

import React, { useState, useEffect } from "react";
import { Typography } from "@/app/components/ui/Typography";
import Link from "next/link";
import Image from "next/image";

const ApplyHomeLoan = () => {
  const [activeStep, setActiveStep] = useState(0);

  const stepsData = [
    {
      step: "01",
      title: "Application Procedure",
      desc: "Complete the housing loan application with accurate personal and financial details.",
    },
    {
      step: "02",
      title: "Processing Fee",
      desc: "Remit the processing fee to commence validation of your application.",
    },
    {
      step: "03",
      title: "Bank Discussion",
      desc: "The bank may request a face-to-face or telephonic discussion with you.",
    },
    {
      step: "04",
      title: "Loan evaluation",
      desc: "The bank assesses your application in line with its credit policies.",
    },
    {
      step: "05",
      title: "Loan sanction",
      desc: "Receive a detailed sanction letter post-approval outlining loan specifics.",
    },
    {
      step: "06",
      title: "Property scrutiny",
      desc: "Undergo property inspection for legal and valuation compliance.",
    },
    {
      step: "07",
      title: "Disbursement",
      desc: "The loan is disbursed on positive verification, enabling your property investment.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % stepsData.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [stepsData.length]);

  return (
    <section
      className="relative w-full overflow-hidden border-b border-gray-100 bg-white px-5 py-6 md:px-12 md:py-12 -mt-10 md:-mt-5 font-lexend z-10"
      /* -mt-10: Mobile par 40px upar shift karega
         md:-mt-20: Desktop par 80px upar shift karega
         py-6 / md:py-12: Padding kam kar di hai taaki section "Upar" dikhe
      */
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 md:grid-cols-12">
        {/* --- LEFT SIDE: IMAGE --- */}
        <div className="relative flex justify-center self-end items-end md:col-span-5 order-2 md:order-1">
          <div className="relative aspect-square w-full max-w-[320px] md:max-w-[450px] flex items-end md:aspect-4/5">
            <Image
              src="/images/loanpage/homee.jpeg"
              alt="Apply Home Loan Process"
              fill
              priority
              className="z-20 object-contain transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div className="absolute inset-0 -z-10 scale-75 rounded-full bg-blue-100/40 blur-3xl"></div>
          </div>
        </div>

        {/* --- RIGHT SIDE: AUTOMATIC STEPPER --- */}
        <div className="relative z-10 md:col-span-7 order-1 md:order-2">
          <div className="mb-6 md:mb-10 text-center md:text-left">
            <Typography
              variant="h3"
              as="h2"
              className="mb-3 mt-0! text-2xl font-bold tracking-tight text-[#1e293b] md:text-5xl leading-tight"
            >
              How to apply for a Home Loan
            </Typography>
            <Typography
              variant="b3"
              as="p"
              className="mt-0! text-xs font-normal text-gray-500 md:text-xl"
            >
              Follow this step-by-step guide when applying for a housing loan
              from Money King
            </Typography>
          </div>

          {/* STEP DISPLAY AREA */}
          <div className="relative flex min-h-[180px] md:min-h-[220px] items-start gap-4 md:gap-10">
            <div className="relative shrink-0">
              <div className="flex h-12 w-12 animate-bounce items-center justify-center rounded-full bg-[#1e293b] text-lg font-extrabold text-white shadow-xl md:h-20 md:w-20 md:text-3xl">
                {stepsData[activeStep].step}
              </div>
              <div className="absolute inset-0 -z-10 animate-ping rounded-full bg-blue-100"></div>
            </div>

            <div
              key={activeStep}
              className="duration-700 animate-in fade-in slide-in-from-bottom-5"
            >
              <Typography
                variant="h5"
                as="h4"
                className="mb-2 mt-0! text-lg font-bold text-[#0f172a] md:mb-4 md:text-4xl"
              >
                {stepsData[activeStep].title}
              </Typography>
              <p className="max-w-xl text-[13px] font-medium leading-relaxed text-gray-600 md:text-[22px]">
                {stepsData[activeStep].desc}
              </p>

              <div className="mt-6 flex justify-center md:justify-start gap-1.5 md:gap-2">
                {stepsData.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 rounded-full transition-all duration-500 ${i === activeStep ? "w-6 md:w-8 bg-[#00C4D8]" : "w-1.5 md:w-2 bg-gray-200"}`}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-5 text-center md:mt-10 md:text-left">
            <Link href="/contact" prefetch={true}>
              <button className="w-full cursor-pointer rounded-xl bg-[#1e293b] px-8 py-3.5 text-base font-bold text-white shadow-xl transition-all hover:bg-[#0f172a] active:scale-95 md:w-auto md:px-12 md:py-4 md:text-xl">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplyHomeLoan;
