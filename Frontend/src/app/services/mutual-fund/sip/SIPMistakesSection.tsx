"use client";

import React, { useState, useRef } from "react";
import { Typography } from "@/app/components/ui/Typography";
import {
  AlertCircle,
  TrendingUp,
  Wallet,
  Search,
  Target,
  Clock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const mistakes = [
  {
    title: "Not boosting your SIP",
    desc: "Whenever you have extra funds, boost your SIP. Combination of regular SIP and top-ups leads to greater returns.",
    icon: <TrendingUp className="w-5 h-5 text-pink-500" />,
  },
  {
    title: "Choosing a high investment",
    desc: "Choose an amount you can sustain. A very high SIP might become a burden during financial emergencies.",
    icon: <Wallet className="w-5 h-5 text-pink-500" />,
  },
  {
    title: "Opting for the wrong fund",
    desc: "Research based on your risk appetite and goals. Ensure the fund aligns with your long-term horizon.",
    icon: <Search className="w-5 h-5 text-pink-500" />,
  },
  {
    title: "Setting unrealistic goals",
    desc: "Expect realistic returns (12%-15%). Assuming much higher returns can lead to poor financial decisions.",
    icon: <Target className="w-5 h-5 text-pink-500" />,
  },
  {
    title: "Preferring only lump sum",
    desc: "SIP is for everyone. It benefits from rupee cost averaging, buying more units when markets are low.",
    icon: <AlertCircle className="w-5 h-5 text-pink-500" />,
  },
  {
    title: "Making short-term investments",
    desc: "Tenure is more important than amount. SIP needs time to grow through the power of compounding.",
    icon: <Clock className="w-5 h-5 text-pink-500" />,
  },
];

export default function SIPMistakesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // स्क्रॉल होने पर एक्टिव डॉट को अपडेट करना
  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const firstCard = container.firstElementChild as HTMLElement;
    if (!firstCard) return;

    const cardWidth = firstCard.offsetWidth + 16;
    const newIndex = Math.round(container.scrollLeft / cardWidth);
    setActiveIndex(Math.max(0, Math.min(newIndex, mistakes.length - 1)));
  };

  // किसी भी कार्ड नंबर पर स्क्रॉल करना
  const scrollToCard = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const firstCard = container.firstElementChild as HTMLElement;
    if (!firstCard) return;

    const cardWidth = firstCard.offsetWidth + 16;
    container.scrollTo({
      left: cardWidth * index,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  // बाएँ स्क्रॉल (Previous)
  const handlePrev = () => {
    if (activeIndex > 0) {
      scrollToCard(activeIndex - 1);
    }
  };

  // दाएँ स्क्रॉल (Next)
  const handleNext = () => {
    if (activeIndex < mistakes.length - 1) {
      scrollToCard(activeIndex + 1);
    }
  };

  return (
    <section className="w-full bg-slate-50 py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 font-lexend overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER WITH DESKTOP/MOBILE HEADINGS --- */}
        <div className="flex items-end justify-between mb-6 sm:mb-8 md:mb-12">
          <div>
            <Typography
              variant="h3"
              as="h2"
              className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-800 tracking-tight m-0"
            >
              6 mistakes to avoid
            </Typography>
            <Typography
              variant="h5"
              as="p"
              className="text-slate-500 font-normal text-sm sm:text-base md:text-lg mt-2 leading-relaxed max-w-2xl"
            >
              Common pitfalls new investors make when starting a SIP and how to steer clear of them.
            </Typography>
          </div>

          {/* मोबाइल/टैबलेट के लिए टॉप ऐरो बटन्स */}
          <div className="flex md:hidden items-center gap-2 shrink-0 ml-4">
            <button
              type="button"
              onClick={handlePrev}
              disabled={activeIndex === 0}
              aria-label="Previous"
              className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all ${
                activeIndex === 0
                  ? "border-slate-200 text-slate-300 opacity-40"
                  : "border-slate-300 bg-white text-slate-700 shadow-sm active:scale-95"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={activeIndex === mistakes.length - 1}
              aria-label="Next"
              className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all ${
                activeIndex === mistakes.length - 1
                  ? "border-slate-200 text-slate-300 opacity-40"
                  : "border-slate-300 bg-white text-slate-700 shadow-sm active:scale-95"
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* --- CARDS CONTAINER (TOUCH SWIPE + BUTTON SCROLL) --- */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-smooth pb-4 md:pb-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {mistakes.map((item, idx) => (
            <div
              key={idx}
              className="w-[84vw] max-w-[340px] md:w-auto shrink-0 snap-center bg-white p-5 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl border-t-4 border-pink-500 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-xl sm:rounded-2xl bg-pink-50 flex items-center justify-center mb-4 sm:mb-5">
                  {item.icon}
                </div>

                <Typography
                  variant="h4"
                  as="h3"
                  className="text-base sm:text-lg md:text-xl font-bold text-slate-800 m-0 leading-snug break-words"
                >
                  {item.title}
                </Typography>

                <Typography
                  variant="b1"
                  as="p"
                  className="text-slate-500 text-xs sm:text-sm md:text-base leading-relaxed mt-2.5"
                >
                  {item.desc}
                </Typography>
              </div>
            </div>
          ))}
        </div>

        {/* --- BOTTOM CONTROLS (DOTS + BOTTOM ARROWS FOR EASY REACH) --- */}
        <div className="flex items-center justify-between mt-5 md:hidden px-1">
          {/* बायाँ ऐरो */}
          <button
            type="button"
            onClick={handlePrev}
            disabled={activeIndex === 0}
            className={`p-2 rounded-lg text-slate-600 transition-opacity ${
              activeIndex === 0 ? "opacity-20 pointer-events-none" : "active:bg-slate-200"
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* बीच में डॉट्स */}
          <div className="flex items-center gap-1.5">
            {mistakes.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollToCard(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === i ? "w-6 bg-pink-500" : "w-2 bg-pink-200"
                }`}
              />
            ))}
          </div>

          {/* दायाँ ऐरो */}
          <button
            type="button"
            onClick={handleNext}
            disabled={activeIndex === mistakes.length - 1}
            className={`p-2 rounded-lg text-slate-600 transition-opacity ${
              activeIndex === mistakes.length - 1 ? "opacity-20 pointer-events-none" : "active:bg-slate-200"
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}