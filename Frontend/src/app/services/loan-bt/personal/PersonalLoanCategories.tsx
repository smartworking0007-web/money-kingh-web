"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";
import { Heart, Plane, Stethoscope, Home, Briefcase, Car } from "lucide-react";

export default function PersonalLoanCategories() {
  const categories = [
    {
      title: "Marriage",
      icon: <Heart size={24} />,
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
    },
    {
      title: "Travel",
      icon: <Plane size={24} />,
      bgColor: "bg-slate-50",
      textColor: "text-slate-600",
    },
    {
      title: "Medical Emergency",
      icon: <Stethoscope size={24} />,
      bgColor: "bg-green-50",
      textColor: "text-green-600",
    },
    {
      title: "Home Renovation",
      icon: <Home size={24} />,
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
    },
    {
      title: "Salaried Employees",
      icon: <Briefcase size={24} />,
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      title: "Second Hand Vehicle",
      icon: <Car size={24} />,
      bgColor: "bg-pink-50",
      textColor: "text-pink-600",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-12 py-10 bg-white font-lexend -mt-15 md:-mt-10 relative z-10">
      {/* --- HEADER --- */}
      <div className="text-center mb-10">
        <Typography
          variant="h3"
          as="h3"
          className="text-[#1e293b] font-black text-xl md:text-3xl mb-3 mt-0"
        >
          Choose the Right Personal Loan for Your Needs
        </Typography>
      </div>

      {/* --- CATEGORIES GRID --- */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
        {categories.map((cat, index) => (
          <div
            key={index}
            className={`${cat.bgColor} border border-transparent hover:border-slate-200 p-6 md:p-8 rounded-24px transition-all duration-300 flex flex-col items-center justify-center text-center group cursor-pointer hover:shadow-md`}
          >
            {/* Icon */}
            <div
              className={`${cat.textColor} mb-3 group-hover:scale-110 transition-transform`}
            >
              {cat.icon}
            </div>

            <Typography className="text-slate-400 text-[10px] md:text-[11px] uppercase font-bold tracking-widest mb-1 mt-0">
              Personal Loan for
            </Typography>

            <Typography className="text-[#1e293b] font-black text-sm md:text-xl mt-0 leading-tight">
              {cat.title}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
}
