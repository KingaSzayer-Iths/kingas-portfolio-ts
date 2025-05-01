import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
// import './ButtonList.css'
import { useLocation } from 'react-router-dom'
import arrowUp from "./icons/arrow-up.png"

function Hobby() {


    const { state }: any = useLocation();
  
      const [currentIndex, setCurrentIndex] = useState<number>(0);
      const autoSlide = useRef<boolean>(true);
  
  
    const nextSlide = () => {
      setCurrentIndex((currentIndex + 1) % state.hobby.images.length);
    };
    const prevSlide = () => {
      setCurrentIndex(currentIndex === 0 ? state.hobby.images.length -1 : currentIndex -1);
    };
  
    const stopAutoSlide = () => {
      autoSlide.current = false;
    };
  
    useEffect(() => {
      if (autoSlide.current) {
        const slideInterval:any = setInterval(nextSlide, 3000);
        return () => clearInterval(slideInterval);
      }
    }, [currentIndex, 3000]);
  
  
    return <>
    <div className="project-content-layout">
    <h2>{state.hobby.name}</h2>
    {/* <h3>{state.hobby.shortDescription}</h3> */}
    <div className="project-flex">
    <p>{state.hobby.longDescription}</p>
    </div>
    </div>
    {/* <div className="carousel-container"> */}
  
     {/* <div className="carousel-images"
    style={{transform: `translateX(-${currentIndex*100}%)`}}>
    {state.hobby.images.map((image, i) => (
        <div
            key={i}
            className={`carousel-image-container ${currentIndex === i ? 'active' : ''}`}
        >
        <img  src={image} alt={`Slide ${i}`} className="carousel2-image" />

        
        </div>
    ))}

    
    </div> */}

    {/* <div className="carousel-images"
    style={{transform: `translateX(-${currentIndex*100}%)`}}>
    {state.hobby.images.map((image, i) => (
        
        <img key={i}
            className={`carousel-image-container ${currentIndex === i ? 'active' : ''}`} 
            src={image} alt={`Slide ${i}`}  />
       
    ))}
    </div> */}
    
    {/* <div className="carousel-controls">
    <button className="carousel-button prev" onClick={prevSlide}>&#10094;</button>
    <button className="carousel-button next" onClick={nextSlide}>&#10095;</button>
    </div>
    </div> */}

    <div className="carousel-controls">
      <button className="carousel-button prev" onClick={prevSlide}>&#10094;</button>
      <button className="carousel-button next" onClick={nextSlide}>&#10095;</button>
    </div>
    <div className="carousel-container">
      <div className="carousel-images">
        <img src={state.hobby.images[currentIndex]} alt="Carousel image" className="carousel-image" />

      </div>
    </div>

    <div id="back-button">
    <Link  to="/hobbys"><img width="32px" src={arrowUp} alt="Back button " />Back</Link>
    </div>
    <style>{
    `#fab {
      display:none;
    }`
    }</style>
    </>
    
  }
  
  export default Hobby