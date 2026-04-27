"use client";

import Link from "next/link";
import { Typography } from "@/app/components/ui/Typography";

const loanData = [
  {
    bank: "SBI Home Loan",
    rate: "7.25% p.a. to 10.50% p.a.",
    fee: "0.35% of the loan amount (Min Rs.3000 + GST to Max Rs.12,000 + GST)",
    tenure: "Loan Amount: At bank's discretion. Tenure: Up to 30 years",
  },
  {
    bank: "HDFC Home Loans",
    rate: "7.75% p.a. to 13.20% p.a.",
    fee: "Up to 0.50% of loan amount or minimum of Rs.4,000 + GST",
    tenure: "Loan Amount: At bank's discretion. Tenure: Up to 30 years",
  },
  {
    bank: "Union Bank Home Loan",
    rate: "7.15% p.a. (Floating) / 11.40% p.a. (Fixed)",
    fee: "0.50% of the loan amount up to a maximum of Rs.15,000 + GST",
    tenure: "Loan Amount: Contact the bank. Tenure: Up to 30 years",
  },
  {
    bank: "Punjab National Bank (PNB)",
    rate: "7.20% p.a. onwards",
    fee: "0.35% of the loan amount (Min Rs.2,500 to Max Rs.15,000)",
    tenure: "Loan Amount: Up to Rs.100 lakhs. Tenure: Up to 30 years",
  },
  {
    bank: "PNB Housing Home Loan",
    rate: "Floating: 7.75% / Fixed: 14.75%",
    fee: "Contact the Bank",
    tenure: "Loan Amount: Up to 90% of property value. Tenure: Up to 30 years",
  },
  {
    bank: "LIC HFL Home Loan",
    rate: "7.15% p.a. onwards",
    fee: "0.25% of loan amount (Max Rs.15,000 + taxes)",
    tenure: "Loan Amount: At bank's discretion. Tenure: Up to 30 years",
  },
  {
    bank: "Axis Bank Home Loan",
    rate: "8.00% p.a. (Floating) / 14.00% p.a. (Fixed)",
    fee: "Up to 1% of loan amount or Rs.10,000 (Higher) + GST",
    tenure: "Loan Amount: Rs.3 lakhs to Rs.10 crores. Tenure: Up to 30 years",
  },
  {
    bank: "Aditya Birla Capital",
    rate: "Contact the bank",
    fee: "Contact the NBFC",
    tenure: "Loan Amount: Rs.15 lakh onwards",
  },
  {
    bank: "Karnataka Bank Home Loan",
    rate: "7.30% p.a. (Floating)",
    fee: "0.25% of loan amount (Nil for KBL Xpress below 75L)",
    tenure: "Loan Amount: Up to Rs.5Crs. Tenure: 1-30 Years",
  },
  {
    bank: "IDFC Home Loan",
    rate: "8.85% p.a.",
    fee: "Up to 3% of the loan amount",
    tenure: "Loan Amount: As per property value. Tenure: Up to 30 years",
  },
  {
    bank: "Bank Of Baroda",
    rate: "7.20% p.a. (Floating) / 8.90% p.a. (Fixed)",
    fee: "Minimum Rs.8,500 - Maximum Rs.25,000",
    tenure: "Loan Amount: Rs.1 lakh to Rs.10 crores. Tenure: Up to 30 years",
  },
  {
    bank: "Canara Bank Home Loan",
    rate: "7.15% p.a.",
    fee: "0.50% (Min Rs.1500 to Max Rs.10,000 + GST)",
    tenure: "Loan Amount: No upper limit. Tenure: Contact the Bank",
  },
  {
    bank: "Kotak Mahindra Bank",
    rate: "7.70% p.a. (Floating) / 12.00% p.a. (Fixed)",
    fee: "Up to 2% of the loan amount + GST",
    tenure: "Loan Amount: Up to Rs.40 crores. Tenure: Up to 25 years",
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
