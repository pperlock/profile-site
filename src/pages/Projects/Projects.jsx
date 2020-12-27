import React from 'react'

// import './Skills.scss';

import Header from '../../components/Header/Header';
import PageTitle from '../../components/PageTitle/PageTitle';
import {toggleStory} from '../../functions.jsx';

function Projects({match}) {
    return (
        <>
        <Header path={match.path}/>
        <div className="skills" style={{backgroundImage: "url('/images/home-background2-2.jpg')"}}>
            <PageTitle page="PROJECTS"/>
            <div id="white-overlay" className="white-overlay about__full-story">
                <div id="full-text" className="full-text about__full-story-text" > 
                    <h1 className="about__full-story-text-title">PROJECTS</h1>
                    <p className="about__full-story-text-main"> "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
                    <img className="about__full-story-up" onClick={()=>toggleStory()} src="/icons/chevron_up.png" alt="up chevron"/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Projects
