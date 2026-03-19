import MagicButton from "@/components/MagicButton";

export const metadata = {
  title: "AI Enablement Strategy | AgenorIT",
  description: "Cut operational bloat and scale effortlessly with intelligent automation.",
};

export default function AIStrategyService() {
  return (
    <>
      {/* Hero Section */}
      <header className="hero pt-32 pb-20">
        <div className="container hero-container text-center">
          <div className="hero-content mx-auto">
            <div className="badge mx-auto">
              <span className="pulse-dot"></span>
              Outpace The Competition
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Scale Your Output. <span className="gradient-text">Not Your Payroll.</span></h1>
            <p className="hero-subline max-w-2xl mx-auto">
              Don't hire your way out of a bottleneck. We map out precise, high-ROI automation strategies that eliminate operational bloat, freeing your team to focus strictly on revenue-generating work.
            </p>
            <div className="hero-ctas justify-center">
              <MagicButton href="/contact" showArrow>
                Discover your AI leverage
              </MagicButton>
            </div>
          </div>
        </div>
      </header>

      {/* Value-focused Features */}
      <section className="section services">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">The Blueprint for Exponential Growth</h2>
            <p className="section-subtitle">AI is worthless without execution. We identify the exact points in your business where automation unlocks maximum profitability.</p>
          </div>

          <div className="services-grid">
            <div className="service-card glass-panel flex-reverse">
              <div className="service-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              </div>
              <h3>Eradicate Manual Data Entry</h3>
              <p>Stop paying humans to do robot work. We locate massive inefficiencies in your daily operations and architect automated pipelines that transfer and process data flawlessly, saving thousands of hours annually.</p>
            </div>

            <div className="service-card glass-panel">
              <div className="service-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <h3>Reclaim Leadership Bandwidth</h3>
              <p>Your executives are bogged down in reporting and mundane approvals. Our strategy integrates smart agents that summarize data and draft responses, handing your leadership hours back every week.</p>
            </div>

            <div className="service-card glass-panel flex-reverse">
              <div className="service-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              </div>
              <h3>Zero-Risk Implementation</h3>
              <p>Adopting new tech can break existing workflows. We create a phased, frictionless roadmap that guarantees smooth integration without disrupting your ongoing business operations.</p>
            </div>

            <div className="service-card glass-panel">
              <div className="service-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
              </div>
              <h3>Predictive Decision Making</h3>
              <p>Move from reacting to anticipating. We strategize how to leverage your existing data so you can forecast market trends and customer behavior, keeping you two steps ahead of your competition.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">The Business Value is Undeniable</h2>
          </div>
          
          <div className="testimonial-grid">
            <div className="testimonial-card glass-panel hover:border-violet-500/30 transition-colors">
              <div className="quote-icon">"</div>
              <p className="quote">"We were about to hire three more admins just to handle the data flow. AgenorIT's strategy audit found a way to automate 80% of it. We saved $150k in payroll and eliminated human error completely."</p>
              <div className="author">
                <strong>James Carter</strong>
                <span>COO, Vertex Logistics</span>
              </div>
            </div>

            <div className="testimonial-card glass-panel hover:border-blue-500/30 transition-colors">
              <div className="quote-icon">"</div>
              <p className="quote">"I was skeptical about AI, fearing it was just a buzzword. Their roadmap clearly laid out the exact ROI we could expect. We executed the first phase, and our executive team instantly gained back a day a week."</p>
              <div className="author">
                <strong>Rachel Davis</strong>
                <span>Managing Partner, Davis & Co.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section contact mb-20">
        <div className="container">
          <div className="cta-banner glass-panel text-center">
            <h2 className="mb-4 text-3xl font-bold">Stop paying humans for robot work.</h2>
            <p className="mb-8 text-gray-400">Let's audit your operations and build a blueprint for massive efficiency gains.</p>
            <MagicButton href="/contact" showArrow>
              Book your strategy audit
            </MagicButton>
          </div>
        </div>
      </section>
    </>
  );
}
