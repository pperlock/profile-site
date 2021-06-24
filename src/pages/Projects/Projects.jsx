import React, {useState} from 'react'

import './Projects.scss';


function Projects() {

    //set state to control the video modal
    const [showVideo, setShowVideo] = useState(false);

    //set state to control project selection on mobile devices
    const [activeProject, setActiveProject] = useState("p2t");

    //hide or show the video based on the boolean value passed in
    const toggleVideo = (action) =>{
        setShowVideo(action);
        document.querySelector('html').classList.toggle('scroll-lock');
    }

    //control which project is being rendered on mobile devices
    const makeActive = (project)=>{
        setActiveProject(project);
    }

    return (
        <>
            <div className = "projects__content"> 
                
                {/* Navigation for mobile devices */}
                <ul className="projects__nav"> 
                    <li onClick={()=>{makeActive("p2t")}} className={activeProject === "p2t" ? "projects__nav-link--active" : "projects__nav-link"}> Plan2Train </li>
                    <li onClick={()=>{makeActive("videoStreamer")}} className={activeProject === "videoStreamer" ? "projects__nav-link--active" : "projects__nav-link"}> videoStreamer </li>
                </ul>
                
                {/* Projects rendered based on device size and state */}
                <div className = "projects__list">
                    {(window.innerWidth>=768 || activeProject==="p2t") && 
                        <div className="projects__list-project--p2t"  data-aos-anchor=".projects" data-aos="flip-up" data-aos-offset="500" data-aos-duration="800">
                            <div className = "projects__list-description">
                                <p className = "projects__list-description-pitch">An organizational app focused on helping small businesses in the personal training space.</p>
                                <p><span className="emphasize">Ideation to Submission:</span> 10 days </p>
                                <p><span className="emphasize">Tech Stack:</span> React, Node, Express, MongoDB, Passport, SASS, Google Maps API, Firebase Storage, React Hooks</p>
                            </div>
                            <img className="projects__list-img" src="/images/plan2train.png" alt="plan 2 train"/>
                            <button className="projects__list-first" onClick={()=>{toggleVideo(true)}}> DEMO </button>
                            <a href="https://plan2train.herokuapp.com" target="_blank" rel="noopener noreferrer"> <button className="projects__list-second"> VISIT </button> </a>
                            <a href="https://github.com/pperlock/plan2train" target="_blank" rel="noopener noreferrer"> <button className="projects__list-third"> GITHUB </button> </a>
                        </div>
                    }
                    {(window.innerWidth>=768 || activeProject==="videoStreamer") && 
                        <div className="projects__list-project--brainflix" data-aos-anchor=".projects" data-aos="flip-down" data-aos-delay="300" data-aos-offset="500" data-aos-duration="800">
                            <img className="projects__list-img--brainflix" src="/images/video-streamer.png" alt="brainflix"/>
                            <a href="https://video-streaming-clone.herokuapp.com/" target="_blank" rel="noopener noreferrer"> <button className="projects__list-first--brainflix"> VISIT </button> </a>
                            <a href="https://github.com/pperlock/video-streaming-clone" target="_blank" rel="noopener noreferrer"><button className="projects__list-second--brainflix" target="_blank"> GITHUB </button> </a>
                            <div className = "projects__list-description">
                                <p className = "projects__list-description-pitch"> A video-streaming type website built based on a provided mockup.</p>
                                <p className = "projects__list-description-users"> Valid user names for sign in are mlyons, tduncan, cjones, and gwong.</p>
                                <p><span className="emphasize">Tech Stack:</span> React, Redux, Node, Express, SASS</p>
                            </div>
                        </div>
                    }
                </div>
            </div>
            
            {/* Render the video modal based on state */}
            {showVideo &&
                <div className="modal__container">
                    <div className="modal">
                        <img className="modal__close" src = "/icons/close-icon.svg" alt="close" onClick={()=>{toggleVideo(false)}} />
                        <video className="modal__video" controls>
                            <source src="/videos/plan2train.mp4" type="video/mp4"/>Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            }
        </>
    )
}

export default Projects
