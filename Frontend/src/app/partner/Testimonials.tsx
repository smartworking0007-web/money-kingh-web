"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@/app/components/ui/Typography";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Financial Advisor",
    text: "Joining Money King as a Channel Partner was one of my best decisions. The onboarding process was smooth, and the support team helped me at every step. I started earning within the first month.",
    image: "/images/Testimonial/3.jpeg", 
  },
  {
    name: "Raj Verma",
    role: "Insurance Consultant",
    text: "The digital KYC and e-sign process made registration super easy. I love how transparent and fast the system works. Highly recommended for anyone looking to grow in finance.",
    image: "/images/Testimonial/4.png",
  },
  {
    name: "Amit Gupta",
    role: "Loan Consultant",
    text: "Money King provides great earning opportunities with a wide range of financial products. The partner code access and dashboard are very user-friendly.",
    image: "/images/testimonials/t3.jpg",
  },
  {
    name: "Pooja Singh",
    role: "Freelancer",
    text: "As a beginner, I was worried about the process, but everything was simple and guided. The team support and training helped me grow quickly.",
    image: "/images/testimonials/t4.jpg",
  },
];

export default function TestimonialsHub() {
  return (
    <section className="w-full bg-slate-50 py-16 md:py-24 px-4 md:px-10 font-lexend overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-12 md:mb-16">
          <Typography
            variant="h3"
            as="h2"
            className="text-2xl md:text-4xl font-black text-[#1e293b] mb-4 mt-0"
          >
            What Our Channel Partners Say <span className="text-blue-600">Testimonials Hub</span>
          </Typography>
          <Typography className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto mt-0 leading-relaxed">
            Witness the synergy of success in our channel partner testimonials, highlighting the strength and reliability of Money King.
          </Typography>
        </div>

        {/* --- TESTIMONIALS GRID/SLIDER --- */}
        <div className="relative">
          {/* Navigation Buttons (Desktop Only) */}
          <div className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-10">
            <button className="p-3 bg-white rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition-all">
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          <div className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10">
            <button className="p-3 bg-white rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition-all">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-center justify-center">
            {testimonials.slice(0, 2).map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-slate-100 relative group overflow-hidden"
              >
                {/* Big Quote Icon Background */}
                <Quote className="absolute right-6 top-6 w-16 h-16 text-slate-50 group-hover:text-blue-50 transition-colors" />

                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start relative z-10">
                  {/* Partner Image */}
                  <div className="relative w-32 h-40 md:w-48 md:h-60 shrink-0 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <Typography variant="h5" className="font-bold text-blue-600 text-lg md:text-xl mt-0">
                        {item.name}
                      </Typography>
                      <Typography className="text-slate-400 text-xs md:text-sm font-medium mt-0">
                        {item.role}
                      </Typography>
                    </div>

                    <Typography className="text-slate-600 text-xs md:text-sm leading-relaxed mt-0">
                      {item.text}
                    </Typography>

                    <div className="pt-4 flex justify-end md:justify-start">
                       <Quote className="w-8 h-8 text-blue-100 rotate-180" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots (Mobile) */}
        <div className="flex justify-center gap-2 mt-10 md:hidden">
          <div className="w-8 h-2 bg-blue-600 rounded-full" />
          <div className="w-2 h-2 bg-slate-300 rounded-full" />
          <div className="w-2 h-2 bg-slate-300 rounded-full" />
        </div>
      </div>
    </section>
  );
}