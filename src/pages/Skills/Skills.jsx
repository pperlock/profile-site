import React, {useState, createContext} from 'react';

import './Skills.scss';

import SkillIcon from '../../components/SkillIcon/SkillIcon';
import BackPack from '../../components/BackPack/BackPack';

import {skillIcons} from '../../data/data';

export const CardContext = createContext({
    markAsDone:null
})

/**
 * Props Passed in from Section
 * @param {Object} match
 * @param {Boolean} showOverlay
 */

const Skills = ({showOverlay}) => {
    
    const [skillList, setSkillList] = useState(skillIcons);

    //changes the status of the skill to "in" when it is dropped into the backpack
    const markAsDone = id => {
        const skill = skillList.filter((skill,i)=> skill.id === id);
        skill[0].status="in";
        setSkillList(skillList.filter((skill,i) => skill.id !== id).concat(skill[0]));
    }

    return (
        <>
        <CardContext.Provider value={{markAsDone}}>
            {/* Show the appropriate text when the bag is packed */}
            {(skillList.filter(skill => skill.status === "out").length === 0 && !showOverlay) && <a className="skills__packed" href="#experience"> All Packed - Let's Go!</a>}
                
            {/* Show the appropriate text when no items are in bag */}
            {(skillList.filter(skill => skill.status === "out").length === 8 && !showOverlay) && 
                <div className="skills__packed-start">
                    <p> Pack Your Bag </p>
                    <p className="skills__packed-start--dnd"> Drag and Drop </p>
                </div>
            }
            
            {/* {(skillList.filter(skill => skill.status === "out").length === 8 && !showOverlay) && <img className="skills__hand" src="/icons/hand.png" alt="hand dropping item"/>} */}
            
            {/* render the backpack and skills icons*/}
            <div className="skills__main">
                <BackPack/>
                {skillList.filter((skill,i)=> skill.status === "out").map((skill,index) => 
                    <SkillIcon  
                        key={skill.id} 
                        id={skill.id} 
                        skill={skill} 
                        type="skills"
                    />)}
            </div>

        </CardContext.Provider>
        </>
       
    )
}

export default Skills;

