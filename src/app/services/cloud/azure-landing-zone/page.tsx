import MagicButton from "@/components/MagicButton";

export const metadata = {
  title: "Azure Landing Zone Architecture | AgenorIT",
  description: "The definitive cloud foundation for uninterrupted growth, absolute security, and future-proof AI adoption.",
};

export default function AzureLandingZonePage() {
  return (
    <>
      {/* Hero Section */}
      <header className="hero pt-32 pb-20">
        <div className="container hero-container text-center">
          <div className="hero-content mx-auto">
            <div className="badge mx-auto">
              <span className="pulse-dot"></span>
              Enterprise-Grade Foundation
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Scale Without <span className="gradient-text">Hitting The Glass Ceiling.</span></h1>
            <p className="hero-subline max-w-2xl mx-auto">
              Haphazard cloud deployments create massive security risks and stall your growth. An Azure Landing Zone is your definitive enterprise architecture—designed to give you ultimate agility, an impenetrable security boundary, and zero friction when it's time to scale.
            </p>
            <div className="hero-ctas justify-center">
              <MagicButton href="/contact" showArrow>
                Fortify Your Architecture
              </MagicButton>
            </div>
          </div>
        </div>
      </header>

      {/* Architecture Diagram Section */}
      <section className="section py-10 relative z-10">
        <div className="container">
          <div className="glass-panel p-4 md:p-8 relative overflow-hidden group bg-[#0b0f19]/80">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 opacity-100 transition-opacity duration-500 pointer-events-none z-20 mix-blend-overlay"></div>
            <img 
              src="/alz.svg" 
              alt="Azure Landing Zone Architecture Diagram" 
              className="w-full h-auto rounded-xl shadow-2xl relative z-10 border border-white/5 invert hue-rotate-180 opacity-90 contrast-125 brightness-90 mix-blend-screen"
            />
            <div className="absolute inset-0 bg-blue-900/10 pointer-events-none z-30 mix-blend-color"></div>
          </div>
        </div>
      </section>

      {/* Value-focused Features */}
      <section className="section services">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">The Foundation for Decades of Growth</h2>
            <p className="section-subtitle">We don't just 'move you to the cloud'. We install the exact infrastructure framework used by the Fortune 500—tailored perfectly for your business size.</p>
          </div>

          <div className="services-grid">
            {/* Benefit 1: Enterprise-Grade Security */}
            <div className="service-card glass-panel flex-reverse">
              <div className="service-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h3>Impenetrable Global Security</h3>
              <p>Forget the stress of fragmented security policies. We centralize your entire security, identity, and compliance protocol into a 'Platform Zone'. This means you have a single, unified defensive perimeter protecting your entire organization worldwide, automatically blocking threats before they happen.</p>
            </div>

            {/* Benefit 2: Scalable Workload Isolation */}
            <div className="service-card glass-panel">
              <div className="service-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon><line x1="9" y1="3" x2="9" y2="18"></line><line x1="15" y1="6" x2="15" y2="21"></line></svg>
              </div>
              <h3>Ultimate Product Agility (Zero Friction)</h3>
              <p>Your development and product teams shouldn't have to fight IT for permission every time they want to build something new. We isolate individual workloads into their own secure 'Application Zones'. Your teams get the complete freedom to innovate fast, while still being locked inside the corporate security boundary.</p>
            </div>

            {/* Benefit 3: AI-Ready Foundation */}
            <div className="service-card glass-panel flex-reverse">
              <div className="service-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
              </div>
              <h3>100% AI-Ready From Day One</h3>
              <p>One of the biggest mistakes companies make is thinking they need to rebuild their entire architecture just to adopt AI. With our Landing Zone setup, you don't. Your data and network are instantly secure. When you're ready to deploy custom AI or machine learning models, they simply plug straight into your existing environment with absolute safety.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section contact mb-20 mt-10">
        <div className="container">
          <div className="cta-banner glass-panel text-center">
            <h2 className="mb-4 text-3xl font-bold">Stop letting bad architecture throttle your growth.</h2>
            <p className="mb-8 text-gray-400">Establish the foundation that lets your company scale, secure your data, and adopt AI instantly.</p>
            <MagicButton href="/contact" showArrow>
              Book an Architecture Audit
            </MagicButton>
          </div>
        </div>
      </section>
    </>
  );
}
