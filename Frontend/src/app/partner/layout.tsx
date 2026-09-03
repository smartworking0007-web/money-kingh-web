import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner With Us | Become a Partner | Money King Financial Services",
  description:
    "Partner with Money King Financial Services to grow your business. Offer loans, mutual funds, and insurance with attractive payout structures and dedicated support.",
  alternates: {
    canonical: "/partner",
  },
};

export default function PartnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}