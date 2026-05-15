"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@/app/components/ui/Typography";

interface BlogCardProps {
  title: string;
  category: string;
  author: string;
  date: string;
  image: string;
}

export const BlogCard1 = ({
  title,
  category,
  author,
  date,
  image,
}: BlogCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col group hover:shadow-md transition-all duration-300 w-full sm:max-w-[360px]">
      {/* Responsive Image Aspect Ratio Box */}
      <div className="relative h-44 sm:h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-w: 640px) 100vw, 360px"
        />
        {/* Dynamic Category Tag */}
        <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded-md z-10">
          <Typography variant="caption" as="span" className="font-bold uppercase text-white tracking-wider">
            {category}
          </Typography>
        </div>
      </div>

      {/* Main Context Box */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between min-h-[110px] sm:min-h-[130px]">
        <Typography
          variant="s1"
          as="h2"
          className="text-[#1e3a8a] group-hover:text-blue-600 line-clamp-3 transition-colors duration-300 font-bold leading-tight"
        >
          {title}
        </Typography>
      </div>

      {/* Responsive Info Footer */}
      <div className="px-4 py-3 sm:px-5 border-t border-gray-50 flex items-center justify-between text-gray-400">
        <Typography variant="caption" as="span" className="font-bold uppercase tracking-wider text-inherit">
          {author}
        </Typography>
        <span className="text-gray-200 select-none">|</span>
        <Typography variant="caption" as="span" className="font-bold uppercase tracking-wider text-inherit">
          {date}
        </Typography>
      </div>
    </div>
  );
};