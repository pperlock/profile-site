import React from 'react'
import './About.scss';

import Header from '../../components/Header/Header';
import TrailIcon from '../../components/TrailIcon/TrailIcon';

const mapIcons=[
    {id: 0, name:'trail__head', image:'/icons/trail-head.svg', title:'Trail Head', alt:"trail head"},
    {id: 1, name:'trail__hiker', image:'/icons/hiking-solid.svg', title:'Computer Science & Geophysics', alt:"hiker icon"},
    {id: 2, name:'trail__detour', image:'/icons/map-signs-solid.svg', title:'', alt:"trail sign icon"},
    {id: 3, name:'trail__db', image:'/icons/database.svg', title:'Database Administration', alt:"database icon"},
    {id: 4, name:'trail__dog', image:'/icons/dog-training.svg', title:'Dog Training', alt:"dog training icon"},
    {id: 5, name:'trail__end', image:'/icons/end-of-trail.png', title:'Web Development', alt:"end of trail icon"}];

const toggleStory = ()=>{
    let whiteOverlay = document.getElementById("white-overlay");
    let fullText = document.getElementById("full-text");
    console.log(whiteOverlay.classList.length);

    if (whiteOverlay.classList.length <= 2){
        fullText.classList.add("full-text--on");
        whiteOverlay.classList.add("white-overlay--on");

    }else{
        if (document.querySelector(".white-overlay--off")){
            console.log("turn on");
            fullText.classList.add("full-text--on");
            fullText.classList.remove("full-text--off")
            whiteOverlay.classList.add("white-overlay--on");
            whiteOverlay.classList.remove("white-overlay--off");

        }else{
            console.log("turn off");
            fullText.classList.remove("full-text--on");
            fullText.classList.add("full-text--off")
            whiteOverlay.classList.add("white-overlay--off");
            whiteOverlay.classList.remove("white-overlay--on");
        }
    }
        
}

function About ({match}){
    return (
        <>
            <Header path={match.path}/>
            <main>
                <div className="about" style={{backgroundImage: "url('/images/home-background2-2.jpg')"}}> 
                    {/* <h1 className="about__title"> <span className="initial-letter">M</span>y <span className="initial-letter">J</span>ourney </h1> */}
                    <div className="about__title">
                        <h1 className="about__title-text">  ABOUT ME </h1>
                        <img className="about__title-down" onClick={()=>toggleStory()} src="/icons/chevron_down.png" alt="down chevron"/>
                    </div>
                    <div className="trail">
                        <img className="trail__image" src='/images/trail-path.png' alt="trail" />
                        {mapIcons.map(icon =><TrailIcon key={icon.id} icon={icon}/>)}                    
                    </div>
                        <div id="white-overlay" className="white-overlay about__full-story">
                            <div id="full-text" className="full-text about__full-story-text" > 
                                <h1 className="about__full-story-text-title">ABOUT ME</h1>
                                <p className="about__full-story-text-main"> "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
                                <img className="about__full-story-up" onClick={()=>toggleStory()} src="/icons/chevron_up.png" alt="up chevron"/>
                            </div>
                        </div>
                    </div>
            </main>
        </>
    )
}

export default About
