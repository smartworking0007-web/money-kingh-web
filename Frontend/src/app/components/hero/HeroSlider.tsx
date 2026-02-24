"use client";

import Image from "next/image";
import { heroSlides } from "@/data/heroSlides";

export default function HeroSlider() {
  const slide = heroSlides[0];

  return (
    <div className="w-full flex justify-center mt-2 mb-6 sm:mb-10 px-2 sm:px-6">
      <div
        className="relative w-full max-w-7xl 
                      aspect-[16/9] sm:aspect-[21/9] 
                      rounded-lg sm:rounded-3xl 
                      overflow-hidden"
      >
        <Image
          src={slide.imageUrl}
          alt={slide.imageAlt}
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
