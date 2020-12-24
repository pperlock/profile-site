import React from 'react'
import './About.scss';

import Header from '../../components/Header/Header';
import TrailIcon from '../../components/TrailIcon/TrailIcon';

const mapIcons=[
    {id: 0, name:'trail__head', image:'/icons/trail-head.svg', title:'Trail Head'},
    {id: 1, name:'trail__hiker', image:'/icons/hiking-solid.svg', title:'Computer Science & Geophysics'},
    {id: 2, name:'trail__detour', image:'/icons/map-signs-solid.svg', title:''},
    {id: 3, name:'trail__db', image:'/icons/database.svg', title:'Database Administration'},
    {id: 4, name:'trail__dog', image:'/icons/dog-training.svg', title:'Dog Training'},
    {id: 5, name:'trail__end', image:'/icons/end-of-trail.png', title:'Web Development'},
];

function About ({match}){
    console.log(match);
    return (
        <>
            <Header path={match.path}/>
            <main>
                <div className="about" style={{backgroundImage: "url('/images/home-background2-2.jpg')"}}> 
                    {/* <h1 className="about__title"> <span className="initial-letter">M</span>y <span className="initial-letter">J</span>ourney </h1> */}
                    <h1 className="about__title">  Web Development Trail </h1>
                    <div className="trail">
                        <img className="trail__image" src='/images/trail-path.png'/>
                        {mapIcons.map(icon =><TrailIcon key={icon.id}icon={icon}/>)}                    
                    </div>
                </div>
            </main>
        </>
    )
}

export default About
