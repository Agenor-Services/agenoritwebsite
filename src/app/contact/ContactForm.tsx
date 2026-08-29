"use client";

import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const company = formData.get("company") as string;
    const service = formData.get("service") as string;
    const message = formData.get("message") as string;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      const subject = encodeURIComponent(`New Consultation Request from ${name} (${company})`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nCompany: ${company}\nService of Interest: ${service}\n\nPrimary Business Goal:\n${message}`);
      window.location.href = `mailto:info@agenorit.com.au?subject=${subject}&body=${body}`;
    }, 1000);
  };

  if (isSuccess) {
    return (
      <div className="text-center py-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="w-16 h-16 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={36} />
        </div>
        <h3 className="text-2xl font-bold mb-2 text-white">Opening Email Client...</h3>
        <p className="text-gray-400 max-w-md mx-auto">
          Your request details have been prepared. If your email client does not open automatically, please send your inquiry directly to{" "}
          <a href="mailto:info@agenorit.com.au" className="text-blue-400 underline">info@agenorit.com.au</a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-gray-300 mb-1">
          Full Name
        </label>
        <input 
          type="text" 
          id="contact-name" 
          name="name" 
          required 
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all placeholder-gray-600"
          placeholder="Jane Doe"
        />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-gray-300 mb-1">
            Email Address
          </label>
          <input 
            type="email" 
            id="contact-email" 
            name="email" 
            required 
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all placeholder-gray-600"
            placeholder="jane@company.com"
          />
        </div>
        <div>
          <label htmlFor="contact-company" className="block text-sm font-medium text-gray-300 mb-1">
            Company
          </label>
          <input 
            type="text" 
            id="contact-company" 
            name="company" 
            required 
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all placeholder-gray-600"
            placeholder="Acme Corp"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-service" className="block text-sm font-medium text-gray-300 mb-1">
          Service of Interest
        </label>
        <div className="relative">
          <select 
            id="contact-service" 
            name="service" 
            required 
            defaultValue=""
            className="w-full bg-[#121826] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all appearance-none [&>option]:bg-[#121826]"
          >
            <option value="" disabled hidden className="text-gray-500">Select a service</option>
            <option value="Website Services">Website Services</option>
            <option value="AI Solutions">AI Solutions</option>
            <option value="Cloud & Azure Infrastructure">Cloud & Azure Infrastructure</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-400">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path fillRule="evenodd" clipRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-gray-300 mb-1">
          What is the primary business goal you want to achieve with this project?
        </label>
        <textarea 
          id="contact-message" 
          name="message" 
          required 
          rows={4}
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all resize-none placeholder-gray-600"
          placeholder="Tell us about your infrastructure or AI needs..."
        ></textarea>
      </div>

      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full relative group inline-flex max-w-full overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#0b0f19] mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#0b0f19] px-8 py-3.5 text-sm font-medium text-white backdrop-blur-3xl transition-colors group-hover:bg-[#0b0f19]/80">
          {isSubmitting ? "Processing Request..." : "Submit Consultation Request"}
          {!isSubmitting && <Send className="ml-2 w-4 h-4" />}
        </span>
      </button>
    </form>
  );
}
