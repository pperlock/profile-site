import React from 'react';
import './SkillsOverlay.scss';

function SkillsOverlay({showOverlay}) {
    return (

        <div className="skills__overlay"> 
            {/* <h2 className= "skills__title">SKILLS</h2> */}
            <div className="skills__list">
                {/* <img className="skills__title" src="/images/declaration.png"/> */}
                {/* <div className="skills__title"> */}
                <p className="skills__title"> <span className="skills__title-keyword">let </span> pattiPerlock =  <span className="skills__title-keyword">new </span> WebDeveloper();</p>
                {/* </div> */}
                <div className="skills__level">
                    <div className = "skills__level-title">
                        <p className="skills__level-title-name" >pattiperlock</p> 
                        <p className={showOverlay ? "skills__level-title-method animate-type--first" : "skills__level-title-method"}>.isProficient();</p>
                        <p className = "skills__cursor">|</p>
                    </div>
                    <div className="skills__level-terminal">
                        <img src="/images/output-terminal.png"/>
                        <img className={showOverlay ? "skills__level-output skills__level-output--first" : "skills__level-output"} src="/images/proficient-list.png"/>
                    </div>
                </div>
                <div className="skills__level">
                    <div className = "skills__level-title">
                        <p className="skills__level-title-name" >pattiperlock</p> 
                        <p className={showOverlay ? "skills__level-title-method animate-type--second" : "skills__level-title-method"}>.isCompetent();</p>
                        <p className = "skills__cursor">|</p>
                    </div>
                    <div className="skills__level-terminal">
                        <img src="/images/output-terminal.png"/>
                        <img className={showOverlay ? "skills__level-output skills__level-output--second" : "skills__level-output"} src="/images/competent-list.png"/>
                    </div>
                </div>

                <div className="skills__level">
                     <div className = "skills__level-title">
                        <p className="skills__level-title-name" >pattiperlock</p> 
                        <p className={showOverlay ? "skills__level-title-method animate-type--third" : "skills__level-title-method"}>.isIntroduced();</p>
                        <p className = "skills__cursor">|</p>
                    </div>
                    <div className="skills__level-terminal">
                        <img src="/images/output-terminal.png"/>
                        <img className={showOverlay ? "skills__level-output skills__level-output--third" : "skills__level-output"} src="/images/introduced-list.png"/>
                    </div>
                </div>
           
            </div>
        </div>
    )
}

export default SkillsOverlay