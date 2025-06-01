// import React from 'react'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import errorImage from './images/404 Error-amico.svg'
// import errorImage from './images/404-tech.png'



const NotFound: React.FC  = () => {
  const { t } = useTranslation()

  useEffect(() => {
    const canvas = document.getElementById('matrix-canvas') as HTMLCanvasElement
    if (!canvas) return
    
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    if (!ctx) return

    // Mindre "best practice"
    // const canvas = document.getElementById('matrix-canvas') as HTMLCanvasElement
    // const ctx = canvas.getContext('2d')!
    
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const binary = '01'
    const fontSize = 14
    const columns = canvas.width / fontSize
    const drops: number[] = Array(Math.floor(columns)).fill(1)

    function drawMatrix() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.02)' // mer genomskinlig svart bakgrund
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      ctx.fillStyle = '#0F0'
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = binary[Math.floor(Math.random() * binary.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }

        drops[i]++
      }
    }

    const interval = setInterval(drawMatrix, 50)

    return () => clearInterval(interval)
  }, [])


  return (
    <>
      <canvas id="matrix-canvas"></canvas>
      <div className="notfound-container">
        <div className="notfound-content">
          <img src={errorImage} alt="404 illustration" className="notfound-image" />
          <h1 className="glitch" data-text="Oops!">Oops!</h1>
          <p>{t('notFound.message')}</p>
          {/* <p>Det du letar efter kan ha blivit felplacerat i långtidsminnet</p> */}
          <Link to="/" className="home-notfound-button">{t('notFound.backToHome')}</Link>
        </div>
      </div>
    </>
  )
}

export default NotFound



// const NotFound = () => {
//   return (
    
//     <div className="notfound-container">
//       <img src={errorImage} alt="404 illustration" className="notfound-image" />
//       <h1 className="glitch" data-text="404">404</h1>
//       <p>Sidan kunde inte hittas.</p>
//       {/* <a href="/" className="back-button">Till startsidan</a> */}
//       <Link to="/" className="home-notfound-button">Tillbaka till startsidan</Link>
//     </div>
//   )
// }
