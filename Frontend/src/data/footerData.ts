import { FooterData } from "@/types/footer";

export const footerData: FooterData = {
  information: [
    { type: "phone", label: "01204206832", href: "tel:+1232341234" },
    {
      type: "mail",
      label: "info@moneykingfinancial.com",
      href: "mailto:info@moneykingfinancial.com",
    },
    {
      type: "map",
      label:
        "Office No. 502, 5th Floor, BKC Corporate Tower, Bandra Kurla Complex, Mumbai – 400051",
      href: "https://maps.app.goo.gl/3Xp8XpM3Z3z9zZ9z9",
    },
  ],
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
  ],
  services: [
    {
      label: "Financial Planning and Advisory",
      href: "/services/financial-planning",
    },
    { label: "Investment Management", href: "/services/investment-management" },
    {
      label: "Banking and Cash Management",
      href: "/services/banking-management",
    },
    {
      label: "Insurance and Risk Management",
      href: "/services/insurance-management",
    },
  ],
  socials: [
    {
      platform: "facebook",
      href: "https://www.facebook.com/profile.php?id=100094636427010",
    },
    { platform: "twitter", href: "https://x.com/services9871" },
    {
      platform: "instagram",
      href: "https://www.instagram.com/money.king.official/",
    },
    { platform: "youtube", href: "https://www.youtube.com/@moneykingf" },
    { platform: "linkedin", href: "https://www.linkedin.com/in/moneyking/" },
  ],
};
