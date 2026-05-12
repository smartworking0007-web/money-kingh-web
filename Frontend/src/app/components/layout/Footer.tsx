"use client";

import Link from "next/link";
import Image from "next/image";
import { Typography } from "../ui/Typography";
import { footerData } from "@/data/footerData";
import { FooterItem, SocialItem } from "@/types/footer";
import {
  Mail,
  Phone,
  Globe,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  LucideIcon,
  X,
} from "lucide-react";

const platformIcons: Record<string, LucideIcon> = {
  facebook: Facebook,
  twitter: X, 
  instagram: Instagram,
  youtube: Youtube,
  linkedin: Linkedin,
};

const Footer = () => {
  return (
    <footer className="w-full bg-[#0B1528] text-gray-400 py-12 font-lexend">
      <div className="max-w-[1300px] mx-auto px-6">
        
        {/* MAIN CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* 1. Brand & Contact */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
               <Typography variant="h4" className="text-white">
                Money<span className="">King</span>
              </Typography>
            </div>

            <div className="space-y-4 text-sm leading-relaxed max-w-xs">
              <p className="font-medium text-gray-500">Head Office :</p>
              <p>Office No. 502, 5th Floor, BKC Corporate Tower, Bandra Kurla Complex, Mumbai – 400051</p>
              <div className="flex items-center gap-3 group">
                <Mail size={16} className="text-gray-500 group-hover:text-[#4DB6AC] transition-colors" />
                <a href="mailto:info@moneykingfinancial.com" className="hover:text-white transition-colors">
                  info@moneykingfinancial.com
                </a>
              </div>
              <div className="flex items-center gap-3 group">
                <Phone size={16} className="text-gray-500 group-hover:text-[#4DB6AC] transition-colors" />
                <a href="tel:+9101204206832" className="hover:text-white transition-colors">
                  +91 1204206832
                </a>
              </div>
            </div>
          </div>

          {/* 2. AMFI Section */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
            <div className=" p-2 rounded shadow-sm">
              <Image src="/images/footer/AMFI.webp" alt="AMFI Logo" width={80} height={60} />
            </div>
            <div className="text-[10px] uppercase tracking-wider space-y-1 text-gray-500 font-semibold">
              <p>Association of Mutual Funds in India</p>
              <p>Registered Mutual Fund Distributor</p>
              <p className="pt-2 text-gray-400">Money King Financial Services</p>
              <p className="text-gray-300">ARN: 324915</p>
            </div>
          </div>

          {/* 3. OUR SERVICES (Custom Design Restore) */}
          <div className="space-y-4">
            <Typography className="text-white font-bold text-sm uppercase border-b-2 border-[#4DB6AC] pb-1 w-fit">
              Our Services
            </Typography>
            <ul className="space-y-3">
              {footerData.services.map((service: FooterItem, idx: number) => (
                <li key={idx}>
                  <Link href={service.href} className="group flex items-center gap-2">
                    <span className="text-[#4DB6AC] text-[8px]">●</span>
                    <Typography variant="b2" className="text-gray-400 group-hover:text-white transition-all text-xs group-hover:translate-x-1">
                      {service.label}
                    </Typography>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Quick Links & Legal */}
          <div className="flex flex-col gap-8">
            <div className="space-y-4">
              <Typography className="text-white font-bold text-sm uppercase">Quick Links</Typography>
              <ul className="space-y-2 text-sm">
                {footerData.quickLinks.map((link, idx) => (
                   <li key={idx}>
                    <Link href={link.href} className="hover:text-white transition-colors">{link.label}</Link>
                   </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <Typography className="text-white font-bold text-sm uppercase">Legal</Typography>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <Typography className="text-xs text-gray-500">
            Copyright © {new Date().getFullYear()} All Rights Reserved.
          </Typography>
          
          <div className="flex gap-5">
            {footerData.socials.map((social: SocialItem, idx: number) => {
              const Icon = platformIcons[social.platform] || Globe;
              return (
                <Link 
                  key={idx} 
                  href={social.href} 
                  target="_blank"
                  className="text-gray-500 hover:text-[#4DB6AC] transition-all hover:scale-110"
                >
                  <Icon size={18} />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Risk Disclaimer */}
        <div className="mt-6">
           <p className="text-[10px] text-gray-600  text-center md:text-left">
            Mutual Fund investments are subject to market risks, read all scheme related documents carefully.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;