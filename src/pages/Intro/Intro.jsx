import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';

import './Intro.scss';

function Intro() {

    const [displayReplay, setDisplayReplay] = useState(false);

    useEffect(() => {
        setTimeout(()=>{
            setDisplayReplay(true);
        },6000)
    },[]);

    const replayVideo = () =>{
       window.location.reload(true);
    }

    return (
        <main className="intro"> 
            {displayReplay ? <img onClick={replayVideo} className="intro__replay" src="/icons/replay-icon.svg" alt="replay"/> : <Link to="/main"><p className="intro__skip"> Skip Intro </p></Link>}
            
            <div className="logo">
                <Link to="/main" className="logo-text">
                    <p className="logo__name"> PATTI PERLOCK </p>
                    <p className="logo__title"> WEB DEVELOPER </p>
                </Link>
                <div className="logo__filter">
                    <img className="logo__image" src='/icons/silhouette3.png' alt="mountain-logo" />
                </div>
            </div>

            {displayReplay && <Link  to="/main" className="enter">ENTER</Link>}
            
            <video className="video" autoPlay muted>
                <source src="/images/Final-50mm.mp4" type="video/mp4"></source>
            </video>

            
        </main>
    )
}

export default Intro
