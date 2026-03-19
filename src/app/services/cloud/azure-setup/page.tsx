import MagicButton from "@/components/MagicButton";

export const metadata = {
  title: "Azure Setup & Migration | AgenorIT",
  description: "Bulletproof your business operations with zero downtime and enterprise-grade security.",
};

export default function AzureSetupService() {
  return (
    <>
      {/* Hero Section */}
      <header className="hero pt-32 pb-20">
        <div className="container hero-container text-center">
          <div className="hero-content mx-auto">
            <div className="badge mx-auto">
              <span className="pulse-dot"></span>
              Bulletproof Operations
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Never Worry About <span className="gradient-text">Servers Crashing Again.</span></h1>
            <p className="hero-subline max-w-2xl mx-auto">
              We eliminate the anxiety of hardware failures and data loss. Our Azure cloud migrations give you infinite scalability, military-grade security, and 99.99% uptime—so you can run your business, not an IT closet.
            </p>
            <div className="hero-ctas justify-center">
              <MagicButton href="/contact" showArrow>
                Secure your data today
              </MagicButton>
            </div>
          </div>
        </div>
      </header>

      {/* Value-focused Features */}
      <section className="section services">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">The End of IT Headaches</h2>
            <p className="section-subtitle">Stop paying for servers you don't use. We move your infrastructure to the cloud so it scales perfectly with your revenue.</p>
          </div>

          <div className="services-grid">
            <div className="service-card glass-panel flex-reverse">
              <div className="service-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h3>Ransomware Immunity</h3>
              <p>A single cyberattack can bankrupt a business. We implement enterprise-grade security protocols and automated, isolated backups ensuring your vital company data is virtually untouchable.</p>
            </div>

            <div className="service-card glass-panel">
              <div className="service-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
              </div>
              <h3>Zero Downtime Guarantee</h3>
              <p>When your systems go down, you lose money by the minute. We engineer redundant cloud architectures that keep your operations running flawlessly 24/7/365, regardless of hardware failures.</p>
            </div>

            <div className="service-card glass-panel flex-reverse">
              <div className="service-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              </div>
              <h3>Slash Wasted IT Spend</h3>
              <p>Physical servers require constant maintenance, cooling, and eventual replacement. We shift you to a predictable operational model where you only pay for the exact computing power you actually consume.</p>
            </div>

            <div className="service-card glass-panel">
              <div className="service-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              </div>
              <h3>Work From Anywhere, Seamlessly</h3>
              <p>Your team shouldn't be chained to a desk. We build secure, lightning-fast remote access environments, empowering your employees to collaborate globally with the exact same performance as being in the office.</p>
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
              <p className="quote">"Our on-premise server died during our busiest quarter and cost us $50k in lost productivity. After AgenorIT moved us to Azure, we sleep soundly knowing we have 100% uptime and automatic failovers."</p>
              <div className="author">
                <strong>David Mitchell</strong>
                <span>CEO, Mitchell Financial Group</span>
              </div>
            </div>

            <div className="testimonial-card glass-panel hover:border-blue-500/30 transition-colors">
              <div className="quote-icon">"</div>
              <p className="quote">"We were spending a fortune replacing hard drives and upgrading our server rack. They migrated our entire operations to the cloud over a weekend without a single hiccup. Our IT costs dropped by 40% immediately."</p>
              <div className="author">
                <strong>Sarah Jenkins</strong>
                <span>Operations Director, Horizon Real Estate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section contact mb-20">
        <div className="container">
          <div className="cta-banner glass-panel text-center">
            <h2 className="mb-4 text-3xl font-bold">Is your business data at risk right now?</h2>
            <p className="mb-8 text-gray-400">Stop gambling with physical servers. Let's move your operations to an unbreakable cloud infrastructure.</p>
            <MagicButton href="/contact" showArrow>
              Future-proof your business
            </MagicButton>
          </div>
        </div>
      </section>
    </>
  );
}
