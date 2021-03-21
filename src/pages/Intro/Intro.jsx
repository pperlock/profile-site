import React, {useState, useEffect, useRef} from 'react'
import {Link} from 'react-router-dom';
import ReactAwesomePlayer from 'react-awesome-player';


import './Intro.scss';

// state = {
//     options: {
//       poster: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=854361313,3188166359&fm=26&gp=0.jpg",
//       sources: [{
//         type: "video/mp4",
//         src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
//       }],
//       subtitles: [{
//           language: 'zh',
//           url: "https://feawesome.github.io/react-awesome-player/zh.vtt",
//           label: "中文"
//         },
//         {
//           language: 'en',
//           url: "https://feawesome.github.io/react-awesome-player/en.vtt",
//           label: "EN"
//       }],
//       defaultSubtitle: 'en'
//     }
//   }


function Intro() {

    //set state to determine if replay or skip controls are shown
    const [displayReplay, setDisplayReplay] = useState(false);
    const [isLoading, setIsLoading] = useState(true);


    const playerRef=useRef();

    useEffect(() => {
        // once the video 6s video is over replace the skip control with the replay
        setTimeout(()=>{
            setDisplayReplay(true);
        },6000);

    },[]);



    const playLoadedVideo = () =>{
        setIsLoading(false);
    }

    // reload the page if the replay button is selected
    const replayVideo = () =>{
       window.location.reload(true);
    }
    
    
    return (
        <>
       <main className={isLoading ? "intro--off" : "intro"}> 
            {isLoading && <h1> Loading ...</h1>}
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
            {!isLoading && displayReplay && <Link  to="/main" className="enter">ENTER</Link>}

            {/* <video className="video" ref={playerRef} src="/videos/Final-50mm.mp4" type='video/mp4' onCanPlayThrough = {playLoadedVideo}></video> */}

            {isLoading ? 
            <video className="video--off" onCanPlayThrough = {playLoadedVideo}>
                <source src="/videos/Final-50mm.mp4" type="video/mp4"/>Your browser does not support the video tag.
            </video>
            :
            <>
                <video className="video" autoPlay muted>
                    <source src="/videos/Final-50mm.mp4" type="video/mp4"/>Your browser does not support the video tag.
                </video>
            </>}
        </main>
        </>
    )
}

export default Intro
