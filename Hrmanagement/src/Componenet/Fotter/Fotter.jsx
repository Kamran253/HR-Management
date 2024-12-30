import React from 'react';
import '../Fotter/Fotter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 

const Fotter = () => {
  return (
    <footer className="footer-container">
      <div className="footer-column">
        <h3 className="column-title">Need product support?</h3>
        <button className="contact-button">Contact Support</button>
        <div className="social-icons">
          <a href="#" className="social-link"><i className="fa-brands fa-linkedin"></i></a>
          <a href="#" className="social-link"><i className="fa-brands fa-youtube"></i></a>
          <a href="#" className="social-link"><i className="fa-brands fa-twitter"></i></a>
          <a href="#" className="social-link"><i className="fa-brands fa-facebook"></i></a>
        </div>
      </div>
    
      <div className="footer-column">
        <h3 className="column-title">Products</h3>
        <a href="#" className="footer-link">Pre-Screen</a>
        <a href="#" className="footer-link">Interview</a>
        <a href="#" className="footer-link">Develop</a>
        <a href="#" className="footer-link">Learn</a>
        <a href="#" className="footer-link">IDE</a>
        <a href="#" className="footer-link">Evaluations</a>
        <a href="#" className="footer-link">Pricing</a>
      </div>

      <div className="footer-column">
        <h3 className="column-title">Solutions</h3>
        <a href="#" className="footer-link">For Talent Acquisition</a>
        <a href="#" className="footer-link">For Engineering Leaders</a>
        <a href="#" className="footer-link">For IO Psychologists</a>
        <a href="#" className="footer-link">For Individuals</a>
      </div>

      <div className="footer-column">
        <h3 className="column-title">Resources</h3>
        <a href="#" className="footer-link">Resource Library</a>
        <a href="#" className="footer-link">Blog</a>
        <a href="#" className="footer-link">Customer Stories</a>
        <a href="#" className="footer-link">Interview Prep</a>
        <a href="#" className="footer-link">Knowledge Base</a>
        <a href="#" className="footer-link">Integrations</a>
        <a href="#" className="footer-link">API Docs</a>
      </div>

      <div className="footer-column">
        <h3 className="column-title">Company</h3>
        <a href="#" className="footer-link">About CodeSignal</a>
        <a href="#" className="footer-link">Newsroom</a>
        <a href="#" className="footer-link">Leadership</a>
        <a href="#" className="footer-link">Talent Science</a>
      </div>

      <div className="social-icons">
        <a href="#" className="social-link"><i className="fa-brands fa-linkedin"></i></a>
        <a href="#" className="social-link"><i className="fa-brands fa-youtube"></i></a>
        <a href="#" className="social-link"><i className="fa-brands fa-twitter"></i></a>
        <a href="#" className="social-link"><i className="fa-brands fa-facebook"></i></a>
      </div>
    </footer>
  );
};

export default Fotter;
