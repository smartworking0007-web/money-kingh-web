"use client";

import React, { useState, useEffect } from "react";
import { Typography } from "@/app/components/ui/Typography";
import Link from "next/link";
import Image from "next/image";

const ApplyLAPLoan = () => {
  const [activeStep, setActiveStep] = useState(0);

  const stepsData = [
    {
      step: "01",
      title: "Explore Products",
      desc: "Visit the Money King website and navigate to the ‘Explore Products’ option to start your journey.",
    },
    {
      step: "02",
      title: "Select LAP",
      desc: "Go to the ‘Loans’ section and select ‘Loan Against Property’ from the available financial solutions.",
    },
    {
      step: "03",
      title: "Check Eligibility",
      desc: "Use our online eligibility and EMI calculators to plan your loan amount, tenure, and repayment schedule.",
    },
    {
      step: "04",
      title: "Fill Application",
      desc: "Complete the online application form with accurate personal, professional, and property details.",
    },
    {
      step: "05",
      title: "Upload Documents",
      desc: "Scan and upload all the required KYC and property documents securely for the verification process.",
    },
    {
      step: "06",
      title: "Sanction & Disbursement",
      desc: "Review your loan sanction letter post-approval, followed by the final disbursement of the loan amount.",
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
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 md:grid-cols-12">
        
        {/* --- LEFT SIDE: IMAGE --- */}
        <div className="relative flex justify-center self-end items-end md:col-span-5 order-2 md:order-1">
          <div className="relative aspect-square w-full max-w-[320px] md:max-w-[450px] flex items-end md:aspect-4/5">
            <Image
              src="/images/loanpage/homee.jpeg"
              alt="Apply LAP Loan Process"
              fill
              priority
              className="z-20 object-contain transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div className="absolute inset-0 -z-10 scale-75 rounded-full bg-cyan-100/40 blur-3xl"></div>
          </div>
        </div>

        {/* --- RIGHT SIDE: AUTOMATIC STEPPER --- */}
        <div className="relative z-10 md:col-span-7 order-1 md:order-2">
          <div className="mb-6 md:mb-10 text-center md:text-left">
            <Typography
              variant="h3"
              as="h3"
              className="mb-3 mt-0! text-2xl font-bold tracking-tight text-[#1e293b] md:text-5xl leading-tight"
            >
              How To Apply For A LAP Loan
            </Typography>
            <Typography
              variant="h5"
              as="h5"
              className="mt-0! text-[13px] font-normal text-gray-500 md:text-xl leading-relaxed"
            >
              Follow this step-by-step guide when applying for a housing loan from Money King.
            </Typography>
          </div>

          {/* STEP DISPLAY AREA */}
          <div className="relative flex min-h-160px md:min-h-[200px] items-start gap-4 md:gap-10">
            <div className="relative shrink-0">
              <div className="flex h-12 w-12 animate-bounce items-center justify-center rounded-full bg-[#1e293b] text-lg font-extrabold text-white shadow-xl md:h-20 md:w-20 md:text-3xl">
                {stepsData[activeStep].step}
              </div>
              <div className="absolute inset-0 -z-10 animate-ping rounded-full bg-cyan-100"></div>
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

              {/* Progress Bars */}
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

export default ApplyLAPLoan;