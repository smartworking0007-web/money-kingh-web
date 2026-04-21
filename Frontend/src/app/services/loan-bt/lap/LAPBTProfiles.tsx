"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function LAPBTProfiles() {
  const profiles = [
    {
      title: "Salaried Individuals",
      desc: "Pvt. Ltd, PSU, Govt org, MNC, LLP",
    },
    {
      title: "Business Owner",
      desc: "Proprietorship, Partnership, Pvt. Ltd, LLP",
    },
    {
      title: "Professional",
      desc: "Doctors, Lawyers, CA, CS, Architects",
    },
    {
      title: "Freelancer",
      desc: "Consultants, Contractors with consistent income",
    },
    {
      title: "Trader",
      desc: "Wholesale, Retail, Manufacturing business owner",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-12 py-10 bg-white font-lexend relative group">
      {/* --- HEADER --- */}
      <div className="mb-8 text-center md:text-left md:pl-2">
        <Typography
          variant="h4"
          as="h3"
          className="text-[#1e293b] font-black text-xl md:text-2xl mb-1"
        >
          Eligible profiles for LAP BT + Top up
        </Typography>
      
      </div>

      {/* --- CAROUSEL (SWIPER) --- */}
      <div className="relative px-2">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={15}
          slidesPerView={1.2}
          navigation={{
            nextEl: ".next-btn-lap",
            prevEl: ".prev-btn-lap",
          }}
          pagination={{ clickable: true, el: ".swiper-pagination-lap" }}
          autoplay={{ delay: 3500 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
          className="pb-12"
        >
          {profiles.map((profile, index) => (
            <SwiperSlide key={index}>
              <div className="h-160px md:h-[180px] flex flex-col items-center justify-center p-5 text-center border border-slate-100 rounded-2xl bg-white hover:border-blue-400 hover:shadow-lg transition-all duration-300 group cursor-grab active:cursor-grabbing">
                <Typography className="text-[#1e293b] font-bold text-[14px] md:text-[16px] mb-2 leading-tight group-hover:text-blue-600 transition-colors">
                  {profile.title}
                </Typography>

                <div className="w-6 h-1px bg-slate-100 mb-3 group-hover:w-10 group-hover:bg-blue-200 transition-all" />

                <Typography className="text-slate-500 text-[11px] md:text-[12px] leading-relaxed m-0 font-medium">
                  {profile.desc}
                </Typography>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* --- CUSTOM NAVIGATION BUTTONS --- */}
        <button className="prev-btn-lap absolute left--10p md:left--20px top-[40%] z-20 bg-white shadow-xl border border-slate-50 p-2 rounded-full text-slate-600 hover:bg-blue-600 hover:text-white transition-all opacity-0 group-hover:opacity-100 hidden md:block">
          <ChevronLeft size={20} />
        </button>
        <button className="next-btn-lap absolute right--10px md:right--20px top-[40%] z-20 bg-white shadow-xl border border-slate-50 p-2 rounded-full text-slate-600 hover:bg-blue-600 hover:text-white transition-all opacity-0 group-hover:opacity-100 hidden md:block">
          <ChevronRight size={20} />
        </button>

        {/* --- CUSTOM PAGINATION --- */}
        <div className="swiper-pagination-lap flex justify-center gap-2 mt-4" />
      </div>

      {/* --- CUSTOM STYLES --- */}
      <style jsx global>{`
        .swiper-pagination-lap .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #cbd5e1;
          opacity: 1;
        }
        .swiper-pagination-lap .swiper-pagination-bullet-active {
          width: 24px;
          border-radius: 4px;
          background: #2563eb !important;
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  );
}
