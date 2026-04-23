"use client";
import Image from "next/image";
import { Typography } from "../components/ui/Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
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
    <section className="w-full py-16 bg-[#f0f7ff] financial-partners-slider">
      <div className="max-w-7xl mx-auto px-4 text-center">
        
        <div className="max-w-3xl mx-auto mb-4">
          <Typography variant="b2" className="text-gray-600">
            Our strength at Money King Financial lies in expert minds
            collaborating to provide customized, fast-approval loan solutions.
          </Typography>
        </div>

        <Typography
          variant="h2"
          className="text-[#0b1c44] mb-12 uppercase tracking-wide font-bold"
        >
          Financial Planners
        </Typography>

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="pb-12"
        >
          {partners.map((partner, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center group">
                
                {/* Image Container - FIXED to aspect-3/4 */}
                <div className="relative w-full aspect-3/4 mb-4 overflow-hidden rounded-xl bg-gray-50 shadow-sm transition-transform duration-300 group-hover:scale-[1.02]">
                  <Image
                    src={partner.image} 
                    alt={partner.name}
                    fill
                    priority={index < 4}
                    className="object-cover"
                  />
                </div>

                {/* Partner Name */}
                <Typography variant="s1" className="text-[#0b1c44] font-extrabold text-lg m-0!">
                  {partner.name}
                </Typography>

                {/* Role */}
                <Typography variant="caption" className="text-gray-500 font-medium mt-1">
                  {partner.role}
                </Typography>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .financial-partners-slider .swiper-button-next,
        .financial-partners-slider .swiper-button-prev {
          color: #0b1c44 !important;
          background: white;
          width: 40px !important;
          height: 40px !important;
          border-radius: 50%;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          transform: translateY(-50%) scale(0.7);
        }
        .financial-partners-slider .swiper-button-next:after,
        .financial-partners-slider .swiper-button-prev:after {
          font-size: 20px !important;
          font-weight: bold;
        }
        .financial-partners-slider .swiper-pagination-bullet-active {
          background: #0b1c44 !important;
        }
      `}</style>
    </section>
  );
};

export default FinancialPartners;