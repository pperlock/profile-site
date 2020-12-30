import React from 'react'
import './Experience.scss';

import {toggleStory} from '../../functions.jsx';

import Header from '../../components/Header/Header';
import TrailIcon from '../../components/TrailIcon/TrailIcon';
import PageTitle from '../../components/PageTitle/PageTitle';

const mapIcons=[
    {id: 0, name:'head', image:'/icons/trail-head.svg', title:'Trail Head', alt:"trail head", content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"},
    {id: 1, name:'hiker', image:'/icons/hiking-solid.svg', title:'Computer Science & Geophysics', alt:"hiker icon", content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"},
    {id: 2, name:'detour', image:'/icons/map-signs-solid.svg', title:'', alt:"trail sign icon",content: "Detour"},
    {id: 3, name:'db', image:'/icons/database.svg', title:'Database Administration', alt:"database icon",content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"},
    {id: 4, name:'dog', image:'/icons/dog-training.svg', title:'Dog Training', alt:"dog training icon",content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"},
    {id: 5, name:'end', image:'/icons/end-of-trail.png', title:'Web Development', alt:"end of trail icon",content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"}];


function Experience ({match}){
    return (
        <>
        
            <div id="experience" className="experience"  style={{backgroundImage: "url('/images/home-background2-2.jpg')"}}> 
                <div className="transition2"></div>
                <PageTitle title="MY PATH TO WEB DEVELOPMENT" page="Education & Experience" section="experience"/>
                <div className="trail">
                    <img className="trail__image" src='/images/trail-path.png' alt="trail" />
                    {mapIcons.map(icon =><TrailIcon key={icon.id} icon={icon} />)}                    
                </div>
                    <div id="experience__white-overlay" className="white-overlay experience__full-story">
                        <div id="experience__full-text" className="full-text experience__full-story-text" > 
                            <h1 className="experience__full-story-text-title">EDUCATION & EXPERIENCE</h1>
                            <p className="experience__full-story-text-main"> "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
                            <img className="experience__full-story-up" onClick={()=>toggleStory("experience")} src="/icons/chevron_up.png" alt="up chevron"/>
                        </div>
                    </div>
                    <div className="transition3"></div>
                </div>
                
        </>
    )
}

export default Experience