"use client";
import React, { useState } from "react";
import { BlogSidebar } from "./BlogSidebar";
import { Typography } from "@/app/components/ui/Typography";

// 1. Saare Blogs Import karein
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

// 2. Blog Array Banayein (Aage naye blogs bas yahan add karne honge)
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
];

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6; 

  // Pagination Logic
  const totalPages = Math.ceil(ALL_BLOGS.length / blogsPerPage);
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;

  // Current page ke liye blogs filter karein
  const currentBlogs = ALL_BLOGS.slice(indexOfFirstBlog, indexOfLastBlog);

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      {/* Banner */}
      <div className="h-[200px] w-full flex items-center justify-center bg-[#4A90E2]">
        <Typography
          variant="h1"
          className="text-white uppercase tracking-widest"
        >
          Blogs
        </Typography>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12 justify-center">
          <div className="flex-1 max-w-[800px]">
            {/* --- GRID VIEW (Mapping through Array) --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
              {currentBlogs.map((blog) => (
                <div key={blog.id} className="w-full">
                  {blog.component}
                </div>
              ))}
            </div>

            {/* --- NUMERICAL PAGINATION --- */}
            <div className="mt-16 flex items-center justify-center gap-4">
              {/* Previous */}
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`flex items-center font-bold text-[#1e5d91] ${
                  currentPage === 1
                    ? "opacity-30 cursor-not-allowed"
                    : "hover:underline"
                }`}
              >
                « Previous
              </button>

              {/* Numbers */}
              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (number) => (
                    <button
                      key={number}
                      onClick={() => setCurrentPage(number)}
                      className={`px-3 py-1 text-lg font-bold transition-all ${
                        currentPage === number
                          ? "text-orange-400 border-b-2 border-orange-400"
                          : "text-[#1e5d91] hover:text-blue-800"
                      }`}
                    >
                      {number}
                    </button>
                  ),
                )}
              </div>

              {/* Next */}
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className={`flex items-center font-bold text-[#1e5d91] ${
                  currentPage === totalPages
                    ? "opacity-30 cursor-not-allowed"
                    : "hover:underline"
                }`}
              >
                Next »
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="hidden lg:block w-[320px]">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </main>
  );
}
