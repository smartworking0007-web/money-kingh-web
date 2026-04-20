"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@/app/components/ui/Typography";

const steps = [
  {
    id: "01",
    title: "Verify Your Mobile Number",
    desc: "Click 'Register as Channel Partner' in the header and verify your mobile via OTP for secure access.",
  },
  {
    id: "02",
    title: "Fill Out Registration Form",
    desc: "Submit personal/business details and upload KYC, Education certificates, and Cancelled Cheque.",
  },
  {
    id: "03",
    title: "Complete E-Sign Agreement",
    desc: "Review terms and e-sign through our secure digital platform to proceed towards activation.",
  },
  {
    id: "04",
    title: "Generate Partner Code",
    desc: "Once signed, your unique Partner Code will be generated for exclusive benefits and earnings.",
  },
];

export default function PartnerSteps() {
  return (
    <section className="w-full bg-slate-50 py-12 md:py-16 px-4 md:px-10 font-lexend">
      <div className="max-w-6xl mx-auto">
        {/* --- HEADER --- */}
        <div className="text-center mb-10 md:mb-14">
          <Typography
            variant="h3"
            as="h2"
            className="text-xl md:text-3xl font-black text-[#1e293b] mb-2 mt-0"
          >
            Become Our Channel Partner In{" "}
            <span className="text-blue-600">4 Simple Steps</span>
          </Typography>
          <Typography className="text-gray-500 text-xs md:text-sm max-w-2xl mx-auto mt-0 leading-relaxed">
            Follow these four simple steps to complete your registration and
            unlock exclusive business benefits with Money King.
          </Typography>
        </div>

        {/* --- CONTENT GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* LEFT SIDE: STEPS */}
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="flex gap-4 md:gap-5 items-start group relative"
              >
                {/* Step Number Circle */}
                <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-blue-200 flex items-center justify-center group-hover:border-blue-600 group-hover:bg-blue-600 transition-all duration-300 bg-white">
                  <span className="text-blue-600 font-bold text-sm md:text-base group-hover:text-white">
                    {step.id}
                  </span>
                </div>

                {/* Step Content */}
                <div className="flex-1">
                  <Typography
                    variant="h5"
                    className="font-bold text-slate-800 text-sm md:text-lg mt-0 mb-1 leading-tight"
                  >
                    {step.title}
                  </Typography>
                  <Typography className="text-gray-500 text-[11px] md:text-xs leading-relaxed mt-0">
                    {step.desc}
                  </Typography>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE: IMAGE */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[450px] h-[250px] md:h-[350px] lg:h-[450px] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              {/* Check if image path exists in public folder: public/images/Become/Become.jpeg */}
              <Image
                src="/images/Become/Become3.jpeg"
                alt="Partnership"
                fill
                style={{ objectFit: "cover" }}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
