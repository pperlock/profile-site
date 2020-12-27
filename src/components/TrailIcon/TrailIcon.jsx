import React from 'react';
import './TrailIcon.scss';

function TrailIcon({icon, type, provided, innerRef}) {
    // const {provided, innerRef} = props;
    return (
        <div className={icon.name} {...provided.draggableProps} {...provided.dragHandleProps} ref={innerRef}>
            <img className= {`${type}-icon`} src={icon.image} alt={icon.alt}/>
            <p className={`${type}-title`}>{icon.title}</p>
        </div>
    )
}

export default TrailIcon
