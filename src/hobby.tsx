import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import arrowUp from "./icons/arrow-up.png"
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './i18n'




type HobbyType = {
  name: string;
  shortDescription: string;
  images: string[];
}

type LocationState = {
  state: {
    hobby: HobbyType;
  }
}


function Hobby() {
  const { t } = useTranslation()
  const location = useLocation() as LocationState
  const hobby = location.state.hobby

      // const { state }: any = useLocation();
  
      const [currentIndex, setCurrentIndex] = useState<number>(0)
      const autoSlide = useRef<boolean>(true)

      const [showButton, setShowButton] = useState(false)
  
      const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % hobby.images.length)
      }
      const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? hobby.images.length -1 : currentIndex -1)
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
          const slideInterval:any = setInterval(nextSlide, 3000)
          return () => clearInterval(slideInterval)
        }
      }, [currentIndex, 3000])

      useEffect(() => {
        const handleScroll = () => {
          setShowButton(window.scrollY > 300)
        }
    
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
      }, [])
    
      const scrollToTop = (e: React.MouseEvent) => {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
      
  
  
    return (
      <>
      <div className="project-content-layout">
      <h2>{t(hobby.name)}</h2>
      {/* <h3>{state.hobby.shortDescription}</h3> */}
      <div className="project-flex">
      <p>{t(hobby.shortDescription)}</p>
      </div>
      </div>

      <div className="carousel-controls">
        <button className="carousel-button prev" onClick={prevSlide}>&#10094;</button>
        <button className="carousel-button next" onClick={nextSlide}>&#10095;</button>
      </div>
      <div className="carousel-container">
        <div className="carousel-images">
          <img src={hobby.images[currentIndex]} alt="Carousel image" className="carousel-image" />

        </div>
      </div>

      <div id="back-button">
      <Link  to="/hobbys"><img width="32px" src={arrowUp} alt="Back button " />Back</Link>
      </div>

      {/* Scroll-up-knapp arrowUp + Footer */}
      <footer className="copy-bottom">
        <a
          href="#"
          id="fab"
          className={showButton ? 'visible' : ''}
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <img src={arrowUp} alt="Scroll to top" />
        </a>
        {/* <p>Copyright &copy; Kinga Szayer, {new Date().getFullYear()}</p> */}
      </footer>

      {/* <style>{
      `#fab {
        display:none;
    }`
    }</style> */}
    </>
    )
  }
  
  export default Hobby