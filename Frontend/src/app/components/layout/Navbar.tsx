"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronRight, MessageCircle } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/app/components/ui/Sheet";
import { Typography } from "../ui/Typography";
import MegaMenu from "./MegaMenu/MegaMenu";
import ServicesDropdown from "./ServicesDropdown";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#F0F5FF] border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto h-[84px] px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-full relative gap-2">
            {/* LOGO */}
            <Link href="/" className="shrink-0">
              <Image
                src="/images/logo.svg"
                alt="Money King"
                width={200}
                height={40}
                className="w-[140px] xl:w-[200px] h-auto"
                priority
              />
            </Link>

            {/* DESKTOP NAVIGATION */}
            <nav className="hidden lg:flex items-center h-full flex-1 justify-center">
              <MegaMenu />

              <Link
                href="/"
                className="px-2 xl:px-5 h-full flex items-center group"
              >
                <Typography
                  variant="nav-link"
                  className="group-hover:text-blue-600 transition-colors text-sm xl:text-base whitespace-nowrap"
                >
                  Home
                </Typography>
              </Link>

              <Link
                href="/about"
                className="px-2 xl:px-5 h-full flex items-center group"
              >
                <Typography
                  variant="nav-link"
                  className="group-hover:text-blue-600 transition-colors text-sm xl:text-base whitespace-nowrap"
                >
                  About Us
                </Typography>
              </Link>

              <div className="h-full flex items-center px-2 xl:px-5">
                <ServicesDropdown />
              </div>

              <Link
                href="/contact"
                className="px-2 xl:px-5 h-full flex items-center group"
              >
                <Typography
                  variant="nav-link"
                  className="group-hover:text-blue-600 transition-colors text-sm xl:text-base whitespace-nowrap"
                >
                  Contact Us
                </Typography>
              </Link>

              <Link
                href="/services/stock/mstock"
                className="px-2 xl:px-5 h-full flex items-center group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Typography
                  variant="nav-link"
                  className="group-hover:text-blue-600 transition-colors text-sm xl:text-base whitespace-nowrap"
                >
                  Open Demat Account
                </Typography>
              </Link>

              <Link
                href="/partner"
                className="px-2 xl:px-5 h-full flex items-center group"
              >
                <Typography
                  variant="nav-link"
                  className="group-hover:text-blue-600 transition-colors text-sm xl:text-base whitespace-nowrap"
                >
                  Become Our Partner
                </Typography>
              </Link>
            </nav>

            {/* MOBILE MENU */}
            <div className="lg:hidden">
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <button className="p-2 border border-gray-100 active:scale-95 rounded-md">
                    <Menu className="w-6 h-6 text-gray-600" />
                  </button>
                </SheetTrigger>
                <SheetContent
                  side="left"
                  className="w-full p-0 bg-white flex flex-col h-full overflow-hidden"
                >
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

                  <div className="flex-1 overflow-y-auto px-4 py-6">
                    <nav className="flex flex-col space-y-1">
                      <Typography
                        variant="caption"
                        className="uppercase tracking-widest text-gray-400 font-bold mb-4 ml-2"
                      >
                        Navigation
                      </Typography>

                      <MobileNavLink
                        href="/"
                        label="Home"
                        onClick={closeMenu}
                      />
                      <MobileNavLink
                        href="/about"
                        label="About Us"
                        onClick={closeMenu}
                      />

                      <div className="py-2">
                        <ServicesDropdown />
                      </div>

                      <MobileNavLink
                        href="/contact"
                        label="Contact Us"
                        onClick={closeMenu}
                      />

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

      {/* FLOATING PULSE WHATSAPP BUTTON */}
      <div className="fixed bottom-10 right-6 z-60 flex items-center justify-center">
        {/* Pulse Layers - Green color to match WhatsApp */}
        <div className="absolute h-20 w-20 animate-ping rounded-full bg-green-500 opacity-20"></div>
        <div className="absolute h-14 w-14 animate-pulse rounded-full bg-green-500 opacity-40"></div>

        {/* Main Button */}
        <button
          onClick={() => window.open("https://wa.me/9311284229", "_blank")}
          className="relative flex h-18 w-17 items-center justify-center rounded-full bg-[#25D366] shadow-2xl transition-all active:scale-90 hover:brightness-110 group"
          aria-label="Chat on WhatsApp"
        >
          {/* WhatsApp SVG Icon */}
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.301-.15-1.781-.878-2.057-.978-.277-.1-.478-.15-.678.15-.2.3-.778.978-.952 1.178-.174.2-.347.225-.648.075-.3-.15-1.264-.465-2.403-1.485-.888-.792-1.487-1.77-1.662-2.07-.174-.3-.019-.462.13-.61.135-.133.301-.35.451-.525.15-.175.2-.299.3-.5.1-.2.05-.375-.025-.525-.075-.15-.678-1.635-.928-2.238-.244-.595-.493-.513-.678-.522-.175-.008-.376-.01-.577-.01-.201 0-.527.075-.803.375-.276.3-1.054 1.03-1.054 2.512 0 1.482 1.077 2.912 1.226 3.112.148.2 2.121 3.238 5.14 4.542.717.31 1.277.495 1.711.633.721.23 1.378.197 1.897.12.579-.085 1.782-.728 2.032-1.43.25-.702.25-1.305.175-1.43-.075-.125-.275-.2-.575-.35zM12.004 20.11a7.994 7.994 0 01-4.081-1.116l-.293-.174-3.038.797.811-2.96-.191-.303A7.986 7.986 0 014.008 12.01c0-4.414 3.591-8.005 8.005-8.005 4.414 0 8.005 3.591 8.005 8.005s-3.591 8.005-8.005 8.005zM12.004 2a10.007 10.007 0 00-10 10c0 1.742.446 3.442 1.29 4.966L2 22l5.191-1.363A9.96 9.96 0 0012.004 22c5.523 0 10-4.477 10-10s-4.477-10-10-10z" />
          </svg>
        </button>
      </div>
    </>
  );
}

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
