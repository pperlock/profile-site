import React, {useState, useEffect, useRef} from 'react'
import './TrailIcon.scss';

import TrailModal from '../TrailModal/TrailModal';

/**
 * Props Passed in from Experience
 * @param {Object} icon
*/

function TrailIcon({icon}) {

    const iconRef = useRef(null);
    
    //use state to determine if the modal is visibile or not
    const [showModal, setShowModal] = useState(false);
    const [modalPosition, setModalPosition] = useState({top:0, left:0});
    const [currentIcon, setCurrentIcon] = useState();
    
    const toggleModal = (event, action, iconName) => {
        setCurrentIcon(iconName);
        console.log(action);
        setShowModal(action);
        console.log("scroll", window.scrollY);
        console.log("page", event.pageY);
        console.log("diff", event.pageY - (window.scrollY));

        
        
        // const headerHeight =  window.innerWidth < 768 ? 179 : 140;
        // const contentTop = window.innerWidth < 768 ? 1938 : ((window.innerWidth >= 768  && window.innerWidth < 1280) ? 2574: 2900);
        
        const devices = [
            {minWidth:320, maxWidth:768, headerHeight:140, contentTop:1938, topLeft:0, middleLeft:0, bottomLeft:0, pageYMiddle:0, scrollYMiddle:0, scrollYBottom: 3000, sectionOffset:500},
            {minWidth:768, maxWidth:1280, headerHeight: 179, contentTop:2556, topLeft:35, middleLeft:-5, bottomLeft:35, pageYMiddle:0, scrollYMiddle:0, scrollYBottom: 0, sectionOffset:500},
            {minWidth:1280, maxWidth:1700, headerHeight:179, contentTop: 2900, topLeft:35, middleLeft:-5, bottomLeft:35, pageYMiddle:3217, scrollYMiddle:2800, scrollYBottom: 3000, sectionOffset:300},
            {minWidth:1700, maxWidth:3000, headerHeight: 179, contentTop:2900, topLeft:35, middleLeft:-15, bottomLeft:35, pageYMiddle: 3301, scrollYMiddle: 2991, scrollYBottom: 3000, sectionOffset:320}
        ]
        
        //Still to find
        //top/middle/bottom breaks for mobile and tablet desktop
        //what is 320?

        const modalPlacement = devices.find(device => window.innerWidth >= device.minWidth && window.innerWidth < device.maxWidth)
        let modalTop = ((window.scrollY + modalPlacement.headerHeight) - modalPlacement.contentTop) + (window.innerHeight - modalPlacement.sectionOffset)/2;
        
        console.log(window.innerHeight);
         
        if(event.pageY < modalPlacement.pageYMiddle){
            console.log(modalTop);
            modalTop = modalTop <= 0 ? 0 : modalTop;
            setModalPosition({top:modalTop, left:modalPlacement.topLeft});
        }else if(event.pageY >= modalPlacement.pageYMiddle  && window.scrollY < modalPlacement.scrollYMiddle){
            setModalPosition({top:modalTop, left:modalPlacement.middleLeft});
        }else if(event.pageY >= modalPlacement.pageYMiddle  && window.scrollY >= modalPlacement.scrollYBottom){
            setModalPosition({top:modalTop, left:modalPlacement.bottomLeft});
        }

    }

    useEffect(()=>{
        const modal = document.querySelector(`.trail-modal-${icon.name}`);
        console.log(modal);
        if(showModal){
            modal.style.top = `${modalPosition.top}px`;
            modal.style.left = `${modalPosition.left}vw`;
        }

    }, [modalPosition]);

    return(
        <>
            <div ref={iconRef} className={`trail__div trail__div-${icon.name}`} >
                {/* <img onMouseEnter={(event)=>toggleModal(event,true, icon.name)} onMouseLeave={(event)=>{toggleModal(event,false)}} className= "trail-icon" id={icon.id} src={icon.image} alt={icon.alt} /> */}
                <img onClick={(event)=>toggleModal(event,true, icon.name)} className= "trail-icon" id={icon.id} src={icon.image} alt={icon.alt} />
                <p className="trail-title">{icon.title}</p>
            </div>
            {showModal && <TrailModal icon={icon} onCloseRequest={() => setShowModal(false)}/>}

        </>
    )
}
export default TrailIcon
