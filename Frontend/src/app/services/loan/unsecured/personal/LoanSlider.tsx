"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Typography } from "@/app/components/ui/Typography";
import { cn } from "@/app/lib/utils";
import {
  RefreshCcw,
  CheckCircle,
  ArrowUpCircle,
  Clock,
  Plane,
  Activity,
  Wallet,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const loanTypes = [
  {
    title: "Personal Loan Balance Transfer",
    desc: "Many lenders allow existing loan borrowers of other banks/NBFCs to transfer their outstanding loans subject to eligibility and lender evaluation for better terms.",
    icon: <RefreshCcw className="w-8 h-8 text-blue-600" />,
    bgColor: "bg-blue-50",
  },
  {
    title: "Pre-approved Personal Loan",
    desc: "Banks and NBFCs offer these loan options to select existing customers having a strong credit profile. Subject to eligibility and verification.",
    icon: <CheckCircle className="w-8 h-8 text-emerald-600" />,
    bgColor: "bg-emerald-50",
  },
  {
    title: "Top Up Personal Loan",
    desc: "Various banks and NBFCs offer this loan facility to existing borrowers to avail additional loan over and above their outstanding balance. Subject to eligibility.",
    icon: <ArrowUpCircle className="w-8 h-8 text-orange-600" />,
    bgColor: "bg-orange-50",
  },
  {
    title: "Short Term Personal Loan",
    desc: "This loan type has a short tenure of 1 year or less with structured loan amounts, designed for individuals seeking flexible repayment terms. Subject to eligibility and lender policies.",
    icon: <Clock className="w-8 h-8 text-purple-600" />,
    bgColor: "bg-purple-50",
  },
  {
    title: "Personal Loan for Travel",
    desc: "Individuals can utilize personal loans to manage vacation and travel-related expenses as per their financial planning and budget. Subject to eligibility.",
    icon: <Plane className="w-8 h-8 text-sky-600" />,
    bgColor: "bg-sky-50",
  },
  {
    title: "Personal Loan for Medical Emergency",
    desc: (
      <>
        When facing{" "}
        <Link
          href="/services/insurance/health"
          className="text-blue-600 font-bold underline hover:text-blue-800 transition-colors"
        >
          medical emergencies
        </Link>
        , individuals can apply for personal loans to cover hospital bills,
        diagnosis, treatments, and consultations. Subject to eligibility and
        partner evaluation.
      </>
    ),
    icon: <Activity className="w-8 h-8 text-red-600" />,
    bgColor: "bg-red-50",
  },
  {
    title: "Debt Consolidation Loan",
    desc: (
      <>
        Explore options to consolidate multiple liabilities or{" "}
        <Link
          href="/services/credit/hdfc"
          className="text-blue-600 font-bold underline hover:text-blue-800 transition-colors"
        >
          credit cards
        </Link>{" "}
        into a single streamlined repayment plan through our partner lending
        institutions. Subject to eligibility.
      </>
    ),
    icon: <Wallet className="w-8 h-8 text-indigo-600" />,
    bgColor: "bg-indigo-50",
  },
];

const LoanSlider = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-16">
          <Typography
            variant="h3"
            as="h2"
            className="text-[#002e5b] font-black uppercase tracking-tight m-0!"
          >
            Types of Personal Loan
          </Typography>
          <Typography variant="b1" className="text-slate-500 mt-2 m-0!">
            Choose the loan type that fits your financial requirements. Subject
            to eligibility.
          </Typography>
        </div>

        {/* Navigation Buttons */}
        <div className="hidden md:flex justify-between absolute top-1/2 left-0 right-0 z-20 -translate-y-1/2 px-2 pointer-events-none">
          <button
            className="swiper-prev-custom pointer-events-auto w-12 h-12 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all active:scale-90"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="swiper-next-custom pointer-events-auto w-12 h-12 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all active:scale-90"
            aria-label="Next Slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="md:px-4">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            navigation={{
              nextEl: ".swiper-next-custom",
              prevEl: ".swiper-prev-custom",
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-14 px-2!"
          >
            {loanTypes.map((loan, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-3xl p-8 min-h-[420px] h-full shadow-sm border border-slate-100 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300">
                  <div
                    className={cn(
                      "w-20 h-20 rounded-2xl flex items-center justify-center mb-8 ring-4 ring-white shadow-md transition-all duration-500",
                      loan.bgColor,
                    )}
                  >
                    {loan.icon}
                  </div>

                  <Typography
                    variant="h5"
                    as="h3"
                    className="text-slate-900 font-bold mb-4! leading-tight min-h-[50px] flex items-center justify-center"
                  >
                    {loan.title}
                  </Typography>

                  <div className="text-slate-500 m-0! leading-relaxed text-sm md:text-base">
                    {loan.desc}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #cbd5e1;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          width: 28px;
          border-radius: 5px;
          background: #2563eb !important;
          transition: all 0.3s ease;
        }
        .pb-14 {
          padding-bottom: 3.5rem !important;
        }
      `}</style>
    </section>
  );
};

export default LoanSlider;
