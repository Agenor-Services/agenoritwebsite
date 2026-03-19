import MagicButton from "@/components/MagicButton";

export const metadata = {
  title: "Enable AI Bots | AgenorIT",
  description: "Custom 24/7 intelligent agents for your operations.",
};

export default function AIBotsService() {
  return (
    <>
      {/* Hero Section */}
      <header className="hero pt-32 pb-20">
        <div className="container hero-container text-center">
          <div className="hero-content mx-auto">
            <div className="badge mx-auto">
              <span className="pulse-dot"></span>
              24/7 Automated Excellence
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Your Best Employee, <span className="gradient-text">Never Sleeps.</span></h1>
            <p className="hero-subline max-w-2xl mx-auto">
              Stop losing midnight leads and burying your team in repetitive support tickets. Deliver instant, perfect customer experiences around the clock.
            </p>
            <div className="hero-ctas justify-center">
              <MagicButton href="/contact" showArrow>
                Deploy your agent today
              </MagicButton>
            </div>
          </div>
        </div>
      </header>

      {/* Value-focused Features */}
      <section className="section services">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Why industry leaders are upgrading</h2>
            <p className="section-subtitle">We don't sell 'chatbots'. We build automated revenue systems and support engines.</p>
          </div>

          <div className="services-grid">
            <div className="service-card glass-panel">
              <div className="service-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"></path><path d="m17 5-10 14"></path><path d="m7 5 10 14"></path></svg>
              </div>
              <h3>Capture Every Single Lead</h3>
              <p>When a prospect visits your site at 2 AM on a Sunday, your AI agent instantly greets them, answers their specific questions, and qualifies the lead before your competitors even wake up.</p>
            </div>

            <div className="service-card glass-panel flex-reverse">
              <div className="service-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><polyline points="16 11 18 13 22 9"></polyline></svg>
              </div>
              <h3>Slash Support Costs by 70%</h3>
              <p>Eliminate the crushing backlog of repetitive "password reset" and "where is my order" emails. Your AI instantly resolves tier-1 tickets, freeing your human team to focus on high-value relationships.</p>
            </div>

            <div className="service-card glass-panel">
              <div className="service-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              </div>
              <h3>Fluent Multilingual Sales</h3>
              <p>Break into global markets without hiring international staff. Your agent seamlessly converses, negotiates, and sells in over 50 languages with native fluency, multiplying your total addressable market.</p>
            </div>

            <div className="service-card glass-panel flex-reverse">
              <div className="service-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              </div>
              <h3>Zero Training, Perfect Memory</h3>
              <p>Imagine an employee who perfectly memorizes every single manual, product catalog, and policy you've ever written in seconds—and never forgets or gives wrong information. That's your new baseline.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">The ROI speaks for itself</h2>
          </div>
          
          <div className="testimonial-grid">
            <div className="testimonial-card glass-panel hover:border-violet-500/30 transition-colors">
              <div className="quote-icon">"</div>
              <p className="quote">"We were bleeding leads over the weekends. Since AgenorIT deployed our custom agent, our after-hours demo bookings have increased by 314%. It paid for itself in week one."</p>
              <div className="author">
                <strong>David Chen</strong>
                <span>VP Revenue, Apex Software</span>
              </div>
            </div>

            <div className="testimonial-card glass-panel hover:border-blue-500/30 transition-colors">
              <div className="quote-icon">"</div>
              <p className="quote">"Our human support team was burning out. The AI agent immediately took over 65% of our daily ticket volume with a faster resolution time and higher CSAT score than our human agents."</p>
              <div className="author">
                <strong>Sarah Jenkins</strong>
                <span>Support Director, FinScale</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section contact mb-20">
        <div className="container">
          <div className="cta-banner glass-panel text-center">
            <h2 className="mb-4 text-3xl font-bold">Ready to multiply your workforce?</h2>
            <p className="mb-8 text-gray-400">Stop paying humans to do robot work. Book a strategy session today and let's map out your automation ROI.</p>
            <MagicButton href="/contact" showArrow>
              Calculate your AI savings
            </MagicButton>
          </div>
        </div>
      </section>
    </>
  );
}
