import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    eventType: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We\'ll be in touch soon.');
  };

  return (
    <div className="contact">
      {/* Header */}
      <section className="contact-header">
        <div className="container">
          <h1>Get Started with Sky Fleat</h1>
          <p>Ready to revolutionize your live entertainment? Let's talk.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="contact-main">
        <div className="container">
          <div className="contact-content">
            {/* Contact Form */}
            <div className="contact-form-section">
              <h2>Request a Demo</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="company">Company/Organization</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="eventType">Event Type</label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                  >
                    <option value="">Select Event Type</option>
                    <option value="festival">Music Festival</option>
                    <option value="concert">Concert/Tour</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="indoor">Indoor Venue</option>
                    <option value="custom">Custom Event</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Tell us about your event</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your event, expected audience size, venue type, and any specific requirements..."
                  ></textarea>
                </div>
                
                <button type="submit" className="btn-primary">Request Demo</button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info-section">
              <h2>Get in Touch</h2>
              
              <div className="contact-methods">
                                 <div className="contact-method">
                   <h3>📧 Email</h3>
                   <p>sales@skyfleat.com</p>
                   <p>support@skyfleat.com</p>
                 </div>
                
                                 <div className="contact-method">
                   <h3>📞 Phone</h3>
                   <p>+1 (555) 123-FLEAT</p>
                   <p>Available 24/7 for events</p>
                 </div>
                
                <div className="contact-method">
                  <h3>🌍 Global Reach</h3>
                  <p>Serving events worldwide</p>
                  <p>Local support teams available</p>
                </div>
              </div>

              <div className="response-time">
                <h3>⚡ Quick Response</h3>
                <p>We respond to all inquiries within 2 hours during business hours.</p>
                <p>Emergency support available 24/7 during live events.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sales Strategy */}
      <section className="sales-strategy">
        <div className="container">
          <h2>Our Approach</h2>
          <div className="strategy-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Pilot Partnership</h3>
              <p>Start with a regional festival to demonstrate capabilities and build trust</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Tiered Solutions</h3>
              <p>Choose from Basic (3-5 drones), Premium (choreography + app control), or Insight add-on</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Custom Deployment</h3>
              <p>Tailored setups for indoor venues, special events, or unique requirements</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Scale & Expand</h3>
              <p>Grow through our drone-pilot network and proven track record</p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Options */}
      <section className="demo-options">
        <div className="container">
          <h2>Demo Experiences</h2>
          <div className="demo-grid">
            <div className="demo-card">
              <h3>🎬 Virtual Demo</h3>
              <p>30-minute video call showcasing system capabilities</p>
              <ul>
                <li>Live system walkthrough</li>
                <li>Case study presentations</li>
                <li>Q&A with technical team</li>
              </ul>
              <button className="btn-secondary">Schedule Virtual Demo</button>
            </div>
            
            <div className="demo-card featured">
              <h3>🚁 Live Demo</h3>
              <p>On-site demonstration with actual drone systems</p>
              <ul>
                <li>Small-scale light show</li>
                <li>Fog and effects demo</li>
                <li>App interaction testing</li>
                <li>Technical Q&A</li>
              </ul>
              <button className="btn-primary">Request Live Demo</button>
              <div className="popular">Most Requested</div>
            </div>
            
            <div className="demo-card">
              <h3>📊 Insight Demo</h3>
              <p>Demonstration of sentiment analysis and social monitoring</p>
              <ul>
                <li>Real-time dashboard tour</li>
                <li>Sample reports</li>
                <li>Integration possibilities</li>
              </ul>
              <button className="btn-secondary">View Insight Demo</button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How far in advance should we book?</h3>
              <p>For major events, we recommend booking 3-6 months in advance. Smaller events can often be accommodated with 2-4 weeks notice.</p>
            </div>
            <div className="faq-item">
              <h3>What permits are required?</h3>
              <p>We handle all necessary permits and regulatory compliance, including FAA approvals for commercial drone operations.</p>
            </div>
            <div className="faq-item">
              <h3>What about weather conditions?</h3>
              <p>Our systems are designed to operate in most weather conditions. We have backup plans and weather monitoring protocols.</p>
            </div>
            <div className="faq-item">
              <h3>Can you work with our existing production team?</h3>
              <p>Absolutely! We integrate seamlessly with existing production workflows and technical teams.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;