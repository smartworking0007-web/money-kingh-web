"use client";

import Image from "next/image";
import { Typography } from "@/app/components/ui/Typography";

const steps = [
  {
    title: "Application",
    desc: "Submit your basic details online or offline at our branch.",
    icon: "📝",
  },
  {
    title: "Expert Evaluation",
    desc: "Your gold is evaluated by certified experts for purity & weight.",
    icon: "🔍",
  },
  {
    title: "Loan Calculation",
    desc: "Loan amount is calculated based on current market value.",
    icon: "🧮",
  },
  {
    title: "KYC Verification",
    desc: "Complete your quick KYC verification with minimal documents.",
    icon: "🆔",
  },
  {
    title: "Instant Disbursement",
    desc: "Funds are disbursed instantly to your bank account.",
    icon: "💸",
  },
];

export default function GoldLoanProcess() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 bg-white font-lexend">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* --- LEFT SIDE: IMAGE --- */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl ">
            <Image
              src="/images/gold/goldloan3.png"
              alt="Money with gold"
              width={600}
              height={400}
              className="object-cover w-full h-auto"
            />
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl -z-10"></div>
        </div>

        {/* --- RIGHT SIDE: STEPS --- */}
        <div className="w-full lg:w-1/2">
          <Typography
            variant="h3"
            as="h3"
            className="text-[#1e293b] font-bold mb-8 text-3xl md:text-4xl"
          >
            How Gold Loan Works
          </Typography>

          <div className="relative space-y-6">
            {/* Vertical Line for the flowchart effect */}
            <div className="absolute left-[23px] top-4 bottom-4 w-0.5 bg-slate-100 hidden md:block"></div>

            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex items-start gap-4 group"
              >
                {/* Step Circle */}
                <div className="z-10 shrink-0 w-12 h-12 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center text-xl shadow-sm group-hover:border-[#004687] transition-colors">
                  {step.icon}
                </div>

                {/* Step Content */}
                <div className="pt-1">
                  <Typography
                    variant="h5"
                    as="h4"
                    className="text-[#1e293b] font-bold text-lg mb-1"
                  >
                    {step.title}
                  </Typography>
                  <p className="text-gray-500 text-sm md:text-base leading-snug">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
