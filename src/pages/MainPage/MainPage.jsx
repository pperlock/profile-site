import React, {useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import "./MainPage.scss";

import Header from '../../components/Header/Header';
import Section from '../../components/Section/Section';

function MainPage() {

    let sections=[
        {name:"about", title:"ABOUT ME", background: '/images/about-background2.jpg', scrollAnimation: {animation:"fade-up", anchor:"", anchorPlacement:""}, overlay:true},
        // {name:"skills", title:"SKILLS", background: false, scrollAnimation: {animation:"flip-left", anchor:".skills", anchorPlacement:"top-center"}, overlay:true},
        {name:"skills", title:"SKILLS", background: false, scrollAnimation: {animation:"", anchor:"", anchorPlacement:""}, overlay:true},
        {name:"experience", title:"EXPERIENCE", background: '/images/home-background2-2.jpg', scrollAnimation: {animation:"zoom-in-up", anchor:".experience", anchorPlacement:"top-center"}, overlay:true},
        {name:"projects", title:"PROJECTS", background: false, scrollAnimation: {animation:"", anchor:"", anchorPlacement:""}, overlay:false},
        {name:"contact", title:"CONTACT", background: false, scrollAnimation: {animation:"", anchor:"", anchorPlacement:""}, overlay:false}];

   

    useEffect(() => {
        // Aos.init({duration:2000, once:false, mirror:true});
        Aos.init({duration:3000});
    },[]);

    return (
        <>
            <Header />
            <main>
                <aside className = "main__contacts">
                    <a href="https://github.com/pperlock"><img className="main__contacts-icon" src="/icons/github-icon.svg" alt="github" /></a>
                    <a href="https://www.linkedin.com/in/pattiperlock"><img className="main__contacts-icon" src="/icons/linkedin-icon.svg" alt="linked in" /></a>
                    <a href="mailto:pattiperlock@gmail.com"><img className="main__contacts-icon" src="/icons/email-icon.svg" alt="email"/></a>
                </aside>

                {sections.map((section,i) => <Section key={i} section={section}/>)}
                
            </main>

        </>
    )
}

export default MainPage
