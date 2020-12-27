import React from 'react'

import './PageTitle.scss';

import {toggleStory} from '../../functions.jsx';

function PageTitle({page}) {
    return (
        <div className="title">
                <h1 className="title-text">{page}</h1>
                <img className="title-down" onClick={()=>toggleStory()} src="/icons/chevron_down.png" alt="down chevron"/>
        </div> 
    )
}

export default PageTitle
