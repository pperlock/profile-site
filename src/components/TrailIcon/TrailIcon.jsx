import React, {useState} from 'react'
import './TrailIcon.scss';

import TrailModal from '../TrailModal/TrailModal';

/**
 * Props Passed in from Experience
 * @param {Object} icon
*/

function TrailIcon({icon}) {

    //use state to determine if the modal is visibile or not
    const [showModal, setShowModal] = useState(false);
    const [modalHorizontal, setModalHorizontal] = useState("right")
    const [modalTop, setModalTop] = useState(null);
    
    const toggleModal = (event,action) => {
        setShowModal(action);
        // console.log("scroll", window.scrollY);
        // console.log("page", event.pageY);
        // console.log("diff", event.pageY - (window.scrollY));
        // console.log("window height",  window.innerHeight);
        // console.log("ratio", (event.pageY - window.scrollY)/window.innerHeight);
        // console.log("modaltop ", modalTop)
  
        window.innerWidth === 320 ? setModalTop(window.scrollY + 150) : setModalTop(icon.name=== "hiker" ? window.scrollY + 200 : window.scrollY + 300);

        if((event.pageY - window.scrollY)/window.innerHeight >= 0.3 && (event.pageY - window.scrollY)/window.innerHeight <= 0.57){
            setModalHorizontal("right");
        }else if((event.pageY - window.scrollY)/window.innerHeight > 0.57 && (event.pageY - window.scrollY)/window.innerHeight <= 0.75){
            setModalHorizontal("left");
        }else{
            setModalHorizontal("right");
        }
    }

    return(
        <>
            <div className={`trail__div trail__div-${icon.name}`} >
                <img onClick={(event) => toggleModal(event, true)} className= "trail-icon" id={icon.id} src={icon.image} alt={icon.alt}/>
                <p className="trail-title">{icon.title}</p>
            </div>
            {showModal && <TrailModal icon={icon} onCloseRequest={() => setShowModal(false)} modalHorizontal={modalHorizontal} modalTop={modalTop}/>}

        </>
    )
}
export default TrailIcon
