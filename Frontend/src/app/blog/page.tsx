"use client";

import React, { useState } from "react";
import { BlogSidebar } from "./BlogSidebar";
import { Typography } from "@/app/components/ui/Typography";

// Blogs Import
import { Blog1 } from "./components/Blog1";
import { Blog2 } from "./components/Blog2";
import { Blog3 } from "./components/Blog3";
import { Blog4 } from "./components/Blog4";
import { Blog5 } from "./components/Blog5";
import { Blog6 } from "./components/Blog6";
import { Blog7 } from "./components/Blog7";
import { Blog8 } from "./components/Blog8";
import { Blog9 } from "./components/Blog9";
import { Blog10 } from "./components/Blog10";
import { Blog11 } from "./components/Blog11";
import { Blog12 } from "./components/Blog12";
import { Blog13 } from "./components/Blog13";
import { Blog14 } from "./components/Blog14";
import { Blog15 } from "./components/Blog15";
import { Blog16 } from "./components/Blog16";
import { Blog17 } from "./components/Blog17";
import { Blog18 } from "./components/Blog18";
import { Blog19 } from "./components/Blog19";
import { Blog20 } from "./components/Blog20";
import { Blog21 } from "./components/Blog21";
import { Blog22 } from "./components/Blog22";
import { Blog23 } from "./components/Blog23";
import { Blog24 } from "./components/Blog24";
import { Blog25 } from "./components/Blog25";
import { Blog26 } from "./components/Blog26";
import { Blog27 } from "./components/Blog27";
import { Blog28 } from "./components/Blog28";
import { Blog29 } from "./components/Blog29";
import { Blog30 } from "./components/Blog30";
import { Blog31 } from "./components/Blog31";
import { Blog32 } from "./components/Blog32";
import { Blog33 } from "./components/Blog33";
import { Blog34 } from "./components/Blog34";
import { Blog35 } from "./components/Blog35";
import { Blog36 } from "./components/Blog36";
import { Blog37 } from "./components/Blog37";
import { Blog38 } from "./components/Blog38";
import { Blog39 } from "./components/Blog39";
import { Blog40 } from "./components/Blog40";
import { Blog41 } from "./components/Blog41";
import { Blog42 } from "./components/Blog42";
import { Blog43 } from "./components/Blog43";
import { Blog44 } from "./components/Blog44";
import { Blog45 } from "./components/Blog45";
import { Blog46 } from "./components/Blog46";
import { Blog47 } from "./components/Blog47";
import { Blog48 } from "./components/Blog48";
import { Blog49 } from "./components/Blog49";
import { Blog50 } from "./components/Blog50";
import { Blog51 } from "./components/Blog51";
import { Blog52 } from "./components/Blog52";
import { Blog53 } from "./components/Blog53";
import { Blog54 } from "./components/Blog54";
import { Blog55 } from "./components/Blog55";
import { Blog56 } from "./components/Blog56";
import { Blog57 } from "./components/Blog57";
import { Blog58 } from "./components/Blog58";
import { Blog59 } from "./components/Blog59";
import { Blog60 } from "./components/Blog60";
import { Blog61 } from "./components/Blog61";
import { Blog62 } from "./components/Blog62";
import { Blog63 } from "./components/Blog63";
import { Blog64 } from "./components/Blog64";
import { Blog65 } from "./components/Blog65";


