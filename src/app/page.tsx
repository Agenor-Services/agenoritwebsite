import Image from "next/image";
import MagicButton from "@/components/MagicButton";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <header className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <div className="badge">
              <span className="pulse-dot"></span>
              Built for the AI Era
            </div>
            <h1>Elevate your business into the <span className="gradient-text">AI era.</span></h1>
            <p className="hero-subline">
              We build the intelligent digital foundations that allow your company to scale faster, operate smarter, and outpace the competition.
            </p>
            <div className="hero-ctas">
              <MagicButton href="/services/ai/strategy">
                Discover your potential
              </MagicButton>
              <MagicButton href="/contact" className="ml-0 sm:ml-4 mt-4 sm:mt-0" contentClassName="!bg-transparent" showArrow>
                Book a consultation
              </MagicButton>
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="section services">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Foundations for the Future</h2>
            <p className="section-subtitle">We don't just build technology. We engineer the outcomes that drive your business forward.</p>
          </div>

          <div className="services-grid">
            {/* Service 1 */}
            <div className="service-card glass-panel">
              <div className="service-icon web-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
              </div>
              <h3>Digital Presence & Conversion</h3>
              <p>Turn your digital storefront into a growth engine. Fast, immersive, and perfectly engineered web experiences that captivate your audience and drive measurable business growth.</p>
            </div>

            {/* Service 2 */}
            <div className="service-card glass-panel flex-reverse">
              <div className="service-icon azure-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
              </div>
              <h3>Unshakeable Scalability</h3>
              <p>Enterprise-grade Microsoft Azure stability, ready for tomorrow. Secure, limitless cloud architecture that scales with your ambition, ensuring your operations never miss a beat.</p>
            </div>

            {/* Service 3 */}
            <div className="service-card glass-panel">
              <div className="service-icon ai-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"></path><path d="m17 5-10 14"></path><path d="m7 5 10 14"></path></svg>
              </div>
              <h3>Intelligent Operations</h3>
              <p>Work smarter, not harder. Unleash the power of artificial intelligence across your organization to automate the mundane and uncover hidden tactical opportunities.</p>
            </div>

            {/* Service 4 */}
            <div className="service-card glass-panel flex-reverse">
              <div className="service-icon bot-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"></rect><circle cx="12" cy="5" r="2"></circle><path d="M12 7v4"></path><line x1="8" y1="16" x2="8" y2="16"></line><line x1="16" y1="16" x2="16" y2="16"></line></svg>
              </div>
              <h3>Always-On Customer Excellence</h3>
              <p>Your best employee, working 24/7. Custom intelligent AI bot agents that instantly resolve customer needs, capture high-quality leads, and provide flawless support around the clock.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section testimonials">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Trusted by leaders who demand excellence</h2>
          </div>
          
          <div className="testimonial-grid">
            <div className="testimonial-card glass-panel">
              <div className="quote-icon">"</div>
              <p className="quote">"AgenorIT's AI-first approach completely transformed our customer service operations. The custom bot handles 60% of tier-1 inquiries, allowing our team to focus on strategic growth."</p>
              <div className="author">
                <strong>Sarah Jenkins</strong>
                <span>CTO, FinScale Partners</span>
              </div>
            </div>

            <div className="testimonial-card glass-panel">
              <div className="quote-icon">"</div>
              <p className="quote">"Their Azure infrastructure migration was flawless. We've seen zero downtime since the cutover and our operational agility has more than doubled."</p>
              <div className="author">
                <strong>Marcus Thorne</strong>
                <span>VP Operations, Global Logistics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="section contact mb-20">
        <div className="container">
          <div className="cta-banner glass-panel text-center">
            <h2 className="mb-4 text-3xl font-bold">Ready to build what comes next?</h2>
            <p className="mb-8 text-gray-400">Stop managing IT and start leveraging it. Let's design the intelligent infrastructure your business deserves.</p>
            <MagicButton href="mailto:info@agenorit.com.au" showArrow>
              Book your strategic consultation
            </MagicButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer border-t border-white/10 pt-16">
        <div className="container">
          <div className="footer-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="footer-brand lg:col-span-2">
              <div className="logo relative">
                <Image src="/logo.png" alt="AgenorIT Logo" width={240} height={70} className="logo-icon object-contain filter drop-shadow-[0_0_10px_rgba(59,130,246,0.5)] transform scale-[2] origin-left translate-x-[2%]" />
              </div>
              <p className="footer-desc mt-8 text-gray-400">Intelligent digital foundations. Built for the AI era.</p>
            </div>
            
            <div className="footer-links justify-self-start md:justify-self-end text-sm">
              <div className="link-group flex flex-col gap-3">
                <h4 className="text-white font-semibold mb-2">Company</h4>
                <a href="#about" className="text-gray-400 hover:text-blue-400">About Us</a>
                <a href="#" className="text-gray-400 hover:text-blue-400">Careers</a>
              </div>
            </div>

            <div className="footer-links justify-self-start md:justify-self-end text-sm">
              <div className="link-group flex flex-col gap-3">
                <h4 className="text-white font-semibold mb-2">Services</h4>
                <a href="/services/cloud/azure-setup" className="text-gray-400 hover:text-blue-400">Cloud Infrastructure</a>
                <a href="/services/ai/strategy" className="text-gray-400 hover:text-blue-400">AI Enablement</a>
                <a href="/services/website/new" className="text-gray-400 hover:text-blue-400">Web Development</a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom pb-8 pt-8 mt-12 border-t border-white/10 text-center text-sm text-gray-400">
            <p>&copy; 2026 AgenorIT. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
