import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insurance & Risk Management Solutions | Money King Financial Services",
  description:
    "Protect your future, assets, and business with comprehensive insurance and risk mitigation advisory from Money King Financial Services.",
  alternates: {
    canonical: "/services/insurance-management",
  },
};

export default function InsuranceManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}