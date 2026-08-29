import Link from 'next/link';
import MagicButton from '@/components/MagicButton';

export default function NotFound() {
  return (
    <div className="pt-36 pb-24 min-h-screen flex items-center justify-center">
      <div className="container max-w-2xl mx-auto px-6 text-center">
        <div className="badge mx-auto mb-6">
          <span className="pulse-dot"></span>
          Error 404
        </div>
        <h1 className="text-6xl md:text-7xl font-extrabold mb-4 tracking-tight">
          Page <span className="gradient-text">Not Found</span>
        </h1>
        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
          The page you are looking for doesn't exist or has been relocated to an intelligent foundation.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <MagicButton href="/">
            Return to Homepage
          </MagicButton>
          <MagicButton href="/contact" contentClassName="!bg-transparent" showArrow>
            Book a Consultation
          </MagicButton>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8 text-left">
          <p className="text-sm text-gray-400 mb-4 font-semibold text-center sm:text-left">Popular Services</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <Link href="/services/ai/strategy" className="p-3 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors">
              🤖 AI Enablement Strategy
            </Link>
            <Link href="/services/ai/bots" className="p-3 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors">
              ⚡ Enable AI Bots in Website
            </Link>
            <Link href="/services/cloud/azure-setup" className="p-3 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors">
              ☁️ Azure Cloud Infrastructure
            </Link>
            <Link href="/services/website/new" className="p-3 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors">
              🌐 Web Design & Development
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
