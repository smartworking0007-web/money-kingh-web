import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Money King Financial Services",
  description:
    "Learn about Money King Financial Services Pvt. Ltd. Discover our vision, mission, nationwide partner network, and leadership in loan distribution and financial advisory.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}