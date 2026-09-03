import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Money King Financial Services",
  description:
    "Read the detailed Privacy Policy of Money King Financial Services Pvt. Ltd. Learn how we collect, store, process, and protect your personal and financial information.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}