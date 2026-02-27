"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Search, ChevronRight, MessageCircle } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/app/components/ui/Sheet";
import { Typography } from "../ui/Typography";
import MegaMenu from "./MegaMenu/MegaMenu";
import ServicesDropdown from "./ServicesDropdown";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-[#F0F5FF] border-b border-gray-200">
      <div className="max-w-[1440px] mx-auto h-[84px] px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-1 justify-between h-full relative">
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

            <Link
              href="https://ekyc.mstock.com/Register-with-us?pdc=AE2D3E733"
              className="px-5 h-full flex items-center group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography
                variant="nav-link"
                className="group-hover:text-blue-600 transition-colors"
              >
                Open Demat Account
              </Typography>
            </Link>

            <Link
              href="/partner"
              className="px-5 h-full flex items-center group"
            >
              <Typography
                variant="nav-link"
                className="group-hover:text-blue-600 transition-colors"
              >
                Become Our Partner
              </Typography>
            </Link>

            {/* Desktop WhatsApp Search Bar */}
            <div className="ml-auto flex items-center gap-4">
              <div className="flex items-center w-[320px] h-11 rounded-md border border-gray-300 bg-white shadow-sm focus-within:border-blue-500 transition-all pr-2">
                <Search className="ml-4 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="WhatsApp: +91 9311284229"
                  className="ml-3 flex-1 bg-transparent text-sm outline-none placeholder:text-gray-400 min-w-0"
                />
                <a
                  href="https://wa.me/9311284229"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whitespace-nowrap ml-2 bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 rounded-md text-xs font-medium transition-colors"
                >
                  Chat
                </a>
              </div>
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
                  <button onClick={closeMenu} className="ml-auto p-2">
                    <X className="w-6 h-6 text-gray-600" />
                  </button>
                </div>

                {/* Mobile Navigation List */}
                <div className="flex-1 overflow-y-auto px-4 py-6">
                  <nav className="flex flex-col space-y-1">
                    <Typography
                      variant="caption"
                      className="uppercase tracking-widest text-gray-400 font-bold mb-4 ml-2"
                    >
                      Navigation
                    </Typography>

                    <MobileNavLink href="/" label="Home" onClick={closeMenu} />
                    <MobileNavLink
                      href="/about"
                      label="About Us"
                      onClick={closeMenu}
                    />

                    {/* Integrated Mobile Services Dropdown */}
                    <div className="py-2">
                      <ServicesDropdown />
                    </div>

                    <MobileNavLink
                      href="/contact"
                      label="Contact Us"
                      onClick={closeMenu}
                    />

                    {/* Open Demat A/c - External */}
                    <Link
                      href="https://ekyc.mstock.com/Register-with-us?pdc=AE2D3E733"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 rounded-md hover:bg-blue-50 group"
                    >
                      <Typography
                        variant="s1"
                        className="text-blue-600 font-semibold text-lg"
                      >
                        Open Demat A/c
                      </Typography>
                      <ChevronRight className="w-5 h-5 text-blue-300" />
                    </Link>

                    <MobileNavLink
                      href="/partner"
                      label="Become Our Partner"
                      onClick={closeMenu}
                    />
                  </nav>

                  {/* Mobile WhatsApp Integration */}
                  <div className="mt-8 px-2">
                    <Typography
                      variant="caption"
                      className="uppercase tracking-widest text-gray-400 font-bold mb-4"
                    >
                      Contact Support
                    </Typography>
                    <a
                      href="https://wa.me/9311284229"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 bg-green-50 rounded-xl border border-green-100"
                    >
                      <div className="bg-green-500 p-2 rounded-full">
                        <MessageCircle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-green-800">
                          +91 9311284229
                        </p>
                        <p className="text-xs text-green-600">
                          Click to chat on WhatsApp
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

// Helper Component for Mobile Links to keep code clean
function MobileNavLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-center justify-between p-4 rounded-md hover:bg-blue-50 group transition-all"
    >
      <Typography variant="s1" className="text-gray-700 font-semibold text-lg">
        {label}
      </Typography>
      <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-blue-500" />
    </Link>
  );
}
