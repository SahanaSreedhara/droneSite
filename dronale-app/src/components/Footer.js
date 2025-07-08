import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            {/* Company Info */}
            <div className="footer-section">
              <div className="footer-logo">
                <span className="logo-text">Dronale</span>
                <span className="logo-subtitle">Live Entertainment</span>
              </div>
              <p className="footer-description">
                "The Future of Performance is in the Air."
              </p>
              <p className="footer-description">
                Redefining live entertainment with autonomous drone technology, 
                immersive visuals, and real-time audience intelligence.
              </p>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/use-cases">Use Cases</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* Products */}
            <div className="footer-section">
              <h3>Products</h3>
              <ul className="footer-links">
                <li><a href="#concertcast">ConcertCast</a></li>
                <li><a href="#insight">Insight</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#demo">Request Demo</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h3>Contact</h3>
              <div className="contact-info">
                <p>📧 sales@dronale.com</p>
                <p>📞 +1 (555) 123-DRONE</p>
                <p>🌍 Serving events worldwide</p>
                <p>⚡ 24/7 support during events</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Dronale Live Entertainment. All rights reserved.</p>
            <div className="footer-social">
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="LinkedIn">💼</a>
              <a href="#" aria-label="YouTube">📺</a>
              <a href="#" aria-label="Instagram">📷</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;