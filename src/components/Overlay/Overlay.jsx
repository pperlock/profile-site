import React from 'react';
import {toggleStory} from '../../functions.jsx';
import './Overlay.scss';

import ExperienceOverlay from '../../components/ExperienceOverlay/ExperienceOverlay';

function Overlay({section}) {
    return (
        <div id={section +"__white-overlay"} className={"white-overlay " + section + "__full-story"}>
            <div id={section + "__full-text"} className={"full-text " + section + "__full-story-text"} > 
                {section ==="experience" &&  <ExperienceOverlay />}
                <img className={section + "__full-story-up"} onClick={()=>toggleStory(section)} src="/icons/chevron_up.png" alt="up chevron"/>   
            </div>
            
        </div> 
    )
}

export default Overlay
