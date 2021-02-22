import React from 'react';
import './AboutOverlay.scss';

function AboutOverlay({showOverlay}) {
    return (

        <div className="about__overlay"> 
            <h2 className={showOverlay ? "about__overlay-title animate-type" : "about__overlay-title"}>Who is She?</h2>
            <div className="about__overlay-who">
                <p className="about__overlay-text">I am a newly minted <span className="about__overlay-text--emphasize"> Full Stack Web Developer </span> looking to make her mark in the <span className="about__overlay-text--emphasize"> Web Development </span> world.  
                I proudly embrace my diverse background and the lessons I have learned from it.  My path may seem disjointed to some, but it has created the <span className="about__overlay-text--emphasize">intriguing, multi-talented, well-rounded individual </span> I am today.</p>
                <img className="about__overlay-who-image"src="/images/climbing-patti.jpg"/>
            </div>

            {/* <h2 className="about__overlay-title">Where Did She Come From?</h2>
            <div>
                <p className="about__overlay-text">My time in science and research studying geophysics taught me that I wanted to move at a faster pace in a malleable, exciting field.  </p>
                <p className="about__overlay-text">Dog training allowed me to explore a passion project type career working with animals outdoors but it left me lonely and mentally unstimulated, longing for a team environment.</p>
                <p className="about__overlay-text">As a Database Administrator I found myself constantly reaching for ways to learn new skills and searching for projects that allowed me to use my object-oriented programming knowledge.</p>
                <p className="about__overlay-text">So here you find me, in an exciting, fast-paced, changing field that pushes my imagination to its limits, and challenges my brain daily through constant learning and problem solving.</p>
            </div> */}

            <h2 className={showOverlay ? "about__overlay-title animate-type" : "about__overlay-title"}>What Can You Expect From Her?</h2>
            <p className="about__overlay-text">My work style is extremely <span className="about__overlay-text--emphasize">flexible</span>. Owing to my <span className="about__overlay-text--emphasize">organization skills </span> and <span className="about__overlay-text--emphasize">efficiency</span>, I have a track record of successfully juggling multiple projects at once on tight deadlines.  
            Left to my own devices, I have the ability to push myself to produce <span className="about__overlay-text--emphasize"> top quality work with limited direction</span>.  
            At the same time, <span className="about__overlay-text--emphasize">I play well with others </span> in a collaborative <span className="about__overlay-text--emphasize">agile team </span>environment where I can take the reigns and <span className="about__overlay-text--emphasize">lead</span> or pull back and have another person lead the way.  
            My process from start to finish is very <span className="about__overlay-text--emphasize">detailed-oriented</span> and <span className="about__overlay-text--emphasize">quality driven </span> with a focus on <span className="about__overlay-text--emphasize">user experience</span> as well as <span className="about__overlay-text--emphasize">code quality and reusability</span>.  
            Using the two words <span className="about__overlay-text--emphasize">“What” </span> and <span className="about__overlay-text--emphasize">“if”</span> are my favourite way to start a project, a sentence and a day.</p>
        </div>
    )
}

export default AboutOverlay
