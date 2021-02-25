import React from 'react'
import './Experience.scss';

import TrailIcon from '../../components/TrailIcon/TrailIcon';

function Experience ({match}){
    const mapIcons=[
        {id: 0, name:'head', image:'/icons/trail-head.svg', title:'Trail Head', alt:"trail head", content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"},
        {id: 1, name:'hiker', image:'/icons/hiking-solid.svg', title:'Computer Science & Geophysics', alt:"hiker icon", content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"},
        {id: 2, name:'detour', image:'/icons/map-signs-solid.svg', title:'', alt:"trail sign icon",content: "Detour"},
        {id: 3, name:'db', image:'/icons/database.svg', title:'Database Administration', alt:"database icon",content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"},
        {id: 4, name:'dog', image:'/icons/dog-training.svg', title:'Dog Training', alt:"dog training icon",content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"},
        {id: 5, name:'end', image:'/icons/end-of-trail.png', title:'Web Development', alt:"end of trail icon",content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"}];
    
    return (
        <>
            <img className="trail__image" src='/images/trail-path2.png' alt="trail" />
            {mapIcons.map(icon =><TrailIcon key={icon.id} icon={icon} />)}                    
        </>
    )
}

export default Experience