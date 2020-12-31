import React, {useContext} from 'react'
import {useDrop} from 'react-dnd';
import {CardContext} from '../../pages/Skills/Skills';

import './BackPack.scss';


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
        <div ref={drop} className="backpack">
            <img className="backpack__image" src="/images/backpack.png" alt="backpack"/>
        </div> 
    )
}

export default BackPack
