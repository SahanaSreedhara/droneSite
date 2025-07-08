import React from 'react';
import './Products.css';

const Products = () => {
  return (
    <div className="products">
      {/* Header */}
      <section className="products-header">
        <div className="container">
          <h1>Our Products</h1>
          <p>Revolutionary drone systems for live entertainment</p>
        </div>
      </section>

      {/* ConcertCast */}
      <section className="product-detail concertcast">
        <div className="container">
          <div className="product-content">
            <div className="product-info">
              <span className="product-label">Product A</span>
              <h2>Sky Fleat ConcertCast</h2>
              <p className="product-description">
                Autonomous drone fleets that capture concerts in stunning 4K HDR, providing 
                multi-angle feeds with 5G/BVLOS support and app-based viewer controls.
              </p>
              
              <div className="features-list">
                <h3>Key Features</h3>
                <ul>
                  <li>
                    <strong>4K HDR Recording</strong>
                    <span>Ultra-high-definition capture with HDR for vibrant, cinema-quality footage</span>
                  </li>
                  <li>
                    <strong>Multi-Angle Feeds</strong>
                    <span>Simultaneous capture from multiple drones for diverse perspectives</span>
                  </li>
                  <li>
                    <strong>5G/BVLOS Support</strong>
                    <span>Real-time streaming with beyond visual line of sight capabilities</span>
                  </li>
                  <li>
                    <strong>App-Based Controls</strong>
                    <span>Audience can switch between drone views and request specific angles</span>
                  </li>
                  <li>
                    <strong>AI Highlights</strong>
                    <span>Intelligent detection and capture of key crowd and stage moments</span>
                  </li>
                  <li>
                    <strong>Integrated Effects</strong>
                    <span>Lighting, lasers, fog, and pyrotechnic drones for enhanced performances</span>
                  </li>
                </ul>
              </div>

              <div className="tech-specs">
                <h3>Technical Specifications</h3>
                <div className="specs-grid">
                  <div className="spec-item">
                    <span className="spec-label">Flight Time</span>
                    <span className="spec-value">45+ minutes</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Range</span>
                    <span className="spec-value">10km BVLOS</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Video Quality</span>
                    <span className="spec-value">4K HDR @ 60fps</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Latency</span>
                    <span className="spec-value">&lt; 100ms</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-visual">
              <div className="drone-showcase">
                <div className="drone-model"></div>
                <div className="feature-highlights">
                  <div className="highlight">4K HDR</div>
                  <div className="highlight">AI-Powered</div>
                  <div className="highlight">5G Ready</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insight */}
      <section className="product-detail insight">
        <div className="container">
          <div className="product-content reverse">
            <div className="product-visual">
                             <div className="insight-dashboard">
                 <div className="dashboard-header">
                   <h4>Sky Fleat Insight Dashboard</h4>
                 </div>
                <div className="dashboard-content">
                  <div className="metric-card">
                    <span className="metric-label">Sentiment Score</span>
                    <span className="metric-value positive">+8.7</span>
                  </div>
                  <div className="metric-card">
                    <span className="metric-label">Engagement</span>
                    <span className="metric-value">342K</span>
                  </div>
                  <div className="metric-card">
                    <span className="metric-label">Trending</span>
                    <span className="metric-value">#DroneShow</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-info">
              <span className="product-label">Product B</span>
              <h2>Sky Fleat Insight</h2>
              <p className="product-description">
                Entertainment Edition sentiment analysis that monitors Reddit, Twitter, Instagram, 
                and YouTube to provide actionable insights for continuous improvement.
              </p>
              
              <div className="features-list">
                <h3>Analytics Features</h3>
                <ul>
                  <li>
                    <strong>Real-time Monitoring</strong>
                    <span>Live tracking of social media mentions and sentiment across platforms</span>
                  </li>
                  <li>
                    <strong>Sentiment Analysis</strong>
                    <span>Advanced AI models specialized for entertainment and drone content</span>
                  </li>
                  <li>
                    <strong>Trend Mining</strong>
                    <span>Identification of emerging trends and viral moments</span>
                  </li>
                  <li>
                    <strong>Custom Reports</strong>
                    <span>Tailored insights for sales, creative, and R&D teams</span>
                  </li>
                  <li>
                    <strong>Feedback Loop</strong>
                    <span>Real-time data integration for continuous show improvement</span>
                  </li>
                  <li>
                    <strong>Predictive Analytics</strong>
                    <span>Forecast audience reactions and optimize future performances</span>
                  </li>
                </ul>
              </div>

              <div className="platforms">
                <h3>Monitored Platforms</h3>
                <div className="platform-icons">
                  <div className="platform">Twitter</div>
                  <div className="platform">Instagram</div>
                  <div className="platform">Reddit</div>
                  <div className="platform">YouTube</div>
                  <div className="platform">TikTok</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="pricing">
        <div className="container">
          <h2>Flexible Solutions</h2>
          <div className="pricing-grid">
            <div className="pricing-card basic">
              <h3>Basic Package</h3>
              <div className="price">Contact for Quote</div>
              <ul>
                <li>3-5 drone setup</li>
                <li>4K recording</li>
                <li>Basic app controls</li>
                <li>Standard support</li>
              </ul>
            </div>
            <div className="pricing-card premium">
              <h3>Premium Package</h3>
              <div className="price">Contact for Quote</div>
              <ul>
                <li>8-12 drone choreography</li>
                <li>Advanced app control</li>
                <li>Lighting & effects integration</li>
                <li>Real-time streaming</li>
                <li>Priority support</li>
              </ul>
              <div className="popular">Most Popular</div>
            </div>
            <div className="pricing-card insight">
              <h3>Insight Add-on</h3>
              <div className="price">Contact for Quote</div>
              <ul>
                <li>Social media monitoring</li>
                <li>Sentiment analysis</li>
                <li>Custom reports</li>
                <li>Trend identification</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;