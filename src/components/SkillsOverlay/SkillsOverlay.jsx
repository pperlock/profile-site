import React from 'react';
import './SkillsOverlay.scss';

function SkillsOverlay({showOverlay}) {
    return (

        <div className="skills__overlay"> 
            <div className="skills__list">
                <p className="skills__title"> <span className="skills__title-keyword">const </span> pattiPerlock =  <span className="skills__title-keyword">new </span> WebDeveloper();</p>
                <div className="skills__level">
                    <div className = "skills__level-title">
                        <p className="skills__level-title-name" >pattiperlock</p> 
                        <p className={showOverlay ? "skills__level-title-method animate-type--first" : "skills__level-title-method"}>.isProficient();</p>
                        <p className = "skills__cursor">|</p>
                    </div>
                    <div className="skills__level-terminal">
                        <p className={showOverlay && "skills__level-terminal-text"}> PROBLEMS <span className="terminal--underline">OUTPUT</span> DEBUG CONSOLE TERMINAL</p>
                        <p className={showOverlay && "skills__level-output--proficient"}> ['React, 'HTML5', 'CSS3, 'SASS, 'Javascript', 'SQL', 'React Hooks']</p>
                    </div>
                </div>
                <div className="skills__level">
                    <div className = "skills__level-title">
                        <p className="skills__level-title-name" >pattiperlock</p> 
                        <p className={showOverlay ? "skills__level-title-method animate-type--second" : "skills__level-title-method"}>.isCompetent();</p>
                        <p className = "skills__cursor">|</p>
                    </div>
                    <div className="skills__level-terminal">
                        <p className={showOverlay && "skills__level-terminal-text"}> PROBLEMS <span className="terminal--underline">OUTPUT</span> DEBUG CONSOLE TERMINAL</p>
                        <p className={showOverlay && "skills__level-output--competent"}> ['RESTful APIs', 'Node.js', 'Express', 'Git', 'VBA']</p>
                    </div>
                </div>

                <div className="skills__level">
                     <div className = "skills__level-title">
                        <p className="skills__level-title-name" >pattiperlock</p> 
                        <p className={showOverlay ? "skills__level-title-method animate-type--third" : "skills__level-title-method"}>.isIntroduced();</p>
                        <p className = "skills__cursor">|</p>
                    </div>
                    <div className="skills__level-terminal">
                        <p className={showOverlay && "skills__level-terminal-text"}> PROBLEMS <span className="terminal--underline">OUTPUT</span> DEBUG CONSOLE TERMINAL</p>
                        <p className={showOverlay && "skills__level-output--introduced"}> ['Authentication', 'Deployment', 'MongoDB', 'Cloud Storage', 'Jira', 'jquery', 'bootstrap']</p>
                    </div>
                </div>
           
            </div>
        </div>
    )
}

export default SkillsOverlay