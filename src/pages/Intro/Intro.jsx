import React from 'react'
import {Link} from 'react-router-dom';

import './Intro.scss';

function Intro() {
    return (
        <main className="intro"> 
            <div className="logo">
                <div className="logo__name">
                    <div className="logo__name-first">
                        <h1 className="logo__name-first-letter">P</h1>
                        <h1 className="logo__name-body">ATTI</h1>
                    </div>
                    <div className="logo__name-last">
                        <h1 className="logo__name-last-letter">P</h1>
                        <h1 className="logo__name-body">ERLOCK</h1>
                    </div>
                    <h2 className="logo__title">web developer</h2>    
                </div>
                <Link  to="/about" className="enter">Start the Adventure</Link>
            </div>
   
            <video className="video" autoPlay muted>
                <source src="/images/Final-50mm.mp4" type="video/mp4"></source>
            </video>
        </main>
    )
}

export default Intro
