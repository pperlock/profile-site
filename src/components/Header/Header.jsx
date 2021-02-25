import React, {useState} from 'react';
import {NavHashLink} from 'react-router-hash-link';
import {Link} from 'react-router-dom';
import './Header.scss';


function Header({path}) {

    const [activeLink, setactiveLink] = useState("about")
    
    console.log(path);
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
                    <NavHashLink smooth to="/main#about" activeClassName="nav__link--active" className="nav__link nav__link">About</NavHashLink>
                    <NavHashLink smooth to="/main#skills" activeClassName="nav__link--active" className="nav__link nav__link">Skills</NavHashLink>
                    <NavHashLink smooth to="/main#experience" activeClassName="nav__link--active" className="nav__link nav__link">Experience</NavHashLink>
                    <NavHashLink smooth to="/main#projects" activeClassName="nav__link--active" className="nav__link nav__link">Projects</NavHashLink>
                    <NavHashLink smooth to="/main#contact" activeClassName="nav__link--active" className="nav__link nav__link">Contact</NavHashLink>
                </ul>
            </nav>
        </header>
    )
}

export default Header
