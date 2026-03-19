import MagicButton from "@/components/MagicButton";

export const metadata = {
  title: "New Website Development | AgenorIT",
  description: "Build a high-converting digital storefront that acts as your 24/7 salesperson.",
};

export default function NewWebsiteService() {
  return (
    <>
      {/* Hero Section */}
      <header className="hero pt-32 pb-20">
        <div className="container hero-container text-center">
          <div className="hero-content mx-auto">
            <div className="badge mx-auto">
              <span className="pulse-dot"></span>
              High-Converting Digital Real Estate
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Your Website Should Be Your <span className="gradient-text">Top Performer.</span></h1>
            <p className="hero-subline max-w-2xl mx-auto">
              Stop settling for digital brochures. We engineer premium, high-converting digital storefronts that capture attention, build instant trust, and drive relentless sales 24/7.
            </p>
            <div className="hero-ctas justify-center">
              <MagicButton href="/contact" showArrow>
                Build your revenue engine
              </MagicButton>
            </div>
          </div>
        </div>
      </header>

      {/* Value-focused Features */}
      <section className="section services">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Beyond Code: We Build Assets</h2>
            <p className="section-subtitle">A website isn't an expense; it's an investment that should generate a massive, measurable ROI.</p>
          </div>

          <div className="services-grid">
            <div className="service-card glass-panel">
              <div className="service-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
              </div>
              <h3>Instant Authority & Trust</h3>
              <p>First impressions matter. We design breathtaking, premium aesthetics that instantly communicate industry dominance, allowing you to charge higher prices and shortening your sales cycles.</p>
            </div>

            <div className="service-card glass-panel flex-reverse">
              <div className="service-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <h3>Unrivaled Speed & Conversion</h3>
              <p>Every second your site takes to load kills conversions. We engineer lightning-fast architectures that keep users engaged, reducing bounce rates by up to 40% and multiplying your incoming leads.</p>
            </div>

            <div className="service-card glass-panel">
              <div className="service-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
              </div>
              <h3>The 24/7 Sales Machine</h3>
              <p>Your physical office closes, but your website doesn't. We optimize user journeys and frictionless conversion funnels so that you continue capturing and closing deals while you sleep.</p>
            </div>

            <div className="service-card glass-panel flex-reverse">
              <div className="service-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
              </div>
              <h3>Frictionless Management</h3>
              <p>Stop wrestling with clunky legacy systems. We provide intuitive, seamless content management solutions that empower your marketing team to launch campaigns instantly without touching a line of code.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Transforming visitors into revenue</h2>
          </div>
          
          <div className="testimonial-grid">
            <div className="testimonial-card glass-panel hover:border-violet-500/30 transition-colors">
              <div className="quote-icon">"</div>
              <p className="quote">"Our old website was just a digital business card. AgenorIT completely re-architected our online presence. Within three months of launch, our organic inbound lead volume increased by 240%."</p>
              <div className="author">
                <strong>Marcus Vance</strong>
                <span>CMO, Vanguard Logistics</span>
              </div>
            </div>

            <div className="testimonial-card glass-panel hover:border-blue-500/30 transition-colors">
              <div className="quote-icon">"</div>
              <p className="quote">"The premium aesthetic they delivered immediately elevated our brand perception. We were able to increase our pricing tier by 20% simply because our site finally reflected the true quality of our service."</p>
              <div className="author">
                <strong>Elena Rostova</strong>
                <span>Founder, Elevate Consulting</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section contact mb-20">
        <div className="container">
          <div className="cta-banner glass-panel text-center">
            <h2 className="mb-4 text-3xl font-bold">Ready to dominate your market online?</h2>
            <p className="mb-8 text-gray-400">Stop leaving money on the table with an underperforming website. Let's design a high-converting digital asset.</p>
            <MagicButton href="/contact" showArrow>
              Start your transformation
            </MagicButton>
          </div>
        </div>
      </section>
    </>
  );
}
