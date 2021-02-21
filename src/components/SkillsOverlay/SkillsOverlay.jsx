import React from 'react';
import './SkillsOverlay.scss';

function SkillsOverlay() {
    return (

        <div className="skills__overlay"> 
            {/* <h2 className= "skills__title">SKILLS</h2> */}
            <div className="skills__list">
                <img className="skills__title" src="/images/declaration.png"/>
                <div className="skills__level">
                    <img className="skills__level-title" src="/images/proficient.png"/>
                    <div className="skills__level-terminal">
                        <img src="/images/output-terminal.png"/>
                        <img className="skills__level-output" src="/images/proficient-list.png"/>
                    </div>
                </div>
                <div className="skills__level">
                    <img className="skills__level-title" src="/images/competent.png"/>
                    <div className="skills__level-terminal">
                        <img src="/images/output-terminal.png"/>
                        <img className="skills__level-output" src="/images/competent-list.png"/>
                    </div>
                </div>

                <div className="skills__level">
                    <img className="skills__level-title" src="/images/introduced.png"/>
                    <div className="skills__level-terminal">
                        <img src="/images/output-terminal.png"/>
                        <img className="skills__level-output" src="/images/introduced-list.png"/>
                    </div>
                </div>
           
            </div>
        </div>
    )
}

export default SkillsOverlay