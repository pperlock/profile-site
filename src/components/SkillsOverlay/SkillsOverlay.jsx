import React from 'react';
import './SkillsOverlay.scss';

/**
 * Props Passed in from Overlay
 * @param {Boolean} showOverlay
*/

function SkillsOverlay({showOverlay}) {
    const skills = [
        {level: "proficient", number:"first", method:".isProficient();", output:"['React, 'HTML5', 'CSS3, 'SASS, 'Javascript', 'SQL', 'React Hooks']"},
        {level: "competent", number:"second", method:".isCompetent();", output:"['RESTful APIs', 'Node.js', 'Express', 'Git', 'VBA']"},
        {level: "introduced", number:"third", method:".isIntroduced();", output:"['Authentication', 'Deployment', 'MongoDB', 'Cloud Storage', 'Jira', 'jquery', 'bootstrap']"}
    ]

    return (
         <div className="skills__overlay"> 
            <div className="skills__list">
                <p className="skills__title"> <span className="skills__title-keyword">const </span> pattiPerlock =  <span className="skills__title-keyword">new </span> WebDeveloper();</p>
                {skills.map((skill,i) =>
                    <div  key={i} className="skills__level">
                        <div className = "skills__level-title">
                            <p className="skills__level-title-name" >pattiperlock</p> 
                            <p className={showOverlay ? `skills__level-title-method animate-type--${skill.number}` : "skills__level-title-method"}>{skill.method}</p>
                            <p className = "skills__cursor">|</p>
                        </div>
                        <div className="skills__level-terminal">
                            <p className={showOverlay && "skills__level-terminal-text"}> PROBLEMS <span className="terminal--underline">OUTPUT</span> DEBUG CONSOLE TERMINAL</p>
                            <p className={showOverlay && `skills__level-output--${skill.level}`}> {skill.output}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SkillsOverlay