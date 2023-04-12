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
            <ProjectItem img={projectImg1} title="crypto-app" technologies=""/>
            <ProjectItem img={projectImg2} title="dashboard" technologies="Nextjs React"/>
            
            <ProjectItem img={projectImg3} title="portfolio-react" technologies=""/>
            <ProjectItem img={projectImg4} title="social-media-app" technologies=""/>
            <ProjectItem img={projectImg5} title="vite-project" technologies=""/>

        </div>
      
    </div>
  )
}

export default Projects
