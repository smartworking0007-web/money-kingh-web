"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { partnerLogos } from "@/data/mutualPartners";
import { Typography } from "../ui/Typography"; // Adjust path as needed

const MutualPartners: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const scrollAmount = 200;
    let scrollTo =
      direction === "left"
        ? scrollRef.current.scrollLeft - scrollAmount
        : scrollRef.current.scrollLeft + scrollAmount;

    const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;

    if (scrollTo < 0) scrollTo = maxScroll;
    if (scrollTo > maxScroll) scrollTo = 0;

    scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (!scrollRef.current) return;

      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollRef.current.scrollTo({ left: scrollLeft + 280, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50 border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Typography
          variant="h3"
          as="h3"
          className="text-[#1e2e5c] text-center mb-10 md:mb-14 font-bold tracking-tight"
        >
          Our Mutual Fund Partners
        </Typography>

        <div
          className="relative flex items-center group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <button
            onClick={() => handleScroll("left")}
            className="absolute left-0 z-20 p-3 bg-white/95 shadow-lg rounded-full hover:bg-gray-50 transition-all border border-gray-200 hidden md:flex items-center justify-center -translate-x-1/2 opacity-0 group-hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#586ca0]"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-7 h-7 text-[#1e2e5c]" />
          </button>

          <div
            ref={scrollRef}
            className="flex-1 flex overflow-x-auto no-scrollbar gap-4 md:gap-8 py-8 px-4 md:px-8 items-center snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {partnerLogos.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 snap-center w-[160px] md:w-[220px] h-16 md:h-24 flex items-center justify-center transition-all duration-300 hover:scale-105"
              >
                <Image
                  src={partner.src}
                  alt={`${partner.name} Mutual Fund logo`}
                  title={partner.name}
                  width={240}
                  height={96}
                  className="h-12 md:h-16 rounded-md w-auto object-contain"
                  priority={index < 10}
                  loading={index < 10 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>

          <button
            onClick={() => handleScroll("right")}
            className="absolute right-0 z-20 p-3 bg-white/95 shadow-lg rounded-full hover:bg-gray-50 transition-all border border-gray-200 hidden md:flex items-center justify-center translate-x-1/2 opacity-0 group-hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#586ca0]"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-7 h-7 text-[#1e2e5c]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MutualPartners;
