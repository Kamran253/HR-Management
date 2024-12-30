import React from 'react';
import './HeroSection.css';
import Kam from '../../Images/pic.jpg';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Discover And Develop The Skills That Will Shape The Future</h1>
        <p>
          Whether you want to level up your skills or build a great team, CodeSignal’s skills
          assessments and AI-powered learning tools get you where you need to go.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">For Enterprise</button>
          <button className="btn-secondary">For Individuals</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={Kam} className='kam' alt="Person at computer" />
      </div>
    </section>
  );
};

export default HeroSection;
