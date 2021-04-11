import React from 'react'
import './Experience.scss';

import TrailIcon from '../../components/TrailIcon/TrailIcon';

import {mapIcons} from '../../data/data';

function Experience (){
    return (
        <>
            {/* render the trail image along with each icon using the declared mapIcons array */}
            <img className="trail__image" src='/images/trail-path2.png' alt="trail" />
            {mapIcons.map(icon =><TrailIcon key={icon.id} icon={icon}/>)}                 
        </>
    )
}

export default Experience