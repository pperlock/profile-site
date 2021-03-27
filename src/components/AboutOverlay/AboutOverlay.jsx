import React, {useRef, useEffect} from 'react';
import './AboutOverlay.scss';

/**
 * Props Passed in from Overlay
 * @param {Boolean} showOverlay
 */

function AboutOverlay({showOverlay}) {


    return (

        <div className="about__overlay"> 
            <div className="about__overlay-who">
                <h2 className={showOverlay ? "about__overlay-title animate-type" : "about__overlay-title"}>Who is She?</h2>
                <p className="about__overlay-text">I am a newly minted <span className="about__overlay-text--emphasize"> Full Stack Web Developer </span> looking to make her mark in the <span className="about__overlay-text--emphasize"> Web Development </span> world.  
                I proudly embrace my diverse background and the lessons I have learned from it.  My path may seem disjointed to some, but it has created the <span className="about__overlay-text--emphasize">adaptable, multi-talented, well-rounded individual </span> I am today.</p>
            </div>
            
            <img className="about__overlay-image"src="/images/climbing-patti.jpg" alt="patti"/>
            
            <div className="about__overlay-what">
                <h2 className={showOverlay ? "about__overlay-title animate-type" : "about__overlay-title"}>What Can You Expect From Her?</h2>    
                <p className="about__overlay-text">My work style is extremely <span className="about__overlay-text--emphasize">flexible</span>. Owing to my <span className="about__overlay-text--emphasize">organization skills </span> and <span className="about__overlay-text--emphasize">efficiency</span>, I have a track record of successfully juggling multiple projects at once on tight deadlines.  
                Left to my own devices, I have the ability to push myself to produce <span className="about__overlay-text--emphasize"> top quality work with limited direction</span>.  
                At the same time, <span className="about__overlay-text--emphasize">I play well with others </span> in a collaborative <span className="about__overlay-text--emphasize">agile team </span>environment where I can take the reigns and <span className="about__overlay-text--emphasize">lead</span> or pull back and have another person lead the way.  
                My process from start to finish is very <span className="about__overlay-text--emphasize">detailed-oriented</span> and <span className="about__overlay-text--emphasize">quality driven </span> with a focus on <span className="about__overlay-text--emphasize">user experience</span> as well as <span className="about__overlay-text--emphasize">code quality and reusability</span>.  
                Using the two words <span className="about__overlay-text--emphasize">“What” </span> and <span className="about__overlay-text--emphasize">“if”</span> are my favourite way to start a project, a sentence and a day.</p>
            </div>
        </div>
    )
}

export default AboutOverlay
