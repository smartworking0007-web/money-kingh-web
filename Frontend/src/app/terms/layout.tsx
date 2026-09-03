import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Money King Financial Services",
  description:
    "Read the terms and conditions governing the use of services, websites, CRM platforms, and partner networks operated by Money King Financial Services Pvt. Ltd.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}