"use client";

import { Typography } from "@/app/components/ui/Typography";

const features = [
  {
    title: "High Loan Value",
    description: "Avail funding based on your gold’s current market price and quality.",
    icon: "💰",
  },
  {
    title: "Instant Disbursal",
    description: "Get funds credited to your bank account in as little as 60 minutes.",
    icon: "⚡",
  },
  {
    title: "Flexible Tenure",
    description: "Choose a repayment period that suits you, ranging from 6 to 36 months.",
    icon: "📅",
  },
  {
    title: "Multiple Options",
    description: "Choose between EMI-based or interest-only repayment schemes.",
    icon: "🔄",
  },
  {
    title: "Safe Gold Storage",
    description: "Your gold is stored in bank-grade, highly secured vaults with insurance.",
    icon: "🔒",
  },
  {
    title: "Simple Process",
    description: "Experience hassle-free approval with minimal documentation and paperwork.",
    icon: "📝",
  },
];

export default function GoldLoanFeatures() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 bg-white">
      {/* Header Section */}
      <div className="text-center mb-14">
        <Typography
          variant="h2"
          as="h3"
          className="text-[#1e293b] font-bold mb-4 text-3xl md:text-4xl"
        >
          Features of Gold Loan
        </Typography>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-normal">
          Take a look at the features and benefits that make our gold loans the preferred choice for your financial needs.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((feature, index) => (
          <div 
            key={index} 
            /* items-center add kiya content ko horizontally match karne ke liye */
            className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white flex flex-col items-center text-center group"
          >
            {/* Icon Circle */}
            {/* mb-5 aur mx-auto add kiya icon ko properly position karne ke liye */}
            <div className="text-3xl mb-5 mx-auto bg-blue-50 w-14 h-14 flex items-center justify-center rounded-full group-hover:bg-[#004687] group-hover:text-white transition-colors duration-300 shrink-0">
              {feature.icon}
            </div>
            
            <Typography
              variant="h5"
              as="h4"
              /* mb-1 title aur description ke beech gap kam karta hai, text-center consistency deta hai */
              className="text-[#1e293b] font-bold mb-1 text-xl text-center"
            >
              {feature.title}
            </Typography>
            
            <p className="text-gray-500 leading-snug text-base text-center">
              {/* leading-snug lines ke beech gap ko tight karta hai */}
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}