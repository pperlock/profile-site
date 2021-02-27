import React, {useEffect, useState} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import "./MainPage.scss";

import Header from '../../components/Header/Header';
import Section from '../../components/Section/Section';

function MainPage({match}) {

    const sections=[
        {name:"about", title:"ABOUT ME", background: '/images/about-background2.jpg', scrollAnimation: {animation:"fade-up", anchor:"", anchorPlacement:""}, overlay:true},
        {name:"skills", title:"SKILLS", background: false, scrollAnimation: {animation:"", anchor:"", anchorPlacement:""}, overlay:true},
        {name:"experience", title:"EXPERIENCE", background: '/images/home-background2-2.jpg', scrollAnimation: {animation:"zoom-in-up", anchor:".experience", anchorPlacement:"top-center"}, overlay:true},
        {name:"projects", title:"PROJECTS", background: false, scrollAnimation: {animation:"", anchor:"", anchorPlacement:""}, overlay:false},
        {name:"contact", title:"CONTACT", background: "/images/mist-transparent.png", scrollAnimation: {animation:"", anchor:"", anchorPlacement:""}, overlay:false}];

    const [reachedBottom, setReachedBottom] = useState(false);

    useEffect(() => {
        document.getElementById("about").scrollIntoView({behavior: 'smooth'});
        Aos.init({duration:3000});
    },[]);

    window.onscroll = event=> {
        setReachedBottom((window.innerHeight + window.pageYOffset+200) >= document.body.offsetHeight);
    };

    return (
        <>
            <Header path={match.path}/>
            <main>
                <aside className = {reachedBottom ? "main__contacts main__contacts--bottom" : "main__contacts"}>
                    <a href="https://github.com/pperlock" target="_blank"><img className={reachedBottom ? "main__contacts-icon main__contacts-icon--bottom-first" : "main__contacts-icon"} src="/icons/github-icon.svg" alt="github" /></a>
                    <a href="https://www.linkedin.com/in/pattiperlock" target="_blank"><img className={reachedBottom ? "main__contacts-icon main__contacts-icon--bottom-second" : "main__contacts-icon"} src="/icons/linkedin-icon.svg" alt="linked in" /></a>
                    <a href="mailto:pattiperlock@gmail.com"><img className={reachedBottom ? "main__contacts-icon main__contacts-icon--bottom-third" : "main__contacts-icon"} src="/icons/email-icon.svg" alt="email"/></a>
                    <a href="/files/patti-perlock-resume-revised.pdf" target="_blank"><img className={reachedBottom ? "main__contacts-icon main__contacts-icon--bottom-fourth" : "main__contacts-icon"} src="/icons/resume-icon.svg" alt="resume"/></a>
                </aside>

                {sections.map((section,i) => <Section key={i} section={section} reachedBottom={reachedBottom}/>)}

                {reachedBottom && 
                <div className = "main__contacts-list">
                    <a className="main__contacts-list-text" href="https://github.com/pperlock" target="_blank" data-aos-anchor=".contact" data-aos-delay="900" data-aos="fade-left" data-aos-offset="500" data-aos-duration="500">github.com/pperlock</a>
                    <a className="main__contacts-list-text" href="https://www.linkedin.com/in/pattiperlock" target="_blank" data-aos-anchor=".contact" data-aos-delay="950" data-aos="fade-left" data-aos-offset="500" data-aos-duration="500">linkedin.com/in/pattiperlock</a>
                    <a className="main__contacts-list-text" href="mailto:pattiperlock@gmail.com" target="_blank" data-aos-anchor=".contact" data-aos-delay="1000" data-aos="fade-left" data-aos-offset="500" data-aos-duration="500">pattiperlock@gmail.com</a>
                    <a className="main__contacts-list-text" href="/files/patti-perlock-resume-revised.pdf" target="_blank" data-aos-anchor=".contact" data-aos-delay="1000" data-aos="fade-left" data-aos-offset="500" data-aos-duration="500">Resume</a>
                </div>
            }
            </main>

        </>
    )
}

export default MainPage
