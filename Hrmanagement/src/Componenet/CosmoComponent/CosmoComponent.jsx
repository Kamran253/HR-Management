
import React from 'react';
import './CosmoComponent.css';
import Cos from '../../Images/Cosmo.jpg'

function  CosmoComponent() {
  return (
    <div className='content'>

    <div className="cosmo-container">
      <div className="cosmo-content">
        <h1>Meet Cosmo: The smartest AI guide in the universe</h1>
        <p>
          Our built-in AI guide and tutor, Cosmo, prompts you with challenges that are built just for you and unblocks you when you get stuck.
        </p>
        <button className="grow-button">GROW WITH COSMO</button>
      </div>
      <div className="cosmo-image">
        <img src={Cos} alt="Cosmo" className='Cos'/>
      </div>
    </div>
    </div>
  );
}

export default CosmoComponent;