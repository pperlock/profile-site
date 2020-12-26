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
    let fullStory = document.getElementById("full-story");
    let fullStoryText = document.querySelector(".about__full-story-text");
    console.log(fullStory.classList.length);

    if (fullStory.classList.length===1){
        fullStory.classList.add("about__full-story--on");
        fullStoryText.classList.add("about__full-story-text--on");
    }else{
        if (document.querySelector(".about__full-story--off")){
            console.log("turn on");
            console.log(document.querySelector("about__full-story--off"));
            fullStory.classList.remove("about__full-story--off");
            fullStory.classList.add("about__full-story--on");
            fullStoryText.classList.toggle("about__full-story-text--on");

        }else{
            console.log("turn off");
            fullStory.classList.add("about__full-story--off");
            fullStory.classList.remove("about__full-story--on"); 
            fullStoryText.classList.toggle("about__full-story-text--on");
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
                    <div id="full-story" className="about__full-story">
                        <div className="about__full-story-text" > 
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
