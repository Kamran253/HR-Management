import React from 'react';
import './Slider.css';
import Uber from '../../Images/uber (3).png';
import Meta from '../../Images/Meta.png';
import Inst from '../../Images/inst.png';
import Green from '../../Images/Green (3).png';
import Gusto from '../../Images/Gusto.png';

const Slider = () => {
  return (
    <div className="slider">
      <div className="slider-track">
        <div className="slide"><img src={Uber} alt="Uber" /></div>
        <div className="slide"><img src={Meta} alt="Meta" /></div>
        <div className="slide"><img src={Inst} alt="Instacart" /></div>
        <div className="slide"><img src={Green} alt="Greenhouse" /></div>
        <div className="slide"><img src={Gusto} alt="Gusto" /></div>
        <div className="slide"><img src={Uber} alt="Uber" /></div>
        <div className="slide"><img src={Meta} alt="Meta" /></div>
        <div className="slide"><img src={Inst} alt="Instacart" /></div>
        <div className="slide"><img src={Green} alt="Greenhouse" /></div>
        <div className="slide"><img src={Gusto} alt="Gusto" /></div>
      </div>
    </div>
  );
};

export default Slider;
