import React, { useState } from 'react';
import '../SkillSection/SkillSection.css';
import Pic1 from '../../Images/men.jpg';
import Pic2 from '../../Images/Button1.jpg';
import Pic3 from '../../Images/Button2.jpg';
import Logo from '../../Images/Text.png';
import Logo2 from '../../Images/People.jpg';
import Logo3 from '../../Images/Com (2).jpg';

function App() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="main-tab-contain">
      <div className="tab-container">
        <div className="tab-buttons">
          <button
            className={`tab-button ${activeTab === 1 ? 'active' : ''}`}
            onClick={() => handleTabClick(1)}
          >
            Learn new skills
          </button>
          <button
            className={`tab-button ${activeTab === 2 ? 'active' : ''}`}
            onClick={() => handleTabClick(2)}
          >
            Hire top talent, faster
          </button>
          <button
            className={`tab-button ${activeTab === 3 ? 'active' : ''}`}
            onClick={() => handleTabClick(3)}
          >
            Upskill or reskill your team
          </button>
        </div>
        <div className="tab-content">
          {activeTab === 1 && (
            <div className="content">
              <div className="learn-section">
                <div className="learn-content">
              <img src={Logo} className="Logo-img" alt="Logo" />
                  <h2>Learn</h2>
                  <p>Level up and advance your career with practice-based learning that meets you where you are and adapts to your unique skills journey.</p>
                  <button className="learn-link">GET STARTED &rarr;</button>
                </div>
              </div>
              <img src={Pic1} alt="Im" />
            </div>
          )}
          {activeTab === 2 && (
            <div className="content">
              <div className="learn-section">
                <img src={Logo2} className="Logo-img" alt="Pre-Screen Logo" />
                <div className="learn-content">
                  <h2>Pre-Screen</h2>
                  <p>Level up and advance your career with practice-based learning that meets you where you are and adapts to your unique skills journey.</p>
                  <button className="learn-link">GET STARTED &rarr;</button>
                </div>
              </div>
              <div className="learn-section-2">
                <img src={Logo3} className="Logo-img" alt="Interview Logo" />
                <div className="learn-content">
                  <h2>Interview</h2>
                  <p>Deliver the best candidate experience in a realistic coding environment, while accurately evaluating skill and fit.</p>
                  <button className="learn-link">GET STARTED &rarr;</button>
                </div>
              </div>
              <img src={Pic2} alt="Image2" />
            </div>
          )}
          {activeTab === 3 && (
            <div className="content">
              <div className="learn-section">
                <img src={Logo3} className="Logo-img" alt="Develop Logo" />
                <div className="learn-content">
                  <h2>Develop</h2>
                  <p>Improve team performance with personalized, practice-based, technical learning that delivers real, measurable results.</p>
                  <button className="learn-link">GET STARTED &rarr;</button>
                </div>
              </div>
              <img src={Pic3} alt="Image3" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
