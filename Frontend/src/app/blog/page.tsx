import React from "react";
import { Blog1 } from "./components/Blog1";
import { Blog2 } from "./components/Blog2";
import { BlogSidebar } from "./BlogSidebar";
import { Typography } from "@/app/components/ui/Typography";
import { Blog3 } from "./components/Blog3";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <div className="h-[200px] w-full flex items-center justify-center bg-[#4A90E2]">
        <Typography variant="h1" className="text-white uppercase tracking-widest">Blogs</Typography>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12 justify-center">
          <div className="flex-1 max-w-[800px]"> 
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
              <Blog1 />
              <Blog2 />
              <Blog3 />
              {/* Future Blogs: <Blog2 /> */}
            </div>
          </div>
          <div className="hidden lg:block w-[320px]">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </main>
  );
}