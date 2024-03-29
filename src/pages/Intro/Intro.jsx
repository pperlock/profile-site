import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import Sparkles from '../../components/Sparkles/Sparkles';


import './Intro.scss';

function Intro() {

    //set state to determine if replay or skip controls are shown
    const [displayReplay, setDisplayReplay] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [showLoading, setShowLoading] = useState(false);
    const [gifSrc] = useState("/videos/intro-video-noloop.gif?"+ new Date().getTime());

    useEffect(() => {
        //ensures that the loading icon doesn't show if loading of the video is quick
        const loadingTimer = setTimeout(()=>{setShowLoading(true);},1000);

        return () => clearTimeout(loadingTimer);
    },[]);
    
    useEffect(() => {
        // once the video 6s video is over replace the skip control with the replay
        const replayTimer = setTimeout(()=>{setDisplayReplay(true);},6000);
        
        return () => clearTimeout(replayTimer);
    },[isLoading]);

    // reload the page if the replay button is selected
    const replayVideo = () =>{
       window.location.reload(true);
    }

    const playLoadedVideo = () =>{
        setIsLoading(false);
    }

    return (
        <>
        {(isLoading && showLoading) &&
            <div className="intro__loading">
                <div className="intro__loading-logo">
                    <Sparkles>
                        <Link to="/main" className="logo-text">
                            <p className="logo__name"> PATTI PERLOCK </p>
                            <p className="logo__title"> WEB DEVELOPER </p>
                        </Link>   
                    </Sparkles>
                </div>
                    <div className="intro__loading-container">
                        {/* <h1 className="intro__loading-text"> Loading </h1> */}
                        <img className="intro__loading-img" src="/icons/loader.gif" alt="intro loading"/>
                    </div>
            </div>
        }

        {/* Added about background image to intro to preload for rest of site */}
        <main id="intro" className={isLoading ? "intro--off" : "intro"} style={{backgroundImage: `url('/images/about-background.jpg')`}}> 
          
            {/* render either the replay button or the skip control based on state */}
            {!isLoading && (displayReplay ? <img onClick={replayVideo} className="intro__replay" src="/icons/replay-icon.svg" alt="replay"/> : <Link to="/main"><p className="intro__skip"> Skip Intro </p></Link>)}
            
            {!isLoading && <div className="logo">
                <Link to="/main" className="logo-text">
                    <p className="logo__name"> PATTI PERLOCK </p>
                    <p className="logo__title"> WEB DEVELOPER </p>
                </Link>

                <div className="logo__filter">
                    <img className="logo__image" src='/icons/silhouette3.png' alt="mountain-logo" />
                </div>
            </div>}

            {/* if the replay button is showing then add the ability to enter the site */}
            {(!isLoading && displayReplay) && <Link  to="/main" className="enter">ENTER</Link>}

            {window.innerWidth >= 768 && <video className="video" autoPlay muted onCanPlayThrough = {playLoadedVideo}>
                <source src="/videos/Final-50mm.mp4" type="video/mp4"/>Your browser does not support the video tag.
            </video>}

            {window.innerWidth < 768 && <img className='video-gif' src={gifSrc} onLoad = {playLoadedVideo} alt="intro video playing"/>}
        </main>
        </>
    )
}

export default Intro
