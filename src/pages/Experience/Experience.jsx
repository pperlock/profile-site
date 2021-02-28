import React from 'react'
import './Experience.scss';

import TrailIcon from '../../components/TrailIcon/TrailIcon';

function Experience ({match}){
    const mapIcons=[
        {id: 0, name:'head', image:'/icons/trail-head.svg', title:'Trail Head', alt:"trail head", modal:"top", 
        contentTitle: "It All Started When ...",
        content: "I was introduced to coding in highschool which ignited the spark and started me on a journey into computer science."},
        {id: 1, name:'hiker', image:'/icons/hiking-solid.svg', title:'Computer Science & Geophysics', alt:"hiker icon", modal:"top", 
        contentTitle: "How it Shaped Me ...",
        content: "My time in science and research studying geophysics taught me that I wanted to move at a faster pace in a malleable, exciting field.",
        experience:[
            {date: "2005-2010", background:"/icons/uwo.png", place: "University of Western Ontario", position: "MSc.Geophysics", focus: "programming & statistical physics", thesis: "Imaging Faults in 3D Using Pattern Informatics"},
            {date: "2000-2005", background:"/icons/uwo.png", place: "University of Western Ontario", position: "BSc.Geophysics", focus: "programming & optimization algorithms", thesis: "Modeling of the July 1998 Northridge Aftershock Using a Linear Inversion and Genetic Algorithm"}
        ]},
        {id: 2, name:'detour', image:'/icons/map-signs-solid.svg', title:'', alt:"trail sign icon",
        contentTitle: "I Detoured From my Path...",
        content: "When my passion for the outdoors and animals lead me to explore a career as a Dog Trainer.", modal:"middle",},
        
        {id: 3, name:'db', image:'/icons/database.svg', title:'Database Administration', alt:"database icon", modal:"bottom", 
        contentTitle: "How it Shaped Me ...",
        content: "As a Database Administrator I found myself constantly reaching for ways to learn new skills and searching for projects that allowed me to use my object-oriented programming knowledge and logical thinking skills.",
        experience:[
            {date: "2017-2020", background:"/icons/klg.png", place: "Kirkland Lake Gold", position: "Senior Database Administrator"},
            {date: "2015-2017", background:"/icons/sas.png", place: "St. Andrew's Goldfields", position: "Database Administrator"},
        ]},
        {id: 4, name:'dog', image:'/icons/dog-training.svg', title:'Dog Training', alt:"dog training icon",modal:"top", 
        contentTitle: "How it Shaped Me ...",
        content: "I loved the impact I was making on other people's lives as a dog trainer but ultimately it left me lonely and mentally unstimulated, longing for a team environment.",
        experience:[
            {date: "2010-2015", background:"/icons/dogs-north.png", place: "Dog's North", position: "Owner, Lead Trainer"},
        ]},
        {id: 5, name:'end', image:'/icons/end-of-trail.png', title:'Web Development', alt:"end of trail icon", modal:"bottom", 
        contentTitle: "Here you Find Me ...",
        content: "In an exciting, fast-paced, changing field that pushes my imagination to its limits, and challenges my brain daily through constant learning and problem solving.",
        experience:[
            {id:'0', date: "Present", background:"/icons/brainstation3.png", place: "BrainStation", position:"Teaching Assistant"},
            {id:'1', date: "2020-2021", background:"/icons/brainstation3.png", place: "BrainStation", position: "Student: Full Stack Development"},
        ]}
    ];
       
    return (
        <>
            <img className="trail__image" src='/images/trail-path2.png' alt="trail" />
            {mapIcons.map(icon =><TrailIcon key={icon.id} icon={icon} />)}                    
        </>
    )
}

export default Experience