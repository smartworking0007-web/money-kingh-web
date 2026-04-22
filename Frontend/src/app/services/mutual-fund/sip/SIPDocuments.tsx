"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";
import {
  CreditCard,
  MapPin,
  Landmark,
  Camera,
  CheckCircle2,
  LucideIcon, // Type safety ke liye import kiya
} from "lucide-react";

// Typescript interface for better structure
interface DocItem {
  title: string;
  icon: LucideIcon; // Component type use kiya hai
  iconColor: string;
  description: string;
  points: string[];
  highlight: boolean;
}

const documents: DocItem[] = [
  {
    title: "PAN Card (Mandatory)",
    icon: CreditCard,
    iconColor: "text-blue-600",
    description: "Permanent Account Number is compulsory for all SIP investments.",
    points: ["Tax identification", "Bank account linking", "KYC verification"],
    highlight: false,
  },
  {
    title: "Address Proof",
    icon: MapPin,
    iconColor: "text-purple-600",
    description: "Valid address proof is required to complete your KYC process.",
    points: ["Identity Card", "Passport", "Voter ID / Driving License"],
    highlight: true,
  },
  {
    title: "Bank Details",
    icon: Landmark,
    iconColor: "text-emerald-600",
    description: "A valid bank account is required for auto-debit transactions.",
    points: ["Cancelled cheque", "Bank statement", "IFSC code"],
    highlight: false,
  },
  {
    title: "Photograph",
    icon: Camera,
    iconColor: "text-orange-600",
    description: "A recent passport-size photograph is required for records.",
    points: ["KYC documentation", "Identity verification", "Recent photo"],
    highlight: false,
  },
];

export default function SIPDocuments() {
  return (
    <section className="py-16 px-6 md:px-12 bg-white max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6">
        <div className="max-w-2xl">
          <span className="text-blue-600 font-semibold text-sm mb-3 block uppercase tracking-wider">
            • Requirements
          </span>
          <Typography
            variant="h2"
            as="h3"
            className="text-[#1a1a1a] font-bold text-3xl md:text-5xl leading-[1.15]"
          >
            List of Documents Required <br className="hidden md:block" /> for
            SIP
          </Typography>
        </div>
        <p className="text-gray-500 max-w-xs md:text-right text-sm leading-relaxed">
          Ensure you have these digital copies ready for a seamless, 100%
          paperless onboarding experience.
        </p>
      </div>

      {/* Documents Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {documents.map((doc, index) => {
          // Destructuring the icon component
          const Icon = doc.icon;

          return (
            <div
              key={index}
              className={`relative p-8 rounded-3xl border transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col h-full bg-linear-to-br ${
                doc.highlight
                  ? "from-cyan-500 via-blue-600 to-purple-600 text-white border-transparent"
                  : "from-slate-50 to-white border-gray-100"
              }`}
            >
              {/* Icon Container */}
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-8 transition-colors ${
                  doc.highlight 
                    ? "bg-white/20 text-white" 
                    : `bg-white shadow-md ${doc.iconColor}`
                }`}
              >
                <Icon className="w-6 h-6" />
              </div>

              {/* Content */}
              <h4
                className={`text-xl font-bold mb-4 ${
                  doc.highlight ? "text-white" : "text-gray-900"
                }`}
              >
                {doc.title}
              </h4>

              <p
                className={`text-sm mb-6 grow ${
                  doc.highlight ? "text-white/90" : "text-gray-500"
                }`}
              >
                {doc.description}
              </p>

              {/* Bullet Points */}
              <ul className="space-y-3 mt-auto">
                {doc.points.map((point, pIndex) => (
                  <li
                    key={pIndex}
                    className="flex items-center gap-3 text-xs font-semibold"
                  >
                    <CheckCircle2
                      className={`w-4 h-4 shrink-0 ${
                        doc.highlight ? "text-white" : "text-blue-500"
                      }`}
                    />
                    <span
                      className={doc.highlight ? "text-white/95" : "text-gray-700"}
                    >
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}