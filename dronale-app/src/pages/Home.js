import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Sky Fleat Live Entertainment</h1>
          <p className="hero-subtitle">"The Future of Performance is in the Air."</p>
          <p className="hero-description">
            Redefining the global live entertainment experience by fusing autonomous drone technology 
            with immersive visuals and real-time audience intelligence.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Request Demo</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="drone-animation">
            <div className="drone"></div>
            <div className="drone"></div>
            <div className="drone"></div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="features">
        <div className="features-background">
          <img src="https://images.unsplash.com/photo-1580859788002-6cdbcfe44e82?w=1200&h=800&fit=crop&crop=center&opacity=10" alt="Drone Background" />
        </div>
        <div className="container">
          <h2>Transforming Live Events</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎬</div>
              <h3>Immersive Experience</h3>
              <p>Audiences switch between drone angles in real time, creating personalized viewing experiences.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">✨</div>
              <h3>Visual Innovation</h3>
              <p>Pyrotechnics, drone choreographies, and lighting effects that enhance any performance.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Creative Feedback Loop</h3>
              <p>Fan sentiment directly influences creative and technical development in real-time.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔧</div>
              <h3>Modular Flexibility</h3>
              <p>Adaptable setups for any venue - indoors, outdoors, or specialized environments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="products-preview">
        <div className="container">
          <h2>Our Solutions</h2>
          <div className="products-grid">
            <div className="product-card">
              <h3>Sky Fleat ConcertCast</h3>
              <p>Autonomous drone fleets capture concerts in 4K HDR with multi-angle feeds, 5G/BVLOS support, and app-based viewer controls.</p>
              <ul>
                <li>AI-powered highlight generation</li>
                <li>Integrated lighting and pyrotechnic drones</li>
                <li>Real-time audience interaction</li>
              </ul>
            </div>
            <div className="product-card">
              <h3>Sky Fleat Insight</h3>
              <p>Entertainment-focused sentiment analysis monitoring Reddit, Twitter, Instagram, and YouTube for actionable insights.</p>
              <ul>
                <li>Real-time sentiment monitoring</li>
                <li>Trend mining and analysis</li>
                <li>Creative and R&D reports</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Ready to Revolutionize Your Events?</h2>
          <p>Experience the future of live entertainment with Dronale's cutting-edge technology.</p>
          <button className="btn-primary large">Get Started Today</button>
        </div>
      </section>
    </div>
  );
};

export default Home;