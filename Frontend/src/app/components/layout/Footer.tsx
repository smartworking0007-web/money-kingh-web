"use client";

import React from "react";
import Link from "next/link";
import { Typography } from "../ui/Typography";
import { footerData } from "@/data/footerData";
import { FooterItem, SocialItem } from "@/types/footer";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  ShieldCheck,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  LucideIcon,
  Fingerprint,
  BadgeCheck,
  Rocket, // Rocket icon Startup India ke liye
} from "lucide-react";

const platformIcons: Record<string, LucideIcon> = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  youtube: Youtube,
  linkedin: Linkedin,
};

const Footer = () => {
  return (
    <footer className="w-full bg-[#0B1D33] text-white py-12 lg:py-16 border-t border-white/5 font-lexend">
      <div className="max-w-[1300px] mx-auto px-6 flex flex-col">
        {/* Columns Grid - Reduced gap from 12 to 8 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {/* 1. Contact Info - Reduced spacing */}
          <div className="flex flex-col space-y-4">
            <Typography
              variant="h5"
              className="text-white font-bold border-b-2 border-[#4DB6AC] pb-2 inline-block w-fit uppercase text-sm tracking-wider"
            >
              Contact Info
            </Typography>
            <ul className="space-y-3">
              {footerData.information.map((item: FooterItem, idx: number) => (
                <li key={idx} className="flex items-start gap-3 group">
                  <div className="bg-white/10 p-2 rounded-lg text-[#4DB6AC] group-hover:bg-[#4DB6AC] group-hover:text-white transition-all shrink-0">
                    {item.type === "phone" && <Phone size={16} />}
                    {item.type === "mail" && <Mail size={16} />}
                    {item.type === "map" && <MapPin size={16} />}
                    {item.type === "globe" && <Globe size={16} />}
                  </div>
                  <Link href={item.href} className="pt-1 flex-1">
                    <Typography
                      variant="b2"
                      className="text-gray-300 group-hover:text-[#4DB6AC] transition-colors text-xs"
                    >
                      {item.label}
                    </Typography>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 2. Quick Links */}
          <div className="flex flex-col space-y-4">
            <Typography
              variant="h5"
              className="text-white font-bold border-b-2 border-[#4DB6AC] pb-2 inline-block w-fit uppercase text-sm tracking-wider"
            >
              Quick Links
            </Typography>
            <ul className="space-y-2.5">
              {footerData.quickLinks.map((link: FooterItem, idx: number) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2"
                  >
                    <Typography
                      variant="b2"
                      className="text-gray-300 group-hover:text-[#4DB6AC] transition-all group-hover:translate-x-1 text-xs"
                    >
                      <span className="text-[#4DB6AC] text-[8px] mr-1">●</span>{" "}
                      {link.label}
                    </Typography>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Services */}
          <div className="flex flex-col space-y-4">
            <Typography
              variant="h5"
              className="text-white font-bold border-b-2 border-[#4DB6AC] pb-2 inline-block w-fit uppercase text-sm tracking-wider"
            >
              Our Services
            </Typography>
            <ul className="space-y-2.5">
              {footerData.services.map((service: FooterItem, idx: number) => (
                <li key={idx}>
                  <Link
                    href={service.href}
                    className="group flex items-center gap-2"
                  >
                    <Typography
                      variant="b2"
                      className="text-gray-300 group-hover:text-[#4DB6AC] transition-all group-hover:translate-x-1 text-xs"
                    >
                      <span className="text-[#4DB6AC] text-[8px] mr-1">●</span>{" "}
                      {service.label}
                    </Typography>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Compliance - Added Startup India & Reduced spacing */}
          <div className="flex flex-col space-y-4">
            <Typography
              variant="h5"
              className="text-white font-bold border-b-2 border-[#4DB6AC] pb-2 inline-block w-fit uppercase text-sm tracking-wider"
            >
              Compliance
            </Typography>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 group">
                <div className="bg-white/10 p-2 rounded-lg text-[#4DB6AC] group-hover:bg-[#4DB6AC] group-hover:text-white transition-all shrink-0">
                  <Rocket size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] text-gray-500 font-bold uppercase">
                    Startup India ID
                  </span>
                  <Typography variant="b2" className="text-gray-300 text-xs">
                    DIPP199589
                  </Typography>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="bg-white/10 p-2 rounded-lg text-[#4DB6AC] group-hover:bg-[#4DB6AC] group-hover:text-white transition-all shrink-0">
                  <BadgeCheck size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] text-gray-500 font-bold uppercase">
                    GSTIN / ARN No
                  </span>
                  <Typography variant="b2" className="text-gray-300 text-xs">
                    09AAPCM7383J1ZM / 324915
                  </Typography>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="bg-white/10 p-2 rounded-lg text-[#4DB6AC] group-hover:bg-[#4DB6AC] group-hover:text-white transition-all shrink-0">
                  <Fingerprint size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] text-gray-500 font-bold uppercase">
                    CIN NO
                  </span>
                  <Typography
                    variant="b2"
                    className="text-gray-300 text-xs leading-none"
                  >
                    U65990UP2022PTC163608
                  </Typography>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="bg-white/10 p-2 rounded-lg text-[#4DB6AC] group-hover:bg-[#4DB6AC] group-hover:text-white transition-all shrink-0">
                  <ShieldCheck size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] text-gray-500 font-bold uppercase">
                    NSE / BSE AP
                  </span>
                  <Typography
                    variant="b2"
                    className="text-gray-300 text-xs leading-none"
                  >
                    AP3022004823 / AP01668101170229
                  </Typography>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* Bottom Bar - Reduced mt */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center lg:items-start space-y-1">
            <Typography
              variant="h5"
              className="text-white font-black uppercase text-sm"
            >
              Money King Financial Services PVT. LTD.
            </Typography>
            <Typography variant="caption" className="text-gray-500 text-[9px]">
              © {new Date().getFullYear()} All Rights Reserved.
            </Typography>
          </div>

          <div className="flex gap-2.5">
            {footerData.socials.map((social: SocialItem, idx: number) => {
              const Icon = platformIcons[social.platform] || Globe;
              return (
                <Link
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#4DB6AC] hover:scale-110 transition-all"
                >
                  <Icon size={16} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
