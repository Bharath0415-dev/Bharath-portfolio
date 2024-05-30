import React from 'react'
import "./projects.css"
import ProjectCard from '../../common/ProjectCard'
import linkedInclonelogo from "../../assets/linkedin-clone-logo.png"
import facialLogo from "../../assets/facial-logo.jpg"
import vehichleLogo from "../../assets/second-hand-logo.png"

function Projects() {
  return (
<section id="projects" className='container1'>
    <h1 className='sectionTitle'>Projects</h1>
    <div className='projectsContainer'>
        <ProjectCard
            title="LinkedIn clone"
            link="https://github.com/Bharath0415-dev/LinkedIn-Clone"
            desc="A clone of LinkedIn made using ReactJS and Firebase"
            src={linkedInclonelogo}
        />

        <ProjectCard
            title="Facial Recognition"
            link="https://github.com/Bharath0415-dev/Facial-recognition-using-convolutional-neural-network"
            desc="Using CNN Deep Learning"
            src={facialLogo}
        />

        <ProjectCard
            title="Price Pridictor"
            link="https://github.com/Bharath0415-dev/Second-hand-vehicle-price-pridiction"
            desc="Second Hand Vehicle price predictor"
            src={vehichleLogo}
        />

        
    </div>
    
</section>  )
}

export default Projects