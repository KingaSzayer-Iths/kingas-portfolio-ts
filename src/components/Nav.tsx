import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Hamburger from './Hamburger'
import { useTranslation } from 'react-i18next'

const Navigation: React.FC = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false)
  const { i18n, t } = useTranslation()
  

  const changeLanguage = (lng: string): void => {
    i18n.changeLanguage(lng)
  }

  const closeMenu = (): void => setHamburgerOpen(false)
  const toggleHamburger = (): void => setHamburgerOpen(prev => !prev)
  // const closeMenu = () => setHamburgerOpen(false);
  // const toggleHamburger = () => setHamburgerOpen(!hamburgerOpen)

  return (
    <>
      <nav>
        <div className="language-switcher">
          <img
            src="/flags/se.png"
            alt="Svenska"
            className={`flag ${i18n.language === 'sv' ? 'active' : ''}`}
            onClick={() => changeLanguage('sv')}
          />
          <img
            src="/flags/en.png"
            alt="English"
            className={`flag ${i18n.language === 'en' ? 'active' : ''}`}
            onClick={() => changeLanguage('en')}
          />
          <img
            src="/flags/pl.png"
            alt="Polish"
            className={`flag ${i18n.language === 'pl' ? 'active' : ''}`}
            onClick={() => changeLanguage('pl')}
          />
        </div>

        <ul className="navigation">
          <li><NavLink onClick={closeMenu} to="/" className="nav-link">{t('nav.home')}</NavLink></li>
          <li><NavLink onClick={closeMenu} to="/about" className="nav-link">{t('nav.about')}</NavLink></li>
          <li><NavLink onClick={closeMenu} to="/projects" className="nav-link">{t('nav.projects')}</NavLink></li>
          <li><NavLink onClick={closeMenu} to="/hobbys" className="nav-link">{t('nav.hobbies')}</NavLink></li>
          <li><NavLink onClick={closeMenu} to="/contact" className="nav-link">{t('nav.contact')}</NavLink></li>
        </ul>

        <div className="hamburger" onClick={toggleHamburger}>
          <Hamburger isOpen={hamburgerOpen} />
        </div>
      </nav>

      <style>
        {`
          // .language-switcher {
          //   display: flex;
          //   gap: 10px;
          //   align-items: center;
          //   position: absolute;
          //   top: 10px;
          //   right: 60px;
          //   z-index: 100;
          // }

          .flag {
            width: 28px;
            height: 20px;
            cursor: pointer;
            border: 2px solid transparent;
            transition: transform 0.2s, border-color 0.2s;
          }

          .flag:hover {
            transform: scale(1.1);
          }

          .flag.active {
            border-color: #fff;
            box-shadow: 0 0 5px #fff;
          }

          @media only screen and (max-width: 480px) {
            .navigation {
              display: ${hamburgerOpen ? 'flex' : 'none'};
              width: 36vw;
              margin: 50px 5px 0 0;
              flex-direction: column;
              gap: 5px;
              position: absolute;
              right: 0px;
              font-size: 1.5rem;
              z-index: 99;
              border-radius: 10px;
            }

            .navigation a {
              color: whitesmoke;
            }
          }
        `}
      </style>
    </>
  )
}

export default Navigation




