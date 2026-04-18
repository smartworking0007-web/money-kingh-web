"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";
import { Star, Quote, Users, TrendingUp, Award, UserPlus } from "lucide-react";

const testimonials = [
  {
    text: "Inka MTF rate, home loan se bhi kum hai! Isse behtar kya ho sakta hai?",
    name: "Jeenesh Gala",
    location: "m.Stock customer, Mumbai",
    stars: 5,
  },
  {
    text: "The messages and initiation that I got at every step, is the best without any jargons.",
    name: "Karan Jagi",
    location: "m.Stock Customer, India",
    stars: 5,
  },
  {
    text: "m.Stock is a boon for day traders.",
    name: "Jathin Kaithavalappil",
    location: "m.Stock customer, Mumbai",
    stars: 5,
  },
  {
    text: "Zero brokerage for life is unique and very helpful.",
    name: "Mustafa",
    location: "m.Stock customer",
    stars: 5,
  },
];

const stats = [
  {
    icon: <Users className="w-5 h-5 text-gray-600" />,
    label: "Trusted by",
    value: "24 lakh+",
    suffix: "users",
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-gray-600" />,
    label: "Facilitated",
    value: "105 crore+",
    suffix: "trades",
  },
  {
    icon: <Award className="w-5 h-5 text-gray-600" />,
    label: "Users rated us",
    value: "4.1",
    stars: 5,
  },
  {
    icon: <UserPlus className="w-5 h-5 text-gray-600" />,
    label: "Referred by",
    value: "2.6 lakh+",
    suffix: "users",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-white pt-0 pb-12 px-4 md:px-6 font-sans -mt-12 md:-mt-24 relative z-10 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-8 md:mb-10">
          <Typography variant="h2" className="text-[#003B73] font-bold text-2xl md:text-4xl">
            Here is what our clients <span className="text-[#FF7A00]">love mStock</span>
          </Typography>
        </div>

        {/* --- TESTIMONIALS GRID --- 
            Mobile par horizontal scroll aur Desktop par grid layout
        */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 md:mb-12 overflow-x-auto snap-x snap-mandatory pb-6 md:pb-0 scrollbar-hide">
          {testimonials.map((item, idx) => (
            <div 
              key={idx} 
              className="snap-center relative bg-[#FFF9F5] p-5 md:p-6 rounded-xl border border-orange-100 flex flex-col justify-between min-w-[280px] md:min-w-0 shadow-sm"
            >
              {/* Quote Icons */}
              <Quote className="absolute top-3 left-3 w-5 h-5 text-[#FF7A00] opacity-20 rotate-180" />
              <Quote className="absolute bottom-3 right-3 w-5 h-5 text-[#FF7A00] opacity-20" />

              <div className="relative z-10 pt-2">
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  &quot;{item.text}&quot;
                </p>
                <div className="mb-2">
                  <p className="text-[#003B73] font-bold text-base">{item.name}</p>
                  <p className="text-gray-500 text-[10px]">{item.location}</p>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(item.stars)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#FF7A00] text-[#FF7A00]" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- STATS BAR --- 
            Mobile par 2 columns aur Desktop par 4 columns
        */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="flex flex-col sm:flex-row items-center sm:items-start lg:items-center gap-2 sm:gap-3 p-3 rounded-lg border border-orange-100 bg-white shadow-sm hover:shadow-md transition-shadow text-center sm:text-left"
            >
              <div className="p-2 bg-gray-50 rounded-md shrink-0">
                {stat.icon}
              </div>
              <div>
                <p className="text-[#003B73] text-[11px] md:text-[12px] font-medium leading-tight">{stat.label}</p>
                <div className="flex items-baseline justify-center sm:justify-start gap-1">
                  <span className="text-[#FF7A00] font-black text-base md:text-lg">{stat.value}</span>
                  {stat.suffix && <span className="text-gray-400 text-[8px] md:text-[9px] uppercase font-bold">{stat.suffix}</span>}
                </div>
                {stat.stars && (
                  <div className="flex justify-center sm:justify-start gap-0.5 mt-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-2.5 h-2.5 ${i < 4 ? 'fill-[#FF7A00] text-[#FF7A00]' : 'fill-gray-200 text-gray-200'}`} 
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}