import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Kings() {
  return (
    <section className="bg-white py-12 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          
          {/* LEFT SIDE: Text Content */}
          {/* order-2 lg:order-1 ensures text stays below image on mobile if desired, 
            but standard order-1 is usually better for SEO/Readability */}
          <div className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="animate-in fade-in slide-in-from-left duration-700">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                Money King <br />
                <span className="text-blue-600 text-3xl md:text-4xl lg:text-5xl">
                  Financial Services Pvt. Ltd.
                </span>
              </h1>

            </div>

            <div className="space-y-6 text-gray-500 text-base md:text-lg lg:text-xl leading-relaxed">
              <p className="border-l-4 border-blue-500 pl-4 bg-blue-50/50 py-3 rounded-r-lg mx-auto lg:mx-0 max-w-2xl">
                We work with India s top banks & NBFCs! Our vision is to provide premium, hassle-free financial services that empower your future.

              </p>

              <p className="max-w-2xl mx-auto lg:mx-0">
                As we prepare for our <strong className="text-gray-900">2026 grand opening</strong>, 
                our team is focused on integrating the latest technology to ensure the 
                fastest loan processing times and the lowest-cost solutions.
              </p>

              <div className="pt-4 flex justify-center lg:justify-start">
                <Link 
                  href="/about" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-200 inline-block font-medium"
                >
                  Read Our Vision
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Image/Logo */}
          <div className="flex-1 relative w-full flex justify-center items-center py-10 lg:py-0">
            {/* Soft decorative background glow */}
            <div className="absolute w-[80%] h-[80%] bg-blue-100 rounded-full blur-3xl opacity-50 -z-10 animate-pulse"></div>
            
            {/* Container for the logo - Adjusted size for mobile responsiveness */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]">
              <Image
                src="/images/l.png" 
                alt="Money King Logo"
                fill
                className="object-contain drop-shadow-2xl"
                priority
                sizes="(max-width: 768px) 256px, (max-width: 1024px) 384px, 450px"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}