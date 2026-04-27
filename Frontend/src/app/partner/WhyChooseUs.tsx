"use client";
import Link from "next/link";
import { Button } from "../components/ui/Button";
import React from "react";
import { Typography } from "@/app/components/ui/Typography";
import { Users, Banknote, Briefcase, MapPin } from "lucide-react";


const stats = [
  {
    title: "5000+ Channel Partners",
    desc: "Trusted NBFC with a large channel partner base.",
    icon: <Users className="w-5 h-5 text-green-600" />,
  },
  {
    title: "100% Commission Payout",
    desc: "A unique weekly payout scheme for our partners.",
    icon: <Banknote className="w-5 h-5 text-green-600" />,
  },
  {
    title: "7+ Product Portfolio",
    desc: "Versatile solutions for all types of businesses.",
    icon: <Briefcase className="w-5 h-5 text-green-600" />,
  },
  {
    title: "Serving 100+ Locations",
    desc: "Wide Branch Network across the entire region.",
    icon: <MapPin className="w-5 h-5 text-green-600" />,
  },
];

export default function WhyChooseUs() {
  return (
    // Background gradient matched with your image (Blue to Green)
    <section className="w-full bg-linear-to-r from-blue-700  py-16 md:py-24 px-4 md:px-10 font-lexend overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* --- LEFT CONTENT --- */}
          <div className="text-white space-y-6">
            <Typography
              variant="h3"
              as="h2"
              className="text-3xl md:text-5xl font-black leading-tight mt-0"
            >
              Why <span className="opacity-90">Choose us?</span>
            </Typography>

            <Typography className="text-blue-50 text-sm md:text-base leading-relaxed max-w-lg mt-0 opacity-90">
              At Money King, we combine trust, transparency, and tailored
              financial solutions to empower your growth. With quick approvals,
              customer-first service, and competitive rates – we’re here to make
              finance simpler for you.
            </Typography>
            <Link href="https://application.dsacrm.com/e22787fa-e05f-4643-a0af-d4a5b98889ba/become-partner">
              <Button
                size="lg"
                className="bg-[#004687]! rounded-xl! h-12! md:h-14! px-8! md:px-10! shadow-lg! cursor-pointer"
              >
                APPLY NOW
              </Button>
            </Link>
          </div>

          {/* --- RIGHT STATS CARDS --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {stats.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-xl hover:translate-y-[-5px] transition-transform duration-300 group"
              >
                {/* Icon Container */}
                <div className="bg-green-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4  group-hover:text-white transition-colors">
                  {item.icon}
                </div>

                {/* Title with highlighted numbers */}
                <Typography
                  variant="h5"
                  className="text-slate-800 font-black text-lg md:text-xl mb-2 mt-0 leading-tight"
                >
                  <span className="text-green-600">
                    {item.title.split(" ")[0]}
                  </span>{" "}
                  {item.title.split(" ").slice(1).join(" ")}
                </Typography>

                {/* Description */}
                <Typography className="text-slate-500 text-xs md:text-sm leading-relaxed mt-0">
                  {item.desc}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
