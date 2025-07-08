import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      {/* Header */}
      <section className="about-header">
        <div className="container">
          <h1>About Sky Fleat</h1>
          <p>Pioneering the future of live entertainment technology</p>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="problem-statement">
        <div className="container">
          <h2>The Challenge We're Solving</h2>
          <div className="problem-grid">
            <div className="problem-item">
              <h3>📡 Outdated Technology</h3>
              <p>Traditional broadcast methods (cranes, cables, helicopters) are costly, rigid, and lack real-time flexibility.</p>
            </div>
            <div className="problem-item">
              <h3>🎭 Audience Expectations</h3>
              <p>Audiences today demand immersion -- they want to control perspectives, relive highlights instantly, and feel like participants, not just spectators.</p>
            </div>
            <div className="problem-item">
              <h3>📊 Lack of Insight</h3>
              <p>Event producers lack insight into what fans actually want. There's no direct feedback loop from social media sentiment to product development or show design.</p>
            </div>
            <div className="problem-item">
              <h3>🚁 Underutilized Potential</h3>
              <p>Drone tech has proven visual impact but remains underutilized due to lack of integration with content production, creativity, and audience intelligence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="vision-mission">
        <div className="container">
          <div className="vm-grid">
            <div className="vm-card vision">
              <h2>🎯 Our Vision</h2>
              <p>
                To redefine the global live entertainment experience by fusing autonomous drone technology 
                with immersive visuals and real-time audience intelligence.
              </p>
              <p>
                We aim to elevate how concerts, festivals, and performances are created, streamed, and evolved -- 
                where every show is dynamic, every angle personal, and every feedback loop actionable.
              </p>
            </div>
            <div className="vm-card mission">
              <h2>🚀 Our Mission</h2>
              <p>
                To empower artists, event producers, and audiences with cutting-edge drone systems that deliver 
                cinematic live streams, awe-inspiring aerial choreographies, and actionable insights from real 
                audience sentiment.
              </p>
              <p>
                Transforming events into interactive, data-driven spectacles that evolve with their audiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="solution">
        <div className="container">
          <h2>Our Solution</h2>
          <p className="solution-intro">
            A unified platform that captures breathtaking aerial visuals, enables viewer interaction, 
            and simultaneously listens to audience preferences in real time.
          </p>
          
          <div className="solution-features">
            <div className="solution-feature">
              <div className="feature-number">01</div>
              <h3>Autonomous Drone Fleets</h3>
              <p>Advanced AI-powered drones that capture stunning 4K HDR footage with precision and safety.</p>
            </div>
            <div className="solution-feature">
              <div className="feature-number">02</div>
              <h3>Real-time Interaction</h3>
              <p>Audiences can switch between drone angles, request specific shots, and influence the show.</p>
            </div>
            <div className="solution-feature">
              <div className="feature-number">03</div>
              <h3>Sentiment Intelligence</h3>
              <p>Real-time monitoring of social media to understand audience reactions and preferences.</p>
            </div>
            <div className="solution-feature">
              <div className="feature-number">04</div>
              <h3>Creative Enhancement</h3>
              <p>Integrated lighting, pyrotechnics, and effects that respond to both music and audience energy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="values">
        <div className="container">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Innovation First</h3>
              <p>We push the boundaries of what's possible with drone technology and live entertainment.</p>
            </div>
            <div className="value-card">
              <h3>Safety Always</h3>
              <p>Every system is designed with multiple safety protocols and regulatory compliance in mind.</p>
            </div>
            <div className="value-card">
              <h3>Audience-Centric</h3>
              <p>We believe the audience should be at the center of every entertainment experience.</p>
            </div>
            <div className="value-card">
              <h3>Creative Partnership</h3>
              <p>We work closely with artists and producers to enhance their creative vision, not replace it.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;