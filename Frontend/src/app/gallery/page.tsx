"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Typography } from "@/app/components/ui/Typography";

export default function GalleryPage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Images list (Aap apni converted .jpg ya .png images ka path yahan dein)
  const [imagesList, setImagesList] = useState([
    "/images/gallery/Gallery1.jpg",
    "/images/gallery/Gallery2.jpg",
    "/images/gallery/Gallery3.jpg",
    "/images/gallery/Gallery4.jpg",
    "/images/gallery/Gallery5.jpg",
  ]);

  // Clock-like automatic shift effect (Har 3 second me image clock ki tarah rotate hogi)
  useEffect(() => {
    const timer = setInterval(() => {
      setImagesList((prev) => {
        const copy = [...prev];
        const firstElement = copy.shift();
        if (firstElement) copy.push(firstElement);
        return copy;
      });
    }, 3000); // 3 seconds interval

    return () => clearInterval(timer);
  }, []);

  // Scroll handler for dynamic opening
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const progress = Math.min(
          Math.max((windowHeight - rect.top) / (rect.height + windowHeight), 0),
          1,
        );
        setScrollProgress(progress);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Thoda aur zyada open / spread karne ke liye values ko bada kiya gaya hai
  const getCardStyle = (index: number) => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    // Factor increase kiya taaki aur jyada open ho
    const factor = isMobile ? scrollProgress * 1.8 : scrollProgress * 3.2;
    const currentProgress = Math.min(factor, 1);

    // Zyada spread angle aur wider gaps ke liye coordinates
    const baseRotations = [-30, -15, 0, 15, 30];
    const baseTranslates = isMobile
      ? [-110, -55, 0, 55, 110]
      : [-500, -250, 0, 250, 500];
    const baseYOffsets = isMobile ? [20, 10, 0, 10, 20] : [80, 35, 0, 35, 80];

    return {
      transform: `translateX(${baseTranslates[index] * currentProgress}px) translateY(${baseYOffsets[index] * currentProgress}px) rotate(${baseRotations[index] * currentProgress}deg)`,
      zIndex: 10 + index,
    };
  };

  const tourGalleries = [
    {
      id: 1,
      date: "2025. FEBRUARY",
      location: "/ Boston, MA",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
      span: "col-span-1 md:col-span-1"
    },
    {
      id: 2,
      date: "2025. MARCH",
      location: "/ Washington",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=800&auto=format&fit=crop",
      span: "col-span-1 md:col-span-2"
    },
    {
      id: 3,
      date: "2025. JANUARY",
      location: "/ Toronto, ON",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop",
      span: "col-span-1 md:col-span-1"
    }
  ];

  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* 1st Section: Header & Dynamic Open Clock-like Carousel */}
      <section ref={sectionRef} className="relative pt-24 pb-20 flex flex-col items-center justify-center text-center">
        <div className="mb-4">
          <Typography variant="caption" className="text-gray-500 font-medium tracking-wide text-sm uppercase">
            Today&apos;s Pick
          </Typography>
        </div>

        <h1 className="max-w-5xl text-4xl sm:text-6xl lg:text-7xl font-extrabold text-black tracking-tight uppercase leading-[1.1] mb-6 px-4">
          Award Winning <br /> Creators
        </h1>

        <p className="max-w-xl text-gray-600 text-base sm:text-lg mb-8 px-4 leading-relaxed">
          Explore a collection <span className="text-gray-400">where art and design merge to shape what&apos;s next.</span>{" "}
          <strong className="font-semibold text-black">This gallery isn&apos;t just about visuals.</strong>
        </p>

        <div className="mb-12">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-black px-8 py-4 text-sm font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Start for Free
          </a>
        </div>

        {/* Dynamic Clock-like Wide Open Carousel Setup */}
        <div className="w-full py-20 flex flex-col items-center justify-center overflow-visible">
          <div className="relative w-full max-w-7xl h-80 sm:h-105 md:h-140 flex justify-center items-center overflow-visible">
            {imagesList.map((src, index) => (
              <div
                key={`${src}-${index}`}
                style={getCardStyle(index)}
                className="absolute w-44 sm:w-64 md:w-82 aspect-4/5 bg-neutral-900 rounded-[28px] overflow-hidden shadow-2xl border border-neutral-800 transition-all duration-700 ease-in-out"
              >
                <Image
                  src={src}
                  alt="Gallery Creator"
                  fill
                  sizes="(max-width: 640px) 200px, 350px"
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2nd Section: Dribbble Style Cinematic Gallery Concept */}
      <section className="bg-[#0b0b0b] text-white py-24 px-4 sm:px-8 lg:px-16 rounded-t-[40px] sm:rounded-t-[60px] relative">
        <div className="max-w-[1400px] mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-zinc-800 pb-8">
            <div>
              <span className="text-zinc-500 text-xs sm:text-sm uppercase tracking-widest block mb-2">Gallery & Highlights</span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif tracking-wide">
                The Stage Her <br /> Dominion
              </h2>
            </div>
            <div className="mt-6 md:mt-0 max-w-md">
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                This subpage concept captures raw power and presence—blending motion, music, and memory into a cinematic digital experience. Every scroll feels like a front-row seat.
              </p>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 mb-12 group">
            <div className="relative h-[350px] sm:h-[500px] lg:h-[600px] w-full">
              <img
                src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1600&auto=format&fit=crop"
                alt="Live Concert"
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              
              <div className="absolute top-6 left-6 flex items-center space-x-2 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                <span className="text-xs font-semibold tracking-wider uppercase text-white">LIVE NOW / Jakarta, ID</span>
              </div>

              <div className="absolute bottom-8 left-8 right-8 flex flex-col sm:flex-row justify-between items-start sm:items-end">
                <div>
                  <h3 className="text-2xl sm:text-4xl font-light text-white mb-2">NIKI is Live — Watch the Magic Unfold</h3>
                  <p className="text-zinc-400 text-sm sm:text-base max-w-xl">
                    Catch real-time energy and emotion as artists command the stage with powerful performances.
                  </p>
                </div>
                <a
                  href="/contact"
                  className="mt-4 sm:mt-0 bg-white text-black font-medium px-6 py-3 rounded-full hover:bg-zinc-200 transition-colors text-sm"
                >
                  BOOK NOW
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tourGalleries.map((item) => (
              <div key={item.id} className={`relative rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 group h-[400px] ${item.span}`}>
                <img
                  src={item.image}
                  alt={item.date}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute top-6 left-6">
                  <span className="text-white font-medium text-sm tracking-wider block">{item.date}</span>
                  <span className="text-zinc-400 text-xs">{item.location}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}