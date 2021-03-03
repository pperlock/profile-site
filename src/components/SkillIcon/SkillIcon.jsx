import React from 'react';
import {useDrag} from 'react-dnd';
// import ItemTypes from "../../utils/items";
import './SkillIcon.scss';

const ItemTypes = {
    CARD:'card',
};

/**
 * Props Passed in from Skills
 * @param {Object} skill
 * @param {String} id
 */
 
const SkillIcon = ({skill, id}) => {

    const [{isDragging}, drag] = useDrag({
        item:{
            type:ItemTypes.CARD,
            id:id,
            skill:skill.name,
            img:skill.image
        },
        collect: monitor=>({
            isDragging: !!monitor.isDragging(),
        })
    });
    return( 
        <img 
            ref={drag} 
            className= {(skill.id === "3" && true) ? `skills__icon ${skill.name} animate-skill` : `skills__icon ${skill.name}`}
            src={skill.image} 
            alt={skill.alt}  
            opacity={isDragging ? '0.5' : '1'} 
            data-aos-anchor=".skills"
            data-aos={skill.animation}
            data-aos-offset="500"
            data-aos-duration="3000"
        />
    )
}

export default SkillIcon
