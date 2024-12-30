import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../Images/Google.jpg";
import img2 from "../../Images/jobvite.jpg";
import img3 from "../../Images/Meta.png";
import img4 from "../../Images/Green (3).png";
import img5 from "../../Images/uber (3).png";
import img6 from "../../Images/Okta.jpg";
import img7 from "../../Images/inst.png";
import img8 from "../../Images/prelod.jpg";
import Border from "../../Images/border2-removebg-preview (1).png";
import Border2 from "../../Images/border2-removebg-preview.png";
import "./IntegrationSection.css";

const commonSettings = {
  dots: false,
  infinite: true,
  speed: 3000,
  slidesToShow: 3,
  vertical: true,
  verticalSwiping: true,
  autoplay: true,
  autoplaySpeed: 1,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const settings1 = {
  ...commonSettings,
  slidesToScroll: -1,
};

const settings2 = {
  ...commonSettings,
  slidesToScroll: 1,
};

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const IntegrationSection = () => {
  return (
    <section className="integration-section">
      <div className="slider-area">
        <img src={Border} alt="" className="Border" />
        <div className="flex2">
          {[settings1, settings2].map((settings, index) => (
            <div key={index} className="slider-container">
              <Slider {...settings}>
                {images.map((image, idx) => (
                  <div key={idx} className="imgg">
                    <img src={image} alt="" className="slider-imagee" />
                  </div>
                ))}
              </Slider>
            </div>
          ))}
          <img src={Border2} alt="" className="slider-border" />
        </div>
      </div>
      <div className="integration-info">
        <p>INTEGRATIONS</p>
        <h2>All Of Your Favorite Tools, Connected</h2>
        <p className="pp">
          Our ecosystem of deep integrations makes it easy to <br />
          streamline your technical hiring processes.
        </p>
        <button className="integration-button">See All Integrations</button>
      </div>
    </section>
  );
};

export default IntegrationSection;
