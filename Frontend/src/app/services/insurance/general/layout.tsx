import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "General Insurance Policies | Motor, Commercial & Property Cover | Money King",
  description:
    "Secure your valuable assets with general insurance policies. Compare plans and get maximum coverage for vehicle, property, liability, and commercial needs.",
  alternates: {
    canonical: "https://moneykingfinancial.com/services/insurance/general",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function GeneralInsuranceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}