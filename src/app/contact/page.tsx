import { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: "Book a Consultation | AgenorIT",
  description: "Schedule a strategic consultation with AgenorIT. Let's design the intelligent AI and cloud infrastructure your business deserves.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="badge mx-auto mb-4">
            <span className="pulse-dot"></span>
            Enterprise Strategy
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Book a <span className="gradient-text">Consultation</span>
          </h1>
          <p className="hero-subline max-w-xl mx-auto text-gray-400">
            Tell us about your organization's goals, and our engineering team will help design your AI and cloud infrastructure roadmap.
          </p>
        </div>

        <div className="glass-panel p-8 sm:p-12 rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(59,130,246,0.1)]">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
