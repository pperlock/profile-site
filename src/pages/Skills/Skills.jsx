import React from 'react'
import './Skills.scss';

import Header from '../../components/Header/Header';
import PageTitle from '../../components/PageTitle/PageTitle';
import {toggleStory} from '../../functions.jsx';

import TrailIcon from '../../components/TrailIcon/TrailIcon';

function Skills({match}) {

    const skillsIcons=[
    {id: 0, name:'skills__html', image:'/icons/html5-icon.png', title:"", alt:"html 5"},
    {id: 1, name:'skills__css', image:'/icons/css3.png', title:"", alt:"css 3"},
    {id: 2, name:'skills__js', image:'/icons/js-icon.png', title:"", alt:"javascript"},
    {id: 3, name:'skills__react', image:'/icons/react-icon.png', title:"", alt:"react"},
    {id: 4, name:'skills__sass', image:'/icons/sass-icon.png', title:"", alt:"sass"},
    {id: 5, name:'skills__sql', image:'/icons/sql-icon.png', title:"", alt:"sql"},
    {id: 6, name:'skills__axios', image:'/icons/axios-icon.png', title:"", alt:"axios"},
    {id: 7, name:'skills__git', image:'/icons/git-icon.png', title:"", alt:"git"},    
    ];

    return (
        <>
        <Header path={match.path}/>
        <div className="skills" style={{backgroundImage: "url('/images/base-camp2.jpg')"}}>
            <PageTitle page="SKILLS"/>
            <div className="skills__main">
                <img className="skills__main-image" src="/images/backpack.png"/>
            </div>
            
            {skillsIcons.map(icon =><TrailIcon key={icon.id} icon={icon} type="skills"/>)} 

            <div id="white-overlay" className="white-overlay about__full-story">
                <div id="full-text" className="full-text about__full-story-text" > 
                    <h1 className="about__full-story-text-title">SKILLS</h1>
                    <p className="about__full-story-text-main"> "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
                    <img className="about__full-story-up" onClick={()=>toggleStory()} src="/icons/chevron_up.png" alt="up chevron"/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Skills
