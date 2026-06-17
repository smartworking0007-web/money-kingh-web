"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Typography } from "../ui/Typography";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function WelcomePopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    // Only show if the user has NEVER submitted the form before
    const hasSubmitted = localStorage.getItem("popupSubmitted");
    if (!hasSubmitted) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 2000); // Increased slightly to 2 seconds for better UX
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, "contact_forms"), {
        fullName: formData.name,
        phone: formData.phone,
        email: formData.email,
        createdAt: serverTimestamp(),
        source: "welcome_popup",
      });

      // Mark as submitted so it never shows again
      localStorage.setItem("popupSubmitted", "true");
      alert("Thank you! Our experts will get in touch with you shortly.");
      setShowPopup(false);
    } catch (error) {
      console.error("Firebase Error:", error);
      alert("Sorry, we couldn't save your details. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // If hidden or already submitted, render nothing
  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm px-4 pt-12 font-lexend overflow-y-auto">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-sm w-full my-auto overflow-hidden border border-slate-100 transform transition-all duration-300 animate-in fade-in zoom-in-95">
        
        {/* Close Button */}
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-3 right-3 z-10 bg-slate-100 hover:bg-slate-200 text-slate-500 p-1.5 rounded-full transition-all"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Header Section */}
        <div className="bg-slate-900 pt-8 pb-6 text-center text-white px-6">
          <div className="relative bg-white w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-4 overflow-hidden shadow-2xl border-4 border-slate-700 p-2">
            <Image
              src="/images/logo.svg"
              alt="Money King Logo"
              width={80}
              height={80}
              priority
              className="object-contain"
            />
          </div>
          <Typography variant="h5" as="h2" className="text-white font-bold tracking-tight mb-1">
            Grow Your Wealth
          </Typography>
          <p className="text-slate-400 text-[11px] font-medium uppercase tracking-widest">
            Expert Financial Guidance
          </p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="px-6 py-6 bg-white">
          <div className="space-y-4">
            <div>
              <label className="block mb-1.5 text-[10px] font-black text-slate-400 uppercase tracking-[1px]">Full Name</label>
              <input
                required
                type="text"
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all text-sm text-slate-800"
                placeholder="Enter your name"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block mb-1.5 text-[10px] font-black text-slate-400 uppercase tracking-[1px]">Phone Number</label>
              <input
                required
                type="tel"
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all text-sm text-slate-800"
                placeholder="+91 00000 00000"
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            <div>
              <label className="block mb-1.5 text-[10px] font-black text-slate-400 uppercase tracking-[1px]">Email Address</label>
              <input
                required
                type="email"
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all text-sm text-slate-800"
                placeholder="example@mail.com"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full mt-6 py-3.5 rounded-lg shadow-xl transition-all text-slate-900 font-extrabold text-xs uppercase tracking-wider ${
              isSubmitting ? "bg-slate-300 cursor-not-allowed" : "bg-amber-500 hover:bg-amber-600 active:scale-95"
            }`}
          >
            {isSubmitting ? "Processing..." : "Get Free Consultation"}
          </button>
        </form>
      </div>
    </div>
  );
}