import React from 'react';
import './TrailIcon.scss';

function TrailIcon({icon, type}) {
    return (
        <div className={icon.name}>
            <img className= {`${type}-icon`} src={icon.image} alt={icon.alt}/>
            <p className={`${type}-title`}>{icon.title}</p>
        </div>
    )
}

export default TrailIcon
