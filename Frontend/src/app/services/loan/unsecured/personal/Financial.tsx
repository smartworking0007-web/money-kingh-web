"use client";
import React from 'react';
import Image from 'next/image'; 
import { Typography } from '@/app/components/ui/Typography';
import { Check, Circle } from "lucide-react";

const Financial = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Hero Section with Your Local Image */}
      <div className="relative min-h-[600px] flex items-center pt-10 pb-20">
        
        {/* Optimized Next.js Image using your 1.jpeg from public/images/Loan/ */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/Loan/1.jpeg" 
            alt="Money King Financial Background"
            fill 
            className="object-cover"
            priority 
            quality={95}
          />
          {/* Light overlay to ensure text readability */}
          <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full flex justify-start">
          {/* The Floating White/Blue Card */}
          <div className="bg-[#f0f7ff]/95 md:bg-white/95 shadow-2xl rounded-sm p-8 md:p-12 lg:p-16 max-w-4xl border-l-4 border-[#0056b3]">
            
            <Typography variant="h3" as="h2" className="text-[#0056b3] font-normal mb-8 text-2xl md:text-4xl leading-tight mt-0!">
              Why Choose Money King Financial as Your Personal Loan Partner?
            </Typography>

            <div className="space-y-6">
              {/* Main Intro with Checkmark */}
              <div className="flex gap-4 items-start">
                <Check className="w-5 h-5 text-[#0056b3] mt-1 shrink-0" />
                <Typography variant="b1" className="text-slate-700 leading-relaxed m-0!">
                  At <strong>Money King Financial</strong>, we guide you to the right credit solutions—backed by expertise, not sales pitches. A personal loan is an unsecured loan from NBFCs/banks for personal needs like emergencies, weddings, education, renovation, or debt consolidation — no collateral/guarantor needed.
                </Typography>
              </div>

              {/* Bullet Points with Solid Circles */}
              <div className="space-y-5 pl-9">
                <div className="flex gap-4 items-center">
                  <Circle className="w-2.5 h-2.5 fill-[#0056b3] text-[#0056b3]" />
                  <Typography variant="b1" className="text-slate-700 font-medium m-0!">
                    Fast approval, minimal documentation, and trusted support since 2016 in Delhi.
                  </Typography>
                </div>
                <div className="flex gap-4 items-center">
                  <Circle className="w-2.5 h-2.5 fill-[#0056b3] text-[#0056b3]" />
                  <Typography variant="b1" className="text-slate-700 font-medium m-0!">
                    Transparent advice, no hidden fees or fine print.
                  </Typography>
                </div>
                <div className="flex gap-4 items-center">
                  <Circle className="w-2.5 h-2.5 fill-[#0056b3] text-[#0056b3]" />
                  <Typography variant="b1" className="text-slate-700 font-medium m-0!">
                    Money King Financial helps you get an urgent personal loan in India at the lowest interest rates.
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Financial;