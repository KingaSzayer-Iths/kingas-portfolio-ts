import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NotFound from './NotFound'
import Nav from './components/Nav'
import Home from './home'
import About from './about'
import Projects from './projects'
import Hobbys from './hobbys'
import Contact from './contact'
import Footer from './components/Footer'
import Project from './project'
import './App.css'
import Hobby from './hobby'
import Picture from './components/Picture'


const App = () => {
  return (
    <Router>
      <div className="wrapper">
        <div className="header-container">
          <div className="logo anim">Ks</div>
          <Nav />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/hobbys" element={<Hobbys />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project  />} />
          <Route path="/hobby" element={<Hobby />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App