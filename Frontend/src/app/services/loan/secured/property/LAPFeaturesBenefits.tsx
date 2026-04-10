"use client";
import React from "react";
import { Typography } from "@/app/components/ui/Typography";

const benefitsData = [
  { title: "Competitive Interest Rates", desc: "Benefit from attractive interest rates starting from 9.25% p.a." },
  { title: "Easy Balance Transfer Facility", desc: "Transfer your existing loan and reduce your EMI burden." },
  { title: "Doorstep & Digital Processing", desc: "Apply seamlessly from your home or office with minimal paperwork." },
  { title: "Additional Financial Benefits", desc: "Avail value-added services like overdraft and top-up loans." }
];

const LAPFeaturesBenefits = () => {
  return (
    // py-20 ko badal kar pt-0 pb-16 kiya hai taaki upar wale section se gap khatam ho jaye
    <section className="w-full bg-white pt-0 pb-16 font-lexend">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-10">
          <Typography 
            variant="h3" 
            as="h3" 
            className="text-[#1e293b] font-bold text-2xl md:text-[32px] leading-tight"
          >
            Features and Benefits of LAP Loan in India
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefitsData.map((item, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-lg transition-all flex flex-col h-full"
            >
              <Typography variant="h5" as="h3" className="text-[#1e293b] font-bold text-lg mb-2">
                {item.title}
              </Typography>
              <Typography variant="b3" as="p" className="text-slate-500 text-sm leading-relaxed">
                {item.desc}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LAPFeaturesBenefits;