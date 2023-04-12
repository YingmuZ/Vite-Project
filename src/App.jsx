import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import bgImg from "./assets/bg.png";
import AboutMe from './components/AboutMe'
import imgMe from "./assets/me.png"
import imgCV from "./assets/CV.png"

function App() {
  

  return (
    <div>
      <Sidenav img={imgCV} />
      <Main img={bgImg}/>

      <AboutMe img={imgMe}/>

      <Skills />

      <Projects />
      
      

      <Contact />
     
    </div>
  )
}

export default App
