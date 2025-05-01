import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
// import './ButtonList.css'
import { useLocation } from 'react-router-dom'
import arrowUp from "./icons/arrow-up.png"



function Project() {

  const {state} = useLocation();

    const [currentIndex, setCurrentIndex] = useState(0);
    const autoSlide = useRef(true);


  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % state.project.images.length);
  };
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex -1 + state.project.images.length) % state.project.images.length
    );
  };

  const stopAutoSlide = () => {
    autoSlide.current = false;
  };

  useEffect(() => {
    if (autoSlide.current) {
      const slideInterval = setInterval(nextSlide, 3000);
      return () => clearInterval(slideInterval);
    }
  }, [currentIndex, 3000]);


  return <>
  <div className="project-layout">
  <h2>{state.project.name}</h2>

  <div className="project-flex">
  <h3>{state.project.shortDescription}</h3>
  <p>{state.project.longDescription}</p>
  </div>

  {/* <h3>{state.project.shortDescription}</h3>
  <p>{state.project.longDescription}</p> */}
  {/* <img src="bilder"  "../images/portrait1.JPG" alt="" /> */}
  {/* <img src={state.project.bilder} "./images/image1.png" alt=""  */}

  </div>

    <div className="carousel-controls">
      <button className="carousel-button prev" onClick={prevSlide}>&#10094;</button>
      <button className="carousel-button next" onClick={nextSlide}>&#10095;</button>
    </div>
    <div className="carousel-container">
      <div className="carousel-images">
        <img src={state.project.images[currentIndex]} alt="Carousel image" className="carousel-image" />

      </div>
    </div>
    <div id="back-button">
      <Link to="/projects"><img width="32px" src={arrowUp} alt="Back button " />Back</Link>
    </div>

  <style>{
    `#fab {
      display:none;
    }`

    }</style>
  </>
  
}

export default Project

// {
//   "name":"WordPress",
//   "shortDescription":"WordPress - Polska desserter",
//   "longDescription":"WordPress projektet - en dessertblogg. Bilderna visar hero sidan, sidan med blogginläggen med en sidomenu med länkar till kategorier, arkiv och sökfunktion samt en bild på kontaktsidan.",
//   "bilder": [
//       "x",
//       "y"
//   ]

// }