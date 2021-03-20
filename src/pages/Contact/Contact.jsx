import React from 'react'
import './Contact.scss';

function Contact() {
    return (
        <>
            <h2 className="contact__content-quote"> “Becoming isn’t about arriving somewhere or achieving a certain aim. I see it instead as forward motion, a means of evolving, a way to reach continuously toward a better self. The journey doesn’t end.”</h2>
            <p className="contact__content-author">~ Michelle Obama </p>
            <p className="contact__content-cta"> Continue the Adventure </p>

            <div className = "main__contacts-list">
                <a className="main__contacts-list-text" href="https://github.com/pperlock" target="_blank" rel="noopener noreferrer" data-aos-anchor=".contact" data-aos-delay="900" data-aos="fade-left" data-aos-offset="500" data-aos-duration="500">github.com/pperlock</a>
                <a className="main__contacts-list-text" href="https://www.linkedin.com/in/pattiperlock" target="_blank" rel="noopener noreferrer" data-aos-anchor=".contact" data-aos-delay="950" data-aos="fade-left" data-aos-offset="500" data-aos-duration="500">linkedin.com/in/pattiperlock</a>
                <a className="main__contacts-list-text" href="mailto:pattiperlock@gmail.com" target="_blank" rel="noopener noreferrer" data-aos-anchor=".contact" data-aos-delay="1000" data-aos="fade-left" data-aos-offset="500" data-aos-duration="500">pattiperlock@gmail.com</a>
                <a className="main__contacts-list-text" href="/files/patti-perlock-resume-revised.pdf" target="_blank" rel="noopener noreferrer" data-aos-anchor=".contact" data-aos-delay="1000" data-aos="fade-left" data-aos-offset="500" data-aos-duration="500">Resume</a>
            </div>
        </> 
    )
}

export default Contact
