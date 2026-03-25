"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Typography } from '@/app/components/ui/Typography';
import { cn } from "@/app/lib/utils";
import { 
  BarChart3, 
  Settings, 
  Building2, 
  Cpu, 
  FileText,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const businessLoanTypes = [
  {
    title: "Business Term Loans (Long-Term Capital Expansion)",
    desc: "Fuel your long-term vision with a Business Term Loan. Ideal for major expansions, purchasing fixed assets, or long-term scaling, this loan provides a lump sum with fixed monthly installments. With repayment periods typically ranging from 1–5 years, it is the gold standard for established businesses.",
    icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
    bgColor: "bg-blue-50"
  },
  {
    title: "Working Capital Loans (Seamless Daily Operations)",
    desc: "Don't let temporary cash flow gaps stall your production. Our Working Capital Loans are short-term credit lines designed to cover critical operational costs like payroll, rent, and raw materials. Most options are unsecured, keeping your operations friction-free.",
    icon: <Settings className="w-8 h-8 text-emerald-600" />,
    bgColor: "bg-emerald-50"
  },
  {
    title: "MSME & Government-Backed Schemes (MUDRA & CGTMSE)",
    desc: "Small businesses can leverage government initiatives such as MUDRA (PMMY) or CGTMSE. These loans offer lower interest rates and collateral-free options specifically tailored for micro and small enterprises—perfect for new entrepreneurs.",
    icon: <Building2 className="w-8 h-8 text-orange-600" />,
    bgColor: "bg-orange-50"
  },
  {
    title: "Machinery & Equipment Financing (Tech Upgrades)",
    desc: "Upgrade your production line without depleting your reserves. With Equipment Financing, the machinery acts as its own collateral, allowing for lower interest rates and significant tax benefits through depreciation.",
    icon: <Cpu className="w-8 h-8 text-purple-600" />,
    bgColor: "bg-purple-50"
  },
  {
    title: "Invoice Discounting & Bill Financing (Instant Liquidity)",
    desc: "Stop waiting 90 days for client payments. Invoice Discounting allows you to borrow against unpaid invoices, turning accounts receivable into instant liquid cash to reinvest in your next project immediately.",
    icon: <FileText className="w-8 h-8 text-sky-600" />,
    bgColor: "bg-sky-50"
  }
];

const LoanSlider = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 relative">
        
        <div className="text-center mb-16">
          <Typography variant="h3" as="h3" className="text-[#002e5b] font-black uppercase tracking-tight m-0!">
            Types of Business Loan
          </Typography>
          <Typography variant="b1" className="text-slate-500 mt-2 m-0!">
            Strategically designed financial products to scale your enterprise
          </Typography>
        </div>

        {/* Navigation Buttons */}
        <div className="hidden md:flex justify-between absolute top-1/2 left-0 right-0 z-20 -translate-y-1/2 px-2 pointer-events-none">
          <button className="swiper-prev-custom pointer-events-auto w-12 h-12 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all active:scale-90">
            <ChevronLeft size={24} />
          </button>
          <button className="swiper-next-custom pointer-events-auto w-12 h-12 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all active:scale-90">
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
              nextEl: '.swiper-next-custom',
              prevEl: '.swiper-prev-custom',
            }}
            pagination={{ 
                clickable: true,
                dynamicBullets: true 
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-14 px-2!"
          >
            {businessLoanTypes.map((loan, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-3xl p-8 min-h-[460px] h-full shadow-sm border border-slate-100 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300">
                  <div className={cn(
                    "w-20 h-20 rounded-2xl flex items-center justify-center mb-8 ring-4 ring-white shadow-md transition-all duration-500",
                    loan.bgColor
                  )}>
                    {loan.icon}
                  </div>

                  <Typography variant="h5" as="h5" className="text-slate-900 font-bold mb-4! leading-tight min-h-[60px] flex items-center">
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