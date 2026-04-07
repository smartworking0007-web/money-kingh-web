"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Typography } from "@/app/components/ui/Typography";
import { cn } from "@/app/lib/utils";
import {
  BarChart3,
  Settings,
  Building2,
  Cpu,
  FileText,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const loanData = [
  {
    title: "Business Term Loan",
    desc: "A business loan is ideal for long-term expansion, purchasing assets, or scaling operations. It offers a lump sum amount with fixed monthly EMIs and repayment tenure ranging from 1 to 5 years.",
    icon: <BarChart3 size={32} className="text-blue-600" />,
    bg: "bg-blue-50",
    link: "https://moneykingfinancial.com/services/loan/unsecured/business",
  },
  {
    title: "Working Capital Loan",
    desc: "<a href='https://moneykingfinancial.com/Apply/Working-Capital' class='text-[#2563eb] underline font-medium hover:text-blue-800'>Working capital loan</a> help businesses manage daily operational expenses such as salaries, rent, and inventory. These are usually short-term loans and can be unsecured loans, ensuring smooth cash flow.",
    icon: <Settings size={32} className="text-emerald-600" />,
    bg: "bg-emerald-50",
    link: "https://moneykingfinancial.com/Apply/Working-Capital",
  },
  {
    title: "MSME & Govt. Loan Schemes",
    desc: "<a href='https://moneykingfinancial.com/services/loan/unsecured/business' class='text-[#2563eb] underline font-medium hover:text-blue-800'>MSME loans</a> and government-backed schemes like MUDRA and CGTMSE provide affordable funding options for small businesses. These loans often come with lower interest rates and collateral-free benefits.",
    icon: <Building2 size={32} className="text-orange-600" />,
    bg: "bg-orange-50",
    link: "https://moneykingfinancial.com/services/loan/unsecured/business",
  },
  {
    title: "Machinery & Equipment Financing",
    desc: "<a href='https://moneykingfinancial.com/services/loan/secured/machinery' class='text-[#2563eb] underline font-medium hover:text-blue-800'>Machinery loans</a> help businesses purchase equipment and upgrade operations. In most cases, the machinery itself acts as collateral, allowing businesses to access funding at competitive interest rates.",
    icon: <Cpu size={32} className="text-purple-600" />,
    bg: "bg-purple-50",
    link: "https://moneykingfinancial.com/services/loan/secured/machinery",
  },
  {
    title: "Invoice Discounting / Bill Financing",
    desc: "Invoice financing allows businesses to get instant funds against unpaid invoices. This helps improve cash flow and ensures smooth operations without waiting for client payments.",
    icon: <FileText size={32} className="text-sky-600" />,
    bg: "bg-sky-50",
    link: "https://moneykingfinancial.com/services/loan/unsecured/business",
  },
];

const LoanSlider = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-14">
          <Typography
            variant="h2"
            as="h2"
            className="text-[#002e5b] text-3xl md:text-4xl font-black uppercase tracking-tight m-0!"
          >
            Types of Business Loan
          </Typography>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Navigation Buttons */}
        <div className="hidden md:flex justify-between absolute top-[60%] w-full left-0 z-10 -translate-y-1/2 px-2 pointer-events-none">
          <button className="swiper-prev-custom pointer-events-auto w-12 h-12 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all active:scale-95">
            <ChevronLeft size={24} />
          </button>
          <button className="swiper-next-custom pointer-events-auto w-12 h-12 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all active:scale-95">
            <ChevronRight size={24} />
          </button>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={28}
          slidesPerView={1}
          loop={true}
          navigation={{
            nextEl: ".swiper-next-custom",
            prevEl: ".swiper-prev-custom",
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-16 px-2!"
        >
          {loanData.map((loan, i) => (
            <SwiperSlide key={i} className="h-auto">
              <div className="bg-white rounded-4XL p-10 h-full min-h-[420px] shadow-sm border border-slate-100 flex flex-col items-center text-center group transition-all duration-500">
                <div
                  className={cn(
                    "w-20 h-20 rounded-2xl flex items-center justify-center mb-8 shadow-md",
                    loan.bg
                  )}
                >
                  {loan.icon}
                </div>

                <h3 className="text-[#002e5b] group-hover:text-[#2563eb] transition-colors duration-300 text-xl md:text-2xl font-bold mb-5 leading-tight m-0!">
                  {loan.title}
                </h3>

                <div
                  className="text-slate-600 text-sm md:text-base leading-relaxed m-0!"
                  dangerouslySetInnerHTML={{ __html: loan.desc }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #cbd5e1;
          opacity: 1;
          width: 10px;
          height: 10px;
        }
        .swiper-pagination-bullet-active {
          width: 30px;
          border-radius: 5px;
          background: #2563eb !important;
          transition: all 0.3s;
        }
        .pb-16 {
          padding-bottom: 4rem !important;
        }
        .px-2\! {
          padding-left: 0.5rem !important;
          padding-right: 0.5rem !important;
        }
        .m-0\! {
          margin: 0 !important;
        }
      `}</style>
    </section>
  );
};

export default LoanSlider;