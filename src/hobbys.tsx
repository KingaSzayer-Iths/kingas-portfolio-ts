import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './i18n'
// Import icons and images
import react from './icons/react.png'
import javascript from './icons/javascript.png'
import gatsby from './icons/gatsby.png'
import contentfulcms from './icons/contentfulcms.png'
import graphql from './icons/graphql.png'
import css from './icons/css.png'
import html5 from './icons/html5.png'
import typescript from './icons/typescript.png'

import homePagePrestanda from './images/prestanda98_met96_tillgSEO100.webp'
import omMigPagePrestanda from './images/omMigSida_prestTillg98_met96_SEO100.png'
import projectPageprestanda from './images/ProjectPage-prestMet96_tillg95_SEO100.png'
import hobbysPagePrestanda from './images/hobbys-prestTillg95_met93_SEO100.png'
import kontaktPagePrestanda from './images/kontaktSida_prest98_tillgSEO100_ met96.png'

import hobbys from './data/hobbys.json'
import projects from './data/projects.json'
import hobby from './data/hobbys.json'
import { logDOM } from '@testing-library/react'
import Hobby from './hobby'



  type HobbyType = {
    name: string;
    shortDescription: string;
    longDescription: string;
    images: string[];
    mainImage: string;
    github: string;
  }

  const Hobbys: React.FC = () => {
    const { t } = useTranslation()

    const oldPortfolio: HobbyType = {
      name: t('hobbies.oldPortfolio.name'),
      shortDescription: t('hobbies.oldPortfolio.shortDescription'),
      longDescription: t('hobbies.oldPortfolio.longDescription'),
      "images": [
          "./images/portfolio_homepage1_old.webp",
          "./images/portfolio_homepage2_old.webp",
          "./images/portfolio_om_mig_old.webp",
          // "./images/portfolio_utbildning_old.webp",
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

  {/* Lighthouse */}
    const lighthouse: HobbyType = {
      name: "Lighthouse",
      shortDescription: t('hobbies.lighthouse.shortDescription'),
      longDescription: t('hobbies.lighthouse.longDescription'),
      images: [
        homePagePrestanda,
        omMigPagePrestanda,
        projectPageprestanda,
        hobbysPagePrestanda,
        kontaktPagePrestanda
    ],
      mainImage: hobbysPagePrestanda,
      github: "https://github.com/KingaSzayer-Iths/portfolio"
  }

  return (
    <>
      <div className="skill-hobby">
        <ul className="list-hobby">
          <li><img width="20px"src={react} alt="React icon" className="rotating-image" />React</li>
          <li><img width="32px"src={javascript} alt="JavaScript icon" className="anim" />JavaScript</li>
          <li><img width="20px"src={gatsby} alt="Gatsbyjs icon" className="rotating-image" />Gatsby</li>
          <li><img width="32px"src={contentfulcms} alt="Contentfulcms icon" className="anim" />Contentful</li>
          <li><img width="20px"src={graphql} alt="GraphQL icon" className="rotating-image" />GraphQL</li>
          <li><img width="32px"src={typescript} alt="TypeScript icon" className="anim" />TypeScript</li>
        </ul>
      </div>
  


  <section className="hobby-list hobby-groups snake-border">

    {/* Dice Game */}
    <article className="hobby animated-border proj">
        <div className="icon-container">
          <img src={react} alt="React icon" className="rotating-image"/>
          <img width="31px" src={javascript} alt="JavaScript icon" className="rotating-icon"/>
        </div>
        <h1>{t('hobbys.dice.title')}</h1>
          <img src="../images/dice-game.webp" alt="Dice game" className="projects-main-image" />
          <p>{t('hobbies.dice.longDescription')}</p>
        <div className="project-links">
          <a href="https://main--wonderful-melomakarona-c986c8.netlify.app">{t('projects.links.play')}</a>
          <a href="https://github.com/KingaSzayer-Iths/tenzies-app">GitHub</a>
        </div>
    </article>


    {/* Mole Game */}
    <article className="hobby animated-border proj">
      <div className="icon-container">
        <img src={react} alt="React icon" className="rotating-image"/>
        <img width="31px" src={javascript} alt="JavaScript icon" className="rotating-icon"/>
      </div>

      <h1>{t('hobbys.mole.title')}</h1>
        <img src="../images/wackamole-game.webp" alt="Mole game" className="projects-main-image" />
        <p>{t('hobbies.mole.longDescription')}</p>
      <div className="project-links">
          {/* <Link to='/hobby'>Visa mer</Link> */}
          <a href="https://lively-griffin-3e62f3.netlify.app/">{t('projects.links.play')}</a>
          <a href="https://github.com/KingaSzayer-Iths/whacamole-app">GitHub</a>
      </div>
    </article>


    {/* Old Portfolio */}
    <article className="hobby animated-border proj">
      <div className="icon-container">
        <img src={react} alt="React icon" className="rotating-image"/>
        <img width="36px" src={gatsby} alt="React icon" className="rotating-icon" />
        <img width="24px" src={contentfulcms} alt="Contentfulcms icon" className="rotating-icon"/>
        <img width="35px"src={graphql} alt="GraphQL icon" className="rotating-icon" />
      </div>

      <h1>{t('hobbys.oldPortfolio.title')}</h1>
        <img src="../images/portfolio_old_homepage.png" alt="" className="projects-main-image" />
          <p>{t('hobbies.oldPortfolio.longDescription')}</p>
        <div className="project-links">
          <Link to='/hobby' state={{hobby: oldPortfolio}}>{t('projects.links.viewMore')}</Link>
          <a href="https://github.com/KingaSzayer-Iths/portfolio">GitHub</a>
        </div>
    </article>

    {/* Lighthouse */}
    <article className="hobby animated-border proj">
      <div className="icon-container">
        <img src={react} alt="React icon" className="rotating-image"/>
        <img width="31px" src={html5} alt="JavaScript icon" className="rotating-icon"/>
        <img width="31px" src={css} alt="JavaScript icon" className="rotating-icon"/>
        <img width="22px"src={typescript} alt="TypeScript icon" className="rotating-icon"/>
      </div>
      <h1>{t('hobbys.lighthouse.title')}</h1>
        <div className="home-prestanda">
        <img width="100%" src={lighthouse.mainImage} alt="bild på home page prestanda" />
      </div>
        <p>{t('hobbies.lighthouse.longDescription')}</p>
      <div className="project-links">
        {/* <Link to='/hobby'>Visa mer</Link> */}

        <Link to='/hobby' state={{hobby: lighthouse}}>{t('projects.links.viewMore')}</Link>
        <a href="https://github.com/KingaSzayer-Iths/portfolio">GitHub</a>
      </div>
    </article>
  </section>
  </>
  )
}

  export default Hobbys

