"use client";
import React from "react";
import { Search } from "lucide-react";
import { Typography } from "@/app/components/ui/Typography";

export const BlogSidebar = () => {
  return (
    <aside className="w-full lg:w-[350px] space-y-6 md:space-y-8">
      {/* Search Section */}
      <div className="bg-white p-5 md:p-6 rounded-lg shadow-sm border border-gray-100">
        <div className="flex border border-gray-200 rounded-md overflow-hidden focus-within:border-blue-400 transition-colors">
          <input
            type="text"
            placeholder="Search here..."
            className="flex-1 px-4 py-2 text-sm outline-none bg-transparent w-full"
          />
          <button className="bg-[#1e5d91] p-3 text-white hover:bg-[#164a75] transition-colors active:scale-95">
            <Search size={18} />
          </button>
        </div>
      </div>
      {/* Categories Section */}
      <div className="bg-white p-5 md:p-6 rounded-lg shadow-sm border border-gray-100">
        <Typography
          variant="h5"
          as="h3"
          className="text-[#1e3a8a] border-b border-gray-100 pb-4 mb-4 mt-0 font-bold"
        >
          Categories
        </Typography>
        <ul className="space-y-3 md:space-y-4">
          <li className="flex justify-between items-center group cursor-pointer p-1 rounded-md hover:bg-gray-50 transition-all">
            <Typography
              variant="b2"
              className="group-hover:text-blue-600 font-medium"
            >
              Financial Planning
            </Typography>
            <Typography variant="b3" className="font-bold text-gray-400">
              (24)
            </Typography>
          </li>
        </ul>
      </div>
    </aside>
  );
};
