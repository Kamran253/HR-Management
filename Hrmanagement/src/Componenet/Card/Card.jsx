// Card.js
import React from 'react';
import './Card.css';
import ImageText from '../../Images/TexT.jpg'
import ImageMess from '../../Images/Message.jpg'

const Card = ({ icon, title, buttonText }) => {
  return (
   <div className="cards-containe">
      <div className="car">
        <div className="ico"><img alt='img' src={ImageText} className='ico-img'/></div> {/* Use your icon here */}
        <h3>Ready to optimize your <br /> tech recruiting process?</h3>
        <button>REQUEST A CALL</button>
      </div>

      <div className="car"> 
        <div className="ico"><img alt='img' src={ImageMess} className='ico-img' /></div> {/* Use your icon here */}
        <h3>Advance your career with <br /> practice-based learning</h3>
        <button>GET STARTED</button>
      </div>
    </div>
  );
};

export default Card;
