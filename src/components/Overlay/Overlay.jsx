import React from 'react';
import './Overlay.scss';

import ExperienceOverlay from '../../components/ExperienceOverlay/ExperienceOverlay';
import AboutOverlay from '../../components/AboutOverlay/AboutOverlay';
import SkillsOverlay from '../../components/SkillsOverlay/SkillsOverlay';

/**
 * Props Passed in from Section
 * @param {String} section
 * @param {Function} toggleOverlay - modifies state in the section component to hide/show overlay
 * @param {Boolean} showOverlay
 */

function Overlay({section, showOverlay, toggleOverlay}) {

    return (
        <div id={section +"__white-overlay"}
             
             className={!showOverlay ? "white-overlay full" : 
             section === "skills" ? "white-overlay white-overlay--on white-overlay--skills full" : "white-overlay white-overlay--on full"}
             style={section !== "skills" ? {backgroundImage:"url('/images/white1.jpg')"} : {backgroundImage:"url('')"}}>
            
            <div className = "full-text__title">
                {showOverlay && 
                    <button className="overlay-arrow-wrapper">
                        {/* Skills has a black background so give the arrow a different class to make it light */}
                        <div className={section !== "skills" ? "overlay-arrow" : "overlay-arrow overlay-arrow-skills"} onClick={()=>toggleOverlay(section)}></div>
                    </button>
                }
            </div>
            
            {/* Conditionally render the appropiate overlay based on the secion name */}
            <div id={section + "__full-text"} className={!showOverlay ? "full-text full-text-off" : "full-text full-text--on"} > 
                {section ==="experience" &&  <ExperienceOverlay showOverlay={showOverlay}/>}
                {section ==="about" && <AboutOverlay showOverlay={showOverlay}/>}
                {section ==="skills" &&  <SkillsOverlay showOverlay={showOverlay}/>}
            </div>
        
        </div> 
    )
}

export default Overlay
