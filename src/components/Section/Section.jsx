import React from 'react';
import "./Section.scss";

import Overlay from '../../components/Overlay/Overlay';
import PageTitle from '../../components/PageTitle/PageTitle';
import About from '../../pages/About/About';
import Skills from '../../pages/Skills/Skills';
import Experience from '../../pages/Experience/Experience';
import Projects from '../../pages/Projects/Projects';
import Contact from '../../pages/Contact/Contact';

function Section({section}) {
    let {name, title, background, scrollAnimation, overlay} = section;

    const displayHand = () => {
        if(name === "skills") {
            return( 
            <div className="skills__pack"> 
                <p className="skills__unpacked"> Pack Your Bag </p>
                <img className="skills__hand" src="/icons/hand.png" alt="hand dropping item"/>
            </div>
            )
        }
    };

    return (
        <section className={`section ${name}`} style={{backgroundImage: `url(${background})`}}>
            {name==="experience" && <div className="transition2"></div>}
            <PageTitle title={title} section={name}/>
            {displayHand()}
            <div className= {`${name}__content`} data-aos={scrollAnimation.animation} data-aos-anchor={scrollAnimation.anchor} data-aos-anchor-placement={scrollAnimation.anchorPlacement} >
                {name==="about" && <About />}
                {name==="skills" && <Skills />}
                {name==="experience" && <Experience />}
                {name==="projects" && <Projects/>} 
                {name==="contact" && <Contact />}  
                {name==="projects" &&  <img className="projects__mountain" src="/images/mountain4.png" alt="top of mountain" data-aos-anchor=".projects" data-aos="fade-left" data-aos-offset="500" data-aos-duration="3000"/>}    
            </div>
            {overlay && <Overlay section={name}/>}
            {name==="about" && <div className="transition1"></div>}
            {name==="experience" && <div className="transition3"></div>}
            {name==="projects" && <div className="transition4"></div>}
        </section>
    )
}

export default Section
