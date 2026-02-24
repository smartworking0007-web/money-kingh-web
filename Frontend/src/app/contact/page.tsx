"use client";

import React, { useState } from "react";
import { db } from "@/lib/firebase"; 
import { collection, addDoc } from "firebase/firestore";
import Link from "next/link"; // Link import kiya gaya hai

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
    <div className="min-h-screen bg-gray-50">
      <section className="bg-purple-50 py-10 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Get in Touch</h1>
      </section>

      <section className="max-w-screen-xl mx-auto px-4 py-10 grid lg:grid-cols-2 gap-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-blue-500 mb-2">Free Financial Consultation</h2>
          <p className="text-gray-600 mb-8">Fill out the form below and our counselors will contact you within 24 hours</p>

          {success && (
            <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-md">Form successfully submitted!</div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <input
                  type="text" name="fullName" value={formData.fullName} onChange={handleChange} required
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                <input
                  type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
              <input
                type="email" name="email" value={formData.email} onChange={handleChange} required
                placeholder="Enter your email address"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Service Interested In</label>
              <select
                name="course" value={formData.course} onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="">Service Interested In</option>
                <option value="Personal Loan">Personal Loan</option>
                <option value="Home Loan">Home Loan</option>
                <option value="Business Loan">Business Loan</option>
                <option value="Mutual Funds">Mutual Funds</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
              <textarea
                name="message" value={formData.message} onChange={handleChange} rows={3}
                placeholder="Tell us about your requirements..."
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Privacy Policy Link Wala Checkbox */}
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <input
                type="checkbox" id="consent" name="consent"
                checked={formData.consent} onChange={handleChange}
                className="mt-1 h-5 w-5 text-blue-600 rounded border-gray-300 cursor-pointer"
              />
              <label htmlFor="consent" className="text-xs text-gray-600 leading-relaxed cursor-pointer">
                By submitting this form, I consent to receive communications from 
                <strong> Money King Financial Services Pvt. Ltd.</strong> through WhatsApp, SMS, email, and phone calls. 
                I agree to the <Link href="/privacy-policy" className="text-blue-600 underline font-bold hover:text-blue-800">Privacy Policy</Link>.
              </label>
            </div>

            <button
              type="submit" disabled={loading}
              className={`w-full py-4 bg-blue-600 text-white font-bold text-lg rounded-md transition ${
                loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700 shadow-md"
              }`}
            >
              {loading ? "Submitting..." : "Free Financial Consultation"}
            </button>
          </form>
        </div>

        {/* Right Section */}
        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Quick Contact</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center text-xl">📞</div>
                <div>
                  <p className="text-sm text-gray-500">Call Us</p>
                  <p className="font-semibold">+91 7669291199</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-xl">✉️</div>
                <div>
                  <p className="text-sm text-gray-500">Email Us</p>
                  <p className="font-semibold">info@moneykingfinancial.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Company Address</h3>
            <p className="text-gray-700 leading-loose">
              A-39 2nd floor Sector 63<br />
              Noida 201301<br />
              <span className="font-semibold">+91 7669291199</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}