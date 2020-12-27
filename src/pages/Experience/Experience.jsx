import React from 'react'
import './Experience.scss';

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


function Experience ({match}){
    return (
        <>
        <Header path={match.path}/>
        <main>
            <div className="experience" style={{backgroundImage: "url('/images/home-background2-2.jpg')"}}> 
                <PageTitle page="EDUCATON & EXPERIENCE"/>
                <div className="trail">
                    <img className="trail__image" src='/images/trail-path.png' alt="trail" />
                    {mapIcons.map(icon =><TrailIcon key={icon.id} icon={icon}/>)}                    
                </div>
                    <div id="white-overlay" className="white-overlay experience__full-story">
                        <div id="full-text" className="full-text experience__full-story-text" > 
                            <h1 className="experience__full-story-text-title">EDUCATION & EXPERIENCE</h1>
                            <p className="experience__full-story-text-main"> "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
                            <img className="experience__full-story-up" onClick={()=>toggleStory()} src="/icons/chevron_up.png" alt="up chevron"/>
                        </div>
                    </div>
                </div>
        </main>
        </>
    )
}

export default Experience