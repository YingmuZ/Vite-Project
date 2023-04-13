import React from 'react'
import ProjectItem from './ProjectItem'
import projectImg1 from "../assets/crypto-app.png"
import projectImg2 from "../assets/next-dash.png"
import projectImg3 from "../assets/portfolio-react.png"
import projectImg4 from "../assets/social-media.png"
import projectImg5 from "../assets/vite-project.png"

const Projects = () => {
  return (
    <div  id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-black'>Projects</h1>
        <p className='text-center py-8'>
            The following are some examples of what I have done.
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={projectImg1} link="https://github.com/YingmuZ/Crypto-App-Redux" title="crypto-app" technologies="React Redux RapidAPI"/>
            <ProjectItem img={projectImg2} link="https://github.com/YingmuZ/Dash-NextJS" title="ecommerce-dashboard" technologies="Next.js React TailwindCSS Chart.js"/>
            
            <ProjectItem img={projectImg3} link="https://github.com/YingmuZ/Portfolio-Site-React" title="portfolio-website" technologies="React Framer-Motion React-Hook-Form"/>
            <ProjectItem img={projectImg4} link="https://github.com/YingmuZ/Social-Media-App" title="social-media-app" technologies="React MUI MongoDB"/>
            <ProjectItem img={projectImg5} link="https://github.com/YingmuZ/vite-project" title="personal-website" technologies="Vite.js React TailwindCSS"/>

        </div>
      
    </div>
  )
}

export default Projects
