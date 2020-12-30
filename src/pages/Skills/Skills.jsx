import React, {useState, createContext} from 'react';
import {Link} from 'react-router-dom';

import './Skills.scss';

import Header from '../../components/Header/Header';
import PageTitle from '../../components/PageTitle/PageTitle';
import {toggleStory} from '../../functions.jsx';

import SkillIcon from '../../components/SkillIcon/SkillIcon';
import BackPack from '../../components/BackPack/BackPack';

export const CardContext = createContext({
    markAsDone:null
})

const Skills = ({match, text}) => {
    const [skillList, setSkillList] = useState([
        {id: "0", status:"out", name:'skills__html', image:'/icons/html5-icon.png', title:"", alt:"html 5"},
        {id: "1", status:"out", name:'skills__css', image:'/icons/css3.png', title:"", alt:"css 3"},
        {id: "2", status:"out", name:'skills__js', image:'/icons/js-icon.png', title:"", alt:"javascript"},
        {id: "3", status:"out", name:'skills__react', image:'/icons/react-icon.png', title:"", alt:"react"},
        {id: "4", status:"out", name:'skills__sass', image:'/icons/sass-icon.png', title:"", alt:"sass"},
        {id: "5", status:"out", name:'skills__sql', image:'/icons/sql-icon.png', title:"", alt:"sql"},
        {id: "6", status:"out", name:'skills__axios', image:'/icons/axios-icon.png', title:"", alt:"axios"},
        {id: "7", status:"out", name:'skills__git', image:'/icons/git-icon.png', title:"", alt:"git"},    
    ]);

    const markAsDone = id => {
        const skill = skillList.filter((skill,i)=> skill.id === id);
        skill[0].status="in";
        setSkillList(skillList.filter((skill,i) => skill.id !== id).concat(skill[0]));
        console.log(skillList);
    }

    return (
 
        <CardContext.Provider value={{markAsDone}}>
            <div id="skills" className="skills">
                
                <PageTitle title= "Pack Your Bags" page="SKILLS" section="skills"/>
                
                <div className="skills__main">

                    {skillList.filter(skill => skill.status =="out").length ===0 ? <a className="skills__unpacked" href="#experience"> All Packed - Let's Go!</a> : <p className="skills__packed"> Drop the skills into the pack </p>}
                     
                     <BackPack/>

                    {skillList
                    .filter((skill,i)=> skill.status === "out")
                    .map((skill,index) => <SkillIcon  key={skill.id} id={skill.id} skill={skill} type="skills"/>)}

                </div>
                <div id="skills__white-overlay" className="white-overlay skills__full-story">
                    <div id="skills__full-text" className="full-text skills__full-story-text" > 
                        <h1 className="skills__full-story-text-title">SKILLS</h1>
                        <p className="skills__full-story-text-main"> "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
                        <img className="skills__full-story-up" onClick={()=>toggleStory("skills")} src="/icons/chevron_up.png" alt="up chevron"/>
                    </div>
                </div>
            </div>
        </CardContext.Provider>
       
    )
}

export default Skills;

