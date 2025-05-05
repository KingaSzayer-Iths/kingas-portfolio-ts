import React from 'react'
import bild from './images/portfolio_home.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faCode, faCss3Alt } from '@fortawesome/free-solid-svg-icons'
// import { fa-brands fa-css3 } from '@fortawesome/free-solid-svg-icons'
//import { faHtml5 } from '@fortawesome/free-solid-svg-icons'
import bildprestanda from './images/prestanda98_met96_tillgSEO100.webp'
import css from './icons/css.png'
import react from './icons/react.png'
import html5 from './icons/html5.png'
import figma from './icons/figma.png'
import ux from './icons/ux.png'
import vue from './icons/vue.png'
import github from './icons/github.png'
import cms from './icons/cms.png'
import gatsby from './icons/gatsby.png'
import graphql from './icons/graphql.png'
import contentfulcms from './icons/contentfulcms.png'
import umbraco from './icons/umbraco.png'
import wordpress from './icons/wordpress.png'
import php from './icons/php.png'
import typescript from './icons/typescript.png'
import javascript from './icons/javascript.png'

function Home() {
  return <>
  <section className="home-container">
  <article className="container">
  <div className="page-title page-title-ipad">
  <div className="sliding-title">
    <h1><span>KINGA</span> SZAYER</h1>
  </div>
  <div className="sliding-word"> 
    <h2><span className="letter">F</span>
    <span className="letter">r</span>
    <span className="letter">o</span>
    <span className="letter">n</span>
    <span className="letter">t</span>
    <span className="letter">e</span>
    <span className="letter">n</span>
    <span className="letter">d</span>
    <span className="letter">-</span>
    <span className="letter">u</span>
    <span className="letter">t</span>
    <span className="letter">v</span>
    <span className="letter">e</span>
    <span className="letter">c</span>
    <span className="letter">k</span>
    <span className="letter">l</span>
    <span className="letter">a</span>
    <span className="letter">r</span>
    <span className="letter">e</span>
    {/* <span className="letter">.</span> */}
    </h2>
  </div>
  <div className=" sliding-text">
    <p style={{width:"100%"}}>Jag är en frontend-utvecklare med en passion för att skapa moderna, stillrena och användarvänliga webbaplikationer. Jag lär mig snabbt och är ständigt nyfiken på att bredda mina kunskaper och färdigheter. Mitt mål är att bidra med kreativitet och teknisk expertis till ett team för att skapa välgjorda och innovativa lösningar.</p>
  </div> 

  </div>
  </article>
  <div className="image-anim">
  <article className="image-container sliding-image">
  <div className="image-top ">
  <img width="350px" src={bild} alt="Bild på mig" />
  </div>
  </article>
  </div>
  </section>
  <div className="line">
  </div>

  <p className="skills-title">Mina erfarenheter</p>
  <div className="skills-list">
  <div className="skill-group">
  {/* <div className="image-prestanda">
  <img width="100%" src={bildprestanda} alt="bild på prestanda" />
  </div> */}

  <ul className="list">
    <li><img width="20px"src={html5} alt="Html icon" />Html</li>
    <li><img width="20px"src={css} alt="Css icon" />CSS</li>
    <li><img width="20px"src={react} alt="React icon" />React</li>
    <li><img width="20px"src={javascript} alt="JavaScript icon" />JavaScript</li>
  </ul>
  <ul className="list">
    <li><img width="20px"src={figma} alt="Figma icon" />Figma</li>
    <li><img width="20px"src={ux} alt="UX icon" />UX&UI</li>
    <li><img width="20px"src={vue} alt="Vue icon" />Vue</li>
    <li><img width="20px"src={github} alt="Github icon" />Github</li>
  </ul>
  <ul className="list">
  <li><img width="20px"src={cms} alt="CMS icon" />CMS</li>
  <li><img width="20px"src={gatsby} alt="Gatsbyjs icon" />Gatsby</li>
  <li><img width="20px"src={graphql} alt="GraphQL icon" />GraphQL</li>
  <li><img width="20px"src={contentfulcms} alt="Contentfulcms icon" />Contentful</li>
  </ul>
  <ul className="list">
  <li><img width="20px"src={umbraco} alt="Umbraco icon" />Umbraco</li>
  <li><img width="20px"src={wordpress} alt="WordPress icon" />WordPress</li>
  <li><img width="20px"src={php} alt="PHP icon" />PHP</li>
  <li><img width="20px"src={typescript} alt="TypeScript icon" />TypeScript</li>
  </ul>
  
  </div>
  <div className="image-prestanda">
  <img width="100%" src={bildprestanda} alt="bild på home page prestanda" />
  </div>

  </div>
  
  </>
}

export default Home