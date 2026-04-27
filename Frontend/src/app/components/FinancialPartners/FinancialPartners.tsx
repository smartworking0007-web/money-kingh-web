"use client";

import React from 'react';
import Image from 'next/image';
import { partnerLogos } from '@/data/FinancialPartners';
import { Typography } from '../ui/Typography';

const FinancialPartners: React.FC = () => {
  // Triple items for seamless looping
  const duplicatedLogos = [...partnerLogos, ...partnerLogos, ...partnerLogos];

  return (
    // 'block' aur 'w-full' ensures ki ye mobile pe gayab na ho
    <section className="w-full py-12 md:py-20 bg-white border-y border-slate-100 relative z-50 font-lexend block clear-both min-h-[200px]">
      <div className="w-full overflow-hidden">
        
        <div className="text-center mb-8 md:mb-16 px-4">
          <Typography 
            variant="h3" 
            as="h3" 
            className="text-[#1e2e5c] font-black text-2xl md:text-4xl tracking-tight block"
          >
            Our Financial Partners
          </Typography>
        </div>

        {/* Marquee Wrapper */}
        <div className="relative flex overflow-hidden w-full py-4 group">
          
          {/* Side Fades - Mobile pe visibility ke liye opacity kam ki hai */}
          <div className="absolute inset-y-0 left-0 w-12 md:w-44 bg-linear-to-r from-white via-white/80 to-transparent z-40 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-12 md:w-44 bg-linear-to-l from-white via-white/80 to-transparent z-40 pointer-events-none" />

          {/* Scrolling Track - 'flex-nowrap' is important */}
          <div className="flex animate-marquee-scroll flex-nowrap gap-10 md:gap-24 items-center">
            {duplicatedLogos.map((partner, index) => (
              <div 
                key={index} 
                className="shrink-0 px-2 md:px-4"
              >
                <Image 
                  src={partner.src} 
                  alt={partner.name}  
                  width={140} 
                  height={50} 
                  // Mobile pe 'h-10' fixed rakha hai taaki dikhe
                  className="h-10 md:h-16 w-auto object-contain block opacity-100" 
                  priority
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee-scroll {
          display: flex !important;
          width: max-content !important;
          animation: marquee-scroll 30s linear infinite !important;
        }
        @media (max-width: 768px) {
          .animate-marquee-scroll {
            animation: marquee-scroll 15s linear infinite !important; /* Mobile pe thoda fast takki animation feel ho */
          }
        }
      `}} />
    </section>
  );
};

export default FinancialPartners;