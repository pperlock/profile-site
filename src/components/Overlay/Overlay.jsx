import React from 'react';
import {toggleStory} from '../../functions.jsx';
import './Overlay.scss';

import ExperienceOverlay from '../../components/ExperienceOverlay/ExperienceOverlay';
import AboutOverlay from '../../components/AboutOverlay/AboutOverlay';
import SkillsOverlay from '../../components/SkillsOverlay/SkillsOverlay';

function Overlay({section, showOverlay, toggleOverlay}) {

    return (
        <div id={section +"__white-overlay"} className={!showOverlay ? "white-overlay white-overlay--off full" : "white-overlay white-overlay--on full"}>
            {showOverlay && 
                <button className="overlay-arrow-wrapper">
                    <div className="overlay-arrow" onClick={()=>toggleOverlay(section)}></div>
                </button>
            }
            <div id={section + "__full-text"} className={!showOverlay ? "full-text full-text-off" : "full-text full-text--on"} > 
                {section ==="experience" &&  <ExperienceOverlay />}
                {section ==="about" &&  <AboutOverlay showOverlay={showOverlay}/>}
                {section ==="skills" &&  <SkillsOverlay />}
            </div>
        </div> 
    )
}

export default Overlay
