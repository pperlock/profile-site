import React from 'react'
import {Link} from 'react-router-dom';
import './Header.scss';


function Header({path}) {
    
    return (
        <header className="header">
            {/* <div className="header__logo" style={{backgroundImage: "url('/icons/logo-background.png')"}}> */}
            <Link to="/" className="header__logo">
                <div className="header__logo-text">
                    <p className="header__logo-name"> PATTI PERLOCK </p>
                    <p className="header__logo-title"> WEB DEVELOPER </p>
                </div>
                <img className="header__logo-image" src='/icons/logo-background.png' alt="mountain-logo" />
            </Link>

            <nav className="nav">
                <ul className="nav__list">
                    {path === "/about" ? <li><Link className="nav__link nav__link--active" to="/about">About</Link></li>:<li><Link className="nav__link nav__link" to="/about">About </Link></li>}
                    {path === "/skills" ? <li><Link className="nav__link nav__link--active" to="/about">Skills</Link></li>:<li><Link className="nav__link nav__link" to="/about">Skills </Link></li>}      
                    <li> <Link className="nav__link" to="/home"> Projects </Link> </li>
                    <li> <Link className="nav__link" to="/home"> Contact </Link> </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