const ALL_BLOGS = [
  { id: 1, component: <Blog1 /> },
  { id: 2, component: <Blog2 /> },
  { id: 3, component: <Blog3 /> },
  { id: 4, component: <Blog4 /> },
  { id: 5, component: <Blog5 /> },
  { id: 6, component: <Blog6 /> },
  { id: 7, component: <Blog7 /> },
  { id: 8, component: <Blog8 /> },
  { id: 9, component: <Blog9 /> },
  { id: 10, component: <Blog10 /> },
  { id: 11, component: <Blog11 /> },
  { id: 12, component: <Blog12 /> },
  { id: 13, component: <Blog13 /> },
  { id: 14, component: <Blog14 /> },
  { id: 15, component: <Blog15 /> },
  { id: 16, component: <Blog16 /> },
  { id: 17, component: <Blog17 /> },
  { id: 18, component: <Blog18 /> },
  { id: 19, component: <Blog19 /> },
  { id: 20, component: <Blog20 /> },
  { id: 21, component: <Blog21 /> },
  { id: 22, component: <Blog22 /> },
  { id: 23, component: <Blog23 /> },
  { id: 24, component: <Blog24 /> },
  { id: 25, component: <Blog25 /> },
  { id: 26, component: <Blog26 /> },
  { id: 27, component: <Blog27 /> },
  { id: 28, component: <Blog28 /> },
  { id: 29, component: <Blog29 /> },
  { id: 30, component: <Blog30 /> },
  { id: 31, component: <Blog31 /> },
  { id: 32, component: <Blog32 /> },
  { id: 33, component: <Blog33 /> },
  { id: 34, component: <Blog34 /> },
  { id: 35, component: <Blog35 /> },
  { id: 36, component: <Blog36 /> },
  { id: 37, component: <Blog37 /> },
  { id: 38, component: <Blog38 /> },
  { id: 39, component: <Blog39 /> },
  { id: 40, component: <Blog40 /> },
  { id: 41, component: <Blog41 /> },
  { id: 42, component: <Blog42 /> },
  { id: 43, component: <Blog43 /> },
  { id: 44, component: <Blog44 /> },
  { id: 45, component: <Blog45 /> },
  { id: 46, component: <Blog46 /> },
  { id: 47, component: <Blog47 /> },
  { id: 48, component: <Blog48 /> },
  { id: 49, component: <Blog49 /> },
  { id: 50, component: <Blog50 /> },
  { id: 51, component: <Blog51 /> },
  { id: 52, component: <Blog52 /> },
  { id: 53, component: <Blog53 /> },
  { id: 54, component: <Blog54 /> },
  { id: 55, component: <Blog55 /> },
  { id: 56, component: <Blog56 /> },
  { id: 57, component: <Blog57 /> },
  { id: 58, component: <Blog58 /> },
  { id: 59, component: <Blog59 /> },
  { id: 60, component: <Blog60 /> },
  { id: 61, component: <Blog61 /> },
  { id: 62, component: <Blog62 /> },
  { id: 63, component: <Blog63 /> },
  { id: 64, component: <Blog64 /> },
  { id: 65, component: <Blog65 /> },
];

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  // Pagination calculation parameters
  const totalPages = Math.ceil(ALL_BLOGS.length / blogsPerPage);
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = ALL_BLOGS.slice(indexOfFirstBlog, indexOfLastBlog);

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      {/* Dynamic Banner Layout */}
      <div className="h-40 md:h-[200px] w-full flex items-center justify-center bg-[#4A90E2]">
        <Typography
          variant="h1"
          className="text-white uppercase tracking-widest text-center px-4 my-0"
        >
          Blogs
        </Typography>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 md:py-16">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 justify-center">
          {/* Left Grid Layout */}
          <div className="flex-1 max-w-[800px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 justify-items-center">
              {currentBlogs.map((blog) => (
                <div key={blog.id} className="w-full flex justify-center">
                  {blog.component}
                </div>
              ))}
            </div>

            {/* Micro-optimized Responsive Pagination Grid */}
            <div className="mt-12 md:mt-16 flex flex-wrap items-center justify-center gap-3 md:gap-4 px-2">
              {/* Previous Control Action */}
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-md text-sm md:text-base font-bold border transition-all ${
                  currentPage === 1
                    ? "opacity-40 cursor-not-allowed border-gray-200 text-gray-400"
                    : "border-[#1e5d91] text-[#1e5d91] hover:bg-[#1e5d91] hover:text-white"
                }`}
              >
                Previous
              </button>

              {/* Page Number Sequence Modules */}
              <div className="flex flex-wrap items-center justify-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (number) => (
                    <button
                      key={number}
                      onClick={() => setCurrentPage(number)}
                      className={`min-w-10 h-10 rounded-md text-sm md:text-base font-bold transition-all ${
                        currentPage === number
                          ? "bg-orange-400 text-white"
                          : "bg-white border border-gray-200 text-[#1e5d91] hover:bg-[#1e5d91] hover:text-white"
                      }`}
                    >
                      {number}
                    </button>
                  ),
                )}
              </div>

              {/* Next Control Action */}
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-md text-sm md:text-base font-bold border transition-all ${
                  currentPage === totalPages
                    ? "opacity-40 cursor-not-allowed border-gray-200 text-gray-400"
                    : "border-[#1e5d91] text-[#1e5d91] hover:bg-[#1e5d91] hover:text-white"
                }`}
              >
                Next
              </button>
            </div>
          </div>

          {/* Persistent Sticky Desktop Sidebar */}
          <div className="hidden lg:block w-[320px]">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </main>
  );
}
