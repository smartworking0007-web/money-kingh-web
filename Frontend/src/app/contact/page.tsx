"use client";

import React, { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import Link from "next/link";
import { Typography } from "@/app/components/ui/Typography";
import { cn } from "@/app/lib/utils";
import { Phone, Mail, MapPin, ChevronDown } from "lucide-react";

type FormData = {
  fullName: string;
  phone: string;
  email: string;
  course: string;
  message: string;
  consent: boolean;
};

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    email: "",
    course: "",
    message: "",
    consent: true,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Is state se dropdown address change hoga
  const [selectedBranch, setSelectedBranch] = useState("Noida (HO)");

  const branchOffices: Record<string, string> = {
    "Noida (HO)": "A-39, 2nd Floor, Sector 63, Noida, Uttar Pradesh 201301",
    Mumbai:
      "Office No. 502, 5th Floor, BKC Corporate Tower, Bandra Kurla Complex, Mumbai – 400051",
    Bangalore:
      "3rd Floor, Prestige Tech Park, Marathahalli – Sarjapur Ring Road, Bangalore – 560103",
    Jaipur:
      "2nd Floor, Pink Square Mall, Govind Marg, Raja Park, Jaipur – 302004",
    Patna: "4th Floor, Maurya Lok Complex, Dak Bungalow Road, Patna – 800001",
    Bhopal:
      "3rd Floor, DB City Corporate Park, MP Nagar Zone-1, Bhopal – 462011",
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "contact_forms"), {
        ...formData,
        createdAt: new Date().toISOString(),
      });
      setSuccess(true);
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        course: "",
        message: "",
        consent: true,
      });
    } catch (error) {
      console.error(error);
      alert("Error submitting form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-lexend pb-20">
      <section className="bg-slate-900 py-20 px-6 text-center text-white">
        <Typography variant="h2" as="h1" className="font-black mb-3">
          Get in Touch
        </Typography>
        <p className="text-slate-400 max-w-md mx-auto text-sm md:text-base">
          Experience financial excellence across India. Choose your nearest
          branch below.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 -mt-12 grid lg:grid-cols-12 gap-8">
        {/* LEFT: FORM SECTION */}
        <div className="lg:col-span-7 bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-slate-100">
          <Typography variant="h4" className="text-slate-900 font-bold mb-6">
            Send us a Message
          </Typography>

          {success ? (
            <div className="p-6 bg-emerald-50 text-emerald-700 rounded-2xl border border-emerald-100 font-bold text-center">
              ✓ Successfully submitted! We ll call you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <select
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none"
                onChange={(e) =>
                  setFormData({ ...formData, course: e.target.value })
                }
              >
                <option value="">Select Service</option>
                <option value="Loans">Loans (Personal/Home/Business)</option>
                <option value="Mutual Funds">Mutual Funds</option>
                <option value="Insurance">Insurance</option>
              </select>
              <textarea
                placeholder="Your Message"
                rows={3}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none resize-none"
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              ></textarea>

              <div className="flex items-start gap-3 p-4 bg-blue-50/50 rounded-2xl border border-blue-100">
                <input
                  type="checkbox"
                  checked={formData.consent}
                  readOnly
                  className="mt-1"
                />
                <p className="text-[11px] text-slate-600">
                  I agree to receive updates via WhatsApp/Call.{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-blue-600 font-bold"
                  >
                    Privacy Policy
                  </Link>
                </p>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
              >
                {loading ? "Sending..." : "Submit Request"}
              </button>
            </form>
          )}
        </div>

        {/* RIGHT: ADDRESS DROPDOWN SECTION */}
        <div className="lg:col-span-5 space-y-6">
          {/* Contact Details */}
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase">
                  Call Us
                </p>
                <p className="font-bold text-slate-900">+91 76692 91199</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase">
                  Email
                </p>
                <p className="font-bold text-slate-900">
                  info@moneykingfinancial.com
                </p>
              </div>
            </div>
          </div>

          {/* DYNAMIC ADDRESS CARD (DROPDOWN) */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden">
            <div className="p-8">
              <div className="flex items-center gap-2 mb-6">
                <MapPin size={20} className="text-blue-600" />
                <Typography variant="h5" className="font-bold text-slate-900">
                  Find Our Offices
                </Typography>
              </div>

              <div className="relative mb-8">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block ml-1">
                  Select Branch Location
                </label>
                <div className="relative">
                  <select
                    value={selectedBranch}
                    onChange={(e) => setSelectedBranch(e.target.value)}
                    className="w-full appearance-none bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 font-bold text-slate-700 focus:border-blue-500 focus:bg-white outline-none transition-all cursor-pointer pr-12"
                  >
                    {Object.keys(branchOffices).map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                    size={20}
                  />
                </div>
              </div>

              {/* Dynamic Display Area */}
              <div
                className={cn(
                  "p-6 rounded-2xl border-2 transition-all duration-500",
                  selectedBranch === "Noida (HO)"
                    ? "bg-blue-600 border-blue-600 text-white shadow-blue-200"
                    : "bg-slate-50 border-slate-100 text-slate-900",
                )}
              >
                <p
                  className={cn(
                    "text-[10px] font-black uppercase tracking-widest mb-2",
                    selectedBranch === "Noida (HO)"
                      ? "text-blue-200"
                      : "text-blue-600",
                  )}
                >
                  {selectedBranch}{" "}
                  {selectedBranch === "Noida (HO)"
                    ? "Headquarters"
                    : "Branch Office"}
                </p>
                <p className="font-bold text-sm md:text-base leading-relaxed">
                  {branchOffices[selectedBranch]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
