"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { X, Send } from "lucide-react";

interface ContactModalContextType {
  openModal: () => void;
  closeModal: () => void;
}

const ContactModalContext = createContext<ContactModalContextType | undefined>(undefined);

export function useContactModal() {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error("useContactModal must be used within a ContactModalProvider");
  }
  return context;
}

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => {
      setIsSuccess(false);
    }, 300);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const company = formData.get("company") as string;
    const service = formData.get("service") as string;
    const message = formData.get("message") as string;

    // Simulate network request processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Trigger mailto client
      const subject = encodeURIComponent(`New Consultation Request from ${name} (${company})`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nCompany: ${company}\nService of Interest: ${service}\n\nPrimary Business Goal:\n${message}`);
      window.location.href = `mailto:info@agenorit.com.au?subject=${subject}&body=${body}`;
      
      // Close modal after showing success state
      setTimeout(() => {
        closeModal();
      }, 4000);
    }, 1000);
  };

  return (
    <ContactModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      
      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-[#0b0f19]/80 backdrop-blur-md transition-opacity"
            onClick={closeModal}
          ></div>
          
          {/* Modal Content */}
          <div className="relative w-full max-w-xl bg-[#0b0f19] border border-white/10 rounded-2xl shadow-[0_0_50px_rgba(59,130,246,0.15)] pt-10 pb-14 px-10 sm:px-14 sm:pb-16 sm:pt-10 animate-in fade-in zoom-in-95 duration-200">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            {isSuccess ? (
              <div className="text-center py-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="w-16 h-16 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">Opening Email Client...</h3>
                <p className="text-gray-400">Your secure request is being transferred to info@agenorit.com.au</p>
              </div>
            ) : (
              <div className="animate-in fade-in duration-300">
                <div className="mb-6">
                  <div className="badge mb-4">
                    <span className="pulse-dot"></span>
                    Secure Request
                  </div>
                  <h2 className="text-3xl font-bold mb-2">Book a Consultation</h2>
                  <p className="text-gray-400">Enter your details below and we'll connect you with our enterprise strategy team.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all placeholder-gray-600"
                      placeholder="Jane Doe"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all placeholder-gray-600"
                        placeholder="jane@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">Company</label>
                      <input 
                        type="text" 
                        id="company" 
                        name="company" 
                        required 
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all placeholder-gray-600"
                        placeholder="Acme Corp"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-1">Service of Interest</label>
                    <div className="relative">
                      <select 
                        id="service" 
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
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path fillRule="evenodd" clipRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path></svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">What is the primary business goal you want to achieve with this project?</label>
                    <textarea 
                      id="message" 
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
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#0b0f19] px-8 py-3 text-sm font-medium text-white backdrop-blur-3xl transition-colors group-hover:bg-[#0b0f19]/80">
                      {isSubmitting ? "Processing Request..." : "Submit Consultation Request"}
                      {!isSubmitting && <Send className="ml-2 w-4 h-4" />}
                    </span>
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </ContactModalContext.Provider>
  );
}
