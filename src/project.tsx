import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import arrowUp from "./icons/arrow-up.png"
import { useTranslation } from 'react-i18next'
import './i18n'


type Project = {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  description: string;
  mainImage: string;
  images: string[];
  github: string;
}

type LocationState = {
  project: Project
}

function Project() {
  const { t } = useTranslation()
  const location = useLocation() as { state: LocationState }
  const { project } = location.state
  // const location = useLocation() as Location & { state: LocationState }
  // const {state} = useLocation();

  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const autoSlide = useRef<boolean>(true)


  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % project.images.length)
  }
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex -1 + project.images.length) % project.images.length
    )
  }
  const stopAutoSlide = () => {
    autoSlide.current = false
  }

  //Scrolla upp till toppen när komponenten renderas
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  //Automatisk bildslideshow
  useEffect(() => {
    if (autoSlide.current) {
      const slideInterval = setInterval(nextSlide, 3000)
      return () => clearInterval(slideInterval)
    }
  }, [currentIndex])


  return ( 
    <>
     <div className="project-layout">
      <h2>{project.name}</h2>

      {/* <div className="project-flex">
          <h3>{t(`${projectKey}.shortDescription`)}</h3>
          <p>{t(`${projectKey}.longDescription`)}</p>
      </div> */}

      <div className="project-flex">
        <h3>{t(project.shortDescription)}</h3>
        <p>{t(project.description)}</p>
        {/* <p>{state.project.longDescription}</p> */}
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
          <img src={project.images[currentIndex]} alt="Carousel image" className="carousel-image" />
        </div>

      </div>
      <div id="back-button">
        <Link to="/projects"><img width="32px" src={arrowUp} alt="Back button " />Back</Link>
      </div>

    <style>{
      `#fab {
        display:none;
      }`
      }
      </style>
    </>
    )
  }

export default Project
