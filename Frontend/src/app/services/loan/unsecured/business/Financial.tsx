"use client";
import React from "react";
import Image from "next/image";
import { Typography } from "@/app/components/ui/Typography";
import { Check, Circle } from "lucide-react";

const Financial = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Hero Section - Height Reduced to min-h-[500px] */}
      <div className="relative min-h-[500px] flex items-center py-10">
        {/* Background Image - Centered */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Loan/C.png"
            alt="business loan"
            fill
            className="object-cover object-center"
            priority
            quality={95}
          />
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full flex justify-start">
          {/* Compact Card UI - Reduced Padding p-6 to p-10 */}
          <div className="bg-white/95 shadow-xl rounded-sm p-6 md:p-10 max-w-3xl border-l-4 border-[#0056b3]">
            <Typography
              variant="h4"
              as="h2"
              className="text-[#0056b3] font-bold mb-4 text-xl md:text-3xl leading-tight mt-0!"
            >
              Why Choose Money King Financial for Business Loan in India?
            </Typography>

            <div className="space-y-4">
              {/* Intro Text */}
              <div className="flex gap-3 items-start">
                <Check className="w-4 h-4 text-[#0056b3] mt-1 shrink-0" />
                <Typography
                  variant="b1"
                  className="text-slate-700 text-sm md:text-base leading-snug m-0!"
                >
                  At <strong>Money King Financial</strong>, we provide unsecured{" "}
                  <strong>MSMEs loan</strong> and startup funding for working
                  capital and expansion with 100% transparency and no
                  collateral.
                </Typography>
              </div>

              {/* Compact List Items */}
              <div className="space-y-3 pl-7">
                <div className="flex flex-col gap-0.5">
                  <div className="flex gap-3 items-center">
                    <Circle className="w-2 h-2 fill-[#0056b3] text-[#0056b3]" />
                    <Typography
                      variant="h5"
                      as="h5"
                      className="text-[#002e5b] text-sm md:text-base  m-0!"
                    >
                      Quick Approval & Fast Disbursement
                    </Typography>
                  </div>
                  <p className="text-slate-600 text-xs md:text-sm ml-5 m-0!">
                    Swift approvals and high loan amounts for efficient growth.
                  </p>
                </div>

                <div className="flex flex-col gap-0.5">
                  <div className="flex gap-3 items-center">
                    <Circle className="w-2 h-2 fill-[#0056b3] text-[#0056b3]" />
                    <Typography
                      variant="h5"
                      as="h5"
                      className="text-[#002e5b] text-sm md:text-base  m-0!"
                    >
                      Trusted Partner Since 2016
                    </Typography>
                  </div>
                  <p className="text-slate-600 text-xs md:text-sm ml-5 m-0!">
                    Reliable funding solutions across Delhi NCR and PAN India.
                  </p>
                </div>

                <div className="flex flex-col gap-0.5">
                  <div className="flex gap-3 items-center">
                    <Circle className="w-2 h-2 fill-[#0056b3] text-[#0056b3]" />
                    <Typography
                      variant="h5"
                      as="h5"
                      className="text-[#002e5b] text-sm md:text-base  m-0!"
                    >
                      Expert Financial Guidance
                    </Typography>
                  </div>
                  <p className="text-slate-600 text-xs md:text-sm ml-5 m-0!">
                    Professional support with zero hidden charges.
                  </p>
                </div>

                <div className="flex flex-col gap-0.5">
                  <div className="flex gap-3 items-center">
                    <Circle className="w-2 h-2 fill-[#0056b3] text-[#0056b3]" />
                    <Typography
                      variant="h5"
                      as="h5"
                      className="text-[#002e5b] text-sm md:text-base  m-0!"
                    >
                      Low-Interest Unsecured Loans
                    </Typography>
                  </div>
                  <p className="text-slate-600 text-xs md:text-sm ml-5 m-0!">
                    Customized offers based on turnover and credit profile.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Financial;
