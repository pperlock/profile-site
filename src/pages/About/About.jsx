import React from 'react'
import './About.scss';

import {toggleStory} from '../../functions.jsx';

import Header from '../../components/Header/Header';
import TrailIcon from '../../components/TrailIcon/TrailIcon';
import PageTitle from '../../components/PageTitle/PageTitle';

const mapIcons=[
    {id: 0, name:'trail__head', image:'/icons/trail-head.svg', title:'Trail Head', alt:"trail head"},
    {id: 1, name:'trail__hiker', image:'/icons/hiking-solid.svg', title:'Computer Science & Geophysics', alt:"hiker icon"},
    {id: 2, name:'trail__detour', image:'/icons/map-signs-solid.svg', title:'', alt:"trail sign icon"},
    {id: 3, name:'trail__db', image:'/icons/database.svg', title:'Database Administration', alt:"database icon"},
    {id: 4, name:'trail__dog', image:'/icons/dog-training.svg', title:'Dog Training', alt:"dog training icon"},
    {id: 5, name:'trail__end', image:'/icons/end-of-trail.png', title:'Web Development', alt:"end of trail icon"}];


function About ({match}){
    return (
        <>
        <Header path={match.path}/>
        <main>
            <div className="about" style={{backgroundImage: "url('/images/about-background2.jpg')"}}> 
                <PageTitle page="ABOUT ME"/>
                {/* <h1 className="about__title">ABOUT ME</h1> */}
                <p className="about__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Bibendum enim facilisis gravida neque convallis a cras semper auctor. Enim lobortis scelerisque fermentum dui. 
                Amet mauris commodo quis imperdiet massa tincidunt nunc. Diam quis enim lobortis scelerisque.
                Ac tortor dignissim convallis aenean et tortor at. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. 
                Integer quis auctor elit sed vulputate. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Quam viverra orci sagittis eu volutpat. Viverra ipsum nunc 
                aliquet bibendum enim facilisis gravida neque. Faucibus scelerisque eleifend donec pretium. Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit. 
                Purus viverra accumsan in nisl nisi. Nibh nisl condimentum id venenatis a condimentum vitae.
                </p>
                <div id="white-overlay" className="white-overlay about__full-story">
                <div id="full-text" className="full-text about__full-story-text" > 
                    <h1 className="about__full-story-text-title">SKILLS</h1>
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
