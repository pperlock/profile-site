import React, {useState, useEffect, useRef} from 'react'
import {Link} from 'react-router-dom';
import ReactAwesomePlayer from 'react-awesome-player';


import './Intro.scss';

function Intro() {

    //set state to determine if replay or skip controls are shown
    const [displayReplay, setDisplayReplay] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const playerRef=useRef();

    useEffect(() => {
        // once the video 6s video is over replace the skip control with the replay
        if(!isLoading){
            setTimeout(()=>{setDisplayReplay(true);},6000);
        }
    },[isLoading]);



    const playLoadedVideo = () =>{
        
        // console.log("playLodadedVideo");
        // setTimeout(()=>{
        //     setIsLoading(false);
        // },3000);

        setIsLoading(false);
    }

    // reload the page if the replay button is selected
    const replayVideo = () =>{
       window.location.reload(true);
    }
    
    console.log(playerRef.current);
    return (
        <>
        {isLoading && <h1> Loading ...</h1>}
        <main className={isLoading ? "intro--off" : "intro"}> 
            
            {/* render either the replay button or the skip control based on state */}
            {(!isLoading && displayReplay) ? <img onClick={replayVideo} className="intro__replay" src="/icons/replay-icon.svg" alt="replay"/> : <Link to="/main"><p className="intro__skip"> Skip Intro </p></Link>}
            
            {!isLoading && <div className="logo">
                <Link to="/main" className="logo-text">
                    <p className="logo__name"> PATTI PERLOCK </p>
                    <p className="logo__title"> WEB DEVELOPER </p>
                </Link>

                <div className="logo__filter">
                    <img className="logo__image" src='/icons/silhouette3.png' alt="mountain-logo" />
                </div>
            </div>}

            {/* if the replay button is showing then add the abilit to enter the site */}
            {(!isLoading && displayReplay) && <Link  to="/main" className="enter">ENTER</Link>}

            {/* <video className="video" ref={playerRef} src="/videos/Final-50mm.mp4" type='video/mp4' onCanPlayThrough = {playLoadedVideo}></video> */}

            {isLoading ? 
            <video className="video--off" muted onCanPlayThrough = {playLoadedVideo}>
                <source src="/videos/Final-50mm.mp4" type="video/mp4"/>Your browser does not support the video tag.
            </video>
            :
            <>
                <video className="video" autoPlay muted>
                    <source src="/videos/Final-50mm.mp4" type="video/mp4"/>Your browser does not support the video tag.
                </video>
            </>}

            {/* <video ref={playerRef} className="video" autoPlay={isLoading ? false : true} muted controls onCanPlayThrough = {playLoadedVideo}>
                <source src="/videos/Final-50mm.mp4" type="video/mp4"/>Your browser does not support the video tag.
            </video> */}
        </main>
        </>
    )
}

export default Intro
