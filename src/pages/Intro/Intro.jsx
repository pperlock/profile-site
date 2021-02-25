import React, {useState} from 'react'
import {Link} from 'react-router-dom';

import './Intro.scss';

function Intro() {

    const [loadState, setLoadState] = useState(false);

    window.onload = (event) => {
        setLoadState(true);
        console.log('page is fully loaded');
    };

    if (loadState) {
    return (
        <main className="intro"> 
            <div className="logo">
                <Link to="/main" className="logo-text">
                    <p className="logo__name"> PATTI PERLOCK </p>
                    <p className="logo__title"> WEB DEVELOPER </p>
                </Link>
                <div className="logo__filter">
                    <img className="logo__image" src='/icons/silhouette3.png' alt="mountain-logo" />
                </div>
            </div>
                {/* <Link  to="/main" className="enter">ENTER</Link> */}
            <Link className="video__link" to="/main">
                <video className="video" autoPlay muted>
                    <source src="/images/Final-50mm.mp4" type="video/mp4"></source>
                </video>
            </Link>
        </main>
    )
    }else{
        return(
            <h1>loading</h1>
        )
    }
}

export default Intro
