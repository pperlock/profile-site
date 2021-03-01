import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';

import './Intro.scss';


function Intro() {

    //set state to determine if replay or skip controls are shown
    const [displayReplay, setDisplayReplay] = useState(false);

    useEffect(() => {
        // once the video 6s video is over replace the skip control with the replay
        setTimeout(()=>{
            setDisplayReplay(true);
        },6000)
    },[]);

    // reload the page if the replay button is selected
    const replayVideo = () =>{
       window.location.reload(true);
    }

    return (
        <main className="intro"> 
            {/* render either the replay button or the skip control based on state */}
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

            {/* if the replay button is showing then add the abilit to enter the site */}
            {displayReplay && <Link  to="/main" className="enter">ENTER</Link>}
            
            <video className="video" autoPlay muted>
                <source src="/images/Final-50mm.mp4" type="video/mp4"></source>
            </video>
        </main>
    )
}

export default Intro
