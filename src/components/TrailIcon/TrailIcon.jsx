import React from 'react'

function TrailIcon({icon}) {
    return (
        <div className={icon.name}>
            <img className={`${icon.name}-icon`} src={icon.image}/>
            <p className={`${icon.name}-title`}>{icon.title}</p>
        </div>
    )
}

export default TrailIcon
