import React, {useState} from 'react'

import './PageTitle.scss';

import {toggleStory} from '../../functions.jsx';

function PageTitle({title, section, toggleOverlay, showOverlay}) {

    return (
        <div className={showOverlay ? "title title-hide" : "title"}>
            <h1 className={section.name !=="contact" ? "title-text" : "title-text title-text--contact"}>{title}</h1>
            {section.overlay &&
                <button className="arrow-wrapper">
                    <div className="arrow" onClick={()=>toggleOverlay(section)}></div>
                </button>}
        </div>

    )
}

export default PageTitle
