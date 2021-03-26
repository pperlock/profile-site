import React from 'react'

import './PageTitle.scss';

import Sparkles from '../Sparkles/Sparkles';
/**
 * Props Passed in from Section
 * @param {Object} section
 * @param {Function} toggleOverlay - modifies state in the section component to hide/show overlay
 * @param {Boolean} showOverlay
 */

function PageTitle({section, toggleOverlay, showOverlay}) {

    return (
        <div className={showOverlay ? "title title-hide" : "title"}>
            <h1 className={section.name !=="contact" ? "title-text" : "title-text title-text--contact"}>{section.title}</h1>
            
            {section.overlay &&
                <>
                <div className="arrow-wrapper">
                   <div className="arrow" onClick={()=>toggleOverlay(section)}></div>
                </div>
                {/* <p>LEARN MORE</p> */}
                </>}
        </div>

    )
}

export default PageTitle
