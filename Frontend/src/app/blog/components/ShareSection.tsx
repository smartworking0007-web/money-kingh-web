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
    icon: <Facebook size={20} fill="currentColor" />,
    color: "bg-[#3b5998]",
    href: "https://www.facebook.com/profile.php?id=100094636427010",
  },
  {
    id: "ig",
    icon: <Instagram size={20} />,
    color: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
    href: "https://www.instagram.com/money.king.official/",
  },
  {
    id: "wa",
    icon: <MessageCircle size={20} fill="currentColor" />,
    color: "bg-[#25D366]",
    href: "https://wa.me/9311284229",
  },
  {
    id: "li",
    icon: <Linkedin size={20} fill="currentColor" />,
    color: "bg-[#0077b5]",
    href: "https://www.linkedin.com/in/moneyking/",
  },
  {
    id: "tw",
    icon: <Twitter size={20} fill="currentColor" />,
    color: "bg-[#1DA1F2]",
    href: "https://x.com/services9871",
  },
];

export const ShareSection = () => (
  <div className="mt-8 md:mt-10 py-6 border-t border-gray-100">
    <Typography variant="s1" className="font-bold text-gray-800 mb-4 text-left">
      Share This Blog
    </Typography>
    <div className="flex flex-wrap gap-3 md:gap-4">
      {shareLinks.map((s) => (
        <a
          key={s.id}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${s.color} text-white p-3 md:p-2.5 rounded-full hover:scale-110 active:scale-90 transition-all shadow-sm`}
        >
          {s.icon}
        </a>
      ))}
      <button className="bg-[#eb8e39] text-white p-3 md:p-2.5 rounded-full hover:bg-[#d47d2b] transition-colors shadow-sm">
        <Plus size={20} />
      </button>
    </div>
  </div>
);
