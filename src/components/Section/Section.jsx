import React, {useState, useRef} from 'react';
import "./Section.scss";

import Overlay from '../../components/Overlay/Overlay';
import PageTitle from '../../components/PageTitle/PageTitle';
import About from '../../pages/About/About';
import Skills from '../../pages/Skills/Skills';
import Experience from '../../pages/Experience/Experience';
import Projects from '../../pages/Projects/Projects';
import Contact from '../../pages/Contact/Contact';
import Sparkles from '../Sparkles/Sparkles';


/**
 * Props Passed in from MainPage
 * @param {Object} section
 * @param {Boolean} reachedBottom
 */

function Section({section, reachedBottom, toggleOverlay, showOverlay}) {
    
    const {name, background, scrollAnimation, overlay} = section;

    return (
        <section id={name} className={`section ${name}`} style={{backgroundImage: `url(${background})`}}>
            
            {name==="experience" && <div className="transition2"></div>}
            
            <PageTitle section={section}/>
            
            {/* Conditionally render the correct section component based on the name of the section */}
            <div className= {`${name}__content`} data-aos={scrollAnimation.animation} data-aos-anchor={scrollAnimation.anchor} data-aos-anchor-placement={scrollAnimation.anchorPlacement} data-aos-duration={scrollAnimation.speed}>
                {name==="about" && <About />}
                {name==="skills" && <Skills showOverlay={showOverlay} />}
                {name==="experience" && <Experience showOverlay={showOverlay}/>}
                {name==="projects" && <Projects/>} 
                {name==="contact" && <Contact reachedBottom={reachedBottom}/>}  
                {name==="projects" &&  <img className="projects__mountain" src="/images/mountain4.png" alt="top of mountain" data-aos-anchor=".projects" data-aos="fade-left" data-aos-offset="500" data-aos-duration="3000"/>}    
            </div>

            {(name !== "projects" && name !== "contact") &&
                <div className={`trail-marker__container--${name}`} onClick={()=>toggleOverlay(name)}>
                    <div className={`trail-marker--${name}`}>
                        <img className={`trail-marker__image--${name}`} src= "/icons/trail-marker-3.png"/>
                        <p className={`trail-marker__text-${name}--top`}> {`${name[0].toUpperCase() + name.slice(1)}`}</p>
                        <p className={"trail-marker__text--bottom"}>Trail</p>
                        <Sparkles><div className="trail-marker__base"></div></Sparkles>
                    </div>
                </div>
            }

          
            {/* apply the appropriate "transition" divs to make a smooth color transition between sections */}
            {name==="about" && <div className="transition1"></div>} 
            {name==="experience" && <div className="transition3"></div>}
            {name==="projects" && <div className="transition4"></div>}

        </section>
    )
}

export default Section
