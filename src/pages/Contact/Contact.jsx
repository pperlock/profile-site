import React from 'react'
import './Contact.scss';

function Contact({reachedBottom}) {
    return (
        <>
            <h2 className="contact__content-quote"> “Becoming isn’t about arriving somewhere or achieving a certain aim. I see it instead as forward motion, a means of evolving, a way to reach continuously toward a better self. The journey doesn’t end.”</h2>
            <p className="contact__content-author">~ Michelle Obama </p>
            <p className="contact__content-cta"> Continue the Adventure </p>
            
            {/* {reachedBottom && 
                <div className = "contact__content-list">
                    <a className="contact__content-list-text" href="https://github.com/pperlock" data-aos-anchor=".contact" data-aos-delay="900" data-aos="fade-left" data-aos-offset="500" data-aos-duration="500">github.com/pperlock</a>
                    <a className="contact__content-list-text" href="https://www.linkedin.com/in/pattiperlock" data-aos-anchor=".contact" data-aos-delay="950" data-aos="fade-left" data-aos-offset="500" data-aos-duration="500">linkedin.com/in/pattiperlock</a>
                    <a className="contact__content-list-text" href="mailto:pattiperlock@gmail.com" data-aos-anchor=".contact" data-aos-delay="1000" data-aos="fade-left" data-aos-offset="500" data-aos-duration="500">pattiperlock@gmail.com</a>
                </div>
            } */}
        </> 
    )
}

export default Contact
