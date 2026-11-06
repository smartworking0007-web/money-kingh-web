"use client";

import React, { useState } from "react";
import NextLink from "next/link";
import { Sparkles, X } from "lucide-react";

export const DiwaliBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  if (!isVisible) return null;

  return (
    <div className="relative w-full bg-gradient-to-r from-amber-900 via-amber-800 to-amber-950 text-white overflow-hidden shadow-lg border-b-2 border-amber-400/40">
      {/* Decorative Glow Elements */}
      <div className="absolute top-0 left-10 w-24 h-24 bg-amber-500/20 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8 flex items-center justify-between gap-4 relative z-10">
        
        {/* Left Side: Festive Icon & Content */}
        <div className="flex items-center gap-3 md:gap-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-500/20 text-yellow-300 border border-amber-400/40 shrink-0 animate-pulse">
            🪔
          </div>
          
          <div className="text-left">
            <div className="flex items-center gap-2">
              <span className="font-extrabold tracking-wide text-yellow-300 text-sm md:text-base uppercase flex items-center gap-1">
                <Sparkles size={16} className="text-yellow-400" /> Shubh Diwali &amp; Prosperous Financial Year!
              </span>
            </div>
            <p className="text-xs md:text-sm text-amber-100 font-medium m-0">
              Is Diwali apne sapnon ka ghar aur business grow karein. Best Loan &amp; Investment Deals with Money King Finance.
            </p>
          </div>
        </div>

        {/* Right Side: Action Button & Close */}
        <div className="flex items-center gap-3 shrink-0">
          <NextLink
            href="https://moneykingfinancial.com/"
            className="hidden sm:inline-flex items-center gap-1 bg-yellow-400 hover:bg-yellow-300 text-amber-950 font-bold text-xs md:text-sm px-4 py-2 rounded-full transition shadow-md hover:shadow-yellow-400/30"
          >
            Explore Offers 🪔
          </NextLink>

          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="text-amber-200 hover:text-white p-1 rounded-lg hover:bg-amber-800/50 transition cursor-pointer"
            aria-label="Close Diwali Banner"
            type="button"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiwaliBanner;