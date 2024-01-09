import React from 'react'
import Intro from '../Components/Intro/Intro'
import Experience from '../Components/Experience/Experience'
import Skills from '../Components/Skills/Skills'
import { data } from '../data'
import ProjectList from '../Components/Projects/ProjectList'
import Work from '../Components/Contact/Work'

const Home = () => {
    const {projects, skills} = data
  return (
    <div>
        <Intro/>
        <Experience/>
        <Skills skills = {skills}/>
        <ProjectList projects={projects.slice(0,3)} />
        <Work/>
    </div>
  )
}

export default Home
