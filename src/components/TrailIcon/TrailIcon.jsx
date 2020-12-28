import React from 'react';
import './TrailIcon.scss';

function TrailIcon({icon}) {
    return(
        <div className={icon.name}>
            <img className= "trail-icon" src={icon.image} alt={icon.alt}/>
            <p className="trail-title">{icon.title}</p>
        </div>
    )
}
export default TrailIcon
