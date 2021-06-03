import React, {useEffect, useState} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import "./MainPage.scss";
import {disableBodyScroll, enableBodyScroll} from 'body-scroll-lock';

import Header from '../../components/Header/Header';
import Section from '../../components/Section/Section';
import Overlay from '../../components/Overlay/Overlay';

import {sections} from '../../data/data';

/**
 * Props Passed in from App.js
 * @param {Object} match
*/

function MainPage({match}) {

    //state used to determine of the bottom of the page has been reached
    const [reachedBottom, setReachedBottom] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);
    const [overlayToShow, setOverlayToShow] = useState("about");
    const [overlayTop, setOverlayTop] = useState(0);
    const [rotateSvg, setRotateSvg] = useState(false);


    useEffect(() => {
        if(!reachedBottom){
            //ensure that the about section renders at the appropriate spot when page initially loads
            document.getElementById("about").scrollIntoView({behavior: 'smooth'});
            Aos.init({duration:3000});
        }

        if(reachedBottom){
            //when the bottom is reached start spinning the svg
            setRotateSvg(true);
            //after the off-set path animation is finishde remove the animation
            setTimeout(()=>{
                setRotateSvg(false)
            },750)
        }else{
            setRotateSvg(false);
        }

    },[reachedBottom]);


    useEffect(()=>{
        //accounts for the space the header will take up past the scrolltop
        const headerOffset = window.innerWidth >= 768 ? 176 : 145;
        
        //every time the scrolling changes set the top of all the overlays to the correct top position to display - this accounts for any scrolling that takes place when overlay is toggled on
        sections.forEach((section,i)=>{
            if(i <= 2){
                const overLayElement = document.getElementById(`${section.name}__white-overlay`);
                overLayElement.style.top = `${overlayTop + headerOffset}px`;    
            }
        })
    },[overlayTop])

    //Determines if the bottom of the page has been reached and sets the state
    window.onscroll = () => {
        setReachedBottom((window.innerHeight + window.pageYOffset+200) >= document.body.offsetHeight);
        setOverlayTop(document.documentElement.scrollTop);
    };


    //Use state to hide/show overlays for a section
    const toggleOverlay = (sectionName) =>{
        setShowOverlay(!showOverlay);
        setOverlayToShow(sectionName);
        
        //disable scrolling for body but keep scrolling for overlay - mostly for mobile
        const overLayElement = document.getElementById(`${sectionName}__white-overlay`);
        !showOverlay ? disableBodyScroll(overLayElement) : enableBodyScroll(overLayElement);

    }

    return (
        <>
            <Header path={match.path}/>
            <main>
                <aside className = {reachedBottom ? "main__contacts main__contacts--bottom" : "main__contacts"}>
                    <a href="https://github.com/pperlock" target="_blank" rel="noopener noreferrer">
                        <img className={reachedBottom ? "main__contacts-icon--bottom1"  : "main__contacts-icon"} src={!!rotateSvg ? "/icons/github-icon-rotating.svg" : "/icons/github-icon.svg"} alt="github" /></a>
                    <a href="https://www.linkedin.com/in/pattiperlock" target="_blank" rel="noopener noreferrer">
                        <img className={reachedBottom ? "main__contacts-icon--bottom2"  : "main__contacts-icon"} src={!!rotateSvg ? "/icons/linkedin-icon-rotating.svg" : "/icons/linkedin-icon.svg"} alt="linked in" /></a>
                    <a href="mailto:pattiperlock@gmail.com">
                        <img className={reachedBottom ? "main__contacts-icon--bottom3"  : "main__contacts-icon"} src={!!rotateSvg ? "/icons/email-icon-rotating.svg" : "/icons/email-icon.svg"} alt="email"/></a>
                    <a href="/files/patti-perlock-resume-revised.pdf" target="_blank" rel="noopener noreferrer">
                    <img className={reachedBottom ? "main__contacts-icon--bottom4"  : "main__contacts-icon"} src={!!rotateSvg ? "/icons/user-profile-circle-rotating.svg" : "/icons/user-profile-circle.svg"} alt="resume"/></a>
                </aside>

                {sections.map((section,i) => section.overlay && <Overlay key={i} section={section.name} toggleOverlay={toggleOverlay} showOverlay={showOverlay} overlayToShow={overlayToShow}/>)}
                
                {/* renders a Section component for each individual section */}
                {sections.map((section,i) => <Section key={i} section={section} reachedBottom={reachedBottom} toggleOverlay={toggleOverlay} showOverlay={showOverlay}/>)}
            </main>

        </>
    )
}

export default MainPage
