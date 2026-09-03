import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financial Blogs & Guides | Money King Financial Services",
  description:
    "Explore practical guides on personal loans, mutual funds, SIP, insurance, and smart wealth planning.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}