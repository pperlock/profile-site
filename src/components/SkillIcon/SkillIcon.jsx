import React from 'react';
import {useDrag} from 'react-dnd';
// import ItemTypes from "../../utils/items";
import './SkillIcon.scss';

const ItemTypes = {
    CARD:'card',
};

const SkillIcon = props => {

    const {type, skill} = props;
    const [{isDragging}, drag] = useDrag({
        item:{
            type:ItemTypes.CARD,
            id:props.id,
        },
        collect: monitor=>({
            isDragging: !!monitor.isDragging(),
        })
    });

    return( 
        <img ref={drag} className= "skill-icon" src={skill.image} alt={skill.alt}  opacity={isDragging ? '0.5' : '1'}/>
    )
}

export default SkillIcon
