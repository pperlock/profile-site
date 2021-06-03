import React from 'react';
import './ExperienceOverlay.scss';

import {events} from "../../data/data";

function ExperienceOverlay() {

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
                                        {event.summary && 
                                            <ul className="experience__list">
                                                {event.summary.map((item, i)=>
                                                    <li key={i} className="experience__list-item">{item}</li>
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
