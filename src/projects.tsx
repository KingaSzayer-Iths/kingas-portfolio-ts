import React from 'react'
import projects from './data/projects.json'
import figma from './icons/figma.png'
import react from './icons/react.png'
import vue from './icons/vue.png'
import javascript from './icons/javascript.png'
import umbraco from './icons/umbraco.png'
import wordpress from './icons/wordpress.png'
import { Link } from 'react-router-dom'
// import './ButtonList.css'




function Projects() {
  return <>
  <article className="project-container">
  <div className="project-header">
    <h1>Mina projekt</h1>
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
    {projects.map(project =>
                  <article id={project.name} className="proj list-project sliding-list-project" key={project.name}>
                    <h2>{project.name}</h2>
                    <img src={project.mainImage} alt="" className="projects-main-image" />
                    <h3>{project.shortDescription}</h3>
                    <p>{project.longDescription}</p>
                    
                    <div className="project-links">
                    <Link to='/project' state={{project: project}}>Visa mer</Link>
                    <a href={project.github}>GitHub</a>
                    
          
                    </div>
                  </article> 
                  )}
  </section>
  </article>
  </>
}

export default Projects

// {
//   "name":"WordPress",
//   "shortDescription":"WordPress - Polska desserter",
//   "longDescription":"WordPress projektet - en dessertblogg. Bilderna visar hero sidan, sidan med blogginläggen med en sidomenu med länkar till kategorier, arkiv och sökfunktion samt en bild på kontaktsidan.",
//   "bilder": [
//       "x",
//       "y"
//   ]

// }