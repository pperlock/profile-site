import React, {useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import "./MainPage.scss";

import Header from '../../components/Header/Header';
import Overlay from '../../components/Overlay/Overlay';
import PageTitle from '../../components/PageTitle/PageTitle';
import About from '../../pages/About/About';
import Skills from '../../pages/Skills/Skills';
import Experience from '../../pages/Experience/Experience';
import Projects from '../../pages/Projects/Projects';
import Contact from '../../pages/Contact/Contact';

function MainPage() {

    useEffect(() => {
        // Aos.init({duration:2000, once:false, mirror:true});
        Aos.init({duration:3000});
    },[]);

    return (
        <>
            <Header />
            <main>
            <div className = "main__contacts">
                <img src="/icons/github-icon.png" />
                <img src="/icons/linkedin-icon.svg" />
                <img src="/icons/email-icon.svg" />
            </div>

            <div className="about" style={{backgroundImage: "url('/images/about-background2.jpg')"}}>
                <PageTitle title="ABOUT ME" page="Full Story" section="about"/>
                <div className="about__content" data-aos="fade-up" >
                    <About />
                </div>
                <Overlay section="about"/>
                <div className="transition1"></div>
            </div>

            
            <div className="skills" >
                <PageTitle title= "SKILLS" page="SKILLS" section="skills" />
                <div className="skills__pack"> 
                    <p className="skills__unpacked"> Pack Your Bag </p>
                    <img className="skills__hand" src="/icons/hand.png" />
                </div>
                <div className="skills__content" data-aos="flip-left" data-aos-anchor-placement="top-center" >
                    <Skills />
                </div>
                <Overlay section="skills"/>
            </div>

            <div className="experience"  style={{backgroundImage: "url('/images/home-background2-2.jpg')"}}>
                <div className="transition2"></div>
                <PageTitle title="MY PATH TO WEB DEVELOPMENT" page="Education & Experience" section="experience"/>
                <div className="experience__content" data-aos="zoom-in-up">
                    <Experience />
                </div>
                <Overlay section="experience"/>
                <div className="transition3"></div>
            </div>

            <div className="projects">
                <Projects />
                <img className="projects__mountain" src="/images/mountain4.png" alt="top of mountain" data-aos-anchor=".projects" data-aos="fade-left" data-aos-offset="500" data-aos-duration="3000"/>
            </div>

            <div className="contact">
                <PageTitle title="CONTACT" page="Contact"/>
                <Contact />
            </div>
            </main>

        </>
    )
}

export default MainPage
