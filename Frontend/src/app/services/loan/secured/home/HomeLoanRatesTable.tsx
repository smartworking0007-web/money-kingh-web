"use client";

import Link from "next/link";
import { Typography } from "@/app/components/ui/Typography";

const loanData = [
  {
    bank: "SBI Home Loan",
    rate: "Verify current rate",
    fee: "Verify",
    tenure: " Up to 30 years",
  },
  {
    bank: "HDFC Home Loans",
    rate: "Verify current rate",
    fee: "Verify",
    tenure: " Up to 30 years",
  },
  {
    bank: "Union Bank Home Loan",
    rate: "Verify current rate",
    fee: "Verify",
    tenure: " Up to 30 years",
  },
  {
    bank: "Punjab National Bank (PNB)",
    rate: "Verify current rate",
    fee: "Verify",
    tenure: " Up to 30 years",
  },
  {
    bank: "PNB Housing Home Loan",
    rate: "Verify current rate",
    fee: "Verify",
    tenure: " Up to 30 years",
  },
  {
    bank: "LIC HFL Home Loan",
    rate: "Verify current rate",
    fee: "Verify",
    tenure: "Up to 30 years",
  },
  {
    bank: "Axis Bank Home Loan",
    rate: "Verify current rate",
    fee: "Verify",
    tenure: "Up to 30 years",
  },
  {
    bank: "Aditya Birla Capital",
    rate: "Verify current rate",
    fee: "Verify",
    tenure: "Up to 30 years",
  },
  {
    bank: "Karnataka Bank Home Loan",
    rate: "Verify current rate",
    fee: "Verify",
    tenure: "Up to 30 years",
  },
  {
    bank: "IDFC Home Loan",
    rate: "Verify current rate",
    fee: "Verify",
    tenure: "Up to 30 years",
  },
  {
    bank: "Bank Of Baroda",
    rate: "Verify current rate",
    fee: "Verify",
    tenure: "Up to 30 years",
  },
  {
    bank: "Canara Bank Home Loan",
    rate: "Verify current rate",
    fee: "Verify",
    tenure: "Up to 30 years",
  },
  {
    bank: "Kotak Mahindra Bank",
    rate: "Verify current rate",
    fee: "Verify",
    tenure: "Up to 30 years",
  },
];
const HomeLoanRatesTable = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 -py-5 md:py-0 -mt-45 md:-mt-20">
      <Typography
        variant="h3"
        className="text-center font-bold mb-6 md:mb-10 text-[#0b1c44] text-xl md:text-3xl"
      >
        Home Loan Interest Rates Comparison
      </Typography>
      {/* Responsive Container: Mobile par horizontal scroll allow karta hai */}
      <div className="w-full overflow-x-auto rounded-xl border border-gray-300 shadow-md">
        <table className="w-full text-left border-collapse bg-white min-w-[800px]">
          <thead>
            <tr className="bg-[#1a5fb4] text-white">
              <th className="p-3 md:p-4 font-bold border-r border-blue-400 whitespace-nowrap">
                Bank Name
              </th>
              <th className="p-3 md:p-4 font-bold border-r border-blue-400 whitespace-nowrap">
                Interest Rate
              </th>
              <th className="p-3 md:p-4 font-bold border-r border-blue-400">
                Processing Fee
              </th>
              <th className="p-3 md:p-4 font-bold">Loan Amount / Tenure</th>
            </tr>
          </thead>
          <tbody>
            {loanData.map((item, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-blue-50/50 transition-colors duration-200"
              >
                {/* Bank Name */}
                <td className="p-3 md:p-4 border-r border-gray-200 font-semibold text-blue-700 text-sm md:text-base">
                  <Link href="#" className="hover:underline underline-offset-2">
                    {item.bank}
                  </Link>
                </td>

                {/* Interest Rate - Normal text, no italics */}
                <td className="p-3 md:p-4 border-r border-gray-200 text-sm md:text-base text-gray-800 font-medium">
                  {item.rate}
                </td>

                {/* Processing Fee - Normal text, no italics */}
                <td className="p-3 md:p-4 border-r border-gray-200 text-[12px] md:text-[14px] text-gray-600 leading-normal">
                  {item.fee}
                </td>

                {/* Tenure/Amount - Removed 'italic' class */}
                <td className="p-3 md:p-4 text-[12px] md:text-[14px] text-gray-600 leading-normal">
                  {item.tenure}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomeLoanRatesTable;
