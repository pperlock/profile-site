import React from 'react'

import './Intro.scss';

function Intro() {
    return (
        <div>
            <div className="wrapper"> 
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
                    {/* <h1 className="logo__name"><span className="logo__name-letter">P</span>ATTI<span className="logo__name-letter">{p}</span>ERLOCK</h1> */}
                    {/* <h1 className="logo__name"><span className="logo__name-letter">P</span>atti <span className="logo__name-letter">P</span>erlock</h1> */}
                    {/* <h1 className="logo__name">Patti Perlock</h1> */}
                    
                </div>
                <video className="video" autoPlay muted>
                    <source src="/images/Final-50mm.mp4" type="video/mp4"></source>
                </video>
            </div>
        </div>
    )
}

export default Intro
