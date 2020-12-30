import React from 'react';

import Header from '../../components/Header/Header';
import About from '../../pages/About/About';
import Skills from '../../pages/Skills/Skills';
import Experience from '../../pages/Experience/Experience';
import Projects from '../../pages/Projects/Projects';
import Contact from '../../pages/Contact/Contact';

function MainPage() {
    return (
        <>
            <Header />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
        </>
    )
}

export default MainPage
