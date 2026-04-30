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

export const BlogCard1 = ({ title, category, author, date, image }: BlogCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col group hover:shadow-md transition-all duration-300 w-full max-w-[360px]">
      <div className="relative h-48 w-full overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute top-3 left-3 bg-green-500 text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase">
          {category}
        </div>
      </div>
      <div className="p-5 flex-1">
        <Typography variant="h5" as="h2" className="text-[#1e3a8a] text-lg font-bold leading-tight group-hover:text-blue-600 line-clamp-3">
          {title}
        </Typography>
      </div>
      <div className="px-5 py-3 border-t border-gray-50 flex items-center justify-between text-[10px] text-gray-400 font-bold uppercase">
        <span>{author}</span>
        <span className="text-gray-200">|</span>
        <span>{date}</span>
      </div>
    </div>
  );
};