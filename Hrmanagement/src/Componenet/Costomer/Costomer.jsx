 import './Costomer.css'
 import React, { useState, useEffect, useRef } from 'react';
 import Cos from '../../Images/Costomer.jpg'
 import CarouselSlider from  '../Crousal/Crousal'
 import CountUp from 'react-countup';
// import { Result } from 'postcss';
import Result from '../Result'
const Customer = () => {
  const slides = [
    {
      image: "https://png.pngtree.com/png-clipart/20210121/ourmid/pngtree-3d-letter-g-png-transparent-design-png-image_2781634.jpg",
      description: "CodeSignal has been received very well by the product engineering team. We’ve tried multiple different solutions in this space, and [CodeSignal’s] interactivity, reliability, and language support has really helped us."
    },
    {
      image: "data:image/png;base64,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",
      description: "By incorporating CodeSignal into our process and having a large number of folks opt into it, either passive candidates or applicants, we’re able to free up roughly 40 to 60 percent of our engineers’ time."
    },
    {
      image: "https://codesignal.com/wp-content/uploads/2023/01/asana-logo-150x150.webp",                                    
      description: "Partnering with CodeSignal has helped us to manage a very high volume of interest from candidates in our process and quickly assess their technical acumen, without using a ton of engineering hours."
    },
  ]; const [startCount, setStartCount] = useState(false);
  const resultRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true); 
        } else {
          setStartCount(false); 
        }
      },
      { threshold: 0.5 }  
    );

    if (resultRef.current) {
      observer.observe(resultRef.current);
    }

    return () => {
      if (resultRef.current) {
        observer.unobserve(resultRef.current);
      }
    };
  }, []);
 
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };
  return (
    <>
    <div className="cosmo-mian">

    <section className="customer-sto">
      <div className="cont">
        <h2>Customer Stories</h2>
        <h1>You're in good company</h1>
        <a href="/stories" className="stor">See all stories →</a>
      </div>
      <div className="image-conta">
        <img src={Cos} alt="Customer Stori" />
      </div>
    </section>
      {/* <Result/> */}
        {/* <CarouselSlider/> */}

    <section>

    
    {/* <div className="slider-conta">
      <div className="sli">
        <button className="prev-btn" onClick={goToPrevSlide}>❮</button>
        <button className="next-btn" onClick={goToNextSlide}>❯</button>
        <img
          src={slides[currentIndex].image}
          alt={`Slide ${currentIndex + 1}`}
          className="slider-im"
          />
        <div className="slider-descriptionn">
          {slides[currentIndex].description}
        </div>
      </div>
    </div> */}
    </section>
    {/* <div className='result-main' ref={resultRef}>
      <div className="result-main-1">
        <h1 className='headin'>
          Results our <br />
          customers have seen
        </h1>
        <div className="one-two-main">
          <div className="one">
            <h1>
            {startCount ? (
                <CountUp 
                  start={0}  
                  end={200} 
                  duration={2}  
                />
              ) : (
                0  
              )}
            </h1>
            <h3>Hours saved annually</h3>
          </div>
          <div className="two">
            <h1>2X</h1>
            <h3>Candidates evaluated</h3>
          </div>
        </div>
      </div>
    </div> */}
          </div>
    </>
  );
};

export default Customer;
