"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";
import { CheckCircle2 } from "lucide-react";

export default function PersonalLoanBTSteps() {
  const steps = [
    {
      title: "Check Eligibility",
      desc: "Verify your credit score, income, and existing loan details.",
    },
    {
      title: "Compare Lenders",
      desc: "Choose a lender offering lower interest and better benefits.",
    },
    {
      title: "Submit Application",
      desc: "Fill out the online application form with required details.",
    },
    {
      title: "Document Verification",
      desc: "Upload or submit necessary documents securely.",
    },
    {
      title: "Approval & Disbursal",
      desc: "Loan gets transferred. Top-up amount is credited to your account.",
    },
  ];

  // Smooth scroll function
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      // Agar contact section is page pe nahi hai, toh seedha contact us page par bhej do
      window.location.href = "/contact";
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-12 py-10 bg-white font-lexend -mt-15 md:-mt-10 relative z-10">
      {/* --- HEADER --- */}
      <div className="text-center mb-12">
        <Typography
          variant="h3"
          as="h3"
          className="text-[#1e293b] font-black text-xl md:text-3xl mb-3 mt-0"
        >
          How to Apply for Personal Loan BT
        </Typography>
        <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full" />
      </div>

      {/* --- STEPS TIMELINE --- */}
      {/* Note: rounded-32px ko standard tailwind class rounded-[32px] mein badla hai */}
      <div className="max-w-3xl mx-auto bg-slate-50/50 border border-slate-100 rounded-32px p-6 md:p-10 relative overflow-hidden">
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[15px] top-2 bottom-2 w-2px bg-blue-100 hidden md:block" />

          <div className="space-y-8 md:space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4 md:gap-8 relative group">
                {/* Step Circle */}
                <div className="z-10 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center shrink-0 shadow-sm group-hover:bg-blue-600 transition-colors duration-300">
                  <span className="text-blue-600 font-bold text-xs md:text-sm group-hover:text-white">
                    {index + 1}
                  </span>
                </div>

                {/* Step Content */}
                <div className="flex flex-col pt-1">
                  <Typography
                    variant="h5"
                    className="text-slate-800 font-bold text-base md:text-lg mb-1 mt-0"
                  >
                    Step {index + 1}: {step.title}
                  </Typography>
                  <Typography className="text-slate-500 text-sm md:text-base leading-relaxed mt-0 max-w-xl">
                    {step.desc}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Background Icon */}
        <div className="absolute -bottom-6 -right-6 text-blue-100/50 opacity-20 rotate-12 hidden md:block">
          <CheckCircle2 size={120} />
        </div>
      </div>

      {/* --- APPLY NOW BUTTON --- */}
      <div className="text-center mt-12">
        <button
          onClick={handleScrollToContact}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-10 rounded-full shadow-lg transition-all transform hover:scale-105 active:scale-95 text-sm md:text-base cursor-pointer"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
}
