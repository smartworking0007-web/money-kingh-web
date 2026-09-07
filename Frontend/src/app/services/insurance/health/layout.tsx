import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Health Insurance Plans | Cashless Hospitalization & Medical Cover | Money King",
  description:
    "Protect your family with comprehensive health insurance plans. Get high sum insured, cashless claims at network hospitals, and instant policy approval.",
  alternates: {
    canonical: "https://moneykingfinancial.com/services/insurance/health",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HealthInsuranceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}