"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import MagicButton from './MagicButton';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar relative z-50 transition-all duration-300 ${scrolled ? 'bg-[#0b0f19]/90 border-b border-white/10 backdrop-blur-md' : 'bg-transparent border-transparent'}`}>
      <div className="container nav-content flex items-center justify-between py-4 max-w-7xl mx-auto px-6">
        <Link href="/" className="logo shrink-0 relative transition-transform hover:scale-105 duration-200">
          <Image src="/logo.png" alt="AgenorIT Logo" width={240} height={70} className="logo-icon object-contain filter drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
        </Link>
        
        <ul className="nav-links flex gap-8 items-center list-none m-0 p-0">
          {/* Dropdown 1: Website Services */}
          <li className="relative group">
            <button className="flex items-center gap-1 text-white hover:text-blue-400 transition-colors font-medium">
              Website Services <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-64 rounded-xl bg-[#0b0f19] border border-white/10 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-2">
              <Link href="/services/website/new" className="block px-4 py-3 rounded-lg hover:bg-white/5 text-sm transition-colors">
                <span className="block text-white font-semibold mb-1">New Website Development</span>
                <span className="text-gray-400 text-xs">Build a high-converting digital storefront.</span>
              </Link>
              <Link href="/services/website/upgrade" className="block px-4 py-3 rounded-lg hover:bg-white/5 text-sm transition-colors mt-1">
                <span className="block text-white font-semibold mb-1">Upgrade Existing Website</span>
                <span className="text-gray-400 text-xs">Modernize your site with premium UI/UX.</span>
              </Link>
            </div>
          </li>

          {/* Dropdown 2: AI Solutions */}
          <li className="relative group">
            <button className="flex items-center gap-1 text-white hover:text-blue-400 transition-colors font-medium">
              AI Solutions <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-64 rounded-xl bg-[#0b0f19] border border-white/10 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-2">
              <Link href="/services/ai/strategy" className="block px-4 py-3 rounded-lg hover:bg-white/5 text-sm transition-colors">
                <span className="block text-white font-semibold mb-1">AI Enablement Strategy</span>
                <span className="text-gray-400 text-xs">Consulting and roadmap for AI adoption.</span>
              </Link>
              <Link href="/services/ai/bots" className="block px-4 py-3 rounded-lg hover:bg-white/5 text-sm transition-colors mt-1">
                <span className="block text-white font-semibold mb-1">Enable AI Bots in Website</span>
                <span className="text-gray-400 text-xs">Custom 24/7 intelligent agents for ops.</span>
              </Link>
            </div>
          </li>

          {/* Dropdown 3: Cloud & Infrastructure */}
          <li className="relative group">
            <button className="flex items-center gap-1 text-white hover:text-blue-400 transition-colors font-medium">
              Cloud & Infrastructure <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-80 rounded-xl bg-[#0b0f19] border border-white/10 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-2">
              <Link href="/services/cloud/azure-setup" className="block px-4 py-3 rounded-lg hover:bg-white/5 text-sm transition-colors">
                <span className="block text-white font-semibold mb-1">Azure Setup</span>
                <span className="text-gray-400 text-xs">Enterprise-grade Microsoft Azure infrastructure.</span>
              </Link>
              <Link href="/services/cloud/azure-landing-zone" className="block px-4 py-3 rounded-lg hover:bg-white/5 text-sm transition-colors mt-1">
                <span className="block text-white font-semibold mb-1">Azure Landing Zone Architecture</span>
                <span className="text-gray-400 text-xs">The secure foundation for unlimited scaling and AI.</span>
              </Link>
            </div>
          </li>
        </ul>

        <div className="hidden md:block">
          <MagicButton href="/contact">
            Contact Us
          </MagicButton>
        </div>
      </div>
    </nav>
  );
}
