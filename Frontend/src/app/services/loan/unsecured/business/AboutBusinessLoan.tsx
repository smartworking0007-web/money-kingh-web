"use client";
import React from "react";
import Image from "next/image";
import { Typography } from "@/app/components/ui/Typography";

const AboutBusinessLoan = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* --- LEFT SIDE: CONTENT --- */}
          <div className="space-y-5">
            {/* Meta Title (H3) */}
            <Typography
              variant="h2"
              as="h2"
              className="text-[#002e5b] font-black leading-tight"
            >
              What is a Business Loan?
            </Typography>

            {/* Meta Description Styled (H4) */}
            <Typography
              variant="h5"
              as="p"
              className="text-slate-600 font-medium  border-l-4 border-blue-500 pl-4 py-1"
            >
              Get fast and affordable unsecured business loans in India with
              minimal documentation. Quick approval, low interest rates, and
              easy online application.
            </Typography>

            {/* 1st Paragraph */}
            <Typography variant="b1" className="text-slate-700 leading-relaxed">
              A <span className="font-bold text-slate-900">business loan</span>{" "}
              is a powerful financial solution that helps businesses expand
              operations, manage working capital, and upgrade infrastructure. At
              Money King Financial, we offer{" "}
              <span className="font-bold text-black-600">
                unsecured business loans in India
              </span>{" "}
              with quick approvals, minimal documentation, and no collateral
              requirement, making it ideal for MSMEs and startups.
            </Typography>

            {/* 2nd Paragraph */}
            <Typography variant="b1" className="text-slate-700 leading-relaxed">
              <span className="text-blue-600 font-semibold underline decoration-2 underline-offset-4">
                Since 2016
              </span>
              , we have been a trusted financial partner helping businesses
              achieve their growth goals. We provide fast{" "}
              <span className="font-bold text-slate-900">business loan</span>{" "}
              approvals, competitive interest rates, and a seamless digital
              process across Delhi NCR and PAN India, ensuring reliable
              financial support for every business need.
            </Typography>
          </div>

          {/* --- RIGHT SIDE: CONCEPT IMAGE --- */}
          <div className="relative group">
            {/* Background Decorative Element */}
            <div className="absolute -inset-4 bg-linear-to-tr from-blue-100 to-transparent rounded-3xl -z-10 group-hover:scale-105 transition-transform duration-500" />

            <div className="overflow-hidden rounded-2xl shadow-2xl border border-slate-100">
              <Image
                src="/images/Loan/Business loan.png" // Ensure you save the image from the 2nd upload here
                alt="unsecured business loan India concept image"
                width={600}
                height={400}
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Floating Trust Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-slate-50 flex items-center gap-3">
              <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
                ✓
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold leading-none">
                  Established
                </p>
                <p className="text-lg text-slate-900 font-black">Since 2016</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBusinessLoan;
