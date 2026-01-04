// src/app/contact/page.tsx
"use client";

import React, { useState } from "react";
import { db } from "@/lib/firebase"; // Make sure this path is correct (lib/firebase.ts)
import { collection, addDoc } from "firebase/firestore";

type FormData = {
  fullName: string;
  phone: string;
  email: string;
  course: string;
  experience: string;
  message: string;
};

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    email: "",
    course: "",
    experience: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      await addDoc(collection(db, "contact_forms"), {
        fullName: formData.fullName.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        course: formData.course || "Not selected",
        experience: formData.experience.trim() || "",
        message: formData.message.trim() || "",
        createdAt: new Date().toISOString(),
      });

      console.log("Form submitted successfully:", formData);
      setSuccess(true);

      // Reset form
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        course: "",
        experience: "",
        message: "",
      });

      alert("Thank you! We will contact you within 24 hours.");
    } catch (error) {
      console.error("Firebase submission error:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-purple-50 py-10 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Get in Touch</h1>
      </section>

      {/* Main Content - Form + Contact Info */}
      <section className="max-w-screen-xl mx-auto px-4 py-10 grid lg:grid-cols-2 gap-12">
        {/* Left: Enrollment Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-blue-500 mb-2">
            Enroll Now - Free Counseling
          </h2>
          <p className="text-gray-600 mb-8">
            Fill out the form below and our counselors will contact you within 24 hours
          </p>

          {success && (
            <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-md">
              Form successfully submitted! Wll contact you soon.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email address"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Service Interested In
              </label>
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Service Interested In</option>
                <option value="Personal Loan">Personal Loan</option>
                <option value="Home Loan">Home Loan</option>
                <option value="Business Loan">Business Loan</option>
                <option value="Loan Against Property">Loan Against Property</option>
                <option value="Gold Loan">Gold Loan</option>
                <option value="Mutual Funds">Mutual Funds</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message (Optional)
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us about your career goals or any specific questions..."
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={loading}
                className={`w-full max-w-md px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-md transition ${
                  loading ? "opacity-50 cursor-not-allowed" : "hover:bg-red-700"
                }`}
              >
                {loading ? "Submitting..." : "Submit & Get Free Counseling"}
              </button>
            </div>
          </form>
        </div>

        {/* Right: Quick Contact & Campus Info */}
        <div className="space-y-12">
          {/* Quick Contact */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Quick Contact
            </h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📞</span>
                </div>
                <div>
                  <p className="font-medium">Call Us</p>
                  <p className="text-lg text-gray-700">+91 7669291199</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">✉️</span>
                </div>
                <div>
                  <p className="font-medium">Email Us</p>
                  <p className="text-lg text-gray-700 break-all">
                    info@moneykingfinancial.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Campus Info */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Our Campus
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-bold text-blue-600">Noida, UP</p>
                <p className="text-gray-700">
                  H-25, Sector - 63, Noida 201301,
                  <br />
                  Greater Noida, UP, 201306
                </p>
                <p className="text-gray-700 mt-2">+91 7669291199</p>
              </div>
            </div>

            <h4 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              Upcoming Campuses
            </h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
                Delhi
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}