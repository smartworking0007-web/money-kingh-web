// data/whyChoose.ts

export interface WhyChooseItem {
  id: number;
  title: string;
  icon: string;
  width: number;
  height: number;
  link?: string;
}

export const whyChooseData: WhyChooseItem[] = [
  {
    id: 1,
    title: "Personalized Personal Loan",
    icon: "/images/Choose/adv1.png",
    width: 64,
    height: 64,
    link: "/services/loan/unsecured/personal",
  },
  {
    id: 2,
    title: "One-day Approval and Disbursal",
    icon: "/images/Choose/adv2.png",
    width: 64,
    height: 64,
  },
  {
    id: 3,
    title: "Secured Database",
    icon: "/images/Choose/adv3.png",
    width: 64,
    height: 64,
  },
  {
    id: 4,
    title: "Minimal Documents",
    icon: "/images/Choose/adv4.png",
    width: 64,
    height: 64,
  },
  {
    id: 5,
    title: "User-Friendly Experience",
    icon: "/images/Choose/adv5.png",
    width: 64,
    height: 64,
  },
  {
    id: 6,
    title: "Lowest Interest Rate",
    icon: "/images/Choose/adv6.png",
    width: 64,
    height: 64,
  },
];