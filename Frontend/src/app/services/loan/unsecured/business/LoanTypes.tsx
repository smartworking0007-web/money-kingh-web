"use client";
import React from 'react';
import { Typography } from '@/app/components/ui/Typography';

const loanTypes = [
  {
    title: "Personal Loan for",
    subtitle: "Marriage",
    bgColor: "bg-[#f5f0ff]", // Light Purple
    borderColor: "border-purple-100",
  },
  {
    title: "Personal Loan for",
    subtitle: "Travel",
    bgColor: "bg-[#f5f5f5]", // Light Grey
    borderColor: "border-gray-200",
  },
  {
    title: "Personal Loan for",
    subtitle: "Medical Emergency",
    bgColor: "bg-[#f0f9f4]", // Light Green
    borderColor: "border-green-100",
  },
  {
    title: "Personal Loan for",
    subtitle: "Home Renovation",
    bgColor: "bg-[#fff9f0]", // Light Orange/Yellow
    borderColor: "border-orange-100",
  },
  {
    title: "Personal Loan for",
    subtitle: "Salaried Employees",
    bgColor: "bg-[#eef5ff]", // Light Blue
    borderColor: "border-blue-100",
  },
  {
    title: "Personal Loan for",
    subtitle: "Second Hand Vehicle",
    bgColor: "bg-[#fff0f5]", // Light Pink
    borderColor: "border-pink-100",
  },
];

const LoanTypes = () => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-8 md:mb-12">
          <Typography 
            variant="h3" 
            as="h2" 
            className="text-[#2d2d2d] font-bold text-2xl sm:text-3xl md:text-4xl mt--10! leading-tight text-center md:text-left"
          >
            Choose the Right Personal Loan for Your Needs
          </Typography>
        </div>

        {/* Grid Layout - Responsive Column Control */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {loanTypes.map((loan, index) => (
            <div
              key={index}
              className={`
                ${loan.bgColor} ${loan.borderColor}
                border rounded-2xl 
                p-6 sm:p-8 md:p-10
                flex flex-col items-center justify-center text-center
                transition-all duration-300 
                hover:shadow-lg hover:-translate-y-1.5
                active:scale-95
                cursor-pointer
              `}
            >
              <Typography 
                variant="b1" 
                className="text-slate-600 font-medium m-0! leading-tight text-sm sm:text-base"
              >
                {loan.title}
              </Typography>
              <Typography 
                variant="h4" 
                as="span" 
                className="text-[#333333] font-bold mt-1! leading-tight text-lg sm:text-xl md:text-2xl"
              >
                {loan.subtitle}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoanTypes;