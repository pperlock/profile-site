import React from 'react';
import ReactDOM from 'react-dom';
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
            ReactDOM.createPortal(
                <div id={section +"__white-overlay"}
                    className={!showOverlay  ? "white-overlay" :  section !== overlayToShow ? `white-overlay` : `white-overlay__${overlayToShow}--on`}
                    style={section !== "skills" ? {backgroundImage:"url('/images/white1.jpg')"} : {backgroundImage:"url('')"}}>
                    
                    {/* Conditionally render the appropiate overlay based on the secion name */}
                    <div id={section + "__full-text"} className={!showOverlay ? "full-text" : "full-text--on"} > 
                        {(section ==="experience" && overlayToShow === "experience") &&  <ExperienceOverlay showOverlay={showOverlay}/>}
                        {(section ==="about"  && overlayToShow === "about") && <AboutOverlay showOverlay={showOverlay}/>}
                        {(section ==="skills"  && overlayToShow === "skills") &&  <SkillsOverlay showOverlay={showOverlay}/>}
                    </div>
                    <div className= {(section === overlayToShow && showOverlay) ? "close__overlay" : "close__overlay--off"}>
                        <img className="close__overlay-icon" onClick={()=>toggleOverlay(section)} src="/icons/down-triangle.svg" alt="close modal"/>
                    </div>
                </div>,
                document.getElementById('overlay-root')
            ) 
            
        )
}

export default Overlay