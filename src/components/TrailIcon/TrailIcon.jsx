import React, {useState} from 'react'
import './TrailIcon.scss';

function TrailIcon({icon}) {

    const [showModal, setShowModal] = useState(false);

    const openModal = (event) => {
        setShowModal(true);
    }
    const closeModal = (event) => {
        setShowModal(false);
    }
    return(
        <>
            <div onMouseEnter={openModal} onMouseLeave={closeModal} className={`trail__div trail__div-${icon.name}`} >
                <img className= "trail-icon" id={icon.id} src={icon.image} alt={icon.alt} />
                <p className="trail-title">{icon.title}</p>
            </div>
            {showModal && 
                <div className="trail-icon-modal"> 
                    <p>{icon.content}</p>
                </div>
            }
        </>
    )
}
export default TrailIcon
