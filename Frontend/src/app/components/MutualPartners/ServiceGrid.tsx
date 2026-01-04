"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { mutualFundProducts } from "@/data/mutualPartners";
import { Typography } from "../ui/Typography"; 

const MutualFundGrid: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Typography
            variant="h2"
            as="h2"
            className="text-[#1e2e5c] font-bold mb-5 text-3xl md:text-4xl"
          >
            Popular Mutual Fund Categories
          </Typography>
          <div className="w-24 h-1.5 bg-[#586ca0] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 md:gap-8">
          {mutualFundProducts.map((product) => (
            <Link
              href={product.href}
              key={product.id}
              className="group bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#586ca0]/40"
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <Image
                  src={product.image}
                  alt={`${product.title} category`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 text-center">
                <Typography
                  variant="s1"
                  className="text-[#1e2e5c] font-semibold text-lg md:text-xl group-hover:text-[#586ca0] transition-colors"
                >
                  {product.title}
                </Typography>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MutualFundGrid;