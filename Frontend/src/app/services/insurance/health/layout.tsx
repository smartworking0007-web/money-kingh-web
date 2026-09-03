import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Health Insurance Plans in India | Compare & Buy Online | Money King",
  description:
    "Compare and buy health insurance plans online with Money King Financial Services. Comprehensive family coverage, critical illness protection, and instant cashless hospitalization.",
  alternates: {
    canonical: "/services/insurance/health",
  },
};

export default function HealthInsuranceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}