"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link"; // 1. Import Link
import { heroSlides } from "@/data/heroSlides";
import { Typography } from "../ui/Typography";

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (heroSlides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden bg-black">
      <div className="relative h-[70vh] sm:h-[80vh] lg:h-[90vh] w-full">
        <div
          className="flex h-full transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {heroSlides.map((slide, index) => (
            <div key={slide.id} className="min-w-full h-full relative">
              {/* Overlays */}
              <div className="absolute inset-0 bg-black/30 z-10" />
              <div className="absolute inset-0 bg-linear-to-r from-black/95 via-black/20 to-transparent z-10" />

              <Image
                src={slide.imageUrl}
                alt={slide.imageAlt}
                fill
                priority={index === 0}
                className="object-cover object-top lg:object-[center_5%] transition-all duration-700"
                sizes="100vw"
                quality={100}
              />

              {/* TEXT CONTENT */}
              <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 sm:px-12 md:px-24">
                <div className="max-w-4xl">
                  <Typography
                    variant="d2"
                    as="h1"
                    className="text-white mb-6 mt-0 drop-shadow-2xl leading-[1.1] whitespace-pre-line"
                  >
                    {slide.title}
                  </Typography>

                  <Typography
                    variant="s1"
                    as="p"
                    className="text-white/90 max-w-2xl mb-10 leading-relaxed font-normal drop-shadow-md"
                  >
                    {slide.description}
                  </Typography>

                  {/* BUTTONS SECTION */}
                  <div className="flex flex-col sm:flex-row gap-5">
                    {/* 2. Wrap Button with Next.js Link */}
                    <Link href={slide.contactLink} className="contents">
                      <button className="bg-white px-10 py-4 rounded-full transition-all hover:scale-105 active:scale-95 shadow-2xl group cursor-pointer">
                        <Typography
                          variant="btn-primary"
                          className="text-black font-bold!"
                        >
                          Book a Consultation
                        </Typography>
                      </button>
                    </Link>

                    <button className="border-2 border-white px-10 py-4 rounded-full transition-all hover:bg-white/10 active:scale-95 backdrop-blur-sm group cursor-pointer">
                      <Typography
                        variant="btn-primary"
                        className="text-white font-bold!"
                      >
                        Explore Our Services
                      </Typography>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DOTS */}
        {heroSlides.length > 1 && (
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-30">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-500 rounded-full ${
                  currentSlide === index
                    ? "w-12 h-2.5 bg-white shadow-lg"
                    : "w-2.5 h-2.5 bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
