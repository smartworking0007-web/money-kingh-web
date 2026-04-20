"use client";

import React from "react";
import Image from "next/image"; // Image import karna mat bhulna
import { Typography } from "@/app/components/ui/Typography";
import {
  Wallet,
  Banknote,
  UserCog,
  Cpu,
  Presentation,
  Scale,
  PlayCircle,
} from "lucide-react";

const benefitsLeft = [
  {
    title: "Wide Range of Financial Products",
    desc: "Offer loans, insurance, and investment services to maximize earnings.",
    icon: <Wallet className="w-5 h-5 text-blue-600" />,
  },
  {
    title: "High Commissions & Incentives",
    desc: "Earn attractive payouts with competitive commission structure.",
    icon: <Banknote className="w-5 h-5 text-blue-600" />,
  },
  {
    title: "Dedicated Relationship Manager",
    desc: "Get personalized support for lead conversion and business growth.",
    icon: <UserCog className="w-5 h-5 text-blue-600" />,
  },
];

const benefitsRight = [
  {
    title: "Advanced Technology & Digital Platform",
    desc: "Access modern tools and dashboards to track your performance.",
    icon: <Cpu className="w-5 h-5 text-blue-600" />,
  },
  {
    title: "Comprehensive Training & Marketing Support",
    desc: "Complete training and sales materials to help you succeed.",
    icon: <Presentation className="w-5 h-5 text-blue-600" />,
  },
  {
    title: "Transparent & Ethical Business Practices",
    desc: "We believe in long-term partnerships with 100% trust and ethics.",
    icon: <Scale className="w-5 h-5 text-blue-600" />,
  },
];

export default function PartnerBenefits() {
  return (
    <section className="w-full bg-white py-12 md:py-20 px-4 md:px-10 font-lexend overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* --- HEADER --- */}
        <div className="text-center mb-12 md:mb-16">
          <Typography
            variant="h5"
            as="h2"
            className="text-2xl md:text-4xl font-black text-[#1e293b] mb-4 mt-0"
          >
            Benefits of becoming a{" "}
            <span className="text-blue-600">Channel Partner</span>
          </Typography>
          <Typography className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto mt-0">
            Unlock new revenue streams and expand your market reach by
            partnering with us.
          </Typography>
        </div>

        {/* --- MAIN CONTENT GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* LEFT SIDE */}
          <div className="space-y-8 order-2 lg:order-1">
            {benefitsLeft.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row items-start md:items-center gap-4 text-left group"
              >
                <div className="p-3 bg-blue-50 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm shrink-0">
                  {item.icon}
                </div>
                <div>
                  <Typography
                    variant="h5"
                    className="font-bold text-slate-800 text-sm md:text-base mb-1 mt-0 leading-tight"
                  >
                    {item.title}
                  </Typography>
                  <Typography className="text-gray-500 text-xs md:text-sm leading-relaxed mt-0">
                    {item.desc}
                  </Typography>
                </div>
              </div>
            ))}
          </div>

          {/* --- UPDATED CENTRAL IMAGE BOX --- */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-[320px] aspect-4/5 rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl group">
              {/* Actual Image Tag */}
              <Image
                src="/images/Become/Become2.jpeg" // Yahan apni image ka path check kar lein
                alt="Unlock Success"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay with Play Button */}
              <div className="absolute inset-0 flex items-center justify-center bg-blue-900/10 group-hover:bg-transparent transition-colors">
                <div className="bg-white/40 backdrop-blur-sm p-4 rounded-full border border-white/50 shadow-lg">
                  <PlayCircle className="w-10 h-10 text-white" />
                </div>
              </div>

              {/* Bottom Gradient Label */}
              <div className="absolute bottom-0 w-full p-5 bg-linear-to-t from-blue-900 via-blue-900/60 to-transparent text-center">
                <Typography className="text-white text-[11px] uppercase tracking-[0.2em] mt-0 drop-shadow-md">
                  Unlock Success
                </Typography>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-8 order-3">
            {benefitsRight.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row items-start md:items-center gap-4 text-left group"
              >
                <div className="p-3 bg-blue-50 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm shrink-0">
                  {item.icon}
                </div>
                <div>
                  <Typography
                    variant="h5"
                    className="font-bold text-slate-800 text-sm md:text-base mb-1 mt-0 leading-tight"
                  >
                    {item.title}
                  </Typography>
                  <Typography className="text-gray-500 text-xs md:text-sm leading-relaxed mt-0">
                    {item.desc}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
