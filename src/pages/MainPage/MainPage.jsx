import React, {useEffect, useState} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import "./MainPage.scss";

import Header from '../../components/Header/Header';
import Section from '../../components/Section/Section';

/**
 * Props Passed in from App.js
 * @param {Object} match
*/

function MainPage({match}) {

    const sections=[
        {name:"about", title:"ABOUT ME", background: '/images/about-background.jpg', scrollAnimation: {animation:"fade-up", anchor:"", anchorPlacement:""}, overlay:true},
        {name:"skills", title:"SKILLS", background: false, scrollAnimation: {animation:"", anchor:"", anchorPlacement:""}, overlay:true},
        {name:"experience", title:"EXPERIENCE", background: '/images/home-background2-2.jpg', scrollAnimation: {animation:"zoom-in-up", anchor:".experience", anchorPlacement:"top-center"}, overlay:true},
        {name:"projects", title:"PROJECTS", background: false, scrollAnimation: {animation:"", anchor:"", anchorPlacement:""}, overlay:false},
        {name:"contact", title:"CONTACT", background: "/images/mist-transparent.png", scrollAnimation: {animation:"", anchor:"", anchorPlacement:""}, overlay:false}];

    //state used to determine of the bottom of the page has been reached
    const [reachedBottom, setReachedBottom] = useState(false);

    useEffect(() => {
        //ensure that the about section renders at the appropirate spot when page initially loads
        document.getElementById("about").scrollIntoView({behavior: 'smooth'});
        Aos.init({duration:3000});
    },[]);

    //Determines if the bottom of the page has been reached and sets the state
    window.onscroll = event=> {
        setReachedBottom((window.innerHeight + window.pageYOffset+200) >= document.body.offsetHeight);
    };

    return (
        <>
            <Header path={match.path}/>
            <main>
                <aside className = {reachedBottom ? "main__contacts main__contacts--bottom" : "main__contacts"}>
                    <a href="https://github.com/pperlock" target="_blank" rel="noopener noreferrer"><img className="main__contacts-icon" src="/icons/github-icon.svg" alt="github" /></a>
                    <a href="https://www.linkedin.com/in/pattiperlock" target="_blank" rel="noopener noreferrer"><img className="main__contacts-icon" src="/icons/linkedin-icon.svg" alt="linked in" /></a>
                    <a href="mailto:pattiperlock@gmail.com"><img className="main__contacts-icon" src="/icons/email-icon.svg" alt="email"/></a>
                    <a href="/files/patti-perlock-resume-revised.pdf" target="_blank" rel="noopener noreferrer"><img className="main__contacts-icon" src="/icons/user-profile-circle.svg" alt="resume"/></a>
                </aside>

                {/* renders a Section component for each individual section */}
                {sections.map((section,i) => <Section key={i} section={section} reachedBottom={reachedBottom}/>)}
            </main>

        </>
    )
}

export default MainPage
