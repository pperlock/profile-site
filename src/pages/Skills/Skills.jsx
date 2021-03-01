import React, {useState, createContext} from 'react';

import './Skills.scss';

import SkillIcon from '../../components/SkillIcon/SkillIcon';
import BackPack from '../../components/BackPack/BackPack';

export const CardContext = createContext({
    markAsDone:null
})

/**
 * Props Passed in from Section
 * @param {Object} match
 * @param {Boolean} showOverlay
 */

const Skills = ({match, showOverlay}) => {
    
    const [skillList, setSkillList] = useState([
        {id: "0", status:"out", name:'skills__html-css', image:'/icons/html5-css3.png', title:"", alt:"html 5", animation:"fade-up", },
        {id: "1", status:"out", name:'skills__js', image:'/icons/js-icon2.png', title:"", alt:"javascript",  animation:"fade-left"},
        {id: "2", status:"out", name:'skills__node', image:'/icons/nodejs-icon.svg', title:"", alt:"nodejs",  animation:"fade-down"},
        {id: "3", status:"out", name:'skills__react', image:'/icons/react-icon.png', title:"", alt:"react",  animation:"fade-right"},
        {id: "4", status:"out", name:'skills__sass', image:'/icons/sass-icon.png', title:"", alt:"sass",  animation:"fade-up-left"},
        {id: "5", status:"out", name:'skills__axios', image:'/icons/axios-icon.png', title:"", alt:"axios",  animation:"fade-up-right"},
        {id: "6", status:"out", name:'skills__git', image:'/icons/git-icon.png', title:"", alt:"git",  animation:"fade-down-left"}, 
        {id: "7", status:"out", name:'skills__databases', image:'/icons/databases.png', title:"", alt:"sql",  animation:"fade-down-right"},   
    ]);

    //changes the status of the skill to "in" when it is dropped into the backpack
    const markAsDone = id => {
        const skill = skillList.filter((skill,i)=> skill.id === id);
        skill[0].status="in";
        setSkillList(skillList.filter((skill,i) => skill.id !== id).concat(skill[0]));
    }

    return (
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
       
    )
}

export default Skills;

