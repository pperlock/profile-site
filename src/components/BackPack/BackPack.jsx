import React, {useContext} from 'react'
import {useDrop} from 'react-dnd';
import {CardContext} from '../../pages/Skills/Skills';


const ItemTypes = {
    CARD:'card',
};

const BackPack = props => {

    const {markAsDone} = useContext(CardContext);

    const[{isOver}, drop] = useDrop({
        accept: ItemTypes.CARD,
        drop: (item, monitor)=> markAsDone(item.id),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),
    });

    return (
        <div ref={drop} className="skills__main">
            <img className="skills__main-image" src="/images/backpack.png"/>
            {props.children}
        </div> 
    )
}

export default BackPack
