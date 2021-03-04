import React, {useState, useEffect} from 'react';
import {NavHashLink} from 'react-router-hash-link';
import {Link} from 'react-router-dom';
import './Header.scss';

/**
 * Props Passed in from MainPage
 * @param {String} path
*/

function Header({path}) {

    // store the active link in state
    const [activeLink, setActiveLink] = useState("about-nav")

    const [showMenu, setShowMenu] = useState(false);

    const [sectionLocs, setSectionLocs] = useState(document.querySelectorAll("section[id]"));

    useEffect(()=>{
        setSectionLocs(document.querySelectorAll("section[id]"));   
    },[]);

    // // Get all sections that have an id defined
    // const sectionLocs = document.querySelectorAll("section[id]");

    //used to determine the location of the page and set link associated with that section to be the active link
    const setActive = () => {
        // console.log("hit");
    
        // get the current scroll position
        let scrollY = window.pageYOffset;
        
        // loop through sections to get height, top and id values for each
        sectionLocs.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute("id");
            
            // console.log(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight);
            //If the current scroll position enters the space where the current section on screen is, the set that section as the active section in state
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                setActiveLink(sectionId + "-nav")
            }
        });
    }

     // List for scrolling activity
    window.addEventListener("scroll", setActive);

    const toggleMenu = () =>{
        setShowMenu(!showMenu);
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
                <div className={showMenu ? "nav__hamburger nav__hamburger--open" : "nav__hamburger"}>
                    <div className="nav__hamburger-icon" onClick={toggleMenu}></div>
                </div>
                {(showMenu || window.innerWidth>=768 ) &&
                    <ul className={showMenu ? "nav__list nav__list--on" : "nav__list"}>
                        <NavHashLink smooth to="/main#about" id="about-nav" onClick={toggleMenu} className={activeLink === "about-nav" ? "nav__link--active" : "nav__link"}>About</NavHashLink>
                        <NavHashLink smooth to="/main#skills" id="skills-nav" onClick={toggleMenu} className={activeLink === "skills-nav" ? "nav__link--active" : "nav__link"}>Skills</NavHashLink>
                        <NavHashLink smooth to="/main#experience" id="experience-nav" onClick={toggleMenu} className={activeLink === "experience-nav" ? "nav__link--active" : "nav__link"}>Experience</NavHashLink>
                        <NavHashLink smooth to="/main#projects" id="projects-nav" onClick={toggleMenu} className={activeLink === "projects-nav" ? "nav__link--active" : "nav__link"}>Projects</NavHashLink>
                        <NavHashLink smooth to="/main#contact" id="contact-nav" onClick={toggleMenu} className={activeLink === "contact-nav" ? "nav__link--active" : "nav__link"}>Contact</NavHashLink>
                    </ul>
                }
            </nav>
        
        </header>
    )
}

export default Header
