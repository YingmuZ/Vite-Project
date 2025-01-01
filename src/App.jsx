import { useState, useEffect } from "react";
import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import MouseHover from "./components/MouseHover";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import bgImg from "./assets/bg.png";
import AboutMe from "./components/AboutMe";
import imgMe from "./assets/profile.jpg";
import inset1 from "./assets/inset.jpg";
import inset2 from "./assets/inset1.jpg";
import inset3 from "./assets/inset2.jpg";
import kitty from "./assets/test.svg";
import imgCV from "./assets/CV.png";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    // Store the original title
    const originalTitle = document.title;

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        // Change title when the tab is hidden
        document.title = "Waiting...";
      } else {
        // Restore the original title when the tab becomes visible again
        document.title = originalTitle;
      }
    };

    // Add the event listener for visibility change
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div className="bg-white/80">
      <MouseHover img={kitty} />
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
