"use client";

import React, { useState } from "react";
import { db } from "@/lib/firebase"; 
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

type FormData = {
  fullName: string;
  phone: string;
  email: string;
  partnerType: string;
  message: string;
};

export default function PartnerPage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    email: "",
    partnerType: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      console.log("Submitting to partner_applications...");
      
      // Data 'partner_applications'
      const docRef = await addDoc(collection(db, "partner_applications"), {
        fullName: formData.fullName.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        partnerType: formData.partnerType,
        message: formData.message,
        createdAt: serverTimestamp(), // Firebase auto-timestamp
      });

      console.log("Success! ID: ", docRef.id);
      
      // UI update
      setSuccess(true);
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        partnerType: "",
        message: "",
      });
    
      // Alert user ko confirm karne ke liye
      alert("Application Submitted Successfully!");

    } catch (error: any) {
      console.error("Firebase Details:", error.code, error.message);
      alert("Submission Error: " + error.message);
    } finally {
      // Circle ghumna yahan band hoga
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-blue-50 py-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Partner With Us</h1>
      </section>

      <section className="max-w-screen-xl mx-auto px-4 py-10 grid lg:grid-cols-2 gap-12">
        <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-blue-600 mb-2 font-sans">Become our Partner</h2>
          <p className="text-gray-500 mb-8 italic">Fill the form below to join Money King network.</p>

          {/* Success Message UI */}
          {success && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg flex items-center shadow-sm">
              <span className="mr-3 text-2xl">✅</span>
              <div>
                <p className="font-bold">Form Submitted Successfully!</p>
                <p className="text-sm italic">Our team will contact you within 24 hours.</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name *</label>
                <input
                  type="text" name="fullName" value={formData.fullName} onChange={handleChange} required
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number *</label>
                <input
                  type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                  placeholder="Enter phone number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address *</label>
              <input
                type="email" name="email" value={formData.email} onChange={handleChange} required
                placeholder="Enter email address"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Partner Category *</label>
              <select
                name="partnerType" value={formData.partnerType} onChange={handleChange} required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none bg-white transition-all"
              >
                <option value="">Select Category</option>
                <option value="Individual">Individual</option>
                <option value="Company">Company</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Message (Optional)</label>
              <textarea
                name="message" value={formData.message} onChange={handleChange} rows={3}
                placeholder="Tell us about your background..."
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-4 text-white font-bold text-lg rounded-md flex items-center justify-center gap-3 shadow-md transition-all ${
                loading ? "bg-blue-300 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 active:scale-95"
              }`}
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Submitting Application...
                </>
              ) : (
                "Become our Partner"
              )}
            </button>
          </form>
        </div>

        {/* Right Info Section */}
        <div className="space-y-8">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-50">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Partner Support</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-xl transition-transform group-hover:scale-110">📞</div>
                <div>
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-tighter">Support Helpline</p>
                  <p className="font-semibold text-gray-900">+91 7669291199</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-50">
            <h3 className="text-xl font-bold text-gray-800 mb-4 font-sans">Location</h3>
            <p className="text-gray-700 leading-relaxed">
              A-39 2nd floor Sector 63<br />
              Noida 201301<br />
              <span className="text-blue-600 font-bold">Noida, Uttar Pradesh</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}