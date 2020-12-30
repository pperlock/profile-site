import React from 'react'

import './PageTitle.scss';

import {toggleStory} from '../../functions.jsx';

function PageTitle({title, page, section}) {
    return (
        <div className="title">
                <h1 className="title-text">{title}</h1>
            <div className="chevron-wrapper" onClick={()=>toggleStory(section)} data-content={page}>
                <img className="title-down" src="/icons/chevron_down2.png" alt="down chevron" />
            </div>
        </div> 
    )
}

export default PageTitle
