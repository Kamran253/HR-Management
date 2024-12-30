import React from 'react';
import image1 from "../../Images/Developer.jpg";
import image2 from "../../Images/Putting.jpg";
import image3 from "../../Images/Seneor.jpg";
import '../Resources/Resources.css'

function Resources() {
    const cardData = [
        {
          title: "Report: Developers and AI Coding Assistant Trends",
          image: image1,
        },
        {
          title: "Putting Talent First: How to Optimize the Candidate Experience",
          image: image2,
        },
        {
          title: "22 senior software engineer interview questions (and answers)",
          image: image3,
        },
      ];
  return (
  <>
        <h1 className='Resources'>Resources</h1>
    <div className="card-container">
    {cardData.map((card, index) => (
      <div className="card" key={index}>
        <img src={card.image} alt={card.title} className="card-image" />
        <h3 className="card-title">{card.title}</h3>
      </div>
    ))}
  </div>
  </>
  )
}

export default Resources
