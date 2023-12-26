import { useState } from "react";
import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import bgImg from "./assets/bg.png";
import AboutMe from "./components/AboutMe";
import imgMe from "./assets/profile.jpg";
import inset1 from "./assets/inset.jpg";
import inset2 from "./assets/inset1.jpg";
import inset3 from "./assets/inset2.jpg";
import imgCV from "./assets/CV.png";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white/80">
      <Sidenav img={imgCV} />
      <Main img={bgImg} />

      <AboutMe img={imgMe} />
      <Skills img={imgMe} inset1={inset1} inset2={inset2} inset3={inset3} />
      <Projects />

      <Contact />
      <Footer />
    </div>
  );
}

export default App;
