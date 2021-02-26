import React, {useState} from 'react';
import {NavHashLink} from 'react-router-hash-link';
import {Link} from 'react-router-dom';
import './Header.scss';


function Header({path}) {

    const [activeLink, setActiveLink] = useState("about-nav")

    // Get all sections that have an ID defined
    const sectionLocs = document.querySelectorAll("section[id]");

    // Add an event listener listening for scroll
    window.addEventListener("scroll", setActive);

    function setActive() {
    
        // Get current scroll position
        let scrollY = window.pageYOffset;
        
        // loop through sections to get height, top and ID values for each
        sectionLocs.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 50;
            const sectionId = current.getAttribute("id");
            
            /*
            - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
            - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
            */
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                setActiveLink(sectionId + "-nav")
            }
        });
    }

    return (
        <header className="header">
            <Link to="/" className="header__logo">
                <div className="header__logo-text">
                    <p className="header__logo-name"> PATTI PERLOCK </p>
                    <p className="header__logo-title"> WEB DEVELOPER </p>
                </div>
                <img className="header__logo-image" src='/icons/logo-background.png' alt="mountain-logo" />
            </Link>

            <nav className="nav">
                <ul className="nav__list">
                    <NavHashLink smooth to="/main#about" id="about-nav" className={activeLink === "about-nav" ? "nav__link--active" : "nav__link"}>About</NavHashLink>
                    <NavHashLink smooth to="/main#skills" id="skills-nav" className={activeLink === "skills-nav" ? "nav__link--active" : "nav__link"}>Skills</NavHashLink>
                    <NavHashLink smooth to="/main#experience" id="experience-nav" className={activeLink === "experience-nav" ? "nav__link--active" : "nav__link"}>Experience</NavHashLink>
                    <NavHashLink smooth to="/main#projects" id="projects-nav" className={activeLink === "projects-nav" ? "nav__link--active" : "nav__link"}>Projects</NavHashLink>
                    <NavHashLink smooth to="/main#contact" id="contact-nav" className={activeLink === "contact-nav" ? "nav__link--active" : "nav__link"}>Contact</NavHashLink>
                </ul>
            </nav>
        </header>
    )
}

export default Header
