import React from 'react';
import './ExperienceOverlay.scss';

/**
 * Props Passed in from Overlay
 * @param {Boolean} showOverlay
 */

function ExperienceOverlay() {

    // const events=[
    //     {id:'996c7cd9', date: "Feb - May 2021", type: "professional", background:"/icons/brainstation3.png", place: "BrainStation", position:"Teaching Assistant", 
    //         summary: ["Reading and debugging code of other developers", "Guiding students to adhere to industry-standard best practices to produce premium styling and functionality for their web applications.", "live coding presentations", "teaching students to problem solve using logical thinking."]},
    //     {id:'996c7ca8', date: "Oct 2020 - Feb 2021", type: "education", background:"/icons/brainstation3.png", place: "BrainStation", position: "Web Development Diploma", 
    //         summary: "Full-Stack Development  Experience using provided mockups in pdf and Figma format to create respnsive applications using a mobile first approach with HTML and SASS", "Created interactive sites using both React and js DOM manipulation.",  "Pulling data from APIs to serve dynamic content from outside sources.",  "Building Resful APIs using Node.js and express to serve up database information from MongoDB.",  "Dabbled in cloud storage with Firebase and passport authentication."]},
    //     {id:'996c7bea', date: "2017-2020", type: "professional", background:"/icons/klg.png", place: "Kirkland Lake Gold", position: "Senior Database Administrator", 
    //         summary: "Spearheaded the development and execution of a SQL server database focusing on the balance between creating a user- friendly experience and data quality. Designed and regulated a detailed QAQC monitoring program that reports the precision and accuracy of assay data, improving data reliability. Collaborated with end users and software developers remotely to ensure functionality requirements were met while simultaneously providing training and support." },
    //     {id:'996c7b2c', date: "2015-2017", type: "professional", background:"/icons/sas.png", place: "St. Andrew's Goldfields", position: "Database Administrator",
    //         summary: "Orchestrated a validation program on an unstandardized, undocumented database to increase the accuracy of data used for making profitable business decisions."},
    //     {id:'996c7a6e', date: "2010-2015", type: "professional", background:"/icons/dogs-north-simple.png", place: "Dog's North", position: "Owner, Lead Trainer",
    //         summary: "Scheduled, planned and delivered lesson plans to clients. Modified and delivered lesson plans based on the learning style observed for each client.  Organized and delivered adverstising campaigns."},
    //     {id:'996c797e', date: "2005-2010", type: "education", background:"/icons/uwo.png", place: "University of Western Ontario", position: "MSc.Geophysics", focus: "programming & statistical physics", thesis: "Imaging Faults in 3D Using Pattern Informatics"},
    //     {id:'996c7758', date: "2000-2005", type: "education", background:"/icons/uwo.png", place: "University of Western Ontario", position: "BSc.Geophysics", focus: "programming & optimization algorithms", thesis: "Modeling of the July 1998 Northridge Aftershock Using a Linear Inversion and Genetic Algorithm"}
    // ];
    const events=[
        {id:'996c7cd9', date: "Feb - May 2021", type: "professional", background:"/icons/brainstation3.png", place: "BrainStation", position:"Teaching Assistant", 
            summary: ["Reading and debugging code of other developers", 
                    "Guiding students to adhere to industry-standard best practices to produce premium styling and functionality for their web applications", 
                    "Live coding presentations", 
                    "Teaching students to problem solve using logical thinking"]
        },
        {id:'996c7ca8', date: "Oct 2020 - Feb 2021", type: "education", background:"/icons/brainstation3.png", place: "BrainStation", position: "Web Development Diploma", 
            summary: ["Full-Stack Development",
                "Experience using provided mockups in pdf and Figma format to create respnsive applications using a mobile first approach with HTML and SASS", 
                "Created interactive sites using both React and js DOM manipulation",  
                "Pulling data from APIs to serve dynamic content from outside sources",  
                "Building Resful APIs using Node.js and express to serve up database information from MongoDB",  
                "Dabbled in cloud storage with Firebase and passport authentication"]},
        {id:'996c7bea', date: "2017-2020", type: "professional", background:"/icons/klg.png", place: "Kirkland Lake Gold", position: "Senior Database Administrator", 
            summary: ["Spearheaded the development and execution of a SQL server database focusing on the balance between creating a user- friendly experience and data quality.",
                    "Designed and regulated a detailed QAQC monitoring program that reports the precision and accuracy of assay data, improving data reliability.",
                    "Collaborated with end users and software developers remotely to ensure functionality requirements were met while simultaneously providing training and support."] },
        {id:'996c7b2c', date: "2015-2017", type: "professional", background:"/icons/sas.png", place: "St. Andrew's Goldfields", position: "Database Administrator",
            summary: ["Orchestrated a validation program on an unstandardized, undocumented database to increase the accuracy of data used for making profitable business decisions."]},
        {id:'996c7a6e', date: "2010-2015", type: "professional", background:"/icons/dogs-north-simple.png", place: "Dog's North", position: "Owner, Lead Trainer",
            summary: ["Scheduled, planned and delivered lesson plans to clients", 
                    "Modified and delivered lesson plans based on the learning style observed for each client",
                    "Organized and delivered adverstising campaigns"]},
        {id:'996c797e', date: "2005-2010", type: "education", background:"/icons/uwo.png", place: "University of Western Ontario", position: "MSc.Geophysics", focus: "programming & statistical physics", thesis: "Imaging Faults in 3D Using Pattern Informatics"},
        {id:'996c7758', date: "2000-2005", type: "education", background:"/icons/uwo.png", place: "University of Western Ontario", position: "BSc.Geophysics", focus: "programming & optimization algorithms", thesis: "Modeling of the July 1998 Northridge Aftershock Using a Linear Inversion and Genetic Algorithm"}
    ];

    
    return (
        <div className="overlay-container">
            <div className="timeline">
                <div className="events">
                    {events.map(event =>
                        <div key={event.id} className="event">
                            <div className = "event__date">
                                <div className = "event__date-container">
                                    <time className = "event__date-time">{event.date}</time>
                                </div>
                            </div>
                            <div className = "event__line">
                                <div className="event__line-marker"></div>
                            </div>
                            <div className = "event__description">
                                <div className = "event__description-container">
                                    
                                    <div className = "event__description-header">
                                        <div className = "event__description-details">
                                            <p className = "event__description-position">{event.position}</p>
                                            <p className = "event__description-place">{event.place}</p>
                                        </div>
                                        <div className = "event__description-icons">
                                            <img className={event.id === "996c7b2c" ? "event__description-logo--sas" : "event__description-logo"} 
                                                src= {event.background} 
                                                alt="brainstation logo"/>
                                            <img className="event__description-logo" src= {event.type ==="education" ? "icons/education-icon.png" : "icons/professional-icon.png"} alt="brainstation logo"/>
                                        </div>
                                    </div>

                                    <div className="event__description-summary">
                                        {event.focus && <p className = "event__description-focus"><span className="event--emphasize">Focus:</span> {event.focus} </p>}
                                        {event.thesis && <p><span className="event--emphasize">Thesis:</span> {event.thesis} </p>}
                                        {/* {event.summary && <p>{event.summary}</p>} */}
                                        {event.summary && 
                                            <ul className="experience__list">
                                                {event.summary.map(item=>
                                                    <li className="experience__list-item">{item}</li>
                                                )}
                                            </ul>}
                                    </div>

                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ExperienceOverlay
