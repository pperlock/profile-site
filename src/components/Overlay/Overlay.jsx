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

function Overlay({section, showOverlay, toggleOverlay, overlayToShow}) {

        return (
            <div id={section +"__white-overlay"}
                className={!showOverlay  ? "white-overlay--off full" : 
                // section === "skills" ? `white-overlay__skills--on white-overlay--skills full` : `white-overlay__${overlayToShow}--on full`}
                section !== overlayToShow ? `white-overlay__skills--off` : `white-overlay__${overlayToShow}--on full`}
                style={section !== "skills" ? {backgroundImage:"url('/images/white1.jpg')"} : {backgroundImage:"url('')"}}>
                
                
                {/* Conditionally render the appropiate overlay based on the secion name */}
                <div id={section + "__full-text"} className={!showOverlay ? "full-text full-text-off" : "full-text full-text--on"} > 
                    {(section ==="experience" && overlayToShow === "experience") &&  <ExperienceOverlay showOverlay={showOverlay}/>}
                    {(section ==="about"  && overlayToShow === "about") && <AboutOverlay showOverlay={showOverlay}/>}
                    {(section ==="skills"  && overlayToShow === "skills") &&  <SkillsOverlay showOverlay={showOverlay}/>}

                </div>
                <img className="full-text__close" onClick={()=>toggleOverlay(section)} src="/icons/down-triangle.svg"/>
            </div> 
            
        )
}

export default Overlay


                   {/* <button className="overlay-arrow-wrapper">
                        {/* Skills has a black background so give the arrow a different class to make it light */}
                        {/* <div className={section !== "skills" ? "overlay-arrow" : "overlay-arrow overlay-arrow-skills"} onClick={()=>toggleOverlay(section)}></div> */}
                    {/* </button> */}