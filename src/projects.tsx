import React from 'react'
import projectsData from './data/projects.json'
import figma from './icons/figma.png'
import react from './icons/react.png'
import vue from './icons/vue.png'
import javascript from './icons/javascript.png'
import umbraco from './icons/umbraco.png'
import wordpress from './icons/wordpress.png'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './i18n'


interface Project {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  mainImage: string;
  github: string;
  description: string;
  tech: string;
}

const techIcons: { [key: string]: string } = {
  figma,
  react,
  vue,
  javascript,
  umbraco,
  wordpress
}

const getTechIcon = (tech: string) => {
  return techIcons[tech] || ''
}

const projects = projectsData as Project[]


function Projects() {
  const { t } = useTranslation()


  return (
    <>
      <article className="project-container">
        <div className="project-header">
          <h1>{t('projects.header')}</h1>
        </div>
        <div className="project-group">
          <ul className="list button-list">
            <li className="list-button"><img width="20px"src={figma} alt="Figma icon" /><a href='#Figma'>Figma</a></li>
            <li className="list-button"><img width="20px"src={react} alt="React icon" /><a href='#React'>React</a></li>
          </ul>
          <ul className="list">
            <li className="list-button"><img width="20px"src={vue} alt="Vue icon" /><a href='#Vue'>Vue</a></li>
            <li className="list-button"><img width="20px"src={javascript} alt="JavaScript icon" /><a href='#Java Script'>JavaScript</a></li>
          </ul>
          <ul className="list">
            <li className="list-button"><img width="20px"src={umbraco} alt="Umbraco icon" /><a href='#Umbraco'>Umbraco</a></li>
            <li className="list-button"><img width="20px"src={wordpress} alt="WordPress icon" /><a href='#WordPress'>WordPress</a></li>
          </ul>
        </div>

        <section className="project-groups project-list sliding-project">
          {projects.map((project => (
            <article id={project.name} className="proj list-project sliding-list-project" key={project.id}>
              <h2>
                {project.tech && (
                  <img src={getTechIcon(project.tech)} alt={`${project.tech} icon`} width="32" className="anim" style={{ marginRight: '10px', verticalAlign: 'middle' }} />
                )}
                {t(project.name)}
              </h2>

              {/* <h2>{t(project.name)}</h2> */}
              <img src={project.mainImage} alt="Main Image" className="projects-main-image anim" />
              {/* <img
                src={project.mainImage}
                alt={`${project.name} main image`}
                width="400"
                height="225"
                loading="lazy"
                className="projects-main-image"
              /> */}
              <h3>{project.shortDescription}</h3>
              <p>{t(project.longDescription)}</p>
              
              <div className="project-links">
              <Link to='/project' state={{project: project}}>{t('projects.links.viewMore')}</Link>
              <a href={project.github}>GitHub</a>
              </div>
            </article> 
          )))}
        </section>
    </article>
  </>
  )
}

export default Projects
