import React, {useState, useEffect} from 'react'
import './TrailIcon.scss';

import TrailModal from '../TrailModal/TrailModal';

/**
 * Props Passed in from Experience
 * @param {Object} icon
*/

function TrailIcon({icon}) {

    //use state to determine if the modal is visibile or not
    const [showModal, setShowModal] = useState(false);
    const [modalPosition, setModalPosition] = useState({top:0, left:0, bottom:false});
    
    const toggleModal = (event, action) => {
        setShowModal(action);
        // console.log("scroll", window.scrollY);
        // console.log("page", event.pageY);
        // console.log("diff", event.pageY - (window.scrollY));

        
        const devices = [
            {minWidth:320, maxWidth:768, headerHeight:140, contentTop:1938, topLeft:0, middleLeft:0, bottomLeft:0, pageYMiddle:2300, scrollYMiddle:1881, scrollYBottom: 1500, sectionOffset:500},
            {minWidth:768, maxWidth:1280, headerHeight: 179, contentTop:2556, topLeft:35, middleLeft:-5, bottomLeft:35, pageYMiddle:0, scrollYMiddle:0, scrollYBottom: 0, sectionOffset:500},
            {minWidth:1280, maxWidth:1700, headerHeight:179, contentTop: 2900, topLeft:35, middleLeft:-5, bottomLeft:35, pageYMiddle:3217, scrollYMiddle:2800, scrollYBottom: 3000, sectionOffset:300},
            {minWidth:1700, maxWidth:3000, headerHeight: 179, contentTop:2900, topLeft:35, middleLeft:-15, bottomLeft:35, pageYMiddle: 3301, scrollYMiddle: 2991, scrollYBottom: 3000, sectionOffset:320}
        ]
 
        const modalPlacement = devices.find(device => window.innerWidth >= device.minWidth && window.innerWidth < device.maxWidth)
        let modalTop = ((window.scrollY + modalPlacement.headerHeight) - modalPlacement.contentTop) + (window.innerHeight - modalPlacement.sectionOffset)/2;

        if(event.pageY < modalPlacement.pageYMiddle){
            //keeps the modals inside the experience section on the top
            modalTop = modalTop <= 0 ? 0 : modalTop;
            setModalPosition({top:modalTop, left:modalPlacement.topLeft});
        }else if(event.pageY >= modalPlacement.pageYMiddle  && window.scrollY < modalPlacement.scrollYMiddle){
            setModalPosition({top:modalTop, left:modalPlacement.middleLeft});
        }else if(event.pageY >= modalPlacement.pageYMiddle  && window.scrollY >= modalPlacement.scrollYBottom){
            setModalPosition({top:modalTop, left:modalPlacement.bottomLeft, bottom:true});
        }

    }

    useEffect(()=>{
        const modal = document.querySelector(`.trail-modal-${icon.name}`);
        if(showModal && !modalPosition.bottom){
            modal.style.top = `${modalPosition.top}px`;
            modal.style.left = `${modalPosition.left}vw`;
        //keeps the modals for the bottom icons within the experience section
        }else if (showModal && modalPosition.bottom){
            modal.style.bottom = `0px`;
            modal.style.left = `${modalPosition.left}vw`;
        }
    }, [modalPosition, icon.name, showModal]);

    return(
        <>
            <div className={`trail__div trail__div-${icon.name}`} >
                <img onClick={(event)=>toggleModal(event,true, icon.name)} className= "trail-icon" id={icon.id} src={icon.image} alt={icon.alt} />
                <p className="trail-title">{icon.title}</p>
            </div>
            {showModal && <TrailModal icon={icon} onCloseRequest={() => setShowModal(false)}/>}

        </>
    )
}
export default TrailIcon
