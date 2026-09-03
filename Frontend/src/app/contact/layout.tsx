import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Money King Financial Services",
  description:
    "Get in touch with Money King Financial Services. Reach our Mumbai headquarters or branch offices nationwide for loans, mutual funds, and insurance inquiries.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}