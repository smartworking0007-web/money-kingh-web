"use client";

import React, { useState, useEffect } from "react";
import { Typography } from "@/app/components/ui/Typography";
import Link from "next/link";
import Image from "next/image";

const HowSIPWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  const stepsData = [
    {
      step: "01",
      title: "Scheme Selection",
      desc: "You can choose a mutual scheme aligning with your financial goals and decide on the investment amount and frequency.",
    },
    {
      step: "02",
      title: "Automated Investment",
      desc: "Once the SIP set-up is initiated, the decided SIP investment amount is automatically deducted from your account and invested by the fund manager in a portfolio of stocks as per the scheme’s objective.",
    },
    {
      step: "03",
      title: "Unit Allocation",
      desc: "This fund allocation provides you with a specific number of units which depends on the SIP investment amount and NAV (Net Asset Value).",
    },
    {
      step: "04",
      title: "Wealth Accumulation",
      desc: "As the scheme NAV increases, the value of the units you hold in an SIP investment plan also increases, thereby growing the invested amount and resulting in steady wealth accumulation.",
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
            {/* Note: Update the image path below with a relevant SIP/Investment image if available */}
            <Image
              src="/images/loanpage/homee.jpeg"
              alt="How SIP Works"
              fill
              priority
              className="z-20 object-contain transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div className="absolute inset-0 -z-10 scale-75 rounded-full bg-blue-50 blur-3xl"></div>
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
              How does SIP work?
            </Typography>
            <Typography
              variant="h5"
              as="h5"
              className="mt-0! text-[13px] font-normal text-gray-500 md:text-xl leading-relaxed"
            >
              Understanding the journey of your money from bank account to wealth creation.
            </Typography>
          </div>

          {/* STEP DISPLAY AREA */}
          <div className="relative flex min-h-160px md:min-h-[200px] items-start gap-4 md:gap-10">
            <div className="relative shrink-0">
              <div className="flex h-12 w-12 animate-bounce items-center justify-center rounded-full bg-[#1e293b] text-lg font-extrabold text-white shadow-xl md:h-20 md:w-20 md:text-3xl">
                {stepsData[activeStep].step}
              </div>
              <div className="absolute inset-0 -z-10 animate-ping rounded-full bg-blue-100/50"></div>
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
                    className={`h-1 rounded-full transition-all duration-500 ${
                      i === activeStep ? "w-6 md:w-8 bg-[#D84B7E]" : "w-1.5 md:w-2 bg-gray-200"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-5 text-center md:mt-10 md:text-left">
            <Link href="/contact" prefetch={true}>
              <button className="w-full cursor-pointer rounded-xl bg-[#1e293b] px-8 py-3.5 text-base font-bold text-white shadow-xl transition-all hover:bg-[#0f172a] active:scale-95 md:w-auto md:px-12 md:py-4 md:text-xl">
                Invest Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowSIPWorks;