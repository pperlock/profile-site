import React from 'react'
import './About.scss';

import {toggleStory} from '../../functions.jsx';

import PageTitle from '../../components/PageTitle/PageTitle';

function About ({match}){
    return (
        <>
            <div id="about" className="about" style={{backgroundImage: "url('/images/about-background2.jpg')"}}> 
                <PageTitle title="ABOUT ME" page="Full Story" section="about"/>
                <div className="about__content">
                    <h2 className="about__tagline"> Builder, creator, problem solver, and life long learner adventuring through the web development landscape. </h2>
                    <a href="#skills" className="about__journey"> <h2>Follow me on my journey</h2> </a>
                </div>
                <div id="about__white-overlay" className="white-overlay about__full-story">
                    <div id="about__full-text" className="full-text about__full-story-text" > 
                        <h1 className="about__full-story-text-title">ABOUT ME</h1>
                        <p className="about__full-story-text-main"> "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
                        <img className="about__full-story-up" onClick={()=>toggleStory("about")} src="/icons/chevron_up.png" alt="up chevron"/>
                    </div>
                </div>
                <div className="transition1"></div>
            </div>
        </>
    )
}

export default About
