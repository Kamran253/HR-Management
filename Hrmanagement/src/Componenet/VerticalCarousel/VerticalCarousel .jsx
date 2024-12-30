// import React from 'react';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import './VerticalCarousel .css'; 
// import img1 from '../../Images/Google.jpg';
 
// const commonSettings = {
//   dots: false,
//   infinite: true,
//   speed: 3000,           
//   slidesToShow: 3,
//   vertical: true, 
//   verticalSwiping: true,
//   autoplay: true,    
//   autoplaySpeed: 1,    
//   cssEase: 'linear', 
// };
 
// const settings1 = {
//   ...commonSettings,
//   slidesToScroll: -1,
// };

// const settings2 = {
//   ...commonSettings,
//   slidesToScroll: 1,
// };

// const images = Array(11).fill(img1);  

// const VerticalSlider = () => (
//   <div className='flex'>
//     { [settings1, settings2].map((settings, index) => (
//       <div key={index} style={{ width: '300px', margin: '0 auto' }}>
//         <Slider {...settings}>
//           {images.map((image, idx) => (
//             <div key={idx}><img src={image} alt="" /></div>
//           ))}
//         </Slider>
//       </div>
//     )) }
//   </div>
// );

// export default VerticalSlider;
