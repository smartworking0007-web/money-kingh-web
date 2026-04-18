"use client";

import Image from "next/image";
import { Typography } from "@/app/components/ui/Typography";

export default function GoldLoanDetails() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 ">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden ">
        <div className="flex flex-col md:flex-row items-stretch">
          {/* LEFT: IMAGE SECTION */}
          <div className="w-full md:w-1/2 relative min-h-[300px]">
            <Image
              src="/images/gold/gold1.jpeg" 
              alt="gold loan converted into cash"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* RIGHT: DETAILS SECTION */}
          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <Typography
              variant="h4"
              as="h4"
              className="text-[#004687] font-bold mb-8 text-2xl md:text-3xl border-l-4 pl-4"
            >
              Loan Terms & Conditions
            </Typography>

            <div className="space-y-8">
              {/* Loan Amount */}
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-xl text-2xl">💰</div>
                <div>
                  <Typography variant="h5" className="text-gray-900 font-bold">
                    Loan Amount
                  </Typography>
                  <p className="text-gray-600 text-lg leading-snug">
                    <span className="text-[#004687] font-semibold">
                      ₹25,000 to ₹40 Lakhs
                    </span>
                    <br />
                    <span className="text-sm">(depending on gold value)</span>
                  </p>
                </div>
              </div>

              {/* LTV */}
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-xl text-2xl">📊</div>
                <div>
                  <Typography variant="h5" className="text-gray-900 font-bold">
                    Loan-to-Value (LTV)
                  </Typography>
                  <p className="text-gray-600 text-lg leading-snug">
                    Get up to{" "}
                    <span className="text-[#004687] font-semibold">75%</span> of
                    your gold s current market value.
                  </p>
                </div>
              </div>

              {/* Tenure */}
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-xl text-2xl">⏳</div>
                <div>
                  <Typography variant="h5" className="text-gray-900 font-bold">
                    Tenure
                  </Typography>
                  <p className="text-gray-600 text-lg leading-snug">
                    Flexible repayment from{" "}
                    <span className="text-[#004687] font-semibold">
                      6 to 36 months.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
