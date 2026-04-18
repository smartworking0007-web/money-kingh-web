"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";

export default function CreditCardIndiaPage() {
  return (
    <main className="min-h-screen bg-white font-lexend relative overflow-hidden">
      {/* Subtle Background Blobs for UI Depth */}
      <div className="absolute top-0 right-0 w-[40%] h-[50%] bg-[#004687]/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[30%] h-[40%] bg-[#FF7A00]/5 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2" />

      <section className="max-w-7xl mx-auto px-6 py-16 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT SIDE: Headings */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <Typography
                variant="h2"
                as="h2"
                className="text-[#59ff00] font-text-sm md:text-base uppercase tracking-[0.0em] mt-0"
              >
                Credit Card in India
              </Typography>

              <Typography
                variant="h5"
                className="text-[#a31d1d] text-xl md:text-xl font-black leading-[1.1]  mt-0"
              >
                Smart Spending, Easy Paym ents & Exclusive Rewards <br />
              </Typography>
            </div>

            {/* Brand Closing Text placed here for better flow */}
            <div className="pt-4 border-l-4 border-[#5c1212] pl-6">
              <Typography
                variant="h5"
                className="text-[#000000] md:text-xl mt-0 "
              >
                At Money King Financial, we help you choose the best credit card
                based on your lifestyle and financial needs.
              </Typography>
            </div>
          </div>

          {/* RIGHT SIDE: Description Box */}
          <div className="lg:col-span-5">
            <div className="bg-slate-50 p-8 md:p-10 rounded-2rem border border-slate-100 shadow-sm relative">
              {/* Decorative Quote Icon effect */}
              <div className="absolute top-6 right-8 text-[#004687]/10 font-serif text-8xl leading-none select-none">
                ”
              </div>

              <Typography
                variant="b1"
                className="text-slate-600 text-base md:text-xl leading-relaxed relative z-10 mt-0"
              >
                A credit card is a financial tool that allows you to make
                purchases now and pay later within a billing cycle. It offers
                convenience, rewards, and short-term credit without immediate
                cash outflow.
              </Typography>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
