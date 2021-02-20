import React from 'react'
import {Link} from 'react-router-dom';

import './Intro.scss';

function Intro() {
    return (
        <main className="intro"> 
            <div className="logo">
                <Link to="/main" className="logo-text">
                    <p className="logo__name"> PATTI PERLOCK </p>
                    <p className="logo__title"> WEB DEVELOPER </p>
                </Link>
                <div className="logo__filter">
                    <img className="logo__image" src='/icons/silhouette3.png' alt="mountain-logo" />
                </div>
            </div>
                {/* <Link  to="/main" className="enter">ENTER</Link> */}
            <Link className="video__link" to="/main">
                <video className="video" autoPlay muted>
                    <source src="/images/Final-50mm.mp4" type="video/mp4"></source>
                    {/* <source src="/images/clouds.mp4" type="video/mp4"></source> */}
                </video>
            </Link>
        </main>
    )
}

export default Intro
