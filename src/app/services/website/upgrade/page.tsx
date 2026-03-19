import MagicButton from "@/components/MagicButton";

export const metadata = {
  title: "Upgrade Existing Website | AgenorIT",
  description: "Modernize your current site into a high-converting digital asset.",
};

export default function UpgradeWebsiteService() {
  return (
    <>
      {/* Hero Section */}
      <header className="hero pt-32 pb-20">
        <div className="container hero-container text-center">
          <div className="hero-content mx-auto">
            <div className="badge mx-auto">
              <span className="pulse-dot"></span>
              Outperform Your Competitors
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Stop Losing Customers To <span className="gradient-text">Uglier Competitors.</span></h1>
            <p className="hero-subline max-w-2xl mx-auto">
              Your outdated website is silently killing deals. We overhaul slow, underperforming digital footprints into premium, high-converting revenue engines that command absolute authority.
            </p>
            <div className="hero-ctas justify-center">
              <MagicButton href="/contact" showArrow>
                Stop the revenue leak
              </MagicButton>
            </div>
          </div>
        </div>
      </header>

      {/* Value-focused Features */}
      <section className="section services">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Upgrade Your Earnings, Not Just Your Look</h2>
            <p className="section-subtitle">A modern website facelift is meaningless if it doesn't directly multiply your bottom line.</p>
          </div>

          <div className="services-grid">
            <div className="service-card glass-panel flex-reverse">
              <div className="service-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              </div>
              <h3>Convert Your Existing Traffic</h3>
              <p>You don't always need more traffic; you need better conversion. We optimize your existing funnels, transforming your current invisible visitors into deeply engaged, paying clients.</p>
            </div>

            <div className="service-card glass-panel">
              <div className="service-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
              </div>
              <h3>Eliminate the Bounce Rate</h3>
              <p>Slow load times and confusing navigation cause prospects to leave before you even pitch. We rebuild your architecture to ensure instantaneous loading and frictionless user journeys.</p>
            </div>

            <div className="service-card glass-panel flex-reverse">
              <div className="service-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              </div>
              <h3>Look Like the Industry Leader</h3>
              <p>If your website looks outdated, users assume your service is too. We inject premium, modern aesthetics into your brand, immediately positioning you as the most expensive and reliable choice in the room.</p>
            </div>

            <div className="service-card glass-panel">
              <div className="service-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h3>Bulletproof Security & SEO</h3>
              <p>Legacy code exposes you to hacks and tanks your Google ranking. We modernize your entire stack under the hood, ensuring you rank higher and sleep soundly knowing your data is secure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">The Cost of an Outdated Site is High</h2>
          </div>
          
          <div className="testimonial-grid">
            <div className="testimonial-card glass-panel hover:border-violet-500/30 transition-colors">
              <div className="quote-icon">"</div>
              <p className="quote">"We were spending thousands on ads, but no one was buying. AgenorIT upgraded our conversion flow and aesthetics. We didn't spend a dollar more on ads, but our closed deals tripled in a month."</p>
              <div className="author">
                <strong>Sarah Jenkins</strong>
                <span>Director of Sales, Meridian Health</span>
              </div>
            </div>

            <div className="testimonial-card glass-panel hover:border-blue-500/30 transition-colors">
              <div className="quote-icon">"</div>
              <p className="quote">"Our 7-year-old site was an embarrassment to point clients toward. After the upgrade, we look like a Fortune 500 company. The confidence it gave our sales team alone paid for the project."</p>
              <div className="author">
                <strong>David Chen</strong>
                <span>CEO, Nexus Financial</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section contact mb-20">
        <div className="container">
          <div className="cta-banner glass-panel text-center">
            <h2 className="mb-4 text-3xl font-bold">Is your website costing you clients?</h2>
            <p className="mb-8 text-gray-400">Stop bleeding revenue through an outdated digital presence. Let's modernize your primary sales asset today.</p>
            <MagicButton href="/contact" showArrow>
              Start your upgrade
            </MagicButton>
          </div>
        </div>
      </section>
    </>
  );
}
