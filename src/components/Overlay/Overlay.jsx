import React from 'react';
import {toggleStory} from '../../functions.jsx';
import './Overlay.scss';

import ExperienceOverlay from '../../components/ExperienceOverlay/ExperienceOverlay';
import AboutOverlay from '../../components/AboutOverlay/AboutOverlay';
import SkillsOverlay from '../../components/SkillsOverlay/SkillsOverlay';

function Overlay({section}) {
    return (
        <div id={section +"__white-overlay"} className="white-overlay full">
            <div id={section + "__full-text"} className="full-text" > 
                {section ==="experience" &&  <ExperienceOverlay />}
                {section ==="about" &&  <AboutOverlay />}
                {section ==="skills" &&  <SkillsOverlay />}
                <img className={"expand--up"} onClick={()=>toggleStory(section)} src="/icons/chevron_up.png" alt="up chevron"/>
            </div>
            
        </div> 
    )
}

export default Overlay
