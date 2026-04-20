"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";
import { FileText, User, MapPin, Calendar, Activity, Camera, Landmark } from "lucide-react";

const docList = [
  {
    id: "01",
    title: "Identity Proof",
    desc: "Aadhaar Card, PAN Card, Passport, Voter ID, or Driver's License.",
    icon: <User className="w-5 h-5" />,
  },
  {
    id: "02",
    title: "Address Proof",
    desc: "Utility bills, Aadhaar, Passport, or Rental Agreement.",
    icon: <MapPin className="w-5 h-5" />,
  },
  {
    id: "03",
    title: "Age Proof",
    desc: "Birth Certificate, Passport, or any valid Govt. DOB proof.",
    icon: <Calendar className="w-5 h-5" />,
  },
  {
    id: "04",
    title: "Medical Records",
    desc: "Recent medical reports or a signed health declaration form.",
    icon: <Activity className="w-5 h-5" />,
  },
  {
    id: "05",
    title: "Passport Photographs",
    desc: "Recent passport-sized photos (3.5cm x 4.5cm) for KYC.",
    icon: <Camera className="w-5 h-5" />,
  },
  {
    id: "06",
    title: "Income Statements",
    desc: "Salary slips, Form 16, ITR, or bank account statements.",
    icon: <Landmark className="w-5 h-5" />,
  },
];

export default function InsuranceDocuments() {
  return (
    <section className="w-full bg-white py-10 md:py-20 px-4 md:px-10 font-lexend overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="mb-10 md:mb-16 text-left md:text-center">
          <div className="flex items-center md:justify-center space-x-2 mb-4">
            <FileText className="text-blue-600 w-5 h-5" />
            <span className="text-blue-600 font-bold uppercase tracking-wider text-[10px] md:text-sm">Required Checklist</span>
          </div>
          <Typography
            variant="h4"
            as="h3"
            className="text-xl md:text-4xl font-black text-[#1e293b] mb-3 mt-0 leading-tight"
          >
            Important Documents to Buy a Policy
          </Typography>
          <Typography
            variant="b1"
            className="text-gray-500 text-xs md:text-lg max-w-3xl md:mx-auto mt-0"
          >
            Please keep these documents ready to purchase your life insurance policy in India:
          </Typography>
        </div>

        {/* --- DOCUMENTS GRID --- */}
        {/* Mobile: 1 Column | Tablet/Desktop: 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {docList.map((doc) => (
            <div 
              key={doc.id} 
              className="flex items-center space-x-4 p-4 md:p-6 rounded-2xl border border-slate-50 bg-[#f8faff] hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              {/* Compact Icon */}
              <div className="shrink-0">
                <div className="flex items-center justify-center w-10 h-10 md:w-14 md:h-14 bg-white rounded-xl shadow-sm text-blue-600">
                  {doc.icon}
                </div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col">
                <div className="flex items-center space-x-2">
                  <span className="text-blue-300 font-black text-sm md:text-xl">{doc.id}</span>
                  <Typography
                    variant="h5"
                    as="h4"
                    className="text-sm md:text-xl font-bold text-[#1e293b] mt-0"
                  >
                    {doc.title}
                  </Typography>
                </div>
                <Typography
                  variant="b1"
                  className="text-gray-500 text-[11px] md:text-sm leading-snug mt-1"
                >
                  {doc.desc}
                </Typography>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}