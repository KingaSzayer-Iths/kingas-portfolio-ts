import React, { useState, useEffect } from 'react'
import arrowUp from "../icons/arrow-up.png"

const Footer: React.FC = () => {
  const [showButton, setShowButton] = useState(false)

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault()   // hindrar länkens standardbeteende
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleScroll = () => {
    setShowButton(window.scrollY > 300)
  }

  // const scrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: 'smooth' })
  // };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
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
        <p>Copyright &copy; Kinga Szayer, {new Date().getFullYear()}</p>
      </footer>
    </>
  )
}

export default Footer

{/* <footer className="copy-bottom">
  <button
    id="fab"
    className={showButton ? 'visible' : ''}
    onClick={scrollToTop}
    aria-label="Scroll to top"
    style={{ background: "none", border: "none", cursor: "pointer" }}
  >
    <img src={arrowUp} alt="Scroll to top" />
  </button>
  <p>Copyright &copy; Kinga Szayer, {new Date().getFullYear()}</p>
</footer> */}


