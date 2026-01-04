"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Search, ChevronRight, LogIn } from "lucide-react"; // Search import fixed
import { Sheet, SheetContent, SheetTrigger } from "@/app/components/ui/Sheet";
import { Button } from "../ui/Button";
import { Typography } from "../ui/Typography";
import MegaMenu from "./MegaMenu/MegaMenu";

import ServicesDropdown from "./ServicesDropdown";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#F0F5FF] border-b border-gray-200">
      <div className="max-w-[1440px] mx-auto h-[84px] px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6 justify-between h-full relative">
          {/* LOGO */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.svg"
              alt="Money King"
              width={200}
              height={40}
              className="w-[160px] sm:w-[200px] h-auto"
              priority
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center h-full flex-1">
            <MegaMenu />

            <Link href="/" className="px-5 h-full flex items-center group">
              <Typography
                variant="nav-link"
                className="group-hover:text-blue-600 transition-colors"
              >
                Home
              </Typography>
            </Link>

            <Link href="/about" className="px-5 h-full flex items-center group">
              <Typography
                variant="nav-link"
                className="group-hover:text-blue-600 transition-colors"
              >
                About Us
              </Typography>
            </Link>

            {/* SERVICES DROPDOWN - Blue Button Style for Web */}
            <div className="h-full flex items-center px-5">
              <ServicesDropdown />
            </div>

            <Link
              href="/contact"
              className="px-5 h-full flex items-center group"
            >
              <Typography
                variant="nav-link"
                className="group-hover:text-blue-600 transition-colors"
              >
                Contact Us
              </Typography>
            </Link>

            {/* Desktop Search & Actions */}
            <div className="ml-auto flex items-center gap-4">
              <div className="flex items-center w-[210px] h-11 rounded-md border border-gray-300 bg-white shadow-sm focus-within:border-blue-500 transition-all">
                <Search className="ml-4 w-5 h-5 text-gray-400" />{" "}
                {/* Search used here */}
                <input
                  type="text"
                  placeholder="Search..."
                  className="ml-3 flex-1 bg-transparent text-sm outline-none placeholder:text-gray-400"
                />
              </div>
              <Button className="w-[145px] h-11 rounded-md shadow-md">
                <Typography variant="btn-primary">
                  <a href="/contact">Sign Up</a>
                </Typography>
              </Button>
              <Button
                variant="ghost"
                className="w-[100px] h-11 rounded-md bg-[#E7EDF0] text-blue-600 hover:bg-[#d0dfe6]"
              >
                <a href="/contact">Login</a>
              </Button>
            </div>
          </nav>
          
          {/* MOBILE MENU */}
          <div className="lg:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <button className="p-3 border border-gray-100 active:scale-95">
                  <Menu className="w-5 h-7 text-gray" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-full p-0 bg-white flex flex-col h-full overflow-hidden"
              >
                {/* Mobile Header */}
                <div className="relative h-20 w-full border-b flex items-center px-4 bg-gray-50/50">
                  <Image
                    src="/images/logo.svg"
                    alt="Logo"
                    width={140}
                    height={40}
                  />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="ml-auto p-2"
                  >
                    <X className="w-6 h-6 text-gray-600" />
                  </button>
                </div>

                {/* Mobile Navigation List */}
                <div className="flex-1 overflow-y-auto px-6 py-10">
                  <div className="flex flex-col gap-6">
                    {/* Mobile Search - Search icon used here too */}
                    <div className="relative">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                     
                    </div>

                    <nav className="flex flex-col space-y-2">
                      <Typography
                        variant="caption"
                        className="uppercase tracking-widest text-gray-400 font-bold mb-4 ml-1"
                      >
                        Navigation
                      </Typography>

                      <Link
                        href="/"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between p-4 rounded-md hover:bg-blue-50 group"
                      >
                        <Typography
                          variant="s1"
                          className="text-gray-700 font-semibold text-lg"
                        >
                          Home
                        </Typography>
                        <ChevronRight className="w-6 h-6 text-gray-300" />
                      </Link>

                      <Link
                        href="/about"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between p-4 rounded-md hover:bg-blue-50 group"
                      >
                        <Typography
                          variant="s1"
                          className="text-gray-700 font-semibold text-lg"
                        >
                          About Us
                        </Typography>
                        <ChevronRight className="w-6 h-6 text-gray-300" />
                      </Link>

                      {/* Integrated Mobile Services Dropdown */}
                      <ServicesDropdown />

                      <Link
                        href="/contact"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between p-4 rounded-md hover:bg-blue-50 group"
                      >
                        <Typography
                          variant="s1"
                          className="text-gray-700 font-semibold text-lg"
                        >
                          Contact Us
                        </Typography>
                        <ChevronRight className="w-6 h-6 text-gray-300" />
                      </Link>
                    </nav>
                  </div>
                </div>

                {/* Mobile Bottom Actions */}
                <div className="p-8 border-t bg-gray-50 mb-25">
                  <Button className="w-full h-14 rounded-md mb-3 font-bold">
                    Sign Up
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full h-14 rounded-md bg-white border border-gray-200 flex items-center justify-center"
                  >
                    <LogIn className="w-5 h-5 mr-2 text-blue-600" />
                    <span className="text-blue-600 font-bold">Login</span>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
