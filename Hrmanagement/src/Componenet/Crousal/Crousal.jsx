// import React, { useState, useEffect, useRef } from 'react';
// import "./Crousal.css"; 

// const Crousal = () => {
//   const slides = [
//     {
//       image: "data:image/jpeg;base64,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",
//       description: "CodeSignal has been received very well by the product engineering team. We’ve tried multiple different solutions in this space, and [CodeSignal’s] interactivity, reliability, and language support has really helped us."
//     },
//     {
//       image: "data:image/png;base64,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",
//       description: "By incorporating CodeSignal into our process and having a large number of folks opt into it, either passive candidates or applicants, we’re able to free up roughly 40 to 60 percent of our engineers’ time."
//     },
//     {
//       image: "https://codesignal.com/wp-content/uploads/2023/01/asana-logo-150x150.webp",                                    
//       description: "Partnering with CodeSignal has helped us to manage a very high volume of interest from candidates in our process and quickly assess their technical acumen, without using a ton of engineering hours."
//     },
//   ];
 
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const goToNextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === slides.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const goToPrevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? slides.length - 1 : prevIndex - 1
//     );
//   };
  

//   return (
//     <div className="crousal-result">

//         {/* <Result/>  */}
//     <div className="slider-containerr">
//       <div className="sliderr">
//          <button className="prev-btn" onClick={goToPrevSlide}>❮</button>
//         <button className="next-btn" onClick={goToNextSlide}>❯</button>
//         <img
//           src={slides[currentIndex].image}
//           alt={`Slide ${currentIndex + 1}`}
//           className="slider-image"
//           />
//         <div className="slider-description">
//           {slides[currentIndex].description}
//         </div>
   


//       </div>
   
     
     
//     </div>
     
//                 </div>
//   );
// };

// export default Crousal;
