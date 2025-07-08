import React from 'react';
import './UseCases.css';

const UseCases = () => {
  return (
    <div className="use-cases">
      {/* Header */}
      <section className="use-cases-header">
        <div className="container">
          <h1>Use Cases</h1>
          <p>Transforming entertainment across every venue and scale</p>
        </div>
      </section>

      {/* Major Festivals & Tours */}
      <section className="use-case festivals">
        <div className="container">
          <div className="use-case-content">
            <div className="use-case-info">
              <h2>🎪 Major Festivals & Tours</h2>
              <p className="use-case-description">
                Transform large-scale festivals and touring productions with spectacular aerial coverage 
                and immersive audience experiences.
              </p>
              
              <div className="examples">
                <h3>Perfect For:</h3>
                <ul>
                  <li>Coachella - Multi-stage aerial coordination</li>
                  <li>Glastonbury - Weather-resistant drone systems</li>
                  <li>Super Bowl Halftime - Precision choreography</li>
                  <li>World touring artists - Consistent global setup</li>
                </ul>
              </div>

              <div className="benefits">
                <h3>Key Benefits:</h3>
                <div className="benefit-item">
                  <strong>Enhanced Coverage</strong>
                  <p>Capture multiple stages simultaneously with coordinated drone fleets</p>
                </div>
                <div className="benefit-item">
                  <strong>Crowd Engagement</strong>
                  <p>Interactive elements that make audiences part of the show</p>
                </div>
                <div className="benefit-item">
                  <strong>Scalable Setup</strong>
                  <p>Adaptable systems that work for intimate venues to massive festivals</p>
                </div>
              </div>
            </div>
            <div className="use-case-visual festivals-visual">
              <div className="festival-scene">
                <div className="stage"></div>
                <div className="crowd"></div>
                <div className="drone-fleet">
                  <div className="drone"></div>
                  <div className="drone"></div>
                  <div className="drone"></div>
                  <div className="drone"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artist Stadium Performances */}
      <section className="use-case stadiums">
        <div className="container">
          <div className="use-case-content reverse">
            <div className="use-case-visual stadiums-visual">
              <div className="stadium-scene">
                <div className="stadium-structure"></div>
                <div className="light-show"></div>
                <div className="pyrotechnics"></div>
              </div>
            </div>
            <div className="use-case-info">
              <h2>🏟️ Artist Stadium Performances</h2>
              <p className="use-case-description">
                Elevate stadium concerts with synchronized drone orchestras, pyrotechnics, 
                and immersive light shows that respond to music and crowd energy.
              </p>
              
              <div className="examples">
                <h3>Perfect For:</h3>
                <ul>
                  <li>Rolling Loud - Hip-hop festival drone choreography</li>
                  <li>Stadium rock concerts - Classic light shows reimagined</li>
                  <li>EDM festivals - Beat-synchronized drone movements</li>
                  <li>Pop star tours - Interactive fan experiences</li>
                </ul>
              </div>

              <div className="features">
                <h3>Advanced Features:</h3>
                <div className="feature-item">
                  <strong>Drone Orchestras</strong>
                  <p>Hundreds of drones moving in perfect synchronization with music</p>
                </div>
                <div className="feature-item">
                  <strong>Pyrotechnic Integration</strong>
                  <p>Safe, coordinated fireworks and effects delivered by specialized drones</p>
                </div>
                <div className="feature-item">
                  <strong>Audience Interaction</strong>
                  <p>Smartphone app controls for crowd-influenced light patterns</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Indoor Venues */}
      <section className="use-case indoor">
        <div className="container">
          <div className="use-case-content">
            <div className="use-case-info">
              <h2>🏢 Indoor Malls & Cruise Ships</h2>
              <p className="use-case-description">
                Specialized indoor drone systems designed for confined spaces, bringing spectacular 
                entertainment to shopping centers, cruise ships, and enclosed venues.
              </p>
              
              <div className="examples">
                <h3>Perfect For:</h3>
                <ul>
                  <li>Dubai Mall - Luxury shopping entertainment</li>
                  <li>Royal Caribbean - Cruise ship theater shows</li>
                  <li>Corporate events - Conference opener spectacles</li>
                  <li>Holiday displays - Seasonal indoor celebrations</li>
                </ul>
              </div>

              <div className="safety">
                <h3>Safety Features:</h3>
                <div className="safety-item">
                  <strong>Collision Avoidance</strong>
                  <p>Advanced sensors prevent contact with crowds and infrastructure</p>
                </div>
                <div className="safety-item">
                  <strong>Noise Reduction</strong>
                  <p>Whisper-quiet operation for intimate indoor settings</p>
                </div>
                <div className="safety-item">
                  <strong>Emergency Protocols</strong>
                  <p>Automatic landing and containment systems for maximum safety</p>
                </div>
              </div>
            </div>
            <div className="use-case-visual indoor-visual">
              <div className="indoor-scene">
                <div className="mall-structure"></div>
                <div className="indoor-drones">
                  <div className="indoor-drone"></div>
                  <div className="indoor-drone"></div>
                  <div className="indoor-drone"></div>
                </div>
                <div className="shoppers"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="impact-metrics">
        <div className="container">
          <h2>Proven Results</h2>
          <div className="metrics-grid">
            <div className="metric-card">
              <div className="metric-number">300%</div>
              <div className="metric-label">Increase in Audience Engagement</div>
            </div>
            <div className="metric-card">
              <div className="metric-number">60%</div>
              <div className="metric-label">Reduction in Production Costs</div>
            </div>
            <div className="metric-card">
              <div className="metric-number">85%</div>
              <div className="metric-label">Positive Sentiment Score</div>
            </div>
            <div className="metric-card">
              <div className="metric-number">50M+</div>
              <div className="metric-label">Social Media Impressions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="custom-solutions">
        <div className="container">
          <h2>Custom Deployments</h2>
          <p>Every venue is unique. We create tailored solutions for your specific needs.</p>
          
          <div className="solutions-grid">
            <div className="solution-card">
              <h3>🎭 Theater Shows</h3>
              <p>Intimate drone performances for Broadway-style productions</p>
            </div>
            <div className="solution-card">
              <h3>🏛️ Museums</h3>
              <p>Educational drone experiences for interactive exhibits</p>
            </div>
            <div className="solution-card">
              <h3>🎨 Art Installations</h3>
              <p>Collaborative drone art pieces with renowned artists</p>
            </div>
            <div className="solution-card">
              <h3>🏪 Retail Events</h3>
              <p>Product launches with spectacular drone reveals</p>
            </div>
            <div className="solution-card">
              <h3>🎪 Theme Parks</h3>
              <p>Daily drone shows integrated with park attractions</p>
            </div>
            <div className="solution-card">
              <h3>🏆 Sports Events</h3>
              <p>Halftime shows and victory celebrations</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UseCases;