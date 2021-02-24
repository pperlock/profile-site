import React from 'react';
import './Overlay.scss';

import ExperienceOverlay from '../../components/ExperienceOverlay/ExperienceOverlay';
import AboutOverlay from '../../components/AboutOverlay/AboutOverlay';
import SkillsOverlay from '../../components/SkillsOverlay/SkillsOverlay';

function Overlay({section, showOverlay, toggleOverlay}) {

    return (
        <div id={section +"__white-overlay"}
             className={!showOverlay ? "white-overlay white-overlay--off full" : 
             section === "skills" ? "white-overlay white-overlay--on white-overlay--skills full" : "white-overlay white-overlay--on full"}
             style={section !== "skills" ? {backgroundImage:"url('/images/white1.jpg')"} : {backgroundImage:"url('')"}}>
            
            <div className = "full-text__title">
                {(section === "about" && showOverlay) &&  <h1 className="full-text__title-text"> PATTI PERLOCK</h1>}
                {showOverlay && 
                    <button className="overlay-arrow-wrapper">
                        <div className="overlay-arrow" onClick={()=>toggleOverlay(section)}></div>
                    </button>
                }
            </div>
            <div id={section + "__full-text"} className={!showOverlay ? "full-text full-text-off" : "full-text full-text--on"} > 
                {section ==="experience" &&  <ExperienceOverlay showOverlay={showOverlay}/>}
                {section ==="about" && <AboutOverlay showOverlay={showOverlay}/>}
                {section ==="skills" &&  <SkillsOverlay showOverlay={showOverlay}/>}
            </div>
        </div> 
    )
}

export default Overlay
