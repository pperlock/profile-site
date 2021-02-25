import React, {useState} from 'react'

import './Projects.scss';

function Projects({match}) {

    const [showVideo, setShowVideo] = useState(false);

    const toggleVideo = (action) =>{
        setShowVideo(action);
        document.querySelector('html').classList.toggle('scroll-lock');
    }

    return (
        <>
            <div className = "projects__content"> 
                <div className = "projects__list">
                    <div className="projects__list-project--p2t"  data-aos-anchor=".projects" data-aos="flip-up" data-aos-offset="500" data-aos-duration="2000">
                        <img className="projects__list-img" src="/images/plan2train.png"/>
                        <button className="projects__list-first" onClick={()=>{toggleVideo(true)}}> DEMO </button>
                        <a href="https://plan2train.herokuapp.com" target="_blank"> <button className="projects__list-second"> VISIT </button> </a>
                        <a href="https://github.com/pperlock/plan2train" target="_blank"> <button className="projects__list-third"> GITHUB </button> </a>
                    </div>
                    <div className="projects__list-project--brainflix" data-aos-anchor=".projects" data-aos="flip-down" data-aos-delay="300" data-aos-offset="500" data-aos-duration="2000">
                        <img className="projects__list-img--brainflix" src="/images/brainflix.png"/>
                        <a href="https://github.com/pperlock/patti-perlock-brainflix" target="_blank"><button className="projects__list-first--brainflix" target="_blank"> GITHUB </button> </a>
                    </div>
                </div>
            </div>
            {showVideo &&
                <div className="modal__container">
                    <div className="modal">
                        <img className="modal__close" src = "/icons/close-icon.svg" onClick={()=>{toggleVideo(false)}} />
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
