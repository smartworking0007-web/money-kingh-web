"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Typography } from '../ui/Typography';
import { db } from '@/lib/firebase'; 
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
export default function WelcomePopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  useEffect(() => {
    const hasSubmitted = localStorage.getItem('popupSubmitted');
    if (!hasSubmitted) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 1500);
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
        source: "welcome_popup" 
      });

      localStorage.setItem('popupSubmitted', 'true');
      setShowPopup(false);
      alert("Shukriya! Hum jald hi aapse baat karenge.");
    } catch (error) {
      console.error("Firebase Error:", error);
      alert("Maafi chahte hain, data save nahi ho paya.");
    } finally {
      setIsSubmitting(false);
    }
  };
 
  
  if (!showPopup) return null;
  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/70 backdrop-blur-md px-4 font-lexend">
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden border border-gray-100">
        {/* Close Button */}
        <button 
          onClick={() => setShowPopup(false)}
          className="absolute top-4 right-4 z-10 bg-black/10 hover:bg-black/20 text-white p-1 rounded-full transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div className="bg-blue-600 p-8 text-center text-white">
          <div className="relative bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-3 overflow-hidden shadow-lg border-2 border-blue-400">
            <Image 
              src="/images/logo.svg" 
              alt="Money King Logo"
              fill 
              sizes="80px"
              priority
              className="object-cover"
            />
          </div>
          <Typography variant="h4" as="h2" className="text-white mb-1 mt-0">
            Money King
          </Typography>
          <Typography variant="b2" className="text-blue-100 mb-0">
          Fill in your details and we ll get back to you shortly.
          </Typography>
        </div>

        <form onSubmit={handleSubmit} className="p-8">
          <div className="space-y-5">
            <div>
              <label className="block mb-2 text-[18px] leading-[26px] font-medium text-gray-800">
                Full Name
              </label>
              <input 
                required
                type="text" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-gray-800"
                placeholder="Enter your name"
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block mb-2 text-[18px] leading-[26px] font-medium text-gray-800">
                Phone Number
              </label>
              <input 
                required
                type="tel" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-gray-800"
                placeholder="+91 00000 00000"
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>

            <div>
              <label className="block mb-2 text-[18px] leading-[26px] font-medium text-gray-800">
                Email Address
              </label>
              <input 
                required
                type="email" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-gray-800"
                placeholder="email@example.com"
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>

          <button 
            type="submit"
            disabled={isSubmitting}
            className={`w-full mt-8 py-4 rounded-xl shadow-lg active:scale-95 transition-all text-white font-bold ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
          >
             {isSubmitting ? 'Submitting...' : 'Submit Now'}
          </button>
        </form>
      </div>
    </div>
  );
}