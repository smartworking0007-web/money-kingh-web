"use client";

import React, { useState } from "react";
import { Typography } from "@/app/components/ui/Typography";
import { Button } from "@/app/components/ui/Button";
import StockMarketInvestment from "./StockMarketInvestment";
import InvestmentOpportunities from "./InvestmentOpportunities";
import TestimonialsSection from "./TestimonialsSection";
import TradingFeatures from "./TradingFeatures";
import AssetClasses from "./AssetClasses";
import OptionsTools from "./OptionsTools";
import FAQSection from "./FAQSection";

export default function MStockHeroPage() {
  // Mobile number state
  const [mobileNumber, setMobileNumber] = useState("");

  // Redirect function to your link
  const handleRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    if (mobileNumber.length === 10) {
      const baseUrl = "https://ekyc.mstock.com/Register-with-us?pdc=AE2D3E733";
      // Redirecting with the number
      window.location.href = `${baseUrl}&mobile=${mobileNumber}`;
    } else {
      alert("Please enter a valid 10-digit mobile number");
    }
  };

  return (
    <main className="min-h-screen bg-white font-sans overflow-x-hidden">
      {/* --- HERO SECTION --- */}
      <section className="relative w-full bg-[#FFF9F5] overflow-hidden pt-12 pb-24 md:pt-24 md:pb-40">
        {/* Background Candlestick Chart Decoration */}
        <div className="absolute inset-0 z-0 opacity-[0.05] md:opacity-[0.07] pointer-events-none">
          <div
            className="w-full h-full bg-repeat-x"
            style={{
              backgroundImage: `url('https://www.mstock.com/assets/images/home-banner-chart.svg')`,
              backgroundSize: "600px md:800px",
              backgroundPosition: "top center",
            }}
          ></div>
        </div>

        {/* Smooth Wave Graphic */}
        <div className="absolute bottom-0 left-0 w-full leading-none z-0">
          <svg
            className="relative block w-full h-80px md:h-[180px]"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192V320H0Z"
            ></path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-5 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Side: Headlines */}
            <div className="lg:col-span-7 text-center lg:text-left flex flex-col justify-center">
              <Typography
                variant="h1"
                as="h1"
                className="text-[#003B73] font-black text-3xl sm:text-4xl md:text-6xl lg:text-[64px] leading-tight md:leading-[1.1] mb-4 md:mb-6 md:whitespace-nowrap drop-shadow-sm"
              >
                FREE Demat Account.
                <br className="hidden md:block" />
                <span className="inline-block md:mt-2">
                  FREE Delivery Forever!
                </span>
              </Typography>

              <div className="space-y-2 md:space-y-3">
                <p className="text-[#1e293b] text-lg md:text-2xl font-medium">
                  Superfast trading{" "}
                  <span className="font-light opacity-60">platform</span>
                </p>
                <p className="text-[#1e293b] text-lg md:text-2xl font-bold flex flex-wrap justify-center lg:justify-start items-center gap-1.5 md:gap-2">
                  ₹5 brokerage{" "}
                  <span className="font-normal text-gray-500 text-sm md:text-xl italic">
                    on Intraday, F&O and MTF
                  </span>
                </p>
              </div>
            </div>

            {/* Right Side: Form Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end mt-4 md:mt-0">
              <div className="w-full max-w-[390px] bg-[#003B73] rounded-2xl p-6 md:p-9 shadow-[0_20px_50px_rgba(0,59,115,0.3)]">
                <Typography
                  variant="h5"
                  className="text-white font-bold mb-6 text-center text-lg md:text-xl leading-snug"
                >
                  Open FREE Demat Account <br />
                  <span className="font-light text-blue-200 text-base md:text-lg">
                    with m.Stock
                  </span>
                </Typography>

                <form className="space-y-5 md:space-y-6" onSubmit={handleRedirect}>
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                      <span className="text-gray-400 font-bold">+91</span>
                      <div className="w-1px h-5 md:h-6 bg-gray-200"></div>
                    </div>
                    <input
                      type="tel"
                      required
                      maxLength={10}
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ""))}
                      placeholder="Enter mobile number"
                      className="w-full pl-16 md:pl-20 pr-4 py-3.5 md:py-4 rounded-xl bg-white text-black font-semibold text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-inner"
                    />
                  </div>

                  <div className="flex items-start gap-3 text-left">
                    <input
                      type="checkbox"
                      id="terms"
                      required
                      className="mt-1 w-4 h-4 accent-orange-500 cursor-pointer"
                    />
                    <label
                      htmlFor="terms"
                      className="text-white text-[10px] md:text-[12px] leading-snug opacity-90 cursor-pointer select-none"
                    >
                      I have read & understood the{" "}
                      <span className="underline decoration-blue-300">T&C</span>
                    </label>
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-[#FF7A00] hover:bg-[#E66E00] text-white font-black py-3.5 md:py-4.5 rounded-xl text-lg md:text-xl transition-all shadow-lg active:scale-95 cursor-pointer"
                  >
                    Open an Account Now
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURE HIGHLIGHT BAR --- */}
      <div className="relative z-20 -mt-8 md:-mt-13 px-5 md:px-6">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl md:rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-gray-100 p-6 md:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-0 items-center">
            <div className="text-center md:border-r border-gray-100 px-2 pb-4 md:pb-0">
              <p className="text-3xl md:text-4xl font-black text-[#FF7A00] mb-0.5">
                ₹5{" "}
                <span className="text-base md:text-xl font-bold uppercase">
                  Brokerage
                </span>
              </p>
              <p className="text-gray-400 text-[10px] md:text-sm font-bold uppercase tracking-wider">
                Intraday, F&O, and MTF
              </p>
            </div>

            <div className="text-center md:border-r gray-100 px-2 py-4 md:py-0 border-t border-b md:border-t-0 md:border-b-0 bgray-50">
              <p className="text-3xl md:text-4xl font-black text-[#003B73] mb-0.5">
                ₹0{" "}
                <span className="text-base md:text-xl font-bold uppercase">
                  Brokerage
                </span>
              </p>
              <p className="text-gray-400 text-[10px] md:text-sm font-bold uppercase tracking-wider">
                Delivery, IPO, ETF & MF
              </p>
            </div>

            <div className="text-center px-2 pt-4 md:pt-0">
              <p className="text-4xl md:text-5xl font-black text-[#003B73] mb-0.5">
                ₹0
              </p>
              <p className="text-gray-400 text-[10px] md:text-sm font-bold uppercase tracking-wider">
                A/C opening fee & AMC
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- BAKI SARE SECTIONS --- */}
      <section className="bg-white py-12 md:py-20">
        <StockMarketInvestment />
      </section>

      <section className="bg-white py-12 md:py-20">
        <InvestmentOpportunities />
      </section>

      <section className="bg-white py-12 md:py-20">
        <TestimonialsSection />
      </section>

      <section className="bg-white py-12 md:py-20">
        <TradingFeatures />
      </section>

      <section className="bg-white py-12 md:py-20">
        <AssetClasses />
      </section>

      <section className="bg-white py-12 md:py-20">
        <OptionsTools />
      </section>

      <section className="bg-white py-12 md:py-20">
        <FAQSection />
      </section>
    </main>
  );
}