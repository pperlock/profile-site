import React, {useContext} from 'react'
import {useDrop} from 'react-dnd';
import {CardContext} from '../../pages/Skills/Skills';
import "aos/dist/aos.css";


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
            <img data-aos-anchor=".skills" data-aos="flip-left" data-aos-offset="10" data-aos-duration="3000" data-aos-anchor-placement="top-center" className="backpack__image" src="/images/backpack.png" alt="backpack"/>
        </div> 
    )
}
export default BackPack
