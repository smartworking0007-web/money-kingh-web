"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";
import { FileText, UserCircle, Wallet, Landmark } from "lucide-react";

export default function CreditCardDocuments() {
  const docCategories = [
    {
      title: "KYC Documents",
      icon: <UserCircle className="w-5 h-5 md:w-6 md:h-6" />,
      items: ["PAN Card", "Aadhaar / Address Proof", "Passport-size photo"],
      bg: "bg-[#f0f9ff]",
      iconColor: "text-[#004687]",
    },
    {
      title: "Income (Salaried)",
      icon: <Wallet className="w-5 h-5 md:w-6 md:h-6" />,
      items: ["Salary slips (last 3 months)"],
      bg: "bg-linear-to-br from-[#00c6ff] to-[#bd18dc]",
      itemsColor: "text-white/90",
      titleColor: "text-white",
      iconBg: "bg-white",
      iconColor: "text-[#00c6ff]",
    },
    {
      title: "Income (Self-Employed)",
      icon: <FileText className="w-5 h-5 md:w-6 md:h-6" />,
      items: ["ITR (last 2–3 years)"],
      bg: "bg-[#f0fdfa]",
      iconColor: "text-teal-600",
    },
    {
      title: "Financial Docs",
      icon: <Landmark className="w-5 h-5 md:w-6 md:h-6" />,
      items: ["Bank Statement (3-6 months)"],
      bg: "bg-[#f5f3ff]",
      iconColor: "text-purple-600",
    },
  ];

  return (
    <section className="w-full bg-white py-10 md:py-16 px-4 md:px-6 font-lexend">
      <div className="max-w-6xl mx-auto">
        {/* --- HEADER SECTION (Tight spacing) --- */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8 md:mb-12">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 ">
              <Typography
                variant="h5"
                as="h5"
                className="text-blue-600 font-bold text-[10px] md:text-xs uppercase tracking-widest mt-0"
              >
                Documents Required
              </Typography>
            </div>
            <Typography
              variant="h4"
              className="  font-black mt-0"
            >
              Ready to Apply?
            </Typography>
          </div>

          <div className="max-w-xs">
            <Typography
              variant="b1"
              className="text-slate-500 text-xs md:text-sm leading-relaxed mt-0"
            >
              Keep these ready for a fast application with Money King Financial.
            </Typography>
          </div>
        </div>

        {/* --- DOCUMENTS GRID (Smaller Boxes) --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {docCategories.map((cat, idx) => (
            <div
              key={idx}
              className={`relative p-5 rounded-2xl flex flex-col justify-between min-h-[200px] md:min-h-[220px] transition-all hover:shadow-md ${cat.bg}`}
            >
              {/* Smaller Icon Circle */}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center mb-6 shadow-sm ${cat.iconBg || "bg-white"} ${cat.iconColor}`}
              >
                {cat.icon}
              </div>

              {/* Content (Smaller Fonts) */}
              <div className="space-y-2">
                <Typography
                  variant="h5"
                  className={`text-sm md:text-base  leading-tight mt-0 ${cat.titleColor || "text-slate-900"}`}
                >
                  {cat.title}
                </Typography>

                <ul className="space-y-1">
                  {cat.items.map((item, i) => (
                    <li
                      key={i}
                      className={`text-[11px] md:text-xs font-medium leading-snug ${cat.itemsColor || "text-slate-500"}`}
                    >
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
