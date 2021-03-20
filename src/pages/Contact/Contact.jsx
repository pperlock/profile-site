import React from 'react'
import './Contact.scss';

import Sparkles from '../../components/Sparkles/Sparkles';

function Contact({reachedBottom}) {
    
    return (
        <>
            <h2 className="contact__content-quote"> “Becoming isn’t about arriving somewhere or achieving a certain aim. I see it instead as forward motion, a means of evolving, a way to reach continuously toward a better self. The journey doesn’t end.”</h2>
            <p className="contact__content-author">~ Michelle Obama </p>
            <p className="contact__content-cta"> Continue the Adventure </p>
            <div className = "contact__links">
                <Sparkles><a href="https://github.com/pperlock" target="_blank" rel="noopener noreferrer"><img className="contact__links-icon" src="/icons/github-icon.svg" alt="github" data-aos-anchor=".contact" data-aos="zoom-in-right" data-aos-delay="200" data-aos-offset="500" data-aos-duration="500"/></a></Sparkles>
                <Sparkles><a href="https://www.linkedin.com/in/pattiperlock" target="_blank" rel="noopener noreferrer"><img className="contact__links-icon" src="/icons/linkedin-icon.svg" alt="linked in" data-aos-anchor=".contact" data-aos="zoom-in-up" data-aos-delay="250" data-aos-offset="500" data-aos-duration="500"/></a></Sparkles>
                <Sparkles><a href="mailto:pattiperlock@gmail.com"><img className="contact__links-icon" src="/icons/email-icon.svg" alt="email" data-aos-anchor=".contact" data-aos="zoom-in-down" data-aos-offset="500" data-aos-duration="500" data-aos-delay="300"/></a></Sparkles>
                <Sparkles><a href="/files/patti-perlock-resume-revised.pdf" target="_blank" rel="noopener noreferrer"><img className="contact__links-icon" src="/icons/user-profile-circle.svg" alt="resume" data-aos-anchor=".contact" data-aos="zoom-in-left" data-aos-delay="350" data-aos-offset="500" data-aos-duration="500"/></a></Sparkles>
            </div>
        </> 
    )
}

export default Contact
