"use client";

import React, { useState } from "react";
import { db } from "@/lib/firebase"; 
import { collection, addDoc } from "firebase/firestore";
import Link from "next/link";
import { Typography } from "@/app/components/ui/Typography"; // Typography component import kiya
import { cn } from "@/app/lib/utils";

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      alert("Please accept the consent to proceed.");
      return;
    }

    setLoading(true);
    setSuccess(false);

    try {
      await addDoc(collection(db, "contact_forms"), {
        ...formData,
        fullName: formData.fullName.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
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
      alert("Thank you! We will contact you within 24 hours.");
    } catch (error) {
      console.error("Firebase submission error:", error);
      alert("Error submitting form. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* --- Header Section --- */}
      <section className="bg-blue-50/50 py-16 text-center">
        <Typography variant="d1" as="h1" className="text-slate-900 m-0! leading-tight">
          Get in Touch
        </Typography>
      </section>

      {/* --- Main Content --- */}
      <section className="max-w-7xl mx-auto px-4 py-12 grid lg:grid-cols-2 gap-12">
        
        {/* Left Card: Form */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
          <Typography variant="h4" as="h2" className="text-blue-600 mb-2! mt-0!">
            Free Financial Consultation
          </Typography>
          <Typography variant="b1" className="text-slate-500 mb-8!">
            Fill out the form below and our counselors will contact you within 24 hours
          </Typography>

          {success && (
            <div className="mb-6 p-4 bg-emerald-50 text-emerald-700 rounded-lg border border-emerald-100 font-medium text-sm">
              ✓ Form successfully submitted! Our team will reach out soon.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <Typography variant="caption" className="font-bold text-slate-700 uppercase">Full Name *</Typography>
                <input
                  type="text" name="fullName" value={formData.fullName} onChange={handleChange} required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
                />
              </div>
              <div className="space-y-1.5">
                <Typography variant="caption" className="font-bold text-slate-700 uppercase">Phone Number *</Typography>
                <input
                  type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                  placeholder="+91 0000000000"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <Typography variant="caption" className="font-bold text-slate-700 uppercase">Email Address *</Typography>
              <input
                type="email" name="email" value={formData.email} onChange={handleChange} required
                placeholder="example@mail.com"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <Typography variant="caption" className="font-bold text-slate-700 uppercase">Service Interested In</Typography>
              <select
                name="course" value={formData.course} onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all cursor-pointer"
              >
                <option value="">Select Service</option>
                <option value="Personal Loan">Personal Loan</option>
                <option value="Home Loan">Home Loan</option>
                <option value="Business Loan">Business Loan</option>
                <option value="Mutual Funds">Mutual Funds</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <Typography variant="caption" className="font-bold text-slate-700 uppercase">Message (Optional)</Typography>
              <textarea
                name="message" value={formData.message} onChange={handleChange} rows={3}
                placeholder="How can we help you?"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all resize-none"
              />
            </div>

            {/* Consent Checkbox */}
            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
              <input
                type="checkbox" id="consent" name="consent"
                checked={formData.consent} onChange={handleChange}
                className="mt-1 h-5 w-5 text-blue-600 rounded border-slate-300 cursor-pointer shrink-0"
              />
              <label htmlFor="consent" className="text-[11px] text-slate-500 leading-relaxed cursor-pointer">
                I consent to receive communications from 
                <span className="font-bold text-slate-800"> Money King Financial Services Pvt. Ltd.</span> through WhatsApp, SMS, email, and calls. 
                I agree to the <Link href="/privacy-policy" className="text-blue-600 underline font-bold hover:text-blue-800">Privacy Policy</Link>.
              </label>
            </div>

            <button
              type="submit" disabled={loading}
              className={cn(
                "w-full py-4 text-white font-bold text-lg rounded-xl shadow-lg transition-all shadow-blue-100",
                loading ? "bg-slate-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 active:scale-95"
              )}
            >
              {loading ? "Processing..." : "Get Free Consultation"}
            </button>
          </form>
        </div>

        {/* Right Section: Info */}
        <div className="space-y-8">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
            <Typography variant="h5" as="h3" className="mb-6! mt-0!">Quick Contact</Typography>
            <div className="space-y-6">
              <ContactInfoItem icon="📞" label="Call Us" value="+91 7669291199" />
              <ContactInfoItem icon="✉️" label="Email Us" value="info@moneykingfinancial.com" />
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
            <Typography variant="h5" as="h3" className="mb-4! mt-0!">Company Address</Typography>
            <Typography variant="b1" className="text-slate-600 leading-relaxed m-0!">
              A-39, 2nd Floor, Sector 63<br />
              Noida, Uttar Pradesh 201301<br />
              <span className="font-bold text-slate-900">+91 7669291199</span>
            </Typography>
          </div>
        </div>
      </section>
    </div>
  );
}

// Helper Component for Contact Info
const ContactInfoItem = ({ icon, label, value }: { icon: string; label: string; value: string }) => (
  <div className="flex items-center gap-4">
    <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-xl shadow-xs border border-slate-100">
      {icon}
    </div>
    <div>
      <Typography variant="caption" className="text-slate-400 font-bold uppercase">{label}</Typography>
      <Typography variant="s2" className="text-slate-900 font-bold m-0!">{value}</Typography>
    </div>
  </div>
);