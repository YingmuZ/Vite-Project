import React from 'react'
import ProjectItem from './ProjectItem'
import projectImg from "../assets/project.png"

const Projects = () => {
  return (
    <div  id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-black'>Projects</h1>
        <p className='text-center py-8'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At ut iusto libero laudantium consectetur ipsum sapiente totam, minus nihil cumque perspiciatis voluptate aliquam cum, praesentium sed quae ipsa ad non.
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={projectImg} title="app"/>
            <ProjectItem img={projectImg} title="app"/>
            <ProjectItem img={projectImg} title="app"/>
            <ProjectItem img={projectImg} title="app"/>

        </div>
      
    </div>
  )
}

export default Projects
