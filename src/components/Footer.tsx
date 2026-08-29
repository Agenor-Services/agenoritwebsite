import Image from "next/image";
import Link from "next/link";
import { Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer border-t border-white/10 pt-16 mt-20 relative z-10">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="footer-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand & Socials */}
          <div className="footer-brand lg:col-span-2 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-block logo relative">
                <Image 
                  src="/logo.png" 
                  alt="AgenorIT Logo" 
                  width={240} 
                  height={70} 
                  className="logo-icon object-contain filter drop-shadow-[0_0_10px_rgba(59,130,246,0.5)] transform scale-[1.6] sm:scale-[1.8] origin-left translate-x-[2%]" 
                />
              </Link>
              <p className="footer-desc mt-6 text-gray-400 max-w-sm text-sm leading-relaxed">
                Intelligent digital foundations. We build AI-first cloud architecture and high-converting web experiences.
              </p>
            </div>

            {/* Social Link */}
            <div className="mt-6 flex items-center gap-3">
              <a 
                href="https://www.linkedin.com/company/agenor-services/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-blue-600/20 text-gray-300 hover:text-blue-400 border border-white/10 hover:border-blue-500/30 transition-all text-sm font-medium"
                aria-label="Visit Agenor Services on LinkedIn"
              >
                <Linkedin size={18} className="text-blue-400" />
                <span>Follow us on LinkedIn</span>
              </a>
            </div>
          </div>
          
          {/* Company Links */}
          <div className="footer-links justify-self-start md:justify-self-end text-sm">
            <div className="link-group flex flex-col gap-3">
              <h4 className="text-white font-semibold mb-2">Company</h4>
              <Link href="/#services" className="text-gray-400 hover:text-blue-400 transition-colors">About Our Services</Link>
              <Link href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">Book a Consultation</Link>
              <a 
                href="https://www.linkedin.com/company/agenor-services/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-1.5"
              >
                <span>LinkedIn</span>
                <span className="text-[10px] bg-blue-500/20 text-blue-300 px-1.5 py-0.5 rounded">Official</span>
              </a>
            </div>
          </div>

          {/* Service Links */}
          <div className="footer-links justify-self-start md:justify-self-end text-sm">
            <div className="link-group flex flex-col gap-3">
              <h4 className="text-white font-semibold mb-2">Services</h4>
              <Link href="/services/cloud/azure-setup" className="text-gray-400 hover:text-blue-400 transition-colors">Cloud Infrastructure</Link>
              <Link href="/services/cloud/azure-landing-zone" className="text-gray-400 hover:text-blue-400 transition-colors">Azure Landing Zone</Link>
              <Link href="/services/ai/strategy" className="text-gray-400 hover:text-blue-400 transition-colors">AI Enablement</Link>
              <Link href="/services/ai/bots" className="text-gray-400 hover:text-blue-400 transition-colors">AI Bots in Website</Link>
              <Link href="/services/website/new" className="text-gray-400 hover:text-blue-400 transition-colors">Web Development</Link>
              <Link href="/services/website/upgrade" className="text-gray-400 hover:text-blue-400 transition-colors">Website Modernization</Link>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="footer-bottom pb-8 pt-8 mt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>&copy; {new Date().getFullYear()} AgenorIT. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a 
              href="https://www.linkedin.com/company/agenor-services/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-400 transition-colors"
            >
              LinkedIn: Agenor Services
            </a>
            <span>•</span>
            <a href="mailto:info@agenorit.com.au" className="hover:text-blue-400 transition-colors">
              info@agenorit.com.au
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
