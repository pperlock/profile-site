import React from 'react'
import './Contact.scss';

import PageTitle from '../../components/PageTitle/PageTitle';

function Contact({match}) {
    return (
        <>
        <div id="contact" className="contact">
            
            <h2 className="contact__quote"> “Becoming isn’t about arriving somewhere or achieving a certain aim. I see it instead as forward motion, a means of evolving, a way to reach continuously toward a better self. The journey doesn’t end.”</h2>
            <p className="contact__author">~ Michelle Obama </p>
            <p className="contact__cta"> Continue the Adventure </p>
        </div>
        </>
    )
}

export default Contact
