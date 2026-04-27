"use client";
import Image from "next/image";
import { Typography } from "../components/ui/Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const partners = [
  {
    name: "Priyanka Diwakar",
    role: "Sales Manager",
    image: "/images/Founders/Picture2.png",
  },
  {
    name: "Shivangi Verma",
    role: "Marketing Executive",
    image: "/images/Founders/Picture3.jpeg",
  },
  {
    name: "Maneesh Thakur",
    role: "Senior Consultant",
    image: "/images/Founders/Picture4.png",
  },
  {
    name: "Jyoti",
    role: "Sales Manager",
    image: "/images/Founders/Picture5.png",
  },
  {
    name: "Amit",
    role: "Chief Sales Officer",
    image: "/images/Founders/Amit1.jpeg",
  },
];

const FinancialPartners = () => {
  return (
    /* py-16 ko pt-4 (top padding) kar diya hai aur -mt-10 se ye upar shift hoga */
    <section className="w-full pt-0 pb-16 md:pt-8 md:pb-20 bg-[#f8fbff] financial-partners-slider font-lexend overflow-hidden -mt-15 md:-mt-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-12 text-center relative">
        {/* Header content thoda compact kiya hai */}
        <div className="max-w-2xl mx-auto mb-1">
          <Typography
            variant="b2"
            className="text-gray-500 font-medium  text-sm"
          >
            Expert minds collaborating for your financial growth.
          </Typography>
        </div>

        <Typography
          variant="h3"
          className="text-[#0b1c44] mb-8 md:mb-10 uppercase tracking-tighter font-black text-2xl md:text-4xl"
        >
          Financial Planners
        </Typography>

        <div className="relative px-2">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            navigation={{
              nextEl: ".btn-next",
              prevEl: ".btn-prev",
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="pb-12 static!"
          >
            {partners.map((partner, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center cursor-pointer group/card">
                  <div className="relative w-full aspect-3/4 mb-4 overflow-hidden rounded-2xl bg-white shadow-md border border-slate-100 transition-all duration-500 group-hover/card:shadow-xl group-hover/card:-translate-y-2">
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover/card:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#0b1c44]/30 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                  </div>

                  <Typography
                    variant="h5"
                    className="text-[#0b1c44] font-bold m-0 leading-tight text-lg"
                  >
                    {partner.name}
                  </Typography>
                  <p className="text-blue-600 text-[10px] font-black uppercase tracking-widest mt-1">
                    {partner.role}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* --- LEFT ARROW --- */}
          <button className="btn-prev absolute -left-2 md:-left-10 top-[40%] -translate-y-1/2 z-30 w-9 h-9 md:w-12 md:h-12 bg-white text-[#0b1c44] rounded-full flex items-center justify-center shadow-lg border border-slate-100 cursor-pointer hover:bg-[#0b1c44] hover:text-white transition-all duration-300 active:scale-90">
            <ChevronLeft size={22} strokeWidth={2.5} />
          </button>

          {/* --- RIGHT ARROW --- */}
          <button className="btn-next absolute -right-2 md:-right-10 top-[40%] -translate-y-1/2 z-30 w-9 h-9 md:w-12 md:h-12 bg-white text-[#0b1c44] rounded-full flex items-center justify-center shadow-lg border border-slate-100 cursor-pointer hover:bg-[#0b1c44] hover:text-white transition-all duration-300 active:scale-90">
            <ChevronRight size={22} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      <style jsx global>{`
        .financial-partners-slider .swiper-pagination-bullet-active {
          background: #0b1c44 !important;
          width: 18px !important;
          border-radius: 5px !important;
          transition: width 0.3s ease;
        }
        .btn-next,
        .btn-prev {
          cursor: pointer !important;
        }
      `}</style>
    </section>
  );
};

export default FinancialPartners;
