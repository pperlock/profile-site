import React from 'react'
import './Experience.scss';

import TrailIcon from '../../components/TrailIcon/TrailIcon';

function Experience ({match}){
    const mapIcons=[
        {id: 0, name:'head', image:'/icons/trail-head.svg', title:'Trail Head', alt:"trail head", content: "An introduction to coding in highschool ignited a spark and started me on a journey into computer science"},
        {id: 1, name:'hiker', image:'/icons/hiking-solid.svg', title:'Computer Science & Geophysics', alt:"hiker icon", content: "My time in science and research studying geophysics taught me that I wanted to move at a faster pace in a malleable, exciting field."},
        {id: 2, name:'detour', image:'/icons/map-signs-solid.svg', title:'', alt:"trail sign icon",content: "My passion for the outdoors and animals lead me to explore a career as a Dog Trainer."},
        {id: 3, name:'db', image:'/icons/database.svg', title:'Database Administration', alt:"database icon",content: "As a Database Administrator I found myself constantly reaching for ways to learn new skills and searching for projects that allowed me to use my object-oriented programming knowledge and logical thinking skills."},
        {id: 4, name:'dog', image:'/icons/dog-training.svg', title:'Dog Training', alt:"dog training icon",content: "I loved the impact I was making on other people's lives as a dog trainer but ultimately it left me lonely and mentally unstimulated, longing for a team environment."},
        {id: 5, name:'end', image:'/icons/end-of-trail.png', title:'Web Development', alt:"end of trail icon",content: "So here you find me, in an exciting, fast-paced, changing field that pushes my imagination to its limits, and challenges my brain daily through constant learning and problem solving."}];
       
    return (
        <>
            <img className="trail__image" src='/images/trail-path2.png' alt="trail" />
            {mapIcons.map(icon =><TrailIcon key={icon.id} icon={icon} />)}                    
        </>
    )
}

export default Experience