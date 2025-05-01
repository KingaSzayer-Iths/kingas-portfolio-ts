import React from 'react'
import hobbys from './data/hobbys.json'
import react from './icons/react.png'
import javascript from './icons/javascript.png'
import gatsby from './icons/gatsby.png'
import contentfulcms from './icons/contentfulcms.png'
import graphql from './icons/graphql.png'
import css from './icons/css.png'
import html5 from './icons/html5.png'
import { Link } from 'react-router-dom'
import projects from './data/projects.json'
import hobby from './data/hobbys.json'
import { logDOM } from '@testing-library/react'
import Hobby from './hobby'
import homePagePrestanda from './images/prestanda98_met96_tillgSEO100.webp'
import omMigPagePrestanda from './images/omMigSida_prestTillg98_met96_SEO100.png'
import projectPageprestanda from './images/ProjectPage-prestMet96_tillg95_SEO100.png'
import hobbysPagePrestanda from './images/hobbys-prestTillg95_met93_SEO100.png'
import kontaktPagePrestanda from './images/kontaktSida_prest98_tillgSEO100_ met96.png'




function Hobbys() {

  let oldPortfolio = {
      "name":"Portfolio",
      "shortDescription":"GraphQL",
      "longDescription":"Min tidigare porfolio, skapad med React och Gatsby där jag integrerade Contentful för dynamiskt innehållshantering och använde GraphQL för effektiva dataförfrågningar. Designen är kodad i HTML och CSS för att ge en stillren och användarvänlig upplevelse.",
      "images": [
          "./images/portfolio_homepage1_old.webp",
          "./images/portfolio_homepage2_old.webp",
          "./images/portfolio_om_mig_old.webp",
          "./images/portfolio_utbildning_old.webp",
          "./images/projektoversikt_old.webp",
          "./images/figma-styleguide1.webp",
          "./images/figma-komponenter.webp",
          "./images/figma-webshop-oversikt.webp",
          "./images/js-starwars-startpage.webp",
          "./images/js-starwars-loadingpage.webp",
          "./images/js-starwars-detaljpage.webp",
          "./images/react-recipe-startpage.webp",
          "./images/react-recipe-kategori.webp",
          "./images/react-recipe-receptkort.webp",
          "./images/umbraco-dogrunner-pages.webp",
          "./images/vue-ewallet-oversikt.webp",
          "./images/wordpress-hero-page.webp",
          "./images/wordpress-blogg-links.webp",
          "./images/portfolio_old_kontaktsida.webp",
          "./images/old_portfolio_oversikt.webp"
      ],
      "mainImage": "./images/portfolio_old_homepage.webp",
      "github": "https://github.com/KingaSzayer-Iths/portfolio"
      
  }

  let lighthouse = {
    "name":"Lighthouse",
    "shortDescription":"React",
    "longDescription":"Analys av mina portfoliosidor med Google Lighthouse.",
    "images": [
      "./images/prestanda98_met96_tillgSEO100.webp",
      "./images/omMigSida_prestTillg98_met96_SEO100.png",
      "./images/ProjectPage-prestMet96_tillg95_SEO100.png",
      "./images/hobbys-prestTillg95_met93_SEO100.png",
        "./images/kontaktSida_prest98_tillgSEO100_ met96.png"
    ],
    "mainImage": "./images/hobbys-prestTillg95_met93_SEO100.png",
    "github": "https://github.com/KingaSzayer-Iths/portfolio"
}

  return <>
  <div className="skill-hobby">
  <ul className="list-hobby">
  <li><img width="20px"src={react} alt="React icon" />React</li>
  <li><img width="20px"src={javascript} alt="JavaScript icon" />JavaScript</li>
  <li><img width="20px"src={gatsby} alt="Gatsbyjs icon" />Gatsby</li>
  <li><img width="20px"src={contentfulcms} alt="Contentfulcms icon" />Contentful</li>
  <li><img width="20px"src={graphql} alt="GraphQL icon" />GraphQL</li>
  </ul>
  </div>
  
  <section className="hobby-list hobby-groups snake-border">

  <article className="hobby animated-border proj">
  {/* <article className="hobby snake-border"> */}
   
      <div className="icon-container">
        <img src={react} alt="React icon" className="rotating-image"/>
        <img width="31px" src={javascript} alt="JavaScript icon" className="rotating-icon"/>
      </div>
      <h1>Dice - spel </h1>
      {/* <h2>Spel som jag har ängat mig åt på fritiden</h2> */}
      {/* <img width="20px"src={graphql} alt="GraphQL icon" />GraphQL  */}
      <img src="../images/dice-game.webp" alt="Dice game" className="projects-main-image" />
      {/* <img src={mainImage} "../images/vue-ewallet_all_cards.png" alt=""  */}
      <p>
      Rulla tills alla tärningar är likadana. Klicka på varje tärning för att frysa den till dess nuvarande värde mellan kasten. Försök slå ditt eget rekord och förbättra dina resultat varje gång! Lycka till och ha kul med spelet!
      </p>
      <div className="project-links">
        {/* <Link to='/hobby'>Visa mer</Link> */}
        <a href="https://main--wonderful-melomakarona-c986c8.netlify.app">Spela nu</a>
        <a href="https://github.com/KingaSzayer-Iths/tenzies-app">GitHub</a>
      </div>
    
  </article>

    <article className="hobby animated-border proj">
    <div className="icon-container">
    <img src={react} alt="React icon" className="rotating-image"/>
    <img width="31px" src={javascript} alt="JavaScript icon" className="rotating-icon"/>
    </div>
    <h1>Mole - spel</h1>
    {/* <h2>Spel som jag har ängat mig åt på fritiden</h2> */}
    <img src="../images/wackamole-game.webp" alt="Mole game" className="projects-main-image" />
    {/* <img src={mainImage} "../images/vue-ewallet_all_cards.png" alt=""  */}
    <p>
    Slå så många mullvadar "min familj" ;) du kan inom 30 sekunder. Tjäna extra tid genom att slå hårda mullvadar. Vissa mullvadar ger dig extra poäng.
    </p>
      <div className="project-links">
        {/* <Link to='/hobby'>Visa mer</Link> */}
        <a href="https://lively-griffin-3e62f3.netlify.app/">Spela nu</a>
        <a href="https://github.com/KingaSzayer-Iths/whacamole-app">GitHub</a>
      </div>
    </article>

    <article className="hobby animated-border proj">
    <div className="icon-container">
    <img src={react} alt="React icon" className="rotating-image"/>
    <img width="36px" src={gatsby} alt="React icon" className="rotating-icon" />
    <img width="24px" src={contentfulcms} alt="Contentfulcms icon" className="rotating-icon"/>
    <img width="35px"src={graphql} alt="GraphQL icon" className="rotating-icon" />
    </div>
    {/* <div className="hobby-portfolio"> */}
    {/* <div className="project-content-layout"> */}
    <h1>Tidigare portfolio</h1>
    {/* </div> */}
    {/* <h2>Tidigare portfolio skapades i React - Gatsby - Contentful - GraphQL</h2> */}
    <img src="../images/portfolio_old_homepage.png" alt="" className="projects-main-image" />
    {/* <img src={mainImage} "../images/vue-ewallet_all_cards.png" alt=""  */}
    <p>
    Min tidigare porfolio, skapad med React och Gatsby där jag integrerade Contentful för dynamiskt innehållshantering och använde GraphQL för effektiva dataförfrågningar. Designen är kodad i HTML och CSS för att ge en stillren och användarvänlig upplevelse.
    </p>
      <div className="project-links">
        {/* <Link to='/hobby'>Visa mer</Link> */}

       
        <Link to='/hobby' state={{hobby: oldPortfolio}}>Visa mer</Link>

        <a href="https://github.com/KingaSzayer-Iths/portfolio">GitHub</a>
      </div>

    {/* {hobbys.map(hobby =>
      <div className="project-links">
                    <Link to='/hobby' state={{hobby: hobby}}>Visa mer</Link>
                    <a href={hobby.github}>GitHub</a>
                    </div> 
                  )} */}
    {/* </div> */}

    </article>




    <article className="hobby animated-border proj">
    <div className="icon-container">
    <img src={react} alt="React icon" className="rotating-image"/>
    <img width="31px" src={html5} alt="JavaScript icon" className="rotating-icon"/>
    <img width="31px" src={css} alt="JavaScript icon" className="rotating-icon"/>
    {/* <img width="36px" src={gatsby} alt="React icon" className="rotating-icon" />
    <img width="24px" src={contentfulcms} alt="Contentfulcms icon" className="rotating-icon"/>
    <img width="35px"src={graphql} alt="GraphQL icon" className="rotating-icon" /> */}
    </div>
    {/* <div className="hobby-portfolio"> */}
    {/* <div className="project-content-layout"> */}
    <h1>Lighthouse-rapport av min portfolio</h1>
    {/* </div> */}
    {/* <h2>Tidigare portfolio skapades i React - Gatsby - Contentful - GraphQL</h2> */}

    {/* <div className="image-prestanda"> */}
    <div className="home-prestanda">
  <img width="100%" src={lighthouse.mainImage} alt="bild på home page prestanda" />
  </div>
    {/* <img src="../images/portfolio_old_homepage.png" alt="" className="projects-main-image" /> */}


    {/* <img src={mainImage} "../images/vue-ewallet_all_cards.png" alt=""  */}
    <p>
    Jag har analyserat mina portfoliosidor med Google Lighthouse för att säkerställa hög kvalitet. Resultaten visar värden inom Prestanda, Tillgängighet, Bästa metoder och SEO.
    </p>
      <div className="project-links">
        {/* <Link to='/hobby'>Visa mer</Link> */}

       
        <Link to='/hobby' state={{hobby: lighthouse}}>Visa mer</Link>

        <a href="https://github.com/KingaSzayer-Iths/portfolio">GitHub</a>
      </div>

    {/* {hobbys.map(hobby =>
      <div className="project-links">
                    <Link to='/hobby' state={{hobby: hobby}}>Visa mer</Link>
                    <a href={hobby.github}>GitHub</a>
                    </div> 
                  )} */}
    {/* </div> */}

    </article>



    </section>
    
    {/* <section className="project-groups project-list sliding-project">
    {hobbys.map(hobby =>    
      <article id={hobby.name} className="proj list-project sliding-list-project" key={hobby.name}>
                    <h2>{hobby.name}</h2>
                    <img src={hobby.mainImage} alt="" className="projects-main-image" />
                    <h3>{hobby.shortDescription}</h3>
                    <h3>{hobby.longDescription}</h3>  
      <div className="project-links">
      <Link to='/hobby' state={{hobby: hobby}}>Visa mer</Link>
      <a href={hobby.github}>GitHub</a>
      </div>
      </article> 
      )}
  </section> */}
  </>
}

  export default Hobbys

