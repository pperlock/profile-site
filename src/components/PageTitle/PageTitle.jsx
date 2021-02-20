import React, {useState} from 'react'

import './PageTitle.scss';

import {toggleStory} from '../../functions.jsx';

function PageTitle({title, section, toggleOverlay}) {

    return (
        <div className="title">
            <h1 className="title-text">{title}</h1>
            {(section === "about" || section === "experience" || section ==="skills") &&
                <button className="arrow-wrapper">
                    <div className="arrow" onClick={()=>toggleOverlay(section)}></div>
                </button>}
        </div>

    )
}

export default PageTitle
