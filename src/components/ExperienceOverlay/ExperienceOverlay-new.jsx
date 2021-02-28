import React from 'react';
import './ExperienceOverlay.scss';

function ExperienceOverlay({showOverlay}) {

    const experiences = [
        {id:'0', date: "Present", type:"education", background:"/icons/brainstation3.png", place: "BrainStation", position:"Teaching Assistant"},
        {id:'1', date: "2020-2021", type:"education", background:"/icons/brainstation3.png", place: "BrainStation", position: "Student: Full Stack Development"},
        {id:'2', date: "2017-2020", type:"professional",background:"/icons/klg.png", place: "Kirkland Lake Gold", position: "Senior Database Administrator"},
        {id:'3', date: "2015-2017", type:"professional",background:"/icons/sas.png", place: "St. Andrew's Goldfields", position: "Database Administrator"},
        {id:'4', date: "2005-2010", type:"education", background:"/icons/uwo.png", place: "University of Western Ontario", position: "Student: MSc.Geophysics"},
        {id:'5', date: "2000-2005", type:"education", background:"/icons/uwo.png", place: "University of Western Ontario", position: "Student: BSc.Geophysics"},
    
    ]; 
    return (
        <>
            <div className="experience-overlay"> 
                {showOverlay && experiences.map((experience,i)=>
                    <div className="experience-overlay__experience">
                    <p className="experience-overlay__extend"> + </p>
                        <div className="experience-overlay__place">
                            <div className="experience-overlay__place-circle">
                                <img src={experience.background} className="experience-overlay__place-img"/>
                            </div>
                           {i !== 5 && <div className= "experience-overlay__place-divider"></div>}
                        </div>
                        <div className="experience-overlay__description">
                            <p className="experience-overlay__description-date">{experience.date}</p>
                            <p className="experience-overlay__description-place">{experience.place}</p>
                            <p className="experience-overlay__description-position">{experience.position}</p>
                            <p className="experience-overlay__description-position">{experience.content}</p>
                        </div>
                
                    </div>
                )}

            </div>
                    
        </>
    )
}

export default ExperienceOverlay
