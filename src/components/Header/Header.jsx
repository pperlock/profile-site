import React from 'react'
import {Link} from 'react-router-dom';
import './Header.scss';


function Header({path}) {
    
    path = "About";
    return (
        <header className="header">
            <a to="/" className="header__logo">
                <div className="header__logo-text">
                    <p className="header__logo-name"> PATTI PERLOCK </p>
                    <p className="header__logo-title"> WEB DEVELOPER </p>
                </div>
                <img className="header__logo-image" src='/icons/logo-background.png' alt="mountain-logo" />
            </a>

            <nav className="nav">
                <ul className="nav__list">
                    <a className="nav__link nav__link--active" href="#about">About</a>
                    <a className="nav__link nav__link" href="#skills">Skills</a>
                    <a className="nav__link nav__link" href="#experience">Experience</a>
                    <a className="nav__link nav__link" href="#projects">Projects</a>
                    <a className="nav__link nav__link" href="#contact">Contact</a>

                    {/* {path === "/experience" ? <li><Link className="nav__link nav__link--active" to="/experience">Experience</Link></li>:<li><Link className="nav__link nav__link" to="/experience">Experience</Link></li>}      
                    {path === "/skills" ? <li><Link className="nav__link nav__link--active" to="/skills">Skills</Link></li>:<li><Link className="nav__link nav__link" to="/skills">Skills</Link></li>}
                    {path === "/projects" ? <li><Link className="nav__link nav__link--active" to="/projects">Projects</Link></li>:<li><Link className="nav__link nav__link" to="/projects">Projects</Link></li>}      
                    {path === "/contact" ? <li><Link className="nav__link nav__link--active" to="/contact">Contact</Link></li>:<li><Link className="nav__link nav__link" to="/contact">Contact</Link></li>}       */}
                </ul>
            </nav>
        </header>
    )
}

export default Header
