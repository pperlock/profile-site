import React from 'react'
import './Home.scss';

import Header from '../../components/Header/Header';
import TrailIcon from '../../components/TrailIcon/TrailIcon';

const mapIcons=[
    {name:'trail__head', image:'/icons/trail-head.svg', title:'Trail Head'},
    {name:'trail__hiker', image:'/icons/hiking-solid.svg', title:'Computer Science & Geophysics'},
    {name:'trail__detour', image:'/icons/map-signs-solid.svg', title:''},
    {name:'trail__db', image:'/icons/database.svg', title:'Database Administration'},
    {name:'trail__dog', image:'/icons/dog-training.svg', title:'Dog Training'},
    {name:'trail__end', image:'/icons/end-of-trail.png', title:'Web Development'},
];

function Home (){
    return (
        <>
            <Header />
            <main>
                <div className="home" style={{backgroundImage: "url('/images/home-background2-2.jpg')"}}> 
                    <div className="trail">
                        <img className="trail__image" src='/images/trail-path.png'/>
                        {mapIcons.map(icon =><TrailIcon icon={icon}/>)}                    
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home
