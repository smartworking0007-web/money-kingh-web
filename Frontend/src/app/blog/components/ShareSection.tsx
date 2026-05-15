"use client";

import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Plus,
  MessageCircle,
} from "lucide-react";
import { Typography } from "@/app/components/ui/Typography";

const shareLinks = [
  {
    id: "fb",
    name: "Facebook",
    icon: <Facebook size={18} className="md:w-5 md:h-5" fill="currentColor" />,
    color: "bg-[#3b5998] hover:bg-[#2d4373]",
    href: "https://www.facebook.com/profile.php?id=100094636427010",
  },
  {
    id: "ig",
    name: "Instagram",
    icon: <Instagram size={18} className="md:w-5 md:h-5" />,
    color:
      "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] hover:brightness-110",
    href: "https://www.instagram.com/money.king.official/",
  },
  {
    id: "wa",
    name: "WhatsApp",
    icon: (
      <MessageCircle size={18} className="md:w-5 md:h-5" fill="currentColor" />
    ),
    color: "bg-[#25D366] hover:bg-[#20ba56]",
    href: "https://wa.me/9311284229",
  },
  {
    id: "li",
    name: "LinkedIn",
    icon: <Linkedin size={18} className="md:w-5 md:h-5" fill="currentColor" />,
    color: "bg-[#0077b5] hover:bg-[#005987]",
    href: "https://www.linkedin.com/in/moneyking/",
  },
  {
    id: "tw",
    name: "Twitter",
    icon: <Twitter size={18} className="md:w-5 md:h-5" fill="currentColor" />,
    color: "bg-[#1DA1F2] hover:bg-[#1a91da]",
    href: "https://x.com/services9871",
  },
];

export const ShareSection = () => (
  <div className="mt-8 md:mt-12 py-6 border-t border-gray-100 w-full">
    <Typography variant="s1" className="text-gray-800 mb-4 text-left font-bold">
      Share This Blog
    </Typography>

    <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
      {shareLinks.map((s) => (
        <a
          key={s.id}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          title={s.name}
          aria-label={`Share on ${s.name}`}
          className={`${s.color} text-white p-3.5 sm:p-3 rounded-full hover:scale-105 active:scale-95 sm:hover:scale-110 sm:active:scale-90 transition-all shadow-sm flex items-center justify-center min-w-11 min-h-11 sm:min-w-0 sm:min-h-0`}
        >
          {s.icon}
        </a>
      ))}

      <button
        aria-label="More share options"
        className="bg-[#eb8e39] hover:bg-[#d47d2b] text-white p-3.5 sm:p-3 rounded-full hover:scale-105 active:scale-95 sm:hover:scale-110 sm:active:scale-90 transition-all shadow-sm flex items-center justify-center min-w-11 min-h-11 sm:min-w-0 sm:min-h-0"
      >
        <Plus size={18} className="md:w-5 md:h-5" />
      </button>
    </div>
  </div>
);
