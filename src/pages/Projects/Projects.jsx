import React from 'react'

import './Projects.scss';

function Projects({match}) {
    return (
        <>
            <div className = "projects__content"> 
                <div className = "projects__list">
                    <div className="projects__list-project"  data-aos-anchor=".projects" data-aos="flip-up" data-aos-offset="500" data-aos-duration="2000">
                        <img className="projects__list-img" src="/images/plan2train.png"/>
                        <a> <button className="projects__list-first"> DEMO </button></a>
                        <a href="https://plan2train.herokuapp.com" target="_blank"> <button className="projects__list-second"> VISIT </button> </a>
                        <a href="https://github.com/pperlock/plan2train"> <button className="projects__list-third"> GITHUB </button> </a>
                    </div>
                    <div className="projects__list-project" data-aos-anchor=".projects" data-aos="flip-down" data-aos-delay="300" data-aos-offset="500" data-aos-duration="2000">
                        <img className="projects__list-img" src="/images/plan2train.png"/>
                        <a> <button className="projects__list-first" target="_blank"> Github </button> </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects
