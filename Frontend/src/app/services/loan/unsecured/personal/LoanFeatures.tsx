"use client";
import React from 'react';
import { Typography } from '@/app/components/ui/Typography';
import { cn } from "@/app/lib/utils";

const features = [
  {
    id: "01",
    title: "Instant Approval & Quick Disbursal",
    desc: "Get approval in as little as 24–48 hours and funds transferred to your bank account the same day or next working day – one of the fastest personal loan approval processes in Delhi."
  },
  {
    id: "02",
    title: "No Collateral or Guarantor Required",
    desc: "Enjoy 100% unsecured funding – no property, FD, or gold needed as security. Your income and credit profile are enough for a hassle-free unsecured personal loan."
  },
  {
    id: "03",
    title: "Competitive & Lowest Possible Interest Rates",
    desc: "Interest starts from 9.99% p.a.* (subject to profile) – among the most affordable rates for low interest personal loan in India. Flexible repayment keeps EMIs easy on your pocket."
  },
  {
    id: "04",
    title: "Minimal Documentation",
    desc: "Only essential papers needed: Aadhaar, PAN, last 3–6 months bank statement, salary slips or ITR. No long paperwork – apply online for instant personal loan with minimal documents."
  },
  {
    id: "05",
    title: "Flexible Loan Amount & Tenure",
    desc: "Borrow from ₹50,000 up to ₹25 lakh with repayment tenure from 12 to 60 months – choose what suits your budget and cash flow perfectly."
  },
  {
    id: "06",
    title: "Multiple End-Use Flexibility",
    desc: "Use the loan for any genuine purpose: medical emergency, wedding, education, home renovation, travel, debt consolidation, or family functions – no restrictions."
  },
  {
    id: "07",
    title: "No Prepayment Penalty (After Lock-in)",
    desc: "Pay off your loan early without heavy charges (usually after 6 months) – save on interest and become debt-free faster."
  },
  {
    id: "08",
    title: "Trusted & Reliable Since 2016",
    desc: "With years of experience serving Delhi NCR, Money King Financial provides transparent terms, no hidden fees, and dedicated support – your reliable partner for fast personal loan online and offline."
  }
];

const LoanFeatures = () => {
  return (
    <section className="py-12 md:py-20 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* New Header Section with your Meta Content */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <Typography variant="h3" as="h2" className="text-[#002e5b] font-bold mb-6 mt-0! leading-tight">
            What is a Personal Loan?
          </Typography>
          
          <div className="space-y-6">
            <Typography variant="b1" className="text-slate-600 leading-relaxed md:text-lg">
              A personal loan is an unsecured loan from NBFCs/banks for personal needs like 
              emergencies, weddings, education, renovation, or debt consolidation — no 
              collateral/guarantor needed.
            </Typography>
            
            <Typography variant="b1" className="text-slate-500 leading-relaxed ">
              Money King Financial helps you get an urgent personal loan in India with minimal 
              time and hassle, shortening the path between you and your dreams. We assist 
              individuals and businesses in securing a personal loan online or offline at the 
              lowest possible interest rates tailored to your needs – fast approval, minimal 
              documentation, and trusted support since 2016 in Delhi.
            </Typography>
          </div>
        </div>

        {/* Features Sub-heading */}
        <div className="mb-10 text-center">
            <Typography variant="h3" as="h3" className="text-[#005db9] font-bold">
                Personal Loan Features & Benefits
            </Typography>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {features.map((item) => (
            <div 
              key={item.id} 
              className={cn(
                "bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100",
                "flex flex-row items-start gap-4 md:gap-6",
                "hover:shadow-md md:hover:shadow-lg transition-all duration-300 group"
              )}
            >
              {/* Number Indicator */}
              <div className="shrink-0">
                <div className={cn(
                  "w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100",
                  "md:group-hover:bg-blue-600 md:group-hover:border-blue-600 transition-colors duration-300"
                )}>
                  <span className="text-blue-600 font-bold text-base md:text-lg md:group-hover:text-white">
                    {item.id}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-2">
                <Typography variant="h5" as="h3" className="text-slate-900 font-bold m-0! leading-tight">
                  {item.title}
                </Typography>
                <Typography variant="b2" className="text-slate-500 m-0! leading-relaxed text-sm md:text-base">
                  {item.desc}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoanFeatures;