import React, {useState, createContext} from 'react';

import './Skills.scss';

import SkillIcon from '../../components/SkillIcon/SkillIcon';
import BackPack from '../../components/BackPack/BackPack';

export const CardContext = createContext({
    markAsDone:null
})

const Skills = ({match, text}) => {
    const [skillList, setSkillList] = useState([
        {id: "0", status:"out", name:'skills__html-css', image:'/icons/html5-css3.png', title:"", alt:"html 5"},
        {id: "1", status:"out", name:'skills__js', image:'/icons/js-icon2.png', title:"", alt:"javascript"},
        {id: "2", status:"out", name:'skills__node', image:'/icons/nodejs-icon.svg', title:"", alt:"nodejs"},
        {id: "3", status:"out", name:'skills__react', image:'/icons/react-icon.png', title:"", alt:"react"},
        {id: "4", status:"out", name:'skills__sass', image:'/icons/sass-icon.png', title:"", alt:"sass"},
        // {id: "5", status:"out", name:'skills__sql', image:'/icons/sql.png', title:"", alt:"sql"},
        {id: "6", status:"out", name:'skills__axios', image:'/icons/axios-icon.png', title:"", alt:"axios"},
        {id: "7", status:"out", name:'skills__git', image:'/icons/git-icon.png', title:"", alt:"git"}, 
        {id: "8", status:"out", name:'skills__databases', image:'/icons/databases.png', title:"", alt:"sql"},   
    ]);

    const markAsDone = id => {
        const skill = skillList.filter((skill,i)=> skill.id === id);
        skill[0].status="in";
        setSkillList(skillList.filter((skill,i) => skill.id !== id).concat(skill[0]));
        console.log(skillList);
    }

    return (
        <CardContext.Provider value={{markAsDone}}>
            {skillList.filter(skill => skill.status === "out").length === 0 && <a className="skills__packed" href="#experience"> All Packed - Let's Go!</a>}
            <div className="skills__main">
                    
                <BackPack data-aos-anchor=".projects" data-aos="fade-left" data-aos-offset="500" data-aos-duration="3000"/>

                {skillList
                .filter((skill,i)=> skill.status === "out")
                .map((skill,index) => <SkillIcon  key={skill.id} id={skill.id} skill={skill} type="skills"/>)}

            </div>
        </CardContext.Provider>
       
    )
}

export default Skills;

