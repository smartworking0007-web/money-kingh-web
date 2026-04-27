"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/app/components/ui/Sheet";
import { Typography } from "../ui/Typography";
import MegaMenu from "./MegaMenu/MegaMenu";
import ServicesDropdown from "./ServicesDropdown";

// Official WhatsApp Logo Component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setMobileMenuOpen(false);

  // ✅ Auto close on route change - Next.js & TS Safe Logic
  useEffect(() => {
    if (mobileMenuOpen) {
      requestAnimationFrame(() => {
        setMobileMenuOpen(false);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#F0F5FF] border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto h-[84px] px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-full gap-2">
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

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center h-full flex-1 justify-center">
              <MegaMenu />
              <Link href="/" className="px-4 h-full flex items-center group">
                <Typography
                  variant="nav-link"
                  className="group-hover:text-blue-600"
                >
                  Home
                </Typography>
              </Link>

              <Link
                href="/about"
                className="px-4 h-full flex items-center group"
              >
                <Typography
                  variant="nav-link"
                  className="group-hover:text-blue-600"
                >
                  About Us
                </Typography>
              </Link>

              <div className="h-full flex items-center px-4">
                <ServicesDropdown />
              </div>

              <Link
                href="/contact"
                className="px-4 h-full flex items-center group"
              >
                <Typography
                  variant="nav-link"
                  className="group-hover:text-blue-600"
                >
                  Contact Us
                </Typography>
              </Link>

              <Link
                href="/services/stock/mstock"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 h-full flex items-center group"
              >
                <Typography
                  variant="nav-link"
                  className="group-hover:text-blue-600"
                >
                  Open Demat Account
                </Typography>
              </Link>

              <Link
                href="/partner"
                className="px-4 h-full flex items-center group"
              >
                <Typography
                  variant="nav-link"
                  className="group-hover:text-blue-600"
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
                  className="w-full p-0 bg-white flex flex-col h-full overflow-hidden border-none"
                >
                  <div className="relative h-20 w-full border-b flex items-center px-4 bg-gray-50/50">
                    <Image
                      src="/images/logo.svg"
                      alt="Logo"
                      width={140}
                      height={40}
                    />
                    <button
                      onClick={closeMenu}
                      className="ml-auto p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
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

                    {/* Support Section */}
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
                        className="flex items-center gap-3 p-4 bg-green-50 rounded-xl border border-green-100 active:scale-95"
                      >
                        <div className="bg-[#25D366] p-2 rounded-full shadow-sm">
                          <WhatsAppIcon className="w-5 h-5 text-white" />
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

      {/* FLOATING WHATSAPP */}
      <div className="fixed bottom-10 right-6 z-50 flex items-center justify-center">
        <div className="absolute h-20 w-20 animate-ping rounded-full bg-green-500 opacity-20"></div>
        <button
          onClick={() => window.open("https://wa.me/9311284229", "_blank")}
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-2xl active:scale-90 hover:brightness-110 transition-all"
        >
          <WhatsAppIcon className="w-8 h-8 text-white" />
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
      <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-blue-500 transition-colors" />
    </Link>
  );
}
