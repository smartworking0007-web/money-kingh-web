"use client";
import { Typography } from "@/app/components/ui/Typography";
import { ShoppingCart, CreditCard, ClipboardCheck } from "lucide-react";
const steps = [
  {
    id: 1,
    title: "Choose the right policy",
    icon: <ShoppingCart className="w-5 h-5 text-blue-600" />,
    points: [
      "Decide the policy type",
      "Select coverage & term",
      "Compare premiums online",
    ],
  },
  {
    id: 2,
    title: "Pay the Premium Online",
    icon: <CreditCard className="w-5 h-5 text-blue-600" />,
    points: [
      "Select payment terms",
      "Choose payment mode",
      "Set auto-pay reminders",
    ],
  },
  {
    id: 3,
    title: "Filing for Settlement",
    icon: <ClipboardCheck className="w-5 h-5 text-blue-600" />,
    points: [
      "Notify insurer online",
      "Submit required IDs",
      "Get payout after verification",
    ],
  },
];

export default function HowInsuranceWorks() {
  return (
    <section className="w-full bg-[#f1f7ff] py-8 md:py-20 px-4 md:px-20 font-lexend">
      <div className="max-w-6xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-8">
          <Typography
            variant="h4"
            as="h2"
            className="text-xl md:text-3xl font-black text-[#1e293b] mb-2 mt-0"
          >
            How Does Life Insurance <span className="text-blue-600">Work?</span>
          </Typography>
          <Typography
            variant="b1"
            className="text-gray-500 text-[11px] md:text-sm mt-0"
          >
            Understand the process in 3 simple steps:
          </Typography>
        </div>

        {/* --- STEPS GRID (Smaller Boxes) --- */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white p-4 md:p-6 rounded-xl border border-blue-50 shadow-sm hover:shadow-md transition-all flex flex-col h-full"
            >
              {/* Small Icon Container */}
              <div className="mb-3 md:mb-4 p-2.5 bg-blue-50 w-fit rounded-lg">
                {step.icon}
              </div>

              {/* Compact Title */}
              <Typography
                variant="h5"
                as="h3"
                className="text-sm md:text-base font-bold text-[#1e293b] mb-3 md:mb-4 mt-0 leading-tight"
              >
                {step.title}
              </Typography>

              {/* Compact Points List */}
              <ul className="space-y-2 mt-auto">
                {step.points.map((point, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1 shrink-0 text-[10px]">✦</span>
                    <Typography
                      variant="b1"
                      className="text-gray-500 text-[10px] md:text-[12px] leading-tight mt-0"
                    >
                      {point}
                    </Typography>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}