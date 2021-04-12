import React, {useState, useEffect} from 'react'
import './Contact.scss';

import Sparkles from '../../components/Sparkles/Sparkles';

function Contact() {

    return (
        <>
            <h2 className="contact__content-quote"> “Becoming isn’t about arriving somewhere or achieving a certain aim. I see it instead as forward motion, a means of evolving, a way to reach continuously toward a better self. The journey doesn’t end.”</h2>
            <p className="contact__content-author">~ Michelle Obama </p>
            <p className="contact__content-cta"> Continue the Adventure </p>
            <div className = "contact__links">
                {/* the images here are used for placement of the sparkles - they are not what is rendered on the page */}
                <Sparkles><img className="contact__links-icon" src={"/icons/github-icon.svg"} alt="github"/></Sparkles>
                <Sparkles><img className="contact__links-icon" src="/icons/linkedin-icon.svg" alt="linked in" /></Sparkles>
                <Sparkles><img className="contact__links-icon" src="/icons/email-icon.svg" alt="email"/></Sparkles>
                <Sparkles><img className="contact__links-icon" src="/icons/user-profile-circle.svg" alt="resume" /></Sparkles>
            </div>
        </> 
    )
}

export default Contact
