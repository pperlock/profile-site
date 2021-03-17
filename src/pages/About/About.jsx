import React from 'react'
import './About.scss';

function About (){
    return (
        <>
            <h2 className="about__tagline"> Builder, creator, problem solver, and life long learner adventuring through the Web Development landscape. </h2>
            <p className="about__journey"><a href="#skills" className="about__journey-link">Follow me on my journey</a></p>
            {/* <p className="about__journey"><p className="about__journey-link">Follow me on my journey</p></p> */}
        </>
    )
}

export default About
